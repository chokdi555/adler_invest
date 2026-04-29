import type { Metadata } from 'next'
import Link from 'next/link'
import { Plane, CheckCircle, ChevronRight, Shield, Heart, Luggage, Globe, AlertCircle, ArrowLeft } from 'lucide-react'
import EagleWatermark from '@/components/EagleWatermark'
import AnimatedStat from '@/components/AnimatedStat'

export const metadata: Metadata = {
  title: 'Reiseversicherung | Adler Invest Frankfurt',
  description: 'Reiseversicherung — Reiserücktritt, Auslandskrankenversicherung, Reisegepäck und Reisehaftpflicht. Als unabhängiger Makler finden wir den optimalen Schutz für deine Reise.',
  keywords: [
    'Reiseversicherung',
    'Reiserücktrittsversicherung',
    'Auslandskrankenversicherung',
    'Reiseversicherung Frankfurt',
    'Reiseschutz Vergleich',
  ],
  alternates: { canonical: 'https://adlerinvest.de/versicherungen/reiseversicherung' },
  openGraph: {
    title: 'Reiseversicherung | Adler Invest Frankfurt',
    description: 'Reiseversicherung — Reiserücktritt, Auslandskrankenversicherung, Reisegepäck und mehr.',
    url: 'https://adlerinvest.de/versicherungen/reiseversicherung',
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
      name: 'Was ist eine Reiseversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Reiseversicherung ist ein Sammelbegriff für verschiedene Versicherungen, die dich vor finanziellen Risiken auf Reisen schützen. Dazu zählen Reiserücktrittsversicherung, Auslandskrankenversicherung, Reisegepäckversicherung und Reisehaftpflichtversicherung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich eine Auslandskrankenversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dringend empfohlen. Die gesetzliche Krankenversicherung übernimmt außerhalb der EU kaum Kosten, und selbst innerhalb der EU gibt es Lücken. Besonders wichtig: Der Krankenrücktransport nach Deutschland kostet ohne Versicherung schnell 10.000–50.000 € und wird von der GKV in der Regel nicht erstattet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was deckt eine Reiserücktrittsversicherung ab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sie übernimmt die Stornokosten, wenn du eine Reise wegen schwerer Erkrankung, Unfall, Todesfall in der Familie, Jobverlust oder ähnlichen unvorhergesehenen Ereignissen nicht antreten kannst. Ohne Versicherung können Stornogebühren 100 % des Reisepreises betragen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Einzel- und Jahresreiseversicherung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Einzelreiseversicherung gilt für eine spezifische Reise. Eine Jahresreiseversicherung (Jahrespolice) deckt alle Reisen innerhalb eines Jahres ab — ab etwa 2–3 Reisen pro Jahr ist sie in der Regel günstiger und bietet mehr Komfort.',
      },
    },
  ],
}

const modules = [
  {
    icon: <Plane size={28} style={{ color: '#0141CB' }} />,
    title: 'Reiserücktrittsversicherung',
    body: 'Übernimmt Stornogebühren, wenn du die Reise nicht antreten kannst — wegen Krankheit, Unfall, Todesfall oder anderen versicherten Ereignissen. Bis zu 100 % des Reisepreises.',
  },
  {
    icon: <Heart size={28} style={{ color: '#0141CB' }} />,
    title: 'Auslandskrankenversicherung',
    body: 'Deckt Behandlungskosten im Ausland und — besonders wichtig — den medizinisch notwendigen Rücktransport nach Deutschland. Unverzichtbar für Reisen außerhalb der EU.',
  },
  {
    icon: <Luggage size={28} style={{ color: '#0141CB' }} />,
    title: 'Reisegepäckversicherung',
    body: 'Schützt dein Gepäck bei Diebstahl, Verlust oder Beschädigung während der Reise. Zahlt den Zeitwert oder Wiederbeschaffungswert der versicherten Gegenstände.',
  },
  {
    icon: <Globe size={28} style={{ color: '#0141CB' }} />,
    title: 'Reisehaftpflicht & Reiseunfall',
    body: 'Reisehaftpflicht schützt dich, wenn du im Urlaub Dritten Schäden zufügst. Reiseunfallversicherung zahlt bei bleibenden Schäden durch einen Unfall auf Reisen.',
  },
]

