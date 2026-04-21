import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hausrat & Gebäudeversicherung | Adler Invest Frankfurt',
  description:
    'Hausratversicherung und Gebäudeversicherung — umfassender Schutz für dein Zuhause. Als Kapitalanleger ist die Gebäudeversicherung Pflicht.',
  keywords: [
    'Hausratversicherung Frankfurt',
    'Gebäudeversicherung',
    'Wohngebäudeversicherung',
    'Hausrat vergleichen',
    'Vermieter Gebäudeversicherung',
  ],
  alternates: { canonical: 'https://adlerinvest.de/versicherungen/hausrat' },
  openGraph: {
    title: 'Hausrat & Gebäudeversicherung | Adler Invest Frankfurt',
    description:
      'Hausratversicherung und Gebäudeversicherung — umfassender Schutz für dein Zuhause. Als Kapitalanleger ist die Gebäudeversicherung Pflicht.',
    url: 'https://adlerinvest.de/versicherungen/hausrat',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const insuranceSchema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Adler Invest Versicherungen',
  url: 'https://adlerinvest.de/versicherungen',
  areaServed: 'Frankfurt am Main, Rhein-Main-Gebiet',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Hausrat- und Gebäudeversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Hausratversicherung schützt den Inhalt einer Wohnung — Möbel, Elektronik, Kleidung und Wertsachen. Die Gebäudeversicherung schützt das Gebäude selbst, also Mauerwerk, Dach, Fenster und fest eingebaute Installationen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich als Vermieter eine Gebäudeversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, als Vermieter ist eine Wohngebäudeversicherung unverzichtbar. Sie schützt das Gebäude bei Feuer, Leitungswasser, Sturm und Hagel und sichert auch den Mietausfall ab, wenn die Wohnung nach einem Schaden vorübergehend nicht bewohnbar ist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterversicherungsverzicht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beim Unterversicherungsverzicht verzichtet der Versicherer darauf, die Leistung zu kürzen, wenn der Versicherungswert zu niedrig angesetzt wurde. Das ist wichtig, weil Hausrat und Gebäude oft unterschätzt werden und im Schadensfall sonst nur ein Teil des Schadens erstattet wird.',
      },
    },
  ],
}

const EagleWatermark = ({ style }: { style?: React.CSSProperties }) => (
  <div style={{ pointerEvents: 'none', ...style }}>
    <svg viewBox="0 0 258 268" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path d="M154.544 0L103.071 89.1542H206.018L154.544 0Z" fill="white" />
      <path d="M205.989 89.1084L154.516 178.263H257.462L205.989 89.1084Z" fill="white" />
      <path d="M257.263 178.148L154.317 178.148L205.79 267.302L257.263 178.148Z" fill="white" />
      <path d="M154.361 178.217L102.888 267.371H205.834L154.361 178.217Z" fill="white" />
      <path d="M154.376 178.148L51.4294 178.148L102.903 267.302L154.376 178.148Z" fill="white" />
      <path d="M206.004 89.2227L103.057 89.2227L154.53 178.377L206.004 89.2227Z" fill="white" />
      <path d="M51.4731 178.217L-6.10352e-05 267.371H102.946L51.4731 178.217Z" fill="white" />
    </svg>
  </div>
)

