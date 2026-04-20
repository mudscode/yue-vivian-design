import type { ReactNode } from 'react'

type CloudPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'mid-left'
  | 'mid-right'
type CornerPosition = 'tl' | 'tr' | 'bl' | 'br'

interface PageFrameProps {
  children: ReactNode
  clouds: readonly CloudPosition[]
}

const cloudSrc: Record<CloudPosition, string> = {
  'top-left': '/assets/cloud-upper-left.png',
  'top-right': '/assets/cloud-upper-right.png',
  'bottom-left': '/assets/cloud-bottom-left.png',
  'bottom-right': '/assets/cloud-bottom-right.png',
  'mid-left': '/assets/cloud-upper-left.png',
  'mid-right': '/assets/cloud-upper-right.png',
}

const cloudPositionStyle: Record<CloudPosition, React.CSSProperties> = {
  'top-left': { top: '6%', left: '7%' },
  'top-right': { top: '6%', right: '7%' },
  'bottom-left': { bottom: '6%', left: '7%' },
  'bottom-right': { bottom: '6%', right: '7%' },
  'mid-left': { top: '22%', left: '7%' },
  'mid-right': { top: '22%', right: '7%' },
}

const cornerCapStyle: Record<CornerPosition, React.CSSProperties> = {
  tl: { top: '-1px', left: '-1px', borderTopLeftRadius: '3px', borderBottomRightRadius: '22px' },
  tr: { top: '-1px', right: '-1px', borderTopRightRadius: '3px', borderBottomLeftRadius: '22px' },
  bl: { bottom: '-1px', left: '-1px', borderBottomLeftRadius: '3px', borderTopRightRadius: '22px' },
  br: { bottom: '-1px', right: '-1px', borderBottomRightRadius: '3px', borderTopLeftRadius: '22px' },
}

const corners: readonly CornerPosition[] = ['tl', 'tr', 'bl', 'br']

export function PageFrame({ children, clouds }: PageFrameProps): React.JSX.Element {
  return (
    <main className="min-h-svh bg-ink pt-28 pb-20 px-6 md:px-10">
      <div
        className="relative mx-auto flex flex-col"
        style={{
          width: '100%',
          maxWidth: 'clamp(360px, 62vw, 620px)',
          minHeight: '520px',
          border: '1px solid rgba(212,175,106,0.55)',
          padding: 'clamp(44px, 7vw, 72px) clamp(18px, 4.5vw, 32px)',
        }}
      >
        {/* Inner thin border — creates the double-line frame look */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            top: '10px',
            right: '10px',
            bottom: '10px',
            left: '10px',
            border: '1px solid rgba(212,175,106,0.28)',
          }}
        />

        {/* Decorative corner caps bridging the double borders */}
        {corners.map((pos) => (
          <div
            key={`cap-${pos}`}
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              width: '22px',
              height: '22px',
              background: 'rgba(212,175,106,0.85)',
              boxShadow: '0 0 6px rgba(212,175,106,0.18)',
              ...cornerCapStyle[pos],
            }}
          />
        ))}

        {/* Corner clouds — mid-* positions hide on mobile to avoid overlapping content */}
        {clouds.map((pos) => {
          const isMid = pos === 'mid-left' || pos === 'mid-right'
          return (
            <img
              key={pos}
              src={cloudSrc[pos]}
              alt=""
              aria-hidden="true"
              className={`cloud-gold absolute select-none pointer-events-none ${isMid ? 'hidden md:block' : ''}`}
              style={{
                width: 'clamp(78px, 16%, 160px)',
                ...cloudPositionStyle[pos],
              }}
            />
          )
        })}

        {/* Content — vertically centered inside the frame */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </main>
  )
}
