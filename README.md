# Holger Hellinger: CV Website

A fast, accessible, and responsive CV website built with **Eleventy (11ty)**, semantic HTML, and modern CSS.

Live site: <https://www.holger-hellinger.de/>

## Features

- **Static Site Generation**: Built with Eleventy 3.1.8 for fast and reliable builds.
- **Editorial Grid Layout**: Mobile-first CSS Grid and Flexbox layout with sticky section headers on desktop.
- **Pure CSS Theme Switcher**: Interactive `Auto`, `Light`, and `Dark` switch using CSS `light-dark()` and `:has()`.
- **Zero Client-Side JavaScript**: Pure HTML and CSS output in the browser.
- **Inlined Critical CSS**: Build-time CSS minification and inlining via a custom `inlineCss` Nunjucks filter.
- **Inlined SVG Icons**: Build-time SVG inlining via a custom `inlineSvg` Nunjucks filter with path validation.
- **Responsive WebP Images**: `<picture>` element with WebP `srcset`, PNG fallbacks, and high fetch priority.
- **Accessible by Default**: Semantic HTML5 landmarks, skip link, keyboard focus styles, reduced motion support, and WCAG AA contrast.
- **Rich SEO and Structured Data**: Open Graph tags, Twitter Cards, canonical URL, web app manifest, and Schema.org JSON-LD `@graph`.
- **Print and PDF Ready**: Dedicated `@media print` rules for clean black-on-white paper and PDF export.
- **Apache Hardening**: Included `.htaccess` for HTTPS redirects, security headers, compression, and immutable caching.

## Project Structure

