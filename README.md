# RG Surveys Website

Single-page website for **RG Surveys** using React (Vite) + TailwindCSS.

## 🚀 Deploy Steps

1. **Upload to GitHub**
   - Create new repo on GitHub (e.g., `rg-surveys-website`)
   - Click “Upload files” and drag all files from this folder (not the folder itself)
   - Click **Commit changes**

2. **Deploy on Vercel**
   - Visit [https://vercel.com/new](https://vercel.com/new)
   - Choose **Continue with GitHub**
   - Select your `rg-surveys-website` repo
   - Framework preset: **Vite**
   - Click **Deploy**

3. **Google Maps API**
   - Get an API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Maps JavaScript API, Places API, Drawing API
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` in `public/index.html`

4. **EmailJS Setup**
   - Sign up at [https://emailjs.com](https://emailjs.com)
   - Get `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`
   - Replace in `src/components/Quote.jsx`

Vercel will automatically install dependencies and host your website.
