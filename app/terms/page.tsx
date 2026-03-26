'use client'

import { useLang } from '@/lib/i18n'
import PolicyLayout, { PolicySection } from '@/components/PolicyLayout'

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      const text = line.slice(2, -2)
      elements.push(
        <p key={i} style={{ fontWeight: 700, color: '#E2E8F0', marginBottom: '8px', marginTop: i > 0 ? '20px' : '0' }}>
          {text}
        </p>
      )
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ paddingLeft: '20px', marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {items.map((item, idx) => {
            const parts = item.split(/\*\*(.*?)\*\*/)
            return (
              <li key={idx} style={{ color: '#94A3B8', fontSize: '15px', lineHeight: 1.65 }}>
                {parts.map((part, pi) =>
                  pi % 2 === 1 ? <strong key={pi} style={{ color: '#CBD5E1', fontWeight: 600 }}>{part}</strong> : part
                )}
              </li>
            )
          })}
        </ul>
      )
      continue
    } else if (line.trim() === '') {
      elements.push(<div key={i} style={{ height: '8px' }} />)
    } else {
      const parts = line.split(/\*\*(.*?)\*\*/)
      elements.push(
        <p key={i} style={{ color: '#94A3B8', fontSize: '15px', lineHeight: 1.75, marginBottom: '12px' }}>
          {parts.map((part, pi) =>
            pi % 2 === 1 ? <strong key={pi} style={{ color: '#CBD5E1', fontWeight: 600 }}>{part}</strong> : part
          )}
        </p>
      )
    }
    i++
  }

  return <>{elements}</>
}

export default function TermsPage() {
  const { t } = useLang()

  const sectionKeys = [
    's1', 's2', 's3', 's4', 's5',
    's6', 's7', 's8', 's9', 's10',
    's11', 's12', 's13', 's14', 's15'
  ]

  const sections = sectionKeys.map((key) => ({
    id: `terms-${key}`,
    title: t(`terms.${key}.title`),
  }))

  return (
    <PolicyLayout
      title={t('terms.title')}
      subtitle={t('terms.description')}
      lastUpdated={t('terms.lastUpdated')}
      sections={sections}
    >
      {sectionKeys.map((key) => (
        <PolicySection
          key={key}
          id={`terms-${key}`}
          title={t(`terms.${key}.title`)}
        >
          {renderContent(t(`terms.${key}.content`))}
        </PolicySection>
      ))}
    </PolicyLayout>
  )
}
