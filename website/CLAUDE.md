# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Key Warning: Next.js Breaking Changes

This project uses **Next.js 16.2.4 with React 19** — these versions have breaking changes that differ from training data. Before writing code, read the relevant guides in `node_modules/next/dist/docs/` and heed deprecation notices. Do not assume Next.js 13-15 patterns apply.

## Quick Start

```bash
npm install          # Install dependencies
npm run dev         # Start dev server (http://localhost:3000)
npm run build       # Production build
npm start           # Start production server
npm run lint        # Run ESLint
```

## Architecture Overview

### Project Type
Single-page landing page for K Service Trading (VIP audience targeting). All major CTAs flow to the contact form via smooth scroll, not external navigation.

### Tech Stack
- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, TypeScript 5
- **Styling:** Custom brand colors (Midnight Slate `#161D1A`, Premium Gold `#D1B05A`, Eco Cream `#F7F6F1`)
- **Fonts:** Playfair Display (headings), Jost (body) — loaded via `next/font/google`
- **Animations:** Framer Motion 12.38.0
- **3D Graphics:** Three.js + react-three/fiber + react-three/drei (desktop 3D orbital ecosystem visualization)
- **Icons:** Lucide React

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with fonts, metadata, globals.css
│   └── page.tsx             # Home page (composes all sections)
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky header (transparent → Midnight Slate on scroll)
│   │   └── Footer.tsx
│   ├── sections/            # One-page landing sections
│   │   ├── Hero.tsx         # Video background, main CTA
│   │   ├── About.tsx        # Company intro + key achievements counters
│   │   ├── Ecosystem.tsx    # 2D bento grid (mobile fallback)
│   │   ├── Ecosystem3D.tsx  # 3D orbital visualization (desktop)
│   │   ├── Heritage.tsx     # Brand story, ESG commitment
│   │   ├── WhyUs.tsx        # Vision, core values, global network map
│   │   └── Contact.tsx      # Split-screen: contact info + form
│   └── ui/
│       └── Button.tsx       # Reusable button component
└── lib/
    └── utils.ts            # Utility functions (e.g., clsx/tailwind-merge helpers)
```

### Page Flow

The home page (`src/app/page.tsx`) imports and composes sections in order:
1. **Header** (sticky, toggles style on scroll)
2. **Hero** — brand statement, primary CTA
3. **About** — company intro, ROI/partner metrics
4. **Ecosystem** (mobile) or **Ecosystem3D** (desktop) — business lines in bento layout
5. **Heritage** — logo symbolism, ESG values
6. **WhyUs** — vision, core values, global presence
7. **Contact** — inquiry form (all CTA buttons target this)
8. **Footer** — minimal, no external nav

Each section is a separate component file under `src/components/sections/`.

### Styling & Configuration

- **Tailwind CSS:** Configured via `@tailwindcss/postcss` (PostCSS). Custom color variables defined in global CSS.
- **Brand Colors:** Use CSS variables for consistency:
  - Midnight Slate: `--color-midnight` (`#161D1A`)
  - Premium Gold: `--color-gold` (`#D1B05A`)
  - Eco Cream: `--color-cream` (`#F7F6F1`)
- **Responsive:** Mobile-first. Use `md:` breakpoint to toggle between 2D (mobile) and 3D (desktop) ecosystem views.

### Animation Philosophy

All animations use Framer Motion presets for consistency (smooth fade-in-up, no jarring transitions). See `Ecosystem3D.tsx` for the 3D orbital implementation pattern.

### Path Aliases

- `@/*` → `src/*` (configured in `tsconfig.json`)

Use `@/components/`, `@/lib/` in imports for cleaner paths.

### TypeScript Configuration

- Strict mode enabled
- ES2017 target
- JSX: `react-jsx`

## Linting

ESLint uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` presets. Run `npm run lint` to check. Fix with:

```bash
npx eslint --fix src/
```

## 3D Visualization Notes

The `Ecosystem3D.tsx` component uses react-three/fiber to render an orbital visualization. Key aspects:

- Only rendered on desktop (`hidden md:block`)
- Uses Canvas component from `@react-three/fiber`
- Geometry, materials, and camera setup are in that component
- Keep 3D logic isolated to avoid bloating other components

## Design System & Storybook

Design tokens and component patterns live in `design-system/k-service-trading/` (Storybook or similar reference). Check there for approved button styles, spacing scales, and color definitions.

## Common Tasks

**Add a new section:**
1. Create a component in `src/components/sections/SectionName.tsx`
2. Import and add to `src/app/page.tsx` in the correct order
3. Use Tailwind classes and Framer Motion for animations

**Update brand colors:**
1. Modify CSS variables in `src/app/globals.css`
2. Reference them in Tailwind classes (e.g., `bg-midnight`, `text-gold`)

**Modify form fields:**
1. Edit `src/components/sections/Contact.tsx`
2. Ensure form submission targets a backend API or email service

**Deploy:**
1. `npm run build` to verify no TypeScript or build errors
2. Push to main (if using CI/CD)
3. Vercel auto-deploys or use your hosting provider

## Resources

- [Next.js 16 Docs](https://nextjs.org/docs) — primary reference
- `node_modules/next/dist/docs/` — internal breaking-changes guides
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
