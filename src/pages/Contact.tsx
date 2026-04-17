import { useState, type FormEvent, type ChangeEvent } from 'react'

interface FormState {
  name: string
  company: string
  email: string
  message: string
}

export function Contact(): React.JSX.Element {
  const [form, setForm] = useState<FormState>({ name: '', company: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState<boolean>(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-svh bg-ink pt-28 pb-20 px-8">
      <div className="max-w-xl mx-auto">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Get in Touch</p>
        <h1 className="text-gold-light font-bold tracking-widest uppercase text-3xl md:text-4xl mb-10">
          Contact
        </h1>
        <div className="w-12 h-px bg-gold mb-10" />

        {submitted ? (
          <p className="text-parchment/80 text-sm leading-relaxed border border-gold/30 px-6 py-5">
            Thank you. Your message has been received. We will respond to qualified inquiries
            promptly and privately.
          </p>
        ) : (
          <>
            <p className="text-parchment/70 text-sm leading-relaxed mb-8">
              For qualified parties interested in an initial discussion, please reach out through
              the form below or via secure email. All inquiries are handled with the strictest
              confidentiality.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {(
                [
                  { name: 'name', label: 'Full Name', type: 'text' },
                  { name: 'company', label: 'Company / Institution', type: 'text' },
                  { name: 'email', label: 'Email Address', type: 'email' },
                ] as const
              ).map(({ name, label, type }) => (
                <div key={name}>
                  <label className="block text-gold text-xs tracking-widest uppercase mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-gold/30 text-parchment text-sm px-4 py-3 outline-none focus:border-gold transition-colors duration-200 placeholder:text-parchment/30"
                  />
                </div>
              ))}

              <div>
                <label className="block text-gold text-xs tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border border-gold/30 text-parchment text-sm px-4 py-3 outline-none focus:border-gold transition-colors duration-200 placeholder:text-parchment/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="cta-gold text-xs tracking-[0.25em] uppercase px-10 py-3 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </>
        )}

        {/* Address */}
        <div className="mt-14 pt-10 border-t border-gold/15">
          <p className="text-gold text-xs tracking-widest uppercase mb-3">Physical Address</p>
          <address className="not-italic text-parchment/60 text-sm leading-relaxed">
            Yue Vivian International Limited<br />
            Unit 907, Sunwise Industrial Building<br />
            16–26 Wang Wo Tsai Street, Tsuen Wan<br />
            New Territories, Hong Kong
          </address>
        </div>
      </div>
    </main>
  )
}
