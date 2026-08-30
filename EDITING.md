# Editing Guide — Content & Theme

This site stays **pure static** and **fast**: no build tools, no CMS, no runtime YAML loading.

## Quick reference

| Goal | Edit this file | Effect |
|------|----------------|--------|
| Phone / email / address / domain | `site-config.js` | Updates contact + links site-wide |
| Colours, fonts, spacing | `theme.css` | Instant visual retune |
| Try a colour preset | Change theme `<link>` or copy from `themes/` | Full palette swap |
| Draft all copy | `content/content.yaml` or `content/CONTENT.md` | Editor worksheet (not loaded by browser) |
| Publish long copy / services | `index.html` | Visible page content |
| Logo | `assets/logo.png` | Header / brand mark |

---

## 1. Update contact in one place

Open **`site-config.js`**:

```js
phone: "+91-XXXXXXXXXX",
email: "office@example.com",
address: "Your office address here",
domain: "www.example.com",
```

Save and refresh. Values apply to the contact section, buttons, and footer.

Also keep `content/content.yaml` updated so your records stay accurate.

After setting a real domain, update `robots.txt` and `sitemap.xml` once (replace `[WEBSITE DOMAIN]`).

---

## 2. Tune the theme

### Option A — edit active theme

Open **`theme.css`** and change any variable, for example:

```css
--color-accent: #8a734a;
--color-background: #faf9f7;
--font-serif: Georgia, serif;
--space-2xl: 5.5rem;
```

### Option B — switch a preset

In `index.html` and `404.html`, change:

```html
<link rel="stylesheet" href="theme.css">
```

to one of:

```html
<link rel="stylesheet" href="themes/classic.css">
<link rel="stylesheet" href="themes/warm-gold.css">
<link rel="stylesheet" href="themes/cool-slate.css">
```

Or copy a preset over `theme.css` so the default link keeps working.

If you change `--color-primary`, also update `theme-color` meta in `index.html` / `site-config` notes for browser chrome.

---

## 3. Update page copy & services

1. Draft changes in `content/CONTENT.md` or `content/content.yaml`
2. Mirror them into the matching section of `index.html`
3. Do **not** invent phone numbers, awards, client names, or extra services

Section IDs in `index.html`:

- `#home` — hero
- `#philosophy` — trust / philosophy
- `#audience` — who we serve
- `#services` — services
- `#contact` — contact

---

## 4. Why YAML/MD are not loaded by the browser

Loading YAML at runtime would require:

- an extra network request
- a parser library (or fragile custom code)
- delayed text on screen

That would make the site slower. Instead:

- **HTML** = what visitors see (instant)
- **site-config.js** = tiny live overrides for contact (below-the-fold, deferred)
- **content/** = your editable source documents for maintenance

---

## 5. Performance rules (keep the site instant)

Do **not** add:

- Google Fonts / external font CDNs
- large stock images or video
- analytics or chat widgets (unless required)
- CSS frameworks or JS libraries
- build tools / npm

Do keep:

- system font stacks (already set in `theme.css`)
- one small logo (`assets/logo.png`)
- deferred scripts
- hash links (`#services`) — no router

---

## 6. Deploy reminder

Upload at minimum:

`index.html`, `404.html`, `theme.css`, `styles.css`, `site-config.js`, `script.js`, `favicon.ico`, `robots.txt`, `sitemap.xml`, `assets/`

Optional (for editors / presets only): `content/`, `themes/`, `EDITING.md`, `README.md`
