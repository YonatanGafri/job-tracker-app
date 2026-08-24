// ==========================================
// SUPABASE CLIENT INITIALIZATION & CONFIG
// ==========================================
const SUPABASE_URL = 'https://egkngpirzltasmwtaaoh.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_SlWN11S3FN6SwKOBd-Mo4w_noex9QpI';

const supabaseClient = (typeof window !== 'undefined' && window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY)
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

// ==========================================
// I18N / TRANSLATIONS
// ==========================================
const TRANSLATIONS = {
    en: {
        app_title: "Track Your APP",
        app_tagline: "Application pipeline & interview preparation hub.",
        logout: "Log Out",
        new_application: "New Application",
        settings_title: "Settings & Preferences",
        ai_settings_title: "AI Copilot Configuration",
        ai_settings_desc: "The AI Copilot uses a shared free community tier by default. If the public pool is full, you can enter your own free Google Gemini API Key.",
        api_key_label: "Your Private Gemini API Key (Optional)",
        get_free_key: "Get a free key at",
        security_note_title: "Security Note:",
        security_note_text: "Your key is saved locally in your browser. All AI requests bypass our servers and go straight to Google.",
        language_settings_title: "Language & AI Output",
        interface_language: "Interface Language",
        ai_output_language: "AI Analysis Language",
        ai_lang_auto: "Match Interface Language (Recommended)",
        ai_lang_he: "Hebrew (עברית)",
        ai_lang_en: "English",
        security_password_title: "Account Security & Password",
        new_password_label: "New Password",
        confirm_new_password_label: "Confirm New Password",
        update_password_btn: "Update Password",
        save_settings_btn: "Save Settings",
        stat_total: "Total Applications",
        stat_interviews: "In Interviews",
        stat_offers: "Offers Received",
        my_documents: "My Documents",
        add_document: "Add Document",
        reminders_title: "Reminders & Quick Notes",
        reminder_placeholder: "Add a reminder (e.g. Follow up with Elad regarding Google, check status on Apple...)",
        add_note: "Add Note",
        recent_applications: "Recent Applications",
        search_placeholder: "Search...",
        export_btn: "Export",
        export_csv: "Download Excel / CSV",
        copy_tsv: "Copy for Excel / Sheets",
        export_json: "Backup All Data (JSON)",
        import_json: "Restore from JSON...",
        show_archived: "Show Archived",
        col_company: "Company",
        col_title: "Job Title",
        col_summary: "Role Summary",
        col_location: "Location",
        col_status: "Status",
        col_date: "Date Applied",
        col_actions: "Actions",
        empty_title: "Welcome to Track Your APP!",
        empty_desc: "Manage your applications, tailored CVs, and AI interview prep guides all in one secure workspace.",
        how_it_works_title: "How It Works in 4 Simple Steps",
        step1_title: "1. Document Versions & CVs",
        step1_desc: "Store tailored CVs, transcripts & cover letters with fast Drive links and version changelogs.",
        step2_title: "2. Paste Job & AI Match",
        step2_desc: "Paste raw job descriptions to extract company details and compute an instant CV match score.",
        step3_title: "3. Targeted Interview Prep",
        step3_desc: "Receive MUST PREPARE technical topics, GOOD TO KNOW bonus points, and tailored pitch strategies.",
        step4_title: "4. Recruiter Call Readiness",
        step4_desc: "Recruiter called unexpectedly? Open the app in 2 seconds to know the product, role & key talking points!",
        load_demo_btn: "See How It Works (Load Demo)",
        guest_explore_btn: "Explore Demo without Sign-in",
        guide_btn: "How It Works",
        demo_banner_title: "Demo Mode Active (Sample Data)",
        demo_banner_desc: "Exploring sample CVs, an active application, and an AI prep guide. Click the job below to view details, or clear demo data anytime.",
        clear_demo_btn: "Clear Demo Data",
        modal_job_title: "Add New Application",
        ai_autofill_title: "Smart AI Auto-Fill",
        ai_autofill_desc: "Paste the raw Job Description text below, and the AI will analyze it against your CV, calculate a match score, and auto-populate your entire preparation guide.",
        ai_jd_placeholder: "Paste the full job description text here...",
        select_cv_prompt: "-- Select your CV to compare against --",
        generate_profile_btn: "Generate Profile",
        ai_analyzing: "Analyzing Job Description...",
        match_score_label: "Match Score:",
        ai_feedback_question: "Did this analysis help you?",
        yes: "Yes",
        no: "No",
        ai_feedback_placeholder: "Optional short note or suggestion...",
        send_feedback_btn: "Send",
        ai_feedback_thanks: "Thank you for your feedback!",
        company_name: "Company Name",
        job_title: "Job Title & Type",
        location_label: "Location",
        application_date: "Application Date",
        cv_version_sent: "CV Version Sent",
        status_label: "Status",
        status_to_apply: "To Apply",
        status_applied: "Applied",
        status_referral_submitted: "Referral Submitted",
        status_screening: "Screening (Phone/HR)",
        status_tech_interview: "Technical Interview",
        status_offer: "Offer",
        status_not_relevant: "Not Relevant",
        status_rejected: "Rejected",
        click_to_change_status: "Click to change status",
        status_updated_to: "Status updated to: ",
        change_status_title: "Change Status",
        referral_label: "Referral / Contact Person",
        company_product_label: "Company & Product Domain",
        jd_summary_label: "Role Description (Your Words)",
        jd_link_label: "Link to Job Posting",
        ai_prep_synthesis: "AI Prep Synthesis",
        must_have_label: "🔴 MUST PREPARE (Technical Topics)",
        good_to_have_label: "🟡 GOOD TO KNOW (Bonus Topics)",
        notes_label: "💡 Tailored Pitch / Action Items",
        cancel_btn: "Cancel",
        save_application_btn: "Save Application",
        delete_entry_btn: "Delete Entry",
        edit_entry_btn: "Edit",
        add_new_doc_title: "Add New Document",
        doc_type: "Document Type",
        doc_type_cv: "CV / Resume",
        doc_type_transcript: "Transcript / Grades Sheet",
        doc_type_cover_letter: "Cover Letter",
        doc_type_certificate: "Certificate / Portfolio",
        doc_type_other: "Other",
        doc_version_title: "Version / Title",
        doc_date: "Date",
        pdf_doc_label: "PDF Document (Optional)",
        ai_parsed_status: "AI Parsed",
        remove_text: "Remove Text",
        choose_pdf: "Choose PDF",
        no_file_chosen: "No file chosen",
        consent_ai_parsing: "Consent to AI CV parsing",
        link_to_doc: "Link to Document (Optional)",
        doc_description: "Description / Changes",
        save_document_btn: "Save Document",
        auth_subtitle: "Log in to sync your applications and notes across all your devices.",
        continue_with_google: "Continue with Google",
        or_email_password: "or email & password",
        tab_login: "Log In",
        tab_signup: "Sign Up",
        email_address: "Email Address",
        password_label: "Password",
        forgot_password_link: "Forgot Password?",
        agree_to_terms_prefix: "I agree to the",
        privacy_terms_link: "Privacy Policy & Terms",
        agree_to_terms_suffix: "My data is isolated & secure.",
        reset_password_title: "Reset Password",
        reset_password_desc: "Enter your account email address below, and we will send you a secure password reset link.",
        send_reset_link_btn: "Send Reset Link",
        a11y_modal_title: "Accessibility Statement",
        privacy_modal_title: "Privacy & Terms of Use",
        danger_zone: "Danger zone:",
        delete_all_data: "Delete All My Data",
        footer_github: "Open Source on GitHub",
        footer_feedback: "Give Feedback",
        footer_accessibility: "Accessibility Statement",
        footer_privacy: "Privacy & Terms of Use",
        feedback_modal_title: "Give Feedback",
        feedback_modal_desc: "Have feedback, a feature request, or an issue? Send a direct message and we'll receive it directly by email.",
        feedback_category_label: "Category",
        feedback_cat_general: "💡 General Feedback",
        feedback_cat_feature: "✨ Feature Request",
        feedback_cat_bug: "🐞 Bug Report",
        feedback_cat_ai: "🤖 AI Analysis Quality",
        feedback_cat_other: "📝 Other Inquiry",
        feedback_message_label: "Your Message",
        feedback_message_placeholder: "Share your feedback, ideas, or issues...",
        send_feedback_btn_text: "Send Feedback",
        sending_feedback: "Sending...",
        feedback_success: "Thank you! Your feedback has been sent successfully.",
        feedback_error: "Failed to send feedback. Please try again.",
        view_and_prep: "View & Prep",
        archive: "Archive",
        unarchive: "Unarchive",
        doc_changes_label: "Changes:",
        none: "None",
        open_link: "Open Link",
        edit_document: "Edit Document",
        delete_document: "Delete Document",
        no_docs_uploaded: "No documents uploaded yet. Click '+ Add Document' above to attach your CV, Transcripts, or Cover Letters.",
        doc_type_cv_short: "CV / Resume",
        doc_type_transcript_short: "Transcript",
        doc_type_cover_letter_short: "Cover Letter",
        doc_type_certificate_short: "Certificate",
        doc_type_other_short: "Other",
        ai_error_auth_required: "You must be logged in to use the AI assistant.",
        ai_error_minute_limit: "Rate limit reached (max 3 requests per minute). Please wait a minute and try again.",
        ai_error_daily_limit: "Daily AI limit reached (25 requests per day). Add your own free Gemini API key in Settings to continue without limits.",
        ai_error_pool_full: "The public community pool is temporarily full. You can enter your own free Gemini API key in Settings to continue immediately.",
        got_it_btn: "Got It"
    },
    he: {
        app_title: "Track Your APP",
        app_tagline: "מערכת מעקב מועמדויות, קורות חיים והכנה לראיונות מבוססת AI",
        logout: "התנתק",
        new_application: "הגשת מועמדות חדשה",
        settings_title: "הגדרות והעדפות",
        ai_settings_title: "הגדרות סוכן AI",
        ai_settings_desc: "סוכן ה-AI עובד כברירת מחדל עם מפתח שיתופי חינמי. אם המאגר הציבורי עמוס, תוכל להזין מפתח Google Gemini API פרטי משלך בחינם.",
        api_key_label: "מפתח Gemini API פרטי (אופציונלי)",
        get_free_key: "הוצא מפתח חינם ב-",
        security_note_title: "הערת אבטחה:",
        security_note_text: "המפתח נשמר מקומית בדפדפן בלבד (Local Storage). כל הקריאות נשלחות ישירות מול גוגל.",
        language_settings_title: "שפה ופלט AI",
        interface_language: "שפת ממשק",
        ai_output_language: "שפת תשובת ה-AI",
        ai_lang_auto: "התאם לשפת הממשק (מומלץ)",
        ai_lang_he: "עברית",
        ai_lang_en: "אנגלית (English)",
        security_password_title: "אבטחת חשבון ושינוי סיסמה",
        new_password_label: "סיסמה חדשה",
        confirm_new_password_label: "אימות סיסמה חדשה",
        update_password_btn: "עדכן סיסמה",
        save_settings_btn: "שמור הגדרות",
        stat_total: "סה״כ מועמדויות",
        stat_interviews: "בתהליך ראיונות",
        stat_offers: "הצעות שהתקבלו",
        my_documents: "המסמכים שלי",
        add_document: "הוסף מסמך",
        reminders_title: "תזכורות והערות מהירות",
        reminder_placeholder: "הוסף תזכורת (לדוגמה: פולו-אפ עם אלעד מגוגל, בדיקת סטטוס באפל...)",
        add_note: "הוסף הערה",
        recent_applications: "מועמדויות אחרונות",
        search_placeholder: "חיפוש משרה, חברה...",
        export_btn: "ייצוא",
        export_csv: "הורדה כ-Excel / CSV",
        copy_tsv: "העתקה ל-Sheets / Excel",
        export_json: "גיבוי כל המידע (JSON)",
        import_json: "שחזור מקובץ JSON...",
        show_archived: "הצג משרות בארכיון",
        col_company: "חברה",
        col_title: "תפקיד",
        col_summary: "תקציר משרה",
        col_location: "מיקום",
        col_status: "סטטוס",
        col_date: "תאריך הגשה",
        col_actions: "פעולות",
        empty_title: "ברוכים הבאים ל-Track Your APP!",
        empty_desc: "נהל את כל המועמדויות, גרסאות קורות החיים וההכנה לראיונות ב-AI במקום אחד מסודר ומאובטח.",
        how_it_works_title: "איך זה עובד ב-4 שלבים פשוטים?",
        step1_title: "1. ניהול מסמכים וגרסאות קו\"ח",
        step1_desc: "שמור גרסאות קו\"ח מותאמות (Full-Stack, Backend), גיליונות ציונים ו-Cover Letters עם קישורי Drive מהירים והיסטוריית שינויים.",
        step2_title: "2. הדבקת משרה וניתוח AI",
        step2_desc: "הדבק תיאור משרה מלינקדאין או מאתר החברה וקבל זיהוי אוטומטי של החברה, התפקיד וציון התאמה (Match Score) מול הקו\"ח שלך.",
        step3_title: "3. הכנה ממוקדת לראיון",
        step3_desc: "קבל נושאי חובה טכניים (MUST PREPARE), נושאי בונוס (GOOD TO KNOW) וטיפים אישיים לפרויקטים שמומלץ להדגיש בראיון.",
        step4_title: "4. מעקב ושליטה בשיחת טלפון",
        step4_desc: "מקבלים טלפון מצוות הגיוס? פותחים מיד את המערכת ויודעים בדיוק: מה המוצר של החברה, מה התפקיד ומה להדגיש – בלי להתרוצץ ולחפש מודעות שנמחקו מהרשת!",
        load_demo_btn: "רוצה לראות איך זה עובד? (טען נתוני דוגמה)",
        guest_explore_btn: "התנסה בדמו ללא הרשמה",
        guide_btn: "איך זה עובד?",
        demo_banner_title: "🔎 מצב הדגמה פעיל (נתוני דוגמה)",
        demo_banner_desc: "נטענו נתוני דוגמה: 2 מסמכים, מועמדות פעילה וסינתזת הכנה לראיון ב-AI. לחץ על המשרה בטבלה לצפייה, או נקה את הדמו בכל רגע.",
        clear_demo_btn: "נקה נתוני דוגמה והתחל לעבוד",
        modal_job_title: "הוספת מועמדות חדשה",
        ai_autofill_title: "מילוי חכם באמצעות AI",
        ai_autofill_desc: "הדבק את תיאור המשרה (Job Description), וה-AI ינתח מול קורות החיים שלך, יחשב ציון התאמה, וימלא עבורך מדריך הכנה מקיף לראיון.",
        ai_jd_placeholder: "הדבק כאן את תיאור המשרה המלא...",
        select_cv_prompt: "-- בחר קורות חיים להשוואה --",
        generate_profile_btn: "נתח והכן פרופיל",
        ai_analyzing: "ה-AI מנתח את תיאור המשרה...",
        match_score_label: "ציון התאמה:",
        ai_feedback_question: "האם הניתוח היה מדויק ועזר לך?",
        yes: "כן 👍",
        no: "לא מדויק 👎",
        ai_feedback_placeholder: "הערה קצרה או הצעה לשיפור (אופציונלי)...",
        send_feedback_btn: "שלח משוב",
        ai_feedback_thanks: "תודה רבה על המשוב!",
        company_name: "שם החברה",
        job_title: "כותרת התפקיד והיקף",
        location_label: "מיקום",
        application_date: "תאריך הגשה",
        cv_version_sent: "גרסת קורות חיים שנשלחה",
        status_label: "סטטוס",
        status_to_apply: "להגיש (To Apply)",
        status_applied: "הוגש (Applied)",
        status_referral_submitted: "הוגש דרך חבר (Referral)",
        status_screening: "סינון ראשוני / HR",
        status_tech_interview: "ראיון טכני",
        status_offer: "הצעת שכר (Offer)",
        status_not_relevant: "לא רלוונטי",
        status_rejected: "נדחה",
        click_to_change_status: "לחץ לשינוי סטטוס",
        status_updated_to: "הסטטוס עודכן ל: ",
        change_status_title: "עדכון סטטוס",
        referral_label: "איש קשר / מפנה (Referral)",
        company_product_label: "מוצר החברה ותחום פעילות",
        jd_summary_label: "תיאור התפקיד (במילים שלך)",
        jd_link_label: "קישור למודעת הדרושים",
        ai_prep_synthesis: "דגשי הכנה לראיון מבוססי AI",
        must_have_label: "🔴 חובה להכין (דרישות סף טכניות)",
        good_to_have_label: "🟡 כדאי לדעת (יתרונות ובונוסים)",
        notes_label: "💡 פיץ' אישי / פרויקטים להדגשה בראיון",
        cancel_btn: "ביטול",
        save_application_btn: "שמור מועמדות",
        delete_entry_btn: "מחק משרה",
        edit_entry_btn: "ערוך",
        add_new_doc_title: "הוספת מסמך חדש",
        doc_type: "סוג מסמך",
        doc_type_cv: "קורות חיים (CV)",
        doc_type_transcript: "גיליון ציונים",
        doc_type_cover_letter: "מכתב מקדים",
        doc_type_certificate: "תעודה / תיק עבודות",
        doc_type_other: "אחר",
        doc_version_title: "שם גרסה / כותרת",
        doc_date: "תאריך",
        pdf_doc_label: "קובץ PDF (אופציונלי)",
        ai_parsed_status: "פוענח ע״י AI",
        remove_text: "הסר טקסט",
        choose_pdf: "בחר קובץ PDF",
        no_file_chosen: "לא נבחר קובץ",
        consent_ai_parsing: "מאשר פענוח AI לקורות החיים",
        link_to_doc: "קישור למסמך (Google Drive וכד')",
        doc_description: "תיאור / שינויים שבוצעו",
        save_document_btn: "שמור מסמך",
        auth_subtitle: "התחבר כדי לסנכרן את המועמדויות וההערות שלך בין כל המכשירים.",
        continue_with_google: "המשך באמצעות Google",
        or_email_password: "או באמצעות אימייל וסיסמה",
        tab_login: "התחברות",
        tab_signup: "הרשמה",
        email_address: "כתובת אימייל",
        password_label: "סיסמה",
        forgot_password_link: "שכחת סיסמה?",
        agree_to_terms_prefix: "אני מסכים ל",
        privacy_terms_link: "תנאי השימוש ומדיניות הפרטיות",
        agree_to_terms_suffix: "המידע שלי מוגן ומבודד.",
        reset_password_title: "שחזור סיסמה",
        reset_password_desc: "הזן את כתובת האימייל שלך ונשלח לך קישור מאובטח לאיפוס הסיסמה.",
        send_reset_link_btn: "שלח קישור לאיפוס",
        a11y_modal_title: "הצהרת נגישות",
        privacy_modal_title: "מדיניות פרטיות ותנאי שימוש",
        danger_zone: "אזור מחיקה:",
        delete_all_data: "מחק לצמיתות את כל המידע שלי",
        footer_github: "קוד פתוח ב-GitHub",
        footer_feedback: "Give Feedback (משוב)",
        footer_accessibility: "הצהרת נגישות",
        footer_privacy: "מדיניות פרטיות ותנאי שימוש",
        feedback_modal_title: "Give Feedback",
        feedback_modal_desc: "יש לך משוב, הצעה לשיפור, רעיון או תקלה? שלח הודעה ישירה ונשמח לעזור ולשפר!",
        feedback_category_label: "נושא הפנייה",
        feedback_cat_general: "💡 משוב כללי",
        feedback_cat_feature: "✨ בקשת פיצ'ר / רעיון חדש",
        feedback_cat_bug: "🐞 דיווח על באג / תקלה",
        feedback_cat_ai: "🤖 איכות תוצרי ה-AI",
        feedback_cat_other: "📝 פנייה אחרת",
        feedback_message_label: "תוכן ההודעה",
        feedback_message_placeholder: "כתוב כאן את המשוב, ההערה או השאלה שלך...",
        send_feedback_btn_text: "שלח משוב",
        sending_feedback: "שולח...",
        feedback_success: "תודה רבה! המשוב שלך נשלח בהצלחה למפתח.",
        feedback_error: "שליחת המשוב נכשלה. אנא נסה שוב.",
        view_and_prep: "צפייה והכנה",
        archive: "העבר לארכיון",
        unarchive: "החזר מארכיון",
        doc_changes_label: "שינויים / פירוט:",
        none: "אין",
        open_link: "פתח קישור",
        edit_document: "ערוך מסמך",
        delete_document: "מחק מסמך",
        no_docs_uploaded: "עדיין לא הועלו מסמכים. לחץ על '+ הוסף מסמך' למעלה כדי לצרף קורות חיים, גיליונות ציונים או מכתבים מקדימים.",
        doc_type_cv_short: "קורות חיים",
        doc_type_transcript_short: "גיליון ציונים",
        doc_type_cover_letter_short: "מכתב מקדים",
        doc_type_certificate_short: "תעודה / תיק עבודות",
        doc_type_other_short: "אחר",
        ai_error_auth_required: "יש להתחבר למערכת כדי להשתמש בניתוח ה-AI.",
        ai_error_minute_limit: "נשלחו יותר מדי בקשות בזמן קצר (הגבלה של 3 בדקה). אנא המתן דקה ונסה שוב.",
        ai_error_daily_limit: "הגעת למכסה היומית (25 ניתוחים ביום). תוכל להוסיף מפתח Gemini אישי בחינם בהגדרות כדי להמשיך ללא הגבלה.",
        ai_error_pool_full: "השרת הציבורי עמוס כרגע (המכסה החינמית מוצתה). כדי להמשיך להשתמש מיד, הירשם בחינם ל-Gemini ושם את המפתח הפרטי שלך בהגדרות (Settings).",
        got_it_btn: "הבנתי, סגור"
    }
};