```text
.
├── .eleventy.js              # Eleventy configuration (passthrough copy, inlineSvg, inlineCss)
├── package.json              # Dependencies and npm scripts
├── src/
│   ├── .htaccess             # Apache redirects, security headers, caching, compression
│   ├── index.json            # CV content and metadata in JSON format
│   ├── index.njk             # Page entry using base.njk layout
│   ├── robots.txt            # Crawler instructions
│   ├── site.webmanifest      # Web app manifest
│   ├── _includes/
│   │   └── base.njk          # Main Nunjucks HTML template and JSON-LD schema
│   └── assets/
│       ├── css/style.css     # Screen, theme switcher, and print styles
│       ├── icons/*.svg       # SVG icons inlined at build time
│       └── images/           # WebP and PNG profile images plus favicons
├── docs/                     # Setup notes and checklists
└── _site/                    # Generated static output
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Build and serve locally with live reload at <http://localhost:8080>:

```bash
npm run dev
```

You can also run `npm run serve` for the same command.

### Build

Generate the static site into `_site/`:

```bash
npm run build
```

### Watch Mode

Rebuild on file changes without starting a local server:

```bash
npm run watch
```

### Clean

Remove the generated `_site/` directory:

```bash
npm run clean
```

## Customization

### Edit CV Data

All CV content lives in [src/index.json](src/index.json). The template [src/index.njk](src/index.njk) renders this data through [src/_includes/base.njk](src/_includes/base.njk).

Supported fields in `src/index.json`:

- `title` and `meta_description`: Page title and SEO description.
- `name` and `role`: Header title, role subtitle, and structured data identity.
- `contact`: `phone`, `email`, and `location`.
- `tldr`: Highlighted intro text card at the top of the summary section.
- `summary`: HTML paragraphs for the main summary card.
- `ai_prompt`: Hidden text placed in a `.visually-hidden` container.
- `links`: External profile links with `label`, `url`, and `icon` filename.
- `experience`: Career history entries with `period`, `role`, `company`, and `description`.
- `skills`: Skill categories with `group` title and `items` array.
- `education`: Education rows with `year`, `degree`, and `institution`.
- `publications`: Articles, case studies, and talks with `year`, `title`, `link`, and optional `description`.

Example structure:

```json
{
  "title": "Your Name | Your Role",
  "name": "Your Name",
  "role": "Your Role",
  "meta_description": "Short summary for search engines and social cards.",
  "contact": {
    "phone": "+49 123 456789",
    "email": "your@email.com",
    "location": "City, Country"
  },
  "tldr": "Short executive summary.",
  "summary": "<p>Detailed summary paragraph.</p>",
  "links": [
    {
      "label": "GitHub",
      "url": "https://github.com/yourhandle",
      "icon": "github-min.svg"
    }
  ],
  "experience": [
    {
      "period": "2020 - Now",
      "role": "Job Title",
      "company": "Company Name",
      "description": "Role description."
    }
  ],
  "skills": [
    {
      "group": "Architecture & Frontend",
      "items": ["Frontend Architecture", "TypeScript", "React", "HTML5 & CSS"]
    }
  ],
  "education": [
    {
      "year": "2018",
      "degree": "Degree or Program",
      "institution": "Institution Name"
    }
  ],
  "publications": [
    {
      "year": "2026",
      "title": "Article or Talk Title",
      "link": "https://example.com/post",
      "description": "Short summary of the publication."
    }
  ]
}
```

### Customize Styling and Theme Switcher

Edit [src/assets/css/style.css](src/assets/css/style.css) to adjust colors, typography, grid breakpoints, and print rules. During the build, the `inlineCss` filter in [.eleventy.js](.eleventy.js) minifies this file and inlines it into a `<style>` tag in the HTML `<head>`.

The theme system combines CSS `light-dark()` design tokens with a pure CSS `:has()` radio switcher:

```css
:root {
  color-scheme: light dark;

  --bg-color: light-dark(#f6f5f2, #111110);
  --card-bg: light-dark(#ffffff, #1a1a18);
  --card-elevated: light-dark(#efede8, #242421);
  --text-color: light-dark(#141413, #f5f5f4);
  --text-muted: light-dark(#57534e, #a8a29e);
  --accent-color: light-dark(#92400e, #f59e0b);
}

:root:has(.theme-switcher input[value="light"]:checked) {
  color-scheme: light;
}

:root:has(.theme-switcher input[value="dark"]:checked) {
  color-scheme: dark;
}
```

### Profile Images

Place responsive profile image variants in [src/assets/images/](src/assets/images/):

- WebP variants: `HolgerHellinger160.webp`, `HolgerHellinger256.webp`, `HolgerHellinger320.webp`, `HolgerHellinger640.webp`
- PNG fallbacks: `HolgerHellinger160.png`, `HolgerHellinger256.png`, `HolgerHellinger320.png`, `HolgerHellinger640.png`

The header `<picture>` element serves WebP with PNG fallbacks at `144x144` display size. Open Graph, Twitter Cards, and JSON-LD reference `HolgerHellinger640.png`.

### Icons and Build Filters

[.eleventy.js](.eleventy.js) uses a safe asset reader (`readSafeAsset`) that validates file extensions and blocks path traversal outside the asset directories:

- `inlineSvg`: Reads `.svg` files from [src/assets/icons/](src/assets/icons/) and inlines them at build time.
- `inlineCss`: Reads `.css` files from [src/assets/css/](src/assets/css/), strips comments and extra whitespace, and inlines them at build time.

## Deployment

Run `npm run build` and deploy the static `_site/` directory to any web server or static host.

For Apache servers, [src/.htaccess](src/.htaccess) is copied into `_site/.htaccess` and configures:

- Canonical `https://www.holger-hellinger.de/` redirect.
- Direct `404` responses for missing `.well-known/` files.
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`).
- 1-year immutable `Cache-Control` and `Expires` headers for static assets.
- MIME types for `.webp`, `.avif`, and `.webmanifest`.
- `DEFLATE` text and asset compression.

## Accessibility

- Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`).
- Keyboard skip link (`.skip-link`) and `:focus-visible` outlines.
- `prefers-reduced-motion` media query support.
- Accessible education table with `<caption>` and `<th scope="col">`.
- WCAG AA color contrast across light and dark themes.

## Print and PDF

The CV includes dedicated `@media print` styles:

1. Press `Ctrl+P` on Windows/Linux or `Cmd+P` on macOS.
2. Select "Save as PDF" or print directly.
3. Print mode forces a black-on-white palette, hides the theme switcher and external profile buttons, prevents page breaks inside cards, and prints full URLs next to publication links.

## Browser Support

- Chrome and Edge 123+
- Firefox 121+
- Safari 17.5+
- Responsive layout down to 320px viewport width

## Performance

- Zero client-side JavaScript.
- Minified and inlined CSS in `<head>` with no render-blocking stylesheet request.
- Build-time inlined SVG icons.
- Responsive WebP images with `fetchpriority="high"` and explicit dimensions.

## License

MIT. See [LICENSE](LICENSE).

## Author

Holger Hellinger
[polente.de](https://polente.de/) · [LinkedIn](https://linkedin.com/in/holgerhellinger) · [GitHub](https://github.com/polent) · [Mastodon](https://hellinger.wtf/@holger) · [Xing](https://www.xing.com/profile/Holger_Hellinger/)
