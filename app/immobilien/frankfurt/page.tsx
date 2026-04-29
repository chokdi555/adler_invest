import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, TrendingUp, Building2, CheckCircle, ChevronRight, Users } from 'lucide-react'
import AnimatedStat from '@/components/AnimatedStat'

export const metadata: Metadata = {
  title: 'Immobilien in Frankfurt kaufen | Haus & Wohnung | Adler Invest',
  description: 'Immobilien in Frankfurt kaufen: Haus oder Wohnung als Kapitalanlage. Aktuelle Preise, beste Lagen und Renditeobjekte unter Marktwert — mit persönlicher Beratung durch Adler Invest.',
  keywords: ['Immobilien Frankfurt', 'Wohnung Frankfurt kaufen', 'Haus kaufen Frankfurt', 'Frankfurt Kapitalanlage'],
  alternates: { canonical: 'https://adlerinvest.de/immobilien/frankfurt' },
  openGraph: {
    title: 'Immobilien Frankfurt kaufen | Kapitalanlage | Adler Invest',
    description: 'Immobilien in Frankfurt als Kapitalanlage kaufen. Aktuelle Preise, beste Lagen und Renditeobjekte unter Marktwert.',
    url: 'https://adlerinvest.de/immobilien/frankfurt',
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

const districts = [
  {
    name: 'Sachsenhausen',
    pricePerSqm: '6.500 – 8.500 €',
    yield: '3,2 – 3,8 %',
    desc: 'Etabliertes Gründerzeitviertel mit hoher Nachfrage. Ideal für langfristige Kapitalanlage.',
  },
  {
    name: 'Bornheim',
    pricePerSqm: '6.000 – 7.800 €',
    yield: '3,5 – 4,2 %',
    desc: 'Lebendiges Viertel, sehr beliebt bei jungen Berufstätigen — geringe Leerstandsgefahr.',
  },
  {
    name: 'Nordend',
    pricePerSqm: '7.000 – 9.000 €',
    yield: '3,0 – 3,5 %',
    desc: 'Premium-Lage mit starker Preisentwicklung. Hohe Wertstabilität.',
  },
  {
    name: 'Gallus',
    pricePerSqm: '4.500 – 6.000 €',
    yield: '4,0 – 5,0 %',
    desc: 'Aufstrebender Stadtteil nahe Europa-Viertel. Attraktive Renditen, steigende Preise.',
  },
  {
    name: 'Niederrad',
    pricePerSqm: '4.800 – 6.200 €',
    yield: '4,2 – 5,2 %',
    desc: 'Bürostandort im Wandel. Gute Anbindung, solide Mietrenditen für Investoren.',
  },
  {
    name: 'Rödelheim',
    pricePerSqm: '4.200 – 5.500 €',
    yield: '4,5 – 5,5 %',
    desc: 'Günstigere Einstiegspreise bei wachsender Nachfrage. Renditestärkster Bereich.',
  },
]

export default function FrankfurtPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section
        className="pt-[72px] min-h-[60vh] flex items-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #012778 0%, #001C59 100%)' }}
      >
        <div className="container-brand relative z-10 py-20 lg:py-28">
          <div className="max-w-[720px] mx-auto text-center">
            <p className="eyebrow-gold mb-6">Immobilien · Frankfurt am Main</p>
            <h1
              className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Immobilien in Frankfurt —{' '}
              <em style={{ fontStyle: 'italic', color: '#C8A84B' }}>
                Haus oder Wohnung kaufen mit System
              </em>
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-[560px] mx-auto leading-relaxed">
              Frankfurts Immobilienmarkt gehört zu den stabilsten Deutschlands. Adler Invest findet Renditeobjekte unter Marktwert — und begleitet dich von der Finanzierung bis zum Schlüssel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary text-center">
                Kostenlose Beratung sichern
              </Link>
              <Link href="/immobilien" className="btn-ghost text-center">
                Alle Angebote ansehen
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {['Ohne Eigenkapital', 'Haus & Wohnung Frankfurt', 'Persönliche Beratung'].map((t) => (
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
            <p className="eyebrow mb-4">Marktüberblick</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
              Warum Frankfurt als Kapitalanlage-Standort überzeugt
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#2D3142' }}>
              Frankfurt am Main ist das <strong>Finanzzentrum Deutschlands</strong> und Sitz der Europäischen Zentralbank (EZB). Mit über 770.000 Einwohnern, einem der niedrigsten Leerstände Deutschlands (&lt; 2 %) und einem wachsenden Bedarf an Wohnfläche bietet Frankfurt ideale Voraussetzungen für Immobilien-Kapitalanleger.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>
              Die Kaufpreise liegen aktuell bei 5.000–7.500 € pro Quadratmeter, Mietrenditen bei 3,5–4,5 % brutto. Gegenüber München oder Hamburg bietet Frankfurt noch Aufholpotenzial — bei vergleichbarer wirtschaftlicher Stärke.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: '770.000+', label: 'Einwohner (wachsend)' },
              { num: '< 2 %', label: 'Leerstandsquote' },
              { num: '5.000 – 7.500 €', label: 'Kaufpreis pro m²' },
              { num: '3,5 – 4,5 %', label: 'Bruttomietrendite' },
            ].map((s) => (
              <div key={s.num} style={{ borderLeft: '3px solid #0141CB', paddingLeft: '20px', textAlign: 'left' }}>
                <AnimatedStat
                  value={s.num}
                  className="text-3xl lg:text-4xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-mono)', color: '#012778' }}
                />
                <div className="text-sm" style={{ color: '#6B7494' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Frankfurter Stadtteile</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Die besten Lagen für Kapitalanleger
          </h2>
          <p className="text-base mb-12 max-w-[560px]" style={{ color: '#6B7494' }}>
            Adler Invest kennt jeden Frankfurter Stadtteil — und weiß, wo Rendite und Sicherheit sich am besten verbinden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {districts.map((d) => (
              <div key={d.name} className="card">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={20} style={{ color: '#0141CB', flexShrink: 0, marginTop: '2px' }} />
                  <h3 className="text-xl font-semibold" style={{ color: '#012778' }}>{d.name}</h3>
                </div>
                <div className="flex gap-4 mb-4">
                  <div>
                    <div className="text-xs mb-1" style={{ color: '#6B7494' }}>Kaufpreis / m²</div>
                    <div className="font-semibold text-sm" style={{ fontFamily: 'var(--font-mono)', color: '#0141CB' }}>{d.pricePerSqm}</div>
                  </div>
                  <div>
                    <div className="text-xs mb-1" style={{ color: '#6B7494' }}>Mietrendite</div>
                    <div className="font-semibold text-sm" style={{ fontFamily: 'var(--font-mono)', color: '#1A8A5A' }}>{d.yield}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7494' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Adler */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Unser Vorteil</p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
                Wie Adler Invest günstige Objekte in Frankfurt findet
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#6B7494' }}>
                Über unser Netzwerk aus Maklern, Projektentwicklern und Banken erhalten wir Zugang zu Objekten, die nie öffentlich inseriert werden. So finden unsere Kunden Immobilien häufig 5–15 % unter dem aktuellen Marktwert.
              </p>
              <ul className="space-y-4">
                {[
                  'Zugang zu Off-Market-Objekten in Frankfurt',
                  'Kooperation mit lokalen Projektentwicklern',
                  'Finanzierungspartner für 100 % Finanzierung',
                  'Vollbegleitung: Beratung → Notartermin → Schlüssel',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: '#0141CB', flexShrink: 0, marginTop: '2px' }} />
                    <span className="text-base" style={{ color: '#2D3142' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: '48px', background: '#F4F6FA', boxShadow: 'none' }}>
              <div className="flex items-center gap-3 mb-6">
                <Users size={28} style={{ color: '#0141CB' }} />
                <span className="text-lg font-semibold" style={{ color: '#012778' }}>Über Adler Invest</span>
              </div>
              <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>
                Adler Invest ist ein unabhängiger Finanzdienstleister mit Sitz in Frankfurt am Main. Das Unternehmen spezialisiert sich auf zwei Bereiche: Immobilien-Kapitalanlagen im Rhein-Main-Gebiet und unabhängige Versicherungsberatung. Im Bereich Immobilien begleitet Adler Invest Privatpersonen beim Erwerb von Renditeobjekten — von der Finanzierungsanfrage bis zum Notartermin — mit dem Ziel, durch Mieteinnahmen die Finanzierungsrate zu decken und langfristig Vermögen aufzubauen. Alle Beratungen sind kostenlos und unverbindlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Haus oder Wohnung */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Haus oder Wohnung</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Was passt besser zu dir — Haus oder Wohnung?
          </h2>
          <p className="text-base mb-12 max-w-[560px]" style={{ color: '#6B7494' }}>
            In Frankfurt sind beide Objektarten als Kapitalanlage attraktiv. Die richtige Wahl hängt von Budget, Risikobereitschaft und Verwaltungsaufwand ab.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                type: 'Eigentumswohnung',
                priceRange: '220.000 – 600.000 €',
                yield: '3,5 – 5,0 %',
                pros: ['Geringerer Kapitaleinsatz', 'Einfache Verwaltung (WEG)', 'Hohe Nachfrage, geringes Leerstandsrisiko', 'Ideal für Erstinvestoren'],
                note: 'Beliebteste Kapitalanlageform in Frankfurt — hohe Liquidität beim Verkauf.',
                color: '#0141CB',
              },
              {
                type: 'Einfamilienhaus / Mehrfamilienhaus',
                priceRange: '450.000 – 1.200.000 €',
                yield: '3,0 – 4,5 %',
                pros: ['Mehr Kontrolle (kein WEG)', 'Mehrfamilienhaus: mehrere Mieteinheiten', 'Wertsteigerungspotenzial durch Grundstück', 'Umbau- und Erweiterungsmöglichkeiten'],
                note: 'Höherer Kapitaleinsatz, aber größerer Sachwert und mehr Gestaltungsfreiheit.',
                color: '#012778',
              },
            ].map((obj) => (
              <div key={obj.type} className="card" style={{ padding: '36px', borderTop: `4px solid ${obj.color}` }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: obj.color }}>{obj.type}</h3>
                <div className="flex gap-6 mb-6">
                  <div>
                    <div className="text-xs mb-1" style={{ color: '#6B7494' }}>Kaufpreis Frankfurt</div>
                    <div className="font-semibold text-sm" style={{ fontFamily: 'var(--font-mono)', color: obj.color }}>{obj.priceRange}</div>
                  </div>
                  <div>
                    <div className="text-xs mb-1" style={{ color: '#6B7494' }}>Mietrendite (brutto)</div>
                    <div className="font-semibold text-sm" style={{ fontFamily: 'var(--font-mono)', color: '#1A8A5A' }}>{obj.yield}</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-5">
                  {obj.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={15} style={{ color: obj.color, flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#2D3142' }}>{pro}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7494' }}>{obj.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House price table */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Hauspreise Frankfurt & Region</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Aktuelle Hauspreise im Überblick
          </h2>
          <p className="text-base mb-10 max-w-[560px]" style={{ color: '#6B7494' }}>
            Orientierungswerte für Einfamilien- und Doppelhäuser (EFH/DHH) in Frankfurt und Umgebung, Stand 2024/2025.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { region: 'Frankfurt Stadtgebiet', type: 'EFH/DHH', priceRange: '600.000 – 1.200.000 €', note: 'Sehr knappe Verfügbarkeit, starke Preise' },
              { region: 'Frankfurt Außenbezirke', type: 'EFH/DHH', priceRange: '450.000 – 750.000 €', note: 'Fechenheim, Nieder-Erlenbach, Harheim' },
              { region: 'Taunus / Bad Homburg', type: 'EFH', priceRange: '500.000 – 900.000 €', note: 'Premium-Lagen, Grüngürtel, Top-Schulen' },
              { region: 'Rhein-Main Peripherie', type: 'EFH/RH', priceRange: '280.000 – 520.000 €', note: 'Hanau, Offenbach-Land, Mainz-Umland' },
              { region: 'Darmstadt / Wiesbaden', type: 'EFH/DHH', priceRange: '380.000 – 680.000 €', note: 'Gute Anbindung, solide Wertsteigerung' },
              { region: 'Äußere Region', type: 'EFH', priceRange: '200.000 – 400.000 €', note: 'Wetterau, Bergstraße — ideal als Kapitalanlage' },
            ].map((row) => (
              <div key={row.region} className="card" style={{ padding: '24px 28px' }}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-semibold" style={{ color: '#012778' }}>{row.region}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full ml-2 flex-shrink-0" style={{ background: '#EEF2FA', color: '#6B7494' }}>{row.type}</span>
                </div>
                <div className="font-semibold text-sm mb-2" style={{ fontFamily: 'var(--font-mono)', color: '#0141CB' }}>{row.priceRange}</div>
                <p className="text-xs" style={{ color: '#6B7494' }}>{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#012778' }}>
        <div className="container-brand text-center">
          <p className="eyebrow-gold mb-4">Frankfurt · Rhein-Main</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            dein Renditeobjekt in Frankfurt wartet
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-[480px] mx-auto">
            In einem kostenlosen Gespräch zeigen wir dir, welche Objekte aktuell verfügbar sind — und was sie für dich bedeuten könnten.
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
            Jetzt Erstgespräch vereinbaren <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