function detectInitialLanguage() {
    const saved = localStorage.getItem('appLang');
    if (saved) return saved;

    const languages = navigator.languages || [navigator.language || navigator.userLanguage || ''];
    for (const lang of languages) {
        if (lang && lang.toLowerCase().startsWith('he')) {
            return 'he';
        }
    }
    return 'en';
}

let currentLang = detectInitialLanguage();
let aiOutputLang = localStorage.getItem('aiLang') || 'auto';

function t(key, defaultVal = '') {
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
        return TRANSLATIONS[currentLang][key];
    }
    if (TRANSLATIONS.en && TRANSLATIONS.en[key]) {
        return TRANSLATIONS.en[key];
    }
    return defaultVal || key;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'he' ? 'rtl' : 'ltr');

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
            el.textContent = TRANSLATIONS[currentLang][key];
        }
    });

    // Update all elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key && TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
            el.placeholder = TRANSLATIONS[currentLang][key];
        }
    });

    // Update language-specific content blocks (e.g. Accessibility & Privacy modals)
    document.querySelectorAll('.lang-content-he').forEach(el => {
        el.style.display = (lang === 'he' ? 'block' : 'none');
    });
    document.querySelectorAll('.lang-content-en').forEach(el => {
        el.style.display = (lang === 'en' ? 'block' : 'none');
    });

    // Update Language Toggle Button
    const langBtnText = document.getElementById('langBtnText');
    if (langBtnText) {
        langBtnText.textContent = (lang === 'he' ? 'English' : 'עברית');
    }

    const siteLangSelect = document.getElementById('siteLanguageSelect');
    if (siteLangSelect) {
        siteLangSelect.value = lang;
    }

    // If demo mode is active, reload sample data in the new language
    if (isDemoMode && typeof getSampleData === 'function') {
        const sample = getSampleData(lang);
        jobs = [...sample.jobs];
        documents = [...sample.documents];
        reminders = [...sample.reminders];
    }

    // Refresh UI components
    if (typeof renderStatusFilters === 'function') renderStatusFilters();
    if (typeof renderJobs === 'function') renderJobs();
    if (typeof renderDocs === 'function') renderDocs();
    if (typeof renderRemindersUI === 'function') renderRemindersUI();
    if (typeof updateStats === 'function') updateStats();
    if (typeof updateAiCvSelect === 'function') updateAiCvSelect();

    if (window.va) {
        window.va('event', { name: 'language_changed', lang });
    }
}

// ==========================================
// APPLICATION STATE
// ==========================================
let currentUser = null;
let jobs = [];
let documents = [];
let reminders = [];

let isDemoMode = false;
let realUserDataBackup = { jobs: [], documents: [], reminders: [] };

let currentEditingId = null;
let currentSortColumn = 'date';
let currentSortDirection = 'desc';
let activeStatusFilters = new Set();

// ==========================================
// DOM ELEMENTS
// ==========================================
// Header & Language Elements
const langToggleBtn = document.getElementById('langToggleBtn');

// Auth Elements
const authModal = document.getElementById('authModal');
const authForm = document.getElementById('authForm');
const authEmail = document.getElementById('authEmail');
const authPassword = document.getElementById('authPassword');
const authSubmitBtn = document.getElementById('authSubmitBtn');
const authBtnText = document.getElementById('authBtnText');
const authError = document.getElementById('authError');
const authSuccess = document.getElementById('authSuccess');
const authSubtitle = document.getElementById('authSubtitle');
const tabLogin = document.getElementById('tabLogin');
const tabSignUp = document.getElementById('tabSignUp');
const userBadge = document.getElementById('userBadge');
const userEmail = document.getElementById('userEmail');
const logoutBtn = document.getElementById('logoutBtn');

// Forgot Password Modal Elements
const openForgotPasswordBtn = document.getElementById('openForgotPasswordBtn');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const closeForgotModalBtn = document.getElementById('closeForgotModalBtn');
const cancelForgotBtn = document.getElementById('cancelForgotBtn');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const forgotEmail = document.getElementById('forgotEmail');
const forgotPasswordStatus = document.getElementById('forgotPasswordStatus');
const sendResetEmailBtn = document.getElementById('sendResetEmailBtn');

// Accessibility Modal Elements
const accessibilityModal = document.getElementById('accessibilityModal');
const footerAccessibilityBtn = document.getElementById('footerAccessibilityBtn');
const closeAccessibilityModalBtn = document.getElementById('closeAccessibilityModalBtn');

// Give Feedback Modal Elements
const feedbackModal = document.getElementById('feedbackModal');
const footerFeedbackBtn = document.getElementById('footerFeedbackBtn');
const closeFeedbackModalBtn = document.getElementById('closeFeedbackModalBtn');
const cancelFeedbackBtn = document.getElementById('cancelFeedbackBtn');
const feedbackForm = document.getElementById('feedbackForm');
const feedbackCategory = document.getElementById('feedbackCategory');
const feedbackMessage = document.getElementById('feedbackMessage');
const feedbackStatus = document.getElementById('feedbackStatus');
const sendFeedbackSubmitBtn = document.getElementById('sendFeedbackSubmitBtn');

// Dashboard Elements
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const jobModal = document.getElementById('jobModal');
const jobForm = document.getElementById('jobForm');
const cancelBtn = document.getElementById('cancelBtn');
const jobsList = document.getElementById('jobsList');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const showArchivedToggle = document.getElementById('showArchivedToggle');
const statusFiltersContainer = document.getElementById('statusFilters');

// Demo & Onboarding Elements
const demoBanner = document.getElementById('demoBanner');
const loadDemoBtn = document.getElementById('loadDemoBtn');
const emptyNewJobBtn = document.getElementById('emptyNewJobBtn');
const clearDemoBtn = document.getElementById('clearDemoBtn');

// View Modal Elements
const viewModal = document.getElementById('viewModal');
const closeViewModalBtn = document.getElementById('closeViewModalBtn');
const viewCompanyTitle = document.getElementById('view-company-title');
const viewBodyContent = document.getElementById('view-body-content');
const deleteJobBtn = document.getElementById('deleteJobBtn');
const editJobBtn = document.getElementById('editJobBtn');

// Settings & AI Copilot Elements
const openSettingsBtn = document.getElementById('openSettingsBtn');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const settingsModal = document.getElementById('settingsModal');
const geminiApiKeyInput = document.getElementById('geminiApiKey');
const siteLanguageSelect = document.getElementById('siteLanguageSelect');
const aiLanguageSelect = document.getElementById('aiLanguageSelect');
const accountSecuritySection = document.getElementById('accountSecuritySection');
const newPasswordInput = document.getElementById('newPassword');
const confirmNewPasswordInput = document.getElementById('confirmNewPassword');
const changePasswordBtn = document.getElementById('changePasswordBtn');
const changePasswordStatus = document.getElementById('changePasswordStatus');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const aiCvSelect = document.getElementById('aiCvSelect');
const aiRawJd = document.getElementById('aiRawJd');
const runAiBtn = document.getElementById('runAiBtn');
const aiLoading = document.getElementById('aiLoading');
const aiMatchResult = document.getElementById('aiMatchResult');
const aiMatchScore = document.getElementById('aiMatchScore');
const aiMatchRationale = document.getElementById('aiMatchRationale');

// AI Feedback Elements
const aiFeedbackBox = document.getElementById('aiFeedbackBox');
const aiFeedbackThumbUp = document.getElementById('aiFeedbackThumbUp');
const aiFeedbackThumbDown = document.getElementById('aiFeedbackThumbDown');
const aiFeedbackInputRow = document.getElementById('aiFeedbackInputRow');
const aiFeedbackComment = document.getElementById('aiFeedbackComment');
const aiSubmitFeedbackBtn = document.getElementById('aiSubmitFeedbackBtn');
const aiFeedbackSuccess = document.getElementById('aiFeedbackSuccess');
let currentAiFeedbackRating = null;

let userGeminiKey = localStorage.getItem('userGeminiKey') || '';

// Docs Elements
const docsList = document.getElementById('docsList');

// Reminders Elements
const remindersList = document.getElementById('remindersList');
const reminderForm = document.getElementById('reminderForm');
const reminderInput = document.getElementById('reminderInput');
const remindersCount = document.getElementById('remindersCount');

// Export Button
const exportBtn = document.getElementById('exportBtn');

// ==========================================
// DATA MAPPING HELPERS
// ==========================================
function mapJobFromDb(row) {
    return {
        id: row.id,
        company: row.company || '',
        title: row.title || '',
        location: row.location || '',
        date: row.date || '',
        cvVersion: row.cv_version || '',
        status: row.status || 'Applied',
        referral: row.referral || '-',
        jdLink: row.jd_link || '',
        jdSummary: row.jd_summary || '',
        companyProduct: row.company_product || '',
        mustHave: row.must_have || '',
        goodToHave: row.good_to_have || '',
        notes: row.notes || '',
        matchScore: row.match_score || '',
        matchRationale: row.match_rationale || '',
        archived: !!row.archived
    };
}

function mapJobToDb(job) {
    const row = {
        id: job.id,
        user_id: currentUser ? currentUser.id : undefined,
        company: job.company,
        title: job.title,
        location: job.location,
        date: job.date,
        cv_version: job.cvVersion,
        status: job.status,
        referral: job.referral,
        jd_link: job.jdLink,
        jd_summary: job.jdSummary,
        company_product: job.companyProduct,
        must_have: job.mustHave,
        good_to_have: job.goodToHave,
        notes: job.notes,
        archived: !!job.archived
    };
    if (job.matchScore) row.match_score = job.matchScore;
    if (job.matchRationale) row.match_rationale = job.matchRationale;
    return row;
}

function mapDocFromDb(row) {
    return {
        id: row.id,
        type: row.type || 'CV',
        version: row.version || '',
        date: row.date || '',
        link: row.link || '#',
        changeLog: row.change_log || '',
        parsedText: row.parsed_text || ''
    };
}

function mapDocToDb(doc) {
    return {
        id: doc.id,
        user_id: currentUser ? currentUser.id : undefined,
        type: doc.type,
        version: doc.version,
        date: doc.date,
        link: doc.link,
        change_log: doc.changeLog,
        parsed_text: doc.parsedText || null
    };
}


