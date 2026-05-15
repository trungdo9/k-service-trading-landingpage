# Phase 02: Scroll-Triggered Animations & Reveals

**Parent Plan:** [plan.md](./plan.md) | **Prev Phase:** [phase-01-motion-design-system.md](./phase-01-motion-design-system.md) | **Next Phase:** [phase-03-hover-microinteractions.md](./phase-03-hover-microinteractions.md)

---

## Overview

| Aspect | Details |
|--------|---------|
| **Date** | 2026-05-15 |
| **Description** | Implement scroll-triggered reveal animations (fade, slide, stagger) across all 7 sections. Extend current `.reveal` pattern with new animation variants. |
| **Priority** | High (primary visible animations) |
| **Implementation Status** | Not started |
| **Review Status** | Awaiting approval |

---

## Context Links

- **Phase 1:** [phase-01-motion-design-system.md](./phase-01-motion-design-system.md) — Motion design system foundation
- **Research:** [researcher-02-section-animation-opportunities.md](./research/researcher-02-section-animation-opportunities.md) — Per-section animation mapping
- **Current Code:** `./../index.html` (inline reveal script), `./../styles.css` (existing `.reveal` class)

---

## Key Insights

1. **Current `.reveal` is Good Baseline** – Already uses IntersectionObserver + `.in` class toggle. Scale by adding new animation variants (fade, slide, scale, stagger).

2. **Stagger Creates Visual Hierarchy** – Sequential reveal of list items, card children, paragraphs creates elegant "waterfall" effect. Use CSS `animation-delay: calc(var(--index) * var(--stagger-md))`.

3. **Scroll Position Matters** – Elements entering viewport from different angles (top, left, right) feel more dynamic. Use `translateY`, `translateX` combinations.

4. **Parallax for Depth** – Subtle background parallax (8% offset) on large hero images creates depth without motion sickness. Use `scroll-linked` CSS custom properties or JS-driven transforms.

5. **Minimize JS, Maximize CSS** – IntersectionObserver adds class; CSS handles animation. Avoids layout thrashing.

---

## Requirements

### R1: Reveal Animation Variants
Extend `.reveal` class with optional modifiers: `.reveal--fade`, `.reveal--slide-up`, `.reveal--scale`, `.reveal--slide-left`, etc.

### R2: Stagger System Implementation
Create CSS patterns for sequential child animation with configurable offset (40ms, 60ms, 80ms).

### R3: Section-Specific Stagger
- Hero/About section: 80ms stagger (slower, premium feel)
- Service/Trading cards: 60ms stagger (medium feel)
- Lists/grids: 40ms stagger (faster cascade)

### R4: Parallax for Hero & Featured Images
Implement scroll-linked parallax on hero background, Deltafarm mosaic, trading card images (8% offset max).

### R5: Number Counter Reveal
Counter metrics ("3", "7", "50+", "20%+") count-up during reveal animation (1.5-2.0s).

### R6: Text Reveal Line-by-Line
Headline + paragraph reveals reveal line-by-line with stagger for editorial elegance.

---

## Architecture

```
Scroll-Triggered Animation Flow:
1. Page loads
2. IntersectionObserver observes all `.reveal` elements (threshold 12%, rootMargin -8%)
3. User scrolls → element enters viewport
4. Observer adds `.in` class to element
5. CSS transition (with var(--rd) delay) animates element into view
6. Optional: JS hooks for advanced effects (counters, parallax)

CSS Structure:
.reveal { opacity: 0; transform: translateY(16px); }
.reveal.in { opacity: 1; transform: translateY(0); transition: ... }

.reveal--fade { opacity: 0; transform: none; }
.reveal--fade.in { opacity: 1; }

.reveal--scale { opacity: 0; transform: scale(0.9); }
.reveal--scale.in { opacity: 1; transform: scale(1); }

[Child Stagger]:
.reveal > * { opacity: 0; transform: translateY(16px); }
.reveal.in > * { opacity: 1; transform: translateY(0); 
                  animation-delay: calc(var(--index) * var(--stagger-md)); }
```

---

## Related Code Files

| File | Purpose | Changes |
|------|---------|---------|
| `styles.css` | Add reveal animation variants + stagger system | +200 lines CSS |
| `index.html` | Existing reveal script; optional: enhance with parallax JS | Minor enhancements |
| `app.jsx` | Optional: add animation preview toggle in tweaks panel | Optional |

