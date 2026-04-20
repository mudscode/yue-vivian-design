import { useState, type FormEvent, type ChangeEvent } from 'react'
import { PageFrame } from '../components/PageFrame'

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

export function Contact(): React.JSX.Element {
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
    <PageFrame clouds={['mid-left', 'bottom-right']}>
      <div className="flex flex-col items-center text-center">
        <h1
          className="font-cinzel uppercase"
          style={{
            fontSize: 'clamp(40px, 6.5vw, 76px)',
            letterSpacing: '0.08em',
            color: '#e8c87a',
            marginBottom: '24px',
          }}
        >
          Contact
        </h1>

        <p
          className="font-sans"
          style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: '20px',
            letterSpacing: '0.01em',
            marginBottom: '14px',
          }}
        >
          Hong Kong
        </p>

        <p
          className="font-sans"
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: '15px',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          Email: info@yuevivian.com<br />
          For qualified institutional inquiries only.
        </p>

        {submitted ? (
          <p
            className="font-sans"
            style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: '15px',
              lineHeight: 1.7,
              maxWidth: '440px',
            }}
          >
            Thank you. Your message has been received. We will respond to qualified inquiries
            promptly and privately.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full text-left"
            style={{ maxWidth: '440px' }}
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
              <label htmlFor="company" style={fieldLabelStyle}>Company</label>
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

            <div style={{ marginBottom: '44px' }}>
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
                  fontSize: '17px',
                  letterSpacing: '0.02em',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  padding: '8px 4px',
                }}
              >
                Get in Touch
              </button>
            </div>
          </form>
        )}
      </div>
    </PageFrame>
  )
}
