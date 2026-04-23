import type { Metadata } from 'next'
import Link from 'next/link'
import { Scale, CheckCircle, ChevronRight, Shield, Car, Home, Briefcase, Users, AlertCircle, ArrowLeft } from 'lucide-react'
import EagleWatermark from '@/components/EagleWatermark'

export const metadata: Metadata = {
  title: 'Rechtsschutzversicherung | Adler Invest Frankfurt',
  description: 'Rechtsschutzversicherung — umfassender Rechtsschutz für Privat, Beruf, Verkehr und Wohnen. Als unabhängiger Makler finden wir den besten Schutz für dich.',
  keywords: [
    'Rechtsschutzversicherung',
    'Rechtsschutz Frankfurt',
    'Rechtsschutz Vergleich',
    'Privat-Rechtsschutz',
    'Verkehrsrechtsschutz',
  ],
  alternates: { canonical: 'https://adlerinvest.de/versicherungen/rechtsschutz' },
  openGraph: {
    title: 'Rechtsschutzversicherung | Adler Invest Frankfurt',
    description: 'Rechtsschutzversicherung — umfassender Schutz für Privat, Beruf, Verkehr und Wohnen.',
    url: 'https://adlerinvest.de/versicherungen/rechtsschutz',
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
      name: 'Was ist eine Rechtsschutzversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Rechtsschutzversicherung übernimmt die Kosten eines Rechtsstreits — Anwalts- und Gerichtskosten sowie Sachverständigengebühren. Sie schützt dich vor den hohen finanziellen Risiken eines Prozesses und ermöglicht es dir, dein Recht auch dann durchzusetzen, wenn die Gegenseite finanziell stärker ist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was deckt eine Rechtsschutzversicherung ab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Je nach Tarif sind folgende Bereiche abgedeckt: Privat-Rechtsschutz (Streit mit Nachbarn, Handwerkern, Ärzten), Berufs-Rechtsschutz (Konflikte mit dem Arbeitgeber), Verkehrs-Rechtsschutz (Unfälle, Bußgelder, Führerscheinentzug) und Wohnungs-Rechtsschutz (Streit mit Vermieter oder Mieter).',
      },
    },
    {
      '@type': 'Question',
      name: 'Gibt es Wartezeiten bei der Rechtsschutzversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in der Regel gilt für die meisten Bereiche eine Wartezeit von 3 Monaten ab Vertragsabschluss. Der Verkehrs-Rechtsschutz ist häufig sofort wirksam. Bereits bestehende Streitigkeiten sind grundsätzlich vom Versicherungsschutz ausgeschlossen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wann lohnt sich eine Rechtsschutzversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Rechtsschutzversicherung lohnt sich besonders für Mieter und Vermieter, Berufstätige in konfliktreichen Arbeitsverhältnissen, Autofahrer sowie Personen, die rechtliche Auseinandersetzungen im Alltag für realistisch halten. Schon ein einziger Rechtsstreit kann mehrere tausend Euro kosten.',
      },
    },
  ],
}

const modules = [
  {
    icon: <Users size={28} style={{ color: '#0141CB' }} />,
    title: 'Privat-Rechtsschutz',
    body: 'Schutz bei Streitigkeiten im Alltag: mit Nachbarn, Handwerkern, Online-Shops, Ärzten, Versicherungen oder Behörden.',
  },
  {
    icon: <Briefcase size={28} style={{ color: '#0141CB' }} />,
    title: 'Berufs-Rechtsschutz',
    body: 'Absicherung bei arbeitsrechtlichen Konflikten: Kündigung, Mobbing, Gehaltsstreitigkeiten oder Diskriminierung am Arbeitsplatz.',
  },
  {
    icon: <Car size={28} style={{ color: '#0141CB' }} />,
    title: 'Verkehrs-Rechtsschutz',
    body: 'Schutz rund ums Fahrzeug: nach Unfällen, bei Bußgeldbescheiden, Führerscheinentzug oder Kfz-Kaufstreitigkeiten.',
  },
  {
    icon: <Home size={28} style={{ color: '#0141CB' }} />,
    title: 'Wohnungs-Rechtsschutz',
    body: 'Für Mieter und Vermieter: Streit um Mieterhöhungen, Nebenkosten, Kündigungen, Mängel oder Kautionen.',
  },
]

