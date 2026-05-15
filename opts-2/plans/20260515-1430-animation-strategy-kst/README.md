# Animation Strategy Plan — K Service Trading Landing Page

**Project:** K Service Trading | **Created:** 2026-05-15 | **Status:** Planning Complete

---

## Quick Navigation

### Start Here
- **[EXECUTIVE_SUMMARY.md](./EXECUTIVE_SUMMARY.md)** ← Start here for full overview, timeline, and approval sign-off

### Main Plan
- **[plan.md](./plan.md)** — Project overview, phases list, key metrics

### Implementation Phases (In Order)
1. [phase-01-motion-design-system.md](./phase-01-motion-design-system.md) — CSS variables, @keyframes, utility classes
2. [phase-02-scroll-animations.md](./phase-02-scroll-animations.md) — Reveal animations, stagger, parallax, counters
3. [phase-03-hover-microinteractions.md](./phase-03-hover-microinteractions.md) — Card lifts, button states, focus indicators
4. [phase-04-counter-advanced-effects.md](./phase-04-counter-advanced-effects.md) — Number counters, SVG paths, floating elements, glows
5. [phase-05-performance-accessibility.md](./phase-05-performance-accessibility.md) — GPU optimization, prefers-reduced-motion, mobile variants
6. [phase-06-testing-validation.md](./phase-06-testing-validation.md) — Comprehensive testing matrix & sign-off criteria

### Research Reports
- [research/researcher-01-eco-luxury-animation-trends.md](./research/researcher-01-eco-luxury-animation-trends.md) — Trending patterns, motion principles, easing functions
- [research/researcher-02-section-animation-opportunities.md](./research/researcher-02-section-animation-opportunities.md) — Per-section animation mapping, priority breakdown
- [research/researcher-03-performance-and-accessibility.md](./research/researcher-03-performance-and-accessibility.md) — Performance budgets, A11y strategy, testing tools

---

## Plan at a Glance

### Mission
Transform K Service Trading landing page from minimal reveal animations (fade + stagger) into sophisticated 50-70 animation suite aligned with eco-luxury brand identity while maintaining premium performance (60fps, LCP < 2.5s, CLS < 0.1).

### Scope
- **7 Sections:** Hero, About, Service, Trading, Deltafarm, Ecotourism, Contact
- **Animation Elements:** 87 total (34 current + 53 new)
- **Categories:** Scroll reveals, hover effects, counters, parallax, SVG animations, micro-interactions
- **Brand Alignment:** Elegant, refined, premium slowness (400-600ms durations), natural motion

### Timeline
- **Total Duration:** 3-4 weeks
- **Phase 1:** 2-3 days (foundations)
- **Phases 2-4:** 7-11 days (implementation)
- **Phase 5:** 2-3 days (optimization)
- **Phase 6:** 5-7 days (testing)

### Performance Targets
| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| FID (First Input Delay) | < 100ms |
| Frame Rate (Desktop) | 60fps |
| Frame Rate (Mobile) | 30fps |
| Lighthouse (Desktop) | ≥ 85 |
| Lighthouse (Mobile) | ≥ 75 |

### Accessibility
- WCAG 2.1 AA compliance (zero critical violations)
- prefers-reduced-motion support (15% of users)
- Visible focus indicators (`:focus-visible`)
- Color contrast ≥ 4.5:1 (normal text)
- Mobile touch targets ≥ 44x44px
- Screen reader compatible

---

## Key Motion Principles

### 1. Restraint & Intentionality
- Every animation serves a purpose (reveal, guide focus, feedback)
- Duration: 150-600ms
- Easing: ease-out-cubic (premium feel)

### 2. Premium Slowness
- Slower reveals (400-600ms) feel more luxurious
- Deliberate pacing signals quality
- Stagger delays: 40-80ms between elements

