import type { Metadata } from 'next'
import { Mail, Phone, Download, FileText, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Presse | Adler Invest Frankfurt',
  description:
    'Pressematerial, Unternehmensdaten und Kontaktinformationen für Medienanfragen. Adler Invest — unabhängiger Finanzdienstleister im Rhein-Main-Gebiet.',
  alternates: { canonical: 'https://adlerinvest.de/presse' },
  openGraph: {
    title: 'Presse | Adler Invest Frankfurt',
    description:
      'Pressematerial, Unternehmensdaten und Kontaktinformationen für Medienanfragen.',
    url: 'https://adlerinvest.de/presse',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const factSheetItems = [
  { label: 'Gründungsjahr', value: '2024' },
  { label: 'Sitz', value: 'Frankfurt am Main, Hessen' },
  { label: 'Anschrift', value: 'Kennedyallee 93, 60596 Frankfurt am Main' },
  { label: 'Tätigkeitsgebiet', value: 'Rhein-Main-Gebiet und deutschlandweit' },
  { label: 'Leistungen', value: 'Versicherungsvermittlung, Immobilien-Kapitalanlagen' },
  { label: 'Mitarbeiter', value: '8' },
  {
    label: 'Zertifizierungen',
    value: '§34d GewO (Versicherungsmakler), §34i GewO (Immobiliendarlehensvermittler)',
  },
]


const logoDownloads = [
  {
    label: 'Logo SVG (Blau)',
    description: 'Primärversion für helle Hintergründe',
    href: '/adler_invest_logo_blue.svg',
    icon: FileText,
  },
  {
    label: 'Logo PNG (Weiß)',
    description: 'Für dunkle Hintergründe',
    href: '#',
    icon: FileText,
  },
  {
    label: 'Medienkit herunterladen',
    description: 'ZIP mit allen Logo-Varianten + Factsheet',
    href: '#',
    icon: Download,
  },
]


export default function PressePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Presse — Adler Invest',
            url: 'https://adlerinvest.de/presse',
            description:
              'Pressematerial und Informationen für Medienvertreter über Adler Invest, unabhängiger Finanzdienstleister in Frankfurt am Main.',
            about: {
              '@type': 'FinancialService',
              name: 'Adler Invest',
              foundingDate: '2024',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Kennedyallee 93',
                addressLocality: 'Frankfurt am Main',
                postalCode: '60596',
                addressRegion: 'Hessen',
                addressCountry: 'DE',
              },
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
            PRESSE
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
            Presseinformationen
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.125rem',
              color: '#6B7494',
              maxWidth: '520px',
              lineHeight: 1.65,
            }}
          >
            Alle Informationen für Medienvertreter — kompakt und aktuell.
          </p>
        </div>
      </section>

      {/* Firmensteckbrief */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container-brand">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr)',
              gap: '48px',
              alignItems: 'start',
            }}
            className="presse-fact-grid"
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: '12px' }}>
                UNTERNEHMEN
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '2.25rem',
                  fontWeight: 600,
                  color: '#012778',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                Firmensteckbrief
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '16px',
                  color: '#6B7494',
                  lineHeight: 1.65,
                }}
              >
                Adler Invest ist ein unabhängiger Finanzdienstleister mit Sitz in Frankfurt am Main,
                spezialisiert auf Immobilien-Kapitalanlagen und Versicherungsberatung.
              </p>
            </div>

            <div
              style={{
                background: '#F4F6FA',
                borderRadius: '16px',
                border: '1px solid #DDE3EF',
                overflow: 'hidden',
              }}
            >
              {factSheetItems.map((item, index) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '18px 28px',
                    borderBottom:
                      index < factSheetItems.length - 1 ? '1px solid #DDE3EF' : 'none',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      color: '#6B7494',
                      minWidth: '120px',
                      flexShrink: 0,
                      paddingTop: '1px',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#2D3142',
                      lineHeight: 1.5,
                      minWidth: 0,
                      wordBreak: 'break-word',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section
        style={{
          background: '#012778',
          padding: '64px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Watermark eagle */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0.06,
            pointerEvents: 'none',
          }}
        >
          <svg width="320" height="320" viewBox="0 0 258 268" fill="none">
            <path d="M154.544 0L103.071 89.1542H206.018L154.544 0Z" fill="white" />
            <path d="M205.989 89.1084L154.516 178.263H257.462L205.989 89.1084Z" fill="white" />
            <path d="M257.263 178.148L154.317 178.148L205.79 267.302L257.263 178.148Z" fill="white" />
            <path d="M154.361 178.217L102.888 267.371H205.834L154.361 178.217Z" fill="white" />
            <path d="M154.376 178.148L51.4294 178.148L102.903 267.302L154.376 178.148Z" fill="white" />
            <path d="M206.004 89.2227L103.057 89.2227L154.53 178.377L206.004 89.2227Z" fill="white" />
            <path d="M51.4731 178.217L-6.10352e-05 267.371H102.946L51.4731 178.217Z" fill="white" />
          </svg>
        </div>

        <div className="container-brand" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '640px' }}>
            <p className="eyebrow-gold" style={{ marginBottom: '12px' }}>
              MEDIENKONTAKT
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '2rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: '32px',
              }}
            >
              Pressekontakt
            </h2>

            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '32px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'rgba(69,127,252,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Building2 size={24} color="#457FFC" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 600,
                      fontSize: '16px',
                      color: 'white',
                      marginBottom: '2px',
                    }}
                  >
                    Pressestelle Adler Invest
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.55)',
                    }}
                  >
                    Frankfurt am Main
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a
                  href="mailto:presse@adlerinvest.de"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: 'rgba(255,255,255,0.85)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '15px',
                    transition: 'color 0.2s',
                  }}
                >
                  <Mail size={18} color="#457FFC" style={{ flexShrink: 0 }} />
                  presse@adlerinvest.de
                </a>
                <a
                  href="tel:+4969000000000"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: 'rgba(255,255,255,0.85)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '15px',
                    transition: 'color 0.2s',
                  }}
                >
                  <Phone size={18} color="#457FFC" style={{ flexShrink: 0 }} />
                  +49 69 000 000 00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Downloads */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container-brand">
          <div style={{ marginBottom: '48px' }}>
            <p className="eyebrow" style={{ marginBottom: '12px' }}>
              MEDIENKIT
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '2.25rem',
                fontWeight: 600,
                color: '#012778',
                marginBottom: '12px',
              }}
            >
              Logo &amp; Medienkit
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '16px',
                color: '#6B7494',
                maxWidth: '480px',
                lineHeight: 1.65,
              }}
            >
              Offizielles Bildmaterial und Logoressourcen für die redaktionelle Verwendung.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {logoDownloads.map((item) => {
              const Icon = item.icon
              const isPrimary = item.label === 'Medienkit herunterladen'
              return (
                <a
                  key={item.label}
                  href={item.href}
                  download={item.href !== '#'}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    padding: '28px',
                    background: isPrimary ? '#0141CB' : '#F4F6FA',
                    borderRadius: '16px',
                    border: `1px solid ${isPrimary ? '#0141CB' : '#DDE3EF'}`,
                    textDecoration: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: item.href === '#' ? 'not-allowed' : 'pointer',
                    opacity: item.href === '#' ? 0.7 : 1,
                  }}

                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '10px',
                      background: isPrimary ? 'rgba(255,255,255,0.15)' : '#EEF2FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} color={isPrimary ? 'white' : '#0141CB'} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 600,
                        fontSize: '15px',
                        color: isPrimary ? 'white' : '#2D3142',
                        marginBottom: '4px',
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '13px',
                        color: isPrimary ? 'rgba(255,255,255,0.7)' : '#6B7494',
                        lineHeight: 1.5,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Boilerplate */}
      <section style={{ background: '#F4F6FA', padding: '80px 0' }}>
        <div className="container-brand">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p className="eyebrow-gold" style={{ marginBottom: '16px' }}>
              ÜBER ADLER INVEST
            </p>

            {/* Pull-quote style decorative mark */}
            <div
              aria-hidden="true"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '120px',
                lineHeight: 0.8,
                color: '#0141CB',
                opacity: 0.08,
                marginBottom: '-40px',
                userSelect: 'none',
              }}
            >
              &ldquo;
            </div>

            <div
              style={{
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #DDE3EF',
                borderLeft: '4px solid #C8A84B',
                padding: '36px 40px',
                position: 'relative',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: '#2D3142',
                }}
              >
                Adler Invest ist ein unabhängiger Finanzdienstleister mit Sitz in Frankfurt am Main.
                Das Unternehmen spezialisiert sich auf zwei Bereiche: Immobilien-Kapitalanlagen im
                Rhein-Main-Gebiet und unabhängige Versicherungsberatung. Im Bereich Immobilien
                begleitet Adler Invest Privatpersonen beim Erwerb von Renditeobjekten — von der
                Finanzierungsanfrage bis zum Notartermin — mit dem Ziel, durch Mieteinnahmen die
                Finanzierungsrate zu decken und langfristig Vermögen aufzubauen. Alle Beratungen
                sind kostenlos und unverbindlich.
              </p>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '13px',
                color: '#6B7494',
                marginTop: '16px',
                textAlign: 'right',
              }}
            >
              Autorisierter Abdruck für redaktionelle Zwecke gestattet.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .presse-fact-grid {
            grid-template-columns: 1fr 2fr !important;
          }
        }
      `}</style>
    </>
  )
}
