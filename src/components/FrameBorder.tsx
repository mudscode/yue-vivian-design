import type { CSSProperties, JSX, ReactNode } from 'react'

interface FrameBorderProps {
  children: ReactNode
}

const frameBorderWidth = 'clamp(28px, 4.8vw, 52px)'
const frameReferenceUrl = '/assets/frame/frame-reference.jpg'

const frameShellStyle: CSSProperties = {
  width: '100%',
  maxWidth: '1120px',
  minHeight: '520px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderWidth: frameBorderWidth,
  borderImageSource: `url(${frameReferenceUrl})`,
  borderImageSlice: '74 fill',
  borderImageWidth: '1',
  borderImageRepeat: 'stretch',
  padding: `calc(${frameBorderWidth} + clamp(10px, 2.2vw, 24px)) calc(${frameBorderWidth} + clamp(2px, 1.2vw, 14px))`,
  boxSizing: 'border-box',
  backgroundColor: '#0d0a07',
}

export function FrameBorder({ children }: FrameBorderProps): JSX.Element {
  return (
    <main className="min-h-svh bg-ink pt-28 pb-20 px-3 sm:px-6 md:px-10">
      <div
        className="mx-auto flex flex-col"
        style={frameShellStyle}
      >
        <div className="flex-1 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </main>
  )
}
