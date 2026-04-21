import { useEffect } from 'react'

interface DocumentMeta {
  title: string
  description: string
  canonicalPath: string
}

const SITE_ORIGIN = 'https://yuevivian.com'

export function useDocumentMeta({ title, description, canonicalPath }: DocumentMeta): void {
  useEffect((): void => {
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
    if (canonicalEl) canonicalEl.setAttribute('href', fullUrl)

    const ogUrlEl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (ogUrlEl) ogUrlEl.setAttribute('content', fullUrl)
  }, [title, description, canonicalPath])
}
