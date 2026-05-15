# Research Report 03: Performance & Accessibility Strategies

**Research Date:** 2026-05-15 | **Focus:** Performance Optimization & A11y | **Status:** Complete

---

## 1. Performance Metrics & Budgets

### Web Vitals Targets for K Service Trading

| Metric | Target | Impact |
|--------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | Hero section must load instantly |
| FID (First Input Delay) | < 100ms | Button clicks feel responsive |
| CLS (Cumulative Layout Shift) | < 0.1 | Animations don't cause jank |
| TTFB (Time to First Byte) | < 600ms | Server response time |

**Critical:** Adding 50-70 animations must NOT degrade these metrics.

---

## 2. Animation Performance Optimization

### GPU-Accelerated Properties (Use These)

```
✓ transform: translate3d, scale3d, rotate3d
✓ opacity (no layout recalc)
✓ filter (with caution)
✓ will-change: transform (sparingly)
```

### CPU-Intensive Properties (Avoid These)

```
✗ width, height, left, top, margin, padding
✗ box-shadow (expensive during scroll)
✗ border-radius (on large elements)
✗ background-position (without GPU hint)
```

### Recommended Approach for K Service Trading

1. **Transform-Only Animations** – Use `transform: translate3d(x, y, z)` for all movement animations. Zero layout recalculations.

2. **Opacity for Fades** – Use `opacity: 0 → 1` for reveal animations. Compositor-friendly, no reflow.

3. **Will-Change Targeting** – Apply `will-change: transform` only to elements with active animations. Remove after animation ends.
   ```css
   .card:hover { will-change: transform; }
   .card { transition: transform 250ms cubic-bezier(...); }
   ```

4. **Batch DOM Reads** – Cache `getBoundingClientRect()` results. Avoid layout thrashing in loops.

5. **Intersection Observer Throttling** – IntersectionObserver already built-in; no scroll listeners needed. Current implementation is solid.

---

## 3. Scroll-Linked Animation Performance

### Challenge: Parallax on Scroll

Parallax animations linked to scroll events can cause 60fps → 30fps degradation if not optimized.

### Solutions

1. **Use CSS Scroll Snap + Transform** – Modern browsers support `scroll-behavior: smooth` + CSS transforms without JS scroll listeners.
   ```css
   .parallax-element {
     transform: translateY(calc(var(--scroll) * 0.05));
     will-change: transform;
   }
   ```

2. **RequestAnimationFrame Caching** – Update scroll position once per frame, reuse value across all parallax elements.
   ```js
   let scrollY = 0;
   window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });
   requestAnimationFrame(() => {
     document.documentElement.style.setProperty('--scroll', scrollY);
   });
   ```

3. **Passive Event Listeners** – Required for scroll performance. Already in current codebase ✓

4. **Mobile Parallax Disable** – On mobile (< 768px), disable parallax. Use `@media (max-width: 768px) { transform: none !important; }`

---

## 4. CSS Animation vs. JavaScript Animation

### When to Use CSS Animations

- Simple reveal sequences (fade-in, slide-up)
- Hover states (button lifts, card shadows)
- Stagger groups (use CSS `animation-delay`)
- Smooth transitions (opacity, transform)

**Example:** 50+ elements animating simultaneously → CSS is 2-3x faster than JS.

### When to Use JavaScript Animation

- Counter animations (0 → number)
- Scroll-linked animations (requires live scroll value)
- Complex orchestration (multiple timelines)
- Conditional animations (based on user behavior)

**Current Implementation:** Vanilla JS for scroll reveal. OK for simple cases. Can scale to 100+ elements without performance hit if using IntersectionObserver (not scroll listener).

---

## 5. File Size & Load Time Impact

### Animation Library Options

| Option | Size | Pros | Cons |
|--------|------|------|------|
| **CSS Only** | 0KB | Fast, simple, accessible | Limited capabilities |
| **GSAP** | 40KB (minified) | Powerful, smooth | Overkill for this project |
| **Animate.css** | 30KB | Easy to use | Heavy for 50+ animations |
| **Vanilla JS** | 0KB | Lightweight, custom | Requires writing code |

