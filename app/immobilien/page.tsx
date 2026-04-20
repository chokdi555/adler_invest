import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TrendingUp,
  Shield,
  Home,
  Users,
  X,
  PiggyBank,
  Euro,
} from 'lucide-react'
import ImmobilienHeroAnimated from '@/components/ImmobilienHeroAnimated'
import ImmobilienPrinzipAnimated from '@/components/ImmobilienPrinzipAnimated'
import ImmobilienSubPageLinks from '@/components/ImmobilienSubPageLinks'
import ImmobilienCTASection from '@/components/ImmobilienCTASection'
import FaqSection from '@/components/FaqSection'
import type { FaqItem } from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Immobilien Kapitalanlage Frankfurt | Adler Invest',
  description:
    'Investiere in Immobilien als Kapitalanlage — ohne Eigenkapital. Dein Mieter zahlt die Rate. Adler Invest begleitet dich von der Finanzierung bis zum Notartermin im Rhein-Main-Gebiet.',
  keywords: ['Kapitalanlage Immobilie', 'Immobilien Frankfurt', 'Renditeobjekt', 'ohne Eigenkapital'],
  alternates: { canonical: 'https://adlerinvest.de/immobilien' },
  openGraph: {
    title: 'Immobilien Kapitalanlage Frankfurt | Adler Invest',
    description: 'Ohne Eigenkapital in Immobilien investieren — dein Mieter zahlt die Rate.',
    url: 'https://adlerinvest.de/immobilien',
    locale: 'de_DE',
    type: 'website',
  },
}

const problemCards = [
  {
    pain: 'Ich habe kein Eigenkapital',
    response:
      'Falscher Gedanke. Viele Kapitalanlagen sind ohne Eigenkapital finanzierbar — wir zeigen dir wie.',
  },
  {
    pain: 'Ich kenne mich nicht aus',
    response: 'Wir übernehmen alles. Von der Objektauswahl bis zum Notartermin.',
  },
  {
    pain: 'Ich habe keine Zeit',
    response:
      'Von der Beratung bis zur Schlüsselübergabe — wir kümmern uns um jeden Schritt.',
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Ohne Eigenkapital',
    body: 'Viele Objekte sind ohne eigenes Kapital finanzierbar',
  },
  {
    icon: Euro,
    title: 'Steuervorteile',
    body: 'Abschreibungen und Zinsen steuerlich absetzbar',
  },
  {
    icon: Shield,
    title: 'Inflationsschutz',
    body: 'Sachwert schützt vor Geldentwertung',
  },
  {
    icon: Home,
    title: 'Mietgarantie',
    body: 'Vertraglich gesicherte Mieteinnahmen',
  },
  {
    icon: PiggyBank,
    title: 'Passives Einkommen',
    body: 'Vermögensaufbau im Schlaf',
  },
  {
    icon: Users,
    title: 'Vollbetreuung',
    body: 'Von der Finanzierung bis zum Notartermin',
  },
]

const processSteps = [
  {
    number: '1',
    title: 'Erstgespräch',
    description: 'Kostenlose Analyse Ihrer persönlichen Situation',
  },
  {
    number: '2',
    title: 'Finanzierungsprüfung',
    description: 'Wir klären Ihre Finanzierungsmöglichkeiten',
  },
  {
    number: '3',
    title: 'Objektauswahl',
    description: 'Wir präsentieren passende Objekte unter Marktwert',
  },
  {
    number: '4',
    title: 'Besichtigung',
    description: 'Optional: Besichtigung des Objekts',
  },
  {
    number: '5',
    title: 'Notartermin',
    description: 'Wir begleiten Sie durch den gesamten Kaufprozess',
  },
  {
    number: '6',
    title: 'Schlüsselübergabe',
    description: 'Ihr Mieter zieht ein — Ihr Vermögen beginnt zu wachsen',
  },
]


