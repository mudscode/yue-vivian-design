import { useState, type FormEvent, type ChangeEvent, type JSX } from 'react'
import { FrameBorder } from '../components/FrameBorder'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

interface FormState {
  name: string
  company: string
  email: string
  message: string
}

const goldLine = 'rgba(212,175,106,0.55)'
const goldLineFocus = 'rgba(212,175,106,0.95)'

const fieldLabelStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.92)',
  fontSize: '15px',
  letterSpacing: '0.01em',
  display: 'block',
  marginBottom: '4px',
}

const inputStyle: React.CSSProperties = {
  background: 'transparent',
  border: '0',
  borderBottom: `1px solid ${goldLine}`,
  outline: 'none',
  color: 'rgba(255,255,255,0.92)',
  fontSize: '15px',
  padding: '4px 0 8px',
  width: '100%',
  transition: 'border-color 0.2s ease',
}

export function Contact(): JSX.Element {
  useDocumentMeta({
    title: 'Contact · Yue Vivian International Limited',
    description:
      'For qualified parties interested in an initial discussion, please reach out through the form or via secure email. All inquiries are handled with strict confidentiality.',
    canonicalPath: '/contact',
  })

  const [form, setForm] = useState<FormState>({ name: '', company: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState<boolean>(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    e.target.style.borderBottomColor = goldLineFocus
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    e.target.style.borderBottomColor = goldLine
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <FrameBorder>
      <div className="flex flex-col items-center text-center">
        <h1
          className="font-cinzel uppercase"
          style={{
            fontSize: 'clamp(30px, 4.4vw, 48px)',
            letterSpacing: '0.08em',
            color: '#e8c87a',
            marginBottom: '24px',
          }}
        >
          Contact
        </h1>

        <p
          className="font-sans mx-auto"
          style={{
            color: 'rgba(255,255,255,0.88)',
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
            maxWidth: '700px',
            marginBottom: '40px',
          }}
        >
          For qualified parties interested in an initial discussion, please reach out through the
          form below or via secure email.
          <br />
          <br />
          All inquiries are handled with the strictest confidentiality.
        </p>

        {submitted ? (
          <p
            className="font-sans"
            style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: '15px',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            Thank you. Your message has been received. We will respond to qualified inquiries
            promptly and privately.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full text-left"
            style={{ maxWidth: '640px' }}
          >
            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="name" style={fieldLabelStyle}>Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="company" style={fieldLabelStyle}>Company / Institution</label>
              <input
                id="company"
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="email" style={fieldLabelStyle}>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                style={inputStyle}
              />
            </div>

            <div className="mb-6 md:mb-11">
              <label htmlFor="message" style={fieldLabelStyle}>Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                rows={4}
                style={{ ...inputStyle, resize: 'none' }}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="font-sans bg-transparent border-0 cursor-pointer"
                style={{
                  color: '#e8c87a',
                  fontSize: '15px',
                  letterSpacing: '0.02em',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  padding: '8px 4px',
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        )}

        {/* Physical address */}
        <div
          className="font-sans mx-auto w-full mt-8 md:mt-14"
          style={{
            paddingTop: '32px',
            maxWidth: '640px',
            backgroundImage: 'linear-gradient(to right, transparent 0%, rgba(212,175,106,0.45) 15%, rgba(212,175,106,0.45) 85%, transparent 100%)',
            backgroundSize: '100% 1px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
          }}
        >
          <p
            className="font-cinzel uppercase"
            style={{
              color: 'rgba(212,175,106,0.85)',
              fontSize: '12px',
              letterSpacing: '0.35em',
              marginBottom: '12px',
            }}
          >
            Physical Address
          </p>
          <address
            className="not-italic"
            style={{
              color: 'rgba(255,255,255,0.78)',
              fontSize: '14px',
              lineHeight: 1.7,
            }}
          >
            YUE VIVIAN INTERNATIONAL LIMITED<br />
            Unit 907, Sunwise Industrial Building<br />
            16-26 Wang Wo Tsai Street, Tsuen Wan<br />
            New Territories, Hong Kong
          </address>
        </div>
      </div>
    </FrameBorder>
  )
}
