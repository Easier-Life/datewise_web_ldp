'use client'

import { useState } from 'react'
import { useLang } from '@/lib/i18n'

export default function SupportPage() {
  const { t } = useLang()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    q: t(`support.faq.q${n}`),
    a: t(`support.faq.a${n}`),
  }))

  return (
    <main style={{ minHeight: '100vh', background: '#0F172A', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 48px', textAlign: 'center' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(45, 212, 191, 0.1)',
            border: '1px solid rgba(45, 212, 191, 0.3)',
            color: '#2DD4BF',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            marginBottom: '20px',
          }}
        >
          {t('support.faq.badge')}
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#F8FAFC', lineHeight: 1.2, marginBottom: '16px' }}>
          {t('support.title')}
        </h1>
        <p style={{ fontSize: '18px', color: '#94A3B8', lineHeight: 1.6 }}>
          {t('support.description')}
        </p>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#F8FAFC', marginBottom: '32px' }}>
          {t('support.faq.title')}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${openFaq === i ? 'rgba(45,212,191,0.4)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '16px',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#F8FAFC', lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: openFaq === i ? '#2DD4BF' : '#94A3B8',
                    fontSize: '16px',
                    transition: 'all 0.2s',
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 20px' }}>
                  <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        style={{
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(45, 212, 191, 0.1)',
              border: '1px solid rgba(45, 212, 191, 0.3)',
              color: '#2DD4BF',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              marginBottom: '20px',
            }}
          >
            {t('support.contact.badge')}
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#F8FAFC', marginBottom: '12px' }}>
            {t('support.contact.title')}
          </h2>
          <p style={{ fontSize: '16px', color: '#94A3B8', marginBottom: '40px', lineHeight: 1.6 }}>
            {t('support.contact.subtitle')}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const name = (form.elements.namedItem('name') as HTMLInputElement).value
              const email = (form.elements.namedItem('email') as HTMLInputElement).value
              const subject = (form.elements.namedItem('subject') as HTMLInputElement).value
              const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
              window.location.href = `mailto:support@datewise.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}
          >
            {[
              { name: 'name', label: t('support.contact.name'), type: 'text', required: true },
              { name: 'email', label: t('support.contact.email'), type: 'email', required: true },
              { name: 'subject', label: t('support.contact.subject'), type: 'text', required: true },
            ].map((field) => (
              <div key={field.name}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94A3B8', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#F8FAFC',
                    fontSize: '15px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94A3B8', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t('support.contact.message')}
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder={t('support.contact.messagePlaceholder')}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  color: '#F8FAFC',
                  fontSize: '15px',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '14px 32px',
                borderRadius: '9999px',
                background: '#F1F5F9',
                color: '#0F172A',
                fontSize: '15px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.15s',
              }}
            >
              {t('support.contact.send')}
            </button>
          </form>

          <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontSize: '14px', color: '#94A3B8' }}>
              {t('support.contact.emailDirect')}{' '}
              <a href="mailto:support@datewise.app" style={{ color: '#2DD4BF', textDecoration: 'none', fontWeight: 600 }}>
                support@datewise.app
              </a>
            </p>
            <p style={{ fontSize: '13px', color: '#475569', marginTop: '8px' }}>
              {t('support.contact.response')}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