---

## Implementation Steps

### Step 1: Extend `.reveal` CSS Classes (1 hour)

Add to `styles.css`:

```css
/* Base reveal (slide-up, already exists) */
.reveal {
  opacity: 0;
  transform: translateY(16px) var(--gpu-hint);
  will-change: opacity, transform;
}

.reveal.in {
  opacity: 1;
  transform: translateY(0) var(--gpu-hint);
  transition: opacity var(--anim-normal) var(--ease-out-cubic),
              transform var(--anim-normal) var(--ease-out-cubic);
  transition-delay: var(--rd, 0ms);
}

/* Variant: fade only */
.reveal--fade {
  opacity: 0;
  transform: none;
}

.reveal--fade.in {
  opacity: 1;
  transition: opacity var(--anim-normal) var(--ease-out-cubic);
  transition-delay: var(--rd, 0ms);
}

/* Variant: scale + fade */
.reveal--scale {
  opacity: 0;
  transform: scale(0.9) var(--gpu-hint);
}

.reveal--scale.in {
  opacity: 1;
  transform: scale(1) var(--gpu-hint);
  transition: opacity var(--anim-normal) var(--ease-out-cubic),
              transform var(--anim-normal) var(--ease-out-cubic);
  transition-delay: var(--rd, 0ms);
}

/* Variant: slide from left */
.reveal--slide-left {
  opacity: 0;
  transform: translateX(-24px) var(--gpu-hint);
}

.reveal--slide-left.in {
  opacity: 1;
  transform: translateX(0) var(--gpu-hint);
  transition: opacity var(--anim-normal) var(--ease-out-cubic),
              transform var(--anim-normal) var(--ease-out-cubic);
  transition-delay: var(--rd, 0ms);
}

/* Variant: slide from right */
.reveal--slide-right {
  opacity: 0;
  transform: translateX(24px) var(--gpu-hint);
}

.reveal--slide-right.in {
  opacity: 1;
  transform: translateX(0) var(--gpu-hint);
  transition: opacity var(--anim-normal) var(--ease-out-cubic),
              transform var(--anim-normal) var(--ease-out-cubic);
  transition-delay: var(--rd, 0ms);
}
```

### Step 2: Implement Stagger System (1 hour)

Add to `styles.css`:

```css
/* Stagger child animations */
.reveal-stagger > * {
  opacity: 0;
  transform: translateY(16px) var(--gpu-hint);
  will-change: opacity, transform;
}

.reveal-stagger.in > * {
  opacity: 1;
  transform: translateY(0) var(--gpu-hint);
  transition: opacity var(--anim-normal) var(--ease-out-cubic),
              transform var(--anim-normal) var(--ease-out-cubic);
  animation-delay: calc(var(--index, 0) * var(--stagger-md));
}

/* Tighter stagger (40ms) for fast cascades */
.reveal-stagger--tight > * {
  /* same as above, but: */
  animation-delay: calc(var(--index, 0) * var(--stagger-sm));
}

/* Loose stagger (80ms) for premium sections */
.reveal-stagger--loose > * {
  /* same as above, but: */
  animation-delay: calc(var(--index, 0) * var(--stagger-lg));
}
```

### Step 3: Enhance HTML with Stagger Index (1.5 hours)

Update HTML elements to include `--index` CSS variable:

```html
<!-- Example: About section metrics -->
<div class="metrics-row reveal-stagger reveal-stagger--loose">
  <div class="metric" style="--index: 0;"><span class="m-val">3</span>...</div>
  <div class="metric" style="--index: 1;"><span class="m-val">7</span>...</div>
  <div class="metric" style="--index: 2;"><span class="m-val">50+</span>...</div>
  <div class="metric" style="--index: 3;"><span class="m-val">20%+</span>...</div>
</div>

<!-- Example: Service cards with stagger -->
<div class="service-grid reveal-stagger reveal-stagger--tight">
  <article class="service-card" style="--index: 0;">...</article>
  <article class="service-card" style="--index: 1;">...</article>
  <article class="service-card" style="--index: 2;">...</article>
  <article class="service-card" style="--index: 3;">...</article>
</div>
```

