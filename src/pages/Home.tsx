import { Link } from 'react-router-dom'

export function Home(): React.JSX.Element {
  return (
    <>
      {/* ─────────────── HERO ─────────────── */}
      <section
        className="relative min-h-svh flex flex-col lg:justify-center overflow-hidden"
        style={{ background: '#080605', isolation: 'isolate' }}
      >

        {/* Subtle warm highlight from upper-right — kept soft so the dark base dominates */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 92% -8%,
                rgba(200,150,60,0.18) 0%,
                rgba(150,110,45,0.08) 30%,
                transparent 60%)`
          }}
        />

        {/* Corner vignette for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 110% 100% at 35% 70%,
                transparent 35%,
                rgba(0,0,0,0.45) 75%,
                rgba(0,0,0,0.75) 100%)`
          }}
        />

        {/* ──── Hero intro video — plays once, freezes on last frame ──── */}
        <div className="relative flex-1 lg:flex-none flex items-center justify-center pt-20 lg:pt-[66px] pb-0">
          {/* Mobile — edge-to-edge, taller aspect */}
          <video
            src="/assets/hero-intro-mobile.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-label="Yue Vivian crest animation"
            className="w-full h-auto block lg:hidden"
          />
          {/* Desktop — clamped width */}
          <div
            className="relative hidden lg:block"
            style={{ width: 'clamp(360px, 62vw, 620px)' }}
          >
            <video
              src="/assets/hero-intro.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-label="Yue Vivian crest animation"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* ──── Text section ──── */}
        <div
          className="relative z-10 pb-14 pt-10 lg:pt-10 lg:pb-6 px-6 text-center"
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
            <span className="font-cinzel uppercase" style={{ fontSize: '12px', letterSpacing: '0.55em', color: 'rgba(212,175,106,0.85)' }}>Yue</span>
          </div>

          {/* Company name */}
          <h1
            className="font-cinzel font-semibold uppercase mx-auto"
            style={{
              fontSize: 'clamp(22px, 3.4vw, 38px)',
              letterSpacing: '0.12em',
              lineHeight: 1.15,
              marginBottom: '18px',
              maxWidth: 'clamp(360px, 62vw, 620px)',
              color: '#d4af6a',
            }}
          >
            Yue Vivian<br />International Limited
          </h1>

          {/* Subtitle */}
          <p
            className="font-sans mx-auto"
            style={{
              fontSize: 'clamp(15px, 1.4vw, 17px)',
              color: 'rgba(255,255,255,0.85)',
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
            className="cta-gold inline-block font-cinzel uppercase"
            style={{
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
        className="py-20 md:py-24 px-6 text-center"
        style={{ background: '#0d0a07', borderTop: '1px solid rgba(212,175,106,0.10)' }}
      >
        <div
          className="mx-auto"
          style={{ width: '100%', maxWidth: 'clamp(360px, 62vw, 620px)' }}
        >
          {/* Eyebrow */}
          <p
            className="font-cinzel uppercase mb-6"
            style={{
              fontSize: '12px',
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
              color: 'rgba(255,255,255,0.88)',
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
