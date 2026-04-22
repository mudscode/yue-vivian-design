import type { JSX } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FrameBorder } from '../components/FrameBorder'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export function NotFound(): JSX.Element {
  const { pathname } = useLocation()
  useDocumentMeta({
    title: 'Page Not Found · Yue Vivian International Limited',
    description: 'The page you are looking for could not be found.',
    canonicalPath: pathname,
    noindex: true,
  })

  return (
    <FrameBorder>
      <div className="flex flex-col items-center text-center">
        <p
          className="font-cinzel uppercase"
          style={{
            fontSize: '12px',
            letterSpacing: '0.45em',
            color: 'rgba(212,175,106,0.85)',
            marginBottom: '18px',
          }}
        >
          404
        </p>

        <h1
          className="font-cinzel uppercase"
          style={{
            fontSize: 'clamp(26px, 3.8vw, 42px)',
            letterSpacing: '0.08em',
            color: '#e8c87a',
            lineHeight: 1.2,
            marginBottom: '28px',
          }}
        >
          Page Not Found
        </h1>

        <p
          className="font-sans mx-auto"
          style={{
            maxWidth: '520px',
            color: 'rgba(255,255,255,0.88)',
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
            marginBottom: '40px',
          }}
        >
          The page you are looking for is not available, or may have been moved.
        </p>

        <Link
          to="/"
          className="cta-gold inline-block font-cinzel uppercase"
          style={{
            fontSize: 'clamp(11px, 1vw, 13px)',
            letterSpacing: '0.22em',
            padding: '13px 44px',
          }}
        >
          Return Home
        </Link>
      </div>
    </FrameBorder>
  )
}
