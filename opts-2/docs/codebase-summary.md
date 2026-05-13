# Codebase Summary

**Project:** K Service Trading — Corporate Website (opts-2)
**Last Updated:** 2026-05-10

---

## 1. Directory Structure

```
opts-2/
├── index.html              # Main homepage — single-page corporate site
├── styles.css              # Global stylesheet (all page styles)
├── app.jsx                 # Tweaks-panel wiring; applies live design overrides to the DOM
├── tweaks-panel.jsx        # Reusable floating UI toolkit (TweaksPanel + all controls)
├── animations.jsx          # Animation runtime library (Stage, Sprite, Easing, hooks)
├── fmcg-animation.jsx      # FMCG supply-chain animated film (4 scenes, 12s loop)
├── fmcg-animation.html     # Standalone HTML host for the FMCG animation (iframe target)
├── image-slot.js           # <image-slot> custom element — drag-and-drop image placeholder
├── repomix-output.xml      # Auto-generated codebase compaction (build artifact)
├── docs/                   # Project documentation
└── uploads/                # Static assets and reference documents
    ├── k-trading-1.png
    ├── k-trading-2.png
    ├── Agricultural exports*.png   (3 variants)
    ├── DUTIE FREE*.png             (4 variants)
    ├── Wellness programs.png
    ├── k-ecotourism.png
    ├── du-an-an-nam.jpeg
    ├── img_13_p7_*.png             (hero background, 2 variants)
    ├── k-profile.md                # Company profile reference (Vietnamese/English)
    ├── sitemap.md                  # Site navigation and page structure plan
    └── color-guidelines.md         # Brand design guidelines (Vietnamese)
```

---

## 2. Source Files and Responsibilities

| File | Responsibility | React? |
|------|---------------|--------|
| `index.html` | All page content markup; inline scroll and reveal scripts | No |
| `styles.css` | All visual styling; design tokens; responsive rules | No |
| `app.jsx` | Wires Tweaks panel controls to live DOM mutations | Yes |
| `tweaks-panel.jsx` | Reusable floating control-panel component library | Yes |
| `animations.jsx` | Animation runtime: Stage, Sprite, easing, time hooks | Yes |
| `fmcg-animation.jsx` | Four-scene FMCG supply-chain film | Yes |
| `fmcg-animation.html` | Standalone shell hosting the animation as an iframe target | No |
| `image-slot.js` | `<image-slot>` Web Component for drag-and-drop images | No |

### Homepage sections (`index.html`)

| Section ID | Label | Content |
|-----------|-------|---------|
| `#top` | Hero | Full-viewport headline, stat counters, dual CTA |
| `#about` | 01 K | Company intro, 7 business-line index |
| `#services` | 02 Service | 4 service-pillar cards |
| `#trading` | 03 Trading | 4 trading-category cards with product photos |
| `#fmcg-film` | 03B FMCG Film | Animated film iframe with fullscreen button |
| `#deltafarm` | 04 Deltafarm | AN NAM flagship project feature |
| `#ecotourism` | 05 Ecotourism | Eco-tourism, Wellness, Duty Free cards |
| `#contact` | 06 Contact | Info block and lead-capture form |

### FMCG animation scenes (`fmcg-animation.jsx`)

| Sprite | Time | Scene |
|--------|------|-------|
| SceneMap | 0–3.6s | World map dot grid with animated trade arcs (Seoul, Paris, Rotterdam → HCMC) |
| SceneContainer | 3.6–7.0s | Shipping container drives in, doors open, product cards fly out |
| SceneCategories | 7.0–10.0s | Four-column category grid (Cosmetics, F&B, Household, Personal Care) |
| SceneLockup | 10.0–12.0s | K crest brand lockup |

---

## 3. Technology Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 — semantic sections, inline SVG |
| Styling | CSS3 — custom properties, grid, flexbox, `clamp()`, `backdrop-filter` |
| Scripting | Vanilla JS — IntersectionObserver, scroll events, Fullscreen API |
| UI Framework | React 18.3.1 (CDN UMD) |
| JSX Transpilation | @babel/standalone 7.29.0 (in-browser, no build step) |
| Animation | Custom `requestAnimationFrame` loop (`animations.jsx`) |
| Web Components | Native Custom Elements v1 + Shadow DOM (`image-slot.js`) |
| Fonts | Google Fonts — Cormorant Garamond, Playfair Display, Lora, Manrope, JetBrains Mono |

---

## 4. Key Dependencies

### External (CDN, SRI-pinned)

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 18.3.1 | UI rendering |
| `react-dom` | 18.3.1 | DOM mounting |
| `@babel/standalone` | 7.29.0 | In-browser JSX transpilation |
| Google Fonts | — | Typography |

### Internal dependency order

```
tweaks-panel.jsx  ← (React globals)
app.jsx           ← tweaks-panel.jsx, React globals
animations.jsx    ← (React globals)
fmcg-animation.jsx ← animations.jsx, React globals
image-slot.js     ← (no dependencies)
```

No build tool, no `package.json`, no `node_modules`. All scripts are loaded via `<script>` tags with SRI integrity hashes.
