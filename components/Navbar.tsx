'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useLang } from '@/lib/i18n'

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/privacy', label: t('nav.privacy') },
    { href: '/terms', label: t('nav.terms') },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
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
            <span
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#F8FAFC',
                letterSpacing: '-0.5px',
              }}
            >
              DateWise
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="desktop-nav"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: isActive(link.href) ? '#2DD4BF' : '#94A3B8',
                  background: isActive(link.href) ? 'rgba(45, 212, 191, 0.1)' : 'transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: Lang toggle + Download */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                border: '1px solid rgba(45, 212, 191, 0.4)',
                background: 'rgba(45, 212, 191, 0.08)',
                color: '#2DD4BF',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'all 0.15s ease',
              }}
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'VI' : 'EN'}
            </button>

            {/* Download Button - hidden on small screens */}
            <Link
              href="#download"
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                background: '#F1F5F9',
                color: '#0F172A',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap',
              }}
              className="download-btn"
            >
              {t('nav.download')}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
                padding: '8px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              className="hamburger"
              aria-label="Toggle menu"
            >
              <span style={{ display: 'block', width: '20px', height: '2px', background: '#F8FAFC', borderRadius: '2px', transition: 'all 0.2s', transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '20px', height: '2px', background: '#F8FAFC', borderRadius: '2px', transition: 'all 0.2s', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '20px', height: '2px', background: '#F8FAFC', borderRadius: '2px', transition: 'all 0.2s', transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(15, 23, 42, 0.98)',
            padding: '12px 24px 20px',
          }}
          className="mobile-menu"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none',
                color: isActive(link.href) ? '#2DD4BF' : '#94A3B8',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#download"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'block',
              marginTop: '16px',
              padding: '12px 20px',
              borderRadius: '9999px',
              background: '#F1F5F9',
              color: '#0F172A',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            {t('nav.download')}
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .download-btn { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
