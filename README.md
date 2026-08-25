<br />
<div align="center">
  <img src="assets/icons/favicon.svg" alt="Maniesta One Logo" width="80" height="80">

  <h1 align="center">Maniesta One</h1>

  <p align="center">
    A premium responsive product landing page inspired by modern Apple design.
    <br />
    Built with pure HTML, CSS & vanilla JavaScript — no frameworks.
    <br />
    <br />
    <a href="https://maniestaone.netlify.app" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/usmannmurtazaa/maniesta-one" target="_blank">Report Bug</a>
    ·
    <a href="https://github.com/usmannmurtazaa/maniesta-one" target="_blank">Request Feature</a>
  </p>
</div>

<!-- BADGES -->
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Yes-brightgreen?style=for-the-badge" alt="Responsive">
  <img src="https://img.shields.io/badge/Accessibility-Yes-blue?style=for-the-badge" alt="Accessible">
  <img src="https://img.shields.io/badge/Performance-Optimized-9cf?style=for-the-badge" alt="Performance">
</p>

---

## 📖 About The Project

**Maniesta One** is a fictional premium smart productivity device. This landing page showcases its design, features, and interactive experience using advanced frontend techniques:

- Scroll‑driven storytelling
- Interactive feature showcase
- Product gallery with lightbox
- Cinematic experience section
- Microinteractions & custom cursor
- Fully responsive (320px → 1920px)
- Accessible & performant

The goal is to deliver a **pixel‑perfect, Apple‑inspired** product page without copying any proprietary assets.

---

## ✨ Features

- **Hero Section** with parallax, floating device, and animated CTA
- **Sticky Scroll Storytelling** – the product visual updates as you scroll
- **Interactive Feature Tabs** – click a feature, see the UI change
- **Product Showcase** – multiple angles (front, side, detail, interface, accessories)
- **Gallery** – horizontal snap scroll + lightbox with keyboard support
- **Experience Mockup** – animated UI with play button
- **Comparison Table** – why upgrade to Maniesta One
- **Custom Cursor** – subtle dot + ring (desktop only)
- **Mobile Drawer Navigation** – animated and accessible
- **Back to Top** button, smooth scrolling, active nav highlighting
- **SEO & Open Graph** meta tags
- **Reduced Motion** support for accessibility

---

## 🛠 Tech Stack

- **HTML5** – semantic markup
- **CSS3** – custom properties, grid, flexbox, animations
- **JavaScript (ES Modules)** – modular, vanilla, no dependencies
- **Google Fonts** – Inter for typography
- **SVG** – icons and favicon

No React, no Vue, no build tools, no backend.

---

## 🎨 Design Approach

- **Color System** – near‑black background with one controlled accent gradient (`#6C5CE7` → `#00C2FF`)
- **Typography** – Inter with large display sizes and clear hierarchy
- **Spacing** – generous whitespace, precise grid alignment
- **Animations** – GPU‑friendly `transform` + `opacity`, IntersectionObserver based reveals
- **Responsive** – mobile‑first, redesigned layouts for smaller screens

---

## 🚀 Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/usmannmurtazaa/maniesta-one.git
   ```

2. **Open with a local server** (ES modules require HTTP, not `file://`)
   ```bash
   cd maniesta-one
   npx serve
   # or
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000` (or the port shown).

That’s it — no dependencies to install.

---

## 📁 Project Structure

```
maniesta-one/
├── index.html              # Main entry point
├── css/
│   ├── style.css           # Variables, reset, base styles
│   ├── components.css      # Buttons, nav, sections
│   ├── animations.css      # Keyframes, animation utilities
│   └── responsive.css      # Media queries
├── js/
│   ├── app.js              # Entry point
│   ├── navigation.js       # Sticky nav, mobile menu, smooth scroll
│   ├── animations.js       # Scroll reveals, storytelling, parallax, cursor
│   └── interactions.js     # Tabs, gallery, lightbox, experience
├── assets/
│   └── icons/
│       └── favicon.svg
├── README.md
└── .gitignore
```

---

## 🌐 Deployment

The project is **Netlify‑ready**. Simply:

1. Push to GitHub
2. Import the repository into Netlify
3. Set build command: (leave empty)
4. Publish directory: `/`
5. Deploy!

The site will be live in seconds.

---

## 📸 Screenshots

> Add your own screenshots here (desktop and mobile recommended).

| Desktop Hero | Mobile Navigation | Gallery |
|--------------|-------------------|---------|
| ![Hero](screenshots/hero.png) | ![Mobile](screenshots/mobile.png) | ![Gallery](screenshots/gallery.png) |

---

## 🙌 Author

**Usman Murtaza**  
- Portfolio: [https://usmanmurtaza.netlify.app/](https://usmanmurtaza.netlify.app/)  
- Built as part of the **Maniesta** project series.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.  
*This is an educational project, not affiliated with Apple Inc.*
