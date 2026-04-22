import type { JSX } from 'react'
import { FrameBorder } from '../components/FrameBorder'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export function MarketPerspectives(): JSX.Element {
  useDocumentMeta({
    title: 'Market Perspectives · Yue Vivian International Limited',
    description:
      'General observations on global economic trends and market developments, shared for informational purposes.',
    canonicalPath: '/market-perspectives',
  })

  return (
    <FrameBorder>
      <div className="flex flex-col items-center text-center">
        <h1
          className="font-cinzel uppercase"
          style={{
            fontSize: 'clamp(30px, 4.4vw, 48px)',
            letterSpacing: '0.08em',
            color: '#e8c87a',
            lineHeight: 1.15,
            marginBottom: '40px',
          }}
        >
          Market<br />Perspectives
        </h1>

        <div
          className="font-sans mx-auto"
          style={{
            maxWidth: '700px',
            color: 'rgba(255,255,255,0.88)',
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
          }}
        >
          <p style={{ marginBottom: '24px' }}>
            We occasionally share general observations on global economic trends and market
            developments.
          </p>
          <p>
            This section is intended for informational purposes only and does not constitute
            financial, investment, or professional advice of any kind. All content reflects
            publicly available information and general commentary.
          </p>
        </div>
      </div>
    </FrameBorder>
  )
}
