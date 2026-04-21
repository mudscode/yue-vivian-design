import { FrameBorder } from '../components/FrameBorder'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export function AboutUs(): React.JSX.Element {
  useDocumentMeta({
    title: 'About Us · Yue Vivian International Limited',
    description:
      'Yue Vivian International Limited is a Hong Kong registered company focused on international business matters, backed by over three decades of combined experience.',
    canonicalPath: '/about',
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
            marginBottom: '40px',
          }}
        >
          About Us
        </h1>

        <div
          className="font-sans mx-auto"
          style={{
            maxWidth: '620px',
            color: 'rgba(255,255,255,0.88)',
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
          }}
        >
          <p style={{ marginBottom: '24px' }}>
            <span style={{ color: '#ffffff', fontWeight: 500 }}>YUE VIVIAN INTERNATIONAL LIMITED</span>{' '}
            is a Hong Kong registered company focused on international business matters.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Backed by over three decades of combined international business experience, we maintain
            a selective and discreet approach to engagement. We operate from Hong Kong and value
            long-term relationships built on trust, confidentiality, and professionalism.
          </p>
          <p>
            Our focus is on providing high-level perspectives to qualified institutional parties
            who seek thoughtful dialogue on broader market developments.
          </p>
        </div>
      </div>
    </FrameBorder>
  )
}
