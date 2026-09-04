# ScanAI — Clinical AI & Point-of-Care Diagnostic Systems

Professional web platform for ScanAI Medical Healthcare Technologies, showcasing point-of-care artificial intelligence, 12-lead electrocardiographs, and digital radiography systems.

## Project Structure

```
.
├── index.html           # Landing page with video demonstration & clinical showcase
├── products.html        # Verified medical equipment catalog & specifications
├── about.html           # Institutional mission, leadership, and clinical focus
├── contact.html         # Clinical trial, demo, and inquiry request portal
├── 404.html             # Healthcare error fallback page
├── favicon.png          # Website favicon
├── .nojekyll            # Ensures GitHub Pages serves all assets directly
├── vercel.json          # Vercel static deployment configuration
├── assets/              # Medical product photography, diagrams, and video demo
├── css/
│   ├── variables.css    # Clinical design tokens (Inter font, 70/20/10 palette)
│   ├── main.css         # Core layout, sticky navigation, device mockups
│   ├── components.css   # Buttons, cards, modals, form controls
│   └── responsive.css   # 320px–1920px responsive media queries
└── js/
    ├── main.js          # Sticky header, drawer, video player, Web3Forms integration
    └── products-data.js # Verified product specifications and modalities
```

## Features

- **Pure Zero-Build Static Web**: Runs natively in any browser; instantly deployable to GitHub Pages, Cloudflare Pages, Vercel, or Netlify.
- **Web3Forms Integration**: Connected live demonstration and inquiry form delivering inquiries to `hello@scanai.health`.
- **Direct Institutional Contact**: Direct line support (`+91 8792126143`) and dedicated clinical inquiry email (`hello@scanai.health`).
- **Apple-Grade Product Showcase**: Realistic floating smartphone product render hosting the high-resolution ScanAI video demonstration with interactive controls.
- **Strict Compliance**: 100% truthful clinical copy, single unified font (Inter), zero unverified regulatory or statistical claims.

## Deployment to GitHub Pages

1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: complete ScanAI medical technology web platform"
   git branch -M main
   ```

2. Link your remote repository and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. In GitHub:
   - Navigate to **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **`main`** / folder: **`/ (root)`**
   - Click **Save**