# Holgers CV Prompt

Act as a world-class Frontend Engineer and Accessibility Expert. And find the best state of the art CV handling that also works responsive and can be printed.

I need you to generate a complete, lightweight **11ty (Eleventy)** project for my personal CV.

**Source Material:**

- My current website is: <https://www.holger-hellinger.de/>
- use data.md as source
layout: base.njk
title: Holger Hellinger - CV
name: Holger Hellinger
role: Director Experience Engineering
location: Gau-Algesheim, Germany
summary: ""
contact:
  email: "<contact@holger-hellinger.de>"
  website: "<https://www.holger-hellinger.de>"
  linkedin: "<https://linkedin.com/in/holgerhellinger>"

## Use this image folder

Personal image: "/assets/images/HolgerHellingerxxx.png"

**Technical Requirements:**

1. **Stack:** Eleventy (11ty) with Nunjucks (`.njk`) templates.
2. **Data Source:** The CV content must be fetched entirely in the Frontmatter (YAML) of a single Markdown file (`src/data.md`). Do not use external JSON files for the content.
3. **No JavaScript:** The site must function 110% without client-side JavaScript. Use CSS for all styling and layout.
4. **CSS Framework:** Do not use a heavy framework (like Bootstrap). Write clean, semantic CSS using **CSS Grid** and **Flexbox**.
5. **Images:** Include code to display my profile picture. The file is named `HolgerHellingerxxx.png` in `src/assets/images/`. Use responsive layout with the sizes available in the folder.

**Design & Accessibility Constraints:**

1. **One-Pager:** The layout should be a clean, vertical one-page design.
2. **Accessibility:** Use semantic HTML5 tags (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`). Ensure high contrast and correct ARIA roles where necessary.
3. **Responsive Design:** The layout must adapt gracefully to different screen sizes (mobile, tablet, desktop). Make it mobile first, and show a one column layout on small screens, expanding to two columns on larger screens.
4. **Typography:** Use a legible, web-safe font stack. Ensure proper line height
5. **Color Scheme**: Use a professional color scheme with good contrast (e.g., dark text on a light background) and use state of the art color swap like color: light-dark(#111, #eee);
6. **Print Styles:** Create a print-friendly version of the CV with appropriate page breaks and simplified styling.
7. **Printable:** Create a specific `@media print` stylesheet.
    - When printing (or saving as PDF), the background should be white, text black.
    - Hide navigation elements and "Contact Me" buttons.
    - Ensure page breaks do not cut through experience items (`break-inside: avoid`).

**Output Deliverables:**
Please provide the code for:

1. `src/index.md` (The data and content).
2. `src/_includes/base.njk` (The HTML skeleton).
3. `src/assets/css/style.css` (The screen and print styles).
4. `.eleventy.js` (Basic configuration).