// ==========================================
// AUTHENTICATION LOGIC
// ==========================================
let authMode = 'login'; // 'login' or 'signup'

function setAuthMode(mode) {
    authMode = mode;
    authError.style.display = 'none';
    authSuccess.style.display = 'none';
    
    const privacyConsent = document.getElementById('privacyConsent');
    const consentGroup = privacyConsent ? privacyConsent.closest('.consent-group') : null;

    if (mode === 'login') {
        tabLogin.classList.add('active');
        tabSignUp.classList.remove('active');
        authBtnText.textContent = 'Log In';
        authSubtitle.textContent = 'Log in to sync your applications and notes across all your devices.';
        
        if (consentGroup) consentGroup.style.display = 'none';
        if (privacyConsent) privacyConsent.required = false;
        if (openForgotPasswordBtn && openForgotPasswordBtn.parentElement) {
            openForgotPasswordBtn.parentElement.style.display = 'flex';
        }
    } else {
        tabSignUp.classList.add('active');
        tabLogin.classList.remove('active');
        authBtnText.textContent = 'Create Account';
        authSubtitle.textContent = 'Create an account to protect and sync your job tracker in real-time.';
        
        if (consentGroup) consentGroup.style.display = 'flex';
        if (privacyConsent) privacyConsent.required = true;
        if (openForgotPasswordBtn && openForgotPasswordBtn.parentElement) {
            openForgotPasswordBtn.parentElement.style.display = 'none';
        }
    }
}

// Set initial state
setAuthMode('login');

if (tabLogin) tabLogin.addEventListener('click', () => setAuthMode('login'));
if (tabSignUp) tabSignUp.addEventListener('click', () => setAuthMode('signup'));

const googleAuthBtn = document.getElementById('googleAuthBtn');
const customGoogleBtn = document.getElementById('customGoogleBtn');
if (customGoogleBtn) {
    customGoogleBtn.addEventListener('click', async () => {
        // Generate a random nonce and hash it for Supabase
        const rawNonce = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('supabase_auth_nonce', rawNonce);
        
        const encoder = new TextEncoder();
        const encodedNonce = encoder.encode(rawNonce);
        const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce);
        const hashedNonce = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

        const clientId = "1088998151539-3n088kqpud9mbnd8va9g4nd5eafi48kr.apps.googleusercontent.com";
        const redirectUri = window.location.origin;
        const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=id_token&scope=email profile openid&nonce=${hashedNonce}`;
        window.location.href = url;
    });
}

// Check for Google ID Token in URL hash
if (window.location.hash.includes('id_token=')) {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const idToken = params.get('id_token');
    const rawNonce = localStorage.getItem('supabase_auth_nonce');
    if (idToken && rawNonce) {
        localStorage.removeItem('supabase_auth_nonce');
        window.history.replaceState(null, null, window.location.pathname);
        if (typeof showGlobalLoader === 'function') showGlobalLoader();
        
        setTimeout(async () => {
            try {
                const { data, error } = await supabaseClient.auth.signInWithIdToken({
                    provider: 'google',
                    token: idToken,
                    nonce: rawNonce
                });
                if (error) throw error;
                if (data && data.user) currentUser = data.user;
                handleAuthSuccess();
            } catch (err) {
                authError.textContent = err.message || 'Google sign-in error.';
                authError.style.display = 'block';
                if (typeof hideGlobalLoader === 'function') hideGlobalLoader();
            }
        }, 500);
    } else if (idToken) {
        // Fallback if nonce was lost
        authError.textContent = "Security session expired. Please try logging in again.";
        authError.style.display = 'block';
    }
}

if (authForm) {
    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = authEmail.value.trim();
        const password = authPassword.value;
        if (!email || !password) return;

        authError.style.display = 'none';
        authSuccess.style.display = 'none';
        authSubmitBtn.disabled = true;
        authBtnText.textContent = 'Connecting...';

        try {
            if (!supabaseClient) throw new Error('Supabase client not initialized.');

            if (authMode === 'signup') {
                const { data, error } = await supabaseClient.auth.signUp({ email, password });
                if (error) throw error;
                if (data.session) {
                    currentUser = data.session.user;
                    handleAuthSuccess();
                } else {
                    authSuccess.textContent = 'Account created! Please check your email for the verification link.';
                    authSuccess.style.display = 'block';
                    authForm.reset();
                    // Don't call setAuthMode('login') here because it clears the success message
                }
            } else {
                const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
                if (error) throw error;
                currentUser = data.session.user;
                handleAuthSuccess();
            }
        } catch (err) {
            authError.textContent = err.message || 'Authentication error. Please try again.';
            authError.style.display = 'block';
        } finally {
            authSubmitBtn.disabled = false;
            authBtnText.textContent = authMode === 'login' ? 'Log In' : 'Create Account';
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        try {
            if (supabaseClient) await supabaseClient.auth.signOut();
        } catch (err) {
            console.error('Sign out error:', err);
        }
        currentUser = null;
        userBadge.style.display = 'none';
        authModal.classList.add('active');
        jobs = [];
        documents = [];
        reminders = [];
        renderJobs();
        renderDocs();
        renderRemindersUI();
        updateStats();
    });
}

function handleAuthSuccess() {
    authModal.classList.remove('active');
    authForm.reset();
    userBadge.style.display = 'flex';
    userEmail.textContent = currentUser.email;
    if (window.location.hash && (window.location.hash === '#' || window.location.hash.includes('access_token') || window.location.hash.includes('refresh_token'))) {
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    }
    loadAllData();
}

// Check Session on page load
async function checkAuth() {
    if (!supabaseClient) {
        console.warn('Supabase not configured, using offline mock.');
        if (typeof hideGlobalLoader === 'function') hideGlobalLoader();
        return;
    }

    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session && session.user) {
            currentUser = session.user;
            handleAuthSuccess();
        } else {
            authModal.classList.add('active');
            if (typeof hideGlobalLoader === 'function') hideGlobalLoader();
        }

        supabaseClient.auth.onAuthStateChange((event, session) => {
            if (session && session.user) {
                currentUser = session.user;
                userBadge.style.display = 'flex';
                userEmail.textContent = currentUser.email;
                authModal.classList.remove('active');
                
                // Personalize CV placeholder if full name is available
                const fullName = currentUser.user_metadata?.full_name;
                const cvInput = document.getElementById('cvVersion');
                if (fullName && cvInput) {
                    const formattedName = fullName.trim().replace(/\s+/g, '_');
                    cvInput.placeholder = `e.g. ${formattedName}_CV_v4.pdf`;
                }
            } else {
                currentUser = null;
                userBadge.style.display = 'none';
                authModal.classList.add('active');
                if (typeof hideGlobalLoader === 'function') hideGlobalLoader();
            }
        });
    } catch (err) {
        console.error('Session check failed:', err);
        authModal.classList.add('active');
        if (typeof hideGlobalLoader === 'function') hideGlobalLoader();
    }
}

// ==========================================
// DATA LOADING & AUTO-MIGRATION
// ==========================================
async function loadAllData() {
    if (!supabaseClient || !currentUser) return;

    try {
        // 1. Fetch Jobs
        const { data: jobsData, error: jobsErr } = await supabaseClient
            .from('jobs')
            .select('*')
            .order('created_at', { ascending: false });

        if (jobsErr) console.error('Error fetching jobs:', jobsErr);
        jobs = (jobsData || []).map(mapJobFromDb);

        // 2. Fetch Documents
        const { data: docsData } = await supabaseClient
            .from('documents')
            .select('*')
            .order('created_at', { ascending: true });

        documents = (docsData || []).map(mapDocFromDb);

        // 3. Fetch Reminders
        const { data: remData } = await supabaseClient
            .from('reminders')
            .select('*')
            .order('created_at', { ascending: false });

        reminders = (remData || []).map(r => ({
            id: r.id,
            text: r.text,
            date: r.date,
            completed: !!r.completed
        }));

        // Render Dashboard
        renderStatusFilters();
        renderJobs();
        renderDocs();
        renderRemindersUI();
        updateStats();

    } catch (err) {
        console.error('Failed to load data:', err);
    } finally {
        hideGlobalLoader();
    }
}

function hideGlobalLoader() {
    const loader = document.getElementById('globalLoader');
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        setTimeout(() => {
            if (loader) loader.style.display = 'none';
        }, 400);
    }
}

// ==========================================
// DEMO MODE & ONBOARDING SAMPLE DATA
// ==========================================
function getSampleData(lang = currentLang) {
    const isHe = (lang === 'he');
    const today = new Date().toISOString().split('T')[0];

    return {
        documents: [
            {
                id: 'demo_doc_1',
                type: 'CV',
                version: isHe ? 'CV - מפתח Full-Stack (גרסה 2.4)' : 'CV - Full-Stack Developer (v2.4)',
                date: today,
                link: 'https://drive.google.com',
                changeLog: isHe ? 'הדגשת פרויקטים ב-React, Node.js ומסדי נתונים רלציוניים' : 'Highlighted React, Node.js & PostgreSQL distributed projects',
                parsedText: isHe 
                    ? 'יונתן כהן - מהנדס תוכנה / בוגר מדעי המחשב. ניסיון בפיתוח מערכות Full-Stack ב-React, Node.js, Express, PostgreSQL, Docker, Git. פיתוח REST APIs, עבודה עם ענן ומיקרו-שירותים.' 
                    : 'John Doe - Software Engineer / CS Graduate. Experience building full-stack web applications with React, Node.js, Express, PostgreSQL, Docker, and Git. REST APIs, cloud services, and microservices architecture.'
            },
            {
                id: 'demo_doc_2',
                type: 'Transcript',
                version: isHe ? 'גיליון ציונים אקדמי - מדעי המחשב' : 'Academic Transcript - Computer Science',
                date: today,
                link: 'https://drive.google.com',
                changeLog: isHe ? 'ממוצע 88 - קורסי מערכות הפעלה, מבני נתונים ואלגוריתמים' : 'GPA 88 - Operating Systems, Data Structures & Algorithms',
                parsedText: ''
            }
        ],
        jobs: [
            {
                id: 'demo_job_1',
                company: 'CyberGuard Innovations',
                title: isHe ? 'Junior Full-Stack Engineer (סטודנט / ג\'וניור)' : 'Junior Full-Stack Engineer (Student / Junior)',
                location: isHe ? 'תל אביב (היברידי)' : 'Tel Aviv (Hybrid)',
                date: today,
                cvVersion: isHe ? 'CV - מפתח Full-Stack (גרסה 2.4)' : 'CV - Full-Stack Developer (v2.4)',
                status: 'Screening (Phone/HR)',
                referral: isHe ? 'דניאל כהן (Tech Lead)' : 'Daniel Cohen (Tech Lead)',
                companyProduct: isHe ? 'פלטפורמת Cloud Security ו-Zero Trust לארגוני Enterprise' : 'Enterprise Cloud Security & Zero-Trust Infrastructure Platform',
                jdSummary: isHe ? 'פיתוח שירותי Backend ב-Node.js/TypeScript ו-Microservices, וממשקי Frontend ב-React לניהול מדיניות אבטחה בענן.' : 'Developing backend microservices in Node.js/TypeScript and modern UI in React for cloud security policy management.',
                mustHave: isHe 
                    ? `1. מבני נתונים ואלגוריתמים (Trees, HashMaps, Caching)
2. הבנה עמוקה ב-Asynchronous JS / TypeScript
3. עבודה עם מסדי נתונים רלציוניים (PostgreSQL / SQL Indexing)
4. ארכיטקטורת REST APIs ואימות Token-based (JWT/OAuth)`
                    : `1. Core Data Structures & Algorithms (Trees, HashMaps, Caching)
2. Deep understanding of Asynchronous JS / TypeScript
3. Relational databases (PostgreSQL & Query optimization)
4. RESTful API design & JWT/OAuth security patterns`,
                goodToHave: isHe
                    ? `1. היכרות עם Docker ו-CI/CD Pipelines
2. ניסיון בסביבת ענן (AWS / GCP / Azure)
3. היכרות בסיסית עם עקרונות אבטחת מידע (OWASP Top 10)`
                    : `1. Docker containerization & CI/CD workflows
2. Cloud infrastructure fundamentals (AWS / GCP)
3. Basic knowledge of OWASP Top 10 security standards`,
                notes: isHe
                    ? `💡 טיפים לשיחת ה-HR והראיון:
- להדגיש את פרויקט הגמר שעסק במערכות מבוזרות ומסדי נתונים.
- להבליט יכולת למידה עצמאית ומוטיבציה גבוהה להשתלב בתחום ה-Cyber Security.
- לשאול את המראיין על תהליך ה-Code Review ותרבות הפיתוח בצוות.`
                    : `💡 Tailored Pitch & Prep Strategy:
- Highlight the distributed caching and database optimization coursework.
- Emphasize proactive problem solving and strong desire to specialize in cloud infrastructure.
- Inquire about the team's engineering culture and automated testing pipeline.`,
                matchScore: '88%',
                matchRationale: isHe
                    ? 'התאמה גבוהה מאוד (88%): למועמד רקע אקדמי מוכח במדעי המחשב, ניסיון מעשי בפרויקטי Full-Stack ב-React ו-Node.js/SQL. מומלץ לחזק לקראת הראיון מושגי אבטחת ענן ו-Docker.'
                    : 'Strong 88% Match: Solid CS foundations with hands-on full-stack development experience. Prioritize reviewing cloud security concepts and container basics before the technical round.',
                jdLink: 'https://linkedin.com/jobs/sample',
                archived: false
            }
        ],
        reminders: [
            {
                id: 'demo_rem_1',
                text: isHe ? '📞 לעבור על נקודות ה-Must Prepare לקראת שיחת HR ב-CyberGuard השבוע' : '📞 Review MUST PREPARE notes before CyberGuard HR screening call this week',
                date: today,
                completed: false
            }
        ]
    };
}

function loadSampleData() {
    if (!isDemoMode) {
        realUserDataBackup = {
            jobs: [...jobs],
            documents: [...documents],
            reminders: [...reminders]
        };
    }
    isDemoMode = true;
    const sample = getSampleData(currentLang);
    jobs = [...sample.jobs];
    documents = [...sample.documents];
    reminders = [...sample.reminders];

    if (demoBanner) demoBanner.style.display = 'flex';
    if (emptyState) emptyState.style.display = 'none';

    renderJobs();
    renderDocs();
    renderRemindersUI();
    updateStats();
    if (typeof updateAiCvSelect === 'function') updateAiCvSelect();

    if (window.va) {
        window.va('event', { name: 'demo_mode_loaded', lang: currentLang });
    }
}

function clearSampleData() {
    if (!isDemoMode) return;
    isDemoMode = false;
    jobs = [...(realUserDataBackup.jobs || [])];
    documents = [...(realUserDataBackup.documents || [])];
    reminders = [...(realUserDataBackup.reminders || [])];

    if (demoBanner) demoBanner.style.display = 'none';

    renderJobs();
    renderDocs();
    renderRemindersUI();
    updateStats();
    if (typeof updateAiCvSelect === 'function') updateAiCvSelect();
}

// Hook Demo and Onboarding Buttons
const openGuideBtn = document.getElementById('openGuideBtn');
const guideModal = document.getElementById('guideModal');
const closeGuideModalBtn = document.getElementById('closeGuideModalBtn');
const closeGuideModalActionBtn = document.getElementById('closeGuideModalActionBtn');
const modalLoadDemoBtn = document.getElementById('modalLoadDemoBtn');

function updateGuideModalButtons() {
    const hasRealJobs = (jobs && jobs.length > 0);
    if (modalLoadDemoBtn) {
        modalLoadDemoBtn.style.display = hasRealJobs ? 'none' : 'inline-flex';
    }
    if (closeGuideModalActionBtn) {
        if (hasRealJobs) {
            closeGuideModalActionBtn.classList.remove('btn-secondary');
            closeGuideModalActionBtn.classList.add('btn-primary');
        } else {
            closeGuideModalActionBtn.classList.remove('btn-primary');
            closeGuideModalActionBtn.classList.add('btn-secondary');
        }
    }
}

