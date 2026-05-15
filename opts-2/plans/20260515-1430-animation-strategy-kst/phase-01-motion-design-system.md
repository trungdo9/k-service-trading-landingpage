# Phase 01: Motion Design System & Animation Foundations

**Parent Plan:** [plan.md](./plan.md) | **Next Phase:** [phase-02-scroll-animations.md](./phase-02-scroll-animations.md)

---

## Overview

| Aspect | Details |
|--------|---------|
| **Date** | 2026-05-15 |
| **Description** | Establish CSS custom properties, easing library, animation utility classes for consistent motion across all 7 sections |
| **Priority** | Critical (foundational) |
| **Implementation Status** | Not started |
| **Review Status** | Awaiting design review |

---

## Context Links

- **Research:** [researcher-01-eco-luxury-animation-trends.md](./research/researcher-01-eco-luxury-animation-trends.md) — Easing functions & motion principles
- **Code Standards:** `./../docs/code-standards.md`
- **Current Styles:** `./../styles.css` (existing reveal animation baseline)

---

## Key Insights

1. **Easing Functions Critical** – Motion feel entirely depends on cubic-bezier selection. K Service Trading brand demands premium slowness (ease-out, 400-600ms durations).

2. **CSS Custom Properties Scale** – Using `--animation-duration-normal`, `--easing-reveal`, etc. ensures brand-wide consistency without code duplication.

3. **GPU Acceleration Priority** – All animations must use `transform` + `opacity` only. No layout-triggering properties.

4. **Existing Reveal Foundation** – Current `.reveal` class + `--rd` (reveal delay) variable is good baseline. Extend with new utility classes.

5. **Mobile-First Approach** – Define base animations for mobile, enhance for desktop via media queries.

---

## Requirements

### R1: Easing Function Library
Define 6-8 cubic-bezier curves as CSS custom properties for reuse across entire project.

### R2: Animation Duration Scale
Establish duration tokens (fast: 150ms, normal: 400ms, slow: 600ms, premium: 800ms).

### R3: Utility Animation Classes
Create reusable classes: `.anim-fade-in`, `.anim-slide-up`, `.anim-scale`, `.anim-hover-lift`, etc.

### R4: Stagger System
Define CSS-based stagger patterns for grid/list animations (40ms, 60ms, 80ms offsets).

### R5: GPU Acceleration Defaults
Apply `will-change`, `transform`, `backface-visibility` strategically to performance-critical elements.

### R6: Mobile Animation Variants
Define `@media (max-width: 768px)` overrides for mobile performance + UX.

---

## Architecture

```
styles.css (updated)
├── :root CSS Variables
│   ├── Animation durations (--anim-fast, --anim-normal, --anim-slow, --anim-premium)
│   ├── Easing functions (--ease-out-cubic, --ease-in-out, --ease-out-quad, etc.)
│   ├── Stagger offsets (--stagger-sm, --stagger-md, --stagger-lg)
│   └── GPU acceleration hints (--gpu-hint)
│
├── @keyframes Definitions
│   ├── @keyframes fadeIn { opacity: 0 → 1 }
│   ├── @keyframes slideUp { transform: translateY(24px) → translateY(0) }
│   ├── @keyframes scaleIn { transform: scale(0.9) → scale(1) }
│   ├── @keyframes float { transform: translateY(-4px) ↔ translateY(4px) }
│   └── [8-12 more animation primitives]
│
├── Utility Classes
│   ├── .anim-reveal { opacity: 0; transform: translateY(16px); }
│   ├── .anim-reveal.in { opacity: 1; transform: translateY(0); transition: all var(--rd) var(--ease-out-cubic); }
│   ├── .anim-hover-lift { transition: transform 250ms var(--ease-in-out), box-shadow 250ms var(--ease-in-out); }
│   ├── .anim-hover-lift:hover { transform: translateY(-8px); box-shadow: 0 12px 32px rgba(0,0,0,0.15); }
│   └── [15-20 more utility classes]
│
└── Media Queries
    ├── @media (max-width: 768px)
    │   ├── Disable parallax
    │   ├── Reduce animation durations by 20%
    │   └── Simplify hover states
    └── @media (prefers-reduced-motion: reduce)
        └── Disable all animations (accessibility)
```

---

## Related Code Files

| File | Purpose | Status |
|------|---------|--------|
| `styles.css` | Main stylesheet; add CSS variables + @keyframes here | Existing, will extend |
| `index.html` | HTML markup; no changes needed for phase 1 | Ready |
| `app.jsx` | React tweaks panel; may need animation preview tools | Existing, optional enhancement |

