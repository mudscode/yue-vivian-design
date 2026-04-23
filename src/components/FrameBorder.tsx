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
const OUTER_OFFSET = `calc(${CORNER_SIZE} * 0.207)`
const OUTER_THICK = `calc(${CORNER_SIZE} * 0.032)`
const INNER_OFFSET = `calc(${CORNER_SIZE} * 0.279)`
const INNER_THICK = `max(1px, calc(${CORNER_SIZE} * 0.014))`
const LINE_EXTEND = `calc(${CORNER_SIZE} * 0.03)`
const LINE_EDGE = `calc(${CORNER_SIZE} - ${LINE_EXTEND})`
const FADE = `calc(${CORNER_SIZE} * 0.04)`
const HORIZ_LINE_BG = `linear-gradient(to right, transparent 0, ${FRAME_GOLD} ${FADE}, ${FRAME_GOLD} calc(100% - ${FADE}), transparent 100%)`
const VERT_LINE_BG = `linear-gradient(to bottom, transparent 0, ${FRAME_GOLD} ${FADE}, ${FRAME_GOLD} calc(100% - ${FADE}), transparent 100%)`

const frameShellStyle: CSSProperties = {
  width: '100%',
  maxWidth: '1120px',
  minHeight: '520px',
  padding: `calc(${INNER_OFFSET} + clamp(22px, 3.4vw, 40px)) calc(${INNER_OFFSET} + clamp(18px, 2.6vw, 32px))`,
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
            left: LINE_EDGE,
            right: LINE_EDGE,
            height: OUTER_THICK,
            background: HORIZ_LINE_BG,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            bottom: OUTER_OFFSET,
            left: LINE_EDGE,
            right: LINE_EDGE,
            height: OUTER_THICK,
            background: HORIZ_LINE_BG,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: LINE_EDGE,
            bottom: LINE_EDGE,
            left: OUTER_OFFSET,
            width: OUTER_THICK,
            background: VERT_LINE_BG,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: LINE_EDGE,
            bottom: LINE_EDGE,
            right: OUTER_OFFSET,
            width: OUTER_THICK,
            background: VERT_LINE_BG,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: INNER_OFFSET,
            left: LINE_EDGE,
            right: LINE_EDGE,
            height: INNER_THICK,
            background: HORIZ_LINE_BG,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            bottom: INNER_OFFSET,
            left: LINE_EDGE,
            right: LINE_EDGE,
            height: INNER_THICK,
            background: HORIZ_LINE_BG,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: LINE_EDGE,
            bottom: LINE_EDGE,
            left: INNER_OFFSET,
            width: INNER_THICK,
            background: VERT_LINE_BG,
            zIndex: 1,
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            top: LINE_EDGE,
            bottom: LINE_EDGE,
            right: INNER_OFFSET,
            width: INNER_THICK,
            background: VERT_LINE_BG,
            zIndex: 1,
          }}
        />

        {corners.map((pos) => (
          <div
            key={pos}
            aria-hidden="true"
            className="absolute pointer-events-none z-20"
            style={{
              width: CORNER_SIZE,
              height: CORNER_SIZE,
              backgroundColor: FRAME_GOLD,
              WebkitMaskImage: `url(${CORNER_SRC})`,
              maskImage: `url(${CORNER_SRC})`,
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
              ...cornerStyle[pos],
            }}
          />
        ))}

        <div className="relative z-10 flex-1 flex flex-col justify-center">{children}</div>
      </div>
    </main>
  )
}