if (openGuideBtn) {
    openGuideBtn.addEventListener('click', () => {
        updateGuideModalButtons();
        if (guideModal) guideModal.classList.add('active');
    });
}

if (closeGuideModalBtn) {
    closeGuideModalBtn.addEventListener('click', () => {
        if (guideModal) guideModal.classList.remove('active');
    });
}

if (closeGuideModalActionBtn) {
    closeGuideModalActionBtn.addEventListener('click', () => {
        if (guideModal) guideModal.classList.remove('active');
    });
}

if (modalLoadDemoBtn) {
    modalLoadDemoBtn.addEventListener('click', () => {
        if (guideModal) guideModal.classList.remove('active');
        loadSampleData();
    });
}

if (loadDemoBtn) {
    loadDemoBtn.addEventListener('click', () => {
        loadSampleData();
    });
}

if (clearDemoBtn) {
    clearDemoBtn.addEventListener('click', () => {
        clearSampleData();
    });
}

if (emptyNewJobBtn) {
    emptyNewJobBtn.addEventListener('click', () => {
        if (openModalBtn) openModalBtn.click();
    });
}

// Privacy Policy & Account Erasure Handlers
const privacyModal = document.getElementById('privacyModal');
const openPrivacyModalBtn = document.getElementById('openPrivacyModalBtn');
const footerPrivacyBtn = document.getElementById('footerPrivacyBtn');
const closePrivacyModalBtn = document.getElementById('closePrivacyModalBtn');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');

const deleteAccountSection = document.getElementById('deleteAccountSection');

function openPrivacyModal(e) {
    if (e) e.preventDefault();
    if (deleteAccountSection) {
        deleteAccountSection.style.display = (currentUser ? 'flex' : 'none');
    }
    if (privacyModal) privacyModal.classList.add('active');
}

if (openPrivacyModalBtn) openPrivacyModalBtn.addEventListener('click', openPrivacyModal);
if (footerPrivacyBtn) footerPrivacyBtn.addEventListener('click', openPrivacyModal);
if (closePrivacyModalBtn) closePrivacyModalBtn.addEventListener('click', () => {
    if (privacyModal) privacyModal.classList.remove('active');
});

// Language Toggle Handler
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        const nextLang = (currentLang === 'he' ? 'en' : 'he');
        setLanguage(nextLang);
    });
}

// Accessibility Modal Handlers
function openAccessibilityModal(e) {
    if (e) e.preventDefault();
    if (accessibilityModal) accessibilityModal.classList.add('active');
}
if (footerAccessibilityBtn) footerAccessibilityBtn.addEventListener('click', openAccessibilityModal);
if (closeAccessibilityModalBtn) closeAccessibilityModalBtn.addEventListener('click', () => {
    if (accessibilityModal) accessibilityModal.classList.remove('active');
});

// Feedback Modal Handlers
function openFeedbackModal(e) {
    if (e) e.preventDefault();
    if (feedbackStatus) feedbackStatus.style.display = 'none';
    if (feedbackModal) feedbackModal.classList.add('active');
}
if (footerFeedbackBtn) footerFeedbackBtn.addEventListener('click', openFeedbackModal);
document.querySelectorAll('.open-feedback-link').forEach(link => {
    link.addEventListener('click', openFeedbackModal);
});
if (closeFeedbackModalBtn) closeFeedbackModalBtn.addEventListener('click', () => {
    if (feedbackModal) feedbackModal.classList.remove('active');
});
if (cancelFeedbackBtn) cancelFeedbackBtn.addEventListener('click', () => {
    if (feedbackModal) feedbackModal.classList.remove('active');
});

if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userEmailAddr = (currentUser && currentUser.email) ? currentUser.email : 'Guest / Not Logged In';
        const category = feedbackCategory ? feedbackCategory.value : 'General';
        const message = feedbackMessage ? feedbackMessage.value.trim() : '';

        if (!message) return;

        if (sendFeedbackSubmitBtn) {
            sendFeedbackSubmitBtn.disabled = true;
            sendFeedbackSubmitBtn.innerHTML = `<ion-icon name="sync-outline" class="spin"></ion-icon> <span>${t('sending_feedback', 'Sending...')}</span>`;
        }
        if (feedbackStatus) feedbackStatus.style.display = 'none';

        try {
            // 1. Save feedback record directly into Supabase database
            if (supabaseClient) {
                await supabaseClient.from('feedback').insert([{
                    user_id: currentUser ? currentUser.id : null,
                    user_email: userEmailAddr,
                    category: category,
                    message: message
                }]);
            }

            // 2. Send instant email notification to you
            fetch("https://formsubmit.co/ajax/yonatangafri@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: `Track Your APP Feedback: [${category}] from ${userEmailAddr}`,
                    user_email: userEmailAddr,
                    user_id: currentUser ? currentUser.id : 'Guest / Not Logged In',
                    feedback_category: category,
                    message: message,
                    timestamp: new Date().toISOString(),
                    _template: "table"
                })
            }).catch(e => console.warn("Email alert notification:", e));

            if (feedbackStatus) {
                feedbackStatus.textContent = t('feedback_success', 'Thank you! Your feedback has been sent successfully.');
                feedbackStatus.style.background = 'var(--status-offer-bg)';
                feedbackStatus.style.color = 'var(--status-offer-text)';
                feedbackStatus.style.display = 'block';
            }
            if (feedbackMessage) feedbackMessage.value = '';

            if (window.va) {
                window.va('event', { name: 'feedback_submitted', category });
            }

            setTimeout(() => {
                if (feedbackModal) feedbackModal.classList.remove('active');
                if (feedbackStatus) feedbackStatus.style.display = 'none';
            }, 2200);
        } catch (err) {
            console.error("Feedback error:", err);
            if (feedbackStatus) {
                feedbackStatus.textContent = t('feedback_error', 'Failed to send feedback. Please try again.');
                feedbackStatus.style.background = 'var(--status-rejected-bg)';
                feedbackStatus.style.color = 'var(--status-rejected-text)';
                feedbackStatus.style.display = 'block';
            }
        } finally {
            if (sendFeedbackSubmitBtn) {
                sendFeedbackSubmitBtn.disabled = false;
                sendFeedbackSubmitBtn.innerHTML = `<ion-icon name="paper-plane-outline"></ion-icon> <span>${t('send_feedback_btn_text', 'Send Feedback')}</span>`;
            }
        }
    });
}

// URL Hash routing for direct links (#privacy, #accessibility, #feedback)
function handleHashRoute() {
    const hash = window.location.hash;
    if (hash === '#privacy') {
        openPrivacyModal();
    } else if (hash === '#accessibility') {
        openAccessibilityModal();
    } else if (hash === '#feedback') {
        openFeedbackModal();
    } else if (hash === '#') {
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    }
}
window.addEventListener('hashchange', handleHashRoute);
window.addEventListener('DOMContentLoaded', handleHashRoute);
handleHashRoute();

// Forgot Password Modal Handlers
if (openForgotPasswordBtn) {
    openForgotPasswordBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (authEmail && authEmail.value) {
            if (forgotEmail) forgotEmail.value = authEmail.value;
        }
        if (forgotPasswordStatus) forgotPasswordStatus.style.display = 'none';
        if (forgotPasswordModal) forgotPasswordModal.classList.add('active');
    });
}
if (closeForgotModalBtn) closeForgotModalBtn.addEventListener('click', () => {
    if (forgotPasswordModal) forgotPasswordModal.classList.remove('active');
});
if (cancelForgotBtn) cancelForgotBtn.addEventListener('click', () => {
    if (forgotPasswordModal) forgotPasswordModal.classList.remove('active');
});
if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = forgotEmail ? forgotEmail.value.trim() : '';
        if (!email) return;

        if (sendResetEmailBtn) {
            sendResetEmailBtn.disabled = true;
            sendResetEmailBtn.textContent = 'Sending...';
        }
        if (forgotPasswordStatus) forgotPasswordStatus.style.display = 'none';

        try {
            if (!supabaseClient) throw new Error('Supabase client not initialized.');
            const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
                redirectTo: window.location.origin
            });
            if (error) throw error;
            if (forgotPasswordStatus) {
                forgotPasswordStatus.textContent = currentLang === 'he' ? 'קישור לאיפוס סיסמה נשלח בהצלחה לאימייל שלך!' : 'Password reset link sent! Please check your email inbox.';
                forgotPasswordStatus.style.background = 'var(--status-offer-bg)';
                forgotPasswordStatus.style.color = 'var(--status-offer-text)';
                forgotPasswordStatus.style.display = 'block';
            }
            forgotPasswordForm.reset();
        } catch (err) {
            if (forgotPasswordStatus) {
                forgotPasswordStatus.textContent = err.message || 'Error sending reset email.';
                forgotPasswordStatus.style.background = 'var(--status-rejected-bg)';
                forgotPasswordStatus.style.color = 'var(--status-rejected-text)';
                forgotPasswordStatus.style.display = 'block';
            }
        } finally {
            if (sendResetEmailBtn) {
                sendResetEmailBtn.disabled = false;
                sendResetEmailBtn.textContent = t('send_reset_link_btn', 'Send Reset Link');
            }
        }
    });
}

// Global Escape Key to close modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        [settingsModal, jobModal, viewModal, docModal, privacyModal, forgotPasswordModal, accessibilityModal, feedbackModal].forEach(modal => {
            if (modal && modal.classList.contains('active') && modal.id !== 'authModal') {
                modal.classList.remove('active');
            }
        });
    }
});

if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', async () => {
        if (!currentUser || !supabaseClient) return;
        const confirmMsg = currentLang === 'he'
            ? "האם אתה בטוח שברצונך למחוק לצמיתות את החשבון וכל המידע שלך (מועמדויות, מסמכים והערות)? פעולה זו היא בלתי הפיכה."
            : "Are you sure you want to permanently delete your account and ALL your applications, documents, and notes? This action cannot be undone.";

        if (confirm(confirmMsg)) {
            try {
                // Try calling Supabase RPC function for complete auth & data deletion if configured
                const { error: rpcError } = await supabaseClient.rpc('delete_user_account');

                if (rpcError) {
                    // Fallback to table deletion via RLS
                    await supabaseClient.from('jobs').delete().eq('user_id', currentUser.id);
                    await supabaseClient.from('documents').delete().eq('user_id', currentUser.id);
                    await supabaseClient.from('reminders').delete().eq('user_id', currentUser.id);
                }

                await supabaseClient.auth.signOut();
                
                const successMsg = currentLang === 'he'
                    ? "כל המידע שלך נמחק לצמיתות מהמערכת."
                    : "All your data has been permanently deleted from the system.";
                alert(successMsg);

                currentUser = null;
                userBadge.style.display = 'none';
                if (privacyModal) privacyModal.classList.remove('active');
                authModal.classList.add('active');
                jobs = [];
                documents = [];
                reminders = [];
                renderJobs();
                renderDocs();
                renderRemindersUI();
                updateStats();
            } catch (err) {
                console.error("Deletion error:", err);
                alert("Error deleting data: " + err.message);
            }
        }
    });
}

// ==========================================
// DASHBOARD RENDERING & UI LOGIC
// ==========================================
function renderStatusFilters() {
    if (!statusFiltersContainer) return;
    const statuses = [...new Set(jobs.map(j => j.status))].filter(Boolean).sort();
    
    if (activeStatusFilters.size === 0 && statuses.length > 0) {
        statuses.forEach(s => activeStatusFilters.add(s));
    }
    
    statusFiltersContainer.innerHTML = '';
    statuses.forEach(status => {
        const label = document.createElement('label');
        label.style.display = 'flex';
        label.style.alignItems = 'center';
        label.style.gap = '4px';
        label.style.cursor = 'pointer';
        
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.value = status;
        cb.checked = activeStatusFilters.has(status);
        
        cb.addEventListener('change', (e) => {
            if (e.target.checked) {
                activeStatusFilters.add(status);
            } else {
                activeStatusFilters.delete(status);
            }
            renderJobs(searchInput ? searchInput.value : '');
        });
        
        label.appendChild(cb);
        label.appendChild(document.createTextNode(status));
        statusFiltersContainer.appendChild(label);
    });
}

// Document Modal Elements
const docModal = document.getElementById('docModal');
const docForm = document.getElementById('docForm');
const openDocModalBtn = document.getElementById('openDocModalBtn');
const closeDocModalBtn = document.getElementById('closeDocModalBtn');
const cancelDocBtn = document.getElementById('cancelDocBtn');
const docModalTitle = document.getElementById('docModalTitle');
const docFileInput = document.getElementById('docFile');
const docFileName = document.getElementById('docFileName');
const docFileLabel = document.getElementById('docFileLabel');
const docBtnText = document.getElementById('docBtnText');
const docParsedStatus = document.getElementById('docParsedStatus');
const clearParsedTextBtn = document.getElementById('clearParsedTextBtn');
let currentEditingDocId = null;
let clearParsedTextRequested = false;

if (docFileInput && docFileName) {
    docFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
            clearParsedTextRequested = false;
            docFileName.textContent = e.target.files[0].name;
            docFileName.style.color = 'var(--text-primary)';
            const aiConsentDoc = document.getElementById('aiConsentDoc');
            if (aiConsentDoc) aiConsentDoc.checked = true;
        } else {
            resetDocFileInputText();
        }
    });
}

function resetDocFileInputText() {
    if (!docFileName) return;
    if (currentEditingDocId && !clearParsedTextRequested) {
        const doc = documents.find(d => d.id === currentEditingDocId);
        if (doc && doc.parsedText) {
            docFileName.textContent = 'Existing PDF saved';
            docFileName.style.color = 'var(--status-offer-text)';
            if (docBtnText) docBtnText.textContent = 'Replace PDF';
            return;
        }
    }
    docFileName.textContent = 'No file chosen';
    docFileName.style.color = 'var(--text-secondary)';
    if (docBtnText) docBtnText.textContent = 'Choose PDF';
}

if (clearParsedTextBtn) {
    clearParsedTextBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to remove the AI-parsed text from this document?')) {
            clearParsedTextRequested = true;
            if (docParsedStatus) docParsedStatus.style.display = 'none';
            if (docFileLabel) docFileLabel.textContent = 'PDF Document (Optional)';
            if (docBtnText) docBtnText.textContent = 'Choose PDF';
            if (docFileName) {
                docFileName.textContent = 'Parsed text removed';
                docFileName.style.color = '#ef4444';
            }
            const fileInput = document.getElementById('docFile');
            if (fileInput) fileInput.value = '';
            const aiConsentDoc = document.getElementById('aiConsentDoc');
            if (aiConsentDoc) aiConsentDoc.checked = false;
        }
    });
}

if (openDocModalBtn) {
    openDocModalBtn.addEventListener('click', () => {
        currentEditingDocId = null;
        clearParsedTextRequested = false;
        if (docForm) docForm.reset();
        if (docModalTitle) docModalTitle.textContent = 'Add New Document';
        if (docFileLabel) docFileLabel.textContent = 'PDF Document (Optional)';
        if (docBtnText) docBtnText.textContent = 'Choose PDF';
        if (docParsedStatus) docParsedStatus.style.display = 'none';
        if (docFileName) {
            docFileName.textContent = 'No file chosen';
            docFileName.style.color = 'var(--text-secondary)';
        }
        const dateInput = document.getElementById('docDate');
        if (dateInput) dateInput.valueAsDate = new Date();
        const aiConsentDoc = document.getElementById('aiConsentDoc');
        if (aiConsentDoc) aiConsentDoc.checked = false;
        if (docModal) docModal.classList.add('active');
    });
}

if (closeDocModalBtn) closeDocModalBtn.addEventListener('click', closeDocModal);
if (cancelDocBtn) cancelDocBtn.addEventListener('click', closeDocModal);

