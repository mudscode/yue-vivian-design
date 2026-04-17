import { Link } from 'react-router-dom'

/*
  Shield PNG geometry (784 × 1168 px, RGBA):
    – Transparent top  : y = 0   → 280  (24% of height)
    – Gold shield      : y = 280 → 760  (41% of height, 480 px natural)
    – Transparent bot  : y = 760 → 1168 (35% of height)

  Container shows only the gold shield:
    aspectRatio = '784 / 480'  →  height = width × (480/784)

  To shift the PNG up so its gold-top aligns with container-top:
    marginTop = -(transparent_top / PNG_width) × 100%
             = -(280/784) × 100%  ≈  -35.7%  →  use '-36%'

  Result: gold shield fills the container top-to-bottom exactly.
  Glow rings centred at top:50% of container = centre of gold shield. ✓
*/

export function Home(): React.JSX.Element {
  return (
    <>
      {/* ─────────────── HERO ─────────────── */}
      <section
        className="relative min-h-svh flex flex-col overflow-hidden"
        style={{ background: '#080605', isolation: 'isolate' }}
      >

        {/* Layer 1 — warm ambient core */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 150% 115% at 55% 45%,
                rgba(58,38,18,0.70) 0%,
                rgba(28,18,10,0.30) 42%,
                transparent 78%)`
          }}
        />

        {/* Layer 2 — diagonal silk folds (broad, soft highlights) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(118deg,
                transparent 0%,
                rgba(210,160,72,0) 22%,
                rgba(225,175,85,0.16) 42%,
                rgba(250,200,110,0.28) 50%,
                rgba(225,175,85,0.16) 58%,
                rgba(210,160,72,0) 78%,
                transparent 100%),
              linear-gradient(142deg,
                transparent 8%,
                rgba(170,125,48,0) 35%,
                rgba(195,145,62,0.13) 52%,
                rgba(170,125,48,0) 68%,
                transparent 96%),
              linear-gradient(104deg,
                transparent 32%,
                rgba(150,105,38,0) 50%,
                rgba(180,130,52,0.09) 58%,
                rgba(150,105,38,0) 66%,
                transparent 84%)`
          }}
        />

        {/* Layer 3 — top-right window light: warm throw + bright specular */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 85% 70% at 96% -12%,
                rgba(245,190,90,0.55) 0%,
                rgba(210,155,65,0.28) 22%,
                rgba(165,120,45,0.12) 45%,
                transparent 70%),
              radial-gradient(circle 180px at 92% 3%,
                rgba(255,235,175,0.58) 0%,
                rgba(255,225,150,0.22) 35%,
                rgba(255,210,130,0.06) 60%,
                transparent 80%),
              radial-gradient(ellipse 45% 90% at 102% 40%,
                rgba(215,160,70,0.12) 0%,
                transparent 55%)`
          }}
        />

        {/* Layer 3b — sharp diagonal light beams from upper-right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(132deg,
                transparent 0%,
                transparent 40%,
                rgba(255,235,175,0.12) 46%,
                rgba(255,245,200,0.26) 49%,
                rgba(255,235,175,0.12) 52%,
                transparent 58%,
                transparent 100%),
              linear-gradient(126deg,
                transparent 0%,
                transparent 32%,
                rgba(255,228,165,0.08) 38%,
                rgba(255,238,185,0.16) 41%,
                rgba(255,228,165,0.08) 44%,
                transparent 50%,
                transparent 100%),
              linear-gradient(138deg,
                transparent 0%,
                transparent 56%,
                rgba(255,222,158,0.06) 60%,
                rgba(255,232,178,0.12) 62%,
                rgba(255,222,158,0.06) 64%,
                transparent 68%,
                transparent 100%)`
          }}
        />

        {/* Layer 4 — corner vignette deepens the lower-left, anchors composition */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 110% 100% at 35% 65%,
                transparent 32%,
                rgba(0,0,0,0.35) 72%,
                rgba(0,0,0,0.62) 100%)`
          }}
        />

        {/* ──── Shield + clouds (square composition) ──── */}
        <div className="relative flex-1 flex items-center justify-center pt-20 pb-0">
          <div
            className="relative"
            style={{
              width: 'clamp(420px, 74vw, 780px)',
              aspectRatio: '1 / 1',
            }}
          >

            {/* Upper-left cloud — tucks behind shield's top-left edge */}
            <img
              src="/assets/cloud-upper-left.png"
              alt=""
              aria-hidden="true"
              className="cloud-gold absolute select-none"
              style={{
                width: '30%',
                top: '20%',
                left: '6%',
                zIndex: 5,
              }}
            />

            {/* Upper-right cloud — tucks behind shield's top-right edge */}
            <img
              src="/assets/cloud-upper-right.png"
              alt=""
              aria-hidden="true"
              className="cloud-gold absolute select-none"
              style={{
                width: '30%',
                top: '20%',
                right: '6%',
                zIndex: 5,
              }}
            />

            {/* Lower-left cloud — tucks behind shield's bottom-left edge */}
            <img
              src="/assets/cloud-bottom-left.png"
              alt=""
              aria-hidden="true"
              className="cloud-gold absolute select-none"
              style={{
                width: '30%',
                bottom: '20%',
                left: '6%',
                zIndex: 5,
              }}
            />

            {/* Lower-right cloud — tucks behind shield's bottom-right edge */}
            <img
              src="/assets/cloud-bottom-right.png"
              alt=""
              aria-hidden="true"
              className="cloud-gold absolute select-none"
              style={{
                width: '30%',
                bottom: '20%',
                right: '6%',
                zIndex: 5,
              }}
            />

            {/* Shield wrapper — centred in the square */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '76%',
                aspectRatio: '707 / 628',
                zIndex: 10,
                perspective: '1400px',
              }}
            >
              <img
                src="/assets/shield-cropped.png"
                alt="Yue Vivian crest"
                className="shield-animate w-full block"
              />
            </div>

          </div>
        </div>

        {/* ──── Text section ──── */}
        <div
          className="relative z-10 pb-14 pt-10 px-6 text-center"
          style={{
            background: `linear-gradient(to bottom,
              transparent 0%,
              rgba(13,10,7,0.10) 10%,
              rgba(13,10,7,0.35) 22%,
              rgba(13,10,7,0.65) 34%,
              rgba(13,10,7,0.88) 48%,
              rgba(13,10,7,0.98) 62%,
              #0d0a07 78%)`
          }}
        >
          {/* YUE eyebrow */}
          <div className="flex items-center justify-center mb-5">
            <span className="font-cinzel uppercase" style={{ fontSize: '11px', letterSpacing: '0.55em', color: 'rgba(212,175,106,0.85)' }}>Yue</span>
          </div>

          {/* Company name */}
          <h1
            className="font-cinzel font-black uppercase mx-auto"
            style={{
              fontSize: 'clamp(30px, 6vw, 72px)',
              letterSpacing: '0.10em',
              lineHeight: 1.1,
              marginBottom: '18px',
              maxWidth: '840px',
              color: '#d4af6a',
            }}
          >
            Yue Vivian<br />International Limited
          </h1>

          {/* Subtitle */}
          <p
            className="font-sans mx-auto"
            style={{
              fontSize: 'clamp(13px, 1.4vw, 17px)',
              color: 'rgba(200,184,154,0.72)',
              letterSpacing: '0.03em',
              lineHeight: 1.75,
              maxWidth: '420px',
              marginBottom: '30px',
            }}
          >
            A Hong Kong registered company providing<br />
            perspectives on international markets.
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-block font-cinzel uppercase transition-colors duration-300 hover:bg-gold hover:text-ink"
            style={{
              border: '1px solid #d4af6a',
              color: '#d4af6a',
              fontSize: 'clamp(11px, 1vw, 13px)',
              letterSpacing: '0.22em',
              padding: '13px 44px',
            }}
          >
            Get in Touch
          </Link>
        </div>

      </section>

      {/* ─────────────── INTRO BAND ─────────────── */}
      <section
        className="py-20 md:py-24 px-8 text-center"
        style={{ background: '#0d0a07', borderTop: '1px solid rgba(212,175,106,0.10)' }}
      >
        <div className="max-w-2xl mx-auto">
          {/* Eyebrow */}
          <p
            className="font-cinzel uppercase mb-6"
            style={{
              fontSize: '14px',
              letterSpacing: '0.45em',
              color: 'rgba(212,175,106,0.85)',
            }}
          >
            Our Approach
          </p>

          {/* Accent rule */}
          <div
            className="mx-auto mb-8"
            style={{
              width: '48px',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(212,175,106,0.55), transparent)',
            }}
          />

          {/* Body */}
          <p
            className="font-sans mx-auto"
            style={{
              fontSize: 'clamp(16px, 1.55vw, 19px)',
              color: 'rgba(220,205,175,0.82)',
              lineHeight: 1.75,
              letterSpacing: '0.01em',
              maxWidth: '640px',
            }}
          >
            Backed by over three decades of combined international business experience,
            we engage selectively with qualified institutional counterparts through
            direct and confidential channels.
          </p>
        </div>
      </section>
    </>
  )
}
