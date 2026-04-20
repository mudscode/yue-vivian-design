import { PageFrame } from '../components/PageFrame'

export function AboutUs(): React.JSX.Element {
  return (
    <PageFrame clouds={['top-right', 'bottom-left']}>
      <div className="flex flex-col items-center text-center">
        <h1
          className="font-cinzel uppercase"
          style={{
            fontSize: 'clamp(40px, 6.5vw, 72px)',
            letterSpacing: '0.08em',
            color: '#e8c87a',
            marginBottom: '40px',
          }}
        >
          About Us
        </h1>

        <div
          className="font-sans mx-auto"
          style={{
            maxWidth: '440px',
            color: 'rgba(255,255,255,0.88)',
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
          }}
        >
          <p style={{ marginBottom: '28px' }}>
            <span style={{ color: '#ffffff', fontWeight: 500 }}>YUE VIVIAN INTERNATIONAL LIMITED</span>{' '}
            is a Hong Kong registered company with over three decades of combined international
            business experience in the precious metals sector.
          </p>
          <p>
            We provide discreet advisory services connecting qualified buyers with trusted sellers
            in global markets.
          </p>
        </div>
      </div>
    </PageFrame>
  )
}