function closeDocModal() {
    if (docModal) docModal.classList.remove('active');
    if (docForm) docForm.reset();
    if (docParsedStatus) docParsedStatus.style.display = 'none';
    if (docFileName) {
        docFileName.textContent = 'No file chosen';
        docFileName.style.color = 'var(--text-secondary)';
    }
    if (docBtnText) docBtnText.textContent = 'Choose PDF';
    currentEditingDocId = null;
    clearParsedTextRequested = false;
}

if (docForm) {
    docForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (isDemoMode) clearSampleData();
        
        let parsedText = '';
        const fileInput = document.getElementById('docFile');
        const aiConsentDoc = document.getElementById('aiConsentDoc');
        
        if (fileInput && fileInput.files.length > 0) {
            if (aiConsentDoc && !aiConsentDoc.checked) {
                alert('You must consent to AI processing to upload and parse a document.');
                return;
            }
            const file = fileInput.files[0];
            const submitBtn = docForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Parsing PDF...';
            submitBtn.disabled = true;
            
            const extracted = await extractTextFromPdf(file);
            if (extracted) {
                parsedText = extracted;
            }
            submitBtn.textContent = 'Save Document';
            submitBtn.disabled = false;
        }

        let newParsedText = parsedText;
        if (clearParsedTextRequested && !parsedText) {
            newParsedText = undefined;
        } else if (!parsedText && currentEditingDocId) {
            const existing = documents.find(d => d.id === currentEditingDocId);
            if (existing && existing.parsedText && !clearParsedTextRequested) {
                newParsedText = existing.parsedText;
            }
        }

        const docData = {
            id: currentEditingDocId || ('doc_' + Date.now()),
            user_id: currentUser ? currentUser.id : undefined,
            type: document.getElementById('docType').value,
            version: document.getElementById('docVersion').value,
            date: document.getElementById('docDate').value,
            link: document.getElementById('docLink').value,
            changeLog: document.getElementById('docChangeLog').value,
            parsedText: newParsedText || undefined
        };

        if (currentEditingDocId) {
            const index = documents.findIndex(d => d.id === currentEditingDocId);
            if (index !== -1) {
                documents[index] = docData;
            }
        } else {
            documents.push(docData);
        }

        renderDocs();
        updateAiCvSelect(); // update the AI select dropdown
        closeDocModal();

        if (supabaseClient && currentUser) {
            try {
                await supabaseClient.from('documents').upsert([mapDocToDb(docData)]);
            } catch (err) {
                console.error('Failed to save document to Supabase:', err);
            }
        }
    });
}

window.editDoc = function(id) {
    const doc = documents.find(d => d.id === id);
    if (!doc) return;

    currentEditingDocId = id;
    clearParsedTextRequested = false;
    if (docModalTitle) docModalTitle.textContent = 'Edit Document';
    document.getElementById('docType').value = doc.type || 'CV';
    document.getElementById('docVersion').value = doc.version || '';
    document.getElementById('docDate').value = doc.date || '';
    document.getElementById('docLink').value = doc.link || '';
    document.getElementById('docChangeLog').value = doc.changeLog || '';

    const aiConsentDoc = document.getElementById('aiConsentDoc');
    if (doc.parsedText) {
        if (docParsedStatus) docParsedStatus.style.display = 'inline-flex';
        if (docFileLabel) docFileLabel.textContent = 'Replace PDF (Optional)';
        if (docBtnText) docBtnText.textContent = 'Replace PDF';
        if (docFileName) {
            docFileName.textContent = 'Existing PDF saved';
            docFileName.style.color = 'var(--status-offer-text)';
        }
        if (aiConsentDoc) aiConsentDoc.checked = true;
    } else {
        if (docParsedStatus) docParsedStatus.style.display = 'none';
        if (docFileLabel) docFileLabel.textContent = 'PDF Document (Optional)';
        if (docBtnText) docBtnText.textContent = 'Choose PDF';
        if (docFileName) {
            docFileName.textContent = 'No file chosen';
            docFileName.style.color = 'var(--text-secondary)';
        }
        if (aiConsentDoc) aiConsentDoc.checked = false;
    }

    if (docModal) docModal.classList.add('active');
};

window.deleteDoc = async function(id) {
    if (confirm('Are you sure you want to delete this document version?')) {
        documents = documents.filter(d => d.id !== id);
        renderDocs();

        if (supabaseClient && currentUser && !isDemoMode) {
            try {
                await supabaseClient.from('documents').delete().eq('id', id);
            } catch (err) {
                console.error('Failed to delete document from Supabase:', err);
            }
        }
    }
};

function getLocalizedDocType(type) {
    if (!type) return '';
    const map = {
        'CV': t('doc_type_cv_short', currentLang === 'he' ? 'קורות חיים' : 'CV / Resume'),
        'Transcript': t('doc_type_transcript_short', currentLang === 'he' ? 'גיליון ציונים' : 'Transcript'),
        'Cover Letter': t('doc_type_cover_letter_short', currentLang === 'he' ? 'מכתב מקדים' : 'Cover Letter'),
        'Certificate': t('doc_type_certificate_short', currentLang === 'he' ? 'תעודה / תיק עבודות' : 'Certificate'),
        'Other': t('doc_type_other_short', currentLang === 'he' ? 'אחר' : 'Other')
    };
    return map[type] || type;
}

function renderDocs() {
    const docsCountBadge = document.getElementById('docsCountBadge');
    if (docsCountBadge) docsCountBadge.textContent = documents ? documents.length : 0;
    if (!docsList) return;
    docsList.innerHTML = '';
    
    if (documents.length === 0) {
        docsList.innerHTML = `
            <div style="color: var(--text-tertiary); font-size: 0.9rem; padding: 1rem 0; grid-column: 1 / -1;">
                ${t('no_docs_uploaded', 'No documents uploaded yet. Click "+ Add Document" above to attach your CV, Transcripts, or Cover Letters.')}
            </div>
        `;
        return;
    }

    const groupedDocs = {};
    documents.forEach(doc => {
        if (!groupedDocs[doc.type]) groupedDocs[doc.type] = [];
        groupedDocs[doc.type].push(doc);
    });

    Object.keys(groupedDocs).forEach(type => {
        const docsOfType = groupedDocs[type];
        const docCard = document.createElement('div');
        docCard.className = 'doc-card glass-panel';
        
        let innerHTML = `
            <div class="doc-header">
                <h3><ion-icon name="${type === 'CV' ? 'document-attach' : (type === 'Transcript' ? 'school' : 'document-text')}"></ion-icon> ${getLocalizedDocType(type)}</h3>
            </div>
            <div class="doc-versions">
        `;
        
        docsOfType.forEach((doc, idx) => {
            innerHTML += `
                <div class="doc-version-item" style="${idx > 0 ? 'margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);' : ''}">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <strong>${doc.version}</strong>
                        <span class="doc-date" style="font-size: 0.75rem; background: var(--border-color); padding: 0.2rem 0.5rem; border-radius: 12px; color: var(--text-secondary);">${doc.date}</span>
                    </div>
                    <p class="doc-changelog" style="margin-bottom: 0.8rem; font-size: 0.85rem; color: var(--text-secondary);"><strong>${t('doc_changes_label', 'Changes:')}</strong> ${doc.changeLog || t('none', 'None')}</p>
                    ${doc.parsedText ? `<div style="font-size: 0.75rem; color: var(--status-offer-text); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 4px;"><ion-icon name="checkmark-circle"></ion-icon> ${t('ai_parsed_status', 'AI Parsed')}</div>` : ''}
                    <div style="display: flex; gap: 0.5rem; align-items: center;">
                        <a href="${doc.link}" target="_blank" class="btn-secondary doc-btn" style="flex: 1; padding: 0.4rem; font-size: 0.85rem; text-decoration: none; display: flex; justify-content: center; align-items: center; gap: 0.3rem;">
                            <ion-icon name="open-outline"></ion-icon> ${t('open_link', 'Open Link')}
                        </a>
                        <button class="action-btn" onclick="editDoc('${doc.id}')" title="${t('edit_document', 'Edit Document')}">
                            <ion-icon name="create-outline"></ion-icon>
                        </button>
                        <button class="action-btn" onclick="deleteDoc('${doc.id}')" title="${t('delete_document', 'Delete Document')}">
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            `;
        });
        
        innerHTML += `</div>`;
        docCard.innerHTML = innerHTML;
        docsList.appendChild(docCard);
    });

    if (typeof updateAiCvSelect === 'function') {
        updateAiCvSelect();
    }
}

function renderRemindersUI() {
    const remindersCountBadge = document.getElementById('remindersCountBadge');
    if (remindersCountBadge) remindersCountBadge.textContent = reminders ? reminders.length : 0;
    if (!remindersList) return;
    remindersList.innerHTML = '';

    const activeReminders = reminders.filter(r => !r.completed);
    if (remindersCount) {
        remindersCount.textContent = `${activeReminders.length} active`;
    }

    if (reminders.length === 0) {
        remindersList.innerHTML = `
            <div style="color: var(--text-tertiary); font-size: 0.88rem; padding: 0.5rem 0;">
                No reminders yet. Add a reminder above to stay on top of follow-ups!
            </div>
        `;
        return;
    }

    reminders.forEach((rem) => {
        const item = document.createElement('div');
        item.className = `reminder-item ${rem.completed ? 'completed' : ''}`;
        
        item.innerHTML = `
            <div class="reminder-content">
                <input type="checkbox" class="reminder-checkbox" ${rem.completed ? 'checked' : ''} title="Mark as done">
                <span class="reminder-text">${rem.text}</span>
            </div>
            <div class="reminder-meta">
                <span class="reminder-date">${rem.date || '-'}</span>
                <button class="reminder-delete-btn" title="Delete note">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div>
        `;

        const cb = item.querySelector('.reminder-checkbox');
        cb.addEventListener('change', async (e) => {
            rem.completed = e.target.checked;
            renderRemindersUI();
            if (supabaseClient && currentUser && !isDemoMode) {
                await supabaseClient.from('reminders').update({ completed: rem.completed }).eq('id', rem.id);
            }
        });

        const delBtn = item.querySelector('.reminder-delete-btn');
        delBtn.addEventListener('click', async () => {
            const targetId = rem.id;
            reminders = reminders.filter(r => r.id !== targetId);
            renderRemindersUI();
            if (supabaseClient && currentUser && !isDemoMode) {
                await supabaseClient.from('reminders').delete().eq('id', targetId);
            }
        });

        remindersList.appendChild(item);
    });
}

if (reminderForm) {
    reminderForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (isDemoMode) clearSampleData();
        const text = reminderInput.value.trim();
        if (!text) return;

        const newReminder = {
            id: 'rem_' + Date.now(),
            user_id: currentUser ? currentUser.id : undefined,
            text: text,
            date: new Date().toISOString().split('T')[0],
            completed: false
        };

        reminders.unshift({ id: newReminder.id, text: newReminder.text, date: newReminder.date, completed: false });
        renderRemindersUI();
        reminderForm.reset();

        if (supabaseClient && currentUser && !isDemoMode) {
            await supabaseClient.from('reminders').insert([newReminder]);
        }
    });
}

function getCompanyLogoUrl(companyName, jdLink) {
    if (!companyName) return '';
    const clean = companyName.trim().toLowerCase();

    // Specific direct logo overrides (e.g. Radware)
    const customLogos = {
        'radware': 'https://www.google.com/s2/favicons?domain=radware.com&sz=128'
    };

    if (customLogos[clean]) {
        return customLogos[clean];
    }
    for (const k of Object.keys(customLogos)) {
        if (clean.includes(k)) return customLogos[k];
    }

    const domain = getCompanyDomain(companyName, jdLink);
    return domain ? `https://unavatar.io/${domain}?fallback=https%3A%2F%2Fwww.google.com%2Fs2%2Ffavicons%3Fdomain%3D${domain}%26sz%3D128` : '';
}

function getCompanyDomain(companyName, jdLink) {
    if (!companyName) return '';
    const clean = companyName.trim();
    
    // Check known tech companies map for exact high-quality domains
    const knownDomains = {
        'radware': 'radware.com',
        'google': 'google.com',
        'meta': 'meta.com',
        'facebook': 'meta.com',
        'apple': 'apple.com',
        'microsoft': 'microsoft.com',
        'amazon': 'amazon.com',
        'aws': 'amazon.com',
        'nvidia': 'nvidia.com',
        'wix': 'wix.com',
        'monday': 'monday.com',
        'check point': 'checkpoint.com',
        'checkpoint': 'checkpoint.com',
        'cyberark': 'cyberark.com',
        'vast data': 'vastdata.com',
        'vast': 'vastdata.com',
        'fiverr': 'fiverr.com',
        'taboola': 'taboola.com',
        'outbrain': 'outbrain.com',
        'lemonade': 'lemonade.com',
        'similarweb': 'similarweb.com',
        'waze': 'waze.com',
        'orca security': 'orcasecurity.io',
        'orca': 'orcasecurity.io',
        'wiz': 'wiz.io',
        'intel': 'intel.com',
        'cisco': 'cisco.com',
        'ibm': 'ibm.com',
        'sentinelone': 'sentinelone.com',
        'appsflyer': 'appsflyer.com',
        'playtika': 'playtika.com',
        'qualcomm': 'qualcomm.com',
        'applied materials': 'appliedmaterials.com',
        'solaredge': 'solaredge.com',
        'amdocs': 'amdocs.com',
        'nice': 'nice.com',
        'verint': 'verint.com',
        'riskified': 'riskified.com',
        'hippo': 'myhippo.com',
        'ironsource': 'is.com',
        'payoneer': 'payoneer.com',
        'hibob': 'hibob.com',
        'bob': 'hibob.com',
        'gong': 'gong.io',
        'snyk': 'snyk.io',
        'bigid': 'bigid.com',
        'claroty': 'claroty.com',
        'armis': 'armis.com',
        'walkme': 'walkme.com',
        'redis': 'redis.io',
        'jfrog': 'jfrog.com',
        'spotify': 'spotify.com',
        'netflix': 'netflix.com',
        'uber': 'uber.com',
        'airbnb': 'airbnb.com',
        'salesforce': 'salesforce.com',
        'oracle': 'oracle.com',
        'stripe': 'stripe.com',
        'github': 'github.com',
        'gitlab': 'gitlab.com',
        'cloudflare': 'cloudflare.com',
        'snowflake': 'snowflake.com',
        'databricks': 'databricks.com',
        'openai': 'openai.com',
        'anthropic': 'anthropic.com',
        'palantir': 'palantir.com'
    };

    const lower = clean.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ').replace(/\s+/g, ' ').trim();
    if (knownDomains[lower]) {
        return knownDomains[lower];
    }
    for (const key of Object.keys(knownDomains)) {
        if (lower.includes(key)) {
            return knownDomains[key];
        }
    }

    if (jdLink && jdLink.startsWith('http')) {
        try {
            const urlObj = new URL(jdLink);
            const host = urlObj.hostname.replace(/^www\./, '');
            if (!host.includes('linkedin') && !host.includes('indeed') && !host.includes('glassdoor') && !host.includes('comeet') && !host.includes('greenhouse') && !host.includes('lever')) {
                return host;
            }
        } catch (e) {}
    }

    if (clean.includes('.')) {
        return clean.replace(/\s+/g, '').toLowerCase();
    }

    return clean.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() + '.com';
}

