# Research Report 02: Section-Specific Animation Opportunities

**Research Date:** 2026-05-15 | **Focus:** Content Structure & Animation Mapping | **Status:** Complete

---

## 1. Current Animation State Analysis

### Existing Animations (HTML Structure)

From `index.html` analysis:
- `.reveal` class on 50+ elements with `--rd` (reveal delay) CSS variable
- IntersectionObserver triggers `.in` class at scroll (threshold 12%, rootMargin -8%)
- Failsafe force-reveal at 1.5s if paint-throttled
- Vanilla JS only; no animation library

**Current Gap:** Basic fade-in + stagger only. No hover states, scroll-linked animations, or micro-interactions.

---

## 2. Animation Opportunity Map by Section

### Section 00: Navigation & Hero

**Content:** Logo, nav menu, hero headline, stat counters, dual CTAs

**Current Animations:**
- Nav scrolls from transparent to frosted glass (only class toggle, no transition)
- Hero title/lede/CTA have `.reveal` stagger (good baseline)

**Recommended Additions:**
1. **Logo Emblem Animation** – SVG stroke animation on load/scroll-into-view (2s duration, ease-out). Draws circular rings + crown accents sequentially.
2. **Hero Stat Counter Animation** – Numbers increment from 0 to target on reveal (1.5-2.0s). CountUp pattern or CSS `@property` animation.
3. **CTA Button Hover Lift** – `translateY(-4px)` + shadow expansion on hover (200ms cubic-bezier).
4. **Nav Scroll Transition** – Add `transition: all 300ms ease-out` to nav background change.

**Estimated Elements:** 4-6 new animations

---

### Section 01: About (K Business Intro)

**Content:** Section number, headline, 3 paragraphs, business-line table (7 rows), metrics grid (4 items)

**Current Animations:**
- `.reveal` stagger on headline, paragraphs, table, metrics (good)