### 3. Natural Rhythm
- Motion mirrors natural phenomena
- Parallax max offset: 8% (avoids motion sickness)
- Glow effects subtle (12-15% opacity, gold #C89E2F)

### 4. GPU Acceleration
- Only `transform` + `opacity` properties
- Zero layout-triggering properties
- Mobile parallax disabled (battery/performance)

### 5. Accessibility-First
- prefers-reduced-motion respected
- Focus states visible
- Keyboard navigation preserved

---

## Animation Breakdown by Section

| Section | Current | New | Total | Key Animations |
|---------|---------|-----|-------|-----------------|
| Hero | 3 | 4 | 7 | Title fade, stat counters, button lift |
| About | 5 | 5 | 10 | Headline slide, metrics counter, table stagger |
| Service | 4 | 8 | 12 | Card lift, icon rotate, badge pulse |
| Trading | 5 | 12 | 17 | Parallax, card zoom, metric counters |
| Deltafarm | 8 | 6 | 14 | Parallax, stats bar, corner label |
| Ecotourism | 3 | 10 | 13 | Card lift, parallax, list stagger |
| Contact | 6 | 4 | 10 | Input glow, button hover, success state |
| Footer | 0 | 4 | 4 | Link underline, emblem rotate |
| **Total** | 34 | 53 | 87 | Multi-section sophistication |

---

## Implementation Strategy

### Phase 1: Foundations (2-3 days)
Set up CSS custom properties, @keyframes, utility classes, mobile variants.
**Deliverable:** Reusable animation system ready for all sections.

### Phase 2: Content Reveals (3-4 days)
Implement scroll-triggered animations, stagger groups, parallax, number counters.
**Deliverable:** All content reveals smoothly on scroll with visual hierarchy.

### Phase 3: Interaction Feedback (2-3 days)
Add hover effects, button states, link animations, focus indicators.
**Deliverable:** Every interactive element has clear feedback (hover + focus).

### Phase 4: Polish & Advanced (2-3 days)
Implement counters, SVG path reveals, floating elements, glow effects.
**Deliverable:** Premium visual polish throughout.

### Phase 5: Optimization (2-3 days)
GPU audit, prefers-reduced-motion setup, mobile performance variants.
**Deliverable:** All animations GPU-accelerated, accessibility-compliant.

### Phase 6: Testing & Validation (5-7 days)
Comprehensive testing across devices, browsers, accessibility standards.
**Deliverable:** Ready for production launch.

---

## Getting Started

### For Design Review
1. Read [EXECUTIVE_SUMMARY.md](./EXECUTIVE_SUMMARY.md) (10 min)
2. Review motion principles & animation scope
3. Approve timeline & performance targets
4. Proceed to Phase 1

### For Implementation
1. Start with [phase-01-motion-design-system.md](./phase-01-motion-design-system.md)
2. Follow implementation steps in order
3. Reference research reports for context
4. Test according to [phase-06-testing-validation.md](./phase-06-testing-validation.md)

### For Performance Validation
1. Review [researcher-03-performance-and-accessibility.md](./research/researcher-03-performance-and-accessibility.md)
2. Set up Lighthouse monitoring
3. Follow optimization strategies in Phase 5
4. Validate sign-off criteria before launch

---

## Key Files Referenced

| File | Purpose | Status |
|------|---------|--------|
| `index.html` | Main homepage markup | Existing, will enhance |
| `styles.css` | Main stylesheet | Will extend with animations |
| `app.jsx` | Tweaks panel (optional enhancement) | Existing |
| `./.claude/workflows/` | Development workflows | Reference only |
| `./docs/` | Project documentation | Reference only |

---

## Research Summary

### Eco-Luxury Animation Trends
- Minimal parallax (3-5 layers, 8% offset max)
- Organic SVG path reveals
- Text character stagger (40-80ms delays)
- Scroll-linked opacity fades
- Floating element bloom (3-6s cycles)
- Number counter animations
- Card hover lift (4-8px translateY)
- Stagger container load

### Motion Principles Aligned with Brand
1. **Restraint & Intentionality** — Every animation purposeful, premium slowness
2. **Natural Rhythm** — Motion mirrors nature, ease-out timing
3. **Premium Slowness** — 400-600ms durations feel luxurious
4. **Subtle Depth** — GPU acceleration, no layout shifts
5. **Color Harmony** — Gold glow, cream fades, slate shadows

### Performance Optimization
- GPU-safe properties only (transform + opacity)
- IntersectionObserver for scroll efficiency
- CSS animations over JavaScript
- Mobile variants (parallax disable, duration reduction)
- prefers-reduced-motion support
- Lighthouse targets: LCP < 2.5s, CLS < 0.1

---

## Unresolved Questions (From Research)

1. Should parallax on mobile be completely disabled or low-intensity variant?
2. Will number counters use CSS @property or vanilla JS CountUp approach?
3. Should FMCG iframe animation sync with main page scroll context?
4. Performance budget: Can 60+ animations stay under 100KB CSS/JS?
5. Should scroll-velocity-aware animations be implemented for mobile?

---

## Next Actions

### Immediate (Today)
- [ ] User reviews EXECUTIVE_SUMMARY.md
- [ ] Approve motion principles & animation scope
- [ ] Confirm timeline & performance targets
- [ ] Decision on unresolved questions (if any)

### Week 1
- [ ] Phase 1 implementation begins
- [ ] Parallel: HTML prep with --index CSS variables
- [ ] Setup Lighthouse monitoring

### Weeks 2-3
- [ ] Phases 2-4 implementation
- [ ] Daily performance checks
- [ ] Internal testing on desktop/mobile

### Week 4
- [ ] Phase 5 optimization
- [ ] Phase 6 comprehensive testing
- [ ] Bug fixes & polish
- [ ] Final validation & sign-off

---

## Support & Questions

For questions about:
- **Motion principles:** See [researcher-01-eco-luxury-animation-trends.md](./research/researcher-01-eco-luxury-animation-trends.md)
- **Section animations:** See [researcher-02-section-animation-opportunities.md](./research/researcher-02-section-animation-opportunities.md)
- **Performance:** See [researcher-03-performance-and-accessibility.md](./research/researcher-03-performance-and-accessibility.md) or specific phase docs
- **Implementation details:** See respective phase files (phase-01 through phase-06)
- **Testing criteria:** See [phase-06-testing-validation.md](./phase-06-testing-validation.md)

---

**Plan Status:** Complete ✓ | **Awaiting User Review & Approval** 📋
