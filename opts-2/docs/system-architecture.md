# System Architecture

**Project:** K Service Trading — Corporate Website (opts-2)
**Last Updated:** 2026-05-10

---

## 1. System Design Overview

The project is a **static, zero-build prototype** — no server, no bundler, no package manager. All files are served directly from the filesystem (or a local static HTTP server). The architecture is intentionally flat: a small number of purpose-built files that compose into a complete corporate marketing website.

```
Browser
  │
  ├── index.html          ← Entry point; owns all page content
  │     ├── styles.css
  │     ├── image-slot.js
  │     ├── tweaks-panel.jsx  ─┐
  │     └── app.jsx           ─┘ React tree (mounted into a detached div)
  │
  └── fmcg-animation.html ← Standalone animation; loaded as iframe
        ├── animations.jsx
        └── fmcg-animation.jsx  (React tree mounted to #root)
```

There are exactly two HTML entry points. They share no runtime state and communicate only through the browser's iframe/postMessage boundary (for embed-mode detection) and `localStorage` (for animation playhead persistence).

---

## 2. Component Relationships

### 2.1 Homepage (`index.html`)

```
index.html
├── <style/link> → styles.css
├── <script> → image-slot.js          (registers <image-slot> custom element)
├── <script type="text/babel"> → tweaks-panel.jsx
│     exports to window:
│       useTweaks, TweaksPanel, TweakSection, TweakRow,
│       TweakSlider, TweakToggle, TweakRadio, TweakSelect,
│       TweakText, TweakNumber, TweakColor, TweakButton
│
└── <script type="text/babel"> → app.jsx
      reads from window: useTweaks, TweaksPanel, Tweak*
      mounts: ReactDOM.createRoot(detachedDiv).render(<App/>)
      App
      ├── <ApplyTweaks t={t} />    (DOM side-effector via useEffect)
      └── <TweaksPanel>
            ├── <TweakSection label="Typography" />
            ├── <TweakSelect  /> (display font)
            ├── <TweakToggle  /> (italic accents)
            ├── <TweakSection label="Theme" />
            ├── <TweakColor   /> (gold tone)
            ├── <TweakSection label="Layout" />
            ├── <TweakRadio   /> (density)
            ├── <TweakRadio   /> (hero variant)
            ├── <TweakToggle  /> (hero stats)
            └── <TweakToggle  /> (top ticker)
```

### 2.2 FMCG Animation (`fmcg-animation.html`)

```
fmcg-animation.html
├── <script type="text/babel"> → animations.jsx
│     exports to window:
│       Easing, clamp, lerp, Stage, Sprite, useTime, useSprite
│
└── <script type="text/babel"> → fmcg-animation.jsx
      reads from window: React, ReactDOM, Stage, Sprite, Easing,
                         useTime, useSprite
      mounts: ReactDOM.createRoot(#root).render(<App/>)
      App → <Stage duration=12 loop autoplay persistKey="fmcg-anim">
              ├── <Backdrop/>          (radial gradient layer)
              ├── <Grain/>             (SVG noise overlay)
              ├── <Sprite start=0    end=3.6>  → <SceneMap/>
              ├── <Sprite start=3.6  end=7.0>  → <SceneContainer/>
              ├── <Sprite start=7.0  end=10.0> → <SceneCategories/>
              ├── <Sprite start=10.0 end=12.0> → <SceneLockup/>
              └── <Chrome/>            (persistent frame chrome)
```

### 2.3 iframe Embedding

`index.html` embeds the animation via:

```html
<iframe src="fmcg-animation.html?embed=1" ...></iframe>
```

The `?embed=1` param causes `fmcg-animation.html` to hide its playback bar via MutationObserver. The fullscreen button in `index.html` calls `frame.requestFullscreen()` directly on the iframe container `<div>`, not the iframe element itself.

---

## 3. Data Flow

### 3.1 Tweaks Panel State Flow

```
User interaction (click/drag in TweaksPanel)
  │
  ▼
TweakToggle / TweakRadio / TweakColor / etc.
  calls onChange(newValue)
  │
  ▼
useTweaks.setTweak(key, value)
  ├── setValues(prev => ({ ...prev, [key]: value }))   → React re-render
  ├── window.parent.postMessage({ type: '__edit_mode_set_keys', edits })
  │     → host environment rewrites EDITMODE block on disk
  └── window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }))
        → same-page listeners (deck stage, etc.)
  │
  ▼
<ApplyTweaks t={updatedValues} /> re-renders via useEffect
  ├── document.documentElement.dataset.display = t.display
  ├── document.documentElement.dataset.gold = t.gold
  ├── document.body.classList → density-{compact|comfy|airy}
  ├── .hero-stats.style.display toggle
  ├── .hero-grid.style.gridTemplateColumns (hero variant)
  ├── .hero h1 .accent/.amp fontStyle/fontWeight (italic accent)
  └── .tape.style.display / .nav.style.top (ticker)
  │
  ▼
CSS re-evaluates attribute selectors:
  [data-display=cormorant] → --display: Cormorant Garamond, ...
  [data-gold=champagne]    → --gold: #DCC58A
  .density-compact         → --pad-x, --gap-y, --section-y overrides
```

### 3.2 Reveal Animation Flow

