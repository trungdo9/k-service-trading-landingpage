# Code Standards & Conventions

**Project:** K Service Trading — Corporate Website (opts-2)
**Last Updated:** 2026-05-10

---

## 1. Codebase Organization

### 1.1 File Responsibility Principle

Each file has a single, clearly scoped responsibility:

| File | Responsibility |
|------|---------------|
| `index.html` | All page content markup and section structure |
| `styles.css` | All visual styling; no logic |
| `app.jsx` | Tweaks-panel wiring only; bridges UI controls to DOM mutations |
| `tweaks-panel.jsx` | Reusable control components only; no business logic |
| `animations.jsx` | Animation runtime primitives only; no domain content |
| `fmcg-animation.jsx` | FMCG film scenes only; depends on animations.jsx |
| `image-slot.js` | Image-slot custom element only; fully self-contained |

### 1.2 Dependency Direction

```
index.html
  ├── styles.css          (no JS dependencies)
  ├── image-slot.js       (no external dependencies)
  ├── tweaks-panel.jsx    (depends on: React)
  └── app.jsx             (depends on: React, tweaks-panel.jsx)

fmcg-animation.html
  ├── animations.jsx      (depends on: React)
  └── fmcg-animation.jsx  (depends on: React, animations.jsx)
```

No circular dependencies exist. `animations.jsx` and `tweaks-panel.jsx` are shared infrastructure; all other files are consumers.

---

## 2. HTML Conventions

### 2.1 Section Structure

Every major section uses a consistent pattern:

```html
<section id="anchor" class="section [theme] wrap" data-screen-label="NN Label">
  <!-- content -->
</section>
```

- `id` is a short lowercase anchor matching the nav link target
- `data-screen-label` is a human-readable label for tooling and screen readers (format: `NN SectionName`)
- Theme modifier is one of `dark`, `cream`, or `paper`
- `.wrap` applies horizontal padding via the `--pad-x` CSS variable

### 2.2 Reveal Animations

All elements that animate in on scroll use:

```html
<div class="reveal" style="--rd: .12s">content</div>
```

- The `reveal` class is observed by IntersectionObserver
- The `--rd` CSS custom property sets the stagger delay in seconds
- The `.in` class is added by the observer when the element enters the viewport

### 2.3 SVG Icons

Inline SVGs are used for all iconography to avoid HTTP requests and allow color inheritance:

```html
<svg class="ico" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- paths use stroke="currentColor" to inherit theme color -->
</svg>
```

SVG paths use `stroke="currentColor"` rather than hardcoded colors so icons automatically adapt between `.dark` and `.cream` section themes.

### 2.4 Section Numbering

Section labels use zero-padded two-digit numbering with em-dashes:

```html
<div class="section-num reveal">02 — Service · Four Pillars</div>
```

Format: `{NN} — {SectionName} · {Subtitle}`

---

## 3. CSS Conventions

### 3.1 Design Token System

All design values are declared as CSS custom properties on `:root`. Never hardcode color, font, or spacing values directly into component rules.

**Color tokens:**
```css
--slate: #161D1A
--slate-2: #1A2421
--slate-3: #243029
--cream: #F7F6F1
--cream-2: #EFEBDF
--paper: #FFFFFF
--gold: #D1B05A
--gold-soft: #B89545
--gold-glow: rgba(209, 176, 90, .12)
--ink: #2C3531
--ink-2: #5C6661
--rule: rgba(44, 53, 49, .14)
--rule-dark: rgba(247, 246, 241, .14)
```

**Typography tokens:**
```css
--display: "Cormorant Garamond", "Playfair Display", "Lora", Georgia, serif
--body: "Manrope", "Inter", -apple-system, BlinkMacSystemFont, sans-serif
--mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace
```

**Spacing tokens:**
```css
--pad-x: clamp(24px, 5vw, 96px)    /* horizontal page padding */
--gap-y: clamp(96px, 14vw, 200px)   /* vertical gap between major blocks */
--section-y: clamp(96px, 12vw, 168px) /* section top/bottom padding */
```

### 3.2 Naming Conventions

