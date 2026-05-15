# Phase 03: Hover Effects & Micro-Interactions

**Parent Plan:** [plan.md](./plan.md) | **Prev Phase:** [phase-02-scroll-animations.md](./phase-02-scroll-animations.md) | **Next Phase:** [phase-04-counter-advanced-effects.md](./phase-04-counter-advanced-effects.md)

---

## Overview

| Aspect | Details |
|--------|---------|
| **Date** | 2026-05-15 |
| **Description** | Implement hover effects, focus states, button animations, link underlines for all interactive elements across 7 sections |
| **Priority** | High (user engagement) |
| **Implementation Status** | Not started |
| **Review Status** | Awaiting approval |

---

## Context Links

- **Phase 1:** [phase-01-motion-design-system.md](./phase-01-motion-design-system.md) — Easing functions
- **Phase 2:** [phase-02-scroll-animations.md](./phase-02-scroll-animations.md) — Scroll reveals
- **Research:** [researcher-02-section-animation-opportunities.md](./research/researcher-02-section-animation-opportunities.md) — Hover opportunities per section

---

## Key Insights

1. **Hover = Engagement** – Card lifts (4-8px), shadow expansion, color shifts signal interactivity.
2. **Premium Slowness** – 200-250ms durations feel more luxurious than instant responses.
3. **Focus States Critical** – Keyboard users (Tab navigation) need visible focus rings; use `:focus-visible`.
4. **No Jarring Changes** – Use transitions on all hover state changes; avoid instant color shifts.

---

## Requirements

### R1: Card Hover Effects
All `.service-card`, `.eco-card`, `.tcard` elements lift on hover with shadow expansion (4-8px translateY, 200-250ms).

### R2: Button Hover States
All `.btn` elements have color shift + arrow animation on hover (200ms cubic-bezier).

### R3: Link Underline Animation
All text links grow animated underline on hover (width 0 → 100%, 300ms ease-out).

### R4: Icon Animations
SVG icons rotate or scale on card hover (200-300ms ease-in-out).

### R5: Focus State Visibility
All interactive elements show gold border + glow on `:focus-visible` (accessibility).

### R6: Form Field Animations
Input fields show gold underline + shadow glow on focus (200ms ease-out).

---

## Implementation Steps

### Step 1: Card Hover Lift (45 min)

```css
/* Service cards */
.service-card {
  transition: transform 250ms var(--ease-in-out),
              box-shadow 250ms var(--ease-in-out);
}

.service-card:hover,
.service-card:focus-visible {
  transform: translateY(-8px) var(--gpu-hint);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

/* Eco cards */
.eco-card {
  transition: transform 250ms var(--ease-in-out),
              box-shadow 250ms var(--ease-in-out);
}

.eco-card:hover,
.eco-card:focus-visible {
  transform: translateY(-6px) var(--gpu-hint);
  box-shadow: 0 12px 28px rgba(200, 158, 47, 0.08);
}

/* Trading cards */
.tcard {
  transition: transform 250ms var(--ease-in-out),
              box-shadow 250ms var(--ease-in-out);
}

.tcard:hover,
.tcard:focus-visible {
  transform: translateY(-8px) var(--gpu-hint);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}
```

### Step 2: Button Hover States (30 min)

```css
.btn {
  transition: background-color 200ms var(--ease-in-out),
              color 200ms var(--ease-in-out),
              box-shadow 200ms var(--ease-in-out);
  position: relative;
}

.btn:hover,
.btn:focus-visible {
  background-color: var(--gold);
  box-shadow: 0 6px 16px rgba(200, 158, 47, 0.3);
}

.btn .arr {
  display: inline-block;
  transition: transform 200ms var(--ease-in-out);
}

.btn:hover .arr,
.btn:focus-visible .arr {
  transform: translateX(4px);
}
```

### Step 3: Link Underline Animation (45 min)

```css
.nav-link,
.btn-outline-dark,
a:not(.emblem) {
  position: relative;
  transition: color 200ms var(--ease-in-out);
}

a:not(.emblem)::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gold);
  transition: width 300ms var(--ease-out-cubic);
}

a:not(.emblem):hover::after,
a:not(.emblem):focus-visible::after {
  width: 100%;
}
```

### Step 4: Icon Animations (30 min)

```css
.service-card .ico,
.eco-card .corner {
  transition: transform 300ms var(--ease-in-out);
}

.service-card:hover .ico,
.service-card:focus-visible .ico {
  transform: rotate(5deg) scale(1.08);
}

.eco-card:hover .corner,
.eco-card:focus-visible .corner {
  transform: scale(1.1) rotate(2deg);
}
```

### Step 5: Form Field Focus (45 min)

```css
input, textarea, select {
  transition: border-color 200ms var(--ease-in-out),
              box-shadow 200ms var(--ease-in-out);
  border-bottom: 2px solid var(--rule);
}

input:focus,
textarea:focus,
select:focus {
  border-bottom-color: var(--gold);
  box-shadow: 0 2px 8px rgba(200, 158, 47, 0.12);
  outline: none;
}

label:has(> input:focus),
label:has(> textarea:focus) {
  color: var(--gold);
}
```

### Step 6: Testing & Validation (30 min)

- [ ] All card hovers lift smoothly (no jank)
- [ ] Button hovers show color shift + arrow animation
- [ ] Link underlines grow on hover
- [ ] Focus states visible for all interactive elements
- [ ] Mobile: `:active` state matches `:hover` behavior
- [ ] Keyboard navigation works without missing states
- [ ] Screen reader announces focus changes

---

## Todo List

- [ ] Card hover lift (service, eco, trading)
- [ ] Button hover effects
- [ ] Link underline animation
- [ ] Icon animations on card hover
- [ ] Form field focus states
- [ ] Focus ring visibility (`:focus-visible`)
- [ ] Mobile touch states
- [ ] Keyboard accessibility testing

---

## Success Criteria

- [ ] All interactive elements have smooth hover transitions (200-300ms)
- [ ] Focus states visible for keyboard users (gold border or underline)
- [ ] No CLS from hover effects (use transform only)
- [ ] Mobile `:active` states feel responsive (no 300ms tap delay)
- [ ] Screen reader announces focus changes correctly

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Hover effects not working on touch devices | Medium | Medium | Use `:active` pseudo-class for touch, test on real devices |
| Focus rings too subtle (accessibility failure) | Low | High | Use gold color (#C89E2F) + visible border, test with axe-core |
| Box-shadow expansion causes CLS | Low | Medium | Use `:focus-visible` instead of `:focus` to avoid outline jank |

---

## Next Steps

1. User reviews Phase 3 design
2. Approve hover lift heights + transition durations
3. Begin implementation
4. Move to Phase 4 (counters + advanced effects)

---

**Phase Status:** Ready for implementation.