export default function ReiseversicherungPage() {
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
              Reiseversicherung
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
              Reiseversicherung —{' '}
              <em style={{ fontStyle: 'italic', color: '#457FFC' }}>
                Sorglos reisen, gut abgesichert.
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
              Reisekrankheit, Stornierung, verlorenes Gepäck — das richtige
              Reiseschutzpaket deckt alle Risiken ab. Adler Invest findet den besten
              Tarif für deine nächste Reise.
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
                { num: '4', label: 'Module in einem Paket' },
                { num: 'weltweit', label: 'Schutz auf allen Reisen' },
                { num: 'ab 10 €', label: 'für ganze Jahrespolicen' },
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
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
              Was ist eine Reiseversicherung?
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#2D3142' }}>
              Eine <strong>Reiseversicherung</strong> schützt dich vor den finanziellen Folgen unvorhergesehener Ereignisse auf Reisen: von der kurzfristigen Stornierung über einen Krankenhausaufenthalt im Ausland bis hin zum gestohlenen Gepäck. Je nach Bedarf können einzelne Module oder ein umfassendes Reiseschutzpaket abgeschlossen werden.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>
              Besonders die <strong>Auslandskrankenversicherung</strong> wird von Experten als unverzichtbar eingestuft: Ein Hubschrauber-Rücktransport aus den USA kostet ohne Versicherung schnell 80.000 € und wird von der gesetzlichen Krankenkasse nicht erstattet.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Versicherungsmodule</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-12" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Die vier Säulen des Reiseschutzes
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

      {/* Einzel vs. Jahrespolice */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Tarif-Entscheidung</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-12" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Einzelreise oder Jahrespolice — was passt zu dir?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Einzelreiseversicherung',
                desc: 'Für eine spezifische Reise.',
                pros: ['Günstiger bei 1–2 Reisen/Jahr', 'Flexible Laufzeit (reisebezogen)', 'Kein langfristiger Vertrag'],
                cons: ['Muss vor jeder Reise neu abgeschlossen werden', 'Teurer bei mehreren Reisen'],
                color: '#0141CB',
              },
              {
                title: 'Jahresreiseversicherung',
                desc: 'Gilt für alle Reisen innerhalb eines Jahres.',
                pros: ['Günstiger ab ca. 3 Reisen/Jahr', 'Kein Aufwand vor jeder Reise', 'Auch für Kurztrips und spontane Reisen'],
                cons: ['Jahresbeitrag im Voraus', 'Maximale Reisedauer je Reise begrenzt (oft 42–60 Tage)'],
                color: '#012778',
              },
            ].map((option) => (
              <div key={option.title} className="card" style={{ padding: '36px', borderTop: `4px solid ${option.color}` }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: option.color }}>{option.title}</h3>
                <p className="text-sm mb-6" style={{ color: '#6B7494' }}>{option.desc}</p>
                <div className="space-y-2 mb-4">
                  {option.pros.map((pro) => (
                    <div key={pro} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={15} style={{ color: '#1A8A5A', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#2D3142' }}>{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {option.cons.map((con) => (
                    <div key={con} className="flex items-start gap-2 text-sm">
                      <AlertCircle size={15} style={{ color: '#D4840A', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#6B7494' }}>{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: '#012778' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: '80.000 €', label: 'Rücktransportkosten aus den USA (ohne Versicherung)' },
              { num: '100 %', label: 'Stornogebühren bei kurzfristiger Absage ohne Versicherung' },
              { num: '200+', label: 'Versicherer im Adler Invest Vergleich' },
              { num: '0 €', label: 'Beratungskosten bei Adler Invest' },
            ].map((s) => (
              <div key={s.num}>
                <AnimatedStat
                  value={s.num}
                  className="text-4xl lg:text-5xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                />
                <div className="text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand max-w-[720px]">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-3xl font-semibold mb-10" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Häufige Fragen zur Reiseversicherung
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
          <p className="eyebrow-gold mb-4">Reiseversicherung · Beratung</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Den richtigen Reiseschutz finden — kostenlos
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-[480px] mx-auto">
            Wir vergleichen alle relevanten Tarife und finden das Paket, das zu deinen Reisegewohnheiten passt — ob Einzelreise oder Jahrespolice.
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
            Jetzt Beratung sichern <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
