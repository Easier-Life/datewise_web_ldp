'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { useLang } from '@/lib/i18n'

export default function AboutPage() {
  const { t } = useLang()

  const values = [
    { titleKey: 'about.values.1.title', textKey: 'about.values.1.text', icon: '💎' },
    { titleKey: 'about.values.2.title', textKey: 'about.values.2.text', icon: '🔒' },
    { titleKey: 'about.values.3.title', textKey: 'about.values.3.text', icon: '🔬' },
    { titleKey: 'about.values.4.title', textKey: 'about.values.4.text', icon: '🌍' },
  ]

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          padding: 'clamp(64px, 10vw, 100px) 24px',
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
        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '4px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(45, 212, 191, 0.3)',
              background: 'rgba(45, 212, 191, 0.06)',
              marginBottom: '20px',
            }}
          >
            <span style={{ fontSize: '13px', color: '#2DD4BF', fontWeight: 500 }}>DateWise</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 800,
              color: '#F8FAFC',
              letterSpacing: '-0.04em',
              marginBottom: '16px',
            }}
          >
            {t('about.title')}
          </h1>
          <p style={{ fontSize: '18px', color: '#94A3B8', lineHeight: 1.65 }}>
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '0 24px clamp(64px, 8vw, 80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  padding: '4px 14px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(45, 212, 191, 0.3)',
                  background: 'rgba(45, 212, 191, 0.06)',
                  marginBottom: '20px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#2DD4BF', fontWeight: 500 }}>
                  {t('about.mission.badge')}
                </span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(24px, 4vw, 40px)',
                  fontWeight: 800,
                  color: '#F8FAFC',
                  letterSpacing: '-0.03em',
                  marginBottom: '20px',
                }}
              >
                {t('about.mission.title')}
              </h2>
              {[
                t('about.mission.text1'),
                t('about.mission.text2'),
                t('about.mission.text3'),
              ].map((text, i) => (
                <p key={i} style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.75, marginBottom: '16px' }}>
                  {text}
                </p>
              ))}
            </div>

            {/* Visual element */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '40px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>💫</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: '✨', text: 'Profile Glow Up' },
                  { icon: '🔍', text: 'Vibe Check' },
                  { icon: '💬', text: 'Chat Copilot' },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 20px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '22px' }}>{item.icon}</span>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#F8FAFC' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 80px) 24px',
          background: 'rgba(30, 41, 59, 0.3)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div
              style={{
                display: 'inline-flex',
                padding: '4px 14px',
                borderRadius: '9999px',
                border: '1px solid rgba(45, 212, 191, 0.3)',
                background: 'rgba(45, 212, 191, 0.06)',
                marginBottom: '16px',
              }}
            >
              <span style={{ fontSize: '13px', color: '#2DD4BF', fontWeight: 500 }}>
                {t('about.values.badge')}
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 40px)',
                fontWeight: 800,
                color: '#F8FAFC',
                letterSpacing: '-0.03em',
              }}
            >
              {t('about.values.title')}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {values.map((value) => (
              <div
                key={value.titleKey}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '28px',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px' }}>
                  {t(value.titleKey)}
                </h3>
                <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.65 }}>
                  {t(value.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: 'clamp(64px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '4px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(45, 212, 191, 0.3)',
              background: 'rgba(45, 212, 191, 0.06)',
              marginBottom: '16px',
            }}
          >
            <span style={{ fontSize: '13px', color: '#2DD4BF', fontWeight: 500 }}>
              {t('about.team.badge')}
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: 800,
              color: '#F8FAFC',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            {t('about.team.title')}
          </h2>
          <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.75, marginBottom: '40px' }}>
            {t('about.team.text')}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: 'clamp(48px, 8vw, 80px) 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          textAlign: 'center',
          background: 'rgba(30, 41, 59, 0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(45, 212, 191, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: 800,
              color: '#F8FAFC',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            {t('about.cta.title')}
          </h2>
          <p style={{ fontSize: '16px', color: '#94A3B8', marginBottom: '32px', lineHeight: 1.6 }}>
            {t('about.cta.text')}
          </p>
          <Link
            href="/#download"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              borderRadius: '9999px',
              background: '#F1F5F9',
              color: '#0F172A',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
