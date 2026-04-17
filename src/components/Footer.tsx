export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-ink border-t border-gold/20 py-12 px-8 text-center">
      <p className="text-gold text-base tracking-widest uppercase mb-4">
        Yue Vivian International Limited
      </p>
      <p className="text-parchment/60 text-sm mb-1">
        Hong Kong Registered Company
      </p>
      <p className="text-parchment/40 text-sm max-w-2xl mx-auto mt-5 leading-relaxed">
        This website is provided for general informational purposes only. It does not constitute
        any form of offer, solicitation, or professional advice. All communications are private
        and confidential.
      </p>
      <p className="text-parchment/30 text-sm mt-7">
        © {new Date().getFullYear()} Yue Vivian International Limited
      </p>
    </footer>
  )
}
