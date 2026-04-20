'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const immobilienLinks = [
  { label: 'Immobilie als Kapitalanlage', href: '/immobilien/kapitalanlage' },
  { label: 'Immobilien in Frankfurt', href: '/immobilien/frankfurt' },
  { label: 'Immobilien im Rhein-Main', href: '/immobilien/rhein-main' },
  { label: 'Immobilien unter dem Marktwert', href: '/immobilien/immobilien-unter-dem-marktwert' },
  { label: 'Steueroptimierung', href: '/immobilien/steueroptimierung' },
]

const versicherungenLinks = [
  { label: 'Berufsunfähigkeit (BU)', href: '/versicherungen/berufsunfaehigkeit' },
  { label: 'Krankenversicherung', href: '/versicherungen/krankenversicherung' },
  { label: 'Haftpflichtversicherung', href: '/versicherungen/haftpflicht' },
  { label: 'Lebensversicherung', href: '/versicherungen/lebensversicherung' },
  { label: 'Hausrat & Gebäude', href: '/versicherungen/hausrat' },
  { label: 'KFZ-Versicherung', href: '/versicherungen/kfz' },
  { label: 'Rechtsschutz', href: '/versicherungen/rechtsschutz' },
  { label: 'Reiseversicherung', href: '/versicherungen/reiseversicherung' },
]

const companyLinks = [
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Blog', href: '/blog' },
  { label: 'Presse', href: '/presse' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0D0E12', color: 'white' }}>
      {/* Main footer */}
      <div className="container-brand py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <svg width="32" height="32" viewBox="0 0 258 268" fill="none" aria-hidden="true">
                <path d="M154.544 0L103.071 89.1542H206.018L154.544 0Z" fill="#457FFC"/>
                <path d="M205.989 89.1084L154.516 178.263H257.462L205.989 89.1084Z" fill="#0141CB"/>
                <path d="M257.263 178.148L154.317 178.148L205.79 267.302L257.263 178.148Z" fill="#0539A9"/>
                <path d="M154.361 178.217L102.888 267.371H205.834L154.361 178.217Z" fill="#012778"/>
                <path d="M154.376 178.148L51.4294 178.148L102.903 267.302L154.376 178.148Z" fill="#001C59"/>
                <path d="M206.004 89.2227L103.057 89.2227L154.53 178.377L206.004 89.2227Z" fill="#0E5AFD"/>
                <path d="M51.4731 178.217L-6.10352e-05 267.371H102.946L51.4731 178.217Z" fill="black"/>
              </svg>
              <span
                className="font-semibold tracking-widest text-sm uppercase"
                style={{ color: 'white', fontFamily: 'var(--font-dm-sans)' }}
              >
                ADLER INVEST
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Adler Invest ist ein unabhängiger Finanzdienstleister mit Sitz in Frankfurt am Main.
              Das Unternehmen spezialisiert sich auf Immobilien-Kapitalanlagen im Rhein-Main-Gebiet
              und unabhängige Versicherungsberatung. Alle Beratungen sind kostenlos und unverbindlich.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              {[
                { Icon: Phone, text: '+49 69 000 000 00', href: 'tel:+496900000000' },
                { Icon: Mail, text: 'info@adlerinvest.de', href: 'mailto:info@adlerinvest.de' },
                { Icon: MapPin, text: 'Kennedyallee 93, 60596 Frankfurt am Main', href: null },
                { Icon: Clock, text: 'Mo–Fr 9:00–18:00 Uhr', href: null },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-start gap-2.5">
                  <Icon
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: '#457FFC' }}
                  />
                  {href ? (
                    <a
                      href={href}
                      className="text-xs transition-colors"
                      style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontFamily: 'var(--font-dm-sans)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-dm-sans)' }}>
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Versicherungen */}
          <div>
            <Link
              href="/versicherungen"
              className="block text-xs font-semibold mb-5 tracking-widest uppercase transition-colors"
              style={{ color: '#457FFC', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#457FFC')}
            >
              Versicherungen
            </Link>
            <ul className="flex flex-col gap-2.5">
              {versicherungenLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Immobilien */}
          <div>
            <Link
              href="/immobilien"
              className="block text-xs font-semibold mb-5 tracking-widest uppercase transition-colors"
              style={{ color: '#457FFC', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#457FFC')}
            >
              Immobilien
            </Link>
            <ul className="flex flex-col gap-2.5">
              {immobilienLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-xs font-semibold mb-5 tracking-widest uppercase"
              style={{ color: '#457FFC', fontFamily: 'var(--font-dm-sans)' }}
            >
              Unternehmen
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-brand py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-dm-sans)' }}
          >
            © {new Date().getFullYear()} Adler Invest. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-xs transition-colors"
              style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontFamily: 'var(--font-dm-sans)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs transition-colors"
              style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontFamily: 'var(--font-dm-sans)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
