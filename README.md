# RG Surveys — Single Page Website (React + Tailwind)

This is a ready-to-deploy React + Tailwind project scaffold for **RG Surveys**. It includes:
- Single-page layout: Home, Services, Get a Quote, Contact
- Google Maps drawing integration (uses the Maps Drawing Library)
- Email sending via **EmailJS** (frontend-only)
- Logo asset located at `public/assets/logo.png` (the uploaded logo)

---

## Quick setup (local)

1. Install Node.js (v18+ recommended) and npm.
2. In the project folder, install dependencies:
```bash
npm install
```

3. Edit `index.html` and replace `YOUR_GOOGLE_MAPS_API_KEY` with your Google Maps API key (enable Maps JavaScript API, Places and Drawing libraries). Example:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&libraries=drawing,places"></script>
```

4. Configure EmailJS:
   - Create an account at https://www.emailjs.com
   - Add an Email Service (Outlook or SMTP)
   - Create an Email Template for quote requests (include template fields like `service_type`, `customer_name`, etc.)
   - Copy your **Service ID**, **Template ID**, and **Public Key**.
   - Open `src/components/Quote.jsx` and replace the placeholders `YOUR_EMAILJS_SERVICE_ID`, `YOUR_EMAILJS_TEMPLATE_ID`, `YOUR_EMAILJS_PUBLIC_KEY` with the values from EmailJS.

5. Run locally:
```bash
npm run dev
```

6. Build for production:
```bash
npm run build
```

---
## Deploy to Vercel (recommended)

1. Create a GitHub repository (see below) and push the project.
2. Sign up at https://vercel.com and connect your GitHub account.
3. Import the repository and deploy — Vercel will detect Vite/React automatically.
4. Add your domain `rgsurvey.com` in the Vercel project settings and follow the DNS instructions from your domain registrar.

---
## Push to GitHub (example commands)

```bash
git init
git add .
git commit -m "Initial RG Surveys website"
# Create repo on GitHub (name: rg-surveys-website)
git branch -M main
git remote add origin https://github.com/<your-username>/rg-surveys-website.git
git push -u origin main
```

---
## Notes & Next steps
- Replace API keys and EmailJS IDs before deploying.
- You can customize styling in `tailwind.config.cjs` and `src/index.css`.
- If you want server-side email handling (instead of EmailJS), I can supply a simple serverless function example (Vercel Serverless or Netlify Functions).

