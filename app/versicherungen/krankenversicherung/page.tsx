import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, CheckCircle, XCircle, ArrowRight, Phone, ArrowLeft } from 'lucide-react'
import EagleWatermark from '@/components/EagleWatermark'

export const metadata: Metadata = {
  title: 'Krankenversicherung | PKV & GKV Beratung | Adler Invest',
  description:
    'GKV oder PKV? Adler Invest berät Sie unabhängig zur optimalen Krankenversicherung — inklusive GKV-Zusatzversicherung und PKV-Wechsel in Frankfurt.',
  keywords: [
    'Krankenversicherung',
    'PKV Frankfurt',
    'GKV Zusatzversicherung',
    'Private Krankenversicherung',
    'Krankenversicherung vergleichen',
  ],
  alternates: { canonical: 'https://adlerinvest.de/versicherungen/krankenversicherung' },
  openGraph: {
    title: 'Krankenversicherung | PKV & GKV Beratung | Adler Invest',
    description: 'GKV oder PKV? Wir beraten Sie unabhängig zur optimalen Krankenversicherung.',
    url: 'https://adlerinvest.de/versicherungen/krankenversicherung',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function KrankenversicherungPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wann lohnt sich die PKV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die PKV lohnt sich für Selbstständige, Beamte und Angestellte mit einem Bruttoeinkommen über der Versicherungspflichtgrenze (2025: 73.800 €/Jahr). Junge, gesunde Singles zahlen in der PKV oft weniger als in der GKV und erhalten bessere Leistungen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist eine GKV-Zusatzversicherung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eine GKV-Zusatzversicherung ergänzt die Leistungen der gesetzlichen Krankenversicherung. Beliebt sind Zahn-Zusatzversicherungen, Krankenhauszusatzversicherungen (Chefarzt, Einbettzimmer) und Auslandskrankenversicherungen.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            <ArrowLeft size={14} />
            Alle Versicherungen
          </Link>

          <div style={{ maxWidth: '680px' }}>
            <p className="eyebrow-gold" style={{ marginBottom: '20px' }}>
              Krankenversicherung
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
              Krankenversicherung —{' '}
              <em style={{ fontStyle: 'italic', color: '#457FFC' }}>
                GKV oder PKV?
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
              Die Wahl der Krankenversicherung ist eine der wichtigsten Finanz­entscheidungen —
              besonders beim Wechsel in die Selbstständigkeit oder bei steigendem Einkommen.
              Wir beraten Sie unabhängig und finden die beste Lösung.
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
                { num: 'PKV', label: 'oder GKV — wir prüfen beides' },
                { num: '30+', label: 'Anbieter im Vergleich' },
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
      <section className="py-20 bg-white">
        <div className="container-brand">
          <div className="max-w-3xl">
            <span className="eyebrow">WAS IST KRANKENVERSICHERUNG?</span>
            <div className="gold-divider mt-3 mb-6" />
            <h2
              className="font-display text-xl sm:text-3xl lg:text-4xl font-bold mb-6"
              style={{ color: '#012778' }}
            >
              Das deutsche Krankenversicherungssystem
            </h2>
            <p className="text-lg mb-4" style={{ color: '#2D3142' }}>
              In Deutschland ist jeder Einwohner verpflichtet, krankenversichert zu sein.
              Das System besteht aus der gesetzlichen Krankenversicherung (GKV) und der
              privaten Krankenversicherung (PKV). Wer sich für die richtige Option
              entscheidet, spart langfristig erheblich und erhält bessere Leistungen.
            </p>
            <p style={{ color: '#6B7494' }}>
              Adler Invest berät Sie unabhängig — wir haben keinen Anreiz, Ihnen eine
              bestimmte Versicherungsform zu empfehlen. Unsere Empfehlung basiert
              ausschließlich auf Ihrer persönlichen Situation.
            </p>
          </div>
        </div>
      </section>

      {/* ── GKV vs PKV COMPARISON ── */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="text-center mb-12">
            <span className="eyebrow">VERGLEICH</span>
            <div className="gold-divider mx-auto mt-3 mb-5" />
            <h2
              className="font-display text-4xl font-bold"
              style={{ color: '#012778' }}
            >
              GKV vs. PKV — der direkte Vergleich
            </h2>
          </div>
          <p className="table-scroll-hint text-xs mb-3 items-center justify-end gap-1" style={{ color: '#9BA3BF' }}>
            Tabelle seitwärts scrollen →
          </p>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0, minWidth: 500 }}>
              <thead>
                <tr>
                  <th
                    className="text-left p-4 font-semibold text-sm"
                    style={{
                      background: '#EEF2FA',
                      color: '#6B7494',
                      borderRadius: '12px 0 0 0',
                      border: '1px solid #DDE3EF',
                    }}
                  >
                    Kriterium
                  </th>
                  <th
                    className="text-center p-4 font-semibold"
                    style={{
                      background: '#EEF2FA',
                      color: '#012778',
                      border: '1px solid #DDE3EF',
                    }}
                  >
                    GKV (Gesetzlich)
                  </th>
                  <th
                    className="text-center p-4 font-semibold"
                    style={{
                      background: '#0141CB',
                      color: 'white',
                      borderRadius: '0 12px 0 0',
                      border: '1px solid #0141CB',
                    }}
                  >
                    PKV (Privat)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    criterion: 'Beitragsberechnung',
                    gkv: 'Einkommensabhängig (ca. 14-16% des Bruttos)',
                    pkv: 'Risikoabhängig (Alter, Gesundheit)',
                    pkvPositive: true,
                  },
                  {
                    criterion: 'Familienversicherung',
                    gkv: 'Kostenlose Mitversicherung von Familie',
                    pkv: 'Jedes Mitglied zahlt eigenen Beitrag',
                    pkvPositive: false,
                  },
                  {
                    criterion: 'Arztwahl',
                    gkv: 'Kassenärzte (mit Überweisung für Spezialisten)',
                    pkv: 'Freie Arzt- und Krankenhauswahl',
                    pkvPositive: true,
                  },
                  {
                    criterion: 'Wartezeiten',
                    gkv: 'Oft längere Wartezeiten beim Facharzt',
                    pkv: 'In der Regel bevorzugte Termine',
                    pkvPositive: true,
                  },
                  {
                    criterion: 'Leistungsumfang',
                    gkv: 'Standardleistungen nach GKV-Katalog',
                    pkv: 'Individuell wählbare, meist umfangreichere Leistungen',
                    pkvPositive: true,
                  },
                  {
                    criterion: 'Beitrag im Alter',
                    gkv: 'Bleibt einkommensabhängig (auch Rente)',
                    pkv: 'Kann stark steigen — Altersrückstellungen wichtig',
                    pkvPositive: false,
                  },
                  {
                    criterion: 'Selbstständige',
                    gkv: 'Möglich, aber teuer (voller Beitrag)',
                    pkv: 'Häufig deutlich günstiger',
                    pkvPositive: true,
                  },
                  {
                    criterion: 'Beamte',
                    gkv: 'Keine Beihilfe-Kompatibilität',
                    pkv: 'Ideal — Kombination mit Beihilfe',
                    pkvPositive: true,
                  },
                ].map((row, idx) => (
                  <tr key={row.criterion}>
                    <td
                      className="p-4 text-sm font-medium"
                      style={{
                        background: idx % 2 === 0 ? 'white' : '#F4F6FA',
                        color: '#2D3142',
                        border: '1px solid #DDE3EF',
                      }}
                    >
                      {row.criterion}
                    </td>
                    <td
                      className="p-4 text-sm text-center"
                      style={{
                        background: idx % 2 === 0 ? 'white' : '#F4F6FA',
                        color: '#6B7494',
                        border: '1px solid #DDE3EF',
                      }}
                    >
                      {row.gkv}
                    </td>
                    <td
                      className="p-4 text-sm text-center"
                      style={{
                        background: row.pkvPositive
                          ? idx % 2 === 0
                            ? '#F0F7FF'
                            : '#E8F2FF'
                          : idx % 2 === 0
                          ? 'white'
                          : '#F4F6FA',
                        color: row.pkvPositive ? '#0141CB' : '#6B7494',
                        border: '1px solid #DDE3EF',
                        fontWeight: row.pkvPositive ? 500 : 400,
                      }}
                    >
                      {row.pkv}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHEN PKV MAKES SENSE ── */}
      <section className="py-20 bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow">PKV SINNVOLL</span>
              <div className="gold-divider mt-3 mb-6" />
              <h2
                className="font-display text-3xl font-bold mb-6"
                style={{ color: '#012778' }}
              >
                Wann lohnt sich die PKV?
              </h2>
              <div className="space-y-3">
                {[
                  'Angestellte mit Einkommen über der Versicherungspflichtgrenze (2025: 73.800 €/Jahr)',
                  'Selbstständige und Freiberufler',
                  'Beamte (Kombination mit Beihilfe)',
                  'Junge, gesunde Singles ohne Kinder',
                  'Personen mit Bedarf an besonderen Leistungen (z.B. Heilpraktiker, Chefarzt)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: '#1A8A5A', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: '#2D3142' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow">GKV SINNVOLL</span>
              <div className="gold-divider mt-3 mb-6" />
              <h2
                className="font-display text-3xl font-bold mb-6"
                style={{ color: '#012778' }}
              >
                Wann ist die GKV besser?
              </h2>
              <div className="space-y-3">
                {[
                  'Familien mit mehreren Kindern und einem Alleinverdiener',
                  'Personen mit Vorerkrankungen (PKV-Beiträge können erheblich steigen)',
                  'Arbeitnehmer mit planbaren Karriereunterbrechungen (z.B. Elternzeit)',
                  'Personen mit geringem oder schwankendem Einkommen',
                  'Wer langfristige Planungssicherheit beim Beitrag bevorzugt',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: '#0141CB', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: '#2D3142' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GKV ZUSATZ ── */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="text-center mb-12">
            <span className="eyebrow">GKV ERGÄNZUNG</span>
            <div className="gold-divider mx-auto mt-3 mb-5" />
            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold"
              style={{ color: '#012778', overflowWrap: 'break-word', hyphens: 'auto' }}
            >
              GKV-Zusatzversicherungen
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#6B7494' }}>
              In der GKV und trotzdem beste Leistungen — mit gezielten Zusatzversicherungen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Zahn-Zusatz',
                description:
                  'Höhere Erstattung für Zahnersatz, Inlays und professionelle Zahnreinigung. Oft schon ab 10 €/Monat.',
              },
              {
                title: 'Krankenhaus-Zusatz',
                description:
                  'Chefarztbehandlung und Einbettzimmer im Krankenhaus — ohne die volle PKV abzuschließen.',
              },
              {
                title: 'Auslandskranken',
                description:
                  'Weltweiter Schutz auf Reisen inklusive Rücktransport — für Privat- und Dienstreisen unverzichtbar.',
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: '#EEF2FA' }}
                >
                  <Heart size={20} style={{ color: '#0141CB' }} />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: '#0D0E12' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: '#6B7494' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#012778' }}>
        <div className="container-brand text-center">
          <h2
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ overflowWrap: 'break-word', hyphens: 'auto' }}
          >
            Jetzt Krankenversicherung optimieren
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Unabhängige Beratung — wir empfehlen, was zu Ihrer Situation passt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn-primary">
              Kostenlose KV-Beratung
              <ArrowRight size={18} />
            </Link>
            <Link href="/kontakt" className="btn-ghost mobile-only">
              <Phone size={18} />
              Rückruf anfordern
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
