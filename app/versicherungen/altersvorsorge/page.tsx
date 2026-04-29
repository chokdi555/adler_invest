import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Altersvorsorgeversicherung | Private Rente | Adler Invest',
  description:
    'Altersvorsorgeversicherung in Frankfurt — private Rentenversicherung, fondsgebundene Altersvorsorge, Rürup und Riester. Adler Invest berät unabhängig und findet die beste Lösung für dich.',
  keywords: [
    'Altersvorsorgeversicherung Frankfurt',
    'Private Rentenversicherung',
    'Fondsgebundene Rentenversicherung',
    'Rürup-Rente',
    'Riester-Rente',
    'Altersvorsorge vergleichen',
  ],
  alternates: { canonical: 'https://adlerinvest.de/versicherungen/altersvorsorge' },
  openGraph: {
    title: 'Altersvorsorgeversicherung | Private Rente | Adler Invest',
    description:
      'Altersvorsorgeversicherung in Frankfurt — private Rente, fondsgebunden, Rürup und Riester. Adler Invest berät unabhängig und findet die beste Lösung für dich.',
    url: 'https://adlerinvest.de/versicherungen/altersvorsorge',
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
      name: 'Was ist eine Altersvorsorgeversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Altersvorsorgeversicherung ist ein Versicherungsvertrag, der dir im Ruhestand eine lebenslange Rente oder eine einmalige Kapitalauszahlung garantiert. Sie schließt die Versorgungslücke zwischen der gesetzlichen Rente und deinem tatsächlichen Bedarf im Alter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Formen der Altersvorsorgeversicherung gibt es?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zu den wichtigsten Formen zählen die private Rentenversicherung (klassisch oder fondsgebunden), die Rürup-Rente (Basisrente) mit steuerlicher Absetzbarkeit sowie die Riester-Rente mit staatlichen Zulagen. Jede Variante hat unterschiedliche Vor- und Nachteile.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viel sollte ich für meine Altersvorsorge sparen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Als Faustregel gelten 10–15 % des Bruttoeinkommens für die private Altersvorsorge. Die konkrete Höhe hängt jedoch von deiner Versorgungslücke ab — also der Differenz zwischen erwarteter gesetzlicher Rente und gewünschtem Lebensstandard im Ruhestand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ab wann lohnt sich eine Altersvorsorgeversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Je früher, desto besser. Durch den Zinseszinseffekt wirken sich auch kleine Beiträge über lange Laufzeiten stark aus. Ideal ist ein Beginn zwischen dem 25. und 35. Lebensjahr, aber auch ein späterer Einstieg kann sinnvoll sein.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche steuerlichen Vorteile habe ich?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rürup-Beiträge sind bis zu einem Höchstbetrag als Sonderausgaben absetzbar. Riester-Beiträge werden mit staatlichen Zulagen und Steuervorteilen gefördert. Bei der privaten Rentenversicherung ist nur der Ertragsanteil der Rente steuerpflichtig.',
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

const CheckIcon = ({ color = '#0141CB' }: { color?: string }) => (
  <span
    style={{
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: color,
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

export default function AltersvorsorgePage() {
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
              Altersvorsorgeversicherung
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.75rem, 5vw, 3.75rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.12,
                marginBottom: '24px',
                overflowWrap: 'break-word',
                hyphens: 'auto',
              }}
            >
              Altersvorsorgeversicherung —{' '}
              <em style={{ fontStyle: 'italic', color: '#457FFC' }}>
                deine Rente selbst gestalten
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
              Die gesetzliche Rente reicht längst nicht mehr aus. Mit einer Altersvorsorgeversicherung
              baust du gezielt eine zusätzliche Rente auf — steuerbegünstigt, flexibel und sicher.
              Als unabhängiger Makler vergleichen wir alle Anbieter und finden die beste Lösung für dich.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/kontakt" className="btn-primary">
                Kostenlose Beratung sichern
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
                { num: '50+', label: 'Anbieter im Vergleich' },
                { num: '100%', label: 'Unabhängige Beratung' },
                { num: '0 €', label: 'Kosten für dich' },
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
              lang="de"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.625rem, 3.5vw, 2.25rem)',
                fontWeight: 700,
                color: '#012778',
                marginBottom: '24px',
                lineHeight: 1.25,
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
                hyphens: 'auto',
              }}
            >
              Was ist eine Altersvorsorgeversicherung?
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
              Eine Altersvorsorgeversicherung ist ein Versicherungsvertrag, der dir im Ruhestand eine
              lebenslange Rente oder eine einmalige Kapitalauszahlung garantiert. Sie schließt die
              Versorgungslücke zwischen der gesetzlichen Rente und deinem tatsächlichen Bedarf im Alter.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1rem',
                color: '#6B7494',
                lineHeight: 1.8,
              }}
            >
              In Deutschland gibt es drei Säulen der Altersvorsorge: die gesetzliche Rente, die
              betriebliche Altersvorsorge und die private Vorsorge. Zur privaten Vorsorge zählen
              insbesondere die{' '}
              <strong style={{ color: '#2D3142' }}>private Rentenversicherung</strong>, die{' '}
              <strong style={{ color: '#2D3142' }}>Rürup-Rente</strong> (Basisrente) und die{' '}
              <strong style={{ color: '#2D3142' }}>Riester-Rente</strong> mit staatlicher Förderung.
            </p>
          </div>

          {/* Who needs it */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              marginTop: '64px',
            }}
          >
            {[
              {
                title: 'Angestellte & Berufseinsteiger',
                text: 'Je früher du startest, desto mehr profitierst du vom Zinseszinseffekt. Schon kleine monatliche Beiträge bauen über Jahrzehnte ein beachtliches Rentenkapital auf.',
              },
              {
                title: 'Gutverdiener & Selbständige',
                text: 'Wer gut verdient oder selbständig ist, hat eine große Versorgungslücke. Die Rürup-Rente bietet hier hohe steuerliche Absetzbarkeit und ist speziell auf diese Zielgruppen zugeschnitten.',
              },
              {
                title: 'Familien mit Kindern',
                text: 'Mit der Riester-Rente sichern Familien staatliche Zulagen — besonders für Kinder. Pro Kind gibt es jährliche Zulagen zusätzlich zu den persönlichen Zuschüssen.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '32px',
                  borderLeft: '3px solid #C8A84B',
                  background: '#F4F6FA',
                  borderRadius: '0 12px 12px 0',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#012778',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.10em',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9375rem',
                    color: '#2D3142',
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

      {/* ── TYPES COMPARISON ── */}
      <section style={{ background: '#F4F6FA', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div className="container-brand">
          <p className="eyebrow" style={{ marginBottom: '16px', textAlign: 'center' }}>Vergleich</p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.375rem, 3.5vw, 2.25rem)',
              fontWeight: 700,
              color: '#012778',
              marginBottom: '16px',
              lineHeight: 1.3,
              textAlign: 'center',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              maxWidth: '640px',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingLeft: '8px',
              paddingRight: '8px',
            }}
          >
            Private Rente vs. Rürup vs. Riester
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
            Jede Variante hat ihre Stärken — die Wahl hängt von deiner Lebenssituation,
            deinem Einkommen und deinen Zielen ab.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
              gap: '32px',
            }}
          >
            {/* Private Rentenversicherung */}
            <div className="card" style={{ borderTop: '4px solid #0141CB' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#0141CB',
                  borderRadius: '99px',
                  padding: '4px 14px',
                  marginBottom: '24px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Maximal flexibel
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#012778',
                  marginBottom: '8px',
                }}
              >
                Private Rentenversicherung
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.5rem',
                  color: '#C8A84B',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}
              >
                ab 50 €/Monat
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.875rem',
                  color: '#6B7494',
                  marginBottom: '24px',
                  lineHeight: 1.6,
                }}
              >
                Klassisch oder fondsgebunden — du bestimmst Beitragshöhe, Laufzeit und Auszahlungsform.
                Kein staatlicher Zuschuss, dafür maximale Freiheit.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Flexible Ein- und Auszahlungen',
                  'Wahl zwischen Rente und Einmalbetrag',
                  'Fondsgebunden für höhere Renditechancen',
                  'Nur Ertragsanteil steuerpflichtig',
                  'Keine Einkommensgrenze',
                  'Vererbbar an Hinterbliebene',
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
                    <CheckIcon color="#0141CB" />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: '24px',
                  padding: '16px 20px',
                  background: '#EEF2FA',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.875rem',
                  color: '#2D3142',
                  lineHeight: 1.5,
                }}
              >
                <strong>Beispiel:</strong> 30-Jähriger, 150 €/Monat, 37 Jahre Laufzeit —
                bei 5 % Rendite rund 240.000 € Kapital zum Renteneintritt.
              </div>
            </div>

            {/* Rürup-Rente */}
            <div className="card" style={{ borderTop: '4px solid #C8A84B' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#C8A84B',
                  borderRadius: '99px',
                  padding: '4px 14px',
                  marginBottom: '24px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Für Gutverdiener & Selbständige
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#012778',
                  marginBottom: '8px',
                }}
              >
                Rürup-Rente (Basisrente)
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.5rem',
                  color: '#C8A84B',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}
              >
                Hohe Steuerersparnis
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.875rem',
                  color: '#6B7494',
                  marginBottom: '24px',
                  lineHeight: 1.6,
                }}
              >
                Staatlich geförderte Basisrente mit hoher steuerlicher Absetzbarkeit — ideal für
                Selbständige und Gutverdiener, die heute Steuern sparen und später Rente beziehen wollen.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Beiträge als Sonderausgaben absetzbar',
                  'Bis zu 27.566 € jährlich (2025)',
                  'Insolvenz- und Hartz-IV-geschützt',
                  'Lebenslange Rentenauszahlung',
                  'Auch für Selbständige geeignet',
                  'Keine Einmalkapitalauszahlung möglich',
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
                    <CheckIcon color="#C8A84B" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Riester-Rente */}
            <div className="card" style={{ borderTop: '4px solid #457FFC' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#F4F6FA',
                  borderRadius: '99px',
                  padding: '4px 14px',
                  marginBottom: '24px',
                  border: '1px solid #DDE3EF',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#2D3142',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Mit staatlichen Zulagen
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#012778',
                  marginBottom: '8px',
                }}
              >
                Riester-Rente
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.5rem',
                  color: '#C8A84B',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}
              >
                175 € + 300 €/Kind
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.875rem',
                  color: '#6B7494',
                  marginBottom: '24px',
                  lineHeight: 1.6,
                }}
              >
                Staatlich geförderte Altersvorsorge mit jährlichen Zulagen und Steuervorteilen —
                besonders attraktiv für Angestellte mit Kindern.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Grundzulage 175 € pro Jahr',
                  'Kinderzulage bis 300 € pro Kind',
                  'Steuerliche Absetzbarkeit bis 2.100 €',
                  'Garantiert mindestens eingezahlte Beiträge',
                  'Für rentenversicherungspflichtige Angestellte',
                  'Besteuerung der Rente in der Auszahlungsphase',
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
                    <CheckIcon color="#457FFC" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cost factors */}
          <div
            style={{
              marginTop: '48px',
              background: 'white',
              borderRadius: '20px',
              padding: 'clamp(24px, 3vw, 40px) clamp(20px, 4vw, 48px)',
              border: '1px solid #DDE3EF',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#012778',
                marginBottom: '32px',
              }}
            >
              Wovon hängt deine spätere Rente ab?
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '32px',
              }}
            >
              {[
                {
                  factor: 'Einstiegsalter',
                  detail: 'Je früher, desto besser. Der Zinseszinseffekt wirkt sich über Jahrzehnte drastisch auf das Endkapital aus.',
                },
                {
                  factor: 'Beitragshöhe',
                  detail: 'Faustregel: 10–15 % des Bruttoeinkommens. Auch kleine Beiträge zählen — Hauptsache, der Vertrag läuft lange.',
                },
                {
                  factor: 'Anlageform',
                  detail: 'Fondsgebundene Tarife bieten höhere Renditechancen. Klassische Tarife sind sicherer, aber ertragsärmer.',
                },
                {
                  factor: 'Kostenquote',
                  detail: 'Abschluss- und Verwaltungskosten schmälern die Rendite. Hier lohnt sich ein gründlicher Anbietervergleich.',
                },
              ].map((item) => (
                <div key={item.factor}>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#C8A84B',
                      textTransform: 'uppercase',
                      letterSpacing: '0.10em',
                      marginBottom: '8px',
                    }}
                  >
                    {item.factor}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.9375rem',
                      color: '#2D3142',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ADLER INVEST ── */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div className="container-brand">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: '16px' }}>Warum Adler Invest</p>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
                  fontWeight: 700,
                  color: '#012778',
                  marginBottom: '24px',
                  lineHeight: 1.25,
                }}
              >
                dein unabhängiger Makler — kein Verkäufer
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
                Anders als Vertreter einer einzelnen Versicherungsgesellschaft sind wir an keinen
                Anbieter gebunden. Wir vergleichen alle relevanten Gesellschaften auf dem deutschen
                Markt und finden die Altersvorsorge, die zu deinem Einkommen, deinen Zielen und
                deiner Lebenssituation passt.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1rem',
                  color: '#6B7494',
                  lineHeight: 1.8,
                  marginBottom: '40px',
                }}
              >
                Gerade bei der Altersvorsorge können kleine Unterschiede in Kosten und Rendite
                über Jahrzehnte zehntausende Euro ausmachen — wir achten auf jedes Detail.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Jetzt Termin vereinbaren
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  title: 'Alle Anbieter im Blick',
                  text: 'Wir vergleichen über 50 Versicherer und finden den besten Tarif für dein individuelles Profil.',
                },
                {
                  title: 'Versorgungslücke berechnen',
                  text: 'Wir analysieren deine gesetzliche Rente und zeigen dir konkret, wie viel du zusätzlich sparen musst.',
                },
                {
                  title: 'Persönliche Betreuung',
                  text: 'Kein Call Center. Dein fester Ansprechpartner begleitet dich vom Abschluss bis zum Renteneintritt.',
                },
                {
                  title: 'Kostenlos für dich',
                  text: 'Unsere Beratung ist für dich vollständig kostenlos. Wir werden vom Versicherer vergütet — ohne Aufpreis für dich.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    padding: '24px',
                    border: '1px solid #DDE3EF',
                    borderRadius: '12px',
                    background: '#F4F6FA',
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#C8A84B',
                      flexShrink: 0,
                      marginTop: '6px',
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#012778',
                        marginBottom: '6px',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9375rem',
                        color: '#6B7494',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#F4F6FA', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: '16px', textAlign: 'center' }}>FAQ</p>
          <h2
            lang="de"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              fontWeight: 700,
              color: '#012778',
              marginBottom: '48px',
              lineHeight: 1.25,
              textAlign: 'center',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              hyphens: 'auto',
              paddingLeft: '16px',
              paddingRight: '16px',
            }}
          >
            Häufige Fragen zur Altersvorsorgeversicherung
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: 'Was ist eine Altersvorsorgeversicherung?',
                a: 'Eine Altersvorsorgeversicherung ist ein Versicherungsvertrag, der dir im Ruhestand eine lebenslange Rente oder eine einmalige Kapitalauszahlung garantiert. Sie schließt die Versorgungslücke zwischen der gesetzlichen Rente und deinem tatsächlichen Bedarf im Alter.',
              },
              {
                q: 'Welche Formen der Altersvorsorgeversicherung gibt es?',
                a: 'Zu den wichtigsten Formen zählen die private Rentenversicherung (klassisch oder fondsgebunden), die Rürup-Rente (Basisrente) mit steuerlicher Absetzbarkeit sowie die Riester-Rente mit staatlichen Zulagen. Jede Variante hat unterschiedliche Vor- und Nachteile.',
              },
              {
                q: 'Wie viel sollte ich für meine Altersvorsorge sparen?',
                a: 'Als Faustregel gelten 10–15 % des Bruttoeinkommens für die private Altersvorsorge. Die konkrete Höhe hängt jedoch von deiner Versorgungslücke ab — also der Differenz zwischen erwarteter gesetzlicher Rente und gewünschtem Lebensstandard im Ruhestand.',
              },
              {
                q: 'Ab wann lohnt sich eine Altersvorsorgeversicherung?',
                a: 'Je früher, desto besser. Durch den Zinseszinseffekt wirken sich auch kleine Beiträge über lange Laufzeiten stark aus. Ideal ist ein Beginn zwischen dem 25. und 35. Lebensjahr, aber auch ein späterer Einstieg kann sinnvoll sein.',
              },
              {
                q: 'Welche steuerlichen Vorteile habe ich?',
                a: 'Rürup-Beiträge sind bis zu einem Höchstbetrag als Sonderausgaben absetzbar. Riester-Beiträge werden mit staatlichen Zulagen und Steuervorteilen gefördert. Bei der privaten Rentenversicherung ist nur der Ertragsanteil der Rente steuerpflichtig.',
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: 'white',
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
            Jetzt kostenlose Altersvorsorge-Beratung sichern
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
            Wir vergleichen alle Anbieter und finden die beste Altersvorsorgeversicherung für
            deine Situation. Kostenlos, unverbindlich, persönlich.
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
