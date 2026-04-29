import type { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, Shield, Calculator, CheckCircle, ChevronRight, Percent, PiggyBank, BarChart2 } from 'lucide-react'
import AnimatedStat from '@/components/AnimatedStat'

export const metadata: Metadata = {
  title: 'Kapitalanlage Immobilie Frankfurt | Adler Invest',
  description: 'Investiere in Immobilien als Kapitalanlage — ohne Eigenkapital. Dein Mieter zahlt die Rate. Adler Invest begleitet dich von der Finanzierung bis zum Notartermin.',
  keywords: ['Kapitalanlage Immobilie', 'Renditeobjekt', 'passive Einnahmen'],
  alternates: { canonical: 'https://adlerinvest.de/immobilien/kapitalanlage' },
  openGraph: {
    title: 'Kapitalanlage Immobilie Frankfurt | Adler Invest',
    description: 'Investiere in Immobilien als Kapitalanlage — ohne Eigenkapital. Dein Mieter zahlt die Rate.',
    url: 'https://adlerinvest.de/immobilien/kapitalanlage',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Adler Invest Immobilien',
  url: 'https://adlerinvest.de/immobilien',
  areaServed: 'Frankfurt am Main, Rhein-Main-Gebiet',
  knowsAbout: ['Kapitalanlage Immobilie', 'Renditeobjekte', 'Immobilienfinanzierung ohne Eigenkapital'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist eine Kapitalanlage Immobilie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Kapitalanlage Immobilie ist eine Immobilie, die nicht selbst bewohnt, sondern vermietet wird. Die Mieteinnahmen decken die monatliche Finanzierungsrate — der Investor baut Vermögen auf, ohne eigene Mittel monatlich einzusetzen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich Eigenkapital für eine Kapitalanlage Immobilie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Bei einer Kapitalanlage Immobilie ist eine Vollfinanzierung (100% oder 110% inklusive Kaufnebenkosten) möglich, sofern die Bonität und das Einkommen stimmen. Das Eigenkapital wird durch das Mietobjekt selbst und die Mieteinnahmen ersetzt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Steuervorteile hat eine Kapitalanlage Immobilie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Investoren können die Abschreibung (AfA) von 2% des Gebäudewertes jährlich, alle Finanzierungszinsen, Verwaltungskosten, Reparaturen und Werbungskosten steuerlich absetzen. Bei einem Kaufpreis von 200.000 € sind das häufig 1.500–3.000 € Steuerersparnis pro Jahr.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie hoch ist die durchschnittliche Rendite bei einer Kapitalanlage Immobilie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Im Rhein-Main-Gebiet liegt die Bruttomietrendite typischerweise bei 3,5–5 % pro Jahr. Hinzu kommt die Wertsteigerung der Immobilie sowie der steuerliche Hebel, der die Gesamtrendite erheblich steigert.',
      },
    },
  ],
}

