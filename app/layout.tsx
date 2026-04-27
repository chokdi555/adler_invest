import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import LenisProvider from '@/components/LenisProvider'
import IntroOverlay from "@/components/IntroOverlay";

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://adlerinvest.de'),
  title: {
    default: 'Adler Invest — Immobilien & Versicherungen Frankfurt',
    template: '%s | Adler Invest',
  },
  description:
    'Adler Invest ist dein unabhängiger Finanzdienstleister in Frankfurt am Main — für Immobilien-Kapitalanlagen im Rhein-Main-Gebiet und professionelle Versicherungsberatung.',
  keywords: [
    'Adler Invest',
    'Immobilien Frankfurt',
    'Kapitalanlage Immobilie',
    'Versicherungsmakler Frankfurt',
    'Rhein-Main',
  ],
  openGraph: {
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <LenisProvider>
          <ScrollToTop />
          <Header />
          <main className="flex-1">
            <IntroOverlay />
            {children}
            </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
