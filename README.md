# Tulas International School: Homepage Redesign

An animated, responsive redesign of the TIS home page (reference: https://tis.edu.in/). All facts, contact details, sports, awards-style stats and parent quotes come from the reference site.

## Tech stack
React 18, Vite, CSS Modules, Framer Motion, deployed on Vercel.

## Features
- Responsive layout with hamburger menu, sticky navbar and hover animations
- Scroll-triggered staggered reveals (respects reduced-motion)
- Custom cursor that reacts to links, buttons and cards (fine pointers only)
- Animated dark/light theme switcher, saved between visits
- Smooth scroll progress bar
- Parallax hero, bento facilities grid, horizontal gallery, testimonial carousel
- Contact form with accessible frontend validation (no backend)
- Content stored in `src/data.js` and rendered with `.map()`

## Installation
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Live demo
Add your Vercel link here.

## GitHub repository
Add your repository link here.

## Notes
Images load from the reference site and fall back to a gradient if unavailable. For production, download them into `public/images/` and update `src/data.js`.