---

## Implementation Steps

### Step 1: Define CSS Custom Properties (30 min)

Add to `:root` section of `styles.css`:

```css
:root {
  /* Animation Durations */
  --anim-fast: 150ms;
  --anim-normal: 400ms;
  --anim-slow: 600ms;
  --anim-premium: 800ms;

  /* Easing Functions (Premium Feel) */
  --ease-out-cubic: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1.0);
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-sine-in-out: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --ease-back-out: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* Stagger Offsets */
  --stagger-sm: 40ms;
  --stagger-md: 60ms;
  --stagger-lg: 80ms;

  /* GPU Acceleration Hint */
  --gpu-hint: translateZ(0);
}
```

### Step 2: Define @keyframes Primitives (1 hour)

Add animation definitions to `styles.css`:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(24px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* [8-12 more primitives] */
```

### Step 3: Create Utility Animation Classes (1.5 hours)

Add utility classes to `styles.css`:

```css
/* Reveal Animations (scroll-triggered) */
.anim-reveal {
  opacity: 0;
  transform: translateY(16px) var(--gpu-hint);
  will-change: opacity, transform;
}

.anim-reveal.in {
  opacity: 1;
  transform: translateY(0) var(--gpu-hint);
  transition: opacity var(--anim-normal) var(--ease-out-cubic),
              transform var(--anim-normal) var(--ease-out-cubic);
  transition-delay: var(--rd, 0ms);
}

/* Hover Effects */
.anim-hover-lift {
  transition: transform 250ms var(--ease-in-out),
              box-shadow 250ms var(--ease-in-out);
}

.anim-hover-lift:hover {
  transform: translateY(-8px) var(--gpu-hint);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

/* [15-20 more utility classes] */
```

### Step 4: Mobile & Accessibility Overrides (45 min)

Add media queries:

```css
@media (max-width: 768px) {
  :root {
    --anim-normal: 320ms; /* 20% faster on mobile */
    --anim-slow: 480ms;
  }

  /* Disable parallax on mobile */
  .parallax-element {
    transform: none !important;
  }

  /* Simplify hover states on touch devices */
  .anim-hover-lift:hover {
    transform: translateY(-4px) var(--gpu-hint); /* Less lift */
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Step 5: Testing & Validation (30 min)

- [ ] Chrome DevTools: Verify 60fps on animation preview
- [ ] Lighthouse: Confirm no CLS regression
- [ ] Accessibility: Test with `prefers-reduced-motion` enabled
- [ ] Mobile DevTools: Verify animations work on touch devices

---

## Todo List

- [ ] Define 6 easing functions as CSS custom properties
- [ ] Create 12 @keyframes animation primitives
- [ ] Build 15-20 utility animation classes
- [ ] Add mobile media query overrides
- [ ] Add accessibility (prefers-reduced-motion) fallbacks
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Validate CLS & LCP metrics with Lighthouse
- [ ] Document easing functions in design guidelines

---

## Success Criteria

- [ ] All animations use only `transform` + `opacity` properties (GPU-safe)
- [ ] Motion durations consistent: fast=150ms, normal=400ms, slow=600ms, premium=800ms
- [ ] All animations respect `prefers-reduced-motion` media query
- [ ] Easing functions feel "premium" (ease-out-cubic, never linear)
- [ ] Mobile animations 20% faster than desktop variants
- [ ] No CLS regression (< 0.1 required)
- [ ] Lighthouse Performance score ≥ 85 (desktop), ≥ 75 (mobile)

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| CSS custom properties not supported in old browsers (IE 11) | Low | Medium | Project targets modern browsers only (Chrome 90+) |
| Over-animation: too many simultaneous animations → jank | Medium | High | Stagger animations, use CSS-only for simple effects, test on throttled CPU |
| Accessibility regression: animations interfere with screen readers | Low | High | Always add `prefers-reduced-motion`, test with NVDA/VoiceOver |
| Mobile performance: animations drain battery | Medium | Medium | Disable parallax on mobile, reduce durations, test on real devices |

---

## Security Considerations

- CSS animations are inherently safe (no XSS/injection vectors)
- All animation durations/easings are hardcoded values (no user input)
- No external animation libraries loaded (no supply-chain risk)

---

## Next Steps

1. User reviews phase 1 design system structure
2. Approve CSS custom properties + easing functions
3. Begin implementation of @keyframes and utility classes
4. Move to Phase 2 (scroll-triggered animations) upon completion
5. Parallel: Prepare section HTML for animation targeting (add class markers)

---

**Phase Status:** Ready for implementation upon approval.