**Recommended Additions:**
1. **Metrics Counter Animation** – "3", "7", "50+", "20%+" animate on scroll-reveal (2.0s each). Cubic-bezier ease-out.
2. **Table Row Stagger** – Each line in 7-item list reveals with 80ms offset. Creates waterfall effect.
3. **Accent Color Pulse** – Gold (#C89E2F) accent text in "multi-sector" pulses gently on reveal (0.3s opacity flicker, subtle).
4. **Divider Line Animation** – Horizontal rule before section-num animates from `width: 0` to `width: 36px` (400ms ease-out).

**Estimated Elements:** 5-8 new animations

---

### Section 02: Service Cards (4 Pillars)

**Content:** 4 service cards with SVG icons, tier badges, titles, descriptions, CTAs

**Current Animations:**
- Card `.reveal` stagger (0s, 80ms, 160ms, 240ms delays) ✓

**Recommended Additions:**
1. **Card Hover Lift** – `transform: translateY(-8px)` + shadow expansion (0 4px 12px → 0 12px 32px) on hover. 250ms cubic-bezier.
2. **Icon Rotation & Glow** – SVG icon subtle rotation (5°) + gold glow filter on card hover. 300ms ease-in-out.
3. **Badge Pulse** – Enterprise/Premium badge scales slightly (1.0 → 1.08) and color shift on card hover. 200ms.
4. **CTA Underline Animation** – "Read More" link has animated underline expanding left-to-right on hover. Width 0 → 100% (300ms).

**Estimated Elements:** 6-8 new animations (4 cards × 2-3 interactions each)

---

### Section 03: Trading Cards (4 Categories + FMCG Film)

**Content:** 4 trading cards (FMCG, Agri, Seafood, Energy) with images, metrics; embedded FMCG film iframe

**Current Animations:**
- Card `.reveal` stagger (0s, 100ms, 180ms, 260ms) ✓
- FMCG iframe already has 12s loop animation ✓

**Recommended Additions:**
1. **Card Image Parallax** – Subtle `translateY` parallax on card scroll-into-viewport (8% offset, ease-out). Modern feel.
2. **Card Hover Image Zoom** – Image scales 1.0 → 1.05 on card hover (300ms ease-out cubic).
3. **Metric Counter Animation** – "20M+", "500+", "8", etc. count-up animations on card reveal (1.5-2.0s).
4. **Tag Stagger Animation** – Tag badges below metrics appear with 60ms stagger on card hover.
5. **Fullscreen Button Hover** – Button has subtle icon rotation + color shift (200ms).

**Estimated Elements:** 8-12 new animations

---

### Section 04: Deltafarm (AN NAM Project)

**Content:** Banner with headline, mosaic photos (3 images), stats rail (4 items), lede + CTAs

**Current Animations:**
- Banner meta, headline, body, mosaic elements have `.reveal` stagger ✓
- Stats rail items have `.reveal` stagger with `--rd` values ✓

**Recommended Additions:**
1. **Banner Image Parallax** – Hero background image moves at `translateY(-4vh)` on page scroll (will-change: transform).
2. **Photo Mosaic Hover** – Images scale + blur filter reduces on hover. 300ms ease-out.
3. **Stats Bar Animation** – Horizontal bar under each stat animates `width: 0 → var(--width)` on reveal. Smooth progression.
4. **Corner Label Rotation** – Bottom-right corner text rotates slightly (2-3°) and fades-in on reveal. 500ms ease-out.
5. **CTA Button State** – Hover effect with background color transition + arrow icon slide-right animation (200ms).

**Estimated Elements:** 6-8 new animations

---

### Section 05: Ecotourism Cards (3 Cards)

**Content:** 3 eco-cards (Eco-Tourism, Wellness, Duty Free) with images/grid, titles, descriptions, lists

**Current Animations:**
- Card `.reveal` stagger (0s, 120ms, 240ms) ✓

**Recommended Additions:**
1. **Card Hover Lift & Glow** – `translateY(-6px)` + gold shadow on hover. 250ms cubic-bezier.
2. **Image Parallax on Card Hover** – Image shifts `translateY(-2vh)` within card boundaries on hover. Creates depth.
3. **List Item Stagger** – UL items within card stagger-reveal on card hover. 40ms delays.
4. **Corner Badge Animation** – Corner indicators ("01", "02", "03") scale + rotate on card hover. 200ms.
5. **Bottom Border Expand** – Subtle border-bottom expands from center outward on card hover. Width 0 → 100% (300ms).

**Estimated Elements:** 8-10 new animations

---

### Section 06: Partners Network & Contact Form

**Content:** Partner grid, contact info, form fields (6 inputs), submit button

**Current Animations:**
- Form elements have `.reveal` stagger ✓
- Submit button is static

**Recommended Additions:**
1. **Partner Badge Bounce** – Badge items scale + rotate slightly on scroll-reveal. 400ms ease-out with bounce easing.
2. **Form Field Focus Ring** – Input fields show animated gold border + glow on focus. 150ms ease-out.
3. **Label Float Animation** – Labels move up slightly and color-shift to gold on input focus (using CSS `:focus-within`). 200ms.
4. **Submit Button Hover** – Background color shift, arrow icon animates right on hover. 200ms cubic-bezier.
5. **Form Success Animation** – On submit, button animates to checkmark icon appearance. 300ms ease-out.

**Estimated Elements:** 8-10 new animations

---

### Section 07: Footer

**Content:** Brand info, 4-column link groups, copyright bar

**Current Animations:**
- None

**Recommended Additions:**
1. **Link Underline Animation** – Footer links show animated underline on hover (width 0 → 100%, 250ms ease-out).
2. **Emblem Hover Rotate** – Footer emblem SVG rotates 180° on hover (500ms ease-in-out).
3. **Column Fade on Scroll** – Footer columns fade-in as user nears bottom (opacity 0.5 → 1.0, 600ms ease-out).

**Estimated Elements:** 4-6 new animations

---

## 3. Animation Interaction Patterns Summary

### Total Estimated New Animations: 50-70 elements

| Category | Count | Complexity |
|----------|-------|-----------|
| Hover Effects | 15-20 | Low (CSS-only) |
| Scroll-Triggered Reveals | 12-16 | Low (already have structure) |
| Counter/Number Animations | 8-12 | Medium (require JS) |
| Parallax Effects | 5-8 | Medium (scroll-linked) |
| Stagger Groups | 6-10 | Low (CSS `animation-delay`) |
| SVG Path Animations | 2-4 | Medium (SVG stroke-dasharray) |
| Advanced Micro-Interactions | 4-8 | Medium-High |

---

## 4. Implementation Priority

### Phase 1 (High Impact, Low Effort)
- Hover card lifts (all card sections)
- Button hover states
- Link underline animations
- Divider line reveals

### Phase 2 (Medium Impact, Medium Effort)
- Number counter animations
- SVG path reveals
- Parallax effects (scroll-linked)
- Stagger groups

### Phase 3 (Polish & Polish)
- Advanced micro-interactions (form animations)
- Scroll-velocity-aware optimizations
- Accessibility enhancements (prefers-reduced-motion)

---

## Unresolved Questions

- Should parallax on mobile be disabled for performance (mobile sees static images)?
- Will number counters require library (CountUp.js) or vanilla CSS @property animation?
- Should FMCG iframe animation be synchronized with main page scroll context?
- Performance budget for 60+ new animations across 7 sections?