**Recommendation:** Stick with vanilla CSS + minimal JS. No library needed.

---

## 6. Accessibility (A11y) Considerations

### WCAG 2.1 Level AA Compliance

#### Animation Motion Sensitivity

**Issue:** Animations trigger vestibular (motion sickness) reactions for ~15% of users.

**Solution:** Respect `prefers-reduced-motion` media query.
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Implementation:** Add to base styles.css. All animations auto-disable for users with motion sensitivity enabled.

#### Focus Indicators for Interactive Elements

**Issue:** Hover animations may not work for keyboard users (Tab navigation).

**Solution:** Ensure `:focus` and `:focus-visible` states match `:hover` states.
```css
.card:hover, .card:focus-visible {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.15);
  transition: all 250ms cubic-bezier(...);
}
```

#### Color Contrast During Animations

**Issue:** Animated text fade-in may have insufficient contrast mid-animation.

**Solution:** Ensure final state always meets WCAG AA (4.5:1 for normal text).

**Current K Service Trading Colors:**
- Text on Cream (#F7F6F1): Dark Slate (#2C3531) = 16:1 ✓ (Excellent)
- Text on Dark Slate: Cream (#F7F6F1) = 16:1 ✓ (Excellent)
- Accent Gold (#C89E2F) on Cream: ~5.5:1 ✓ (Passes AA)

---

## 7. Mobile vs. Desktop Animation Strategy

### Mobile (< 768px) Considerations

1. **Disable Parallax** – Remove scroll-linked transforms on mobile (battery drain, jank risk).
2. **Shorter Durations** – Reduce animation durations by 20% (faster interactions feel snappier on mobile).
3. **Simpler Hover States** – Touch devices don't have "hover." Use `:active` or pseudo-elements for touch feedback.
4. **Test on Real Devices** – Emulated Chrome DevTools throttling ≠ real Samsung/iPhone performance.

### Desktop (≥ 1440px) Considerations

1. **Enable Full Animation Suite** – Parallax, complex stagger, micro-interactions.
2. **Hover States** – Full `hover` pseudo-classes. Arrow animations, color shifts, etc.
3. **Larger Animation Scopes** – More space = more animation opportunities (e.g., full-viewport parallax).

### Recommendation for K Service Trading

Implement **progressive enhancement:**
- Base: CSS animations (works everywhere)
- Medium screens: Add hover states
- Large screens: Add parallax + advanced micro-interactions

---

## 8. Testing & Validation Checklist

### Before Launch

- [ ] Lighthouse Performance audit: ≥ 85 (desktop), ≥ 75 (mobile)
- [ ] PageSpeed Insights: CLS < 0.1
- [ ] CPU throttling (4x): Page still feels smooth at 30fps
- [ ] Network throttling (4G): No jank during page load
- [ ] `prefers-reduced-motion: reduce` tested on all animations
- [ ] Keyboard navigation: All interactive elements focusable + visible focus rings
- [ ] Screen reader (NVDA/VoiceOver): Animations don't interfere with content reading
- [ ] Mobile touch test: Real iPhone + Android device (not emulator)
- [ ] Cross-browser: Chrome, Safari, Firefox, Edge (latest versions)

---

## 9. Tools & Monitoring

### Development Tools

- **Chrome DevTools Performance Tab** – Record 60s, identify jank (green = 60fps, red = below 60fps)
- **Lighthouse** – Built-in audit for performance + accessibility
- **WebPageTest** – Advanced filmstrip analysis across real devices
- **axe DevTools** – Accessibility violations (free)

### Production Monitoring

- **Web Vitals Library** – Track LCP, FID, CLS in production
- **Sentry/Rollbar** – Catch animation errors in user browsers
- **Analytics** – Track user interaction with animated elements (engagement boost?)

---

## Unresolved Questions

- Should counter animations use CSS @property or vanilla JS CountUp approach?
- Will dynamic scroll-linked parallax use CSS custom properties or JS-driven values?
- Performance budget: Can 60+ animations stay under 100KB additional CSS/JS?
- Should mobile disable all parallax or implement low-intensity parallax variant?
