export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-ink border-t border-gold/20 py-12 px-6 text-center">
      <div
        className="mx-auto"
        style={{ width: '100%', maxWidth: 'clamp(360px, 62vw, 820px)' }}
      >
        <p className="text-gold text-base tracking-widest uppercase mb-4">
          <span
            aria-hidden="true"
            style={{
              fontFamily: "'ZCOOL XiaoWei', serif",
              fontSize: '1.35em',
              lineHeight: 1,
              letterSpacing: 0,
              marginRight: '0.4em',
              verticalAlign: '-0.08em',
            }}
          >
            福
          </span>
          Yue Vivian International Limited
        </p>
        <p className="text-white/85 text-sm mb-1">
          Hong Kong Registered Company
        </p>
        <p className="text-white/70 text-sm mt-5 leading-relaxed">
          This website is provided for general informational purposes only. It does not constitute
          any form of offer, solicitation, or professional advice. All communications are private
          and confidential.
        </p>
        <p className="text-white/55 text-sm mt-7">
          © {new Date().getFullYear()} Yue Vivian International Limited
        </p>
      </div>
    </footer>
  )
}
