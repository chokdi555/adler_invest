import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ChevronRight, Search, Handshake, AlertCircle, Percent, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Immobilien unter dem Marktwert kaufen | Adler Invest Frankfurt',
  description: 'Immobilien unter dem Marktwert finden — wie Adler Invest Renditeobjekte mit Wertsteigerungspotenzial identifiziert. Kostenlose Beratung in Frankfurt.',
  keywords: ['Immobilien unter dem Marktwert', 'Immobilien unter Marktwert', 'Günstige Immobilien Frankfurt', 'unter Verkehrswert'],
  alternates: { canonical: 'https://adlerinvest.de/immobilien/immobilien-unter-dem-marktwert' },
  openGraph: {
    title: 'Immobilien unter dem Marktwert kaufen | Adler Invest Frankfurt',
    description: 'Immobilien unter dem Marktwert finden — Renditeobjekte mit sofortigem Eigenkapital.',
    url: 'https://adlerinvest.de/immobilien/immobilien-unter-dem-marktwert',
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
      name: 'Was bedeutet "Immobilie unter dem Marktwert"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Immobilie unter dem Marktwert ist eine Immobilie, deren Kaufpreis unterhalb des gutachterlich oder marktüblich ermittelten Verkehrswertes liegt. Das bedeutet: Der Käufer erwirbt sofortiges Eigenkapital in Form der Differenz zwischen Kaufpreis und tatsächlichem Wert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist es legal, Immobilien unter dem Marktwert zu kaufen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, vollständig legal. Ein Verkäufer kann sein Eigentum zu jedem selbst gewählten Preis veräußern. Gründe für Verkäufe unter dem Marktwert sind häufig Erbsituationen, Scheidungen, Finanzierungsbedarf oder schlicht der Wunsch nach schnellem Abschluss.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie findet Adler Invest Immobilien unter dem Marktwert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Adler Invest arbeitet mit einem Netzwerk aus lokalen Maklern, Projektentwicklern, Banken und Notaren zusammen. Off-Market-Objekte (nicht öffentlich inseriert) machen einen Großteil unserer Deals aus. Hinzu kommen Überhänge von Bauträgern und Zwangsversteigerungen.',
      },
    },
  ],
}

