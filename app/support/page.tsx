'use client'

import { useState } from 'react'
import { useLang } from '@/lib/i18n'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
        borderColor: open ? 'rgba(45, 212, 191, 0.3)' : 'rgba(255, 255, 255, 0.08)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '16px',
          padding: '20px 24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '15px', fontWeight: 600, color: '#F8FAFC', lineHeight: 1.4, flex: 1 }}>
          {question}
        </span>
        <span
          style={{
            fontSize: '20px',
            color: '#2DD4BF',
            flexShrink: 0,
            marginTop: '2px',
            transition: 'transform 0.2s',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 20px' }}>
          <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.75 }}>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function SupportPage() {
  const { t } = useLang()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const faqs = [
    { q: t('support.faq.q1'), a: t('support.faq.a1') },
    { q: t('support.faq.q2'), a: t('support.faq.a2') },
    { q: t('support.faq.q3'), a: t('support.faq.a3') },
    { q: t('support.faq.q4'), a: t('support.faq.a4') },
    { q: t('support.faq.q5'), a: t('support.faq.a5') },
    { q: t('support.faq.q6'), a: t('support.faq.a6') },
    { q: t('support.faq.q7'), a: t('support.faq.a7') },
    { q: t('support.faq.q8'), a: t('support.faq.a8') },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'DateWise Support Request')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:support@datewise.app?subject=${subject}&body=${body}`
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: '#F8FAFC',
    fontSize: '15px',
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  }

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          padding: 'clamp(64px, 10vw, 100px) 24px clamp(40px, 6vw, 60px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(45, 212, 191, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative' }}>
          <h1
            style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 800,
              color: '#F8FAFC',
              letterSpacing: '-0.04em',
              marginBottom: '16px',
            }}
          >
            {t('support.title')}
          </h1>
          <p style={{ fontSize: '17px', color: '#94A3B8', lineHeight: 1.65 }}>
            {t('support.description')}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 24px clamp(64px, 8vw, 80px)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '36px' }}>
            <div
              style={{
                display: 'inline-flex',
                padding: '4px 14px',
                borderRadius: '9999px',
                border: '1px solid rgba(45, 212, 191, 0.3)',
                background: 'rgba(45, 212, 191, 0.06)',
                marginBottom: '12px',
              }}
            >
              <span style={{ fontSize: '13px', color: '#2DD4BF', fontWeight: 500 }}>
                {t('support.faq.badge')}
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 800,
                color: '#F8FAFC',
                letterSpacing: '-0.03em',
              }}
            >
              {t('support.faq.title')}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        style={{
          padding: 'clamp(48px, 8vw, 80px) 24px clamp(64px, 8vw, 100px)',
          background: 'rgba(30, 41, 59, 0.3)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ marginBottom: '36px' }}>
            <div
              style={{
                display: 'inline-flex',
                padding: '4px 14px',
                borderRadius: '9999px',
                border: '1px solid rgba(45, 212, 191, 0.3)',
                background: 'rgba(45, 212, 191, 0.06)',
                marginBottom: '12px',
              }}
            >
              <span style={{ fontSize: '13px', color: '#2DD4BF', fontWeight: 500 }}>
                {t('support.contact.badge')}
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 800,
                color: '#F8FAFC',
                letterSpacing: '-0.03em',
                marginBottom: '8px',
              }}
            >
              {t('support.contact.title')}
            </h2>
            <p style={{ fontSize: '15px', color: '#94A3B8' }}>
              {t('support.contact.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#94A3B8', marginBottom: '6px' }}>
                  {t('support.contact.name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#94A3B8', marginBottom: '6px' }}>
                  {t('support.contact.email')}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#94A3B8', marginBottom: '6px' }}>
                {t('support.contact.subject')}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={inputStyle}
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#94A3B8', marginBottom: '6px' }}>
                {t('support.contact.message')}
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                placeholder={t('support.contact.messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '14px 32px',
                borderRadius: '9999px',
                background: '#F1F5F9',
                color: '#0F172A',
                fontSize: '16px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'all 0.15s',
              }}
            >
              {t('support.contact.send')}
            </button>
          </form>

          {/* Direct email */}
          <div
            style={{
              marginTop: '32px',
              padding: '20px 24px',
              background: 'rgba(45, 212, 191, 0.06)',
              border: '1px solid rgba(45, 212, 191, 0.15)',
              borderRadius: '12px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '14px', color: '#94A3B8' }}>{t('support.contact.emailDirect')}</span>
            <a
              href="mailto:support@datewise.app"
              style={{ fontSize: '14px', fontWeight: 600, color: '#2DD4BF', textDecoration: 'none' }}
            >
              support@datewise.app
            </a>
            <span style={{ fontSize: '13px', color: '#475569', width: '100%' }}>
              {t('support.contact.response')}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