export default function RechtsschutzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
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

          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow-gold" style={{ marginBottom: '20px' }}>
              Rechtsschutzversicherung
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
              Rechtsschutzversicherung —{' '}
              <em style={{ fontStyle: 'italic', color: '#457FFC' }}>
                dein Recht. Unsere Expertise.
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
              Recht zu haben und Recht zu bekommen sind zwei verschiedene Dinge. Mit der
              richtigen Rechtsschutzversicherung kämpfst du auf Augenhöhe — ohne Angst
              vor den Kosten.
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
                { num: '200+', label: 'Tarife im Vergleich' },
                { num: '4', label: 'Kernbereiche — Privat, Beruf, Verkehr, Wohnen' },
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

      {/* Definition */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="max-w-[720px]">
            <p className="eyebrow mb-4">Definition</p>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
              Was ist eine Rechtsschutzversicherung?
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#2D3142' }}>
              Eine <strong>Rechtsschutzversicherung</strong> übernimmt die Kosten, die bei der Durchsetzung deiner rechtlichen Interessen entstehen: Anwaltskosten, Gerichtsgebühren, Sachverständigenhonorare und — falls nötig — auch die Kosten der Gegenseite.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>
              Ohne Rechtsschutz schrecken viele Menschen davor zurück, ihr Recht einzufordern — weil ein Prozess schnell 5.000 bis 30.000 € kosten kann. Die Rechtsschutzversicherung macht den Zugang zur Justiz erschwinglich und gibt dir die Freiheit, konsequent vorzugehen.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Leistungsmodule</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-12" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Die vier Kernbereiche des Rechtsschutzes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((m) => (
              <div key={m.title} className="card" style={{ padding: '32px' }}>
                <div className="mb-4">{m.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#012778' }}>{m.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's covered */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Leistungsumfang</p>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
                Was übernimmt die Rechtsschutzversicherung?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7494' }}>
                Gute Tarife decken alle wesentlichen Streitigkeiten ab — von der außergerichtlichen Einigung bis zum Revisionsverfahren.
              </p>
              <ul className="space-y-4">
                {[
                  'Anwaltskosten nach dem Rechtsanwaltsvergütungsgesetz (RVG)',
                  'Gerichtskosten und Verfahrensgebühren',
                  'Sachverständigen- und Gutachterkosten',
                  'Kosten der Gegenseite (bei Niederlage)',
                  'Zeugengebühren und Reisekosten',
                  'Kosten für Mediation und außergerichtliche Einigung',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: '#0141CB', flexShrink: 0, marginTop: '2px' }} />
                    <span className="text-base" style={{ color: '#2D3142' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="card" style={{ padding: '32px', background: 'rgba(1,65,203,0.04)', boxShadow: 'none', borderColor: '#DDE3EF' }}>
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle size={22} style={{ color: '#D4840A' }} />
                  <span className="font-semibold text-lg" style={{ color: '#012778' }}>Wichtig: Wartezeiten</span>
                </div>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#6B7494' }}>
                  Die meisten Rechtsschutzversicherungen haben eine <strong style={{ color: '#2D3142' }}>Wartezeit von 3 Monaten</strong>. Für bereits laufende oder absehbare Streitigkeiten besteht kein Versicherungsschutz.
                </p>
                <p className="text-sm" style={{ color: '#6B7494' }}>
                  Ausnahme: <strong style={{ color: '#2D3142' }}>Verkehrs-Rechtsschutz</strong> greift in vielen Tarifen sofort — ohne Wartezeit.
                </p>
              </div>
              <div className="card mt-6" style={{ padding: '32px' }}>
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#012778' }}>Typische Streitkosten ohne Versicherung</h3>
                {[
                  { fall: 'Kündigung anfechten (Arbeitsgericht)', kosten: '2.000 – 8.000 €' },
                  { fall: 'Mietstreit (Amtsgericht)', kosten: '1.500 – 5.000 €' },
                  { fall: 'Verkehrsunfall (Landgericht)', kosten: '5.000 – 20.000 €' },
                  { fall: 'Nachbarschaftsstreit', kosten: '2.000 – 10.000 €' },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:justify-between gap-1 py-3 text-sm"
                    style={{ borderBottom: i < 3 ? '1px solid #DDE3EF' : 'none' }}
                  >
                    <span style={{ color: '#6B7494' }}>{row.fall}</span>
                    <span className="font-semibold" style={{ fontFamily: 'var(--font-mono)', color: '#CC2B2B' }}>{row.kosten}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why independent broker */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Warum Adler Invest</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-12" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Als unabhängiger Makler vergleichen wir alle Anbieter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Unabhängig',
                body: 'Wir sind an keinen Versicherer gebunden. Wir vergleichen über 200 Tarife und empfehlen nur, was zu deiner Situation passt.',
              },
              {
                title: 'Marktüberblick',
                body: 'Rechtsschutztarife unterscheiden sich erheblich in Deckungssummen, Modulen und Selbstbehalt. Wir navigieren für dich.',
              },
              {
                title: 'Persönlich',
                body: 'Kein Call Center. Ein Ansprechpartner, der deine Situation kennt und dich im Schadenfall aktiv begleitet.',
              },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: '32px' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ background: '#EEF2FA' }}
                >
                  <Shield size={20} style={{ color: '#0141CB' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#012778' }}>{item.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand max-w-[720px]">
          <p className="eyebrow mb-4">FAQ</p>
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-10"
            style={{ fontFamily: 'var(--font-playfair)', color: '#012778', overflowWrap: 'break-word', hyphens: 'auto' }}
          >
            Häufige Fragen zur Rechtsschutzversicherung
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((q, i) => (
              <div key={i} style={{ borderBottom: '1px solid #DDE3EF', paddingBottom: '24px' }}>
                <h3 className="font-semibold text-lg mb-3" style={{ color: '#012778' }}>{q.name}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#012778' }}>
        <div className="container-brand text-center">
          <p className="eyebrow-gold mb-4">Rechtsschutz · Beratung</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Den richtigen Rechtsschutz finden — kostenlos
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-[480px] mx-auto">
            Wir vergleichen alle relevanten Tarife und empfehlen den Schutz, der zu deiner Lebenssituation passt.
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
            Jetzt Beratung sichern <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
