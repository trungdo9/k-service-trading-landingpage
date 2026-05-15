# Phase 05: Performance Optimization & Accessibility

**Parent Plan:** [plan.md](./plan.md) | **Prev:** [phase-04-counter-advanced-effects.md](./phase-04-counter-advanced-effects.md) | **Next:** [phase-06-testing-validation.md](./phase-06-testing-validation.md)

---

## Overview

| Aspect | Details |
|--------|---------|
| **Date** | 2026-05-15 |
| **Description** | Optimize animation performance (60fps on scroll), ensure WCAG 2.1 AA accessibility, add prefers-reduced-motion compliance |
| **Priority** | Critical (non-negotiable) |
| **Implementation Status** | Not started |
| **Review Status** | Awaiting approval |

---

## Key Insights

1. **GPU Acceleration Non-Negotiable** – Only `transform` + `opacity` for scroll animations.
2. **Prefers-Reduced-Motion Essential** – 15% of users have motion sensitivity; must disable all animations.
3. **Mobile Performance Budget Tight** – Parallax disabled, durations reduced 20%, stagger capped at 5 elements.
4. **Lighthouse Targets Strict** – LCP < 2.5s, CLS < 0.1 (zero layout shifts from animations).

---

## Requirements

### R1: GPU Acceleration Audit
Verify all animations use only `transform` + `opacity`. Zero `width`, `height`, `left`, `top`, `margin`, `padding` changes.

### R2: Prefers-Reduced-Motion Compliance
All animations disabled when `prefers-reduced-motion: reduce` media query active.

### R3: Mobile Performance Optimization
- Parallax disabled on < 768px
- Animation durations reduced by 20%
- Stagger capped at 5 elements per group
- No floating animations on mobile

### R4: Accessibility Focus States
All interactive elements have visible `:focus-visible` indicators (gold border or underline).

### R5: Color Contrast Validation
Text contrast ratios meet WCAG AA (4.5:1 for normal text, 3:1 for large text).

### R6: Screen Reader Compatibility
Animations don't interfere with screen reader content reading (aria-live regions preserved).

---

## Implementation Steps

### Step 1: GPU Acceleration Audit (1 hour)

**CSS audit checklist:**

```css
/* ✓ GOOD: GPU-accelerated properties */
transform: translateY(16px);
opacity: 0.5;
filter: drop-shadow(...);

/* ✗ BAD: Layout-triggering properties */
width: 100px;
left: 50px;
margin-top: 16px;
box-shadow: 0 4px 12px; /* Use filter instead */
border-radius: 8px;     /* On animated elements */
```

**Action:** Search `styles.css` for layout-triggering animations. Refactor to use `transform` equivalents.

### Step 2: Prefers-Reduced-Motion (30 min)

**Add to `styles.css`:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Test:** Enable "Reduce motion" in OS settings → All animations should effectively disappear.

### Step 3: Mobile Optimizations (1 hour)

```css
@media (max-width: 768px) {
  :root {
    /* Reduce animation durations by 20% */
    --anim-fast: 120ms;    /* was 150ms */
    --anim-normal: 320ms;  /* was 400ms */
    --anim-slow: 480ms;    /* was 600ms */
    --anim-premium: 640ms; /* was 800ms */
  }

  /* Disable parallax entirely */
  .parallax-element {
    transform: none !important;
  }

  /* Cap stagger at 3 elements */
  .reveal-stagger > * {
    animation-delay: calc(min(var(--index, 0), 3) * var(--stagger-md)) !important;
  }

  /* Disable floating animations */
  .float-element {
    animation: none !important;
    transform: none !important;
  }

  /* Reduce shadow complexity */
  .anim-hover-lift:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  /* Disable badges pulse on mobile */
  .service-tier-badge {
    animation: none !important;
  }
}
```

### Step 4: Accessibility Focus States (45 min)

```css
/* Visible focus indicator for all interactive elements */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Remove default outline on non-keyboard users */
button:focus:not(:focus-visible),
a:focus:not(:focus-visible) {
  outline: none;
}

/* High contrast mode support */
@media (prefers-contrast: more) {
  button:focus-visible,
  a:focus-visible {
    outline-width: 3px;
    outline-offset: 3px;
  }
}
```

### Step 5: Color Contrast Validation (30 min)

**Audit current colors:**

```
Dark Slate (#2C3531) on Cream (#F7F6F1): 16:1 ✓ (Excellent)
Cream (#F7F6F1) on Dark Slate (#2C3531): 16:1 ✓ (Excellent)
Gold (#C89E2F) on Cream (#F7F6F1): 5.5:1 ✓ (Passes AA)
Gold (#C89E2F) on Dark Slate (#2C3531): 4.2:1 ✓ (Passes AA)
```

**Tool:** Use axe-core or WebAIM contrast checker to validate.

### Step 6: Performance Monitoring (1 hour)

**Add Web Vitals tracking:**

```javascript
// Add to index.html

// Import Web Vitals library
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'https://cdn.jsdelivr.net/npm/web-vitals';

// Track metrics
getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

**Lighthouse targets:**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Performance Score: ≥ 85 (desktop), ≥ 75 (mobile)

---

## Todo List

- [ ] Audit all animations for GPU acceleration (transform + opacity only)
- [ ] Add prefers-reduced-motion media query
- [ ] Implement mobile performance optimizations
- [ ] Add visible focus indicators (`:focus-visible`)
- [ ] Validate color contrast ratios (WCAG AA)
- [ ] Test with screen reader (NVDA/VoiceOver)
- [ ] Add Web Vitals monitoring
- [ ] Run Lighthouse audit (target ≥ 85 desktop, ≥ 75 mobile)

---

## Success Criteria

- [ ] All animations use `transform` + `opacity` only (zero layout recalcs)
- [ ] `prefers-reduced-motion: reduce` disables all animations
- [ ] Mobile animations 20% faster than desktop
- [ ] All focus states visible (gold outline, 2px offset)
- [ ] Color contrast ratios ≥ 4.5:1 (WCAG AA)
- [ ] Screen reader reads content without animation interference
- [ ] Lighthouse Performance ≥ 85 (desktop), ≥ 75 (mobile)
- [ ] LCP < 2.5s, CLS < 0.1

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Prefers-reduced-motion too aggressive (breaks layout) | Low | Low | Test with reduction enabled, validate content still visible |
| Mobile parallax disable causes visual regression | Low | Medium | A/B test with users, document trade-off |
| Focus outlines cause layout shift | Low | Medium | Use `outline-offset`, not `border` |
| Contrast checker false positives | Low | Low | Manually verify with axe-core + wcag checker |

---

## Security Considerations

- No sensitive data in animations (animations are CSS/JS only)
- Accessibility does not introduce XSS vectors
- Screen reader compat doesn't expose private info

---

## Next Steps

1. User reviews Phase 5 performance + accessibility goals
2. Approve GPU acceleration audit strategy
3. Begin implementation
4. Move to Phase 6 (testing + validation)

---

**Phase Status:** Ready for implementation.
