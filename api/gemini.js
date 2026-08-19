module.exports = async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(503).json({ error: 'Server AI key not configured. Add GEMINI_API_KEY to Vercel environment variables.' });
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
            const errData = await fetchRes.json();
            // Google usually returns 429 for rate limit exhaustion
            return res.status(fetchRes.status).json({ error: errData.error?.message || 'Upstream API Error' });
        }

        const data = await fetchRes.json();
        return res.status(200).json(data);

    } catch (error) {
        console.error('Vercel API Proxy Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
