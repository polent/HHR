# Holger Hellinger - CV Website

A modern, accessible, and responsive CV website built with **Eleventy (11ty)** and semantic HTML/CSS.

Live site: <https://polente.de/>

## Features

- **Static Site Generation** — built with Eleventy for fast, reliable deployment
- **Responsive Design** — mobile-first, CSS Grid & Flexbox
- **Accessible** — semantic HTML5, ARIA labels, WCAG AA contrast
- **Dark Mode** — automatic light/dark via CSS `light-dark()`
- **Print-friendly** — dedicated print styles, Ctrl+P → save as PDF
- **No client-side JavaScript** — pure HTML/CSS output
- **Lightweight CSS** — custom CSS, no frameworks
- **Inline SVG icons** — icons are inlined at build time via a custom Nunjucks filter

## Project Structure

```
.
├── .eleventy.js              # Eleventy configuration (passthrough + inlineSvg filter)
├── package.json              # Dependencies and scripts
├── src/
│   ├── index.json            # CV data (JSON) — name, contact, experience, links, ...
│   ├── index.njk             # Page entry, uses base.njk layout
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── _includes/
│   │   └── base.njk          # HTML template (Nunjucks)
│   └── assets/
│       ├── css/style.css     # Screen and print styles
│       ├── icons/*.svg       # Inlined SVG icons (linkedin, github, ...)
│       └── images/           # Profile images + responsive variants
├── docs/                     # Project notes, AI prompt, checklists
└── _site/                    # Build output (generated)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm (Eleventy 3 requires Node 18 or newer)

### Installation

```bash
npm install
```

### Development

Build and serve locally with live reload:

```bash
npm run dev
```

The site will be available at <http://localhost:8080>.

### Build

Generate the static site into `_site/`:

```bash
npm run build
```

### Watch Mode

Rebuild on file changes (no dev server):

```bash
npm run watch
```

## Customization

### Edit Your CV Data

All CV content lives in [src/index.json](src/index.json). Update fields like `name`, `role`, `contact`, `summary`, `experience`, `education`, `skills`, and `links`. Example:

```json
{
  "name": "Your Name",
  "role": "Your Role",
  "contact": {
    "email": "your@email.com",
    "phone": "+49 123 456789",
    "location": "City, Country"
  },
  "experience": [
    {
      "period": "2020 - Now",
      "role": "Job Title",
      "company": "Company Name",
      "description": "Description"
    }
  ]
}
```

The template that renders this data is [src/index.njk](src/index.njk), which extends [src/_includes/base.njk](src/_includes/base.njk).

### Customize Styling

Edit [src/assets/css/style.css](src/assets/css/style.css) for colors, typography, layout, and print rules. The colour scheme uses CSS custom properties with `light-dark()` for automatic dark-mode support, e.g.:

```css
:root {
  color-scheme: light dark;
  --bg-color: light-dark(#ffffff, #1a1a1a);
  --text-color: light-dark(#222222, #f0f0f0);
  --accent-color: light-dark(#005a9c, #4da6ff);
}
```

### Profile Image

Drop responsive profile images into [src/assets/images/](src/assets/images/):

- `HolgerHellinger160.png` (160×160)
- `HolgerHellinger320.png` (320×320)
- `HolgerHellinger640.png` (640×640)

The template emits a responsive `srcset` automatically.

### Icons

SVG icons in [src/assets/icons/](src/assets/icons/) are inlined into the HTML at build time via the `inlineSvg` Nunjucks filter defined in [.eleventy.js](.eleventy.js). Add a new icon by dropping the `.svg` file into that folder and referencing it from the template or `index.json` (`links[].icon`).

## Deployment

`_site/` is fully static — deploy to any static host: Netlify, Vercel, GitHub Pages, Cloudflare Pages, AWS S3 + CloudFront, etc.

- **Build command:** `npm run build`
- **Output directory:** `_site/`

## Accessibility

- Semantic HTML5 (`<header>`, `<main>`, `<article>`, `<section>`)
- Proper heading hierarchy
- WCAG AA colour contrast
- Responsive images with alt text
- Keyboard navigable, screen-reader friendly

## Print & PDF

The CV is print-optimised:

1. **From browser:** `Ctrl+P` (Windows/Linux) or `Cmd+P` (macOS)
2. **To PDF:** choose "Save as PDF" in the print dialog
3. Print CSS forces black-on-white, suppresses backgrounds, avoids breaking content across pages, and hides non-essential elements

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Responsive down to 320px width

## Performance

- Zero client-side JavaScript
- Minimal CSS (< 10 KB)
- Responsive images via `srcset`
- Static output — CDN-friendly

## License

MIT — see [LICENSE](LICENSE).

## Author

Holger Hellinger
[polente.de](https://polente.de/) · [LinkedIn](https://linkedin.com/in/holgerhellinger) · [GitHub](https://github.com/polent) · [Mastodon](https://hellinger.wtf/@holger) · [Xing](https://www.xing.com/profile/Holger_Hellinger/)
