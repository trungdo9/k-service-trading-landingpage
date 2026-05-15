# Phase 06: Testing & Validation Plan

**Parent Plan:** [plan.md](./plan.md) | **Prev:** [phase-05-performance-accessibility.md](./phase-05-performance-accessibility.md)

---

## Overview

| Aspect | Details |
|--------|---------|
| **Date** | 2026-05-15 |
| **Description** | Comprehensive testing strategy across browsers, devices, performance metrics, accessibility compliance |
| **Priority** | Critical (launch readiness) |
| **Implementation Status** | Not started |
| **Review Status** | Awaiting approval |

---

## Testing Strategy

### Test Categories

1. **Visual Testing** – Animations render correctly across browsers
2. **Performance Testing** – 60fps maintained, CLS < 0.1, LCP < 2.5s
3. **Accessibility Testing** – WCAG 2.1 AA compliance, screen reader compat
4. **Device Testing** – Mobile, tablet, desktop devices
5. **Browser Testing** – Chrome, Firefox, Safari, Edge (latest versions)

---

## Test Plan Matrix

### Visual Tests

| Test | Acceptance Criteria | Tools |
|------|-------------------|-------|
| Reveal animations trigger on scroll | All `.reveal` fade-in within 400ms | Chrome DevTools, visual inspection |
| Stagger creates smooth cascade | 5+ elements stagger with 60-80ms offsets | Visual inspection |
| Hover effects smooth (no jank) | Card lifts 6-8px, shadow expands, 250ms duration | Chrome DevTools Performance tab |
| Parallax depth effect | Background moves 8% on desktop, disabled on mobile | Visual inspection on 3+ screen sizes |
| Counter animations complete | Counters reach final values (3, 7, 50+, 20%+) | Visual inspection |
| SVG paths draw smoothly | Logo + dividers animate stroke-dasharray (1.5-2.5s) | Visual inspection |
| Floating elements feel natural | Images float with 3-6s cycle, amplitude < 12px | Motion sensitivity check |

### Performance Tests

| Metric | Target | How to Test | Pass/Fail |
|--------|--------|-------------|-----------|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse audit | [ ] |
| FID (First Input Delay) | < 100ms | Chrome DevTools Performance | [ ] |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse audit | [ ] |
| Frame Rate (Scroll) | ≥ 60fps | Chrome DevTools fps meter | [ ] |
| Frame Rate (Mobile) | ≥ 30fps | Mobile DevTools | [ ] |
| CPU Throttling (4x) | Feels smooth | Chrome DevTools throttle | [ ] |
| Network Throttling (4G) | < 5s initial load | Chrome DevTools throttle | [ ] |

### Accessibility Tests

| Test | Acceptance Criteria | Tools |
|------|-------------------|-------|
| WCAG 2.1 AA Compliance | Zero critical violations | axe-core, WAVE |
| prefers-reduced-motion | All animations disabled | OS settings + visual check |
| Color Contrast | ≥ 4.5:1 normal text, ≥ 3:1 large text | WebAIM contrast checker |
| Focus Visibility | All interactive elements focusable + visible | Keyboard navigation (Tab) |
| Screen Reader | Content readable, focus announced | NVDA (Windows), VoiceOver (Mac) |
| Keyboard Navigation | All features accessible without mouse | Keyboard-only test |

### Device Tests

| Device | Screen | Orientation | Browser | Status |
|--------|--------|-------------|---------|--------|
| Desktop (1440px) | 27" monitor | N/A | Chrome, Firefox, Safari, Edge | [ ] |
| Laptop (1280px) | 13" MacBook | N/A | Safari, Chrome | [ ] |
| iPad (768px) | 10.9" | Portrait + Landscape | Safari, Chrome | [ ] |
| iPhone 14 (390px) | 6.1" | Portrait + Landscape | Safari, Chrome | [ ] |
| Android (412px) | 6.7" | Portrait + Landscape | Chrome, Firefox | [ ] |
| Tablet (1024px) | 12.9" | Portrait + Landscape | Safari, Chrome | [ ] |

---

## Testing Procedures

### Visual Testing Checklist

```
Hero Section:
[ ] Title fades in on load
[ ] Stats counter animates (0 → 3, 7, 50+, 20%+)
[ ] CTA button has hover lift + arrow animation
[ ] Nav transitions from transparent to frosted glass

About Section:
[ ] Headline reveals with slide-up
[ ] Paragraphs stagger-reveal (80ms offsets)
[ ] Business-line table rows cascade (80ms offsets)
[ ] Metrics grid items animate on reveal

Service Cards:
[ ] Cards fade-in with stagger (0ms, 60ms, 120ms, 180ms)
[ ] On hover: lift 8px + shadow expands
[ ] Icons rotate 5° on card hover
[ ] "Read More" links show animated underline on hover

Trading Cards:
[ ] Cards reveal with stagger
[ ] Background images have parallax on desktop (8% offset)
[ ] Parallax disabled on mobile
[ ] Metric counters animate on reveal
[ ] Card hover shows image zoom (1.0 → 1.05)

Deltafarm Section:
[ ] Banner headline reveals with stagger
[ ] Mosaic images parallax on desktop
[ ] Stats rail items cascade-reveal
[ ] Corner labels fade-in

Ecotourism Cards:
[ ] Cards fade-in with stagger
[ ] On hover: lift 6px + shadow glow
[ ] List items stagger-reveal on card hover

Contact Form:
[ ] Input fields show gold underline on focus
[ ] Submit button has hover state + arrow animation
[ ] Form validation visual feedback

Footer:
[ ] Links show animated underline on hover
[ ] Emblem rotates 180° on hover
```

