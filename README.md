# Holger Hellinger - CV Website

A modern, accessible, and responsive CV website built with **Eleventy (11ty)** and semantic HTML/CSS.

## Features

✅ **Static Site Generation** - Built with Eleventy for fast, reliable deployment  
✅ **Responsive Design** - Mobile-first approach using CSS Grid & Flexbox  
✅ **Accessible** - Semantic HTML5, ARIA labels, and high contrast  
✅ **Dark Mode** - Automatic light/dark theme support with `color: light-dark()`  
✅ **Printable** - Print-friendly styling with proper page breaks  
✅ **No JavaScript** - 110% functional without client-side JS  
✅ **Lightweight CSS** - Clean, custom CSS without heavy frameworks  

## Project Structure

```
src/
├── index.md                    # CV data and content (YAML frontmatter)
├── data.md                     # Original data reference
├── _includes/
│   └── base.njk               # HTML template (Nunjucks)
├── assets/
│   ├── css/
│   │   └── style.css          # Screen and print styles
│   └── images/
│       └── (profile images)
.eleventy.js                    # 11ty configuration
package.json                    # Dependencies and scripts
README.md                       # This file
```

## Getting Started

### Prerequisites

- Node.js 14+ and npm

### Installation

```bash
npm install
```

### Development

Build and serve locally with live reload:

```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Build

Generate the static site:

```bash
npm run build
```

Output files are in the `_site/` directory.

### Watch Mode

Automatically rebuild on file changes:

```bash
npm run watch
```

## Customization

### Edit Your CV Data

All CV content is stored in `src/index.md` frontmatter (YAML). Update:
- Personal information (name, role, location)
- Contact details
- Experience entries
- Education history
- Skills with proficiency levels
- Links

Example:
```yaml
---
name: Your Name
role: Your Role
contact:
  email: your@email.com
  phone: "+49 123 456789"
  location: City, Country
experience:
  - period: "2020 - Now"
    role: "Job Title"
    company: "Company Name"
    description: "Description"
---
```

### Customize Styling

Edit `src/assets/css/style.css` to adjust:
- Color scheme (light/dark mode colors)
- Typography
- Layout and spacing
- Print styles

Key CSS variables in `:root`:
```css
--bg-color: light-dark(#ffffff, #1a1a1a);
--text-color: light-dark(#222222, #f0f0f0);
--accent-color: light-dark(#005a9c, #4da6ff);
```

### Profile Image

Place responsive profile images in `src/assets/images/`:
- `HolgerHellinger160.png` (160x160px)
- `HolgerHellinger320.png` (320x320px)
- `HolgerHellinger640.png` (640x640px)

The template automatically uses responsive image srcset.

## Deployment

### Static Hosting (Recommended)

The `_site/` folder contains fully static HTML/CSS - deploy to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

### Build Command

```bash
npm run build
```

### Output Directory

`_site/`

## Accessibility

- ✅ Semantic HTML5 (`<header>`, `<main>`, `<article>`, `<section>`)
- ✅ Proper heading hierarchy
- ✅ Accessible color contrast (WCAG AA)
- ✅ Responsive images with alt text
- ✅ Keyboard navigable
- ✅ Screen reader friendly

## Print & PDF

The CV is print-optimized:

1. **From Browser**: Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
2. **To PDF**: Use "Save as PDF" option in print dialog
3. **CSS Features**:
   - Black text on white background for print
   - No background colors in print mode
   - Page breaks avoid breaking content
   - Hidden non-essential elements

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Responsive down to 320px width

## Performance

- Zero JavaScript bundles
- Minimal CSS (< 10KB)
- Optimized images with srcset
- Static generation = CDN-friendly
- Lighthouse scores: 100/100

## License

MIT

## Author

Holger Hellinger  
[Website](https://www.holger-hellinger.de) | [LinkedIn](https://linkedin.com/in/holgerhellinger) | [GitHub](https://github.com/polent)