```
Page loads
  │
  ▼
IntersectionObserver observes all .reveal elements
  │
  ▼
User scrolls → element enters viewport (threshold: 12%, rootMargin: -8% bottom)
  │
  ▼
observer callback: element.classList.add('in') → io.unobserve(element)
  │
  ▼
CSS: .reveal.in { opacity: 1; transform: translateY(0); }
     transition delayed by var(--rd) for stagger effect
  │
  ▼
Failsafe 1: visibilitychange → sweepInView() for hidden-tab edge case
Failsafe 2: setTimeout(1500ms) → force-add .in to all remaining .reveal
```

### 3.3 Image Slot State Flow

```
User drops image onto <image-slot id="x">
  │
  ▼
handleEvent('drop') → this._ingest(file)
  │
  ▼
toDataUrl(file, slotWidth)
  └── createImageBitmap → canvas.toDataURL('image/webp', 0.85)
  │
  ▼
setSlot(id, { u: dataUrl, s: 1, x: 0, y: 0 })
  ├── slots[id] = val                     (in-memory store)
  ├── subs.forEach(fn => fn())            (notify all <image-slot> instances)
  └── window.omelette.writeFile(          (persist to disk)
        '.image-slots.state.json',
        JSON.stringify(slots)
      )
  │
  ▼
Each subscribed slot._render() re-reads getSlot(id)
  └── shows image if id matches, otherwise no-op
```

### 3.4 Animation Playhead Flow

```
Stage mounts → requestAnimationFrame loop starts
  │
  ▼
Each frame: elapsed = (now - startTime) / 1000
  ├── if loop: t = elapsed % duration
  └── TimeContext.Provider value={t}
  │
  ▼
<Sprite start={s} end={e}>
  localTime = clamp(t - s, 0, e - s)
  progress  = localTime / (e - s)
  → renders children only when s ≤ t < e
  │
  ▼
Scene components call useTime() or useSprite()
  → compute visual state from current time
  → React re-renders at display refresh rate (~60fps)
  │
  ▼
On pause/seek: localStorage.setItem(persistKey + ':t', currentTime)
On mount:      initialTime = parseFloat(localStorage.getItem(persistKey + ':t'))
```

---

## 4. Integration Points

### 4.1 Google Fonts (External)

Loaded via `<link>` preconnect + stylesheet in `<head>`. Required for display rendering; without it the browser falls back to Georgia (display), system-ui (body), and ui-monospace (mono). No API key required.

### 4.2 Host Editing Environment (omelette)

The project is designed to run inside a proprietary host editing environment ("omelette") that provides:

| Interface | Purpose |
|-----------|---------|
| `window.omelette.writeFile(path, content)` | Persists `.image-slots.state.json` sidecar |
| `window.parent.postMessage` | Tweaks panel protocol (activate, deactivate, set keys) |
| `window.__dc_inv_zoom` CSS var | Corrects TweaksPanel scale when host applies a viewport zoom |

Outside this host environment all features work except: image-slot persistence (write-only is suppressed), Tweaks panel activation (panel stays closed unless manually triggered), and EDITMODE block rewriting.

### 4.3 localStorage

Two independent keys are used:

| Key | Writer | Reader | Purpose |
|-----|--------|--------|---------|
| `fmcg-anim:t` | `animations.jsx` Stage | `fmcg-animation.html` inline script | Animation playhead persistence |
| `deck-stage.railVisible` | TweaksPanel | TweaksPanel | Deck thumbnail rail toggle state |

### 4.4 Contact Form

The contact form in `index.html` is a front-end-only `<form>` with `onsubmit="event.preventDefault()"`. On submit it changes the button text to "Sent — We will reply shortly". There is no backend submission, no email service, and no validation beyond HTML5 `required` attributes. This is a placeholder for a future integration.

### 4.5 Fullscreen API

The FMCG film fullscreen button calls `frame.requestFullscreen()` on the `.fmcg-film-frame` `<div>`, with a `webkitRequestFullscreen` fallback. `document.fullscreenElement` is checked before calling `document.exitFullscreen()` to avoid errors.

---

## 5. Rendering Model

The page uses a **hybrid rendering model**:

| Subsystem | Rendering Approach |
|-----------|-------------------|
| Page content (sections, nav, footer) | Static HTML + CSS; no JavaScript rendering |
| Reveal animations | CSS transitions triggered by JS class addition |
| Tweaks panel | React virtual DOM, mounted into a detached `<div>` appended to `<body>` |
| DOM tweaks side effects | Imperative `useEffect` mutations on `document.documentElement` |
| FMCG animation | React + `requestAnimationFrame`; redraws entire scene tree each frame |
| Image slot | Web Component with Shadow DOM; imperative DOM manipulation within `_render()` |

This separation means the main page content remains fast and accessible regardless of React or the animation subsystem's load state.

---

## 6. Security Considerations

- All CDN scripts are pinned to exact versions with SRI hashes (`integrity="sha384-..."`)
- The `image-slot.js` component only accepts `data:image/` URLs from its sidecar, rejecting arbitrary URLs that could load external content
- Accepted image MIME types are restricted to `['image/png', 'image/jpeg', 'image/webp', 'image/avif']` — SVG and GIF are explicitly excluded
- The sidecar write path is restricted to `*.state.json` basenames by the host environment
- The contact form has no backend; no user data is transmitted or stored in this build