const faqItems: FaqItem[] = [
  {
    question: 'Kann ich eine Immobilie ohne Eigenkapital kaufen?',
    answer:
      'Ja, in vielen Fällen ist eine 100%-Finanzierung möglich — vorausgesetzt, Sie haben ein gutes Einkommen und eine solide Bonität. Bei Kapitalanlage-Immobilien akzeptieren viele Banken die zukünftigen Mieteinnahmen als Teil der Tragbarkeitsrechnung. Wir analysieren Ihre individuelle Situation und zeigen Ihnen, welche Finanzierungsmodelle für Sie in Frage kommen.',
  },
  {
    question: 'Wie viel muss ich monatlich zuzahlen?',
    answer:
      'Bei einer gut gewählten Kapitalanlage liegt Ihr tatsächlicher monatlicher Eigenaufwand häufig zwischen 20 und 50 Euro — manchmal sogar bei null. Die Mieteinnahmen decken die Finanzierungsrate. Der genaue Betrag hängt vom Objekt, dem Zinsniveau und dem Mietmarkt ab. Wir zeigen Ihnen konkrete Beispielrechnungen in der Erstberatung.',
  },
  {
    question: 'Was ist eine Kapitalanlage Immobilie?',
    answer:
      'Eine Kapitalanlage-Immobilie ist eine Wohnung oder ein Haus, die Sie nicht selbst bewohnen, sondern vermieten. Ein Mieter zahlt monatlich Miete, die Ihre Finanzierungsrate (anteilig oder vollständig) deckt. Über die Laufzeit des Darlehens zahlt der Mieter effektiv Ihre Immobilie ab — am Ende gehört Ihnen ein schuldenfreies Objekt mit gestiegenem Wert.',
  },
  {
    question: 'Welche Steuervorteile habe ich?',
    answer:
      'Als Eigentümer einer vermieteten Immobilie können Sie die jährliche Abschreibung (AfA) von 2–3% des Gebäudewertes steuerlich geltend machen. Dazu kommen Darlehenszinsen, Verwaltungskosten, Instandhaltungskosten und weitere Werbungskosten. In vielen Fällen entsteht steuerlich ein Verlust, der mit anderen Einkünften verrechnet werden kann — das reduziert Ihre Steuerlast erheblich.',
  },
  {
    question: 'Wie lange dauert der gesamte Prozess?',
    answer:
      'Von der ersten kostenlosen Beratung bis zur Schlüsselübergabe dauert es in der Regel 8 bis 12 Wochen. Die Finanzierungsprüfung dauert etwa 1–2 Wochen, die Objektauswahl und Prüfung weitere 2–3 Wochen, und der Notartermin mit Kaufabwicklung ca. 4–6 Wochen. Wir begleiten Sie durch jeden Schritt und halten alle Fristen für Sie im Blick.',
  },
  {
    question: 'Ist die Beratung wirklich kostenlos?',
    answer:
      'Ja, unsere Beratung ist zu 100% kostenlos und unverbindlich. Wir finanzieren uns durch Provisionen der Finanzierungs- und Objektpartner — für Sie entstehen keinerlei Beratungskosten. Sie gehen keinerlei Verpflichtung ein und können jederzeit ohne Konsequenzen entscheiden, nicht weiterzumachen.',
  },
]

