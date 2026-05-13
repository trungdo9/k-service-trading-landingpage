// fmcg-animation.jsx
// Concept A: Origin → Shelf — Supply chain in 3 acts
// 12s loop, 1280×800 editorial slate-on-gold motion.

const GOLD = '#D1B05A';
const GOLD_SOFT = 'rgba(209, 176, 90, .55)';
const CREAM = '#F7F6F1';
const CREAM_DIM = 'rgba(247, 246, 241, .68)';
const SLATE = '#0F1412';
const SLATE_2 = '#1A201D';
const DISPLAY = '"Cormorant Garamond", "Playfair Display", Georgia, serif';
const MONO = '"JetBrains Mono", ui-monospace, monospace';

// ── Persistent chrome (eyebrow + section ix + corner ticks) ───────────────
function Chrome() {
  const time = useTime();
  // soft fade at the very start
  const opacity = Math.min(1, time / 0.6);
  return (
    <div style={{ position: 'absolute', inset: 0, opacity, pointerEvents: 'none' }}>
      {/* corner ticks */}
      {[
        { left: 28, top: 28 }, { right: 28, top: 28 },
        { left: 28, bottom: 28 }, { right: 28, bottom: 28 },
      ].map((pos, i) => (
        <div key={i} style={{ position: 'absolute', ...pos, width: 18, height: 18 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: 18, height: 1, background: GOLD_SOFT }}/>
          <div style={{ position: 'absolute', left: 0, top: 0, width: 1, height: 18, background: GOLD_SOFT }}/>
        </div>
      ))}
      {/* top bar — eyebrow */}
      <div style={{
        position: 'absolute', top: 36, left: 60, right: 60,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: MONO, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: GOLD,
      }}>
        <span>— 01 / FMCG · IMPORTS</span>
        <span style={{ color: CREAM_DIM }}>K · SERVICE · TRADING</span>
      </div>
      {/* bottom bar — running caption */}
      <div style={{
        position: 'absolute', bottom: 36, left: 60, right: 60,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: MONO, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'rgba(247,246,241,.45)',
      }}>
        <span>VN · KR · EU · JP</span>
        <span>UNLOCKING VALUE — BUILDING THE FUTURE</span>
        <span>{`${String(Math.floor(time)).padStart(2,'0')} / 12`}</span>
      </div>
    </div>
  );
}