### Performance Testing Checklist

```
Desktop (Chrome DevTools):
[ ] Lighthouse audit: Performance ≥ 85
[ ] LCP < 2.5s (large image or text)
[ ] FID < 100ms (first interaction)
[ ] CLS < 0.1 (no unexpected layout shifts)
[ ] FCP (First Contentful Paint) < 1.8s
[ ] TTFB (Time to First Byte) < 600ms

Mobile Simulation (Chrome DevTools):
[ ] Lighthouse audit: Performance ≥ 75
[ ] LCP < 2.5s
[ ] FID < 100ms
[ ] CLS < 0.1

CPU Throttling (4x):
[ ] Page still feels smooth at 30fps
[ ] No visible jank during scroll animations
[ ] Hover animations still respond within 200ms

Network Throttling (4G):
[ ] Page loads within 5 seconds
[ ] Hero section visible within 2.5s
[ ] Animations start smoothly (no stutter)
[ ] Parallax doesn't cause delays

Frame Rate Monitoring:
[ ] Scroll animations maintain 60fps on desktop
[ ] Scroll animations maintain 30fps on mobile
[ ] No sustained frame drops below 30fps

Animation Performance:
[ ] 50+ animations running simultaneously = no jank
[ ] Hover effects don't cause layout recalc
[ ] Counters don't block main thread
[ ] SVG path animations smooth (60fps)
```

### Accessibility Testing Checklist

```
WCAG 2.1 AA Audit:
[ ] No critical violations in axe-core scan
[ ] No errors in WAVE accessibility audit
[ ] All images have alt text
[ ] All form inputs have labels
[ ] Color not only indicator of state

Focus & Keyboard Navigation:
[ ] All buttons focusable with Tab key
[ ] Focus order logical (left-to-right, top-to-bottom)
[ ] Focus ring visible (gold outline, 2px offset)
[ ] Escape key closes mobile menu
[ ] Enter/Space activates buttons

Color Contrast:
[ ] Dark Slate on Cream: 16:1 ✓
[ ] Cream on Dark Slate: 16:1 ✓
[ ] Gold on Cream: ≥ 4.5:1 ✓
[ ] Gold on Dark Slate: ≥ 4.5:1 ✓
[ ] All text ≥ 4.5:1 contrast (normal) or ≥ 3:1 (large)

prefers-reduced-motion:
[ ] All animations disabled (effectively instant)
[ ] Content still visible and readable
[ ] Parallax disabled
[ ] Hover effects still work
[ ] No layout shift from animation removal

Screen Reader Testing (NVDA/VoiceOver):
[ ] Page structure announced correctly
[ ] Headings in logical order (H1 → H2 → H3)
[ ] Links announced with context ("Read More → Service details")
[ ] Form fields labeled correctly
[ ] Focus changes announced
[ ] Animations don't interfere with reading

Mobile Touch Accessibility:
[ ] Touch targets ≥ 44x44px (all buttons, links)
[ ] No :hover-only content (use :active + :focus)
[ ] Double-tap zoom works
[ ] No tap delay on buttons
```

### Device Testing Checklist

```
Desktop (1440px+):
[ ] Full animation suite visible + smooth
[ ] Parallax enabled + works smoothly
[ ] Hover effects work on all interactive elements
[ ] Performance metrics pass (LCP < 2.5s, CLS < 0.1)
[ ] Lighthouse audit ≥ 85

Tablet (768-1024px):
[ ] Parallax still enabled (medium intensity)
[ ] Cards responsive, animations smooth
[ ] Hover states work (touch + mouse)
[ ] Text readable without zoom
[ ] Lighthouse audit ≥ 75

Mobile (< 768px):
[ ] Parallax disabled (no layout shift)
[ ] Animation durations reduced 20%
[ ] Stagger capped at 3 elements
[ ] Touch targets ≥ 44x44px
[ ] No horizontal scroll
[ ] Lighthouse audit ≥ 75
[ ] Performance smooth (30fps target)
```

---

## Automation Tools

| Tool | Purpose | Command |
|------|---------|---------|
| Lighthouse | Performance + accessibility audit | `npx lighthouse https://localhost:8000 --view` |
| axe-core | A11y violations | `npm install -D @axe-core/cli && axe scan` |
| WebPageTest | Real device testing | Visit webpagetest.org |
| WAVE | A11y evaluation | Browser extension or webpagetest.org |

---

## Sign-Off Criteria

**Before Launch:**

- [ ] Lighthouse Performance ≥ 85 (desktop), ≥ 75 (mobile)
- [ ] CLS < 0.1, LCP < 2.5s, FID < 100ms
- [ ] WCAG 2.1 AA: zero critical violations
- [ ] Tested on 5+ real devices (phone, tablet, desktop)
- [ ] Tested on 4+ browsers (Chrome, Safari, Firefox, Edge)
- [ ] Screen reader tested (NVDA + VoiceOver)
- [ ] All animations smooth (60fps desktop, 30fps mobile)
- [ ] prefers-reduced-motion tested + working
- [ ] Mobile touch ≥ 44x44px all targets
- [ ] Documentation complete + reviewed

---

## Timeline

- Phase 1-5 Implementation: 2-3 weeks
- Testing & Validation: 5-7 days
- Bug Fixes & Iteration: 3-5 days
- **Total Project Duration:** 3-4 weeks

---

**Phase Status:** Ready upon completion of Phases 1-5.