export default function ImmobilienPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Adler Invest Immobilien',
    url: 'https://adlerinvest.de/immobilien',
    description:
      'Adler Invest begleitet Privatpersonen beim Erwerb von Renditeobjekten im Rhein-Main-Gebiet — von der Finanzierung bis zum Notartermin.',
    areaServed: 'Frankfurt am Main, Rhein-Main-Gebiet',
    knowsAbout: [
      'Kapitalanlage Immobilie',
      'Renditeobjekte',
      'Immobilienfinanzierung ohne Eigenkapital',
      'Steueroptimierte Kapitalanlage',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kennedyallee 93',
      addressLocality: 'Frankfurt am Main',
      postalCode: '60596',
      addressRegion: 'Hessen',
      addressCountry: 'DE',
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
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
      <ImmobilienHeroAnimated />

      {/* ── PROBLEM SECTION ──────────────────────────────────────────────────── */}
      <section style={{ background: 'white', padding: 'clamp(56px, 8vw, 96px) 0' }} aria-labelledby="problem-heading">
        <div className="container-brand">
          <div style={{ marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>HÄUFIGE BEDENKEN</p>
            <h2
              id="problem-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 700,
                color: '#012778',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Warum Immobilien sich unmöglich anfühlen
            </h2>
            <p style={{ fontSize: 17, color: '#6B7494', lineHeight: 1.7, maxWidth: 560 }}>
              Die meisten Menschen glauben, Immobilien seien nichts für sie. Wir zeigen, warum das
              ein Irrtum ist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemCards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: '#F4F6FA',
                  borderRadius: 16,
                  padding: '36px 32px',
                  border: '1px solid #DDE3EF',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: '#FFE8E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <X size={14} color="#CC2B2B" strokeWidth={2.5} />
                  </div>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: '#2D3142',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    "{card.pain}"
                  </span>
                </div>

                <div
                  style={{
                    width: '100%',
                    height: 1,
                    background: '#DDE3EF',
                    marginBottom: 20,
                  }}
                />

                <p
                  style={{
                    fontSize: 15,
                    color: '#0141CB',
                    fontWeight: 600,
                    lineHeight: 1.65,
                  }}
                >
                  {card.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SO FUNKTIONIERT ES ────────────────────────────────────────────────── */}
      <section
        id="so-funktioniert-es"
        style={{ background: '#F4F6FA', padding: 'clamp(56px, 8vw, 96px) 0' }}
        aria-labelledby="prinzip-heading"
      >
        <div className="container-brand">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>DER STILLE INVESTOR</p>
            <h2
              id="prinzip-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 700,
                color: '#012778',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              So baut dein Mieter dein Vermögen auf
            </h2>
            <span className="gold-divider" style={{ margin: '0 auto' }} />
          </div>

          <ImmobilienPrinzipAnimated />
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'white', padding: 'clamp(56px, 8vw, 96px) 0' }} aria-labelledby="benefits-heading">
        <div className="container-brand">
          <div style={{ marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>IHRE VORTEILE</p>
            <h2
              id="benefits-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 700,
                color: '#012778',
                lineHeight: 1.2,
              }}
            >
              Was Sie von einer Kapitalanlage haben
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div
                  key={i}
                  className="card"
                  style={{ padding: '32px 28px' }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: '#EEF2FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.5} color="#0141CB" />
                  </div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#012778',
                      marginBottom: 8,
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {b.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6B7494', lineHeight: 1.65 }}>{b.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ─────────────────────────────────────────────────── */}
      <section
        style={{ background: '#F4F6FA', padding: 'clamp(56px, 8vw, 96px) 0' }}
        aria-labelledby="process-heading"
      >
        <div className="container-brand">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>DER ABLAUF</p>
            <h2
              id="process-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 700,
                color: '#012778',
                lineHeight: 1.2,
              }}
            >
              So läuft es ab — in 6 Schritten
            </h2>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden flex flex-col">
            {processSteps.map((step, i) => (
              /* alignItems defaults to stretch so left column fills full row height */
              <div key={i} style={{ display: 'flex', gap: 20 }}>
                {/* Left: circle + connector line fills remaining height */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div className="process-step-number" style={{ flexShrink: 0 }}>{step.number}</div>
                  {i < processSteps.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: 'linear-gradient(to bottom, #0141CB, #457FFC)', marginTop: 3, marginBottom: 3 }} />
                  )}
                </div>
                {/* Right: text */}
                <div style={{ paddingTop: 12, paddingBottom: i < processSteps.length - 1 ? 28 : 0 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#012778', marginBottom: 4, fontFamily: 'var(--font-dm-sans)' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: '#6B7494', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: horizontal timeline */}
          <div
            className="hidden md:grid md:grid-cols-6"
            style={{ gap: 0, position: 'relative' }}
          >
            {/* Connector line */}
            <div
              style={{
                position: 'absolute',
                top: 24,
                left: '8.33%',
                right: '8.33%',
                height: 2,
                background: 'linear-gradient(to right, #0141CB, #457FFC)',
                zIndex: 0,
              }}
            />
            {processSteps.map((step, i) => (
              <div
                key={i}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 8px', position: 'relative', zIndex: 1 }}
              >
                <div className="process-step-number" style={{ marginBottom: 20 }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#012778', marginBottom: 6, fontFamily: 'var(--font-dm-sans)' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 12, color: '#6B7494', lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB-PAGE LINKS ───────────────────────────────────────────────────── */}
      <section style={{ background: 'white', padding: 'clamp(56px, 8vw, 96px) 0' }} aria-labelledby="subpages-heading">
        <div className="container-brand">
          <div style={{ marginBottom: 48 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>ALLE THEMEN</p>
            <h2
              id="subpages-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 700,
                color: '#012778',
              }}
            >
              Alle Immobilien-Themen
            </h2>
          </div>

          <ImmobilienSubPageLinks />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: '#F4F6FA', padding: 'clamp(56px, 8vw, 96px) 0' }} aria-labelledby="faq-heading">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>FAQ</p>
              <h2
                id="faq-heading"
                className="font-display"
                style={{
                  fontSize: 'clamp(26px, 3vw, 38px)',
                  fontWeight: 700,
                  color: '#012778',
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                Häufig gestellte Fragen
              </h2>
              <p style={{ fontSize: 15, color: '#6B7494', lineHeight: 1.75, marginBottom: 32 }}>
                Haben Sie weitere Fragen? In einem kostenlosen Erstgespräch beantworten wir alles
                persönlich.
              </p>
              <Link href="/kontakt" className="btn-primary" style={{ fontSize: 15, padding: '12px 24px' }}>
                Jetzt fragen
              </Link>
            </div>

            <FaqSection items={faqItems} />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <ImmobilienCTASection />
    </>
  )
}