CSS classes use BEM-influenced flat kebab-case. Block names match the section or component they belong to:

```css
/* Block */
.service-card { }

/* Element */
.service-card .nm { }      /* name */
.service-card .dn { }      /* description */
.service-card .ico { }     /* icon */
.service-card .more { }    /* read-more link */

/* Modifier (via data attribute or additional class) */
.nav.scrolled { }
.reveal.in { }
[data-display=playfair] { }
[data-gold=champagne] { }
.density-compact { }
```

Short utility class names (`.nm`, `.dn`, `.ix`, `.lbl`, `.val`) are acceptable within a clearly scoped parent block context. Standalone utility classes use descriptive names (`.display`, `.mono`, `.wrap`, `.section`, `.dark`, `.cream`).

### 3.3 Theme Classes

Section background and text color are set by a single class on the `<section>` element:

| Class | Background | Text |
|-------|-----------|------|
| `.dark` | `--slate` | `--cream` |
| `.cream` | `--cream` | `--ink` |
| `.paper` | `--paper` | `--ink` |

Child element colors adapt via scoped selectors (e.g., `.dark .display`, `.dark .muted`) rather than inline styles.

### 3.4 Typography Scale

- `h1`: `clamp(72px, 11vw, 200px)` — hero only
- `h2 .display`: large editorial display type, approximately 48–72px
- `h3`: approximately 24–32px
- Body: 16px base, 1.6 line-height
- `.mono`: 11px, 0.14em letter-spacing, uppercase
- `.section-num`: 11px mono, 0.18em letter-spacing, uppercase

### 3.5 Responsive Strategy

Layout adapts via CSS `clamp()` for fluid scaling between breakpoints rather than discrete media-query breakpoints for most typographic and spacing values. Grid layouts (`display: grid`) use `grid-template-columns` with named or fractional tracks. Media queries are used for structural breakpoints (navigation collapse, card stacking).

---

## 4. JavaScript / JSX Conventions

### 4.1 No Build Step

All JSX is transpiled in-browser by `@babel/standalone`. This means:
- No TypeScript; plain JavaScript only
- No ES modules (`import`/`export`); all scripts load into the global scope
- Library globals (React, ReactDOM) are available because the CDN UMD builds expose them on `window`
- `tweaks-panel.jsx` explicitly assigns its exports to `window` at the bottom of the file

### 4.2 Component Naming

React components use PascalCase. All component names are descriptive of their visual role:

```jsx
// Good
function TweakToggle({ label, value, onChange }) { }
function SceneMap() { }
function ProductCard({ x, y, kind, label, opacity, t }) { }

// Internal/private helpers use double underscore prefix
function __twkIsLight(hex) { }
const __TwkCheck = ({ light }) => ( );
```

### 4.3 Hook Naming

Custom hooks use the `use` prefix (React convention):

```jsx
function useTweaks(defaults) { }  // in tweaks-panel.jsx
function useTime() { }            // in animations.jsx
function useSprite() { }          // in animations.jsx
```

### 4.4 Props Naming

Props use camelCase. Single-letter or abbreviated props are acceptable in animation/rendering contexts where performance or brevity matters:

```jsx
// Animation components — brevity acceptable
function ProductCard({ x, y, kind, label, opacity, t }) { }

// UI components — descriptive preferred
function TweakSlider({ label, value, min, max, step, unit, onChange }) { }
```

### 4.5 Constant Naming

Module-level constants use SCREAMING_SNAKE_CASE for design values:

```jsx
const GOLD = '#D1B05A';
const GOLD_SOFT = 'rgba(209, 176, 90, .55)';
const CREAM = '#F7F6F1';
const SLATE = '#0F1412';
const DISPLAY = '"Cormorant Garamond", ...';
const MONO = '"JetBrains Mono", ...';
```

Default configuration objects use camelCase keys:

```jsx
const TWEAK_DEFAULTS = {
  display: "cormorant",
  gold: "default",
  density: "comfy",
  italicAccent: true,
};
```

### 4.6 Edit-Mode Marker Convention

The Tweaks panel defaults object is delimited by special block markers to allow external tooling to rewrite it on disk:

