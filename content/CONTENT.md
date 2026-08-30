# Website Content — Fill-In Form

Use this document to draft or update copy. Keep it in sync with `content.yaml`.

**Live site behaviour**

| What you change | Where it goes live |
|-----------------|--------------------|
| Phone, email, address, domain | Edit **`site-config.js`** (one file updates the whole site) |
| Colours, fonts, spacing | Edit **`theme.css`** (or swap a file from `themes/`) |
| Long copy, services, audiences | Edit **`index.html`** using this checklist |

The browser does **not** load this Markdown or the YAML at runtime. That keeps the site instant.

---

## 1. Contact (required before go-live)

Copy these into `site-config.js` after filling:

```
Phone:          [PHONE NUMBER]
Email:          [EMAIL ADDRESS]
Office address: [OFFICE ADDRESS]
Website domain: [WEBSITE DOMAIN]     ← no https://  (example: www.example.com)
```

---

## 2. Firm identity

```
Firm name:     V Manglik & Co.
Profession:    Chartered Accountants
Tagline:       Precision | Integrity | Growth
Founded:       2000
```

---

## 3. SEO

```
Page title:       V Manglik & Co. | Chartered Accountants
Meta description: V Manglik & Co. is a Chartered Accountant firm providing
                  taxation, GST, audit, compliance, registration and
                  representation services.
```

Update matching tags in `index.html` `<head>` if you change these.  
Also set `domain` in `site-config.js` so canonical / Open Graph URLs update.

---

## 4. Hero

```
Eyebrow:        Founded in 2000
Primary CTA:    Explore Our Services
Secondary CTA:  Contact Us

Lead paragraph:
At V Manglik & Co., we believe that trust is built through transparency and
strengthened by professionalism. As a Chartered Accountant firm, we are
committed to delivering accurate, ethical, and practical financial solutions
that empower businesses and individuals to make informed decisions with
confidence.
```

→ Section `#home` in `index.html`

---

## 5. Philosophy

```
Heading:     Trust Built on Transparency
Subheading:  Strengthened by Professionalism

Principles:
1. Accuracy & Ethics — …
2. Practical Guidance — …
3. Sustainable Growth — …

Body:
Whether you're an entrepreneur, a growing business, a corporate organization,
or an individual taxpayer, our team provides tailored services designed to
simplify compliance, optimize financial performance, and support sustainable
growth.
```

→ Section `#philosophy` in `index.html`

---

## 6. Who We Serve

```
1. Entrepreneurs
2. Growing Businesses
3. Corporate Organizations
4. Individual Taxpayers
```

→ Section `#audience` in `index.html`

---

## 7. Services (do not invent extras)

### 01 — Direct Taxation
- Income Tax Return (ITR) Filing
- Litigation Support
- Capital Gains Tax Advisory
- NRI Taxation
- TDS Compliance & Returns
- Lower Deduction Certificates for TDS / TCS

### 02 — Goods & Services Tax (GST) Services
- GST Registration
- GST Return Filing
- GST Notices & Litigation Support
- GST Refund Application

### 03 — Audit & Assurance
- Statutory Audit
- Tax Audit (Section 44AB)
- Bank Audit

### 04 — Company & LLP Services
- Private Limited Company Registration
- LLP Registration
- OPC Registration
- Partnership Firm Registration
- ROC Annual Compliance

### 05 — Startup & MSME Services
- Startup India Registration
- MSME/Udyam Registration

### 06 — Litigation & Representation
- Income Tax Appeals
- GST Appeals
- Representation Before Tax Authorities
- Assessment Proceedings
- Reply to Notices

### 07 — Other Registrations
- PAN & TAN
- DSC (Digital Signature Certificate)
- IEC Registration
- LEI Registration
- Trademark Coordination (through associates, if applicable)

→ Section `#services` in `index.html`

---

## 8. Contact section labels

```
Heading: Contact Us
Intro:   (see content.yaml → contact_section.intro)
CTAs:    Call Us / Email Us
```

---

## 9. Footer

```
Copyright year: 2026
```

Set `copyrightYear` in `site-config.js` if the year changes.

---

## Theme tuning (quick)

1. Open **`theme.css`**
2. Change CSS variables (`--color-primary`, `--color-accent`, fonts, spacing)
3. Refresh the browser — no build step

Or switch a preset:

```html
<!-- in index.html / 404.html, change this one line: -->
<link rel="stylesheet" href="themes/classic.css">
<!-- options: themes/classic.css | themes/warm-gold.css | themes/cool-slate.css -->
```

See **EDITING.md** for the full maintenance guide.
