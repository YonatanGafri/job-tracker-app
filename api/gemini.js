const SUPABASE_URL = process.env.SUPABASE_URL || 'https://egkngpirzltasmwtaaoh.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_SlWN11S3FN6SwKOBd-Mo4w_noex9QpI';

const RATE_LIMIT_MINUTE = 3;
const RATE_LIMIT_DAY = 25;

async function verifySupabaseUser(authHeader) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return { user: null, token: null };
    }
    const token = authHeader.replace('Bearer ', '').trim();
    if (!token) return { user: null, token: null };

    try {
        const authRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'apikey': SUPABASE_ANON_KEY
            }
        });
        if (!authRes.ok) return { user: null, token: null };
        const userData = await authRes.json();
        return { user: userData?.id ? userData : null, token };
    } catch (e) {
        console.error('Supabase Auth Verification Error:', e);
        return { user: null, token: null };
    }
}

async function checkDbRateLimit(userId, token) {
    try {
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        
        // Single fast query fetching recent timestamps in the last 24h (~20-40ms with index)
        const usageRes = await fetch(
            `${SUPABASE_URL}/rest/v1/ai_usage?user_id=eq.${userId}&created_at=gte.${oneDayAgo}&select=created_at`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'apikey': SUPABASE_ANON_KEY
                }
            }
        );

        if (!usageRes.ok) {
            console.warn('ai_usage table check returned status:', usageRes.status);
            return { allowed: true }; // Fallback gracefully if table not accessible
        }

        const logs = await usageRes.json();
        if (!Array.isArray(logs)) return { allowed: true };

        // 1. Check daily limit (last 24h)
        if (logs.length >= RATE_LIMIT_DAY) {
            return {
                allowed: false,
                code: 'RATE_LIMIT_DAILY_EXCEEDED',
                message: 'Daily AI limit reached (25 requests per day). You can add your own free Gemini API Key in Settings to continue without limits.'
            };
        }

        // 2. Check minute limit (last 60s)
        const oneMinuteAgoMs = Date.now() - 60 * 1000;
        const minuteCount = logs.filter(l => new Date(l.created_at).getTime() >= oneMinuteAgoMs).length;
        if (minuteCount >= RATE_LIMIT_MINUTE) {
            return {
                allowed: false,
                code: 'RATE_LIMIT_MINUTE_EXCEEDED',
                message: 'Too many requests. Please wait a minute before analyzing another job description.'
            };
        }

        return { allowed: true };
    } catch (err) {
        console.error('Error checking DB rate limit:', err);
        return { allowed: true }; // Graceful degradation
    }
}

async function recordUsage(userId, token) {
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/ai_usage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'apikey': SUPABASE_ANON_KEY,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({ user_id: userId })
        });
    } catch (err) {
        console.error('Error recording AI usage log:', err);
    }
}

module.exports = async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { prompt } = req.body || {};
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    // 1. Verify User Authentication
    const authHeader = req.headers.authorization || req.headers.Authorization;
    const { user, token } = await verifySupabaseUser(authHeader);
    if (!user) {
        return res.status(401).json({
            error: 'Unauthorized: You must be logged in to use the AI analysis feature.',
            code: 'AUTH_REQUIRED'
        });
    }

    // 2. Check Database Rate Limit (Persistent across all serverless restarts)
    const rateCheck = await checkDbRateLimit(user.id, token);
    if (!rateCheck.allowed) {
        return res.status(429).json({
            error: rateCheck.message,
            code: rateCheck.code
        });
    }

    // 3. Check Server AI Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(503).json({
            error: 'Server AI key not configured. Add GEMINI_API_KEY to Vercel environment variables or enter your private key in Settings.',
            code: 'SERVER_KEY_MISSING'
        });
    }

    try {
        const fetchRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    response_mime_type: 'application/json'
                }
            })
        });

        if (!fetchRes.ok) {
            const errData = await fetchRes.json().catch(() => ({}));
            return res.status(fetchRes.status).json({
                error: errData.error?.message || 'Upstream Google AI API Error',
                code: fetchRes.status === 429 ? 'COMMUNITY_POOL_FULL' : 'UPSTREAM_ERROR'
            });
        }

        const data = await fetchRes.json();

        // Record successful usage in DB (runs fast in background)
        recordUsage(user.id, token);

        return res.status(200).json(data);

    } catch (error) {
        console.error('Vercel API Proxy Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
