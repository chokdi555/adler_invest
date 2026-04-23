import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  Heart,
  Users,
  Home,
  Car,
  Briefcase,
  Globe,
  CheckCircle,
  ArrowRight,
  Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Versicherungen Frankfurt | Unabhängiger Makler | Adler Invest',
  description:
    'Als unabhängiger Versicherungsmakler vergleichen wir alle Anbieter — und finden die beste Lösung für dich. BU, Kranken, Haftpflicht, KFZ und mehr.',
  keywords: [
    'Versicherungsmakler Frankfurt',
    'Versicherung vergleichen',
    'BU Versicherung',
    'Krankenversicherung',
    'unabhängiger Makler',
  ],
  alternates: { canonical: 'https://adlerinvest.de/versicherungen' },
  openGraph: {
    title: 'Versicherungen Frankfurt | Unabhängiger Makler | Adler Invest',
    description:
      'Als unabhängiger Versicherungsmakler vergleichen wir alle Anbieter — und finden die beste Lösung für dich.',
    url: 'https://adlerinvest.de/versicherungen',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const insuranceCategories = [
  {
    icon: Shield,
    title: 'Berufsunfähigkeit (BU)',
    description:
      'Die wichtigste Absicherung für Berufstätige. Schützt dein Einkommen bei Berufsunfähigkeit durch Krankheit oder Unfall.',
    href: '/versicherungen/berufsunfaehigkeit',
    highlight: true,
  },
  {
    icon: Heart,
    title: 'Krankenversicherung',
    description:
      'PKV oder GKV-Ergänzung: optimaler Schutz für dich und deine Familie — passend zu deiner Lebenssituation.',
    href: '/versicherungen/krankenversicherung',
    highlight: false,
  },
  {
    icon: Users,
    title: 'Haftpflichtversicherung',
    description:
      'Schützt dich vor den finanziellen Folgen unbeabsichtigter Schäden. In Deutschland unverzichtbar.',
    href: '/versicherungen/haftpflicht',
    highlight: false,
  },
  {
    icon: Heart,
    title: 'Altersvorsorgeversicherung',
    description:
      'Private Rentenversicherung und fondsgebundene Altersvorsorge — staatlich gefördert, steuerlich begünstigt, flexibel.',
    href: '/versicherungen/altersvorsorge',
    highlight: false,
  },
  {
    icon: Home,
    title: 'Hausrat & Gebäude',
    description:
      'Vollständiger Schutz für dein Zuhause und dein Eigentum — vor Feuer, Wasser, Einbruch und mehr.',
    href: '/versicherungen/hausrat',
    highlight: false,
  },
  {
    icon: Car,
    title: 'KFZ-Versicherung',
    description:
      'Haftpflicht, Teilkasko oder Vollkasko — wir vergleichen alle Tarife und finden den besten Preis.',
    href: '/versicherungen/kfz',
    highlight: false,
  },
  {
    icon: Briefcase,
    title: 'Rechtsschutz',
    description:
      'Rechtliche Auseinandersetzungen ohne finanzielle Sorgen — für Privat, Beruf und Verkehr.',
    href: '/versicherungen/rechtsschutz',
    highlight: false,
  },
  {
    icon: Globe,
    title: 'Reiseversicherung',
    description:
      'Sicher reisen mit umfassendem Reiseschutz — Kranken, Gepäck, Storno und Haftpflicht weltweit.',
    href: '/versicherungen/reiseversicherung',
    highlight: false,
  },
]

const brokerAdvantages = [
  {
    title: 'Unabhängig',
    description:
      'Wir sind an keinen Versicherer gebunden. Unsere Empfehlungen basieren ausschließlich auf deinem Bedarf — nicht auf Provisionsinteressen.',
    icon: Shield,
  },
  {
    title: 'Marktüberblick',
    description:
      'Wir vergleichen alle relevanten Anbieter am Markt und finden den Tarif mit dem besten Preis-Leistungs-Verhältnis für dich.',
    icon: CheckCircle,
  },
  {
    title: 'Persönlich',
    description:
      'Ein fester Ansprechpartner — kein Call Center. Wir kennen deine Situation und betreuen dich langfristig.',
    icon: Users,
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Kostenlose Analyse',
    description: 'Wir analysieren deine aktuelle Situation und deinen Absicherungsbedarf — komplett kostenlos und unverbindlich.',
  },
  {
    step: '02',
    title: 'Vergleich aller Anbieter',
    description: 'Wir vergleichen systematisch alle relevanten Versicherer und Tarife auf dem deutschen Markt.',
  },
  {
    step: '03',
    title: 'Persönliche Empfehlung',
    description: 'Du erhältst eine klare, verständliche Empfehlung — mit Begründung, warum dieser Tarif zu dir passt.',
  },
  {
    step: '04',
    title: 'Abschluss & Betreuung',
    description: 'Wir begleiten dich beim Abschluss und stehen auch danach als Ansprechpartner zur Verfügung.',
  },
]

export default function VersicherungenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'Adler Invest Versicherungen',
    url: 'https://adlerinvest.de/versicherungen',
    description:
      'Unabhängiger Versicherungsmakler in Frankfurt am Main. Wir vergleichen alle Anbieter und finden die beste Versicherungslösung.',
    areaServed: 'Frankfurt am Main, Rhein-Main-Gebiet',
    serviceType: [
      'Berufsunfähigkeitsversicherung',
      'Krankenversicherung',
      'Haftpflichtversicherung',
      'Altersvorsorgeversicherung',
      'KFZ-Versicherung',
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
        className="pt-[72px]"
        style={{ background: 'linear-gradient(135deg, #012778 0%, #001C59 100%)' }}
      >
        <div className="container-brand py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="eyebrow-gold">ADLER INVEST VERSICHERUNGEN</span>
            </div>
            <h1
              className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
              style={{ lineHeight: 1.1 }}
            >
              Der richtige Schutz.{' '}
              <em className="italic" style={{ color: '#C8A84B' }}>
                Zur richtigen Zeit.
              </em>
            </h1>
            <p
              className="text-base sm:text-xl lg:text-2xl mb-8 sm:mb-10 font-light mx-auto"
              style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '600px' }}
            >
              Als unabhängiger Versicherungsmakler vergleichen wir alle Anbieter — und
              finden die beste Lösung für dich. Ohne Interessenkonflikt.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'white',
                  color: '#0141CB',
                  padding: '14px 32px',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 16,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                Jetzt Versicherung prüfen lassen
                <ArrowRight size={18} />
              </Link>
              <Link href="/kontakt" className="btn-ghost mobile-only">
                <Phone size={18} />
                +49 176 63790950
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
              <span className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} style={{ color: '#C8A84B' }} />
                Unabhängige Beratung
              </span>
              <span className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} style={{ color: '#C8A84B' }} />
                Alle Anbieter im Vergleich
              </span>
              <span className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} style={{ color: '#C8A84B' }} />
                Kostenlos & unverbindlich
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSURANCE CATEGORIES ── */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container-brand">
          <div className="text-center mb-16">
            <span className="eyebrow">UNSERE LEISTUNGEN</span>
            <div className="gold-divider mx-auto mt-3 mb-5" />
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: '#012778' }}
            >
              Alle Versicherungen aus einer Hand
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#6B7494' }}>
              Von der Berufsunfähigkeit bis zur Reiseversicherung — wir beraten dich
              zu allen Versicherungsbereichen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="card group block"
                  style={
                    cat.highlight
                      ? { border: '1.5px solid #0141CB', position: 'relative' }
                      : {}
                  }
                >
                  {cat.highlight && (
                    <div
                      className="absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: '#0141CB',
                        color: 'white',
                        letterSpacing: '0.06em',
                      }}
                    >
                      WICHTIGSTE ABSICHERUNG
                    </div>
                  )}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: '#EEF2FA' }}
                  >
                    <Icon size={24} style={{ color: '#0141CB' }} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: '#0D0E12' }}>
                    {cat.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7494' }}>
                    {cat.description}
                  </p>
                  <div
                    className="mt-4 flex items-center gap-1 text-sm font-semibold"
                    style={{ color: '#0141CB' }}
                  >
                    Mehr erfahren
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY INDEPENDENT BROKER ── */}
      <section className="py-14 sm:py-24" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="text-center mb-16">
            <span className="eyebrow">WARUM MAKLER</span>
            <div className="gold-divider mx-auto mt-3 mb-5" />
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: '#012778' }}
            >
              Warum ein unabhängiger Makler?
            </h2>
            <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: '#6B7494' }}>
              Im Unterschied zum gebundenen Vertreter arbeiten wir ausschließlich in
              deinem Interesse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brokerAdvantages.map((adv) => {
              const Icon = adv.icon
              return (
                <div key={adv.title} className="card text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'linear-gradient(135deg, #EEF2FA, #DDE3EF)' }}
                  >
                    <Icon size={32} style={{ color: '#0141CB' }} />
                  </div>
                  <h3
                    className="font-display text-2xl font-bold mb-3"
                    style={{ color: '#012778' }}
                  >
                    {adv.title}
                  </h3>
                  <span className="gold-divider mx-auto mb-4" />
                  <p style={{ color: '#6B7494' }}>{adv.description}</p>
                </div>
              )
            })}
          </div>

          {/* Stats bar */}
          <div
            className="mt-16 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
            style={{ background: 'white', border: '1px solid #DDE3EF' }}
          >
            {[
              { num: '200+', label: 'Versicherer im Vergleich' },
              { num: '500+', label: 'Zufriedene Kunden' },
              { num: '100%', label: 'Unabhängige Beratung' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-mono text-5xl font-bold"
                  style={{ color: '#0141CB' }}
                >
                  {stat.num}
                </div>
                <div className="mt-1 text-sm font-medium" style={{ color: '#6B7494' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="container-brand">
          <div className="text-center mb-16">
            <span className="eyebrow">SO LÄUFT ES AB</span>
            <div className="gold-divider mx-auto mt-3 mb-5" />
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: '#012778' }}
            >
              In 4 Schritten zur richtigen Versicherung
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative h-full flex">
                {idx < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-6 left-[calc(100%-12px)] w-6 h-px"
                    style={{ background: '#DDE3EF', zIndex: 0 }}
                  />
                )}
                <div className="card w-full flex flex-col" style={{ padding: '28px' }}>
                  <div
                    className="font-mono text-4xl font-bold mb-4"
                    style={{ color: '#DDE3EF' }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: '#0D0E12' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7494' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-14 sm:py-24 relative overflow-hidden"
        style={{ background: '#012778' }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container-brand relative text-center">
          <span className="eyebrow-gold">KOSTENLOSE BERATUNG</span>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
            style={{ lineHeight: 1.15 }}
          >
            Jetzt kostenlose{' '}
            <em className="italic" style={{ color: '#C8A84B' }}>
              Versicherungsberatung
            </em>{' '}
            sichern
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Unverbindlich. Ohne Verpflichtung. Wir analysieren deine aktuelle Situation
            und zeigen dir, wo du sparen kannst.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'white',
                color: '#0141CB',
                padding: '14px 32px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              Beratung sichern
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
