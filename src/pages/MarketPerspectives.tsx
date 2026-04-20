import { PageFrame } from '../components/PageFrame'

export function MarketPerspectives(): React.JSX.Element {
  return (
    <PageFrame clouds={['top-left', 'top-right', 'bottom-left']}>
      <div className="flex flex-col items-center text-center">
        <h1
          className="font-cinzel uppercase"
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
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
            maxWidth: '460px',
            color: 'rgba(255,255,255,0.88)',
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
          }}
        >
          <p style={{ marginBottom: '28px' }}>
            Current insights on international precious metals markets and opportunities for
            institutional and high-net-worth clients.
          </p>
          <p>
            Our team monitors global supply chains, regulatory developments in Asia, and
            macroeconomic events affecting gold and related assets.
          </p>
        </div>
      </div>
    </PageFrame>
  )
}
