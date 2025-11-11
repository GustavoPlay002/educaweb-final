EducaWeb Next.js - Deploy & Setup (Quick Start)
==============================================

What this package contains
- Next.js + Tailwind minimal site for EducaWeb
- 3 course cards (Development, Marketing, Design) with "Gerar Pix" buttons
- Buttons open a modal with the amount and a placeholder for the Pix key (no sensitive data included)

IMPORTANT: This package intentionally does NOT include your real Pix key. Add your key only on your machine or as an environment variable in Vercel.

Quick steps to run locally
1. npm install
2. create a file `.env.local` based on `.env.example` and set NEXT_PUBLIC_PIX_KEY to your Pix key
   (or set NEXT_PUBLIC_PIX_KEY in Vercel as an environment variable before deploying)
3. npm run dev
4. Open http://localhost:3000

Deploy to Vercel (recommended)
1. Push this repo to GitHub
2. Create a project in Vercel and connect the GitHub repo
3. In the Vercel dashboard, add Environment Variable:
   - Name: NEXT_PUBLIC_PIX_KEY
   - Value: <your pix key>
4. Deploy. After deploy, visit the public URL and test the "Gerar Pix" button.

How the Pix button works
- The site shows a modal with the course price and a copyable Pix key (from NEXT_PUBLIC_PIX_KEY).
- It also provides a "Copy payment text" button you can use to paste into payment apps or manually generate QR codes in your bank app.

Need help?
- If you want, I can generate step-by-step screenshots for deploying to Vercel and adding Env vars.
