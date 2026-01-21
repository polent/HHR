# 🚀 Quick Start Guide

## Installation & Development

### First Time Setup
```bash
npm install
npm run dev
```

Then open http://localhost:8080

### Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server with live reload |
| `npm run build` | Build production site to `_site/` |
| `npm run watch` | Watch mode without server |
| `npm run serve` | Serve with live reload |
| `npm run clean` | Remove `_site/` directory |

## File Locations

### Content
- **Main CV**: `src/index.md` - Edit the YAML frontmatter here

### Templates  
- **HTML Template**: `src/_includes/base.njk` - Nunjucks template

### Styling
- **Main CSS**: `src/assets/css/style.css`
- **Print CSS**: Same file, `@media print` section

### Assets
- **Images**: `src/assets/images/`
- **Icons**: `src/assets/icons/`

## Editing Your CV

All content is in `src/index.md` frontmatter (YAML):

```yaml
---
name: Your Name
role: Your Role
contact:
  email: your@email.com
  phone: "+49 123 456"
  location: City
tldr: "Short summary"
summary: |
  <p>Longer HTML summary</p>
experience:
  - period: "2020 - Now"
    role: "Job Title"
    company: "Company"
    description: "Description"
education:
  - year: "2020"
    degree: "Degree"
    institution: "School"
skills:
  - name: "Skill"
    level: 80  # 0-100%
links:
  - label: "Website"
    url: "https://example.com"
---
```

## Customizing Colors

Edit `src/assets/css/style.css` - Look for `:root`:

```css
:root {
  --bg-color: light-dark(#ffffff, #1a1a1a);
  --text-color: light-dark(#222222, #f0f0f0);
  --accent-color: light-dark(#005a9c, #4da6ff);
  /* ... more colors ... */
}
```

Format: `light-dark(light-mode-color, dark-mode-color)`

## Responsive Images

Profile images in `src/assets/images/`:
- `HolgerHellinger160.png` - Mobile
- `HolgerHellinger320.png` - Tablet
- `HolgerHellinger640.png` - Desktop

All automatically served via srcset.

## Deployment

### Build
```bash
npm run build
```

### Deploy the `_site/` folder to:
- **Netlify** - Connect repo, auto-builds
- **Vercel** - Connect repo, auto-builds
- **GitHub Pages** - Push to `gh-pages` branch
- **AWS S3** - Upload `_site/` contents
- **Any static host** - Just upload `_site/`

## Printing / PDF

1. Open the site in browser
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Select "Save as PDF"
4. Done! Print styles auto-apply

## Structure Overview

```
src/
├── index.md                    ← Edit this for content
├── _includes/
│   └── base.njk               ← Edit for layout changes
└── assets/
    ├── css/
    │   └── style.css          ← Edit for styling
    └── images/                ← Add profile photos here
```

## Troubleshooting

### Build fails
```bash
npm run clean
npm run build
```

### Changes not showing
- Make sure files are saved
- Hard refresh browser (Ctrl+Shift+R)
- Check `_site/` folder was rebuilt

### Port 8080 in use
Change port in `.eleventy.js` or use:
```bash
PORT=3000 npm run dev
```

## Need Help?

- 📖 Docs: [11ty.dev](https://11ty.dev)
- 💬 Template Syntax: [Nunjucks](https://mozilla.github.io/nunjucks/)
- 🎨 CSS Guide: See comments in `style.css`

---

**Your CV is live at**: `http://localhost:8080`
