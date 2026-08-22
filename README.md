# 🚀 Job Tracker Cloud & AI Interview Prep Hub

<div align="center">

[![Live App](https://img.shields.io/badge/Live_App-trackyourapp.app-0070f3?style=for-the-badge&logo=vercel&logoColor=white)](https://trackyourapp.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Supabase](https://img.shields.io/badge/Supabase-Database%20%26%20Auth-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI%20Copilot-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)](https://ai.google.dev/)

**A modern, privacy-first, cloud-synchronized web application designed for students and software engineers to manage job applications, match CVs against job descriptions, generate tailored interview prep guides, track documents, and set reminders.**

[🌐 Live Demo](https://trackyourapp.app/) • [✨ Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [🚀 Quick Start](#-quick-start) • [💻 Self-Hosting & Database Setup](#-self-hosting--database-setup) • [🔒 Privacy & Security](#-privacy--security)

</div>

---

## 🌟 Overview

Searching for a job in tech requires tracking tens or hundreds of applications across different CV versions, interview stages, and technical requirements. **Job Tracker Cloud** is an all-in-one productivity hub built to streamline the entire job search lifecycle:

1. **Track Applications:** Monitor your job pipeline across custom stages from "To Apply" to "Offer".
2. **AI Copilot & Match Scoring:** Paste raw Job Descriptions and match them against your uploaded CV to get a match score, role summary, and prioritized technical interview prep synthesis.
3. **Documents Hub:** Organize tailored CV versions, university grade transcripts, cover letters, and certifications with client-side PDF text extraction and Google Drive links.
4. **Reminders & Notes:** Never miss a recruiter follow-up, referral deadline, or interview date.
5. **Cross-Device Cloud Sync:** Real-time synchronization across desktop and mobile powered by Supabase with Row Level Security (RLS).
6. **Bilingual & Accessible:** Full Hebrew (RTL) & English (LTR) support, WCAG 2.1 AA compliant.

---

## ✨ Features

### 🎯 1. Application Pipeline Dashboard
- **Status Workflow:** Track jobs through 8 lifecycle stages (`To Apply`, `Applied`, `Referral Submitted`, `Screening (Phone/HR)`, `Technical Interview`, `Offer`, `Not Relevant`, `Rejected`).
- **Interactive Multi-Filter & Search:** Filter by any combination of statuses simultaneously and search instantaneously across company names, roles, and notes.
- **Sortable Columns:** One-click sorting by Company, Location, Status, or Date Applied.
- **Archive System:** Keep your active pipeline clean by archiving closed or rejected applications while retaining historical records.
- **Metric Cards:** Real-time summary statistics for Total Applications, Active Interviews, and Offers Received.

### 🤖 2. Smart AI Copilot & Match Analysis
- **One-Click Auto-Fill:** Simply paste a raw job description text. The AI extracts the company name, role title, location, and company product domain automatically.
- **CV Match Score:** Select any of your uploaded CVs to calculate a percentage match score and clear qualitative rationale comparing your background with the job requirements.
- **Structured Interview Prep Synthesis:**
  - 🔴 **MUST PREPARE:** Essential technical topics, core algorithms, architectures, and required domain knowledge.
  - 🟡 **GOOD TO KNOW:** Bonus tools, frameworks, and secondary qualifications.
  - 💡 **Tailored Pitch & Action Items:** Concrete recommendations on which personal projects, achievements, or coursework to highlight during the interview.
- **Flexible AI Engine:** Uses the shared serverless proxy (`api/gemini.js` with Google Gemini) out of the box, or allows users to input their own private Google Gemini API key in Settings.
- **Multilingual AI Output:** Choose whether the AI responds in Hebrew, English, or matches your active interface language.

### 📄 3. Documents & CV Hub
- **Multi-Version CV Management:** Track multiple tailored CV versions (e.g., *Low-Level / C++*, *Full-Stack / React*, *ML / Data Science*) and University transcripts.
- **Client-Side PDF Text Extraction:** Extract text directly in the browser using [PDF.js](https://mozilla.github.io/pdf.js/) for instant AI matching without transmitting heavy PDF binaries.
- **Cloud Links & Changelogs:** Store Google Drive / OneDrive URLs and track version history notes (e.g., *"Added Systems Lab grade, updated Distributed Systems project"*).

### 📌 4. Reminders & Quick Notes
- Fast-entry task manager to track recruiter check-ins, employee referral follow-ups, and pending coding tests.
- One-click completion toggles, active count badges, and instant deletion.

### 📊 5. Data Portability (Export, Backup & Restore)
- **Excel / CSV Download:** Export all filtered applications into a downloadable `.csv` file.
- **One-Click TSV Copy:** Copy formatted table data directly to your clipboard for instant pasting into Google Sheets or Microsoft Excel.
- **Full JSON Backup & Restore:** Export your complete workspace (jobs, documents, reminders) into a JSON backup file and restore it on any device.

### 🌐 6. Internationalization & Accessibility (a11y)
- **Full Bilingual Support:** Instant toggle between **Hebrew (עברית - RTL)** and **English (LTR)** across all modals, labels, and notifications.
- **Accessibility Standards:** Built to comply with **WCAG 2.1 AA** and Israeli Standard IS 5568:
  - Full keyboard navigation (`Tab`, `Enter`, `Esc` for modals).
  - High-contrast visual cues and responsive design for all screen sizes.
  - Semantic HTML5 and screen-reader ARIA support.
  - Formal Accessibility Statement modal.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
|---|---|---|
| **Frontend** | Vanilla HTML5, CSS3, Modern ES6+ JavaScript | Fast, zero-build lightweight frontend with glassmorphism UI |
| **Authentication & Database** | [Supabase](https://supabase.com/) | Managed PostgreSQL, Row-Level Security (RLS), Google OAuth & Email Auth |
| **AI Engine** | [Google Gemini API](https://ai.google.dev/) | Structured JSON analysis, CV matching, and prep generation |
| **Serverless API** | Vercel Serverless Functions (`api/gemini.js`) | Secure backend proxy for AI generation requests |
| **PDF Processing** | [PDF.js](https://mozilla.github.io/pdf.js/) (Mozilla) | Fast client-side PDF text extraction |
| **Icons** | [Ionicons 7](https://ionic.io/ionicons) | Modern, clean vector icon set |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) | Continuous deployment connected to GitHub `main` branch |
| **Analytics** | Vercel Web Analytics | Privacy-conscious site usage metrics |

---

## 🚀 Quick Start

### Using the Live Cloud Web App
1. Navigate to **[https://trackyourapp.app/](https://trackyourapp.app/)**
2. Sign in with **Google One-Click** or create an account with **Email & Password**.
3. (Optional) In the **Documents** section, upload your CV(s) in PDF format to enable AI match scoring.
4. Click **New Application** and paste a job posting to generate your first AI preparation guide!

---

## 💻 Self-Hosting & Database Setup

If you prefer to run your own instance and database:

### 1. Clone the Repository
```bash
git clone https://github.com/YonatanGafri/job-tracker-app.git
cd job-tracker-app
```

### 2. Set Up Supabase Project
1. Create a free account at [supabase.com](https://supabase.com) and start a new project.
2. Go to the **SQL Editor** tab in your Supabase dashboard and run the schema below:

```sql
-- 1. Create Jobs Table
CREATE TABLE IF NOT EXISTS public.jobs (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    company TEXT NOT NULL,
    title TEXT NOT NULL,
    location TEXT,
    date DATE,
    cv_version TEXT,
    status TEXT,
    referral TEXT,
    jd_link TEXT,
    jd_summary TEXT,
    company_product TEXT,
    must_have TEXT,
    good_to_have TEXT,
    notes TEXT,
    match_score TEXT,
    match_rationale TEXT,
    archived BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Documents Table
CREATE TABLE IF NOT EXISTS public.documents (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    version TEXT NOT NULL,
    date DATE,
    link TEXT,
    change_log TEXT,
    parsed_text TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Reminders Table
CREATE TABLE IF NOT EXISTS public.reminders (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    date DATE,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create Feedback Table (Give Feedback)
CREATE TABLE IF NOT EXISTS public.feedback (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    user_email TEXT,
    category TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reminders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- 6. Strict User Isolation Policies
CREATE POLICY "Users can manage own jobs" ON public.jobs
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage own documents" ON public.documents
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage own reminders" ON public.reminders
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow anyone to insert feedback" ON public.feedback
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own feedback" ON public.feedback
    FOR SELECT USING (auth.uid() = user_id);
```

### 3. Configure Credentials in `app.js`
Open `app.js` and set your Supabase Project URL and Public Anon Key:
```javascript
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

### 4. Configure Google Gemini AI (Optional)
- **For Vercel Deployment:** Set the `GEMINI_API_KEY` environment variable in your Vercel Project Settings.
- **For Client-Side Use:** Users can enter their free Gemini API Key directly in the app via **Settings ⚙️ -> AI Copilot Configuration**.

### 5. Run Locally or Deploy
- **Local Development:** Run with any static server:
  ```bash
  npx serve .
  # or use VS Code 'Live Server' extension
  ```
- **Deploy to Vercel:** Push your repository to GitHub and import it into Vercel for automatic zero-config deployments.

---

## 🔒 Privacy & Security

- **Strict Isolation via RLS:** Every single record is constrained to `auth.uid() = user_id`. No user can ever query or modify data belonging to another user.
- **Client-Side API Key Storage:** When entering a custom Gemini API Key in settings, it is stored exclusively in your browser's local storage and communicated directly to Google's API without hitting intermediate servers.
- **Right to Erasure (GDPR):** You can delete individual jobs, documents, or reminders anytime, or click **"Delete All My Data"** in the Privacy modal to permanently erase all records.
- **Support & Erasure Contact:** For account deletion inquiries, contact [yonatangafri@gmail.com](mailto:yonatangafri@gmail.com).

---

## 👤 Author & Acknowledgments

- **Creator:** Yonatan Gafri ([yonatangafri@gmail.com](mailto:yonatangafri@gmail.com))
- **Special Thanks:** [Almog Shtaigmann](https://www.linkedin.com/in/almog-shtaigmann/) for sharing invaluable insights on structured job search processes and interview preparation methods.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this project for personal and commercial purposes.