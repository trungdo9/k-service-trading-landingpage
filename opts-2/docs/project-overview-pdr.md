# Project Overview & Product Development Requirements (PDR)

**Project:** K Service Trading — Corporate Website (opts-2)
**Version:** 1.0
**Last Updated:** 2026-05-10
**Status:** Active / Prototype Stage

---

## 1. Project Overview

### 1.1 Purpose

This project is the official corporate marketing website for **K Service Trading Co., Ltd.**, a multi-sector trading and services company headquartered in Ho Chi Minh City, Vietnam. The website serves as a digital gateway and lead-generation vehicle for investors, institutional partners, and high-net-worth individuals interested in the company's seven business lines spanning Vietnam, Korea, and Southeast Asia.

### 1.2 Business Context

K Service Trading positions itself as a strategic bridge between Vietnam, Korea, and ASEAN markets. The company's tagline is "Unlocking Value, Building the Future Together." Its six core values are Innovation, Sustainability, Professionalism, Transparency, International Cooperation, and Efficiency.

The company targets:
- International investors entering Vietnam
- Institutional capital partners seeking 20%+ ROI
- VIP tourists and hospitality clients from Korea, Japan, Europe, and the US
- Corporate partners across trade, logistics, and agritech sectors

### 1.3 Seven Business Lines

| ID | Line | Description |
|----|------|-------------|
| 01 | K-Ecotourism | 3.5–5-star resort bookings and private VIP tours; markets in VN, TH, Bali, SG, HK |
| 02 | K-Trading | Premium FMCG, agricultural exports, seafood, wood-pellet energy with Logistics 4.0 |
| 03 | K-Duty Free | VIP concierge boutique network at Lang Son and Moc Bai border gateways |
| 04 | K-Smartfarm | Korean container agriculture (Geumsil strawberries, premium mushrooms) for export |
| 05 | K-Counsel | Cross-border investment advisory for technology, manufacturing, hospitality, logistics |
| 06 | K-Investment | Direct capital allocation targeting 20%+ ROI in green tech, digital health, agri |
| 07 | K-7 Entertainment | International cultural festivals, product launches, film and arts production |

---

## 2. Key Features & Functionality

### 2.1 Implemented (Current Build)

- Full single-page application (SPA) homepage with six content sections and a contact section
- Sticky navigation bar with scroll-state transition (transparent to frosted glass)
- Fixed ticker-tape announcement bar at top
- Hero section with large typographic headline, stat counters, and dual CTA buttons
- Business-lines overview table (01–07)
- Service section: four service-pillar cards with SVG icons (K-Counsel, K-Investment, K-Smartfarm, K-7 Entertainment)
- Trading section: four trading-category cards with product photography (FMCG, Agricultural, Seafood, Energy)
- FMCG film feature section: embedded 12-second looping animated film (iframe) with fullscreen toggle
- Deltafarm (AN NAM) project section with photo plate and three-pillar layout
- Ecotourism section: three eco-cards covering Eco-Tourism, Wellness programs, and K-Duty Free
- Contact section: info block + lead-capture form with interest-select dropdown
- Footer with four-column link navigation
- Scroll-triggered reveal animations via IntersectionObserver
- Fail-safe 1.5-second force-reveal for paint-throttled environments
- Live Tweaks panel (development tool) for runtime design adjustments

### 2.2 FMCG Animation Subsystem

The FMCG film is a standalone animated HTML page (`fmcg-animation.html`) that loads as an iframe. It features:
- Four sequential scenes over a 12-second loop: World Map with trade arcs, Container delivery, Category grid, Brand lockup
- Custom animation runtime (`animations.jsx`) with a `Stage`, `Sprite`, and `useTime`/`useSprite` hooks
- Full easing library (quad, cubic, quart, expo, sine, back, elastic)
- Embed mode (`?embed=1`) that hides the playback bar
- `localStorage` persistence of playhead position keyed to `fmcg-anim`

### 2.3 Design Customization Tweaks Panel

A floating React-powered developer panel (`tweaks-panel.jsx` + `app.jsx`) allows live runtime adjustment of:
- Display font (Cormorant Garamond, Playfair Display, Lora)
- Gold tone (Default #D1B05A, Champagne #DCC58A, Bronze #B58536)
- Layout density (compact, comfy, airy)
- Hero variant (split layout vs. type-only)
- Show/hide hero stats
- Show/hide top ticker

Changes are persisted via `window.parent.postMessage` to the host editing environment.

### 2.4 Image Slot Web Component

`image-slot.js` registers a `<image-slot>` custom element that provides:
- Drag-and-drop image upload with preview
- Reframe (pan + scale) mode on double-click
- State persistence via `.image-slots.state.json` sidecar file
- Image downscaling to WebP at quality 0.85, capped at 1200px on the longest side
- Shape variants: rect, rounded, circle, pill, or arbitrary CSS clip-path

---

## 3. System Requirements

### 3.1 Runtime Requirements

- **Browser:** Any modern evergreen browser (Chrome 90+, Firefox 90+, Safari 14+, Edge 90+)
- **JavaScript:** ES2020 features used (async/await, optional chaining, nullish coalescing); Babel transpilation provided via CDN
- **No build step required** for the current prototype; all JSX is transpiled in-browser by `@babel/standalone`
- **Internet connection** required at load time for Google Fonts and CDN-hosted React/Babel scripts

### 3.2 CDN Dependencies (loaded at runtime)

| Library | Version | Purpose |
|---------|---------|---------|
| React | 18.3.1 | UI rendering for Tweaks panel and FMCG animation |
| ReactDOM | 18.3.1 | DOM mounting |
| @babel/standalone | 7.29.0 | In-browser JSX transpilation |
| Google Fonts | — | Cormorant Garamond, Playfair Display, Lora, Manrope, JetBrains Mono |

### 3.3 Local File Server

The `<image-slot>` component loads its sidecar state file via `fetch()`. To avoid CORS errors when using the drag-and-drop feature, the project must be served from a local HTTP server (e.g., `npx serve .` or the VS Code Live Server extension). Opening `index.html` directly via `file://` will suppress only the image-slot persistence; all other features work without a server.

---

## 4. Development Roadmap

### Phase 1 — Current (Prototype)

- Single-page homepage with all six content sections
- Embedded FMCG animated film
- Live Tweaks panel for design iteration
- Image-slot web component for placeholder management
- Static contact form (front-end validation only; no backend submission)

### Phase 2 — Recommended Next Steps

- Convert from in-browser Babel to a proper build pipeline (Vite or Parcel)
- Implement backend form submission for the contact form (email or CRM integration)
- Add individual dedicated pages per the sitemap: `/about`, `/services`, `/trading`, `/k-ecotourism`, `/k-deltafarm/an-nam`
- Implement Vietnamese language toggle (bilingual EN/VN)
- Add SEO meta tags, Open Graph, and structured data
- Integrate Google Analytics or equivalent

### Phase 3 — Expansion

- Build out the Membership Club portal and investor brief request flow
- Add K-Duty Free product catalog pages
- Implement K-Ecotourism booking integration (resort and VIP tour booking)
- Develop the K-Deltafarm (AN NAM) project investment brief page
- Add a press and media section
