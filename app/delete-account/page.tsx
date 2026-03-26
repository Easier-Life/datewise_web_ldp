'use client'

import { useLang } from '@/lib/i18n'

export default function DeleteAccountPage() {
  const { t } = useLang()

  const method1Steps = [
    t('delete.method1.step1'),
    t('delete.method1.step2'),
    t('delete.method1.step3'),
    t('delete.method1.step4'),
    t('delete.method1.step5'),
  ]

  const method2Steps = [
    t('delete.method2.step1'),
    t('delete.method2.step2'),
    t('delete.method2.step3'),
    t('delete.method2.step4'),
  ]

  const dataInfoItems = [
    t('delete.dataInfo.1'),
    t('delete.dataInfo.2'),
    t('delete.dataInfo.3'),
    t('delete.dataInfo.4'),
  ]

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
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(244, 63, 94, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '4px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              background: 'rgba(244, 63, 94, 0.08)',
              marginBottom: '20px',
            }}
          >
            <span style={{ fontSize: '13px', color: '#F43F5E', fontWeight: 500 }}>Account Management</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 52px)',
              fontWeight: 800,
              color: '#F8FAFC',
              letterSpacing: '-0.04em',
              marginBottom: '16px',
            }}
          >
            {t('delete.title')}
          </h1>
          <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.65 }}>
            {t('delete.description')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '0 24px clamp(64px, 8vw, 100px)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {/* Intro */}
          <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.75, marginBottom: '32px' }}>
            {t('delete.intro')}
          </p>

          {/* Warning */}
          <div
            style={{
              padding: '20px 24px',
              background: 'rgba(244, 63, 94, 0.08)',
              border: '1px solid rgba(244, 63, 94, 0.25)',
              borderRadius: '12px',
              marginBottom: '40px',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>⚠️</span>
              <div>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#F43F5E', marginBottom: '6px' }}>
                  {t('delete.warning')}
                </p>
                <p style={{ fontSize: '14px', color: '#FDA4AF', lineHeight: 1.65 }}>
                  {t('delete.warningText')}
                </p>
              </div>
            </div>
          </div>

          {/* Method 1 */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  background: 'rgba(45, 212, 191, 0.1)',
                  border: '1px solid rgba(45, 212, 191, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  flexShrink: 0,
                }}
              >
                📱
              </div>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#F8FAFC',
                  letterSpacing: '-0.02em',
                }}
              >
                {t('delete.method1.title')}
              </h2>
            </div>

            <ol style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {method1Steps.map((step, i) => (
                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '9999px',
                      background: 'rgba(45, 212, 191, 0.12)',
                      border: '1px solid rgba(45, 212, 191, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#2DD4BF',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {i + 1}
                  </div>
                  <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.65, flex: 1 }}>{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Method 2 */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  background: 'rgba(14, 165, 233, 0.1)',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  flexShrink: 0,
                }}
              >
                ✉️
              </div>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#F8FAFC',
                  letterSpacing: '-0.02em',
                }}
              >
                {t('delete.method2.title')}
              </h2>
            </div>

            <p style={{ fontSize: '15px', color: '#94A3B8', marginBottom: '20px' }}>
              {t('delete.method2.text')}
            </p>

            <ol style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {method2Steps.map((step, i) => (
                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '9999px',
                      background: 'rgba(14, 165, 233, 0.12)',
                      border: '1px solid rgba(14, 165, 233, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#0EA5E9',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {i + 1}
                  </div>
                  <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.65, flex: 1 }}>
                    {step.includes('@') ? (
                      <>
                        {step.split('@')[0]}
                        <a href="mailto:support@datewise.app" style={{ color: '#2DD4BF', textDecoration: 'none' }}>
                          @{step.split('@')[1]}
                        </a>
                      </>
                    ) : step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Data info */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '32px',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#F8FAFC',
                marginBottom: '8px',
                letterSpacing: '-0.02em',
              }}
            >
              {t('delete.dataInfo.title')}
            </h2>
            <p style={{ fontSize: '15px', color: '#94A3B8', marginBottom: '20px' }}>
              {t('delete.dataInfo.text')}
            </p>
            <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {dataInfoItems.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#2DD4BF', fontSize: '14px', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                  <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.65, flex: 1 }}>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            style={{
              padding: '20px 24px',
              background: 'rgba(45, 212, 191, 0.06)',
              border: '1px solid rgba(45, 212, 191, 0.15)',
              borderRadius: '12px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '14px', color: '#94A3B8' }}>
              {t('delete.contact').split('support@datewise.app')[0]}
            </span>
            <a
              href="mailto:support@datewise.app"
              style={{ fontSize: '14px', fontWeight: 600, color: '#2DD4BF', textDecoration: 'none' }}
            >
              support@datewise.app
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
