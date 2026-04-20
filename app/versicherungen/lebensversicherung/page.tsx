import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lebensversicherung | Risikolebensversicherung | Adler Invest',
  description:
    'Lebensversicherung in Frankfurt — Risikoleben oder Kapitallebensversicherung? Adler Invest berät unabhängig und findet die beste Lösung für Sie.',
  keywords: [
    'Lebensversicherung Frankfurt',
    'Risikolebensversicherung',
    'Kapitallebensversicherung',
    'Familie absichern',
    'Lebensversicherung vergleichen',
  ],
  alternates: { canonical: 'https://adlerinvest.de/versicherungen/lebensversicherung' },
  openGraph: {
    title: 'Lebensversicherung | Risikolebensversicherung | Adler Invest',
    description:
      'Lebensversicherung in Frankfurt — Risikoleben oder Kapitallebensversicherung? Adler Invest berät unabhängig und findet die beste Lösung für Sie.',
    url: 'https://adlerinvest.de/versicherungen/lebensversicherung',
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
      name: 'Was ist der Unterschied zwischen Risikolebens- und Kapitallebensversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Risikolebensversicherung bietet reinen Todesfallschutz zu günstigen Prämien und zahlt im Todesfall eine vereinbarte Summe an die Hinterbliebenen. Die Kapitallebensversicherung kombiniert Schutz mit einem Sparplan, ist aber deutlich teurer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wer braucht eine Lebensversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Lebensversicherung ist besonders wichtig für Familien mit Allein- oder Hauptverdiener, Immobilieneigentümer mit laufender Finanzierung sowie Alleinerziehende.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viel kostet eine Risikolebensversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Risikolebensversicherung kostet je nach Alter, Gesundheitszustand und gewünschter Absicherungssumme zwischen 15 und 40 Euro pro Monat. Für einen 30-jährigen Nichtraucher mit 300.000 Euro Versicherungssumme sind bereits unter 20 Euro möglich.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich eine Lebensversicherung abschließen, wenn ich Vorerkrankungen habe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in vielen Fällen ist das möglich. Verschiedene Versicherer bewerten Vorerkrankungen unterschiedlich. Als erfahrener Makler prüfen wir vorab anonym, welche Gesellschaft Ihren Antrag zu welchen Konditionen annehmen würde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie hoch sollte die Versicherungssumme sein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Als Richtwert gilt das 3- bis 5-fache des Jahresnettoeinkommens. Bei einer Immobilienfinanzierung sollte die Versicherungssumme mindestens der offenen Darlehenssumme entsprechen.',
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

export default function LebensversicherungPage() {
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

          <div style={{ maxWidth: '680px' }}>
            <p className="eyebrow-gold" style={{ marginBottom: '20px' }}>
              Lebensversicherung
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.12,
                marginBottom: '24px',
              }}
            >
              Lebensversicherung —{' '}
              <em style={{ fontStyle: 'italic', color: '#457FFC' }}>
                Familie und Vermögen absichern
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
              }}
            >
              Wer für andere sorgt, trägt Verantwortung. Eine Lebensversicherung sichert Ihre Familie
              finanziell ab — falls das Schlimmste eintreten sollte. Als unabhängiger Makler
              vergleichen wir alle Anbieter und finden die beste Lösung für Sie.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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

            <div style={{ display: 'flex', gap: '40px', marginTop: '56px', flexWrap: 'wrap' }}>
              {[
                { num: '50+', label: 'Anbieter im Vergleich' },
                { num: '100%', label: 'Unabhängige Beratung' },
                { num: '0 €', label: 'Kosten für Sie' },
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
              Was ist eine Lebensversicherung?
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
              Eine Lebensversicherung ist ein Vertrag, bei dem der Versicherer im Todesfall der
              versicherten Person eine vereinbarte Summe an die Hinterbliebenen auszahlt. Sie
              dient der finanziellen Absicherung von Familien, Partnern und Kreditnehmern gegen
              das Risiko des vorzeitigen Todes.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1rem',
                color: '#6B7494',
                lineHeight: 1.8,
              }}
            >
              In Deutschland werden zwei grundlegende Formen unterschieden: die{' '}
              <strong style={{ color: '#2D3142' }}>Risikolebensversicherung</strong>, die reinen
              Todesfallschutz bietet, und die{' '}
              <strong style={{ color: '#2D3142' }}>Kapitallebensversicherung</strong>, die Schutz
              mit einem Sparvertrag kombiniert. Verbraucherschützer empfehlen in den meisten Fällen
              die Risikolebensversicherung, da sie günstiger und transparenter ist.
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
                title: 'Familien mit Kindern',
                text: 'Wenn ein Elternteil als Haupt- oder Alleinverdiener ausfällt, sichert die Lebensversicherung den Lebensunterhalt der Familie und die Ausbildung der Kinder.',
              },
              {
                title: 'Immobilieneigentümer',
                text: 'Wer ein Haus oder eine Wohnung finanziert, schützt mit einer Risikolebensversicherung die Familie davor, die Immobilie im Todesfall verkaufen zu müssen.',
              },
              {
                title: 'Alleinerziehende',
                text: 'Für Alleinerziehende ist die Lebensversicherung besonders wichtig: Sie stellt sicher, dass Kinder auch ohne den verbleibenden Elternteil finanziell versorgt sind.',
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
              fontSize: 'clamp(1.875rem, 3.5vw, 2.25rem)',
              fontWeight: 700,
              color: '#012778',
              marginBottom: '16px',
              lineHeight: 1.25,
              textAlign: 'center',
            }}
          >
            Risikolebens- vs. Kapitallebensversicherung
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
            Beide Produkte haben ihren Platz — die Wahl hängt von Ihren Zielen ab.
            Wir beraten Sie ehrlich und unabhängig.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
              gap: '32px',
            }}
          >
            {/* Risikolebensversicherung */}
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
                  Empfohlen von Verbraucherschützern
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
                Risikolebensversicherung
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
                ab 15–40 €/Monat
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
                Zahlt eine vereinbarte Todesfallsumme an die Hinterbliebenen. Kein Sparanteil —
                rein auf Absicherung ausgerichtet. Deshalb sehr günstig.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Sehr günstiger Beitrag',
                  'Klarer Zweck: Absicherung der Familie',
                  'Feste Laufzeit wählbar (10–30 Jahre)',
                  'Flexible Versicherungssumme',
                  'Ideal zur Absicherung von Immobilienkrediten',
                  'Transparent und einfach zu verstehen',
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
                <strong>Beispiel:</strong> 30-jähriger Nichtraucher, 300.000 € Versicherungssumme,
                25 Jahre Laufzeit — ab ca. 15 €/Monat.
              </div>
            </div>

            {/* Kapitallebensversicherung */}
            <div className="card" style={{ borderTop: '4px solid #6B7494' }}>
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
                    color: '#6B7494',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Für Altersvorsorge
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
                Kapitallebens- / Rentenversicherung
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.5rem',
                  color: '#6B7494',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}
              >
                Höhere Beiträge
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
                Kombiniert Todesfallschutz mit einem Sparplan. Am Ende der Laufzeit wird das
                angesparte Kapital ausgezahlt — unabhängig davon, ob der Versicherte verstorben ist.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Todesfallschutz inklusive',
                  'Kapitalaufbau über die Laufzeit',
                  'Auszahlung im Erlebensfall',
                  'Steuervorteile bei Altverträgen (vor 2005)',
                  'Für bestimmte Altersvorsorge-Konstellationen',
                  'Fondsgebunden oder klassisch verfügbar',
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
                    <CheckIcon color="#DDE3EF" />
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
              Wovon hängt der Beitrag ab?
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
                  factor: 'Alter',
                  detail: 'Je jünger beim Abschluss, desto günstiger. Idealerweise zwischen 25 und 35 Jahren abschließen.',
                },
                {
                  factor: 'Gesundheit',
                  detail: 'Nichtraucher zahlen deutlich weniger. Vorerkrankungen können den Beitrag erhöhen oder zur Ablehnung führen.',
                },
                {
                  factor: 'Versicherungssumme',
                  detail: 'Richtwert: das 3–5-fache des Jahresnettogehalts, mindestens die offene Kreditsumme.',
                },
                {
                  factor: 'Laufzeit',
                  detail: 'Sollte bis zur Kreditablösung oder bis die Kinder finanziell unabhängig sind reichen.',
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
                Ihr unabhängiger Makler — kein Verkäufer
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
                Markt und finden die Police, die zu Ihrem Gesundheitsprofil und Ihren Zielen passt.
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
                Besonders bei der Gesundheitsprüfung kann ein erfahrener Makler erhebliche
                Unterschiede erzielen — verschiedene Versicherer bewerten Vorerkrankungen
                sehr unterschiedlich.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Jetzt Termin vereinbaren
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  title: 'Alle Anbieter im Blick',
                  text: 'Wir vergleichen über 50 Versicherer und finden den besten Beitrag für Ihr individuelles Risikoprofil.',
                },
                {
                  title: 'Anonyme Risikovoranfrage',
                  text: 'Wir prüfen vorab anonym, welche Versicherer Ihren Gesundheitszustand akzeptieren — ohne Auswirkungen auf Ihre Versicherbarkeit.',
                },
                {
                  title: 'Persönliche Betreuung',
                  text: 'Kein Call Center. Ihr fester Ansprechpartner begleitet Sie vom Antrag bis zum Leistungsfall.',
                },
                {
                  title: 'Kostenlos für Sie',
                  text: 'Unsere Beratung ist für Sie vollständig kostenlos. Wir werden vom Versicherer vergütet — ohne Aufpreis für Sie.',
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
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.875rem, 3.5vw, 2.25rem)',
              fontWeight: 700,
              color: '#012778',
              marginBottom: '48px',
              lineHeight: 1.25,
              textAlign: 'center',
            }}
          >
            Häufige Fragen zur Lebensversicherung
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: 'Was ist der Unterschied zwischen Risikolebens- und Kapitallebensversicherung?',
                a: 'Die Risikolebensversicherung bietet reinen Todesfallschutz zu günstigen Prämien und zahlt im Todesfall eine vereinbarte Summe an die Hinterbliebenen. Die Kapitallebensversicherung kombiniert diesen Schutz mit einem Sparplan und baut zusätzlich Kapital auf — ist aber deutlich teurer.',
              },
              {
                q: 'Wer braucht eine Lebensversicherung?',
                a: 'Eine Lebensversicherung ist besonders wichtig für Familien mit Allein- oder Hauptverdiener, Immobilieneigentümer mit laufender Finanzierung sowie Alleinerziehende. Sie stellt sicher, dass Hinterbliebene finanziell abgesichert bleiben.',
              },
              {
                q: 'Wie viel kostet eine Risikolebensversicherung?',
                a: 'Eine Risikolebensversicherung kostet je nach Alter, Gesundheitszustand und gewünschter Absicherungssumme zwischen 15 und 40 Euro pro Monat. Für einen 30-jährigen Nichtraucher mit 300.000 Euro Versicherungssumme sind bereits unter 20 Euro möglich.',
              },
              {
                q: 'Kann ich eine Lebensversicherung abschließen, wenn ich Vorerkrankungen habe?',
                a: 'Ja, in vielen Fällen ist das möglich. Verschiedene Versicherer bewerten Vorerkrankungen unterschiedlich. Als erfahrener Makler prüfen wir vorab anonym, welche Gesellschaft Ihren Antrag zu welchen Konditionen annehmen würde — ohne Auswirkungen auf Ihre Versicherbarkeit.',
              },
              {
                q: 'Wie hoch sollte die Versicherungssumme sein?',
                a: 'Als Richtwert gilt das 3- bis 5-fache des Jahresnettoeinkommens. Bei einer Immobilienfinanzierung sollte die Versicherungssumme mindestens der offenen Darlehenssumme entsprechen, um die Familie vor dem Verlust der Immobilie zu schützen.',
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
            Wir vergleichen alle Anbieter und finden die beste Lebensversicherung für
            Ihre Situation. Kostenlos, unverbindlich, persönlich.
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
