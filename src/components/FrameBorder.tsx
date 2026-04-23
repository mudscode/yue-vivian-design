import type { CSSProperties, JSX, ReactNode } from 'react'

interface FrameBorderProps {
  children: ReactNode
}

type CornerKey = 'tl' | 'tr' | 'bl' | 'br'

const CORNER_SRC = '/assets/frame/corner-tr.png'

const cornerStyle: Record<CornerKey, CSSProperties> = {
  tl: { top: 0, left: 0, transform: 'rotate(270deg)' },
  tr: { top: 0, right: 0, transform: 'rotate(0deg)' },
  bl: { bottom: 0, left: 0, transform: 'rotate(180deg)' },
  br: { bottom: 0, right: 0, transform: 'rotate(90deg)' },
}

const corners: readonly CornerKey[] = ['tl', 'tr', 'bl', 'br']

const FRAME_GOLD = '#c89d53'
const FRAME_BG = '#0d0a07'
const CORNER_SIZE = 'clamp(72px, 9vw, 110px)'
const OUTER_OFFSET = `calc(${CORNER_SIZE} * 0.209)`
const OUTER_THICK = `calc(${CORNER_SIZE} * 0.036)`
const INNER_OFFSET = `calc(${CORNER_SIZE} * 0.282)`
const INNER_THICK = `max(1px, calc(${CORNER_SIZE} * 0.014))`

const frameShellStyle: CSSProperties = {
  width: '100%',
  maxWidth: '1120px',
  minHeight: '520px',
  padding: `calc(${INNER_OFFSET} + clamp(12px, 2.4vw, 26px)) calc(${INNER_OFFSET} + clamp(6px, 1.4vw, 16px))`,
  boxSizing: 'border-box',
  backgroundColor: FRAME_BG,
}

export function FrameBorder({ children }: FrameBorderProps): JSX.Element {
  return (
    <main className="min-h-svh bg-ink pt-28 pb-20 px-3 sm:px-6 md:px-10">
      <div className="relative mx-auto flex flex-col" style={frameShellStyle}>
        <div
          className="absolute pointer-events-none"
          style={{
            top: OUTER_OFFSET,
            left: CORNER_SIZE,
            right: CORNER_SIZE,
            height: OUTER_THICK,
            background: FRAME_GOLD,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            bottom: OUTER_OFFSET,
            left: CORNER_SIZE,
            right: CORNER_SIZE,
            height: OUTER_THICK,
            background: FRAME_GOLD,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: CORNER_SIZE,
            bottom: CORNER_SIZE,
            left: OUTER_OFFSET,
            width: OUTER_THICK,
            background: FRAME_GOLD,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: CORNER_SIZE,
            bottom: CORNER_SIZE,
            right: OUTER_OFFSET,
            width: OUTER_THICK,
            background: FRAME_GOLD,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: INNER_OFFSET,
            left: CORNER_SIZE,
            right: CORNER_SIZE,
            height: INNER_THICK,
            background: FRAME_GOLD,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            bottom: INNER_OFFSET,
            left: CORNER_SIZE,
            right: CORNER_SIZE,
            height: INNER_THICK,
            background: FRAME_GOLD,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: CORNER_SIZE,
            bottom: CORNER_SIZE,
            left: INNER_OFFSET,
            width: INNER_THICK,
            background: FRAME_GOLD,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: CORNER_SIZE,
            bottom: CORNER_SIZE,
            right: INNER_OFFSET,
            width: INNER_THICK,
            background: FRAME_GOLD,
            zIndex: 1,
          }}
        />

        {corners.map((pos) => (
          <img
            key={pos}
            src={CORNER_SRC}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute select-none pointer-events-none z-20"
            style={{
              width: CORNER_SIZE,
              height: CORNER_SIZE,
              ...cornerStyle[pos],
            }}
          />
        ))}

        <div className="relative z-10 flex-1 flex flex-col justify-center">{children}</div>
      </div>
    </main>
  )
}
