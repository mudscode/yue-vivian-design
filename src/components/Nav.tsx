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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-colors duration-300 ${
        isHome ? 'bg-transparent' : 'bg-ink border-b border-gold/20'
      }`}
    >
      <Link to="/" className="flex items-center gap-3">
        <img src="/assets/shield.png" alt="Yue Vivian" className="h-8 w-auto" />
      </Link>

      <ul className="flex items-center gap-8 list-none m-0 p-0">
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className={`text-sm tracking-widest uppercase transition-colors duration-200 no-underline ${
                pathname === to
                  ? 'text-gold-light'
                  : 'text-gold hover:text-gold-light'
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
