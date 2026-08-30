# V Manglik & Co. Website

## Overview

A professional single-page website for **V Manglik & Co.**, Chartered Accountants. The site presents the firm’s philosophy, audiences served, professional services, and contact information in a clean, trustworthy design suited to a premium professional-services practice.

**Tagline:** Precision | Integrity | Growth  
**Founded:** 2000

## Technology

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks. No build tools. No package manager.

## No Backend Required

This website is completely static and does not require an application server, database, backend, Node.js runtime, or server-side processing.

You can host it on Azure Storage Static Website hosting, Amazon S3 static website hosting, GitHub Pages, Cloudflare Pages, Netlify, or any ordinary static web server by uploading the files as-is.

## Project Structure

```
/
├── index.html           # Main single-page website (instant HTML)
├── 404.html             # Simple error / not-found page
├── theme.css            # ACTIVE theme tokens (colours, fonts, spacing)
├── styles.css           # Layout & components (uses theme.css variables)
├── site-config.js       # LIVE contact / domain config (edit this)
├── script.js            # Minimal JS (config apply, mobile menu)
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── README.md
├── EDITING.md           # How to update content & themes
├── content/
│   ├── content.yaml     # Full editable content inventory
│   └── CONTENT.md       # Friendly fill-in form
├── themes/
│   ├── classic.css      # Default preset
│   ├── warm-gold.css    # Alternate preset
│   └── cool-slate.css   # Alternate preset
└── assets/
    └── logo.png
```

## Editing content & themes (start here)

Full guide: **[EDITING.md](EDITING.md)**

| Goal | File |
|------|------|
| Fill / draft all copy | `content/content.yaml` or `content/CONTENT.md` |
| Update phone, email, address, domain | `site-config.js` |
| Retune colours / fonts / spacing | `theme.css` |
| Switch colour preset | Change theme `<link>` → `themes/*.css` |
| Publish long copy / services | Matching sections in `index.html` |

**Why YAML/Markdown are not loaded by the browser:** loading them at runtime would add requests and delay text. HTML stays pre-rendered so the page opens instantly. Use `content/` as your worksheet; use `site-config.js` + `theme.css` for live one-file updates.

## Updating Contact Information

1. Open **`site-config.js`**
2. Replace verified values only:

```js
phone: "+91-XXXXXXXXXX",          // VERIFY before publishing
email: "office@example.com",      // official email only
address: "177, Pucca Bagh, Hapur, Uttar Pradesh – 245101, India",
domain: "www.example.com",
```

Phone and email placeholders do **not** create live `tel:` / `mailto:` links until values no longer start with `[`.

Also keep `content/content.yaml` in sync (or use `_internal/update_contact.py`).

Before go-live, update `robots.txt` and `sitemap.xml` domain placeholders.

## Tuning the CSS theme

Edit variables in **`theme.css`**, for example `--color-primary`, `--color-accent`, `--font-serif`, `--space-2xl`.

Or switch a preset in `index.html` / `404.html`:

```html
<link rel="stylesheet" href="themes/classic.css">
<link rel="stylesheet" href="themes/warm-gold.css">
<link rel="stylesheet" href="themes/cool-slate.css">
```

## Updating the Logo

```
assets/logo.png
```

Keep the original aspect ratio. Do not stretch or redraw the logo.

## Performance (kept intentionally fast)

- System fonts only (no Google Fonts / CDN fonts)
- Small logo (~15 KB), preloaded
- No frameworks, images galleries, or video
- Deferred JS; contact config is tiny
- Below-fold sections use `content-visibility`
- No `backdrop-filter` or heavy effects

Total critical assets are small enough to feel near-instant on typical connections.

## Local Testing

1. Open the project folder
2. Double-click `index.html`
3. No install or server required

## Azure Storage Deployment

1. Create an Azure Storage Account
2. Enable **Static website**
3. Index document: `index.html`
4. Error document: `404.html`
5. Upload to `$web`:
   - Required: `index.html`, `404.html`, `theme.css`, `styles.css`, `site-config.js`, `script.js`, `favicon.ico`, `robots.txt`, `sitemap.xml`, `assets/`
   - Optional: `themes/`, `content/`, `EDITING.md`, `README.md`
6. Open the primary static website endpoint

## Amazon S3 Deployment

1. Create an S3 bucket
2. Enable static website hosting (`index.html` / `404.html`)
3. Upload the same files to the bucket root
4. Configure public/static website access per current AWS guidance
5. Open the S3 website endpoint

No EC2, Lambda, Node.js, or application server is required.

## GitHub Pages Deployment

1. Push this repository to GitHub
2. Settings → Pages → Deploy from a branch → `/` (root)
3. Hash navigation (`#home`, `#services`, `#contact`) needs no special routing

## Custom Domain

Domain setup is separate from the website files. After DNS is connected:

1. Set `domain` in `site-config.js`
2. Replace `[WEBSITE DOMAIN]` in `robots.txt` and `sitemap.xml`
3. Re-upload those files

## Future Maintenance

| Change | Where |
|--------|--------|
| Contact | `site-config.js` |
| Theme | `theme.css` or `themes/*` |
| Draft copy | `content/content.yaml` / `CONTENT.md` |
| Live long-form copy / services | `index.html` |
| Logo | `assets/logo.png` |
| SEO title | `index.html` `<head>` |

Keep the site static. Prefer these files over frameworks, CMS systems, or backend forms.

## Design Notes

- Colour direction follows the black-and-white logo: charcoal, ivory, muted gold
- Serif headings / system sans body
- No stock photography, carousels, contact forms, or invented business claims
- Navigation uses in-page anchors only for static-hosting compatibility
