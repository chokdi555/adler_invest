import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, TrendingUp, Building2, CheckCircle, ChevronRight } from 'lucide-react'
import AnimatedStat from '@/components/AnimatedStat'

export const metadata: Metadata = {
  title: 'Immobilien im Rhein-Main Gebiet | Haus & Wohnung | Adler Invest',
  description: 'Immobilien im Rhein-Main-Gebiet kaufen: Haus oder Wohnung als Kapitalanlage. Wiesbaden, Darmstadt, Offenbach, Mainz — wir finden die besten Renditeobjekte in der Region.',
  keywords: ['Immobilien Rhein Main', 'Rhein-Main Kapitalanlage', 'Haus kaufen Rhein Main', 'Wohnung kaufen Rhein Main', 'Wiesbaden Immobilien'],
  alternates: { canonical: 'https://adlerinvest.de/immobilien/rhein-main' },
  openGraph: {
    title: 'Immobilien Rhein-Main Gebiet | Kapitalanlage | Adler Invest',
    description: 'Immobilien im Rhein-Main-Gebiet als Kapitalanlage. Beste Renditeobjekte in der Region.',
    url: 'https://adlerinvest.de/immobilien/rhein-main',
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

const cities = [
  {
    city: 'Frankfurt am Main',
    state: 'Hessen',
    pricePerSqm: '4.200 – 9.000 €',
    yield: '3,0 – 5,5 %',
    character: 'Finanzzentrum, EZB, internationale Nachfrage, niedrigste Leerstandsquote',
  },
  {
    city: 'Wiesbaden',
    state: 'Hessen',
    pricePerSqm: '4.000 – 6.000 €',
    yield: '3,8 – 4,8 %',
    character: 'Landeshauptstadt, Kurort-Flair, gut angebunden nach Frankfurt (30 Min.)',
  },
  {
    city: 'Darmstadt',
    state: 'Hessen',
    pricePerSqm: '3.800 – 5.500 €',
    yield: '4,0 – 5,2 %',
    character: 'Wissenschaftsstadt, TU Darmstadt, hohe Studenten- und Fachkräftenachfrage',
  },
  {
    city: 'Offenbach am Main',
    state: 'Hessen',
    pricePerSqm: '3.200 – 4.800 €',
    yield: '4,5 – 5,8 %',
    character: 'Frankfurt-Grenzlage, stark steigende Preise, hohes Renditepotenzial',
  },
  {
    city: 'Mainz',
    state: 'Rheinland-Pfalz',
    pricePerSqm: '4.200 – 6.200 €',
    yield: '3,8 – 4,8 %',
    character: 'Universitätsstadt, Medienstandort (ZDF), stabiler Wohnungsmarkt',
  },
  {
    city: 'Bad Homburg',
    state: 'Hessen',
    pricePerSqm: '4.500 – 6.500 €',
    yield: '3,5 – 4,5 %',
    character: 'Premiumlage Taunus, wohlhabendes Klientel, stabile Wertsteigerung',
  },
  {
    city: 'Hanau',
    state: 'Hessen',
    pricePerSqm: '2.800 – 4.200 €',
    yield: '5,0 – 6,5 %',
    character: 'Günstige Einstiegspreise, gute S-Bahn-Anbindung, wachsende Stadt',
  },
  {
    city: 'Aschaffenburg',
    state: 'Bayern',
    pricePerSqm: '3.500 – 5.200 €',
    yield: '4,2 – 5,5 %',
    character: 'Bayerisches Tor zur Region, Universität, attraktive Lebensqualität',
  },
]

export default function RheinMainPage() {
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
            <p className="eyebrow-gold mb-6">Immobilien · Rhein-Main-Gebiet</p>
            <h1
              className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Immobilien im Rhein-Main-Gebiet —{' '}
              <em style={{ fontStyle: 'italic', color: '#C8A84B' }}>
                Haus oder Wohnung in der stärksten Region Deutschlands
              </em>
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-[560px] mx-auto leading-relaxed">
              Von Frankfurt bis Wiesbaden, von Darmstadt bis Mainz — Adler Invest kennt die gesamte Region und findet Renditeobjekte mit echter Perspektive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary text-center">
                Kostenlose Beratung sichern
              </Link>
              <Link href="/immobilien" className="btn-ghost text-center">
                Immobilien entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="max-w-[720px]">
            <p className="eyebrow mb-4">Region</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
              Was ist das Rhein-Main-Gebiet?
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#2D3142' }}>
              Das <strong>Rhein-Main-Gebiet</strong> ist ein polyzentrischer Ballungsraum in Hessen und Rheinland-Pfalz mit Frankfurt am Main als wirtschaftlichem Zentrum. Die Region umfasst rund 5,8 Millionen Einwohner und zählt zu den wohlhabendsten Wirtschaftsregionen Europas.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>
              Für Immobilieninvestoren ist die Region besonders attraktiv: Ein hervorragendes S-Bahn- und Bahnnetz verbindet alle Städte mit Frankfurt — was eine starke Mietnachfrage auch außerhalb der Kernstadt sicherstellt. Gleichzeitig sind die Kaufpreise in der Peripherie deutlich günstiger, was höhere Mietrenditen ermöglicht.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '5,8 Mio.', label: 'Einwohner im Rhein-Main-Gebiet' },
              { num: '8', label: 'Großstädte in der Region' },
              { num: '> 400 Mrd. €', label: 'Wirtschaftsleistung (BIP)' },
              { num: '4,0 – 6,5 %', label: 'Mietrendite in der Peripherie' },
            ].map((s) => (
              <div key={s.num} style={{ borderLeft: '3px solid #C8A84B', paddingLeft: '20px' }}>
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

      {/* City Table */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Städteübersicht</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Immobilienmarkt-Daten je Stadt
          </h2>
          <p className="text-base mb-12 max-w-[560px]" style={{ color: '#6B7494' }}>
            Übersicht der wichtigsten Märkte im Rhein-Main-Gebiet mit aktuellen Marktdaten (Orientierungswerte, Stand 2024/2025).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cities.map((c) => (
              <div key={c.city} className="card" style={{ padding: '24px 28px' }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} style={{ color: '#0141CB' }} />
                    <h3 className="text-lg font-semibold" style={{ color: '#012778' }}>{c.city}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#EEF2FA', color: '#6B7494' }}>{c.state}</span>
                  </div>
                </div>
                <div className="flex gap-6 mb-3">
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: '#6B7494' }}>Kaufpreis / m²</div>
                    <div className="font-semibold text-sm" style={{ fontFamily: 'var(--font-mono)', color: '#0141CB' }}>{c.pricePerSqm}</div>
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: '#6B7494' }}>Bruttomietrendite</div>
                    <div className="font-semibold text-sm" style={{ fontFamily: 'var(--font-mono)', color: '#1A8A5A' }}>{c.yield}</div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7494' }}>{c.character}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rhein-Main */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Standortvorteile</p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
                Warum das Rhein-Main-Gebiet ideal für Kapitalanlagen ist
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7494' }}>
                Die Kombination aus wirtschaftlicher Stärke, Bevölkerungswachstum und hervorragender Infrastruktur macht die Region zu einem der sichersten Immobilienstandorte Deutschlands.
              </p>
              <ul className="space-y-5">
                {[
                  { title: 'Wirtschaftsstärke', body: 'Frankfurt als Finanzmetropole mit EZB, Deutsche Bank, Commerzbank — stabile Beschäftigung, hohe Kaufkraft.' },
                  { title: 'Verkehrsinfrastruktur', body: 'Flughafen Frankfurt, ICE-Drehkreuz, dichtes S-Bahn-Netz — alle Städte der Region gut vernetzt.' },
                  { title: 'Universitäten & Fachkräfte', body: 'Goethe-Universität Frankfurt, TU Darmstadt, JGU Mainz — konstante Nachfrage nach Mietwohnungen.' },
                  { title: 'Bevölkerungswachstum', body: 'Die Region wächst. Frankfurt allein plant bis 2040 auf 850.000 Einwohner. Mehr Nachfrage, stabilere Mieten.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: '#0141CB', flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <div className="font-semibold mb-1" style={{ color: '#012778' }}>{item.title}</div>
                      <div className="text-sm" style={{ color: '#6B7494' }}>{item.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#F4F6FA', borderRadius: '20px', padding: '40px' }}>
              <div className="text-sm font-semibold uppercase tracking-[0.12em] mb-6" style={{ color: '#6B7494' }}>
                Rhein-Main-Gebiet — Marktgebiete
              </div>
              <div className="space-y-3">
                {[
                  { city: 'Frankfurt', zone: 'Kernzone', color: '#012778' },
                  { city: 'Wiesbaden · Mainz · Bad Homburg', zone: 'Zone 1 (20–35 km)', color: '#0141CB' },
                  { city: 'Darmstadt · Offenbach · Hanau', zone: 'Zone 2 (30–40 km)', color: '#457FFC' },
                  { city: 'Aschaffenburg · Wetzlar · Limburg', zone: 'Zone 3 (50–60 km)', color: '#A0B4E0' },
                ].map((z) => (
                  <div key={z.city} className="flex items-center gap-3 py-3" style={{ borderBottom: '1px solid #DDE3EF' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: z.color, flexShrink: 0 }} />
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#012778' }}>{z.city}</div>
                      <div className="text-xs" style={{ color: '#6B7494' }}>{z.zone}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-6" style={{ color: '#6B7494' }}>
                Je weiter von Frankfurt entfernt, desto günstiger die Kaufpreise — und desto höher die Mietrendite. Adler Invest berät dich je nach Ziel und Budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Haus oder Wohnung im Rhein-Main */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Haus oder Wohnung</p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}>
            Haus oder Wohnung im Rhein-Main kaufen?
          </h2>
          <p className="text-base mb-12 max-w-[560px]" style={{ color: '#6B7494' }}>
            Beide Objektarten bieten im Rhein-Main-Gebiet attraktive Möglichkeiten — je nach Budget und Investitionsziel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                type: 'Eigentumswohnung',
                desc: 'Idealer Einstieg für Kapitalanleger. Hohe Nachfrage in allen Städten der Region.',
                data: [
                  { city: 'Offenbach', price: '190.000 – 350.000 €', yield: '4,5 – 5,8 %' },
                  { city: 'Hanau', price: '150.000 – 260.000 €', yield: '5,0 – 6,5 %' },
                  { city: 'Darmstadt', price: '220.000 – 400.000 €', yield: '4,0 – 5,2 %' },
                ],
                color: '#0141CB',
              },
              {
                type: 'Haus (EFH/DHH/MFH)',
                desc: 'Höherer Kapitaleinsatz, aber mehr Kontrolle und Wertsteigerungspotenzial.',
                data: [
                  { city: 'Wiesbaden', price: '400.000 – 750.000 €', yield: '3,5 – 4,5 %' },
                  { city: 'Mainz', price: '380.000 – 700.000 €', yield: '3,8 – 4,8 %' },
                  { city: 'Hanau / Peripherie', price: '220.000 – 450.000 €', yield: '4,5 – 6,0 %' },
                ],
                color: '#012778',
              },
            ].map((obj) => (
              <div key={obj.type} className="card" style={{ padding: '36px', borderTop: `4px solid ${obj.color}` }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: obj.color }}>{obj.type}</h3>
                <p className="text-sm mb-6" style={{ color: '#6B7494' }}>{obj.desc}</p>
                <div className="space-y-3">
                  {obj.data.map((row) => (
                    <div key={row.city} className="flex items-center justify-between text-sm py-2" style={{ borderBottom: '1px solid #DDE3EF' }}>
                      <span className="font-medium" style={{ color: '#2D3142' }}>{row.city}</span>
                      <div className="flex gap-4 text-right">
                        <span style={{ fontFamily: 'var(--font-mono)', color: obj.color, fontSize: 12 }}>{row.price}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', color: '#1A8A5A', fontSize: 12 }}>{row.yield}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#012778' }}>
        <div className="container-brand text-center">
          <p className="eyebrow-gold mb-4">Rhein-Main · Kapitalanlage</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Finde dein Renditeobjekt in der Region
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-[480px] mx-auto">
            Unser Team in Frankfurt kennt alle Märkte der Region. Wir finden das Objekt, das zu deinem Budget und deinen Zielen passt.
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
            Jetzt Beratung vereinbaren <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
