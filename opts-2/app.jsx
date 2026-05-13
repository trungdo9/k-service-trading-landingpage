// app.jsx — Tweaks panel for K Service Trading homepage
// Applies live tweaks (theme, density, display font, gold tone, hero variant) via
// data-* attributes on <html> and CSS variable overrides.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "display": "cormorant",
  "gold": "default",
  "density": "comfy",
  "italicAccent": true,
  "showStats": true,
  "heroVariant": "split",
  "tickerOn": true
}/*EDITMODE-END*/;

function ApplyTweaks({ t }) {
  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.display = t.display;
    root.dataset.gold = t.gold;
    document.body.classList.remove('density-airy','density-comfy','density-compact');
    document.body.classList.add('density-' + t.density);

    // hero variant — toggle visibility of plate/stats
    const plate = document.querySelector('.hero-plate');
    const stats = document.querySelector('.hero-stats');
    const right = document.querySelector('.hero-right');
    const grid = document.querySelector('.hero-grid');
    if (grid) {
      if (t.heroVariant === 'type') {
        grid.style.gridTemplateColumns = '1fr';
        if (right) right.style.display = 'none';
      } else {
        grid.style.gridTemplateColumns = '';
        if (right) right.style.display = '';
      }
    }
    if (stats) stats.style.display = t.showStats && t.heroVariant !== 'type' ? '' : 'none';

    // italic accent on hero
    document.querySelectorAll('.hero h1 .accent, .hero h1 .amp').forEach(el => {
      el.style.fontStyle = t.italicAccent ? 'italic' : 'normal';
      el.style.fontWeight = t.italicAccent ? '400' : '500';
    });

    // ticker on/off
    const tape = document.querySelector('.tape');
    if (tape) tape.style.display = t.tickerOn ? '' : 'none';
    const navEl = document.querySelector('.nav');
    if (navEl) navEl.style.top = (t.tickerOn && tape) ? '38px' : '0';
  }, [t]);
  return null;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  return (
    <>
      <ApplyTweaks t={t} />
      <TweaksPanel>
        <TweakSection label="Typography" />
        <TweakSelect
          label="Display font"
          value={t.display}
          options={[
            { value: 'cormorant', label: 'Cormorant Garamond' },
            { value: 'playfair', label: 'Playfair Display' },
            { value: 'lora', label: 'Lora' },
          ]}
          onChange={(v) => setTweak('display', v)}
        />
        <TweakToggle
          label="Italic accents"
          value={t.italicAccent}
          onChange={(v) => setTweak('italicAccent', v)}
        />

        <TweakSection label="Theme" />
        <TweakColor
          label="Gold tone"
          value={t.gold}
          options={['#D1B05A', '#DCC58A', '#B58536']}
          onChange={(v) => {
            const map = { '#D1B05A': 'default', '#DCC58A': 'champagne', '#B58536': 'bronze' };
            setTweak('gold', map[v] || 'default');
          }}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={['compact', 'comfy', 'airy']}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakRadio
          label="Hero"
          value={t.heroVariant}
          options={['split', 'type']}
          onChange={(v) => setTweak('heroVariant', v)}
        />
        <TweakToggle
          label="Hero stats"
          value={t.showStats}
          onChange={(v) => setTweak('showStats', v)}
        />
        <TweakToggle
          label="Top ticker"
          value={t.tickerOn}
          onChange={(v) => setTweak('tickerOn', v)}
        />
      </TweaksPanel>
    </>
  );
}

const __twk_root = document.createElement('div');
document.body.appendChild(__twk_root);
ReactDOM.createRoot(__twk_root).render(<App />);
