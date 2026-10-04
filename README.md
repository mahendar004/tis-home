# Tulas International School: Homepage Redesign

An animated, responsive redesign of the Tulas International School (TIS) home page. The reference site is https://tis.edu.in/. Facts, contact details, sports, stats and parent quotes come from the reference site.

## Tech stack
React 18, Vite, CSS Modules, Framer Motion, deployed on Vercel.

## Features
- Responsive layout with a hamburger menu, sticky navbar and hover animations
- Scroll-triggered staggered reveals (respects reduced-motion settings)
- Custom cursor that reacts to links, buttons and cards (fine pointers only)
- Animated dark/light theme switcher, saved between visits
- Smooth scroll progress bar
- Parallax hero, bento campus grid, horizontal gallery and testimonial carousel
- Contact form with accessible frontend validation (no backend)
- Content stored in `src/data.js` and rendered with `.map()`
- TIS brand colours (crimson red and teal)

## Installation
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Live demo
https://tis-home.vercel.app

## GitHub repository
https://github.com/mahendar004/tis-home

## Project structure
- `src/components`: one component per section or feature (Navbar, Hero, About, Academics, Facilities, WhyTIS, Activities, Testimonials, AdmissionsCTA, Contact, Footer, Cursor, ScrollProgress, ThemeToggle, Reveal)
- `src/hooks/useTheme.js`: theme hook (saved choice or system setting)
- `src/data.js`: all page content
- `src/styles/page.module.css` and `src/index.css`: styles and theme colours

## Notes
The hero and campus photo is stored in `public/campus.webp`. The logo and the Life at TIS gallery images load from the reference site and fall back to a gradient if unavailable. For production, download them into `public/images/` and update `src/data.js`. The contact form validates input but does not send anything.