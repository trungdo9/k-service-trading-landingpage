# K Service Trading — Website Development Guide

## Project Overview
**K Service Trading Co., Ltd** — Premium integrated business group providing:
- Agricultural exports, sustainable seafoods, consumer FMCG imports
- Clean green energy solutions & smart agriculture
- Premium ecotourism & wellness programs
- Investment advisory & strategic partnerships

**Website:** Multilingual eco-luxury brand site (Vietnamese/English/Korean)  
**Status:** In development — `opts-2/` directory contains the main implementation

---

## Directory Structure

```
K-Service-Trading/
├── opts-2/                    # Main implementation directory
│   ├── index.html            # Vietnamese version (primary)
│   ├── styles.css            # Main stylesheet
│   ├── mobile.css            # Mobile responsive styles
│   ├── app.jsx               # React components
│   ├── tweaks-panel.jsx      # UI tweaks panel
│   └── uploads/              # Images & assets
├── color-guidelines.md       # Brand design system (UPDATED)
└── CLAUDE.md                 # This file
```

---

## Design System & Brand Guidelines

### Reference Files
- **color-guidelines.md** — Complete design guidelines
  - Color palette (Premium Gold #C89E2F, Deep Slate #2C3531, Eco Cream #F7F6F1)
  - Typography (Serif for headings, Sans-serif for body)
  - UI/UX component standards
  - **NEW:** Implementation notes from actual website build

### Key Colors
| Element | Color | HEX | Purpose |
|---------|-------|-----|---------|
| Primary Accent | Premium Gold | #C89E2F | CTAs, highlights, icons |
| Body Text | Deep Slate | #2C3531 | All paragraph/body content |
| Background | Eco Cream | #F7F6F1 | Section dividers |
| Background | Pure White | #FFFFFF | Cards, main sections |

### Typography System
| Type | Font | Usage |
|------|------|-------|
| **Display/Heading** | Cormorant Garamond, Playfair Display, Lora (Serif) | H1, H2, H3 titles |
| **Body/Paragraph** | Manrope, Inter (Sans-serif) | Paragraphs, menu, lists, descriptions |
| **Monospace** | JetBrains Mono | Code, technical content ONLY |

**✅ Recent Emphasis:** Body font (Manrope) used throughout menus, lists, and descriptions for optimal readability. Monospace reserved for technical content only.

---

## Current Implementation Status

### Completed
- ✅ Full Vietnamese translation (`index-vi.html` / `index.html`)
- ✅ Navigation menu redesign (font, spacing, size)
- ✅ Responsive layout & hero section
- ✅ Partnership cards section with icons
- ✅ Services grid
- ✅ Trading section (4 pillars: FMCG, Agricultural, Seafood, Energy)
- ✅ Deltafarm (AN NAM) ecofarm & wellness resort
- ✅ Ecotourism section (tours, wellness, duty-free)
- ✅ Contact form & footer
- ✅ Reveal animations & scroll tracking
- ✅ Mobile hamburger menu with sub-menus

### Font & Typography Updates (Latest)
- ✅ Navigation menu: 14px → **15px**, monospace → **Manrope**, UPPERCASE maintained
- ✅ Sub-menu items: 11px → **13px**, monospace → **Manrope**, improved readability
- ✅ Eco-card lists: monospace → **Manrope**, font-size 13px, no spacing
- ✅ Partnership card headings: Standardized to **1.7rem**
- ✅ Lead/lede text: Standardized to **19px** across sections

### To-Do / Future Enhancements
- [ ] Mobile optimization refinement (test on various screen sizes)
- [ ] Performance optimization (image lazy-loading, CSS minification)
- [ ] SEO metadata completion
- [ ] Internationalization (English, Korean versions)
- [ ] Form backend integration
- [ ] Analytics integration
- [ ] Accessibility audit (WCAG 2.1 AA)

---

## Development Notes

### Font Family Rules
**✅ DO:**
- Use `var(--body)` (Manrope) for: menus, lists, body paragraphs, descriptions, secondary content
- Use `var(--display)` (Serif) for: main headings, H1-H3, featured titles
- Use `var(--mono)` (JetBrains Mono) for: code snippets, technical content ONLY

**❌ DON'T:**
- Don't use monospace font for navigation menus or list items
- Don't mix fonts inconsistently across similar components
- Don't use sans-serif for display headings (breaks brand identity)

### CSS Classes Reference
| Class | Purpose | Font |
|-------|---------|------|
| `.display` | Main headings | Serif (var(--display)) |
| `.lead` | Lead/lede paragraph | Body (var(--body)), 19px |
| `.nav-menu a` | Navigation items | Body (var(--body)), 15px, UPPERCASE |
| `.nav-menu .sub-menu a` | Submenu items | Body (var(--body)), 13px |
| `.eco-card ul` | Feature lists in cards | Body (var(--body)), 13px |
| `.partnership-card h3` | Partnership titles | Display (var(--display)), 1.7rem |

### Color Palette Usage
```css
:root {
  --slate: #161D1A;           /* Dark backgrounds (Hero, Footer) */
  --cream: #F7F6F1;            /* Eco Cream — section dividers */
  --paper: #FFFFFF;            /* Pure White — cards */
  --gold: #C89E2F;             /* Premium Gold — accents, CTAs */
  --ink: #2C3531;              /* Deep Slate — body text */
  --ink-2: #5C6661;            /* Light Slate — secondary text */
}
```

### Responsive Design
- **Grid-based layout** with large negative space (padding 120px-200px between sections)
- **Mobile-first approach** with hamburger menu (3-line toggle)
- **Breakpoints:** Defined in `mobile.css`
- **Images:** Rounded corners (4px-8px), warm-toned, optimized for 4:3 aspect ratio

---

## How to Run & Test

### Local Development
```bash
# Navigate to project directory
cd "e:\Projects\K-Service-Trading\opts-2"

# Open in browser (double-click index.html or use live server)
# OR use VS Code Live Server extension
```

### Key Files to Edit
- **Content:** `index.html` (main file, Vietnamese)
- **Styles:** `styles.css` (main styles), `mobile.css` (responsive)
- **Components:** `app.jsx`, `tweaks-panel.jsx` (React-based UI)

### Testing Checklist
- [ ] Navigation menu displays correctly (desktop & mobile)
- [ ] Partnership cards headings consistent (1.7rem)
- [ ] Lead text (19px) readable across sections
- [ ] Eco-card lists use body font, proper spacing
- [ ] Form is functional and styled
- [ ] Images load and scale properly
- [ ] Mobile menu works smoothly
- [ ] Colors match brand guideline (#C89E2F gold, #2C3531 text)

---

## Brand Voice & Messaging

### Tone
- **Premium, Professional, Sustainable** — Eco-luxury positioning
- **Bilingual** (Vietnamese/English/Korean) — Regional focus
- **Data-driven** — Key metrics emphasized (3 markets, 50+ partners, 20% ROI)

### Key Messages
1. "Unlocking Value, Building the Future Together" — Main tagline
2. "A Strategic Gateway between Vietnam, Korea, Southeast Asia"
3. Seven interlocking business lines (Investment, Trading, Smartfarm, Ecotourism, etc.)

---

## Common Edits

### To Update Colors
Search `--gold` or `--ink` in `styles.css` and update hex values in `:root`

### To Adjust Font Sizes
- Navigation: `.nav-menu` → `font-size`
- Body text: `.lead` → `font-size`
- Headings: `.display` → adjust in HTML inline styles or create CSS class

### To Change Typography
- Body font: Change `--body: "Manrope"...` in `:root`
- Display font: Change `--display: "Cormorant Garamond"...` in `:root`
- Monospace: Only for code/technical

### To Add New Sections
1. Use `.section` class with appropriate background color (`.cream`, `.paper`, `.dark`)
2. Apply `.reveal` class to elements for scroll animations
3. Maintain consistent padding/margins using CSS variables
4. Follow partnership card or service card component patterns

---

## Contact & Metadata

**Client Email:** kservicetrading@gmail.com  
**Project Location:** e:\Projects\K-Service-Trading\  
**Last Updated:** 2026-05-21

---

**Generated by:** Claude Code (Anthropic)  
**Version:** 1.0