function renderJobs(filterText = '') {
    if (!jobsList) return;
    jobsList.innerHTML = '';
    
    const showArchived = showArchivedToggle ? showArchivedToggle.checked : false;
    const filteredJobs = jobs.filter(job => 
        (activeStatusFilters.size === 0 || activeStatusFilters.has(job.status)) &&
        (job.company.toLowerCase().includes(filterText.toLowerCase()) || 
         job.title.toLowerCase().includes(filterText.toLowerCase())) &&
        (showArchived ? job.archived : !job.archived)
    );

    if (filteredJobs.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        const tbl = document.querySelector('table');
        if (tbl) tbl.style.display = 'none';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        const tbl = document.querySelector('table');
        if (tbl) tbl.style.display = '';
        
        filteredJobs.sort((a, b) => {
            let valA = a[currentSortColumn] || '';
            let valB = b[currentSortColumn] || '';
            
            if (currentSortColumn === 'date') {
                valA = new Date(valA).getTime() || 0;
                valB = new Date(valB).getTime() || 0;
            } else {
                valA = valA.toString().toLowerCase();
                valB = valB.toString().toLowerCase();
            }
            
            if (valA < valB) return currentSortDirection === 'asc' ? -1 : 1;
            if (valA > valB) return currentSortDirection === 'asc' ? 1 : -1;
            return 0;
        });

        filteredJobs.forEach(job => {
            const statusClass = `status-${job.status.split(' ')[0]}`;
            const initial = (job.company || '?').trim().charAt(0).toUpperCase();
            
            // Dynamic subtle avatar background based on initial letter
            const colors = [
                { bg: '#eff6ff', text: '#2563eb' },
                { bg: '#fdf2f8', text: '#db2777' },
                { bg: '#ecfdf5', text: '#059669' },
                { bg: '#fef3c7', text: '#d97706' },
                { bg: '#ede9fe', text: '#7c3aed' },
                { bg: '#f0fdfa', text: '#0d9488' }
            ];
            const colorIdx = (initial.charCodeAt(0) || 0) % colors.length;
            const avatarColor = colors[colorIdx];

            const logoUrl = getCompanyLogoUrl(job.company, job.jdLink);

            const tr = document.createElement('tr');
            tr.className = 'job-row-card';
            
            const hasSummary = job.jdSummary && job.jdSummary.trim() !== '' && job.jdSummary.trim() !== '-';

            tr.innerHTML = `
                <td class="cell-company">
                    <div class="company-cell">
                        <div class="company-logo-wrap">
                            ${logoUrl ? `
                                <img class="company-logo-img" 
                                     src="${logoUrl}" 
                                     alt="${job.company}" 
                                     loading="lazy" 
                                     onerror="this.style.display='none'; const fb = this.parentElement.querySelector('.company-avatar'); if(fb) fb.style.display='flex';" />
                                <div class="company-avatar" style="display: none; background: ${avatarColor.bg}; color: ${avatarColor.text};">${initial}</div>
                            ` : `
                                <div class="company-avatar" style="background: ${avatarColor.bg}; color: ${avatarColor.text};">${initial}</div>
                            `}
                        </div>
                        <span class="company-name" style="font-weight: 600; color: var(--text-primary);">${job.company}</span>
                    </div>
                </td>
                <td class="cell-title" style="font-weight: 500;">
                    <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                        <span class="job-title-text">${job.title}</span>
                        ${job.matchScore ? `<span class="match-score-badge" style="display: inline-flex; align-items: center; gap: 3px; font-size: 0.72rem; padding: 2px 7px; background: #ecfdf5; color: #047857; border-radius: 12px; font-weight: 600; border: 1px solid #a7f3d0;" title="${job.matchRationale ? job.matchRationale.replace(/"/g, '&quot;') : 'AI Match Score'}">🎯 ${job.matchScore}</span>` : ''}
                    </div>
                </td>
                <td class="cell-summary">
                    ${hasSummary ? `
                        <div class="summary-container">
                            <div class="summary-text" id="summary-text-${job.id}" title="${job.jdSummary}">${job.jdSummary}</div>
                            ${(job.jdSummary.length > 70) ? `<span class="read-more-btn" onclick="toggleSummary('${job.id}')">Read more...</span>` : ''}
                        </div>
                    ` : `
                        <span class="desktop-only-summary-dash">-</span>
                    `}
                </td>
                <td class="cell-location" style="color: var(--text-secondary);">
                    <span class="location-text"><ion-icon name="location-outline" class="cell-meta-icon"></ion-icon>${job.location || '-'}</span>
                </td>
                <td class="cell-status">
                    <button type="button" 
                            class="status-badge status-badge-interactive ${statusClass}" 
                            onclick="openStatusDropdown(event, '${job.id}')" 
                            title="${t('click_to_change_status', 'Click to change status')}"
                            aria-label="${t('click_to_change_status', 'Click to change status')}">
                        <span class="status-badge-text">${getLocalizedStatus(job.status)}</span>
                        <ion-icon name="chevron-down-outline" class="status-badge-chevron"></ion-icon>
                    </button>
                </td>
                <td class="cell-date" style="color: var(--text-secondary); font-size: 0.82rem; white-space: nowrap;">
                    <span class="date-text"><ion-icon name="calendar-outline" class="cell-meta-icon"></ion-icon>${formatDate(job.date)}</span>
                </td>
                <td class="cell-actions">
                    <div class="actions-wrapper">
                        <button class="action-btn view-action-btn" onclick="viewJob('${job.id}')" title="${t('view_and_prep', 'View & Prep')}">
                            <ion-icon name="eye-outline"></ion-icon>
                            <span class="mobile-action-label">${t('view_and_prep', 'View & Prep')}</span>
                        </button>
                        <button class="action-btn archive-action-btn" onclick="archiveJob('${job.id}')" title="${job.archived ? t('unarchive', 'Unarchive') : t('archive', 'Archive')}">
                            <ion-icon name="${job.archived ? 'arrow-up-circle-outline' : 'archive-outline'}"></ion-icon>
                            <span class="mobile-action-label">${job.archived ? t('unarchive', 'Unarchive') : t('archive', 'Archive')}</span>
                        </button>
                    </div>
                </td>
            `;
            jobsList.appendChild(tr);
        });
    }
}

const STATUS_CONFIG = [
    { value: 'To Apply', key: 'status_to_apply', defaultText: 'To Apply', cls: 'status-To' },
    { value: 'Applied', key: 'status_applied', defaultText: 'Applied', cls: 'status-Applied' },
    { value: 'Referral Submitted', key: 'status_referral_submitted', defaultText: 'Referral Submitted', cls: 'status-Referral' },
    { value: 'Screening', key: 'status_screening', defaultText: 'Screening (Phone/HR)', cls: 'status-Screening' },
    { value: 'Technical Interview', key: 'status_tech_interview', defaultText: 'Technical Interview', cls: 'status-Technical' },
    { value: 'Offer', key: 'status_offer', defaultText: 'Offer', cls: 'status-Offer' },
    { value: 'Not Relevant', key: 'status_not_relevant', defaultText: 'Not Relevant', cls: 'status-Not' },
    { value: 'Rejected', key: 'status_rejected', defaultText: 'Rejected', cls: 'status-Rejected' }
];

function getLocalizedStatus(status) {
    if (!status) return '';
    const item = STATUS_CONFIG.find(s => s.value === status);
    if (item) {
        return t(item.key, item.defaultText);
    }
    return status;
}

window.openStatusDropdown = function(event, jobId) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    const targetBtn = event ? (event.currentTarget || event.target.closest('.status-badge-interactive')) : null;
    if (!targetBtn) return;
    
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    let dropdown = document.getElementById('quickStatusDropdown');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'quickStatusDropdown';
        dropdown.className = 'quick-status-dropdown';
        document.body.appendChild(dropdown);

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && !e.target.closest('.status-badge-interactive')) {
                closeStatusDropdown();
            }
        });

        // Close on window resize or scroll
        window.addEventListener('resize', closeStatusDropdown);
        window.addEventListener('scroll', closeStatusDropdown, true);

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeStatusDropdown();
            }
        });
    }

    // Toggle close if already open for this job
    if (dropdown.style.display === 'block' && dropdown.dataset.currentJobId === jobId) {
        closeStatusDropdown();
        return;
    }

    dropdown.dataset.currentJobId = jobId;

    dropdown.innerHTML = `
        <div class="quick-status-header">
            <span>${t('change_status_title', 'Change Status')}</span>
        </div>
        <div class="quick-status-list">
            ${STATUS_CONFIG.map(opt => {
                const isSelected = job.status === opt.value;
                const label = t(opt.key, opt.defaultText);
                return `
                    <button type="button" 
                            class="quick-status-option ${opt.cls} ${isSelected ? 'active' : ''}" 
                            onclick="quickUpdateJobStatus('${jobId}', '${opt.value}', event)">
                        <span class="status-option-dot"></span>
                        <span class="status-option-label">${label}</span>
                        ${isSelected ? '<ion-icon name="checkmark-outline" class="status-option-check"></ion-icon>' : ''}
                    </button>
                `;
            }).join('')}
        </div>
    `;

    // Make visible but hidden to measure exact dimensions
    dropdown.style.display = 'block';
    dropdown.style.visibility = 'hidden';

    // Calculate positioning
    const rect = targetBtn.getBoundingClientRect();
    const dropW = dropdown.offsetWidth || 210;
    const dropH = dropdown.offsetHeight || 290;
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const margin = 6;
    
    let top = rect.bottom + window.scrollY + margin;

    // Check if dropdown goes below viewport, if so and there is space above, open above
    if (rect.bottom + dropH + margin > window.innerHeight && rect.top - dropH - margin > 0) {
        top = rect.top + window.scrollY - dropH - margin;
    }

    let left;
    if (isRtl) {
        // In RTL, align right edge of dropdown with right edge of badge
        left = rect.right + window.scrollX - dropW;
        if (left < 10) left = 10;
        if (left + dropW > document.documentElement.clientWidth - 10) {
            left = document.documentElement.clientWidth - dropW - 10;
        }
    } else {
        // In LTR, align left edge of dropdown with left edge of badge
        left = rect.left + window.scrollX;
        if (left + dropW > document.documentElement.clientWidth - 10) {
            left = document.documentElement.clientWidth - dropW - 10;
        }
        if (left < 10) left = 10;
    }

    dropdown.style.top = `${Math.round(top)}px`;
    dropdown.style.left = `${Math.round(left)}px`;
    dropdown.style.visibility = 'visible';
};

window.closeStatusDropdown = function() {
    const dropdown = document.getElementById('quickStatusDropdown');
    if (dropdown) {
        dropdown.style.display = 'none';
        delete dropdown.dataset.currentJobId;
    }
};

window.quickUpdateJobStatus = async function(jobId, newStatus, event) {
    if (event) {
        event.stopPropagation();
    }
    closeStatusDropdown();

    const job = jobs.find(j => j.id === jobId);
    if (!job || job.status === newStatus) return;

    job.status = newStatus;

    // Ensure status is active in filters so it doesn't get hidden
    if (typeof activeStatusFilters !== 'undefined') {
        activeStatusFilters.add(newStatus);
    }

    if (typeof renderStatusFilters === 'function') renderStatusFilters();
    if (typeof renderJobs === 'function') renderJobs(searchInput ? searchInput.value : '');
    if (typeof updateStats === 'function') updateStats();

    showStatusToast(t('status_updated_to', 'Status updated to: ') + getLocalizedStatus(newStatus));

    // Save to Supabase
    if (supabaseClient && currentUser && !isDemoMode) {
        try {
            const { error } = await supabaseClient.from('jobs').update({ status: newStatus }).eq('id', jobId);
            if (error) {
                console.error('Failed to update status in Supabase:', error);
            }
        } catch (err) {
            console.error('Error updating status in Supabase:', err);
        }
    }
};

function showStatusToast(msg) {
    let toast = document.getElementById('quickStatusToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'quickStatusToast';
        toast.className = 'quick-status-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon> <span>${msg}</span>`;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

function updateStats() {
    const statTotal = document.getElementById('stat-total');
    const statInterview = document.getElementById('stat-interview');
    const statOffer = document.getElementById('stat-offer');

    if (statTotal) statTotal.textContent = jobs.length;
    if (statInterview) statInterview.textContent = jobs.filter(j => j.status.includes('Interview') || j.status === 'Screening').length;
    if (statOffer) statOffer.textContent = jobs.filter(j => j.status === 'Offer').length;
}

// ==========================================
// JOB FORM & VIEW MODAL CONTROLS
// ==========================================
if (jobForm) {
    jobForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (isDemoMode) clearSampleData();
        
        const jobData = {
            id: currentEditingId || ('job_' + Date.now()),
            company: document.getElementById('company').value,
            title: document.getElementById('title').value,
            location: document.getElementById('location').value,
            date: document.getElementById('date').value,
            cvVersion: document.getElementById('cvVersion').value,
            status: document.getElementById('status').value,
            referral: document.getElementById('referral').value,
            companyProduct: document.getElementById('companyProduct').value,
            jdSummary: document.getElementById('jdSummary').value,
            jdLink: document.getElementById('jdLink').value,
            mustHave: document.getElementById('mustHave').value,
            goodToHave: document.getElementById('goodToHave').value,
            notes: document.getElementById('notes').value,
            matchScore: document.getElementById('matchScore') ? document.getElementById('matchScore').value : '',
            matchRationale: document.getElementById('matchRationale') ? document.getElementById('matchRationale').value : '',
            archived: false
        };

        if (currentEditingId) {
            const index = jobs.findIndex(j => j.id === currentEditingId);
            if (index !== -1) {
                jobData.archived = jobs[index].archived;
                jobs[index] = jobData;
            }
        } else {
            jobs.unshift(jobData);
        }

        renderJobs(searchInput ? searchInput.value : '');
        updateStats();
        closeModal();

        // Save to Supabase Cloud
        if (supabaseClient && currentUser) {
            try {
                const payload = mapJobToDb(jobData);
                const { error } = await supabaseClient.from('jobs').upsert([payload]);
                if (error) {
                    console.warn('Upsert with match_score failed, retrying legacy payload:', error);
                    delete payload.match_score;
                    delete payload.match_rationale;
                    await supabaseClient.from('jobs').upsert([payload]);
                }
            } catch (err) {
                console.error('Failed to save job to Supabase:', err);
            }
        }
    });
}

window.viewJob = function(id) {
    const job = jobs.find(j => j.id === id);
    if (!job) return;
    
    currentEditingId = id;
    viewCompanyTitle.textContent = `${job.company} - ${job.title}`;
    
    let linkHtml = job.jdLink ? (job.jdLink.startsWith('http') ? '<a href="' + job.jdLink + '" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">' + t('open_link', 'Open Link') + '</a>' : job.jdLink) : t('none', 'N/A');
    const localizedStatus = getLocalizedStatus(job.status);

    viewBodyContent.innerHTML = `
        ${job.matchScore ? `
            <div class="view-section" style="background: var(--primary-light); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--primary-border); margin-bottom: 1.25rem;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.88rem; font-weight: 700; color: var(--primary); display: flex; align-items: center; gap: 4px;">
                        <ion-icon name="sparkles"></ion-icon> ${t('match_score_label', 'Match Score:')}
                    </span>
                    <span style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">${job.matchScore}</span>
                </div>
                ${job.matchRationale ? `<p style="margin-top: 0.4rem; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">${job.matchRationale}</p>` : ''}
            </div>
        ` : ''}
        <div class="view-grid">
            <div class="view-section">
                <h3>${t('location_label', 'Location')}</h3>
                <p>${job.location || t('none', 'N/A')}</p>
            </div>
            <div class="view-section">
                <h3>${t('status_label', 'Status')}</h3>
                <p><span class="status-badge status-${job.status.split(' ')[0]}">${localizedStatus}</span></p>
            </div>
            <div class="view-section">
                <h3>${t('application_date', 'Date Applied')}</h3>
                <p>${formatDate(job.date)}</p>
            </div>
            <div class="view-section">
                <h3>${t('cv_version_sent', 'CV Version Sent')}</h3>
                <p>${job.cvVersion || t('none', 'N/A')}</p>
            </div>
        </div>
        
        <div class="view-section">
            <h3>${t('referral_label', 'Referral / Contact Person')}</h3>
            <p>${job.referral || t('none', 'N/A')}</p>
        </div>

        <div class="view-section">
            <h3>${t('company_product_label', 'Company & Product Domain')}</h3>
            <p>${job.companyProduct || t('none', 'N/A')}</p>
        </div>
        
        <div class="view-section">
            <h3>${t('jd_summary_label', 'Role Description (Your Words)')}</h3>
            <p>${job.jdSummary || t('none', 'N/A')}</p>
        </div>

        <div class="view-section">
            <h3>${t('jd_link_label', 'Link to Job Posting')}</h3>
            <p>${linkHtml}</p>
        </div>
        
        <div class="prep-box must">
            <h3>${t('must_have_label', '🔴 MUST PREPARE')}</h3>
            <p>${job.mustHave || t('none', 'No notes')}</p>
        </div>
        
        <div class="prep-box good">
            <h3>${t('good_to_have_label', '🟡 GOOD TO KNOW')}</h3>
            <p>${job.goodToHave || t('none', 'No notes')}</p>
        </div>
        
        <div class="prep-box pitch">
            <h3>${t('notes_label', '💡 Tailored Pitch')}</h3>
            <p>${job.notes || t('none', 'No notes')}</p>
        </div>
    `;
    
    viewModal.classList.add('active');
};