const CheckIcon = () => (
  <span
    style={{
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: '#0141CB',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

export default function HausratPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />

      {/* ── HERO ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #012778 0%, #001C59 60%, #0D0E12 100%)',
          paddingTop: '72px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <EagleWatermark
          style={{
            position: 'absolute',
            right: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '480px',
            height: '480px',
            opacity: 0.06,
          }}
        />

        <div className="container-brand" style={{ paddingTop: 'clamp(40px, 5vw, 80px)', paddingBottom: 'clamp(56px, 8vw, 96px)', position: 'relative', zIndex: 1 }}>
          <Link
            href="/versicherungen"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'rgba(255,255,255,0.60)',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.875rem',
              textDecoration: 'none',
              marginBottom: '32px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Alle Versicherungen
          </Link>

          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow-gold" style={{ marginBottom: '20px' }}>
              Hausrat &amp; Gebäude
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.875rem, 5vw, 3.75rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.12,
                marginBottom: '24px',
                overflowWrap: 'break-word',
                hyphens: 'auto',
              }}
            >
              Hausrat &amp; Gebäudeversicherung —{' '}
              <em style={{ fontStyle: 'italic', color: '#457FFC' }}>
                dein Zuhause rundum geschützt
              </em>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.125rem',
                color: 'rgba(255,255,255,0.80)',
                lineHeight: 1.7,
                marginBottom: '40px',
                maxWidth: '560px',
                margin: '0 auto 40px',
              }}
            >
              Ob Mieter oder Eigentümer — wir sichern dein Inventar und deine Immobilie
              gegen die häufigsten Schadensursachen ab. Für Kapitalanleger ist die
              Gebäudeversicherung unverzichtbar.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/kontakt" className="btn-primary">
                Kostenlos vergleichen lassen
              </Link>
              <Link
                href="/versicherungen"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 32px',
                  border: '1.5px solid rgba(255,255,255,0.30)',
                  borderRadius: '8px',
                  color: 'white',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Alle Versicherungen
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '40px', marginTop: '56px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { num: '1 von 3', label: 'Haushalte ohne Hausrat' },
                { num: '100%', label: 'Unabhängige Beratung' },
                { num: '0 €', label: 'Beratungskosten' },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.875rem',
                      fontWeight: 500,
                      color: '#C8A84B',
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}
                  >
                    {item.num}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.55)',
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEFINITION ── */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div className="container-brand">
          <div style={{ maxWidth: '720px' }}>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Definition</p>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.875rem, 3.5vw, 2.25rem)',
                fontWeight: 700,
                color: '#012778',
                marginBottom: '24px',
                lineHeight: 1.25,
              }}
            >
              Was ist Hausrat- und Gebäudeversicherung?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.125rem',
                color: '#2D3142',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}
            >
              Hausrat- und Gebäudeversicherung schützen zwei verschiedene Bereiche deines Zuhauses:
              die <strong>Hausratversicherung</strong> sichert den Inhalt einer Wohnung —
              alles, was beim Umzug mitgenommen werden würde. Die{' '}
              <strong>Gebäudeversicherung</strong> schützt das Gebäude selbst.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1rem',
                color: '#6B7494',
                lineHeight: 1.8,
              }}
            >
              Mieter benötigen die Hausratversicherung, Eigentümer beide. Als Vermieter einer
              Kapitalanlage-Immobilie ist die Wohngebäudeversicherung gesetzlich nicht vorgeschrieben,
              aber de facto unverzichtbar — ohne sie trägst du bei Feuer, Wasserschaden oder
              Sturm den gesamten Schaden selbst.
            </p>
          </div>

          {/* Two-column quick overview */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: '24px',
              marginTop: '56px',
            }}
          >
            <div
              style={{
                background: '#EEF2FA',
                borderRadius: '16px',
                padding: '32px',
                borderTop: '4px solid #0141CB',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#0141CB',
                  textTransform: 'uppercase',
                  letterSpacing: '0.10em',
                  marginBottom: '12px',
                }}
              >
                Für Mieter &amp; Eigentümer
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#012778',
                  marginBottom: '12px',
                }}
              >
                Hausratversicherung
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9375rem',
                  color: '#2D3142',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}
              >
                Versichert Möbel, Elektronik, Kleidung, Wertsachen und persönliche Gegenstände
                gegen Feuer, Leitungswasser, Einbruch, Sturm und Vandalismus.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.25rem',
                  color: '#0141CB',
                  fontWeight: 500,
                }}
              >
                Richtwert: 650 €/m²
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8125rem', color: '#6B7494', marginTop: '4px' }}>
                Versicherungssumme Wohnfläche
              </p>
            </div>
            <div
              style={{
                background: '#F4F6FA',
                borderRadius: '16px',
                padding: '32px',
                borderTop: '4px solid #C8A84B',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#C8A84B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.10em',
                  marginBottom: '12px',
                }}
              >
                Für Eigentümer &amp; Vermieter
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#012778',
                  marginBottom: '12px',
                }}
              >
                Gebäudeversicherung
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9375rem',
                  color: '#2D3142',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}
              >
                Versichert Mauerwerk, Dach, Fenster, Türen und fest eingebaute Installationen
                gegen Feuer, Sturm, Hagel, Leitungswasser und Elementarschäden.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.25rem',
                  color: '#C8A84B',
                  fontWeight: 500,
                }}
              >
                Wert nach Baujahr
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8125rem', color: '#6B7494', marginTop: '4px' }}>
                Berechnung nach Konstruktionswert
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE DETAILS ── */}
      <section style={{ background: '#F4F6FA', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div className="container-brand">
          <p className="eyebrow" style={{ marginBottom: '16px', textAlign: 'center' }}>Leistungsumfang</p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.875rem, 3.5vw, 2.25rem)',
              fontWeight: 700,
              color: '#012778',
              marginBottom: '56px',
              lineHeight: 1.25,
              textAlign: 'center',
            }}
          >
            Was ist konkret versichert?
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '32px',
            }}
          >
            {/* Hausrat */}
            <div>
              <div
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #DDE3EF',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#EEF2FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0141CB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#012778',
                    marginBottom: '20px',
                  }}
                >
                  Hausratversicherung — deckt ab:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Möbel, Elektrogeräte, Unterhaltungselektronik',
                    'Kleidung und Textilien',
                    'Schmuck und Wertsachen (bis zum vereinbarten Grenzwert)',
                    'Fahrräder (häufig als Zusatzschutz buchbar)',
                    'Schäden durch Feuer und Rauch',
                    'Schäden durch Leitungswasser (Rohrbruch)',
                    'Einbruchdiebstahl und Vandalismus nach Einbruch',
                    'Sturm ab Windstärke 8 und Hagel',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9375rem',
                        color: '#2D3142',
                        lineHeight: 1.6,
                        marginBottom: '10px',
                      }}
                    >
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    marginTop: '24px',
                    padding: '14px 18px',
                    background: '#EEF2FA',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.875rem',
                    color: '#2D3142',
                  }}
                >
                  <strong>Tipp:</strong> Achten du auf den Unterversicherungsverzicht — so wird
                  auch dann vollständig geleistet, wenn die Versicherungssumme zu niedrig war.
                </div>
              </div>
            </div>

            {/* Gebäude */}
            <div>
              <div
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #DDE3EF',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#EEF2FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0141CB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#012778',
                    marginBottom: '20px',
                  }}
                >
                  Gebäudeversicherung — deckt ab:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Mauerwerk, Dach, Fassade',
                    'Fenster, Türen, Treppen',
                    'Fest eingebaute Küchen und Sanitäranlagen',
                    'Schäden durch Feuer, Blitzschlag, Explosion',
                    'Sturm und Hagel (am Gebäude)',
                    'Leitungswasser (Rohrbruch im Gebäude)',
                    'Mietausfall bei vorübergehender Unbewohnbarkeit',
                    'Elementarschäden optional (Überschwemmung, Erdrutsch)',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9375rem',
                        color: '#2D3142',
                        lineHeight: 1.6,
                        marginBottom: '10px',
                      }}
                    >
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    marginTop: '24px',
                    padding: '14px 18px',
                    background: '#FFF9EC',
                    borderRadius: '8px',
                    border: '1px solid #E8D5A0',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.875rem',
                    color: '#2D3142',
                  }}
                >
                  <strong>Für Kapitalanleger:</strong> Die Versicherungsprämie ist als Werbungskosten
                  steuerlich absetzbar. Kosten können anteilig auf Mieter (Betriebskosten) umgelegt werden.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LANDLORD SPECIAL NOTE ── */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(48px, 6vw, 80px) 0' }}>
        <div className="container-brand">
          <div
            style={{
              background: 'linear-gradient(135deg, #EEF2FA 0%, #F4F6FA 100%)',
              borderRadius: '24px',
              padding: 'clamp(28px, 4vw, 56px) clamp(20px, 4vw, 64px)',
              border: '1px solid #DDE3EF',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: '48px',
                alignItems: 'center',
              }}
            >
              <div>
                <p className="eyebrow-gold" style={{ marginBottom: '16px' }}>
                  Für Kapitalanleger
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700,
                    color: '#012778',
                    marginBottom: '20px',
                    lineHeight: 1.3,
                  }}
                >
                  Als Vermieter: Gebäudeversicherung ist unverzichtbar
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    color: '#2D3142',
                    lineHeight: 1.8,
                    marginBottom: '16px',
                  }}
                >
                  Wer eine Immobilie als Kapitalanlage vermietet, ist auf eine Wohngebäudeversicherung
                  angewiesen. Sie schützt nicht nur das Gebäude, sondern sichert auch den Mietausfall
                  ab, wenn die Wohnung nach einem Schaden vorübergehend nicht bewohnbar ist.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9375rem',
                    color: '#6B7494',
                    lineHeight: 1.8,
                    marginBottom: '32px',
                  }}
                >
                  Die Prämie ist als Werbungskosten steuerlich absetzbar. Ein weiterer Vorteil
                  für Kapitalanleger: Kosten können anteilig als Betriebskosten auf den Mieter
                  umgelegt werden.
                </p>
                <Link href="/immobilien" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Mehr zu Immobilien-Kapitalanlagen
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Gebäudeschutz bei Feuer, Wasser, Sturm und Hagel',
                  'Mietausfall bei Unbewohnbarkeit (bis 12 Monate)',
                  'Prämie als Werbungskosten steuerlich absetzbar',
                  'Betriebskostenumlegung auf den Mieter möglich',
                  'Elementarschutz (Überschwemmung etc.) als Zusatz buchbar',
                  'Kombinierbar mit Adler Invest Immobilien-Beratung',
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.9375rem',
                      color: '#2D3142',
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckIcon />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ADLER INVEST ── */}
      <section style={{ background: '#F4F6FA', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div className="container-brand">
          <p className="eyebrow" style={{ marginBottom: '16px', textAlign: 'center' }}>Warum Adler Invest</p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.875rem, 3.5vw, 2.25rem)',
              fontWeight: 700,
              color: '#012778',
              marginBottom: '16px',
              lineHeight: 1.25,
              textAlign: 'center',
            }}
          >
            Unabhängig, transparent, persönlich
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1rem',
              color: '#6B7494',
              textAlign: 'center',
              maxWidth: '520px',
              margin: '0 auto 56px',
              lineHeight: 1.7,
            }}
          >
            Als unabhängiger Makler sind wir keinem Anbieter verpflichtet — nur dir.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'Marktvergleich',
                text: 'Wir vergleichen alle relevanten Anbieter und finden den besten Schutz zum besten Preis — für Hausrat und Gebäude.',
              },
              {
                title: 'Richtige Versicherungssumme',
                text: 'Wir berechnen die korrekte Versicherungssumme mit Unterversicherungsverzicht, damit du im Schadensfall vollständig entschädigt wirst.',
              },
              {
                title: 'Kapitalanlager-Expertise',
                text: 'Als Immobilienspezialisten kennen wir die besonderen Anforderungen für Vermieter und Kapitalanleger im Rhein-Main-Gebiet.',
              },
              {
                title: 'Persönliche Betreuung',
                text: 'Dein fester Ansprechpartner begleitet dich von der Auswahl bis zur Schadensregulierung. Kein anonymes Call Center.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card"
              >
                <div
                  style={{
                    width: '40px',
                    height: '3px',
                    background: '#C8A84B',
                    borderRadius: '2px',
                    marginBottom: '20px',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#012778',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9375rem',
                    color: '#6B7494',
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
          <p className="eyebrow" style={{ marginBottom: '16px', textAlign: 'center' }}>FAQ</p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              fontWeight: 700,
              color: '#012778',
              marginBottom: '48px',
              lineHeight: 1.3,
              textAlign: 'center',
              overflowWrap: 'break-word',
              hyphens: 'auto',
            }}
          >
            Häufige Fragen zu Hausrat &amp; Gebäude
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: 'Was ist der Unterschied zwischen Hausrat- und Gebäudeversicherung?',
                a: 'Die Hausratversicherung schützt den Inhalt einer Wohnung — Möbel, Elektronik, Kleidung und Wertsachen. Die Gebäudeversicherung schützt das Gebäude selbst, also Mauerwerk, Dach, Fenster und fest eingebaute Installationen.',
              },
              {
                q: 'Brauche ich als Vermieter eine Gebäudeversicherung?',
                a: 'Ja, als Vermieter ist eine Wohngebäudeversicherung unverzichtbar. Sie schützt das Gebäude bei Feuer, Leitungswasser, Sturm und Hagel und sichert auch den Mietausfall ab, wenn die Wohnung nach einem Schaden vorübergehend nicht bewohnbar ist.',
              },
              {
                q: 'Was ist der Unterversicherungsverzicht?',
                a: 'Beim Unterversicherungsverzicht verzichtet der Versicherer darauf, die Leistung zu kürzen, wenn der Versicherungswert zu niedrig angesetzt wurde. Das ist wichtig, weil Hausrat und Gebäude oft unterschätzt werden und im Schadensfall sonst nur ein Teil des Schadens erstattet wird.',
              },
              {
                q: 'Wie hoch sollte die Versicherungssumme beim Hausrat sein?',
                a: 'Als Richtwert empfehlen Experten 650 Euro pro Quadratmeter Wohnfläche. Für eine 80 m² Wohnung wären das 52.000 Euro Versicherungssumme. Wertvolle Gegenstände wie Schmuck sollten separat angegeben werden.',
              },
              {
                q: 'Kann ich die Gebäudeversicherungsprämie als Vermieter absetzen?',
                a: 'Ja, die Gebäudeversicherungsprämie ist als Werbungskosten bei den Einkünften aus Vermietung und Verpachtung vollständig steuerlich absetzbar. Zudem können die Kosten anteilig als Betriebskosten auf den Mieter umgelegt werden.',
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: '#F4F6FA',
                  borderRadius: '12px',
                  padding: '28px 32px',
                  border: '1px solid #DDE3EF',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#012778',
                    marginBottom: '12px',
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9375rem',
                    color: '#6B7494',
                    lineHeight: 1.7,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: '#012778',
          padding: 'clamp(56px, 8vw, 96px) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <EagleWatermark
          style={{
            position: 'absolute',
            left: '-80px',
            bottom: '-80px',
            width: '420px',
            height: '420px',
            opacity: 0.06,
          }}
        />
        <div className="container-brand" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="eyebrow-gold" style={{ marginBottom: '20px' }}>
            Jetzt handeln
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}
          >
            Jetzt kostenlose Versicherungsberatung sichern
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.125rem',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '520px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}
          >
            Ob Hausrat, Gebäude oder beides — wir finden den besten Schutz zum besten Preis.
            Kostenlos und unverbindlich.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Kostenlose Beratung sichern
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.45)',
              marginTop: '20px',
            }}
          >
            Kostenlos · Unverbindlich · Persönlich · Mo–Fr 9–18 Uhr
          </p>
        </div>
      </section>
    </>
  )
}
