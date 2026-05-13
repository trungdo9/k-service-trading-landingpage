# K Service Trading — Corporate Website

**"Unlocking Value, Building the Future Together"**

Corporate marketing website for K Service Trading Co., Ltd. — a multi-sector trading and services company bridging Vietnam, Korea, and Southeast Asia across seven business lines: Ecotourism, Trading, Duty Free, Smartfarm, Investment Counsel, Direct Investment, and Entertainment.

---

## Quick Description

A single-page editorial website with a dark/cream eco-luxury aesthetic. The homepage presents the company's seven business lines, four service pillars, four trading categories, the AN NAM Deltafarm flagship project, and an ecotourism/wellness/duty-free overview. It includes a 12-second looping FMCG supply-chain animation and a lead-capture contact form.

The project is a **zero-build-step prototype** — no bundler, no package manager, no server required for basic viewing.

---

## Project Structure

```
opts-2/
├── index.html              # Homepage (single-page)
├── styles.css              # All styles and design tokens
├── app.jsx                 # Live design tweaks wiring (React)
├── tweaks-panel.jsx        # Floating control-panel component library
├── animations.jsx          # Animation runtime (Stage, Sprite, easing)
├── fmcg-animation.jsx      # FMCG supply-chain film (4 scenes, 12s loop)
├── fmcg-animation.html     # Standalone animation host (iframe target)
├── image-slot.js           # <image-slot> web component
├── uploads/                # Images and brand reference documents
└── docs/                   # Full project documentation
```

---

## Setup & Viewing

### Option A — Direct file open (basic)

Open `index.html` in any modern browser. All content, animations, and the Tweaks panel work. The `<image-slot>` drag-and-drop persistence will not work (requires a server for the sidecar fetch).

### Option B — Local static server (recommended)

```bash
# Using Node.js npx
npx serve .

# Using Python
python -m http.server 8000

# Using VS Code
# Install "Live Server" extension, right-click index.html → Open with Live Server
```

Then open `http://localhost:8000` (or whatever port is shown).

### Runtime requirements

- Any modern evergreen browser (Chrome 90+, Firefox 90+, Safari 14+, Edge 90+)
- Internet connection at load time (Google Fonts + React/Babel from CDN)
- No Node.js, no `npm install`, no build step

---

## Key Features

- Full single-page homepage with six content sections and a contact section
- Sticky frosted-glass navigation with scroll-state transition
- Scroll-triggered reveal animations (IntersectionObserver)
- 12-second looping FMCG supply-chain animated film (embedded iframe)
- Fullscreen toggle for the animation panel
- Live Tweaks panel for runtime font, color, density, and layout adjustments
- `<image-slot>` web component for drag-and-drop image management
- Lead-capture contact form (front-end only in this build)

---

## Design System

| Token | Value |
|-------|-------|
| Primary accent | Premium Gold `#D1B05A` |
| Dark background | Midnight Slate `#161D1A` |
| Light background | Eco Cream `#F7F6F1` |
| Display font | Cormorant Garamond (serif) |
| Body font | Manrope (sans-serif) |
| Mono font | JetBrains Mono |

---

## Documentation

Full documentation is in the [`docs/`](./docs/) directory:

| Document | Contents |
|----------|---------|
| [`docs/project-overview-pdr.md`](./docs/project-overview-pdr.md) | Project purpose, business lines, features, system requirements, roadmap |
| [`docs/codebase-summary.md`](./docs/codebase-summary.md) | File responsibilities, section map, technology stack, dependencies |
| [`docs/code-standards.md`](./docs/code-standards.md) | HTML/CSS/JS conventions, naming, best practices |
| [`docs/system-architecture.md`](./docs/system-architecture.md) | Component tree, data flows, integration points, rendering model |

---

## Contact

**K Service Trading Co., Ltd.**
Ho Chi Minh City, Vietnam
Hotline: (+84) 935 7777 27
Email: info@k-tourism.club
Markets: Vietnam · Korea · Thailand · Bali · Singapore · Hong Kong