// ── Scene 1 — World Map with trade arcs (0 → 3.6) ─────────────────────────
function SceneMap() {
  const { localTime, progress } = useSprite();
  const cx = 640, cy = 410;

  // Origin coords (rough world map projection — pure decorative)
  const HCM = { x: cx + 250, y: cy + 60, label: 'HCMC' };
  const SEOUL = { x: cx + 270, y: cy - 110, label: 'SEOUL' };
  const PARIS = { x: cx - 130, y: cy - 130, label: 'PARIS' };
  const ROTTERDAM = { x: cx - 95, y: cy - 165, label: 'ROTTERDAM' };

  // Dot grid world map
  const dots = React.useMemo(() => {
    const out = [];
    for (let r = 0; r < 22; r++) {
      for (let c = 0; c < 60; c++) {
        const x = 60 + c * 19;
        const y = 180 + r * 18;
        // mask to a soft ellipse so it reads as a globe
        const dx = (x - cx) / 540;
        const dy = (y - cy) / 240;
        const d = dx*dx + dy*dy;
        if (d > 1.05) continue;
        out.push({ x, y, d });
      }
    }
    return out;
  }, []);

  // Camera slow drift
  const camScale = 1 + 0.04 * progress;

  // Arc reveal progress — staggered
  const arcProg = (start) => Math.max(0, Math.min(1, (localTime - start) / 1.2));

  const arc = (from, to, t) => {
    // quadratic bezier curve, drawn proportionally up to t
    const mx = (from.x + to.x) / 2;
    const my = Math.min(from.y, to.y) - 80;
    return { mx, my, t };
  };

  const a1 = arc(SEOUL, HCM, arcProg(0.6));
  const a2 = arc(PARIS, HCM, arcProg(1.0));
  const a3 = arc(ROTTERDAM, HCM, arcProg(1.4));

  // Container ship along Seoul→HCMC
  const ship = a1.t;
  const shipX = (1 - ship) * (1 - ship) * SEOUL.x + 2 * (1 - ship) * ship * a1.mx + ship * ship * HCM.x;
  const shipY = (1 - ship) * (1 - ship) * SEOUL.y + 2 * (1 - ship) * ship * a1.my + ship * ship * HCM.y;

  return (
    <div style={{ position: 'absolute', inset: 0, transform: `scale(${camScale})`, transformOrigin: 'center' }}>
      <svg width={1280} height={800} style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <linearGradient id="arcg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0"/>
            <stop offset="50%" stopColor={GOLD} stopOpacity="1"/>
            <stop offset="100%" stopColor={GOLD} stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="hubg" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0.5"/>
            <stop offset="100%" stopColor={GOLD} stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* dot grid */}
        {dots.map((p, i) => {
          const intro = Math.min(1, Math.max(0, (localTime - 0.05 - p.d * 0.3)) / 0.6);
          const op = (0.18 + 0.35 * (1 - p.d)) * intro;
          return <circle key={i} cx={p.x} cy={p.y} r={1.2} fill={GOLD} opacity={op}/>;
        })}

        {/* arcs */}
        {[a1, a2, a3].map((a, i) => {
          const from = [SEOUL, PARIS, ROTTERDAM][i];
          if (a.t <= 0) return null;
          const len = 200;
          const dash = `${len * a.t} ${len}`;
          return (
            <path
              key={i}
              d={`M ${from.x} ${from.y} Q ${a.mx} ${a.my} ${HCM.x} ${HCM.y}`}
              stroke={GOLD}
              strokeWidth="1.2"
              fill="none"
              strokeDasharray={dash}
              pathLength={len}
              opacity={0.85}
            />
          );
        })}

        {/* origin nodes */}
        {[SEOUL, PARIS, ROTTERDAM, HCM].map((p, i) => {
          const intro = Math.min(1, Math.max(0, localTime - 0.2 - i * 0.15) / 0.5);
          const isHub = p === HCM;
          const r = isHub ? 6 : 3.5;
          return (
            <g key={i} opacity={intro}>
              {isHub && <circle cx={p.x} cy={p.y} r={26 + 6 * Math.sin(localTime * 3)} fill="url(#hubg)"/>}
              <circle cx={p.x} cy={p.y} r={r} fill={isHub ? GOLD : 'none'} stroke={GOLD} strokeWidth="1.2"/>
              <text x={p.x + (i === 3 ? -14 : 12)} y={p.y + 4}
                    textAnchor={i === 3 ? 'end' : 'start'}
                    fontFamily={MONO} fontSize="10" letterSpacing="2"
                    fill={isHub ? GOLD : CREAM_DIM}>
                {p.label}
              </text>
            </g>
          );
        })}

        {/* container ship icon along Seoul→HCMC arc */}
        {ship > 0.05 && ship < 0.98 && (
          <g transform={`translate(${shipX}, ${shipY})`} opacity={0.9}>
            <rect x="-10" y="-3" width="20" height="6" fill={GOLD}/>
            <rect x="-7" y="-7" width="6" height="4" fill={GOLD}/>
            <rect x="0" y="-7" width="6" height="4" fill={CREAM}/>
          </g>
        )}
      </svg>

      {/* Headline overlay */}
      <div style={{
        position: 'absolute', left: 60, top: 120,
        fontFamily: DISPLAY, fontStyle: 'italic',
        fontSize: 38, color: CREAM, letterSpacing: '-0.01em',
        opacity: Math.min(1, Math.max(0, (localTime - 0.4) / 0.6)),
        transform: `translateY(${(1 - Math.min(1, Math.max(0, (localTime - 0.4) / 0.6))) * 10}px)`,
      }}>
        From origin —
      </div>
      <div style={{
        position: 'absolute', left: 60, top: 168,
        fontFamily: DISPLAY, fontWeight: 500,
        fontSize: 64, color: GOLD, letterSpacing: '-0.02em', lineHeight: 1,
        opacity: Math.min(1, Math.max(0, (localTime - 0.7) / 0.6)),
      }}>
        to your shelf.
      </div>
    </div>
  );
}

