import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ChevronRight, Calculator, FileText, Home, Wrench, Car, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Steueroptimierung mit Immobilien | Adler Invest',
  description: 'Steuern sparen mit Immobilien: AfA, Zinsabzug, Renovierungskosten — alle Steuervorteile bei der Kapitalanlage Immobilie erklärt. Beratung in Frankfurt.',
  keywords: ['Steueroptimierung Immobilien', 'Steuer sparen Immobilien', 'Abschreibung Immobilien', 'Steueroptimierte Kapitalanlage'],
  alternates: { canonical: 'https://adlerinvest.de/immobilien/steueroptimierung' },
  openGraph: {
    title: 'Steueroptimierung mit Immobilien | Adler Invest',
    description: 'Steuern sparen mit Immobilien: AfA, Zinsabzug, Renovierungskosten erklärt.',
    url: 'https://adlerinvest.de/immobilien/steueroptimierung',
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
      name: 'Was ist die AfA bei Immobilien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AfA steht für "Absetzung für Abnutzung". Bei vermieteten Wohnimmobilien können 2 % des Gebäudewerts (nicht Grundstückswerts) jährlich über 50 Jahre steuerlich abgeschrieben werden. Bei Gebäuden, die vor 1925 gebaut wurden, gilt ein erhöhter Satz von 2,5 % über 40 Jahre.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Kosten kann ich bei einer vermieteten Immobilie absetzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absetzbar sind: Finanzierungszinsen, AfA (2 % des Gebäudewerts/Jahr), Verwaltungskosten, Reparatur- und Instandhaltungskosten, Grundsteuer, Gebäudeversicherung, Fahrten zur Immobilie, Steuerberaterkosten und weitere Werbungskosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viel Steuern spare ich mit einer Kapitalanlage Immobilie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Steuerersparnis hängt vom individuellen Steuersatz ab. Bei einem Kaufpreis von 200.000 € (Gebäudewert 160.000 €) und einem Steuersatz von 40 % beträgt die jährliche Ersparnis allein durch AfA und Zinsen ca. 1.500–3.000 €.',
      },
    },
  ],
}

const taxBenefits = [
  {
    icon: <Home size={28} style={{ color: '#0141CB' }} />,
    number: '01',
    title: 'AfA — Gebäudeabschreibung',
    detail: '2 % des Gebäudewertes jährlich',
    body: 'Die wichtigste Steuerersparnis. Bei einem Gebäudewert von 160.000 € (Kaufpreis 200.000 €, Grundstück 40.000 €) ergibt das 3.200 € jährliche Absetzung — unabhängig davon, ob tatsächlich ein Verschleiß eintritt.',
    example: 'Beispiel: 3.200 € AfA × 42 % Steuersatz = 1.344 €/Jahr gespart',
  },
  {
    icon: <Calculator size={28} style={{ color: '#0141CB' }} />,
    number: '02',
    title: 'Finanzierungszinsen absetzen',
    detail: '100 % der Zinsen als Werbungskosten',
    body: 'Alle Zinsen, die du an die Bank zahlst, können vollständig als Werbungskosten bei den Einkünften aus Vermietung und Verpachtung (§ 21 EStG) abgesetzt werden. Besonders in den ersten Jahren mit hohem Zinsanteil ist dieser Posten enorm.',
    example: 'Beispiel: 5.000 € Zinsen/Jahr × 42 % = 2.100 €/Jahr gespart',
  },
  {
    icon: <Wrench size={28} style={{ color: '#0141CB' }} />,
    number: '03',
    title: 'Instandhaltungskosten',
    detail: 'Reparaturen sofort abziehbar',
    body: 'Kosten für Reparaturen, Wartungen und Modernisierungen können als Werbungskosten geltend gemacht werden — entweder sofort (Erhaltungsaufwand) oder über die Nutzungsdauer verteilt (Herstellungsaufwand). Deine Steuerberatung entscheidet die optimale Einstufung.',
    example: 'Beispiel: 2.000 € Reparaturen × 42 % = 840 € gespart',
  },
  {
    icon: <FileText size={28} style={{ color: '#0141CB' }} />,
    number: '04',
    title: 'Verwaltungs- & Nebenkosten',
    detail: 'Hausverwaltung, Grundsteuer, Versicherung',
    body: 'Hausverwaltungsgebühren, Grundsteuer, Gebäudeversicherung, Rechtskosten, WEG-Verwaltergebühren und ähnliche laufende Kosten sind vollständig absetzbar. Bei einer Eigentumswohnung kommen regelmäßig 1.500–3.000 € pro Jahr zusammen.',
    example: 'Beispiel: 2.500 € Nebenkosten × 42 % = 1.050 € gespart',
  },
  {
    icon: <Car size={28} style={{ color: '#0141CB' }} />,
    number: '05',
    title: 'Werbungskosten',
    detail: 'Fahrtkosten, Steuerberater, Büro',
    body: 'Fahrten zur Immobilie (0,30 €/km), Steuerberatungskosten, Fachliteratur, Telefonkosten und anteilige Bürokosten können als Werbungskosten geltend gemacht werden. Auch Maklerkosten bei der Mietersuche sind absetzbar.',
    example: 'Beispiel: 1.200 € Werbungskosten × 42 % = 504 € gespart',
  },
]

