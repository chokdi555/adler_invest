import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Kontakt | Adler Invest Frankfurt',
  description:
    'Nimm Kontakt mit Adler Invest auf. Kostenlose Beratung für Immobilien-Kapitalanlagen und Versicherungen in Frankfurt und dem Rhein-Main-Gebiet.',
  alternates: { canonical: 'https://adlerinvest.de/kontakt' },
  openGraph: {
    title: 'Kontakt | Adler Invest Frankfurt',
    description:
      'Nimm Kontakt mit Adler Invest auf. Kostenlose Beratung für Immobilien-Kapitalanlagen und Versicherungen.',
    url: 'https://adlerinvest.de/kontakt',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const contactDetails = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+49 176 63790950',
    href: 'tel:+4917663790950',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'info@adlerinvest.de',
    href: 'mailto:info@adlerinvest.de',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Kennedyallee 93, 60596 Frankfurt am Main',
    href: 'https://maps.google.com/?q=Kennedyallee+93+Frankfurt+am+Main',
  },
  {
    icon: Clock,
    label: 'Öffnungszeiten',
    value: (
      <>
        Mo–Fr
        <br />
        9:00–18:00 Uhr
      </>
    ),
    href: null,
  },
]

export default function KontaktPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Kontakt — Adler Invest',
            url: 'https://adlerinvest.de/kontakt',
            mainEntity: {
              '@type': 'FinancialService',
              name: 'Adler Invest',
              telephone: '+49 176 63790950',
              email: 'info@adlerinvest.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Kennedyallee 93',
                addressLocality: 'Frankfurt am Main',
                postalCode: '60596',
                addressRegion: 'Hessen',
                addressCountry: 'DE',
              },
              openingHours: 'Mo-Fr 09:00-18:00',
            },
          }),
        }}
      />

      {/* Hero */}
      <section
        style={{
          background: '#F4F6FA',
          paddingTop: '72px',
        }}
      >
        <div className="container-brand" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>
            KONTAKT
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 700,
              color: '#012778',
              lineHeight: 1.15,
              marginBottom: '20px',
              maxWidth: '600px',
            }}
          >
            Kostenlose Beratung sichern
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.125rem',
              color: '#6B7494',
              maxWidth: '480px',
              lineHeight: 1.65,
            }}
          >
            Wir antworten innerhalb von 24 Stunden. Persönlich. Kein Call Center.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: 'white', paddingTop: '72px', paddingBottom: '96px' }}>
        <div className="container-brand">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr)',
              gap: '48px',
            }}
            className="kontakt-grid"
          >
            {/* Left: Form */}
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  marginBottom: '32px',
                  paddingBottom: '32px',
                  borderBottom: '1px solid #DDE3EF',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.875rem',
                    fontWeight: 600,
                    color: '#012778',
                    marginBottom: '10px',
                  }}
                >
                  Schreib uns
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '16px',
                    color: '#6B7494',
                    lineHeight: 1.6,
                  }}
                >
                  Fülle das Formular aus — wir melden uns schnellstmöglich persönlich bei dir.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div style={{ minWidth: 0 }}>
              {/* Contact detail cards */}
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.875rem',
                  fontWeight: 600,
                  color: '#012778',
                  marginBottom: '10px',
                }}
              >
                Direktkontakt
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '16px',
                  color: '#6B7494',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}
              >
                Bevorzugst du den direkten Weg? Wir sind für dich erreichbar.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                        padding: '20px 24px',
                        background: '#F4F6FA',
                        borderRadius: '12px',
                        border: '1px solid #DDE3EF',
                        transition: 'border-color 0.2s',
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: '10px',
                          background: '#EEF2FA',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} color="#0141CB" />
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#6B7494',
                            marginBottom: '4px',
                          }}
                        >
                          {item.label}
                        </p>
                        <p
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '15px',
                            fontWeight: 500,
                            color: item.href ? '#0141CB' : '#2D3142',
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a key={item.label} href={item.href} style={{ textDecoration: 'none', display: 'block' }}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  )
                })}
              </div>

              {/* WhatsApp CTA */}
              <WhatsAppButton phone="+4917663790950" />

              {/* Google Maps */}
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #DDE3EF',
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=Kennedyallee+93,+60596+Frankfurt+am+Main&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Adler Invest — Frankfurt am Main"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .kontakt-grid {
            grid-template-columns: 3fr 2fr !important;
          }
        }
      `}</style>
    </>
  )
}
