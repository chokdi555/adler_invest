import type { Metadata } from 'next'
import Link from 'next/link'
import { Car, CheckCircle, ArrowRight, Phone, ArrowLeft, TrendingDown, Shield } from 'lucide-react'
import EagleWatermark from '@/components/EagleWatermark'

export const metadata: Metadata = {
  title: 'KFZ-Versicherung | Günstig & Optimal | Adler Invest',
  description:
    'KFZ-Versicherung vergleichen und sparen. Haftpflicht, Teilkasko oder Vollkasko — Adler Invest findet den günstigsten Tarif für Sie in Frankfurt.',
  keywords: [
    'KFZ-Versicherung Frankfurt',
    'Autoversicherung vergleichen',
    'Teilkasko',
    'Vollkasko',
    'günstige KFZ Versicherung',
  ],
  alternates: { canonical: 'https://adlerinvest.de/versicherungen/kfz' },
  openGraph: {
    title: 'KFZ-Versicherung | Günstig & Optimal | Adler Invest',
    description: 'Günstig und optimal abgesichert — KFZ-Versicherung jetzt vergleichen.',
    url: 'https://adlerinvest.de/versicherungen/kfz',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function KFZPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen Teilkasko und Vollkasko?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Teilkasko deckt Schäden durch äußere Einwirkungen ab (Diebstahl, Brand, Sturm, Wildunfall, Glasbruch). Die Vollkasko deckt zusätzlich selbst verschuldete Unfälle und Vandalismus ab.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist die Schadenfreiheitsklasse (SF-Klasse)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die SF-Klasse (Schadenfreiheitsklasse) spiegelt Ihre Unfallhistorie wider. Je länger Sie unfallfrei fahren, desto höher die SF-Klasse und desto niedriger der Beitragssatz.',
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
              KFZ-Versicherung
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
              KFZ-Versicherung —{' '}
              <em style={{ fontStyle: 'italic', color: '#457FFC' }}>
                günstig und optimal abgesichert
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
              Adler Invest vergleicht alle Anbieter und findet den günstigsten Tarif für
              Ihr Fahrzeug — mit dem richtigen Schutzumfang. Haftpflicht, Teilkasko oder
              Vollkasko, wir beraten Sie unabhängig.
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
                { num: '100+', label: 'Tarife im Vergleich' },
                { num: '30 %', label: 'typische Ersparnis beim Wechsel' },
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

      {/* ── THREE COVERAGE TYPES ── */}
      <section className="py-24 bg-white">
        <div className="container-brand">
          <div className="text-center mb-16">
            <span className="eyebrow">VERSICHERUNGSSCHUTZ</span>
            <div className="gold-divider mx-auto mt-3 mb-5" />
            <h2 className="font-display text-4xl font-bold" style={{ color: '#012778' }}>
              Haftpflicht, Teilkasko oder Vollkasko?
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#6B7494' }}>
              Drei Schutzstufen — wir erklären den Unterschied und welche für Sie sinnvoll ist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'KFZ-Haftpflicht',
                badge: 'Gesetzlich Pflicht',
                badgeColor: '#CC2B2B',
                price: 'ab ~200 €/Jahr',
                description:
                  'Pflichtversicherung für alle Fahrzeuge in Deutschland. Deckt Schäden ab, die Sie anderen mit Ihrem Fahrzeug zufügen — an Personen, Fahrzeugen und Sachen.',
                covers: [
                  'Personenschäden an Unfallopfern',
                  'Fahrzeugschäden beim Unfallgegner',
                  'Sachschäden (Leitplanken, Mauern, etc.)',
                  'Gesetzliche Pflichtversicherung',
                ],
                notCovers: [
                  'Schäden am eigenen Fahrzeug',
                  'Eigene Verletzungen',
                ],
              },
              {
                title: 'Teilkasko',
                badge: 'Empfehlenswert',
                badgeColor: '#C8A84B',
                price: 'ab ~350 €/Jahr',
                description:
                  'Haftpflicht plus Schutz bei Schäden durch äußere Einwirkungen — unabhängig davon, wer schuld ist. Sinnvoll für Fahrzeuge ab ca. 5.000 € Wert.',
                covers: [
                  'Alles aus der KFZ-Haftpflicht',
                  'Diebstahl und Einbruch',
                  'Brand und Explosion',
                  'Sturm, Hagel, Überschwemmung',
                  'Wildunfälle (z.B. Reh)',
                  'Glasbruch',
                ],
                notCovers: [
                  'Selbst verschuldete Unfälle',
                  'Vandalismusschäden',
                ],
              },
              {
                title: 'Vollkasko',
                badge: 'Rundum-Schutz',
                badgeColor: '#0141CB',
                price: 'ab ~500 €/Jahr',
                description:
                  'Der vollständige Schutz für Ihr Fahrzeug. Empfehlenswert für neue oder teure Fahrzeuge — deckt auch selbst verschuldete Schäden ab.',
                covers: [
                  'Alles aus Haftpflicht und Teilkasko',
                  'Selbst verschuldete Unfälle',
                  'Vandalismus',
                  'Schäden durch Fahrerflucht Unbekannter',
                  'Parkschäden (je nach Tarif)',
                ],
                notCovers: [
                  'Normale Verschleißschäden',
                  'Vorsätzliche Schäden',
                ],
              },
            ].map((type) => (
              <div key={type.title} className="card" style={{ position: 'relative' }}>
                <div
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{ background: type.badgeColor, color: 'white', letterSpacing: '0.06em' }}
                >
                  {type.badge}
                </div>
                <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#012778' }}>
                  {type.title}
                </h3>
                <div className="font-mono text-sm font-medium mb-3" style={{ color: '#0141CB' }}>
                  {type.price}
                </div>
                <p className="text-sm mb-4" style={{ color: '#6B7494' }}>
                  {type.description}
                </p>
                <div className="space-y-1.5 mb-4">
                  {type.covers.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs">
                      <CheckCircle size={12} style={{ color: '#1A8A5A', flexShrink: 0 }} />
                      <span style={{ color: '#2D3142' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {type.notCovers.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs">
                      <span className="text-xs" style={{ color: '#CC2B2B', flexShrink: 0 }}>✗</span>
                      <span style={{ color: '#6B7494' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SF-KLASSE EXPLAINER ── */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">SF-KLASSE ERKLÄRT</span>
              <div className="gold-divider mt-3 mb-6" />
              <h2
                className="font-display text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: '#012778' }}
              >
                Die Schadenfreiheitsklasse (SF-Klasse)
              </h2>
              <p className="text-lg mb-4" style={{ color: '#2D3142' }}>
                Die SF-Klasse ist das wichtigste Kriterium für Ihren KFZ-Beitrag.
                Sie spiegelt Ihre Unfallhistorie wider: Je länger Sie unfallfrei fahren,
                desto höher die SF-Klasse und desto niedriger Ihr Beitragssatz.
              </p>
              <p style={{ color: '#6B7494' }}>
                Jedes Jahr ohne Schaden verbessert Ihre SF-Klasse. Ein Schaden
                verschlechtert sie und erhöht Ihren Beitrag für mehrere Jahre.
                Deshalb lohnt es sich oft, kleinere Schäden selbst zu zahlen.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { sf: 'SF 0', years: '0 Jahre schadensfrei', rate: '100%', desc: 'Einsteiger' },
                { sf: 'SF 5', years: '5 Jahre schadensfrei', rate: '55%', desc: 'Deutliche Ersparnis' },
                { sf: 'SF 10', years: '10 Jahre schadensfrei', rate: '40%', desc: 'Langjährig erfahren' },
                { sf: 'SF 20', years: '20 Jahre schadensfrei', rate: '25%', desc: 'Maximale Vergünstigung' },
                { sf: 'SF 35', years: '35 Jahre schadensfrei', rate: '20%', desc: 'Nur top Fahrer' },
              ].map((row) => (
                <div
                  key={row.sf}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: 'white', border: '1px solid #DDE3EF' }}
                >
                  <div
                    className="font-mono font-bold text-sm w-12 text-center"
                    style={{ color: '#0141CB' }}
                  >
                    {row.sf}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium" style={{ color: '#2D3142' }}>
                      {row.years}
                    </div>
                    <div className="text-xs" style={{ color: '#6B7494' }}>
                      {row.desc}
                    </div>
                  </div>
                  <div
                    className="font-mono font-bold"
                    style={{ color: row.rate === '100%' ? '#6B7494' : '#1A8A5A' }}
                  >
                    {row.rate}
                  </div>
                </div>
              ))}
              <p className="text-xs pl-2" style={{ color: '#6B7494' }}>
                * Beitragssätze sind vereinfachte Richtwerte. Tatsächliche Beiträge
                hängen vom Versicherer und weiteren Faktoren ab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAVING TIPS ── */}
      <section className="py-20 bg-white">
        <div className="container-brand">
          <div className="text-center mb-12">
            <span className="eyebrow">SPARTIPPS</span>
            <div className="gold-divider mx-auto mt-3 mb-5" />
            <h2 className="font-display text-4xl font-bold" style={{ color: '#012778' }}>
              So sparen Sie bei der KFZ-Versicherung
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Jahresbeitrag statt monatlich',
                description:
                  'Wer jährlich zahlt, spart typischerweise 3–5% gegenüber der monatlichen Zahlweise.',
              },
              {
                title: 'Garage angeben',
                description:
                  'Ein fester Abstellplatz (Garage, Carport) senkt das Diebstahlrisiko — und damit den Beitrag.',
              },
              {
                title: 'Höhere Selbstbeteiligung',
                description:
                  'Eine Selbstbeteiligung von 300–500 € senkt den Beitrag spürbar — sinnvoll für Fahrer mit langer SF-Klasse.',
              },
              {
                title: 'Kilometerleistung angeben',
                description:
                  'Wer wenig fährt (unter 10.000 km/Jahr), kann durch eine realistische Kilometerangabe sparen.',
              },
              {
                title: 'Jährlicher Anbietervergleich',
                description:
                  'Viele Versicherer bieten attraktive Neukundenrabatte. Ein Wechsel zum Jahreswechsel spart oft 20–30%.',
              },
              {
                title: 'SF-Klasse übertragen',
                description:
                  'SF-Klassen können zwischen Familienangehörigen übertragen werden — fragen Sie uns dazu.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: '#EEF2FA' }}
                >
                  <TrendingDown size={20} style={{ color: '#0141CB' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#0D0E12' }}>
                  {tip.title}
                </h3>
                <p className="text-sm" style={{ color: '#6B7494' }}>
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#012778' }}>
        <div className="container-brand text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            KFZ-Versicherung jetzt vergleichen
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Wir vergleichen alle Anbieter und finden den günstigsten Tarif für Sie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn-primary">
              Jetzt vergleichen lassen
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
