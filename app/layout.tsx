import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmadhassan.dev'),
  title: {
    default: 'Ahmad Hassan | Energy Engineer Portfolio',
    template: '%s | Ahmad Hassan',
  },
  description: 'Portfolio website of Ahmad Hassan, an energy sector engineer showcasing experience and projects.',
  openGraph: {
    title: 'Ahmad Hassan | Energy Engineer Portfolio',
    description: 'Energy engineer delivering resilient, future-ready solutions across the Middle East.',
    url: 'https://ahmadhassan.dev',
    siteName: 'Ahmad Hassan Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Ahmad Hassan Portfolio overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmad Hassan | Energy Engineer Portfolio',
    description: 'Energy engineer delivering resilient, future-ready solutions across the Middle East.',
    creator: '@ahmadhassan',
    images: ['/og.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ahmad Hassan',
  jobTitle: 'Energy Engineer',
  url: 'https://ahmadhassan.dev',
  sameAs: ['https://www.linkedin.com'],
  worksFor: {
    '@type': 'Organization',
    name: 'Gulf Energy Solutions',
  },
  knowsAbout: ['Grid modernization', 'Renewable energy', 'Power systems'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`bg-white text-slate-900 ${inter.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  )
}

