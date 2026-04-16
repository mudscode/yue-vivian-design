export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-ink border-t border-gold/20 py-10 px-8 text-center">
      <p className="text-gold text-sm tracking-widest uppercase mb-3">
        Yue Vivian International Limited
      </p>
      <p className="text-parchment/60 text-xs mb-1">
        Hong Kong Registered Company
      </p>
      <p className="text-parchment/40 text-xs max-w-xl mx-auto mt-4 leading-relaxed">
        This website is provided for general informational purposes only. It does not constitute
        any form of offer, solicitation, or professional advice. All communications are private
        and confidential.
      </p>
      <p className="text-parchment/30 text-xs mt-6">
        © {new Date().getFullYear()} Yue Vivian International Limited
      </p>
    </footer>
  )
}
