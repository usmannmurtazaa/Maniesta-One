# Maniesta One — Premium Product Landing Page

A premium responsive product landing page inspired by modern Apple product pages, built with HTML5, CSS3, and vanilla JavaScript ES modules. This project is part of the Maniesta project series and demonstrates advanced frontend techniques including scroll-driven storytelling, interactive feature showcases, microinteractions, responsive design, accessibility, and performance optimization.

## Features

- **Premium UI/UX**: Minimal, elegant, high-contrast design with strong typography and precise spacing.
- **Scroll Storytelling**: A sticky section where the product visual changes as the user scrolls through feature descriptions.
- **Interactive Feature Section**: Tabs that dynamically update a central device mockup.
- **Product Showcase**: Multiple visual perspectives (front, side, detail, interface, accessories) via tabs.
- **Gallery**: Horizontal scrolling gallery with lightbox and keyboard support.
- **Experience Section**: Animated UI mockup with play button.
- **Custom Cursor**: Subtle custom cursor on desktop only.
- **Responsive Design**: Optimized for viewports from 320px to 1920px.
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, visible focus, reduced motion support.
- **SEO**: Meta tags, Open Graph, canonical URL, favicon.
- **Performance**: GPU-friendly animations, lazy loading, SVG icons, no external dependencies except Google Fonts.

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript ES Modules
- No frameworks, no backend

## Design Approach

The design language is inspired by Apple's product pages: large typography, generous whitespace, dark background with a controlled accent color (#6C5CE7 to #00C2FF gradient). The layout uses a 12-column grid on desktop and collapses to single column on mobile. CSS variables define the entire color, typography, and spacing system.

## Animation System

- **Entrance animations**: Elements with `data-animate` attributes fade/slide/scale in when they enter the viewport using IntersectionObserver.
- **Scroll storytelling**: Each story step activates as it scrolls into view, updating the sticky visual.
- **Microinteractions**: Buttons, cards, and navigation items have hover/press effects.
- **Hero parallax**: The hero device tilts subtly based on mouse position (desktop only).
- **Custom cursor**: A dot and ring follow the mouse with smooth easing; the ring expands on interactive elements.
- **Reduced motion**: All animations are disabled or minimized for users who prefer reduced motion.

## Responsive Strategy

- Mobile-first CSS with breakpoints at 424px, 767px, 1023px, 1199px, and 1440px.
- Navigation converts to an animated drawer on mobile.
- Hero and feature layouts stack vertically.
- Gallery becomes a horizontally scrollable snap container on all devices.
- Touch targets are at least 44px where practical.

## Project Structure
```
maniesta-one/
├── index.html
├── css/
│ ├── style.css # Base styles, variables, reset
│ ├── components.css # Buttons, nav, hero, sections
│ ├── animations.css # Keyframes and animation utilities
│ └── responsive.css # Media queries
├── js/
│ ├── app.js # Entry point
│ ├── navigation.js # Sticky nav, mobile menu, smooth scroll
│ ├── animations.js # Scroll reveals, storytelling, parallax, cursor
│ └── interactions.js # Tabs, gallery, lightbox, experience
├── assets/
│ └── icons/
│ └── favicon.svg
├── README.md
└── .gitignore
```

## Local Setup

1. Clone the repository.
2. Open `index.html` with a local server (e.g., Live Server in VS Code, `npx serve`, or Python's `http.server`).
   ES modules require serving over HTTP(S), not `file://`.
3. No build step or dependencies required.

## Deployment

The project is ready for Netlify. Simply drag-and-drop the folder or connect the GitHub repository. The `index.html` is the entry point, and all paths are relative.

## Author

- **Mani** — [Portfolio](https://mani.dev)
- Built as part of the Maniesta project series.

## License

Educational project. Not affiliated with Apple Inc.