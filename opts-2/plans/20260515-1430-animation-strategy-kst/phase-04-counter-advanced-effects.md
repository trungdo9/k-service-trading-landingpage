# Phase 04: Counter Animations & Advanced Effects

**Parent Plan:** [plan.md](./plan.md) | **Prev:** [phase-03-hover-microinteractions.md](./phase-03-hover-microinteractions.md) | **Next:** [phase-05-performance-accessibility.md](./phase-05-performance-accessibility.md)

---

## Overview

| Aspect | Details |
|--------|---------|
| **Date** | 2026-05-15 |
| **Description** | Implement number counter animations, SVG path reveals, floating elements, glows for premium visual effects |
| **Priority** | Medium (polish & engagement) |
| **Implementation Status** | Not started |
| **Review Status** | Awaiting approval |

---

## Key Insights

1. **Counter Animations Drive Engagement** – Metrics ("3", "7", "50+", "20%+") feel more impactful when animated.
2. **SVG Path Reveals Add Sophistication** – Leaf patterns, botanical motifs align with eco-luxury aesthetic.
3. **Floating Elements Require Lightness** – 3-6 second cycles feel natural; excessive movement feels cheap.
4. **Glow Effects Must Be Subtle** – Gold glow (#C89E2F) at 12-15% opacity avoids oversaturation.

---

## Requirements

### R1: Number Counter Animations
Metrics ("3", "7", "50+", "20%+") count from 0 to target (1.5-2.0s, ease-out-cubic).

### R2: SVG Path Animations
Logo emblem, decorative dividers animate stroke-dasharray on scroll-reveal (1.5-2.5s, ease-out).

### R3: Floating Element Animations
Accent elements (images, badges) float gently (3-6s cycles, sine easing).

### R4: Glow & Blur Effects
Gold (#C89E2F) glow filters on hover/reveal (subtle drop-shadow + filter blur).

### R5: Badge Pulse Animations
Enterprise/Premium badges scale + fade (0.8s cycle, ease-in-out).

---

## Implementation Steps

### Step 1: Counter Animation (1 hour)

**Vanilla JS approach (widest support):**

```javascript
// Add to index.html after reveal script

function initCounters() {
  document.querySelectorAll('[data-count-to]').forEach(el => {
    const target = parseInt(el.dataset.countTo);
    const duration = 1800; // ms
    const startTime = null;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !el.dataset.animated) {
          el.dataset.animated = 'true';
          const start = performance.now();
          
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing: ease-out-cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(target * eased);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initCounters);
```

**HTML usage:**

```html
<span class="m-val" data-count-to="3">3</span>
<span class="m-val" data-count-to="7">7</span>
<span class="m-val" data-count-to="50">50+</span>
```

### Step 2: SVG Path Reveals (1.5 hours)

```css
svg path, svg circle {
  stroke-dasharray: var(--dash);
  stroke-dashoffset: var(--dash);
  transition: stroke-dashoffset var(--anim-slow) var(--ease-out-cubic);
}

.reveal svg path,
.reveal svg circle {
  --dash: 100; /* Adjust per SVG */
}

.reveal.in svg path,
.reveal.in svg circle {
  stroke-dashoffset: 0;
  transition-delay: var(--rd, 0ms);
}
```

**Calculate SVG dash values:**

```javascript
document.querySelectorAll('svg path, svg circle').forEach(el => {
  const length = el.getTotalLength?.() || el.getAttribute('r') * 2 * Math.PI;
  el.style.setProperty('--dash', length);
});
```

### Step 3: Floating Element Animation (30 min)

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0) var(--gpu-hint);
  }
  50% {
    transform: translateY(-12px) var(--gpu-hint);
  }
}

.float-element {
  animation: float 4s var(--ease-sine-in-out) infinite;
}

.float-element--slow {
  animation-duration: 6s;
}

.float-element--fast {
  animation-duration: 3s;
}
```

**HTML usage:**

```html
<img class="float-element float-element--slow" src="..." alt="..." />
```

### Step 4: Glow & Blur Effects (45 min)

```css
/* Gold glow on hover */
.service-card:hover {
  filter: drop-shadow(0 0 16px rgba(200, 158, 47, 0.15));
}

/* Subtle blur background image */
.parallax-element {
  filter: blur(0px);
  transition: filter 300ms var(--ease-in-out);
}

.parallax-element:hover {
  filter: blur(0px); /* No blur on hover for trading images */
}

/* Glow on reveal */
.reveal--glow.in {
  filter: drop-shadow(0 0 12px rgba(200, 158, 47, 0.12));
}
```

### Step 5: Badge Pulse (30 min)

```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.9;
  }
}

.service-tier-badge {
  animation: pulse 2s var(--ease-in-out) infinite;
}

/* Disable pulse on hover (show static) */
.service-card:hover .service-tier-badge {
  animation: none;
  transform: scale(1.08);
}
```

### Step 6: Testing & Validation (30 min)

- [ ] Counters animate to correct final values
- [ ] SVG paths draw smoothly (no jank)
- [ ] Floating animations feel natural (not nauseating)
- [ ] Glow effects subtle + visible
- [ ] Badge pulse visible but not distracting
- [ ] No performance degradation (60fps maintained)

---

## Todo List

- [ ] Implement counter animation JS
- [ ] Add SVG path animation CSS
- [ ] Create floating element animations
- [ ] Add glow/blur filter effects
- [ ] Implement badge pulse animation
- [ ] Test on all devices + browsers
- [ ] Validate 60fps performance

---

## Success Criteria

- [ ] Counters animate smoothly (1.5-2.0s, ease-out-cubic)
- [ ] SVG paths draw in sequence (1.5-2.5s per path)
- [ ] Floating elements never trigger motion sickness
- [ ] Glow effects enhance without overwhelming
- [ ] All animations maintain 60fps on desktop

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Counter JS performance on mobile | Medium | Medium | Throttle to 30fps on mobile, test on real device |
| SVG dash calculation varies per browser | Low | Low | Use hardcoded `--dash` values instead of JS |
| Floating animation triggers motion sickness | Low | Medium | Keep animation amplitude < 12px, duration > 3s |
| Glow filter expensive on scroll | Medium | Medium | Apply glow on hover only, not on scroll reveal |

---

## Next Steps

1. User reviews Phase 4 design
2. Approve counter implementation (JS vs CSS @property)
3. Begin implementation
4. Move to Phase 5 (performance + accessibility)

---

**Phase Status:** Ready for implementation.
