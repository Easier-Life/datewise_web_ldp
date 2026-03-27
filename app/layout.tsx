import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'DateWise — AI Dating Companion',
    template: '%s | DateWise',
  },
  description:
    'DateWise is your AI-powered dating companion that runs alongside Tinder, Bumble, and Hinge — optimizing your profile, screening matches, and coaching your conversations.',
  keywords: ['dating app', 'dating coach', 'AI dating', 'profile optimizer', 'relationship advice'],
  authors: [{ name: 'DateWise' }],
  creator: 'DateWise',
  metadataBase: new URL('https://datewise.easier.today'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://datewise.easier.today',
    siteName: 'DateWise',
    title: 'DateWise — AI Dating Companion',
    description:
      'Your intelligent dating companion for meaningful connections. Profile analysis, match screening, and conversation coaching.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DateWise — AI Dating Companion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DateWise — AI Dating Companion',
    description: 'Date smarter with AI-powered coaching.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable}`}>
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'var(--font-jakarta), Plus Jakarta Sans, system-ui, sans-serif',
        }}
      >
        <LangProvider>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
