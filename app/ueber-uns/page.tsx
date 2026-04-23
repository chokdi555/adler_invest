import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Eye, Users, ArrowRight, MapPin, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Über uns | Adler Invest Frankfurt',
  description:
    'Wer steht hinter Adler Invest? Unser Team, unsere Werte und unsere Geschichte — unabhängiger Versicherungs- und Finanzdienstleister in Frankfurt am Main seit 2024.',
  keywords: ['Adler Invest Team', 'Über uns', 'Versicherungsmakler Frankfurt', 'Finanzberater Frankfurt'],
  alternates: { canonical: 'https://adlerinvest.de/ueber-uns' },
  openGraph: {
    title: 'Über uns | Adler Invest Frankfurt',
    description:
      'Unabhängiger Versicherungs- und Finanzdienstleister in Frankfurt am Main — unser Team, unsere Werte, unsere Geschichte.',
    url: 'https://adlerinvest.de/ueber-uns',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Adler Invest',
  url: 'https://adlerinvest.de',
  logo: 'https://adlerinvest.de/logo.svg',
  foundingDate: '2024',
  description:
    'Unabhängiger Finanzdienstleister mit Sitz in Frankfurt am Main. Gegründet 2024 als Versicherungsmakler, heute auch spezialisiert auf Immobilien-Kapitalanlagen im Rhein-Main-Gebiet.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kennedyallee 93',
    addressLocality: 'Frankfurt am Main',
    postalCode: '60596',
    addressRegion: 'Hessen',
    addressCountry: 'DE',
  },
  areaServed: ['Frankfurt am Main', 'Rhein-Main-Gebiet', 'Hessen', 'Deutschland'],
  serviceType: ['Versicherungsmakler', 'Immobilienvermittlung', 'Kapitalanlageberatung'],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 1 },
  founder: {
    '@type': 'Person',
    name: 'Cihan Özkan',
    jobTitle: 'Gründer & Inhaber',
  },
}

const values = [
  {
    icon: Shield,
    title: 'Unabhängigkeit',
    body: 'Wir sind an keine Bank, keinen Versicherer und keinen Projektentwickler gebunden. Unsere Empfehlungen orientieren sich ausschließlich an deinen Interessen — nicht an Provisionszielen.',
  },
  {
    icon: Eye,
    title: 'Transparenz',
    body: 'Wir erklären jeden Schritt, nennen alle Kosten und zeigen Risiken offen auf. Vor dem Notartermin weißt du genau, worauf du dich einlässt — ohne Überraschungen.',
  },
  {
    icon: Users,
    title: 'Partnerschaft',
    body: 'Für uns endet die Beziehung nicht beim Abschluss. Wir begleiten dich langfristig — bei Mieterwechseln, Anschlussfinanzierungen und neuen Investmentchancen.',
  },
]

const team = [
  {
    initial: 'C',
    name: 'Cihan Özkan',
    title: 'Gründer & Inhaber',
    bio: 'Gründete Adler Invest 2024 als unabhängigen Versicherungsmakler in Frankfurt. Als dein persönlicher Ansprechpartner begleitet er dich von der ersten Analyse bis zum Abschluss — bei Versicherungen ebenso wie bei Immobilien-Kapitalanlagen. Sein Anspruch: ehrliche, anbieterunabhängige Beratung, die zu dir passt.',
  },
]

const keyFacts = [
  { label: 'Gegründet', value: '2024' },
  { label: 'Sitz', value: 'Frankfurt am Main' },
  { label: 'Fokus', value: 'Versicherungen' },
  { label: 'Region', value: 'Rhein-Main' },
]

