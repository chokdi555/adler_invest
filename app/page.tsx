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
  ArrowRight,
  UserRound,
} from 'lucide-react'
import HomeHeroAnimated from '@/components/HomeHeroAnimated'
import HomeCTASection from '@/components/HomeCTASection'
import HomeProcessCinematic from '@/components/HomeProcessCinematic'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Adler Invest — Versicherungen & Immobilien Frankfurt | Kostenlose Beratung',
  description:
    'Adler Invest: dein unabhängiger Versicherungsmakler in Frankfurt am Main. Wir vergleichen alle Anbieter und finden den besten Schutz für dich — plus Immobilien als Kapitalanlage.',
  openGraph: {
    title: 'Adler Invest — Versicherungen & Immobilien Frankfurt',
    description:
      'Unabhängige Versicherungsberatung und Immobilien-Kapitalanlagen im Rhein-Main-Gebiet. Kostenlose Erstberatung.',
    url: 'https://adlerinvest.de',
  },
}

const testimonials = [
  {
    quote:
      'Endlich jemand, der mir die BU verständlich erklärt hat. Adler Invest hat für mich den besten Tarif gefunden — deutlich günstiger als mein vorheriger.',
    name: 'Michael K.',
    city: 'Frankfurt',
    profession: 'Ingenieur',
    initials: 'MK',
  },
  {
    quote:
      'Der Wechsel zur PKV war eine wichtige Entscheidung. Die Beratung war ehrlich, transparent und hat mir wirklich geholfen, die richtige Wahl zu treffen.',
    name: 'Sandra L.',
    city: 'Wiesbaden',
    profession: 'Unternehmerin',
    initials: 'SL',
  },
  {
    quote:
      'Schnell, unkompliziert und kompetent. Meine KFZ-Versicherung wurde innerhalb einer Woche auf einen deutlich günstigeren Tarif umgestellt.',
    name: 'Thomas B.',
    city: 'Darmstadt',
    profession: 'Projektmanager',
    initials: 'TB',
  },
]

const insuranceCategories = [
  {
    icon: Shield,
    title: 'Berufsunfähigkeit',
    description:
      'Die wichtigste Absicherung für Berufstätige. Schützt dein Einkommen bei Berufsunfähigkeit.',
    href: '/versicherungen/berufsunfaehigkeit',
    highlight: true,
  },
  {
    icon: Heart,
    title: 'Krankenversicherung',
    description:
      'PKV oder GKV-Ergänzung: optimaler Schutz — passend zu deiner Lebenssituation.',
    href: '/versicherungen/krankenversicherung',
  },
  {
    icon: Users,
    title: 'Haftpflicht',
    description:
      'Schützt dich vor den finanziellen Folgen unbeabsichtigter Schäden. Unverzichtbar.',
    href: '/versicherungen/haftpflicht',
  },
  {
    icon: Heart,
    title: 'Lebensversicherung',
    description:
      'Risikolebens- und Kapitallebensversicherung für deine Familie und Hinterbliebenen.',
    href: '/versicherungen/lebensversicherung',
  },
  {
    icon: Home,
    title: 'Hausrat & Gebäude',
    description:
      'Vollständiger Schutz für dein Zuhause — vor Feuer, Wasser, Einbruch und mehr.',
    href: '/versicherungen/hausrat',
  },
  {
    icon: Car,
    title: 'KFZ-Versicherung',
    description:
      'Haftpflicht, Teilkasko oder Vollkasko — wir vergleichen alle Tarife auf dem Markt.',
    href: '/versicherungen/kfz',
  },
  {
    icon: Briefcase,
    title: 'Rechtsschutz',
    description:
      'Rechtliche Auseinandersetzungen ohne finanzielle Sorgen — Privat, Beruf, Verkehr.',
    href: '/versicherungen/rechtsschutz',
  },
  {
    icon: Globe,
    title: 'Reiseversicherung',
    description:
      'Sicher reisen mit umfassendem Schutz — Kranken, Gepäck, Storno und Haftpflicht weltweit.',
    href: '/versicherungen/reiseversicherung',
  },
]

const partners: { name: string; src: string; maxHeight?: number }[] = [
  { name: 'Allianz', src: '/partners/allianz.webp' },
  { name: 'AXA', src: '/partners/axa.png' },
  { name: 'HUK-COBURG', src: '/partners/huk-coburg.png' },
  { name: 'ERGO', src: '/partners/ergo.svg' },
  { name: 'Generali', src: '/partners/generali.jpg', maxHeight: 44 },
  { name: 'Barmenia Gothaer', src: '/partners/barmenia-gothaer.svg' },
  { name: 'Debeka', src: '/partners/debeka.jpg' },
  { name: 'Württembergische', src: '/partners/wuerttembergische.png' },
  { name: 'R+V', src: '/partners/ruv.png' },
  { name: 'HanseMerkur', src: '/partners/hansemerkur.png' },
  { name: 'Nürnberger', src: '/partners/nuernberger.png' },
  { name: 'Signal Iduna', src: '/partners/signal-iduna.png' },
]