```jsx
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  // ...
}/*EDITMODE-END*/;
```

Do not remove or reformat these markers. The host environment uses them as text anchors for in-place JSON rewriting.

### 4.7 Event Handler Pattern

Pointer/drag event handlers use a capture-then-release pattern on `window` to remain active outside the originating element bounds:

```js
const move = (e) => { /* update state */ };
const up = () => {
  window.removeEventListener('pointermove', move);
  window.removeEventListener('pointerup', up);
};
window.addEventListener('pointermove', move);
window.addEventListener('pointerup', up);
```

Always pair `addEventListener` with `removeEventListener` on the same `window` target.

### 4.8 PostMessage Protocol

The Tweaks panel communicates with a host editing environment via `window.parent.postMessage`. Known message types:

| Direction | Type | Meaning |
|-----------|------|---------|
| Panel → Host | `__edit_mode_available` | Panel is ready; host may activate |
| Host → Panel | `__activate_edit_mode` | Open the panel |
| Host → Panel | `__deactivate_edit_mode` | Close the panel |
| Panel → Host | `__edit_mode_dismissed` | User clicked the close button |
| Panel → Host | `__edit_mode_set_keys` | Persist key/value changes to disk |
| Host → Panel | `__omelette_rail_enabled` | Deck thumbnail rail feature flag |
| Panel → Window | `__deck_rail_visible` | Toggle deck rail visibility |

---

## 5. File Naming Conventions

| Type | Convention | Examples |
|------|-----------|---------|
| HTML pages | lowercase, hyphen-separated | `index.html`, `fmcg-animation.html` |
| CSS stylesheets | lowercase, hyphen-separated | `styles.css` |
| JS scripts | lowercase, hyphen-separated | `image-slot.js` |
| JSX components | camelCase | `app.jsx`, `tweaks-panel.jsx`, `animations.jsx`, `fmcg-animation.jsx` |
| Image assets | kebab-case with descriptive names | `k-trading-1.png`, `k-ecotourism.png` |
| Documentation | kebab-case | `project-overview-pdr.md`, `code-standards.md` |

---

## 6. Best Practices Observed in the Project

### 6.1 SRI Integrity on CDN Scripts

All CDN script tags include `integrity` (SRI hash) and `crossorigin` attributes:

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"
        integrity="sha384-hD6/..."
        crossorigin="anonymous"></script>
```

This prevents supply-chain attacks if the CDN is compromised.

### 6.2 Passive Scroll Listeners

Scroll event listeners use `{ passive: true }` to avoid blocking the browser's compositor thread:

```js
window.addEventListener('scroll', onScroll, { passive: true });
```

Wheel listeners that call `preventDefault()` correctly omit the passive flag.

### 6.3 IntersectionObserver with Failsafe

The reveal-on-scroll pattern uses IntersectionObserver for performance, with two fallback strategies for edge cases:

1. `visibilitychange` event sweeps elements into view when the tab becomes visible
2. A 1500ms `setTimeout` force-reveals all pending `.reveal` elements as an absolute last resort

### 6.4 Generation Counter for Async Safety

The `image-slot.js` component uses a generation counter (`this._gen`) to discard stale async results when a new drop or clear occurs before the previous `toDataUrl()` call resolves:

```js
const gen = ++this._gen;
const url = await toDataUrl(file, w);
if (gen !== this._gen) return; // stale — discard
```

### 6.5 Serialized Writes for Sidecar State

The image-slot sidecar write queue uses a `saving`/`saveDirty` flag pair to serialize concurrent writes from multiple slots, preventing race conditions that could corrupt the state JSON.

### 6.6 CSS clamp() for Fluid Typography

Responsive type and spacing values use `clamp(min, preferred, max)` rather than fixed breakpoints, producing smooth scaling across viewport widths without a cascade of media queries.

### 6.7 Accessibility Attributes

- ARIA roles on interactive custom controls (`role="switch"`, `role="radiogroup"`, `role="radio"`, `aria-checked`)
- `aria-label` on icon-only buttons
- `aria-hidden="true"` on purely decorative SVGs
- `alt` text on all product and section photographs