export default function UeberUnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* Hero */}
      <section className="pt-[72px] py-16" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">ÜBER UNS</p>
          <h1
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}
          >
            Wir sind Adler Invest
          </h1>
          <p className="text-xl" style={{ color: '#6B7494' }}>
            Unabhängig. Transparent. Persönlich — seit 2024.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left narrative (60%) */}
            <div className="lg:col-span-3">
              <p className="eyebrow mb-4">Unsere Geschichte</p>
              <h2
                className="text-3xl lg:text-4xl font-semibold mb-6"
                style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}
              >
                Vom Versicherungsmakler zur Anlaufstelle im Rhein-Main-Gebiet
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: '#2D3142' }}>
                Adler Invest wurde 2024 in Frankfurt am Main als unabhängiger
                Versicherungsmakler gegründet — mit einer klaren Mission: Privatpersonen
                eine ehrliche, anbieterunabhängige Versicherungsberatung zu bieten, bei der
                die Empfehlung zum Kunden passt und nicht zur Provision des Vermittlers.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#6B7494' }}>
                Als unabhängiger Makler vergleichen wir alle relevanten Anbieter am
                deutschen Markt — von der Berufsunfähigkeit über Kranken-, Altersvorsorge-
                und Haftpflichtversicherung bis hin zu KFZ, Rechtsschutz und Reiseschutz. Unser
                Anspruch: die beste Police für deine Situation, nicht für unser Bilanzkonto.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#6B7494' }}>
                Mit der Zeit haben wir unser Angebot erweitert: Viele unserer Kunden
                fragten uns nach Rat bei Immobilien als Kapitalanlage. Heute begleiten wir
                sie auch hier — von der Finanzierungsanfrage bis zum Notartermin — und
                bieten Zugang zu Renditeobjekten im Rhein-Main-Gebiet, die sonst nur
                institutionellen Investoren offenstehen.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6B7494' }}>
                Zwei Bereiche, ein Versprechen: volle Unabhängigkeit von Produktgebern,
                maximale Transparenz und eine persönliche Begleitung, die weit über den
                Abschluss hinausgeht. Versicherungen bleiben unser Kerngeschäft — Immobilien
                sind die logische Ergänzung für alle, die Vermögen nachhaltig aufbauen möchten.
              </p>
            </div>

            {/* Right key facts (40%) */}
            <div className="lg:col-span-2">
              <div
                className="rounded-[20px] p-8"
                style={{
                  background: '#F4F6FA',
                  border: '1px solid #DDE3EF',
                }}
              >
                <h3
                  className="text-lg font-semibold mb-6"
                  style={{ color: '#012778', borderBottom: '1px solid #DDE3EF', paddingBottom: '16px' }}
                >
                  Adler Invest auf einen Blick
                </h3>
                <div className="space-y-5">
                  {keyFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm" style={{ color: '#6B7494' }}>
                        {fact.label}
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ fontFamily: 'var(--font-mono)', color: '#0141CB' }}
                      >
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-8 pt-6"
                  style={{ borderTop: '1px solid #DDE3EF' }}
                >
                  <div className="text-xs uppercase tracking-[0.1em] font-semibold mb-3" style={{ color: '#6B7494' }}>
                    Bereiche
                  </div>
                  <div className="space-y-2">
                    {['Versicherungsmakler', 'Immobilien-Kapitalanlagen'].map((area) => (
                      <div
                        key={area}
                        className="flex items-center gap-2 text-sm font-medium"
                        style={{ color: '#2D3142' }}
                      >
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: '#0141CB' }}
                        />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Unsere Werte</p>
          <h2
            className="text-3xl lg:text-4xl font-semibold mb-12"
            style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}
          >
            Was uns antreibt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="card"
                  style={{ borderTop: '4px solid #0141CB' }}
                >
                  <div
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-5"
                    style={{ background: '#EEF2FA' }}
                  >
                    <Icon size={22} style={{ color: '#0141CB' }} />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: '#012778' }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7494' }}>
                    {v.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <p className="eyebrow mb-4">Dein Ansprechpartner</p>
          <h2
            className="text-3xl lg:text-4xl font-semibold mb-12"
            style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}
          >
            Persönliche Beratung — von Anfang an
          </h2>
          <div className="flex justify-center">
            {team.map((member) => (
              <div
                key={member.name}
                className="card text-center flex flex-col items-center max-w-[520px] w-full"
                style={{ padding: '48px 36px' }}
              >
                {/* Avatar */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0141CB 0%, #012778 100%)' }}
                >
                  {member.initial}
                </div>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: '#012778' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.08em] mb-5"
                  style={{ color: '#0141CB' }}
                >
                  {member.title}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#6B7494' }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Location */}
      <section className="py-20" style={{ background: '#012778' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow-gold mb-4">Unser Standort</p>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Frankfurt am Main — mitten im Rhein-Main-Gebiet
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-white/80 text-sm">
                  <MapPin size={18} style={{ color: '#C8A84B', flexShrink: 0, marginTop: '2px' }} />
                  <span>Kennedyallee 93, 60596 Frankfurt am Main</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <Phone size={18} style={{ color: '#C8A84B', flexShrink: 0 }} />
                  <span>+49 176 63790950</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <Mail size={18} style={{ color: '#C8A84B', flexShrink: 0 }} />
                  <span>info@adlerinvest.de</span>
                </div>
              </div>
              <p className="text-white/50 text-xs">
                Mo–Fr
                <br />
                9:00–18:00 Uhr
              </p>
            </div>

            {/* Map embed */}
            <div
              className="overflow-hidden rounded-[16px]"
              style={{ height: '320px', border: '2px solid rgba(255,255,255,0.12)' }}
            >
              <iframe
                src="https://www.google.com/maps?q=Kennedyallee+93,+60596+Frankfurt+am+Main&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adler Invest Frankfurt"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#F4F6FA' }}>
        <div className="container-brand text-center">
          <p className="eyebrow mb-4">Lerne uns kennen</p>
          <h2
            className="text-3xl lg:text-4xl font-semibold mb-6"
            style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}
          >
            Wir freuen uns auf deine Anfrage
          </h2>
          <p className="text-lg mb-10 max-w-[440px] mx-auto" style={{ color: '#6B7494' }}>
            Alle Erstgespräche sind kostenlos und unverbindlich. Sprich uns an —
            persönlich, per Telefon oder über das Kontaktformular.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
              Kostenlose Beratung sichern
              <ArrowRight size={18} />
            </Link>
            <Link href="/immobilien" className="btn-secondary inline-flex items-center gap-2">
              Immobilien entdecken
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
