export function AboutUs(): React.JSX.Element {
  return (
    <main className="min-h-svh bg-ink pt-28 pb-20 px-8">
      <div className="max-w-2xl mx-auto">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Who We Are</p>
        <h1 className="text-gold-light font-bold tracking-widest uppercase text-3xl md:text-4xl mb-10">
          About Us
        </h1>
        <div className="w-12 h-px bg-gold mb-10" />
        <div className="space-y-6 text-parchment/80 text-sm md:text-base leading-relaxed">
          <p>
            YUE VIVIAN INTERNATIONAL LIMITED is a Hong Kong registered company focused on
            international business matters.
          </p>
          <p>
            Backed by over three decades of combined international business experience, we maintain
            a selective and discreet approach to engagement. We operate from Hong Kong and value
            long-term relationships built on trust, confidentiality, and professionalism.
          </p>
          <p>
            Our focus is on providing high-level perspectives to qualified institutional parties
            who seek thoughtful dialogue on broader market developments.
          </p>
        </div>
      </div>
    </main>
  )
}