if (editJobBtn) {
    editJobBtn.addEventListener('click', () => {
        const job = jobs.find(j => j.id === currentEditingId);
        if (!job) return;
        
        document.getElementById('company').value = job.company || '';
        document.getElementById('title').value = job.title || '';
        document.getElementById('location').value = job.location || '';
        document.getElementById('date').value = job.date || '';
        document.getElementById('cvVersion').value = job.cvVersion || '';
        document.getElementById('status').value = job.status || 'Applied';
        document.getElementById('referral').value = job.referral || '';
        document.getElementById('companyProduct').value = job.companyProduct || '';
        document.getElementById('jdSummary').value = job.jdSummary || '';
        document.getElementById('jdLink').value = job.jdLink || '';
        document.getElementById('mustHave').value = job.mustHave || '';
        document.getElementById('goodToHave').value = job.goodToHave || '';
        document.getElementById('notes').value = job.notes || '';
        
        const msInput = document.getElementById('matchScore');
        if (msInput) msInput.value = job.matchScore || '';
        const mrInput = document.getElementById('matchRationale');
        if (mrInput) mrInput.value = job.matchRationale || '';

        if (job.matchScore) {
            aiMatchScore.textContent = job.matchScore;
            aiMatchRationale.textContent = job.matchRationale || '';
            aiMatchResult.style.display = 'block';
        } else {
            aiMatchResult.style.display = 'none';
        }
        
        viewModal.classList.remove('active');
        jobModal.classList.add('active');
    });
}

if (deleteJobBtn) {
    deleteJobBtn.addEventListener('click', async () => {
        if (confirm('Are you sure you want to delete this application?')) {
            const targetId = currentEditingId;
            jobs = jobs.filter(j => j.id !== targetId);
            renderJobs(searchInput ? searchInput.value : '');
            updateStats();
            viewModal.classList.remove('active');

            if (supabaseClient && currentUser && !isDemoMode) {
                await supabaseClient.from('jobs').delete().eq('id', targetId);
            }
        }
    });
}

window.archiveJob = async function(id) {
    const job = jobs.find(j => j.id === id);
    if (job) {
        job.archived = !job.archived;
        renderJobs(searchInput ? searchInput.value : '');
        updateStats();

        if (supabaseClient && currentUser && !isDemoMode) {
            await supabaseClient.from('jobs').update({ archived: job.archived }).eq('id', id);
        }
    }
};

window.toggleSummary = function(id) {
    const textEl = document.getElementById(`summary-text-${id}`);
    if (!textEl) return;
    const btnEl = textEl.nextElementSibling;
    if (textEl.classList.contains('expanded')) {
        textEl.classList.remove('expanded');
        if (btnEl) btnEl.textContent = 'Read more...';
    } else {
        textEl.classList.add('expanded');
        if (btnEl) btnEl.textContent = 'Show less';
    }
};

// Open/Close Modal Handlers
if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        currentEditingId = null;
        if (jobForm) jobForm.reset();
        const msInput = document.getElementById('matchScore');
        if (msInput) msInput.value = '';
        const mrInput = document.getElementById('matchRationale');
        if (mrInput) mrInput.value = '';
        if (aiMatchResult) aiMatchResult.style.display = 'none';
        const dateInput = document.getElementById('date');
        if (dateInput) dateInput.valueAsDate = new Date();
        jobModal.classList.add('active');
    });
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
if (closeViewModalBtn) closeViewModalBtn.addEventListener('click', () => viewModal.classList.remove('active'));

function closeModal() {
    if (jobModal) jobModal.classList.remove('active');
    if (jobForm) jobForm.reset();
    const msInput = document.getElementById('matchScore');
    if (msInput) msInput.value = '';
    const mrInput = document.getElementById('matchRationale');
    if (mrInput) mrInput.value = '';
    if (aiMatchResult) aiMatchResult.style.display = 'none';
    currentEditingId = null;
}

window.addEventListener('click', (e) => {
    // Only close read-only view modal on backdrop click; protect job application form against accidental dismissal/data loss
    if (e.target === viewModal) viewModal.classList.remove('active');
});

// Search and Filter Listeners with 0ms Input Lag Debounce
let searchInputRaf = null;
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (searchInputRaf) cancelAnimationFrame(searchInputRaf);
        searchInputRaf = requestAnimationFrame(() => {
            renderJobs(query);
        });
    });
}

if (showArchivedToggle) {
    showArchivedToggle.addEventListener('change', () => {
        renderJobs(searchInput ? searchInput.value : '');
    });
}

// Sorting Headers
document.querySelectorAll('th.sortable').forEach(th => {
    th.addEventListener('click', () => {
        const column = th.getAttribute('data-sort');
        if (currentSortColumn === column) {
            currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            currentSortColumn = column;
            currentSortDirection = column === 'date' ? 'desc' : 'asc';
        }
        renderJobs(searchInput ? searchInput.value : '');
    });
});

// ==========================================
// EXPORT & BACKUP SUITE
// ==========================================
const exportDropdownBtn = document.getElementById('exportDropdownBtn');
const exportMenu = document.getElementById('exportMenu');
const exportCsvBtn = document.getElementById('exportCsvBtn');
const copyTsvBtn = document.getElementById('copyTsvBtn');
const exportJsonBtn = document.getElementById('exportJsonBtn');
const importJsonBtn = document.getElementById('importJsonBtn');
const importJsonInput = document.getElementById('importJsonInput');

if (exportDropdownBtn && exportMenu) {
    exportDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        exportMenu.style.display = exportMenu.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-container')) {
            exportMenu.style.display = 'none';
        }
    });
}