const faqItems = [
  {
    question: 'Was kostet die Beratung bei Adler Invest?',
    answer:
      'Unsere Erstberatung ist kostenlos und unverbindlich. Als Versicherungsmakler werden wir im Abschlussfall von der Versicherungsgesellschaft vergütet — für dich entstehen keine Beratungskosten.',
  },
  {
    question: 'Seid ihr wirklich unabhängig?',
    answer:
      'Ja. Wir sind an keinen Versicherer gebunden und vergleichen alle relevanten Anbieter auf dem deutschen Markt. Unsere Empfehlung richtet sich ausschließlich nach deinem Bedarf — nicht nach Provisionsinteressen.',
  },
  {
    question: 'Wie läuft die Beratung konkret ab?',
    answer:
      'Nach einem kurzen Erstgespräch (telefonisch oder persönlich) analysieren wir deine aktuelle Situation und deinen Absicherungsbedarf. Anschließend erhältst du einen detaillierten Marktvergleich mit einer klaren Empfehlung — transparent, verständlich und ohne Verkaufsdruck.',
  },
  {
    question: 'Wie viele Versicherer vergleicht ihr?',
    answer:
      'Wir arbeiten mit über 200 Versicherungsgesellschaften zusammen und prüfen systematisch die Tarife, die für deine Situation in Frage kommen.',
  },
  {
    question: 'Was ist, wenn ich bereits Versicherungen habe?',
    answer:
      'Dann prüfen wir gerne deinen bestehenden Schutz. Häufig lassen sich Verträge deutlich verbessern — sei es durch günstigere Beiträge, bessere Leistungen oder den Wegfall unnötiger Doppel-Absicherungen.',
  },
  {
    question: 'Betreut ihr mich auch nach Abschluss?',
    answer:
      'Ja. Du erhältst einen festen Ansprechpartner — kein Call Center. Wir begleiten dich langfristig, passen deine Verträge an Lebensveränderungen an und unterstützen dich auch im Schadenfall.',
  },
  {
    question: 'Bietet ihr auch Immobilien-Beratung an?',
    answer:
      'Ja, als zweite Säule bieten wir Beratung zu Immobilien als Kapitalanlage im Rhein-Main-Gebiet — inklusive Finanzierung, Objektauswahl und Begleitung bis zum Notartermin.',
  },
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Adler Invest',
    url: 'https://adlerinvest.de',
    logo: 'https://adlerinvest.de/logo.svg',
    description:
      'Unabhängiger Versicherungsmakler und Finanzdienstleister in Frankfurt am Main. Versicherungsberatung und Immobilien-Kapitalanlagen im Rhein-Main-Gebiet.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kennedyallee 93',
      addressLocality: 'Frankfurt am Main',
      postalCode: '60596',
      addressRegion: 'Hessen',
      addressCountry: 'DE',
    },
    telephone: '+496900000000',
    email: 'info@adlerinvest.de',
    areaServed: ['Frankfurt am Main', 'Rhein-Main-Gebiet', 'Hessen'],
    serviceType: ['Versicherungsmakler', 'Versicherungsberatung', 'Immobilienvermittlung', 'Kapitalanlageberatung'],
    openingHours: 'Mo-Fr 09:00-18:00',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <HomeHeroAnimated />

      {/* ── CUSTOMER REVIEWS ─────────────────────────────────────────────────── */}
      <section
        style={{ background: '#F4F6FA', padding: 'clamp(56px, 8vw, 96px) 0' }}
        aria-labelledby="testimonials-heading"
      >
        <div className="container-brand">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>KUNDENSTIMMEN</p>
            <div className="gold-divider mx-auto mb-5" />
            <h2
              id="testimonials-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#012778',
                lineHeight: 1.15,
              }}
            >
              Was unsere Kunden sagen
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  borderRadius: 16,
                  padding: 'clamp(20px, 4vw, 40px) clamp(20px, 4vw, 36px)',
                  border: '1px solid #DDE3EF',
                  boxShadow: '0 4px 16px rgba(1,65,203,0.07)',
                  position: 'relative',
                }}
              >
                <div
                  className="font-display"
                  style={{
                    position: 'absolute',
                    top: 20,
                    left: 28,
                    fontSize: 96,
                    lineHeight: 1,
                    color: '#0141CB',
                    opacity: 0.08,
                    fontWeight: 700,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 32,
                    bottom: 32,
                    width: 3,
                    background: '#C8A84B',
                    borderRadius: '0 2px 2px 0',
                  }}
                />
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: '#2D3142',
                    marginBottom: 28,
                    fontStyle: 'italic',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0141CB, #457FFC)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: 13,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#2D3142' }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: '#6B7494' }}>
                      {t.city} · {t.profession}
                    </div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: '#C8A84B', fontSize: 13, letterSpacing: 1 }}>
                    ★★★★★
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSURANCE CATEGORIES ─────────────────────────────────────────────── */}
      <section
        style={{ background: 'white', padding: 'clamp(56px, 8vw, 96px) 0' }}
        aria-labelledby="insurance-heading"
      >
        <div className="container-brand">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>UNSERE LEISTUNGEN</p>
            <div className="gold-divider mx-auto mb-5" />
            <h2
              id="insurance-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#012778',
                lineHeight: 1.15,
              }}
            >
              Alle Versicherungen aus einer Hand
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: 17,
                color: '#6B7494',
                maxWidth: 620,
                margin: '16px auto 0',
                lineHeight: 1.6,
              }}
            >
              Von der Berufsunfähigkeit bis zur Reiseversicherung — wir beraten dich
              unabhängig zu allen Versicherungsbereichen.
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
                      : { position: 'relative' }
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

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link
              href="/versicherungen"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              Alle Versicherungen ansehen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CINEMATIC PROCESS ─────────────────────────────────────────────────── */}
      <HomeProcessCinematic />

      {/* ── TEAM PLACEHOLDER ──────────────────────────────────────────────────── */}
      <section
        style={{ background: '#F4F6FA', padding: 'clamp(56px, 8vw, 96px) 0' }}
        aria-labelledby="team-heading"
      >
        <div className="container-brand">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>DAS TEAM</p>
            <div className="gold-divider mx-auto mb-5" />
            <h2
              id="team-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#012778',
                lineHeight: 1.15,
              }}
            >
              Menschen, die{' '}
              <em className="italic" style={{ color: '#0141CB' }}>
                für dich
              </em>{' '}
              da sind
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: 17,
                color: '#6B7494',
                maxWidth: 560,
                margin: '16px auto 0',
                lineHeight: 1.6,
              }}
            >
              Kein Call Center. Keine wechselnden Ansprechpartner. Ein Team, das dich
              persönlich kennt und langfristig begleitet.
            </p>
          </div>

          {/* Placeholder team photo frame */}
          <div
            style={{
              maxWidth: 960,
              margin: '0 auto',
              position: 'relative',
              borderRadius: 20,
              overflow: 'hidden',
              aspectRatio: '16 / 9',
              background:
                'linear-gradient(135deg, #EEF2FA 0%, #DDE3EF 50%, #EEF2FA 100%)',
              border: '1px solid #DDE3EF',
              boxShadow: '0 16px 48px rgba(1,65,203,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Teamfoto folgt bald"
          >
            {/* Diagonal pattern overlay */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent 0 14px, rgba(1,65,203,0.04) 14px 15px)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                padding: 40,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(1,65,203,0.12)',
                }}
              >
                <UserRound size={32} strokeWidth={1.5} color="#0141CB" />
              </div>
              <div>
                <div
                  className="font-display"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#012778',
                    marginBottom: 6,
                  }}
                >
                  Teamfoto folgt in Kürze
                </div>
                <div style={{ fontSize: 14, color: '#6B7494' }}>
                  Wir arbeiten gerade an unserem neuen Shooting.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ──────────────────────────────────────────────────────────── */}
      <section
        style={{ background: 'white', padding: 'clamp(56px, 8vw, 96px) 0' }}
        aria-labelledby="partners-heading"
      >
        <div className="container-brand">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>UNSERE PARTNER</p>
            <div className="gold-divider mx-auto mb-5" />
            <h2
              id="partners-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(26px, 3.2vw, 40px)',
                fontWeight: 700,
                color: '#012778',
                lineHeight: 1.15,
              }}
            >
              200+ Versicherer im Vergleich
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: 17,
                color: '#6B7494',
                maxWidth: 560,
                margin: '16px auto 0',
                lineHeight: 1.6,
              }}
            >
              Wir arbeiten mit allen relevanten Anbietern auf dem deutschen Markt zusammen
              — damit wir für dich wirklich vergleichen können.
            </p>
          </div>

          <div className="partner-marquee-viewport" aria-label="Unsere Versicherungspartner">
            <div className="partner-marquee-track">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="partner-marquee-item"
                  aria-hidden={i >= partners.length ? 'true' : undefined}
                >
                  <img
                    src={partner.src}
                    alt={i < partners.length ? partner.name : ''}
                    loading="lazy"
                    draggable={false}
                    style={partner.maxHeight ? { maxHeight: partner.maxHeight } : undefined}
                  />
                </div>
              ))}
            </div>
          </div>
          <p
            style={{
              textAlign: 'center',
              marginTop: 24,
              fontSize: 13,
              color: '#6B7494',
              fontStyle: 'italic',
            }}
          >
            Auszug aus unserem Partnernetzwerk.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────── */}
      <HomeCTASection />

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section
        style={{ background: 'white', padding: 'clamp(56px, 8vw, 96px) 0' }}
        aria-labelledby="faq-heading"
      >
        <div className="container-brand" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>HÄUFIGE FRAGEN</p>
            <div className="gold-divider mx-auto mb-5" />
            <h2
              id="faq-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#012778',
                lineHeight: 1.15,
              }}
            >
              Fragen, die uns{' '}
              <em className="italic" style={{ color: '#0141CB' }}>
                oft gestellt werden
              </em>
            </h2>
          </div>
          <FaqSection items={faqItems} />
        </div>
      </section>
    </>
  )
}
