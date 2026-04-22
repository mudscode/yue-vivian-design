import { Fragment, useEffect, useState, type JSX } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavLink {
  label: string
  to: string
}

const links: readonly NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Market Perspectives', to: '/market-perspectives' },
  { label: 'Contact', to: '/contact' },
]

const linkInactive = 'rgba(212,175,106,0.78)'
const linkActive = '#f5d78e'
const goldMuted = 'rgba(212,175,106,0.9)'
const drawerBorder = 'rgba(212,175,106,0.18)'

export function Nav(): JSX.Element {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect((): (() => void) => {
    function handleScroll(): void {
      setScrolled(window.scrollY > 4)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return (): void => window.removeEventListener('scroll', handleScroll)
  }, [])

  function closeDrawer(): void {
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-[background-color,border-color] duration-200 ${
          scrolled
            ? 'bg-ink border-b border-gold/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div
          className="relative flex items-center justify-between mx-auto"
          style={{ width: '100%', maxWidth: 'clamp(360px, 62vw, 820px)' }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={closeDrawer}
            className="no-underline leading-none select-none"
            style={{
              fontFamily: "'ZCOOL XiaoWei', serif",
              fontSize: '34px',
              lineHeight: 1,
              color: goldMuted,
            }}
          >
            福
          </Link>

          {/* Desktop links — each link and separator is its own flex child so justify-between spreads them evenly */}
          {links.map(({ label, to }, idx) => (
            <Fragment key={to}>
              {idx > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden md:inline-block select-none"
                  style={{
                    color: 'rgba(212,175,106,0.35)',
                    fontSize: '15px',
                    lineHeight: 1,
                  }}
                >
                  |
                </span>
              )}
              <Link
                to={to}
                className="hidden md:inline-block tracking-wide transition-colors duration-200 no-underline"
                style={{
                  fontSize: '15px',
                  letterSpacing: '0.03em',
                  color: pathname === to ? linkActive : linkInactive,
                }}
              >
                {label}
              </Link>
            </Fragment>
          ))}

          {/* Mobile hamburger (far right) */}
          <button
            type="button"
            onClick={(): void => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="md:hidden flex flex-col items-end gap-[5px] p-2 cursor-pointer bg-transparent border-0"
          >
            <span className="block h-[2px] w-6" style={{ background: goldMuted }} />
            <span className="block h-[2px] w-6" style={{ background: goldMuted }} />
            <span className="block h-[2px] w-6" style={{ background: goldMuted }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        onClick={closeDrawer}
        className={`md:hidden fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-60 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[80vw] transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: '#0d0a07',
          borderRight: `1px solid ${drawerBorder}`,
        }}
        aria-hidden={!isOpen}
      >
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: drawerBorder }}
        >
          <span
            className="select-none leading-none"
            style={{
              fontFamily: "'ZCOOL XiaoWei', serif",
              fontSize: '34px',
              color: goldMuted,
            }}
          >
            福
          </span>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close menu"
            className="p-2 cursor-pointer bg-transparent border-0"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={goldMuted} strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        <ul className="list-none m-0 p-0 mt-3">
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={closeDrawer}
                className="block px-6 py-4 no-underline transition-colors duration-200"
                style={{
                  fontSize: '17px',
                  letterSpacing: '0.04em',
                  color: pathname === to ? linkActive : linkInactive,
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