export default function KapitalanlagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="pt-[72px] min-h-[60vh] flex items-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #012778 0%, #001C59 100%)' }}
      >
        <div className="container-brand relative z-10 py-20 lg:py-28">
          <div className="max-w-[720px] mx-auto text-center">
            <p className="eyebrow-gold mb-6">Immobilien · Kapitalanlage</p>
            <h1
              className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Kapitalanlage Immobilie —{' '}
              <em style={{ fontStyle: 'italic', color: '#C8A84B' }}>
                dein Mieter finanziert
              </em>{' '}
              dein Vermögen
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-[560px] mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Eine Immobilie. Ein Mieter. Kein monatlicher Eigenaufwand. Adler Invest begleitet dich von der Finanzierungsprüfung bis zum Notartermin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary text-center">
                Kostenlose Beratung sichern
              </Link>
              <Link href="/immobilien" className="btn-ghost text-center">
                Alle Immobilien-Angebote
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle size={16} style={{ color: '#C8A84B' }} />
                <span>Ohne Eigenkapital</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle size={16} style={{ color: '#C8A84B' }} />
                <span>Vollservice Frankfurt</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle size={16} style={{ color: '#C8A84B' }} />
                <span>Kostenlos &amp; unverbindlich</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition — LLMO */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="max-w-[720px]">
            <p className="eyebrow mb-4">Definition</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
              Was ist eine Kapitalanlage Immobilie?
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#2D3142' }}>
              Eine <strong>Kapitalanlage Immobilie</strong> (auch Renditeobjekt oder Anlageobjekt) ist eine Immobilie, die nicht selbst bewohnt, sondern dauerhaft vermietet wird. Die monatlichen Mieteinnahmen decken dabei die Finanzierungsrate der aufgenommenen Hypothek — der Investor baut so Vermögen auf, ohne eigene Mittel monatlich einzusetzen.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>
              Der Kerngedanke: Der Mieter übernimmt die Tilgung. Nach Ende der Laufzeit gehört die Immobilie dem Investor — schuldenfrei und als langfristiger Sachwert. In Deutschland ist dieses Modell seit Jahrzehnten etabliert und wird durch umfangreiche steuerliche Vorteile (AfA, Zinsenabzug) staatlich gefördert.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Warum Kapitalanlage Immobilie</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-12" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Die Vorteile auf einen Blick
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <PiggyBank size={32} style={{ color: '#0141CB' }} />,
                title: 'Steuerlicher Hebel (AfA)',
                body: '2 % des Gebäudewertes kannst du jährlich als Abschreibung steuerlich geltend machen — 50 Jahre lang. Bei einem Gebäudewert von 160.000 € sind das 3.200 € jährliche Steuerersparnis.',
              },
              {
                icon: <TrendingUp size={32} style={{ color: '#0141CB' }} />,
                title: 'Hebelwirkung (Leverage)',
                body: 'Du investierst minimales Eigenkapital und kontrollieren einen Sachwert im sechsstelligen Bereich. Steigt der Wert um 10 %, ist das deine Rendite — nicht die der Bank.',
              },
              {
                icon: <Shield size={32} style={{ color: '#0141CB' }} />,
                title: 'Inflationsschutz',
                body: 'Sachwerte wie Immobilien steigen langfristig mit der Inflation. Deine Finanzierungsrate bleibt konstant — die Mieteinnahmen steigen mit der Zeit an.',
              },
            ].map((b) => (
              <div key={b.title} className="card">
                <div className="mb-4">{b.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#012778' }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7494' }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculation Example */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Rechenbeispiel</p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
                So sieht eine typische Kapitalanlage aus
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7494' }}>
                Illustratives Beispiel für eine 2-Zimmer-Wohnung in Frankfurt (Kaufpreis inkl. Nebenkosten 200.000 €, Laufzeit 25 Jahre). Individuelle Werte variieren je nach Objekt und Bonität.
              </p>
              <div className="flex items-center gap-3 text-sm" style={{ color: '#6B7494' }}>
                <CheckCircle size={16} style={{ color: '#1A8A5A' }} />
                <span>Alle Zahlen sind Näherungswerte — deine kostenlose Beratung zeigt deinen konkreten Fall.</span>
              </div>
            </div>
            <div className="card" style={{ padding: '40px' }}>
              {[
                { label: 'Kaufpreis (inkl. Nebenkosten)', value: '200.000 €', mono: true },
                { label: 'Monatliche Finanzierungsrate', value: '~ 750 €', mono: true },
                { label: 'Monatliche Mieteinnahme', value: '~ 720 €', mono: true },
                { label: 'Dein monatlicher Eigenaufwand', value: '~ 30 €', mono: true, highlight: true },
                { label: 'Jährliche Steuerersparnis (AfA + Zinsen)', value: '1.800 – 3.000 €', mono: true },
                { label: 'Immobilienwert nach 25 Jahren (est.)', value: '280.000 – 350.000 €', mono: true },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-center py-3"
                  style={{
                    borderBottom: i < 5 ? '1px solid #DDE3EF' : 'none',
                    background: row.highlight ? 'rgba(1,65,203,0.04)' : 'transparent',
                    borderRadius: row.highlight ? '8px' : '0',
                    borderLeft: row.highlight ? '3px solid #0141CB' : '3px solid transparent',
                    paddingLeft: row.highlight ? '10px' : '3px',
                  }}
                >
                  <span className="text-sm" style={{ color: '#6B7494', flex: 1, minWidth: 0, paddingRight: 12 }}>{row.label}</span>
                  <span
                    className="font-semibold text-base"
                    style={{
                      fontFamily: row.mono ? 'var(--font-mono)' : undefined,
                      color: row.highlight ? '#0141CB' : '#012778',
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anlageformen Vergleich */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Geld anlegen im Vergleich</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Immobilien vs. Aktien, ETFs &amp; Festgeld
          </h2>
          <p className="text-base mb-12 max-w-[560px]" style={{ color: '#6B7494' }}>
            Warum Immobilien als Kapitalanlage einzigartig sind — ein sachlicher Vergleich der wichtigsten Anlageformen.
          </p>
          <p className="table-scroll-hint-802 text-xs mb-3 items-center justify-end gap-1" style={{ color: '#9BA3BF' }}>
            Tabelle seitwärts scrollen →
          </p>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0', minWidth: 600 }}>
              <thead>
                <tr>
                  {['Anlageform', 'Rendite p.a.', 'Risiko', 'Eigenkapital nötig', 'Hebelwirkung', 'Steuervorteile'].map((h) => (
                    <th
                      key={h}
                      className="text-left py-4 px-5 text-sm font-semibold uppercase tracking-[0.08em]"
                      style={{ color: '#6B7494', borderBottom: '2px solid #DDE3EF', background: '#EEF2FA' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { asset: 'Immobilien (Kapitalanlage)', rendite: '4 – 6 %', risiko: 'Mittel', eigenkapital: 'Minimal (0 %)', hebel: 'Ja', steuer: 'Ja (AfA, Zinsen)', highlight: true },
                  { asset: 'Aktien / ETFs', rendite: '6 – 8 %', risiko: 'Hoch', eigenkapital: 'Ja (100 %)', hebel: 'Nein', steuer: 'Nein', highlight: false },
                  { asset: 'Festgeld', rendite: '2 – 3 %', risiko: 'Gering', eigenkapital: 'Ja (100 %)', hebel: 'Nein', steuer: 'Nein', highlight: false },
                  { asset: 'Tagesgeld', rendite: '1,5 – 2,5 %', risiko: 'Sehr gering', eigenkapital: 'Ja (100 %)', hebel: 'Nein', steuer: 'Nein', highlight: false },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: row.highlight ? 'rgba(1,65,203,0.04)' : '#FFFFFF',
                      borderLeft: row.highlight ? '4px solid #0141CB' : '4px solid transparent',
                    }}
                  >
                    <td className="py-4 px-5 font-semibold text-sm" style={{ color: row.highlight ? '#012778' : '#2D3142' }}>
                      {row.asset}
                      {row.highlight && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full" style={{ background: '#EEF2FA', color: '#0141CB' }}>
                          Empfehlung
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-5 font-semibold text-sm" style={{ fontFamily: 'var(--font-mono)', color: '#1A8A5A' }}>{row.rendite}</td>
                    <td className="py-4 px-5 text-sm" style={{ color: '#6B7494' }}>{row.risiko}</td>
                    <td className="py-4 px-5 text-sm" style={{ color: '#6B7494' }}>{row.eigenkapital}</td>
                    <td className="py-4 px-5 text-sm">
                      <span style={{ color: row.hebel === 'Ja' ? '#1A8A5A' : '#CC2B2B' }}>{row.hebel}</span>
                    </td>
                    <td className="py-4 px-5 text-sm" style={{ color: row.steuer === 'Nein' ? '#CC2B2B' : '#1A8A5A' }}>{row.steuer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: '#012778' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: '3,5 – 5 %', label: 'Bruttomietrendite im Rhein-Main-Gebiet' },
              { num: '50 Jahre', label: 'steuerliche AfA-Laufzeit (Neubau)' },
              { num: '< 2 %', label: 'Leerstandsquote in Frankfurt' },
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
            Häufige Fragen zur Kapitalanlage Immobilie
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
          <p className="eyebrow-gold mb-4">Jetzt starten</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Bereit für deine erste Kapitalanlage?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-[480px] mx-auto">
            Kostenlos, unverbindlich, persönlich. Unser Berater in Frankfurt prüft deine individuelle Situation.
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
            Kostenlose Beratung buchen <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