// 1. Download CSV / Excel
if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', () => {
        if (exportMenu) exportMenu.style.display = 'none';
        
        const headers = [
            'Company', 'Job Title', 'AI Match Score', 'Location', 'Status', 'Date Applied',
            'CV Version', 'Referral / Contact', 'Company & Product Domain',
            'Role Description', 'Must Prepare', 'Good to Know', 'Tailored Pitch / Notes', 'Job Posting Link'
        ];
        
        const rows = jobs.map(j => [
            j.company || '',
            j.title || '',
            j.matchScore || '',
            j.location || '',
            j.status || '',
            formatDate(j.date),
            j.cvVersion || '',
            j.referral || '',
            j.companyProduct || '',
            j.jdSummary || '',
            j.mustHave || '',
            j.goodToHave || '',
            j.notes || '',
            j.jdLink || ''
        ]);
        
        const escapeCsv = (str) => `"${(str || '').toString().replace(/"/g, '""')}"`;
        
        let csvContent = '\uFEFF'; // UTF-8 BOM so Excel opens Hebrew & special chars properly
        csvContent += headers.map(escapeCsv).join(',') + '\r\n';
        rows.forEach(r => {
            csvContent += r.map(escapeCsv).join(',') + '\r\n';
        });
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const dateStr = new Date().toISOString().split('T')[0];
        link.setAttribute('href', url);
        link.setAttribute('download', `job_applications_${dateStr}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });
}

// 2. Copy TSV for Excel / Google Sheets
if (copyTsvBtn) {
    copyTsvBtn.addEventListener('click', () => {
        if (exportMenu) exportMenu.style.display = 'none';
        let tsvContent = "Company\tJob Title\tLocation\tStatus\tDate Applied\tNotes\n";
        
        jobs.forEach(j => {
            if (!showArchivedToggle?.checked && j.archived) return;
            const company = (j.company || '').replace(/\t/g, ' ');
            const title = (j.title || '').replace(/\t/g, ' ');
            const location = (j.location || '-').replace(/\t/g, ' ');
            const status = (j.status || '').replace(/\t/g, ' ');
            const date = formatDate(j.date);
            const notes = (j.notes || '').replace(/\n/g, ' ').replace(/\t/g, ' ');
            tsvContent += `${company}\t${title}\t${location}\t${status}\t${date}\t${notes}\n`;
        });
        
        navigator.clipboard.writeText(tsvContent).then(() => {
            if (exportDropdownBtn) {
                const originalHtml = exportDropdownBtn.innerHTML;
                exportDropdownBtn.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon> Copied!';
                setTimeout(() => {
                    exportDropdownBtn.innerHTML = originalHtml;
                }, 2000);
            }
        }).catch(err => {
            console.error('Could not copy text: ', err);
            alert('Failed to copy. Please try again.');
        });
    });
}

// 3. Backup All Data (JSON)
if (exportJsonBtn) {
    exportJsonBtn.addEventListener('click', () => {
        if (exportMenu) exportMenu.style.display = 'none';
        
        const backupData = {
            version: '2.0',
            exportedAt: new Date().toISOString(),
            jobs: jobs,
            documents: documents,
            reminders: reminders
        };
        
        const jsonString = JSON.stringify(backupData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const dateStr = new Date().toISOString().split('T')[0];
        link.setAttribute('href', url);
        link.setAttribute('download', `job_tracker_backup_${dateStr}.json`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });
}

// 4. Restore from JSON Backup
if (importJsonBtn && importJsonInput) {
    importJsonBtn.addEventListener('click', () => {
        if (exportMenu) exportMenu.style.display = 'none';
        importJsonInput.click();
    });

    importJsonInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = async (event) => {
            try {
                const parsed = JSON.parse(event.target.result);
                const importedJobs = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.jobs) ? parsed.jobs : []);
                const importedDocs = Array.isArray(parsed.documents) ? parsed.documents : [];
                const importedReminders = Array.isArray(parsed.reminders) ? parsed.reminders : [];
                
                if (importedJobs.length === 0 && importedDocs.length === 0 && importedReminders.length === 0) {
                    return alert('No valid data found in this JSON backup file.');
                }
                
                const shouldProceed = confirm(`Found in backup file:\n- ${importedJobs.length} Applications\n- ${importedDocs.length} Documents\n- ${importedReminders.length} Reminders\n\nWould you like to import and restore this data?`);
                if (!shouldProceed) return;
                
                // Merge jobs
                importedJobs.forEach(newJob => {
                    const idx = jobs.findIndex(j => j.id === newJob.id);
                    if (idx >= 0) jobs[idx] = newJob;
                    else jobs.push(newJob);
                });
                
                // Merge documents
                importedDocs.forEach(newDoc => {
                    const idx = documents.findIndex(d => d.id === newDoc.id);
                    if (idx >= 0) documents[idx] = newDoc;
                    else documents.push(newDoc);
                });
                
                // Merge reminders
                importedReminders.forEach(newRem => {
                    const idx = reminders.findIndex(r => r.id === newRem.id);
                    if (idx >= 0) reminders[idx] = newRem;
                    else reminders.push(newRem);
                });
                
                // Sync to Supabase if logged in
                if (supabaseClient && currentUser) {
                    for (const j of importedJobs) {
                        await supabaseClient.from('jobs').upsert([mapJobToDb(j)]);
                    }
                    for (const d of importedDocs) {
                        await supabaseClient.from('documents').upsert([mapDocToDb(d)]);
                    }
                    for (const r of importedReminders) {
                        await supabaseClient.from('reminders').upsert([{
                            id: r.id,
                            user_id: currentUser.id,
                            text: r.text,
                            date: r.date,
                            completed: r.completed
                        }]);
                    }
                }
                
                renderJobs();
                updateStats();
                renderDocsUI();
                updateAiCvSelect();
                renderRemindersUI();
                
                alert('Data restored and synced successfully! 🎉');
            } catch (err) {
                console.error('Error importing JSON:', err);
                alert('Failed to parse JSON backup file: ' + err.message);
            } finally {
                importJsonInput.value = '';
            }
        };
        reader.readAsText(file);
    });
}

function formatDate(dateString) {
    if (!dateString) return '-';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(currentLang === 'he' ? 'he-IL' : 'en-US', options);
}

// ==========================================
// SETTINGS & AI COPILOT LOGIC
// ==========================================
if (openSettingsBtn) {
    openSettingsBtn.addEventListener('click', () => {
        if (geminiApiKeyInput) geminiApiKeyInput.value = userGeminiKey;
        if (siteLanguageSelect) siteLanguageSelect.value = currentLang;
        if (aiLanguageSelect) aiLanguageSelect.value = aiOutputLang;
        if (accountSecuritySection) {
            accountSecuritySection.style.display = currentUser ? 'block' : 'none';
        }
        if (newPasswordInput) newPasswordInput.value = '';
        if (confirmNewPasswordInput) confirmNewPasswordInput.value = '';
        if (changePasswordStatus) changePasswordStatus.style.display = 'none';
        if (settingsModal) settingsModal.classList.add('active');
    });
}

if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', () => {
    if (settingsModal) settingsModal.classList.remove('active');
});

// Update Password Handler
if (changePasswordBtn) {
    changePasswordBtn.addEventListener('click', async () => {
        const p1 = newPasswordInput ? newPasswordInput.value : '';
        const p2 = confirmNewPasswordInput ? confirmNewPasswordInput.value : '';
        if (!p1 || p1.length < 6) {
            if (changePasswordStatus) {
                changePasswordStatus.textContent = currentLang === 'he' ? 'הסיסמה חייבת להכיל לפחות 6 תווים.' : 'Password must be at least 6 characters.';
                changePasswordStatus.style.background = 'var(--status-rejected-bg)';
                changePasswordStatus.style.color = 'var(--status-rejected-text)';
                changePasswordStatus.style.display = 'block';
            }
            return;
        }
        if (p1 !== p2) {
            if (changePasswordStatus) {
                changePasswordStatus.textContent = currentLang === 'he' ? 'הסיסמאות אינן תואמות.' : 'Passwords do not match.';
                changePasswordStatus.style.background = 'var(--status-rejected-bg)';
                changePasswordStatus.style.color = 'var(--status-rejected-text)';
                changePasswordStatus.style.display = 'block';
            }
            return;
        }

        changePasswordBtn.disabled = true;
        try {
            if (!supabaseClient) throw new Error('Supabase client not initialized.');
            const { error } = await supabaseClient.auth.updateUser({ password: p1 });
            if (error) throw error;
            if (changePasswordStatus) {
                changePasswordStatus.textContent = currentLang === 'he' ? 'הסיסמה עודכנה בהצלחה!' : 'Password updated successfully!';
                changePasswordStatus.style.background = 'var(--status-offer-bg)';
                changePasswordStatus.style.color = 'var(--status-offer-text)';
                changePasswordStatus.style.display = 'block';
            }
            if (newPasswordInput) newPasswordInput.value = '';
            if (confirmNewPasswordInput) confirmNewPasswordInput.value = '';
            if (window.va) window.va('event', { name: 'password_updated' });
        } catch (err) {
            if (changePasswordStatus) {
                changePasswordStatus.textContent = err.message || 'Error updating password.';
                changePasswordStatus.style.background = 'var(--status-rejected-bg)';
                changePasswordStatus.style.color = 'var(--status-rejected-text)';
                changePasswordStatus.style.display = 'block';
            }
        } finally {
            changePasswordBtn.disabled = false;
        }
    });
}

if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', () => {
        userGeminiKey = geminiApiKeyInput ? geminiApiKeyInput.value.trim() : '';
        localStorage.setItem('userGeminiKey', userGeminiKey);
        
        if (aiLanguageSelect) {
            aiOutputLang = aiLanguageSelect.value;
            localStorage.setItem('aiLang', aiOutputLang);
        }

        if (siteLanguageSelect && siteLanguageSelect.value !== currentLang) {
            setLanguage(siteLanguageSelect.value);
        }
        
        if (settingsModal) settingsModal.classList.remove('active');
        alert(currentLang === 'he' ? 'ההגדרות נשמרו בהצלחה!' : 'Settings saved successfully!');
    });
}

function updateAiCvSelect() {
    if (!aiCvSelect) return;
    aiCvSelect.innerHTML = `<option value="">${t('select_cv_prompt', '-- Select your CV to compare against --')}</option>`;
    documents.filter(d => d.type.includes('CV') || d.type.includes('Resume') || d.type === 'Other').forEach(doc => {
        const opt = document.createElement('option');
        opt.value = doc.id;
        opt.textContent = doc.version + (doc.parsedText ? ` (${t('ai_parsed_status', 'Has Parsed Text')})` : '');
        aiCvSelect.appendChild(opt);
    });
}

// ==========================================
// AI FEEDBACK COMPONENT HANDLERS
// ==========================================
if (aiFeedbackThumbUp) {
    aiFeedbackThumbUp.addEventListener('click', () => {
        currentAiFeedbackRating = 'positive';
        aiFeedbackThumbUp.classList.add('active-positive');
        if (aiFeedbackThumbDown) aiFeedbackThumbDown.classList.remove('active-negative');
        if (aiFeedbackInputRow) aiFeedbackInputRow.style.display = 'flex';
        if (aiFeedbackSuccess) aiFeedbackSuccess.style.display = 'none';
    });
}

if (aiFeedbackThumbDown) {
    aiFeedbackThumbDown.addEventListener('click', () => {
        currentAiFeedbackRating = 'negative';
        aiFeedbackThumbDown.classList.add('active-negative');
        if (aiFeedbackThumbUp) aiFeedbackThumbUp.classList.remove('active-positive');
        if (aiFeedbackInputRow) aiFeedbackInputRow.style.display = 'flex';
        if (aiFeedbackSuccess) aiFeedbackSuccess.style.display = 'none';
    });
}

if (aiSubmitFeedbackBtn) {
    aiSubmitFeedbackBtn.addEventListener('click', () => {
        submitFeedback(true);
    });
}

async function submitFeedback(isExplicitSubmit = false) {
    const comment = aiFeedbackComment ? aiFeedbackComment.value.trim() : '';
    if (!currentAiFeedbackRating) return;

    if (isExplicitSubmit) {
        if (aiFeedbackInputRow) aiFeedbackInputRow.style.display = 'none';
        if (aiFeedbackThumbUp) aiFeedbackThumbUp.style.pointerEvents = 'none';
        if (aiFeedbackThumbDown) aiFeedbackThumbDown.style.pointerEvents = 'none';
        if (aiFeedbackSuccess) aiFeedbackSuccess.style.display = 'block';
    }
    
    // Track via Vercel Custom Event
    if (window.va) {
        window.va('event', { 
            name: 'ai_feedback', 
            rating: currentAiFeedbackRating, 
            hasComment: !!comment 
        });
    }

    // Save to Supabase if table exists
    if (supabaseClient && currentUser) {
        try {
            await supabaseClient.from('ai_feedback').insert([{
                user_id: currentUser.id,
                rating: currentAiFeedbackRating,
                comment: comment,
                company: document.getElementById('company')?.value || '',
                job_title: document.getElementById('title')?.value || '',
                created_at: new Date().toISOString()
            }]);
        } catch (err) {
            console.log('Note: feedback logged (remote table optional):', err.message);
        }
    }
}

// ==========================================
// PDF PARSING HELPERS
// ==========================================
async function extractTextFromPdf(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + '\n';
        }
        return fullText;
    } catch (e) {
        console.error('Error parsing PDF:', e);
        return null;
    }
}

if (runAiBtn) {
    runAiBtn.addEventListener('click', async () => {
        const jdText = aiRawJd ? aiRawJd.value.trim() : '';
        const cvId = aiCvSelect ? aiCvSelect.value : '';
        
        if (!jdText) return alert(currentLang === 'he' ? 'אנא הדבק תיאור משרה תחילה.' : 'Please paste a Job Description first.');
        if (!cvId) return alert(currentLang === 'he' ? 'אנא בחר קורות חיים להשוואה.' : 'Please select a CV to compare against.');

        const selectedCv = documents.find(d => d.id === cvId);
        if (!selectedCv) return alert(currentLang === 'he' ? 'קורות החיים לא נמצאו.' : 'CV not found.');
        const cvText = selectedCv.parsedText;
        if (!cvText) return alert(currentLang === 'he' ? 'לקובץ קורות חיים זה אין טקסט מפוענח. אנא העלה קובץ PDF עם אישור AI.' : 'This CV has no parsed text. Please upload the PDF version of your CV.');

        aiLoading.style.display = 'flex';
        aiMatchResult.style.display = 'none';
        runAiBtn.disabled = true;

        // Reset Feedback state
        if (aiFeedbackThumbUp) {
            aiFeedbackThumbUp.classList.remove('active-positive');
            aiFeedbackThumbUp.style.pointerEvents = 'auto';
        }
        if (aiFeedbackThumbDown) {
            aiFeedbackThumbDown.classList.remove('active-negative');
            aiFeedbackThumbDown.style.pointerEvents = 'auto';
        }
        if (aiFeedbackInputRow) aiFeedbackInputRow.style.display = 'none';
        if (aiFeedbackSuccess) aiFeedbackSuccess.style.display = 'none';
        if (aiFeedbackComment) aiFeedbackComment.value = '';
        currentAiFeedbackRating = null;

        const aiTimerEl = document.getElementById('aiTimer');
        let startTime = Date.now();
        if (aiTimerEl) aiTimerEl.textContent = '(0.0s)';
        let timerInterval = setInterval(() => {
            let elapsed = (Date.now() - startTime) / 1000;
            if (aiTimerEl) aiTimerEl.textContent = `(${elapsed.toFixed(1)}s)`;
        }, 100);

        try {
            const effectiveAiLang = (aiOutputLang === 'auto' ? currentLang : aiOutputLang);
            const isHebrew = (effectiveAiLang === 'he');

            const prompt = `You are an expert tech recruiter and career coach. I am applying for a job.
Here is my CV text:
---
${cvText}
---

Here is the raw Job Description:
---
${jdText}
---

${isHebrew ? 'CRITICAL LANGUAGE INSTRUCTION: Output all JSON field values ("matchRationale", "companyProduct", "jdSummary", "mustHave", "goodToHave", "tailoredPitch") in fluent, professional, high-standard Hebrew (עברית). You may keep company name and job title in their standard recognized format.' : 'Output all JSON field values in fluent, professional English.'}

Analyze them and return a JSON object with EXACTLY these keys:
1. "matchScore": A string like "${isHebrew ? '85% - התאמה גבוהה' : '85%'}".
2. "matchRationale": A 2-3 sentence explanation of why this is the score.
3. "companyProduct": A short summary of what the company/team builds.
4. "jdSummary": A concise summary of the role.
5. "mustHave": Bullet points of the strict requirements from the JD and if I have them. Add a blank line between each bullet point.
6. "goodToHave": Bullet points of nice-to-haves and if I have them. Add a blank line between each bullet point.
7. "companyName": Extract the name of the company hiring.
8. "jobTitle": Extract the title of the role.
9. "location": Extract the job location, including if it's Remote or Hybrid.
10. "tailoredPitch": Specific projects, skills, or achievements from my CV that directly match this role, along with a winning 2-3 sentence talking pitch to emphasize during the interview.

Return ONLY valid JSON, nothing else, no markdown fences.`;

            let res;
            if (userGeminiKey) {
                // BYOK: Direct to Google API
                res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${userGeminiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }],
                        generationConfig: { response_mime_type: 'application/json' }
                    })
                });
            } else {
                // Free Tier: Proxy via Vercel Backend with Supabase JWT Auth
                let authToken = '';
                if (supabaseClient && supabaseClient.auth) {
                    try {
                        const { data: sessionData } = await supabaseClient.auth.getSession();
                        authToken = sessionData?.session?.access_token || '';
                    } catch (e) {
                        console.warn('Could not fetch Supabase session token:', e);
                    }
                }

                res = await fetch('/api/gemini', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    },
                    body: JSON.stringify({ prompt: prompt })
                });
            }

            if (!res.ok) {
                let errCode = '';
                let errMessage = 'API Error';
                try {
                    const errText = await res.text();
                    try {
                        const err = JSON.parse(errText);
                        errCode = err.code || '';
                        errMessage = err.error?.message || err.error || err.message || `API Error: ${errText}`;
                    } catch(e) {
                        errMessage = `HTTP ${res.status} ${res.statusText}: ${errText}`;
                    }
                } catch(e) {
                    errMessage = `HTTP ${res.status} ${res.statusText}`;
                }

                if (res.status === 401 || errCode === 'AUTH_REQUIRED') {
                    throw new Error('AUTH_REQUIRED');
                }
                if (errCode === 'RATE_LIMIT_MINUTE_EXCEEDED') {
                    throw new Error('RATE_LIMIT_MINUTE_EXCEEDED');
                }
                if (errCode === 'RATE_LIMIT_DAILY_EXCEEDED') {
                    throw new Error('RATE_LIMIT_DAILY_EXCEEDED');
                }
                if (errCode === 'COMMUNITY_POOL_FULL' || (!userGeminiKey && (res.status === 429 || res.status === 503))) {
                    throw new Error('COMMUNITY_POOL_FULL');
                }
                throw new Error(errMessage);
            }

            const data = await res.json();
            const jsonText = data.candidates[0].content.parts[0].text;
            const parsed = JSON.parse(jsonText);

            document.getElementById('companyProduct').value = parsed.companyProduct || '';
            document.getElementById('jdSummary').value = parsed.jdSummary || '';
            document.getElementById('mustHave').value = parsed.mustHave || '';
            document.getElementById('goodToHave').value = parsed.goodToHave || '';
            if (parsed.tailoredPitch) {
                document.getElementById('notes').value = parsed.tailoredPitch;
            }

            if (parsed.companyName) document.getElementById('company').value = parsed.companyName;
            if (parsed.jobTitle) document.getElementById('title').value = parsed.jobTitle;
            if (parsed.location) document.getElementById('location').value = parsed.location;

            // Auto-resize textareas to fit content
            ['companyProduct', 'jdSummary', 'mustHave', 'goodToHave', 'notes'].forEach(id => {
                const el = document.getElementById(id);
                if(el) {
                    el.style.height = 'auto';
                    el.style.height = (el.scrollHeight) + 'px';
                }
            });

            aiMatchScore.textContent = parsed.matchScore || 'N/A';
            aiMatchRationale.textContent = parsed.matchRationale || '';
            aiMatchResult.style.display = 'block';

            const msInput = document.getElementById('matchScore');
            if (msInput) msInput.value = parsed.matchScore || '';
            const mrInput = document.getElementById('matchRationale');
            if (mrInput) mrInput.value = parsed.matchRationale || '';

            // Track Vercel Custom Event
            if (window.va) {
                window.va('event', { 
                    name: 'ai_analysis_performed', 
                    tier: userGeminiKey ? 'byok' : 'community',
                    lang: effectiveAiLang 
                });
            }

        } catch (error) {
            console.error(error);
            const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
            if (error.message === 'AUTH_REQUIRED') {
                alert(t.ai_error_auth_required || 'You must be logged in to use the AI assistant.');
            } else if (error.message === 'RATE_LIMIT_MINUTE_EXCEEDED') {
                alert(t.ai_error_minute_limit || 'Too many requests. Please wait a minute and try again.');
            } else if (error.message === 'RATE_LIMIT_DAILY_EXCEEDED') {
                alert(t.ai_error_daily_limit || 'Daily AI limit reached (25 requests per day). Add your own free Gemini API key in Settings to continue without limits.');
            } else if (error.message === 'COMMUNITY_POOL_FULL') {
                alert(t.ai_error_pool_full || 'The public community pool is temporarily full. You can enter your own free Gemini API key in Settings to continue immediately.');
            } else {
                alert('AI Generation failed: ' + error.message);
            }
        } finally {
            clearInterval(timerInterval);
            aiLoading.style.display = 'none';
            runAiBtn.disabled = false;
        }
    });
}

// ==========================================
// COLLAPSIBLE SECTIONS (DOCS & REMINDERS)
// ==========================================
function initCollapsibleSections() {
    const docsSection = document.getElementById('docsSection');
    const toggleDocsBtn = document.getElementById('toggleDocsBtn');
    const toggleDocsHeader = document.getElementById('toggleDocsHeader');

    const remindersSection = document.getElementById('remindersSection');
    const toggleRemindersBtn = document.getElementById('toggleRemindersBtn');
    const toggleRemindersHeader = document.getElementById('toggleRemindersHeader');

    // Restore saved collapse states from LocalStorage
    if (localStorage.getItem('docsCollapsed') === 'true') {
        if (docsSection) docsSection.classList.add('section-collapsed');
    }
    if (localStorage.getItem('remindersCollapsed') === 'true') {
        if (remindersSection) remindersSection.classList.add('section-collapsed');
    }

    function toggleDocs() {
        if (!docsSection) return;
        const isCollapsed = docsSection.classList.toggle('section-collapsed');
        localStorage.setItem('docsCollapsed', isCollapsed ? 'true' : 'false');
    }

    function toggleReminders() {
        if (!remindersSection) return;
        const isCollapsed = remindersSection.classList.toggle('section-collapsed');
        localStorage.setItem('remindersCollapsed', isCollapsed ? 'true' : 'false');
    }

    if (toggleDocsBtn) toggleDocsBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleDocs(); });
    if (toggleDocsHeader) toggleDocsHeader.addEventListener('click', toggleDocs);

    if (toggleRemindersBtn) toggleRemindersBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleReminders(); });
    if (toggleRemindersHeader) toggleRemindersHeader.addEventListener('click', toggleReminders);
}

// ==========================================
// PASSWORD VISIBILITY TOGGLES & PLACEHOLDER FOCUS
// ==========================================
function initPasswordToggles() {
    document.querySelectorAll('.toggle-password-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const wrapper = btn.closest('.password-input-wrapper');
            if (!wrapper) return;
            const input = wrapper.querySelector('input');
            const icon = btn.querySelector('ion-icon');
            if (!input) return;

            if (input.type === 'password') {
                input.type = 'text';
                if (icon) icon.setAttribute('name', 'eye-off-outline');
                btn.setAttribute('title', 'Hide password');
            } else {
                input.type = 'password';
                if (icon) icon.setAttribute('name', 'eye-outline');
                btn.setAttribute('title', 'Show password');
            }
        });
    });

    // Clear placeholder instantly upon focus across all inputs
    document.querySelectorAll('input, textarea').forEach(inp => {
        const origPlaceholder = inp.getAttribute('placeholder');
        if (origPlaceholder) {
            inp.addEventListener('focus', () => {
                inp.dataset.originalPlaceholder = inp.getAttribute('placeholder') || origPlaceholder;
                inp.setAttribute('placeholder', '');
            });
            inp.addEventListener('blur', () => {
                if (inp.dataset.originalPlaceholder && !inp.value) {
                    inp.setAttribute('placeholder', inp.dataset.originalPlaceholder);
                }
            });
        }
    });
}

// Modal Scroll Lock Synchronizer
function initModalScrollLock() {
    function syncModalScrollLock() {
        const hasActiveModal = document.querySelector('.modal-overlay.active') !== null;
        if (hasActiveModal) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }

    const modalObserver = new MutationObserver(syncModalScrollLock);
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modalObserver.observe(modal, { attributes: true, attributeFilter: ['class'] });
    });
    syncModalScrollLock();
}

// ==========================================
// INITIALIZE APPLICATION & LANGUAGE
// ==========================================
initCollapsibleSections();
initPasswordToggles();
initModalScrollLock();
setLanguage(currentLang);
checkAuth();