// ── Scene 2 — Container delivers (3.6 → 7.0) ──────────────────────────────
function SceneContainer() {
  const { localTime, progress } = useSprite();

  // Container drives in from right → settles at center, then "opens"
  const driveIn = Easing.easeOutCubic(Math.min(1, localTime / 1.3));
  const cx = 640;
  const containerX = 1500 - driveIn * (1500 - cx);

  const openT = Math.max(0, Math.min(1, (localTime - 1.4) / 0.7));
  const doorAngle = Easing.easeOutCubic(openT) * 110; // degrees

  // Camera zoom on container
  const cam = 1 + 0.06 * Easing.easeInOutCubic(Math.min(1, localTime / 2.5));

  // Products fly out
  const products = [
    { label: 'FRENCH WINE', kind: 'wine',  delay: 1.7 },
    { label: 'K-BEAUTY',     kind: 'cosm',  delay: 1.85 },
    { label: 'SWISS BARS',   kind: 'bar',   delay: 2.0 },
    { label: 'FRAGRANCE',    kind: 'frag',  delay: 2.15 },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, transform: `scale(${cam})`, transformOrigin: 'center' }}>
      {/* Backdrop dock lines */}
      <svg width={1280} height={800} style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
        {[...Array(8)].map((_, i) => (
          <line key={i} x1={0} x2={1280} y1={520 + i*16} y2={520 + i*16}
                stroke={GOLD_SOFT} strokeWidth="0.5" opacity={0.4 - i*0.04}/>
        ))}
      </svg>

      {/* Container */}
      <div style={{
        position: 'absolute',
        left: containerX - 240, top: 280,
        width: 480, height: 240,
        opacity: Math.min(1, localTime / 0.4),
      }}>
        {/* body */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, #1F2A26 0%, #131918 100%)`,
          border: `1px solid ${GOLD}`, borderRadius: 4,
          boxShadow: '0 30px 80px rgba(0,0,0,.6)',
        }}>
          {/* corrugation */}
          <div style={{
            position: 'absolute', inset: 12,
            background: `repeating-linear-gradient(90deg, rgba(209,176,90,.06) 0 6px, transparent 6px 14px)`,
          }}/>
          {/* K SERVICE stencil */}
          <div style={{
            position: 'absolute', left: 0, right: 0, top: '38%',
            textAlign: 'center',
            fontFamily: DISPLAY, fontWeight: 500,
            fontSize: 56, color: GOLD, letterSpacing: '0.04em',
            opacity: 1 - openT,
          }}>
            K · SERVICE
          </div>
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 22,
            textAlign: 'center',
            fontFamily: MONO, fontSize: 10, letterSpacing: '0.3em',
            color: GOLD_SOFT,
            opacity: 1 - openT,
          }}>
            CARGO 040 · BONDED
          </div>
        </div>

        {/* Doors that swing open */}
        {[-1, 1].map((dir) => (
          <div key={dir} style={{
            position: 'absolute',
            left: dir < 0 ? 0 : '50%', top: 0,
            width: '50%', height: '100%',
            background: `linear-gradient(${dir < 0 ? '90deg' : '270deg'}, #131918, #1F2A26)`,
            border: `1px solid ${GOLD}`,
            borderRadius: dir < 0 ? '4px 0 0 4px' : '0 4px 4px 0',
            transformOrigin: dir < 0 ? 'left center' : 'right center',
            transform: `perspective(900px) rotateY(${-dir * doorAngle}deg)`,
            backfaceVisibility: 'hidden',
            boxShadow: openT > 0 ? `inset 0 0 60px rgba(209,176,90,.${openT > 0.5 ? '15' : '08'})` : 'none',
          }}>
            <div style={{
              position: 'absolute', top: '50%', left: dir < 0 ? '70%' : '30%',
              transform: 'translate(-50%, -50%)',
              width: 14, height: 14, borderRadius: '50%',
              border: `1px solid ${GOLD_SOFT}`,
            }}/>
          </div>
        ))}

        {/* Glow pouring out once open */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(60% 80% at 50% 50%, rgba(209,176,90,${0.3 * openT}), transparent 70%)`,
          pointerEvents: 'none',
        }}/>
      </div>

      {/* Products flying out */}
      {products.map((p, i) => {
        const t = Math.max(0, Math.min(1, (localTime - p.delay) / 0.9));
        if (t === 0) return null;
        const eased = Easing.easeOutCubic(t);
        const targetX = cx - 270 + i * 180;
        const targetY = 580;
        const startX = cx;
        const startY = 380;
        const x = startX + (targetX - startX) * eased;
        const y = startY + (targetY - startY) * eased - Math.sin(t * Math.PI) * 80;
        const op = Math.min(1, t * 2);
        return (
          <ProductCard key={i} x={x - 70} y={y - 90} kind={p.kind} label={p.label} opacity={op} t={t}/>
        );
      })}
    </div>
  );
}

// ── Product card SVG (small editorial product silhouette) ────────────────
function ProductCard({ x, y, kind, label, opacity, t }) {
  const rot = (1 - t) * -12;
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: 140, height: 180,
      background: '#F2EDE2',
      border: `0.5px solid ${GOLD_SOFT}`,
      borderRadius: 3,
      opacity,
      transform: `rotate(${rot}deg)`,
      boxShadow: '0 12px 30px rgba(0,0,0,.4)',
      display: 'flex', flexDirection: 'column',
      padding: 10,
    }}>
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `repeating-linear-gradient(135deg, rgba(15,20,18,.04) 0 2px, transparent 2px 8px)`,
      }}>
        <ProductGlyph kind={kind}/>
      </div>
      <div style={{
        fontFamily: MONO, fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: SLATE, marginTop: 8, textAlign: 'center',
      }}>
        {label}
      </div>
    </div>
  );
}

function ProductGlyph({ kind }) {
  const stroke = SLATE;
  const sw = 1.2;
  switch (kind) {
    case 'wine':
      return (
        <svg width="46" height="100" viewBox="0 0 46 100">
          <path d="M18 6 H28 V28 C28 36 36 38 36 50 V92 H10 V50 C10 38 18 36 18 28 Z"
                stroke={stroke} strokeWidth={sw} fill="none"/>
          <rect x="12" y="58" width="22" height="20" stroke={stroke} strokeWidth={sw} fill="none"/>
          <line x1="16" y1="65" x2="30" y2="65" stroke={stroke} strokeWidth="0.6"/>
        </svg>
      );
    case 'cosm':
      return (
        <svg width="46" height="100" viewBox="0 0 46 100">
          <rect x="14" y="20" width="18" height="60" stroke={stroke} strokeWidth={sw} fill="none"/>
          <rect x="18" y="10" width="10" height="10" stroke={stroke} strokeWidth={sw} fill="none"/>
          <line x1="14" y1="40" x2="32" y2="40" stroke={stroke} strokeWidth="0.6"/>
          <text x="23" y="55" textAnchor="middle" fontFamily={DISPLAY} fontSize="10" fill={stroke}>K</text>
        </svg>
      );
    case 'bar':
      return (
        <svg width="80" height="100" viewBox="0 0 80 100">
          <rect x="10" y="30" width="60" height="40" stroke={stroke} strokeWidth={sw} fill="none"/>
          <line x1="25" y1="30" x2="25" y2="70" stroke={stroke} strokeWidth="0.6"/>
          <line x1="40" y1="30" x2="40" y2="70" stroke={stroke} strokeWidth="0.6"/>
          <line x1="55" y1="30" x2="55" y2="70" stroke={stroke} strokeWidth="0.6"/>
          <line x1="10" y1="50" x2="70" y2="50" stroke={stroke} strokeWidth="0.6"/>
        </svg>
      );
    case 'frag':
      return (
        <svg width="46" height="100" viewBox="0 0 46 100">
          <path d="M14 38 H32 V82 H14 Z" stroke={stroke} strokeWidth={sw} fill="none"/>
          <rect x="18" y="28" width="10" height="10" stroke={stroke} strokeWidth={sw} fill="none"/>
          <rect x="20" y="14" width="6" height="14" stroke={stroke} strokeWidth={sw} fill="none"/>
          <line x1="14" y1="56" x2="32" y2="56" stroke={stroke} strokeWidth="0.6"/>
        </svg>
      );
    default: return null;
  }
}

// ── Scene 3 — Category grid (7.0 → 10.0) ──────────────────────────────────
function SceneCategories() {
  const { localTime } = useSprite();
  const cats = [
    { ix: '01', nm: 'Cosmetics',     dn: 'KOREA · EU' },
    { ix: '02', nm: 'F & B',         dn: 'PREMIUM · BONDED' },
    { ix: '03', nm: 'Household',     dn: 'COLD CHAIN' },
    { ix: '04', nm: 'Personal Care', dn: 'CONCIERGE' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Headline */}
      <div style={{
        position: 'absolute', left: 60, top: 110,
        fontFamily: DISPLAY, fontStyle: 'italic',
        fontSize: 36, color: CREAM_DIM, letterSpacing: '-0.01em',
        opacity: Math.min(1, localTime / 0.5),
      }}>
        Curated for —
      </div>
      <div style={{
        position: 'absolute', left: 60, top: 158,
        fontFamily: DISPLAY, fontWeight: 500,
        fontSize: 90, color: CREAM, letterSpacing: '-0.025em', lineHeight: 1,
        opacity: Math.min(1, Math.max(0, (localTime - 0.2) / 0.6)),
      }}>
        Four categories.
      </div>

      {/* Grid */}
      <div style={{
        position: 'absolute', left: 60, right: 60, bottom: 110,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
      }}>
        {cats.map((c, i) => {
          const t = Math.max(0, Math.min(1, (localTime - 0.6 - i * 0.12) / 0.6));
          const eased = Easing.easeOutCubic(t);
          return (
            <div key={i} style={{
              opacity: eased,
              transform: `translateY(${(1 - eased) * 24}px)`,
              padding: 22,
              border: `0.5px solid ${GOLD_SOFT}`,
              background: `linear-gradient(180deg, rgba(209,176,90,.06) 0%, rgba(209,176,90,0) 100%)`,
              minHeight: 220,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 10, letterSpacing: '0.2em', color: GOLD,
              }}>— {c.ix}</div>
              <div>
                <div style={{
                  fontFamily: DISPLAY, fontStyle: 'italic',
                  fontSize: 34, color: CREAM, letterSpacing: '-0.01em',
                  marginBottom: 10,
                }}>{c.nm}</div>
                <div style={{
                  fontFamily: MONO, fontSize: 9, letterSpacing: '0.22em', color: CREAM_DIM,
                }}>{c.dn}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Scene 4 — Lockup (10 → 12) ────────────────────────────────────────────
function SceneLockup() {
  const { localTime, duration } = useSprite();
  const t = Math.min(1, localTime / 0.6);
  const eased = Easing.easeOutCubic(t);
  // Slow ken-burns: scale up gently
  const scale = 1 + 0.04 * (localTime / duration);

  // exit fade
  const exit = Math.max(0, (localTime - (duration - 0.4)) / 0.4);
  const op = (1 - exit) * eased;

  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      transform: `scale(${scale})`, transformOrigin: 'center',
      opacity: op,
    }}>
      {/* K crest */}
      <svg width="86" height="86" viewBox="0 0 80 80" fill="none" style={{ marginBottom: 28 }}>
        <circle cx="40" cy="40" r="38" stroke={GOLD} strokeWidth="0.8"/>
        <circle cx="40" cy="40" r="34" stroke={GOLD} strokeWidth="0.5" opacity="0.6"/>
        <circle cx="40" cy="9" r="1.4" fill={GOLD}/>
        <text x="40" y="51" textAnchor="middle" fontFamily={DISPLAY} fontSize="30" fontWeight="500" fill={GOLD}>K</text>
        <path d="M 16 56 Q 40 76 64 56" stroke={GOLD} strokeWidth="0.6" fill="none" opacity="0.7"/>
      </svg>

      <div style={{
        fontFamily: MONO, fontSize: 11, letterSpacing: '0.32em', color: GOLD,
        marginBottom: 18,
      }}>
        — K-TRADING / 01
      </div>
      <div style={{
        fontFamily: DISPLAY, fontWeight: 500,
        fontSize: 92, color: CREAM, letterSpacing: '-0.025em', lineHeight: 1,
        textAlign: 'center',
      }}>
        Premium <span style={{ color: GOLD, fontStyle: 'italic' }}>FMCG</span>
      </div>
      <div style={{
        fontFamily: DISPLAY, fontWeight: 400, fontStyle: 'italic',
        fontSize: 56, color: CREAM_DIM, letterSpacing: '-0.01em',
        marginTop: 6,
      }}>
        & imported goods.
      </div>

      {/* line */}
      <div style={{
        width: 60, height: 1, background: GOLD, marginTop: 32, marginBottom: 18,
      }}/>
      <div style={{
        fontFamily: MONO, fontSize: 10, letterSpacing: '0.32em', color: CREAM_DIM,
      }}>
        VIETNAM · KOREA · EUROPE · JAPAN
      </div>
    </div>
  );
}

// ── Background grain layer ────────────────────────────────────────────────
function Grain() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='.9' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
      opacity: .55, mixBlendMode: 'screen', pointerEvents: 'none',
    }}/>
  );
}

// ── Background gradient layer ─────────────────────────────────────────────
function Backdrop() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `
        radial-gradient(70% 60% at 80% 25%, rgba(209,176,90,.18), transparent 70%),
        radial-gradient(80% 60% at 10% 90%, rgba(15,20,18,.85), transparent 70%),
        linear-gradient(180deg, ${SLATE_2} 0%, ${SLATE} 100%)
      `,
    }}/>
  );
}

function App() {
  return (
    <Stage
      width={1280}
      height={800}
      duration={12}
      background={SLATE}
      loop={true}
      autoplay={true}
      persistKey="fmcg-anim"
    >
      <Backdrop/>
      <Grain/>

      <Sprite start={0} end={3.6}>
        <SceneMap/>
      </Sprite>
      <Sprite start={3.6} end={7.0}>
        <SceneContainer/>
      </Sprite>
      <Sprite start={7.0} end={10.0}>
        <SceneCategories/>
      </Sprite>
      <Sprite start={10.0} end={12.0}>
        <SceneLockup/>
      </Sprite>

      <Chrome/>
    </Stage>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