export default function ImmobilienUnterDemMarktwertPage() {
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
            <p className="eyebrow-gold mb-6">Immobilien · Unter dem Marktwert</p>
            <h1
              className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Immobilien unter dem Marktwert —{' '}
              <em style={{ fontStyle: 'italic', color: '#C8A84B' }}>
                Sofortiges Eigenkapital
              </em>{' '}
              ab Tag eins
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-[560px] mx-auto leading-relaxed">
              Wer unter dem Marktwert kauft, baut Vermögen schneller auf. Adler Invest hat Zugang zu Objekten, die nie öffentlich inseriert werden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary text-center">
                Kostenlose Beratung sichern
              </Link>
              <Link href="/immobilien" className="btn-ghost text-center">
                Alle Angebote
              </Link>
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
              Was bedeutet „unter dem Marktwert"?
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#2D3142' }}>
              Eine <strong>Immobilie unter dem Marktwert</strong> ist eine Immobilie, deren Kaufpreis unterhalb des gutachterlich ermittelten oder marktüblichen Verkehrswertes liegt. Der Käufer erwirbt beim Kauf sofortiges Eigenkapital — in Höhe der Differenz zwischen Kaufpreis und tatsächlichem Wert.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>
              Beispiel: Eine Wohnung hat laut Marktgutachten einen Wert von 220.000 €. Sie wird für 180.000 € verkauft. Der Käufer hat ab Tag eins 40.000 € Eigenkapital in der Immobilie — und zahlt auf eine kleinere Summe Zinsen.
            </p>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="card" style={{ padding: '48px' }}>
              <div className="text-sm font-semibold uppercase tracking-[0.12em] mb-8" style={{ color: '#6B7494' }}>
                Rechenbeispiel
              </div>
              {[
                { label: 'Marktwert der Immobilie', value: '220.000 €', highlight: false },
                { label: 'Kaufpreis (unter dem Marktwert)', value: '180.000 €', highlight: false },
                { label: 'Sofortiges Eigenkapital', value: '40.000 €', highlight: true },
                { label: 'Monatliche Rate (2,5 %, 25 J.)', value: '~ 808 €', highlight: false },
                { label: 'Monatliche Miete (est.)', value: '~ 780 €', highlight: false },
                { label: 'Dein Eigenaufwand / Monat', value: '~ 28 €', highlight: true },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-3"
                  style={{
                    borderBottom: i < 5 ? '1px solid #DDE3EF' : 'none',
                    background: row.highlight ? 'rgba(1,65,203,0.04)' : 'transparent',
                    borderRadius: row.highlight ? '6px' : '0',
                    margin: row.highlight ? '0 -8px' : '0',
                    padding: row.highlight ? '12px 8px' : '12px 0',
                  }}
                >
                  <span className="text-sm" style={{ color: '#6B7494' }}>{row.label}</span>
                  <span
                    className="font-semibold"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: row.highlight ? '#0141CB' : '#012778',
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <p className="eyebrow mb-4">Der Vorteil</p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
                Doppelter Hebel für deinen Vermögensaufbau
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7494' }}>
                Wer unter dem Marktwert kauft, profitiert von zwei Hebeln gleichzeitig: sofortigem Buchgewinn und besserer Finanzierungsstruktur. Denn Zinsen zahlst du nur auf den Kaufpreis — nicht auf den höheren Marktwert.
              </p>
              <ul className="space-y-4">
                {[
                  'Sofortiges Eigenkapital als Sicherheitspuffer',
                  'Niedrigere Finanzierungssumme = günstigere Zinskonditionen',
                  'Höhere effektive Rendite durch besseres Preis-Miet-Verhältnis',
                  'Schnellere Amortisation des eingesetzten Kapitals',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: '#0141CB', flexShrink: 0, marginTop: '2px' }} />
                    <span className="text-base" style={{ color: '#2D3142' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we find them */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Unser Netzwerk</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-12" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Wie Adler Invest günstige Renditeobjekte findet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Search size={28} style={{ color: '#0141CB' }} />,
                title: 'Off-Market-Netzwerk',
                body: 'Über 80 % unserer Objekte werden nie öffentlich inseriert. Direktzugang durch unser gewachsenes Netzwerk aus Maklern und Eigentümern.',
              },
              {
                icon: <Building2 size={28} style={{ color: '#0141CB' }} />,
                title: 'Bauträger-Restposten',
                body: 'Projektentwickler mit Restbeständen verkaufen häufig mit Abschlag — schneller Abschluss ist ihnen wichtiger als Höchstpreis.',
              },
              {
                icon: <Handshake size={28} style={{ color: '#0141CB' }} />,
                title: 'Erbschafts- & Scheidungssituationen',
                body: 'In Erbschafts- oder Scheidungssituationen wird schnelle Liquidität oft über Höchstpreis gestellt. Diskreter, fairer Ankauf.',
              },
              {
                icon: <Percent size={28} style={{ color: '#0141CB' }} />,
                title: 'Institutionelle Portfolios',
                body: 'Fonds und Gesellschaften verkaufen gelegentlich Einzelobjekte aus Portfolios mit Abschlag — wir haben privilegierten Zugang.',
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#012778' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7494' }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 max-w-[640px]">
            <AlertCircle size={18} style={{ color: '#D4840A', flexShrink: 0, marginTop: '2px' }} />
            <p className="text-sm" style={{ color: '#6B7494' }}>
              <strong style={{ color: '#2D3142' }}>Hinweis:</strong> Alle Transaktionen bei Adler Invest sind vollständig legal und transparent. Wir arbeiten ausschließlich mit seriösen Partnern und begleiten jeden Kauf notariell.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand max-w-[720px]">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-3xl font-semibold mb-10" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Häufige Fragen
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
          <p className="eyebrow-gold mb-4">Zugang zu Sonderangeboten</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Erhalten du Zugang zu Off-Market-Objekten
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-[480px] mx-auto">
            Unser Netzwerk arbeitet für dich. Im kostenlosen Erstgespräch erfährst du, welche Objekte aktuell verfügbar sind.
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
            Jetzt Zugang anfragen <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
