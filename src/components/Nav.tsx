import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Market Perspectives', to: '/market-perspectives' },
  { label: 'Contact', to: '/contact' },
]

export function Nav(): React.JSX.Element {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-colors duration-300 ${
        isHome ? 'bg-transparent' : 'bg-ink border-b border-gold/20'
      }`}
    >
      {/* Logo: 福 character */}
      <Link
        to="/"
        className="text-gold no-underline leading-none select-none"
        style={{ fontFamily: "'ZCOOL XiaoWei', serif", fontSize: '48px', lineHeight: 1 }}
      >
        福
      </Link>

      {/* Nav links with | separators */}
      <ul className="flex items-center list-none m-0 p-0">
        {links.map(({ label, to }, i) => (
          <li key={to} className="flex items-center">
            {i > 0 && (
              <span className="text-white/30 mx-4 text-sm select-none">|</span>
            )}
            <Link
              to={to}
              className={`text-sm tracking-wide transition-colors duration-200 no-underline ${
                pathname === to
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
