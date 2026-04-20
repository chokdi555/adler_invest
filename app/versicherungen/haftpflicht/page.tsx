import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, CheckCircle, AlertTriangle, ArrowRight, Phone, ArrowLeft, XCircle } from 'lucide-react'
import EagleWatermark from '@/components/EagleWatermark'

export const metadata: Metadata = {
  title: 'Haftpflichtversicherung | Adler Invest Frankfurt',
  description:
    'Haftpflichtversicherung — Schutz vor dem finanziellen Ruin. In Deutschland haften Sie mit Ihrem gesamten Vermögen. Adler Invest findet den besten Tarif.',
  keywords: [
    'Haftpflichtversicherung',
    'Privathaftpflicht Frankfurt',
    'Haftpflicht vergleichen',
    'Tierhalterhaftpflicht',
  ],
  alternates: { canonical: 'https://adlerinvest.de/versicherungen/haftpflicht' },
  openGraph: {
    title: 'Haftpflichtversicherung | Adler Invest Frankfurt',
    description: 'Schutz vor dem finanziellen Ruin — Haftpflichtversicherung für Privat, Tier und Bau.',
    url: 'https://adlerinvest.de/versicherungen/haftpflicht',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function HaftpflichtPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Warum ist die Privathaftpflicht so wichtig?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nach §823 BGB haften Sie in Deutschland unbegrenzt für Schäden, die Sie anderen zufügen — mit Ihrem gesamten gegenwärtigen und zukünftigen Vermögen, auch mit Pfändung von Gehalt und Rente. Eine Privathaftpflicht übernimmt diese Kosten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Deckungssumme brauche ich?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Empfohlen werden mindestens 10 Millionen Euro pauschal für Personen-, Sach- und Vermögensschäden. Gute Tarife bieten 15–50 Millionen Euro, oft zu sehr ähnlichen Preisen.',
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
              Haftpflichtversicherung
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
              Haftpflichtversicherung —{' '}
              <em style={{ fontStyle: 'italic', color: '#457FFC' }}>
                Schutz vor dem finanziellen Ruin
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
              In Deutschland haften Sie für Schäden, die Sie anderen zufügen, mit Ihrem
              gesamten Vermögen — unbegrenzt. Die Privathaftpflicht ist die wichtigste
              Versicherung überhaupt. Wir finden den besten Tarif für Sie.
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
                { num: '§823', label: 'unbegrenzte Haftung nach BGB' },
                { num: '50 Mio', label: 'Deckungssumme in Top-Tarifen' },
                { num: 'ab 3 €', label: 'monatlich bereits versichert' },
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

      {/* ── WHY ESSENTIAL ── */}
      <section className="py-20 bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">WARUM UNVERZICHTBAR</span>
              <div className="gold-divider mt-3 mb-6" />
              <h2
                className="font-display text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: '#012778' }}
              >
                §823 BGB — unbegrenzte Haftung
              </h2>
              <p className="text-lg mb-4" style={{ color: '#2D3142' }}>
                Das deutsche Recht regelt in §823 BGB: Wer durch eine Handlung oder
                Unterlassung einem anderen einen Schaden zufügt, ist verpflichtet, diesen
                zu ersetzen — und zwar vollständig, ohne Obergrenze.
              </p>
              <p className="mb-6" style={{ color: '#6B7494' }}>
                Das bedeutet: Eine Sekunde Unachtsamkeit kann Sie Ihre finanzielle
                Existenz kosten. Ein Kind läuft auf die Straße, jemand stolpert über
                Ihren Koffer, ein Missgeschick im Büro — schnell entstehen
                Schadensforderungen in fünf- oder sechsstelliger Höhe.
              </p>
              <div
                className="rounded-xl p-5"
                style={{ background: '#FFF8EC', border: '1px solid #D4840A' }}
              >
                <div className="flex gap-3 items-start">
                  <AlertTriangle size={20} style={{ color: '#D4840A', flexShrink: 0 }} />
                  <p className="text-sm" style={{ color: '#2D3142' }}>
                    <strong>Beispiel:</strong> Sie fahren versehentlich jemanden mit dem
                    Fahrrad an. Die Person bricht sich das Bein, kann 6 Monate nicht
                    arbeiten. Schadenersatzanspruch: 30.000–50.000 €. Ohne Haftpflicht
                    zahlen Sie das aus eigener Tasche.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: '10 Mio.', label: 'Mindest-Deckungssumme empfohlen' },
                { num: '< 10 €', label: 'Monatsbeitrag für gute Privathaftpflicht' },
                { num: '∞', label: 'Persönliche Haftung ohne Versicherung' },
                { num: '95%', label: 'aller Schadensfälle unter 100.000 €' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card text-center"
                  style={{ padding: '24px' }}
                >
                  <div
                    className="font-mono text-3xl font-bold mb-2"
                    style={{ color: '#0141CB' }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: '#6B7494' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TYPES ── */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="text-center mb-12">
            <span className="eyebrow">VERSICHERUNGSARTEN</span>
            <div className="gold-divider mx-auto mt-3 mb-5" />
            <h2 className="font-display text-4xl font-bold" style={{ color: '#012778' }}>
              Welche Haftpflicht brauchen Sie?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Privathaftpflicht',
                badge: 'Wichtigste',
                badgeColor: '#0141CB',
                description:
                  'Für alle Privatpersonen unverzichtbar. Deckt Personen-, Sach- und Vermögensschäden ab, die Sie im Alltag verursachen. Günstig — ab ca. 40–80 €/Jahr.',
                includes: [
                  'Schäden im Alltag und Haushalt',
                  'Schäden durch Kinder',
                  'Schäden durch gemietete Sachen (z.B. Ferienwohnung)',
                  'Schlüsselverlust',
                ],
              },
              {
                title: 'Tierhalterhaftpflicht',
                badge: 'Für Tierhalter',
                badgeColor: '#C8A84B',
                description:
                  'Pflicht für Hundehalter in vielen Bundesländern (inkl. Hessen). Deckung für Schäden durch Ihr Tier — egal ob zu Hause oder unterwegs.',
                includes: [
                  'Personenschäden durch Tier',
                  'Sachschäden durch Tier',
                  'Haftung des Tierhalters nach §833 BGB',
                  'Auch für Reiter und Pferde erhältlich',
                ],
              },
              {
                title: 'Bauherrenhaftpflicht',
                badge: 'Für Bauherren',
                badgeColor: '#1A8A5A',
                description:
                  'Wer baut oder renoviert, haftet für Schäden auf der Baustelle. Die Bauherrenhaftpflicht ist zeitlich befristet und läuft mit Fertigstellung aus.',
                includes: [
                  'Unfälle auf der Baustelle',
                  'Schäden an Nachbargebäuden',
                  'Schäden durch Handwerker auf Ihrem Grundstück',
                  'Temporär bis zur Fertigstellung',
                ],
              },
            ].map((type) => (
              <div
                key={type.title}
                className="card"
                style={{ position: 'relative' }}
              >
                <div
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{ background: type.badgeColor, color: 'white', letterSpacing: '0.06em' }}
                >
                  {type.badge}
                </div>
                <h3 className="font-semibold text-xl mb-3" style={{ color: '#0D0E12' }}>
                  {type.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#6B7494' }}>
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} style={{ color: '#1A8A5A', flexShrink: 0 }} />
                      <span style={{ color: '#2D3142' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section className="py-20 bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2
                className="font-display text-3xl font-bold mb-8"
                style={{ color: '#012778' }}
              >
                Was ist versichert?
              </h2>
              <div className="space-y-3">
                {[
                  'Personenschäden (Verletzungen, Gesundheitsschäden)',
                  'Sachschäden (Beschädigung oder Zerstörung von Eigentum)',
                  'Vermögensschäden als Folge von Personen- oder Sachschäden',
                  'Schlüsselverlust (fremde Schlüssel)',
                  'Schäden durch Kinder unter 7 Jahren (deliktunfähig)',
                  'Gefälligkeitsschäden (kleine Hilfeleistungen)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: '#1A8A5A', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: '#2D3142' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2
                className="font-display text-3xl font-bold mb-8"
                style={{ color: '#012778' }}
              >
                Was ist nicht versichert?
              </h2>
              <div className="space-y-3">
                {[
                  'Vorsätzlich herbeigeführte Schäden',
                  'Schäden am eigenen Eigentum',
                  'Schäden im Rahmen einer beruflichen Tätigkeit (eigene Berufshaftpflicht nötig)',
                  'Kfz-Schäden (eigene KFZ-Haftpflicht nötig)',
                  'Krieg, Kernenergie',
                  'Schäden durch Haustiere (eigene Tierhalterhaftpflicht nötig)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <XCircle size={16} style={{ color: '#CC2B2B', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: '#2D3142' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="mt-12 p-6 rounded-2xl"
            style={{ background: '#EEF2FA', border: '1px solid #DDE3EF' }}
          >
            <div className="flex gap-4 items-center">
              <Users size={24} style={{ color: '#0141CB', flexShrink: 0 }} />
              <p style={{ color: '#2D3142' }}>
                <strong>Unsere Empfehlung:</strong> Mindestdeckungssumme von{' '}
                <strong style={{ color: '#0141CB' }}>10 Millionen Euro</strong> pauschal
                für Personen-, Sach- und Vermögensschäden. Top-Tarife bieten 15–50 Mio.
                Euro oft für denselben Preis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#012778' }}>
        <div className="container-brand text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Haftpflicht vergleichen lassen
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Ab ca. 40 €/Jahr — wir finden den besten Tarif für Sie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn-primary">
              Kostenlos vergleichen
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