export default function SteueroptimierungPage() {
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
            <p className="eyebrow-gold mb-6">Immobilien · Steueroptimierung</p>
            <h1
              className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Steueroptimierung mit Immobilien —{' '}
              <em style={{ fontStyle: 'italic', color: '#C8A84B' }}>
                Die 5 wichtigsten Vorteile
              </em>
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-[560px] mx-auto leading-relaxed">
              Der Staat fördert Immobilien-Kapitalanlagen durch ein umfangreiches System steuerlicher Abzüge. Wer es kennt, zahlt deutlich weniger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary text-center">
                Kostenlose Beratung sichern
              </Link>
              <Link href="/immobilien" className="btn-ghost text-center">
                Angebote entdecken
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {['AfA absetzbar', 'Zinsen absetzbar', '1.500 – 3.000 € Ersparnis/Jahr'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle size={16} style={{ color: '#C8A84B' }} />
                  <span>{t}</span>
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
            <p className="eyebrow mb-4">Steuerrecht</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
              Wie Steueroptimierung mit Immobilien funktioniert
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#2D3142' }}>
              Vermietete Immobilien werden in Deutschland steuerrechtlich als <strong>Einkunftsquelle</strong> behandelt. Das bedeutet: Alle Kosten, die mit der Immobilie zusammenhängen, mindern die steuerpflichtigen Einkünfte aus Vermietung und Verpachtung (§ 21 EStG).
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>
              In den ersten Jahren übersteigen die abzugsfähigen Kosten (AfA + Zinsen) häufig die Mieteinnahmen. Dieses steuerliche Minus (Verlust aus V&V) kann mit anderen positiven Einkünften — z. B. dem Gehalt — verrechnet werden. Das Finanzamt erstattet de facto einen Teil deiner Lohnsteuer.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Die 5 Steuervorteile</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-12" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Was du von der Steuer absetzen kannst
          </h2>
          <div className="space-y-6">
            {taxBenefits.map((b) => (
              <div key={b.number} className="card" style={{ padding: '32px 36px' }}>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 items-start">
                  <div className="flex items-center gap-4">
                    <div
                      className="text-4xl font-bold"
                      style={{ fontFamily: 'var(--font-mono)', color: '#DDE3EF', lineHeight: 1 }}
                    >
                      {b.number}
                    </div>
                    <div>{b.icon}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-semibold" style={{ color: '#012778' }}>{b.title}</h3>
                      <span
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ background: '#EEF2FA', color: '#0141CB' }}
                      >
                        {b.detail}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>{b.body}</p>
                  </div>
                  <div
                    className="text-sm font-medium px-4 py-3 rounded-lg"
                    style={{ background: '#F4F6FA', color: '#1A8A5A', fontFamily: 'var(--font-mono)' }}
                  >
                    {b.example}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary calc */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Gesamtrechnung</p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
                Steuerersparnis bei einem Objekt für 200.000 €
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6B7494' }}>
                Illustratives Beispiel. Steuersatz 42 %, Gebäudewert 160.000 €, Finanzierungszinsen 4.800 €/Jahr, laufende Kosten 2.200 €/Jahr.
              </p>
              <div className="flex items-start gap-3">
                <AlertCircle size={16} style={{ color: '#D4840A', flexShrink: 0, marginTop: '2px' }} />
                <p className="text-sm" style={{ color: '#6B7494' }}>
                  Dies ist keine Steuerberatung. Für deine individuelle Steueroptimierung empfehlen wir einen Steuerberater — wir vermitteln gerne einen spezialisierten Partner.
                </p>
              </div>
            </div>
            <div className="card" style={{ padding: '40px' }}>
              <p className="table-scroll-hint-444 text-xs mb-3 items-center justify-end gap-1" style={{ color: '#9BA3BF' }}>
                Tabelle seitwärts scrollen →
              </p>
              <div style={{ overflowX: 'auto' }}>
              {[
                { pos: 'AfA (2 % × 160.000 €)', abzug: '3.200 €', ersparnis: '1.344 €' },
                { pos: 'Finanzierungszinsen', abzug: '4.800 €', ersparnis: '2.016 €' },
                { pos: 'Verwaltung & Nebenkosten', abzug: '2.200 €', ersparnis: '924 €' },
                { pos: 'Instandhaltung (est.)', abzug: '1.000 €', ersparnis: '420 €' },
                { pos: 'Werbungskosten', abzug: '600 €', ersparnis: '252 €' },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 py-3 text-sm"
                  style={{ borderBottom: '1px solid #DDE3EF', minWidth: 360 }}
                >
                  <span style={{ color: '#2D3142' }}>{row.pos}</span>
                  <span className="text-center" style={{ fontFamily: 'var(--font-mono)', color: '#6B7494' }}>{row.abzug}</span>
                  <span className="text-right font-semibold" style={{ fontFamily: 'var(--font-mono)', color: '#1A8A5A' }}>{row.ersparnis}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 pt-4 text-base font-semibold" style={{ minWidth: 360 }}>
                <span style={{ color: '#012778' }}>Gesamtersparnis / Jahr</span>
                <span className="text-center" style={{ fontFamily: 'var(--font-mono)', color: '#012778' }}>11.800 €</span>
                <span className="text-right" style={{ fontFamily: 'var(--font-mono)', color: '#1A8A5A' }}>4.956 €</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand max-w-[720px]">
          <p className="eyebrow mb-4">FAQ · Steuern</p>
          <h2 className="text-3xl font-semibold mb-10" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Häufige Steuerfragen
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
          <p className="eyebrow-gold mb-4">Steueroptimiert investieren</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Nutze alle Steuervorteile — mit dem richtigen Objekt
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-[480px] mx-auto">
            Wir finden das Objekt. Du nutzt die Steuervorteile. Kostenlose, unverbindliche Erstberatung in Frankfurt.
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
            Jetzt Beratung sichern <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
