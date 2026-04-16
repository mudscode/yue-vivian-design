import { Link } from 'react-router-dom'

export function Home(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-svh bg-ink flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Radial glow behind shield */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        </div>

        {/* Shield + clouds */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8 mb-10">
          <img
            src="/assets/clouds-left.png"
            alt=""
            className="clouds-left-animate w-24 md:w-36 opacity-90 select-none"
          />
          <img
            src="/assets/shield.png"
            alt="Yue Vivian crest"
            className="shield-animate w-40 md:w-56 select-none"
          />
          <img
            src="/assets/clouds-right.png"
            alt=""
            className="clouds-right-animate w-24 md:w-36 opacity-90 select-none"
          />
        </div>

        {/* Text content */}
        <div className="text-center z-10">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">For</p>
          <h1 className="text-gold-light font-bold tracking-widest uppercase text-2xl md:text-4xl lg:text-5xl leading-tight mb-5">
            Yue Vivian<br />International Limited
          </h1>
          <p className="text-parchment text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
            A Hong Kong registered company providing<br className="hidden sm:block" />
            perspectives on international markets.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-gold text-gold text-xs tracking-[0.25em] uppercase px-10 py-3 transition-colors duration-250 hover:bg-gold hover:text-ink"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Short intro */}
      <section className="bg-ink-soft border-t border-gold/15 py-16 px-8">
        <p className="text-parchment/80 text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto">
          Backed by over three decades of combined international business experience, we engage
          selectively with qualified institutional counterparts through direct and confidential channels.
        </p>
      </section>
    </>
  )
}