### Step 4: Parallax Implementation (2 hours)

Add scroll-linked parallax for hero + featured images:

```javascript
// Add to index.html inline script (after reveal-on-scroll section)

let scrollY = 0;
window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
}, { passive: true });

requestAnimationFrame(function updateParallax() {
  document.documentElement.style.setProperty('--scroll', scrollY + 'px');
  requestAnimationFrame(updateParallax);
});
```

Add CSS for parallax elements:

```css
.parallax-element {
  transform: translateY(calc(var(--scroll, 0px) * 0.05)) var(--gpu-hint);
  will-change: transform;
}

/* Disable parallax on mobile */
@media (max-width: 768px) {
  .parallax-element {
    transform: none !important;
  }
}
```

Apply to HTML:

```html
<!-- Hero background image -->
<div class="hero-panel-right parallax-element" aria-hidden="true">
  <!-- background image element -->
</div>

<!-- Deltafarm mosaic images -->
<div class="df-mosaic-large parallax-element reveal">
  <img src="..." alt="..." />
</div>
```

### Step 5: Counter Animation (1.5 hours)

Implement number counter using CSS @property (modern approach):

```css
@property --counter {
  syntax: '<number>';
  initial-value: 0;
  inherits: false;
}

.counter {
  --counter: 0;
  font-variant-numeric: tabular-nums;
}

.counter.in {
  animation: countUp 1.8s var(--ease-out-cubic) forwards;
}

@keyframes countUp {
  from { --counter: 0; }
  to { --counter: var(--target); }
}

.counter::after {
  content: counter(--counter);
}
```

Or vanilla JS approach (simpler, wider support):

```javascript
// Add to index.html after reveal script
document.querySelectorAll('[data-count]').forEach(el => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !el.dataset.animated) {
        el.dataset.animated = 'true';
        const target = parseInt(el.dataset.count);
        const duration = 1800; // ms
        const start = Date.now();
        const animate = () => {
          const progress = Math.min((Date.now() - start) / duration, 1);
          el.textContent = Math.floor(target * progress);
          if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
      }
    });
  }, { threshold: 0.1 });
  observer.observe(el);
});
```

### Step 6: Testing & Validation (1 hour)

- [ ] All reveal animations trigger on scroll
- [ ] Stagger creates smooth cascade effect
- [ ] Parallax works on desktop; disabled on mobile
- [ ] Counter animations display correct final values
- [ ] No CLS jank (< 0.1 required)
- [ ] 60fps maintained during scroll animations

---

## Todo List

- [ ] Add 5 reveal animation variants to CSS
- [ ] Implement stagger system (tight, normal, loose)
- [ ] Update HTML with `--index` CSS variables
- [ ] Add scroll-linked parallax JS + CSS
- [ ] Implement number counter animations
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Validate performance (60fps, no CLS)
- [ ] Update design guidelines documentation

---

## Success Criteria

- [ ] All `.reveal` elements fade-in on scroll (baseline works)
- [ ] Stagger creates visual waterfall (40-80ms offsets)
- [ ] Parallax creates subtle depth (8% offset max, disabled on mobile)
- [ ] Counters animate smoothly (1.5-2.0s duration, ease-out-cubic)
- [ ] No CLS regression (< 0.1)
- [ ] Lighthouse Performance ≥ 85 (desktop), ≥ 75 (mobile)
- [ ] Mobile animations 20% faster than desktop

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Parallax JS causes scroll jank | Medium | High | Implement with requestAnimationFrame, test on throttled CPU |
| Counter JS runs too many times | Low | Medium | Use observer pattern, animate only once per element |
| Stagger delays accumulate (300ms+) | Low | Low | Cap stagger at 5-6 elements per group |
| Mobile parallax drains battery | Medium | Medium | Disable parallax entirely on mobile via media query |

---

## Security Considerations

- Scroll event uses `{ passive: true }` (prevents default scroll blocking)
- Counter animations read from `data-count` attribute (no XSS risk)
- No external libraries; all vanilla JS

---

## Next Steps

1. User reviews Phase 2 architecture
2. Approve reveal variants + stagger system design
3. Begin implementation of CSS classes
4. Move to Phase 3 (hover effects) upon completion

---

**Phase Status:** Ready for implementation upon approval.
