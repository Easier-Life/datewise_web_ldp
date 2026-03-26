'use client'

import { ReactNode, useEffect, useState } from 'react'

interface Section {
  id: string
  title: string
}

interface PolicyLayoutProps {
  title: string
  subtitle: string
  lastUpdated: string
  sections: Section[]
  children: ReactNode
}

export default function PolicyLayout({ title, subtitle, lastUpdated, sections, children }: PolicyLayoutProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -60% 0px' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px', maxWidth: '720px' }}>
        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            color: '#F8FAFC',
            lineHeight: 1.2,
            marginBottom: '12px',
            letterSpacing: '-0.03em',
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: '16px', color: '#94A3B8', marginBottom: '8px' }}>{subtitle}</p>
        <p style={{ fontSize: '13px', color: '#475569' }}>{lastUpdated}</p>
      </div>

      <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start' }}>
        {/* Sidebar TOC */}
        <aside
          style={{
            width: '240px',
            flexShrink: 0,
            position: 'sticky',
            top: '80px',
            maxHeight: 'calc(100vh - 100px)',
            overflowY: 'auto',
          }}
          className="policy-sidebar"
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
              Contents
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '6px 8px',
                    borderRadius: '6px',
                    border: 'none',
                    background: activeId === section.id ? 'rgba(45, 212, 191, 0.1)' : 'transparent',
                    color: activeId === section.id ? '#2DD4BF' : '#94A3B8',
                    fontSize: '12px',
                    fontWeight: activeId === section.id ? 600 : 400,
                    cursor: 'pointer',
                    lineHeight: '1.4',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {children}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .policy-sidebar { display: none !important; }
        }
      `}</style>
    </div>
  )
}

interface PolicySectionProps {
  id: string
  title: string
  children: ReactNode
}

export function PolicySection({ id, title, children }: PolicySectionProps) {
  return (
    <section
      id={id}
      style={{
        marginBottom: '40px',
        paddingBottom: '40px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        scrollMarginTop: '90px',
      }}
    >
      <h2
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#F8FAFC',
          marginBottom: '16px',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: '15px',
          color: '#94A3B8',
          lineHeight: '1.75',
        }}
      >
        {children}
      </div>
    </section>
  )
}
