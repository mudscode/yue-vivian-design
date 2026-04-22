import { useEffect } from 'react'

interface DocumentMeta {
  title: string
  description: string
  canonicalPath: string
  noindex?: boolean
}

const SITE_ORIGIN = 'https://yuevivian.com'
const ROBOTS_META_ID = 'meta-robots-dynamic'

function setRobotsNoindex(enabled: boolean): void {
  const existing = document.getElementById(ROBOTS_META_ID)
  if (enabled) {
    if (existing) return
    const el = document.createElement('meta')
    el.id = ROBOTS_META_ID
    el.setAttribute('name', 'robots')
    el.setAttribute('content', 'noindex, nofollow')
    document.head.appendChild(el)
  } else if (existing) {
    existing.remove()
  }
}

export function useDocumentMeta({ title, description, canonicalPath, noindex = false }: DocumentMeta): void {
  useEffect((): (() => void) => {
    document.title = title

    const descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (descEl) descEl.setAttribute('content', description)

    const ogTitleEl = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (ogTitleEl) ogTitleEl.setAttribute('content', title)

    const ogDescEl = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    if (ogDescEl) ogDescEl.setAttribute('content', description)

    const twTitleEl = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
    if (twTitleEl) twTitleEl.setAttribute('content', title)

    const twDescEl = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')
    if (twDescEl) twDescEl.setAttribute('content', description)

    const fullUrl = `${SITE_ORIGIN}${canonicalPath}`
    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonicalEl) {
      if (noindex) {
        canonicalEl.removeAttribute('href')
      } else {
        canonicalEl.setAttribute('href', fullUrl)
      }
    }

    const ogUrlEl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (ogUrlEl) ogUrlEl.setAttribute('content', fullUrl)

    setRobotsNoindex(noindex)

    return (): void => {
      setRobotsNoindex(false)
    }
  }, [title, description, canonicalPath, noindex])
}
