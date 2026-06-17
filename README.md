# LumièreLips — Luxury Liquid Lipstick Website

A modern, elegant lipstick product website built with React + TypeScript + Vite,
styled using Tailwind CSS with a purple/white glassmorphism aesthetic and animated
with Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Sticky glass navbar with mobile hamburger menu
│   ├── Hero.tsx         # Split-screen hero with gradient background + feature cards
│   ├── ProductCard.tsx  # Reusable glassmorphism product card
│   ├── Products.tsx     # Product grid section
│   ├── Reviews.tsx      # Customer review cards with badges
│   ├── Footer.tsx       # Footer with brand links and socials
│   └── Loader.tsx       # Animated loading screen
├── data/
│   └── products.ts      # Product & feature data with TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css            # Tailwind + glassmorphism + gradient utilities
```

## Features

- Purple/white gradient + glassmorphism design system
- Animated gradient backgrounds
- Sticky, scroll-aware navbar with mobile hamburger menu
- Smooth scroll navigation
- Framer Motion animations (hover, scroll-reveal, floating elements)
- Responsive layout (mobile → desktop)
- Reusable, typed components (`Product`, `Feature` interfaces)
- SEO-friendly meta tags in `index.html`

## Notes

- Dependencies (React, Tailwind, Framer Motion, react-icons) are listed in
  `package.json` — run `npm install` to fetch them.
- Product images use Unsplash placeholder URLs; swap with your own assets in
  `src/data/products.ts`.
