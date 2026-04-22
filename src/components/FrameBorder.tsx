import type { JSX, ReactNode } from 'react'

interface FrameBorderProps {
  children: ReactNode
}

type CornerKey = 'tl' | 'tr' | 'bl' | 'br'

const cornerSrc: Record<CornerKey, string> = {
  tl: '/assets/frame/corner-tl.png',
  tr: '/assets/frame/corner-tr.png',
  bl: '/assets/frame/corner-bl.png',
  br: '/assets/frame/corner-br.png',
}

const cornerPositionStyle: Record<CornerKey, React.CSSProperties> = {
  tl: { top: '-1px', left: '-1px' },
  tr: { top: '-1px', right: '-1px' },
  bl: { bottom: '-1px', left: '-1px' },
  br: { bottom: '-1px', right: '-1px' },
}

const corners: readonly CornerKey[] = ['tl', 'tr', 'bl', 'br']

export function FrameBorder({ children }: FrameBorderProps): JSX.Element {
  return (
    <main className="min-h-svh bg-ink pt-28 pb-20 px-6 md:px-10">
      <div
        className="relative mx-auto flex flex-col"
        style={{
          width: '100%',
          maxWidth: 'clamp(360px, 62vw, 820px)',
          minHeight: '520px',
          border: '1px solid rgba(212,175,106,0.55)',
          padding: 'clamp(56px, 9vw, 96px) clamp(24px, 5vw, 40px)',
        }}
      >
        {corners.map((pos) => (
          <img
            key={pos}
            src={cornerSrc[pos]}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute select-none pointer-events-none"
            style={{
              width: 'clamp(56px, 11vw, 108px)',
              height: 'auto',
              ...cornerPositionStyle[pos],
            }}
          />
        ))}

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </main>
  )
}
