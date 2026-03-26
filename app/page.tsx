'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { useLang } from '@/lib/i18n'

// Metadata cannot be exported from a client component in Next.js App Router.
// We export it from a separate server component in layout instead.

function HeroSection() {
  const { t } = useLang()

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(80px, 12vw, 140px) 24px clamp(80px, 10vw, 120px)',
        textAlign: 'center',
      }}
    >
      {/* Radial glow background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45, 212, 191, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(14, 165, 233, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            border: '1px solid rgba(45, 212, 191, 0.3)',
            background: 'rgba(45, 212, 191, 0.08)',
            marginBottom: '28px',
          }}
        >
          <span style={{ fontSize: '14px', color: '#2DD4BF', fontWeight: 500 }}>✦ {t('home.hero.badge')}</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 'clamp(36px, 7vw, 76px)',
            fontWeight: 800,
            color: '#F8FAFC',
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            marginBottom: '24px',
          }}
        >
          {t('home.hero.title')}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: '#94A3B8',
            lineHeight: 1.7,
            maxWidth: '640px',
            margin: '0 auto 40px',
          }}
        >
          {t('home.hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '64px' }}>
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '9999px',
              background: '#F1F5F9',
              color: '#0F172A',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
          >
            <span style={{ fontSize: '20px' }}>🍎</span>
            {t('home.hero.cta.appstore')}
          </a>
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#F8FAFC',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.15s',
            }}
          >
            <span style={{ fontSize: '20px' }}>▶</span>
            {t('home.hero.cta.googleplay')}
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          {[
            { value: '50K+', label: t('home.hero.stats.users') },
            { value: '3×', label: t('home.hero.stats.matches') },
            { value: '4.9★', label: t('home.hero.stats.rating') },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#2DD4BF', letterSpacing: '-0.03em' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: '#94A3B8', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const { t } = useLang()

  const features = [
    {
      icon: '✨',
      color: '#2DD4BF',
      colorBg: 'rgba(45, 212, 191, 0.1)',
      titleKey: 'home.features.profileGlowUp.title',
      descKey: 'home.features.profileGlowUp.description',
      tags: [
        t('home.features.profileGlowUp.tag1'),
        t('home.features.profileGlowUp.tag2'),
        t('home.features.profileGlowUp.tag3'),
      ],
    },
    {
      icon: '🔍',
      color: '#0EA5E9',
      colorBg: 'rgba(14, 165, 233, 0.1)',
      titleKey: 'home.features.vibeCheck.title',
      descKey: 'home.features.vibeCheck.description',
      tags: [
        t('home.features.vibeCheck.tag1'),
        t('home.features.vibeCheck.tag2'),
        t('home.features.vibeCheck.tag3'),
      ],
    },
    {
      icon: '💬',
      color: '#A78BFA',
      colorBg: 'rgba(167, 139, 250, 0.1)',
      titleKey: 'home.features.chatCopilot.title',
      descKey: 'home.features.chatCopilot.description',
      tags: [
        t('home.features.chatCopilot.tag1'),
        t('home.features.chatCopilot.tag2'),
        t('home.features.chatCopilot.tag3'),
      ],
    },
  ]

  return (
    <section id="features" style={{ padding: 'clamp(64px, 10vw, 100px) 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
              {t('home.features.badge')}
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              color: '#F8FAFC',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            {t('home.features.title')}
          </h2>
          <p style={{ fontSize: '17px', color: '#94A3B8', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            {t('home.features.subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.titleKey}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '32px',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: feature.colorBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '20px',
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#F8FAFC',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}
              >
                {t(feature.titleKey)}
              </h3>

              <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.7, marginBottom: '20px' }}>
                {t(feature.descKey)}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      border: `1px solid ${feature.color}40`,
                      background: `${feature.color}10`,
                      color: feature.color,
                      fontSize: '12px',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const { t } = useLang()

  const steps = [
    { num: '01', titleKey: 'home.howItWorks.step1.title', descKey: 'home.howItWorks.step1.description', icon: '⚡' },
    { num: '02', titleKey: 'home.howItWorks.step2.title', descKey: 'home.howItWorks.step2.description', icon: '✨' },
    { num: '03', titleKey: 'home.howItWorks.step3.title', descKey: 'home.howItWorks.step3.description', icon: '🔍' },
    { num: '04', titleKey: 'home.howItWorks.step4.title', descKey: 'home.howItWorks.step4.description', icon: '💬' },
  ]

  return (
    <section
      id="how-it-works"
      style={{
        padding: 'clamp(64px, 10vw, 100px) 24px',
        background: 'rgba(30, 41, 59, 0.3)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
              {t('home.howItWorks.badge')}
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              color: '#F8FAFC',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            {t('home.howItWorks.title')}
          </h2>
          <p style={{ fontSize: '17px', color: '#94A3B8', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            {t('home.howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {steps.map((step, i) => (
            <div key={step.num} style={{ position: 'relative' }}>
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '32px',
                    right: '-12px',
                    width: '24px',
                    height: '1px',
                    background: 'rgba(45, 212, 191, 0.2)',
                    zIndex: 1,
                  }}
                  className="step-connector"
                />
              )}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  height: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '9999px',
                      background: 'rgba(45, 212, 191, 0.12)',
                      border: '1px solid rgba(45, 212, 191, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                    }}
                  >
                    {step.icon}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#2DD4BF', letterSpacing: '0.08em' }}>
                    STEP {step.num}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#F8FAFC',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {t(step.titleKey)}
                </h3>
                <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.65 }}>
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const { t } = useLang()

  const testimonials = [
    { nameKey: 'home.testimonials.1.name', roleKey: 'home.testimonials.1.role', textKey: 'home.testimonials.1.text', avatar: '👨‍💻' },
    { nameKey: 'home.testimonials.2.name', roleKey: 'home.testimonials.2.role', textKey: 'home.testimonials.2.text', avatar: '👩‍💼' },
    { nameKey: 'home.testimonials.3.name', roleKey: 'home.testimonials.3.role', textKey: 'home.testimonials.3.text', avatar: '👩‍⚕️' },
  ]

  return (
    <section style={{ padding: 'clamp(64px, 10vw, 100px) 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
              {t('home.testimonials.badge')}
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              color: '#F8FAFC',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            {t('home.testimonials.title')}
          </h2>
          <p style={{ fontSize: '17px', color: '#94A3B8', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            {t('home.testimonials.subtitle')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {testimonials.map((t_item) => (
            <div
              key={t_item.nameKey}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '28px',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#F59E0B', fontSize: '14px' }}>★</span>
                ))}
              </div>

              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>
                &ldquo;{t(t_item.textKey)}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '9999px',
                    background: 'rgba(45, 212, 191, 0.1)',
                    border: '1px solid rgba(45, 212, 191, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                  }}
                >
                  {t_item.avatar}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#F8FAFC' }}>{t(t_item.nameKey)}</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>{t(t_item.roleKey)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DownloadSection() {
  const { t } = useLang()

  return (
    <section
      id="download"
      style={{
        padding: 'clamp(64px, 10vw, 100px) 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(30, 41, 59, 0.3)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(45, 212, 191, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative' }}>
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
            {t('home.download.badge')}
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 800,
            color: '#F8FAFC',
            letterSpacing: '-0.03em',
            marginBottom: '16px',
          }}
        >
          {t('home.download.title')}
        </h2>

        <p style={{ fontSize: '17px', color: '#94A3B8', lineHeight: 1.65, marginBottom: '40px' }}>
          {t('home.download.subtitle')}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '32px' }}>
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 28px',
              borderRadius: '9999px',
              background: '#F1F5F9',
              color: '#0F172A',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <span style={{ fontSize: '22px' }}>🍎</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '10px', fontWeight: 500, opacity: 0.7 }}>Download on the</div>
              <div style={{ fontSize: '15px', fontWeight: 700 }}>App Store</div>
            </div>
          </a>
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 28px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#F8FAFC',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <span style={{ fontSize: '22px' }}>▶</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '10px', fontWeight: 500, opacity: 0.7 }}>Get it on</div>
              <div style={{ fontSize: '15px', fontWeight: 700 }}>Google Play</div>
            </div>
          </a>
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          {[
            { icon: '✓', text: t('home.download.free') },
            { icon: '✦', text: t('home.download.sparks') },
            { icon: '✓', text: t('home.download.nocc') },
          ].map((item) => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#2DD4BF', fontSize: '14px', fontWeight: 700 }}>{item.icon}</span>
              <span style={{ fontSize: '14px', color: '#94A3B8' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DownloadSection />
    </>
  )
}
