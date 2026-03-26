'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#0F172A',
        padding: '64px 24px 32px',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #2DD4BF, #0EA5E9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                }}
              >
                ✦
              </div>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC' }}>DateWise</span>
            </div>
            <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: '1.6', maxWidth: '240px' }}>
              {t('footer.tagline')}
            </p>
            {/* Social links placeholder */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {['𝕏', 'in', 'ig'].map((icon) => (
                <div
                  key={icon}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    color: '#94A3B8',
                    cursor: 'pointer',
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#F8FAFC', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              {t('footer.product')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/#features', label: t('footer.features') },
                { href: '/#how-it-works', label: t('footer.howItWorks') },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ fontSize: '14px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.15s' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#F8FAFC', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              {t('footer.company')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/about', label: t('footer.about') },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ fontSize: '14px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.15s' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#F8FAFC', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              {t('footer.legal')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/privacy', label: t('footer.privacy') },
                { href: '/terms', label: t('footer.terms') },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ fontSize: '14px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.15s' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ fontSize: '13px', color: '#475569' }}>
            {t('footer.copyright')}
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/privacy" style={{ fontSize: '13px', color: '#475569', textDecoration: 'none' }}>
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" style={{ fontSize: '13px', color: '#475569', textDecoration: 'none' }}>
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
