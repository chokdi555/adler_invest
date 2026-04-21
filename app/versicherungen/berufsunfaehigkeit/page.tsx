import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, AlertTriangle, ArrowRight, Phone, ArrowLeft } from 'lucide-react'
import EagleWatermark from '@/components/EagleWatermark'

export const metadata: Metadata = {
  title: 'Berufsunfähigkeitsversicherung (BU) | Adler Invest Frankfurt',
  description:
    'Berufsunfähigkeitsversicherung — der wichtigste Schutz für Berufstätige. Adler Invest vergleicht alle BU-Anbieter und findet die beste Lösung für dich in Frankfurt.',
  keywords: [
    'Berufsunfähigkeitsversicherung',
    'BU Versicherung Frankfurt',
    'BU Versicherung vergleichen',
    'Berufsunfähigkeit Schutz',
  ],
  alternates: { canonical: 'https://adlerinvest.de/versicherungen/berufsunfaehigkeit' },
  openGraph: {
    title: 'Berufsunfähigkeitsversicherung (BU) | Adler Invest Frankfurt',
    description:
      'Der wichtigste Schutz für Berufstätige. Wir vergleichen alle BU-Anbieter kostenlos.',
    url: 'https://adlerinvest.de/versicherungen/berufsunfaehigkeit',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const checkCriteria = [
  {
    title: 'AU-Klausel (Arbeitsunfähigkeitsklausel)',
    description:
      'Die BU-Rente wird bereits bei Arbeitsunfähigkeit für 6 Monate gezahlt — ohne den aufwendigen BU-Nachweis.',
  },
  {
    title: 'Keine abstrakte Verweisung',
    description:
      'Der Versicherer darf dich nicht auf andere Berufe verweisen. Du bist abgesichert, wenn du deinen zuletzt ausgeübten Beruf nicht mehr ausüben kannst.',
  },
  {
    title: 'Rückwirkende Anerkennung',
    description:
      'Die Rente wird rückwirkend ab Beginn der Berufsunfähigkeit gezahlt, nicht erst ab Antragstellung.',
  },
  {
    title: 'Nachversicherungsgarantie',
    description:
      'Du kannst die versicherte Rente erhöhen (z.B. bei Gehaltserhöhung oder Familiengründung) ohne erneute Gesundheitsprüfung.',
  },
  {
    title: 'Weltweiter Schutz',
    description:
      'Die Versicherung gilt weltweit — wichtig für Berufstätige, die international tätig sind.',
  },
]

const faqItems = [
  {
    question: 'Ab wann bin ich berufsunfähig?',
    answer:
      'Nach den Bedingungen der meisten Versicherer gilt man als berufsunfähig, wenn man voraussichtlich dauerhaft (mindestens 6 Monate) zu mindestens 50% nicht mehr in der Lage ist, den zuletzt ausgeübten Beruf auszuüben.',
  },
  {
    question: 'Reicht die staatliche Erwerbsminderungsrente nicht aus?',
    answer:
      'Nein. Die durchschnittliche Erwerbsminderungsrente beträgt in Deutschland ca. 800–1.000 € pro Monat — meist deutlich weniger als das gewohnte Einkommen. Außerdem bekommst du die volle Rente nur, wenn du weniger als 3 Stunden täglich arbeiten kannst.',
  },
  {
    question: 'Wann sollte ich eine BU abschließen?',
    answer:
      'So früh wie möglich — idealerweise in den Zwanzigern. Je jünger und gesünder du bist, desto günstiger sind die Beiträge und desto einfacher ist die Gesundheitsprüfung.',
  },
  {
    question: 'Was kostet eine BU?',
    answer:
      'Das hängt von Alter, Beruf, Gesundheitszustand und gewünschter Rentenhöhe ab. Ein 30-jähriger Büroangestellter zahlt typischerweise 60–120 € pro Monat für eine Rente von 1.500 € monatlich.',
  },
  {
    question: 'Welche Berufe bekommen schwierig eine BU?',
    answer:
      'Handwerker, Pflegepersonal und Berufe mit körperlicher Belastung zahlen höhere Beiträge. Hier lohnt sich der Vergleich besonders — die Unterschiede zwischen den Anbietern sind erheblich.',
  },
]

export default function BerufsunfaehigkeitPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
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
              Berufsunfähigkeitsversicherung
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.875rem, 5vw, 3.75rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.12,
                marginBottom: '24px',
                overflowWrap: 'break-word',
                hyphens: 'auto',
              }}
            >
              Berufsunfähigkeitsversicherung —{' '}
              <em style={{ fontStyle: 'italic', color: '#457FFC' }}>
                dein wichtigster Schutz
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
              Jeder vierte Arbeitnehmer wird vor der Rente berufsunfähig. Die staatliche
              Absicherung reicht nicht aus. Als unabhängiger Makler vergleichen wir alle
              BU-Anbieter und finden die beste Lösung für dich.
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
                { num: '25%', label: 'werden vor der Rente berufsunfähig' },
                { num: '50+', label: 'Anbieter im Vergleich' },
                { num: '0 €', label: 'Kosten für dich' },
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

      {/* ── DEFINITION / KEY FACTS ── */}
      <section className="py-24 bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">WAS IST EINE BU?</span>
              <div className="gold-divider mt-3 mb-6" />
              <h2
                className="font-display text-xl sm:text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: '#012778' }}
              >
                Was ist eine Berufsunfähigkeitsversicherung?
              </h2>
              <p className="text-lg mb-4" style={{ color: '#2D3142' }}>
                Eine <strong>Berufsunfähigkeitsversicherung (BU)</strong> zahlt eine
                monatliche Rente, wenn du aufgrund von Krankheit, Unfall oder
                psychischer Erkrankung deinen zuletzt ausgeübten Beruf nicht mehr
                ausüben kannst — und zwar unabhängig davon, ob du theoretisch einen
                anderen Job annehmen könntest.
              </p>
              <p style={{ color: '#6B7494' }}>
                Die BU ersetzt damit das wegfallende Einkommen und sichert deinen
                Lebensstandard ab. Sie ist besonders wichtig für alle, die von ihrem
                Arbeitseinkommen abhängig sind — also für die überwiegende Mehrheit aller
                Berufstätigen in Deutschland.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: '25%', label: 'aller Arbeitnehmer werden vor der Rente berufsunfähig' },
                { num: '43%', label: 'der BU-Fälle entstehen durch psychische Erkrankungen' },
                { num: '~900 €', label: 'durchschnittliche staatliche Erwerbsminderungsrente' },
                { num: '∅ 48', label: 'Altersdurchschnitt beim Eintritt der Berufsunfähigkeit' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card text-center"
                  style={{ padding: '24px' }}
                >
                  <div
                    className="font-mono text-3xl font-bold mb-2"
                    style={{ color: '#0141CB' }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: '#6B7494' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WARNING: STATE PROTECTION NOT ENOUGH ── */}
      <section className="py-16" style={{ background: '#FFF8EC' }}>
        <div className="container-brand">
          <div
            className="rounded-2xl p-8 flex gap-6 items-start"
            style={{ border: '1.5px solid #D4840A' }}
          >
            <AlertTriangle size={32} style={{ color: '#D4840A', flexShrink: 0 }} />
            <div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: '#0D0E12' }}>
                Wichtig: Staatliche Absicherung reicht nicht aus
              </h3>
              <p style={{ color: '#2D3142' }}>
                Wer nach 1961 geboren ist, hat im Falle voller Erwerbsminderung nur
                Anspruch auf die gesetzliche Erwerbsminderungsrente — und auch das nur
                unter strengen Voraussetzungen (weniger als 3 Stunden Arbeit täglich
                möglich). Die durchschnittliche Rente liegt bei ca. 900 € monatlich.
                Für die meisten Berufstätigen ist das nicht annähernd ausreichend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHECK CRITERIA ── */}
      <section className="py-24" style={{ background: '#F4F6FA' }}>
        <div className="container-brand">
          <div className="text-center mb-16">
            <span className="eyebrow">WORAUF ACHTEN</span>
            <div className="gold-divider mx-auto mt-3 mb-5" />
            <h2
              className="font-display text-4xl font-bold"
              style={{ color: '#012778' }}
            >
              5 entscheidende Kriterien für eine gute BU
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checkCriteria.map((c, idx) => (
              <div key={c.title} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={20} style={{ color: '#1A8A5A', flexShrink: 0 }} />
                  <span
                    className="font-mono text-sm font-medium"
                    style={{ color: '#6B7494' }}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: '#0D0E12' }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7494' }}>
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">WIE WIR HELFEN</span>
              <div className="gold-divider mt-3 mb-6" />
              <h2
                className="font-display text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: '#012778' }}
              >
                Adler Invest findet die beste BU für dich
              </h2>
              <p className="text-lg mb-6" style={{ color: '#2D3142' }}>
                Der BU-Markt ist komplex — Tarife, Bedingungen und Gesundheitsfragen
                unterscheiden sich erheblich. Wir navigieren durch den Markt und finden
                den Tarif, der zu deinem Beruf, deiner Gesundheit und deinem Budget passt.
              </p>
              <ul className="space-y-4">
                {[
                  'Kostenlose Analyse deines Absicherungsbedarfs',
                  'Vergleich aller relevanten BU-Anbieter',
                  'Begleitung bei der Gesundheitsprüfung',
                  'Unterstützung im Leistungsfall',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} style={{ color: '#0141CB', flexShrink: 0 }} />
                    <span style={{ color: '#2D3142' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn-primary mt-8 inline-flex">
                Jetzt BU vergleichen lassen
                <ArrowRight size={18} />
              </Link>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ background: '#F4F6FA', border: '1px solid #DDE3EF' }}
            >
              <h3 className="font-semibold text-xl mb-6" style={{ color: '#012778' }}>
                Typische BU-Kosten (Beispiel)
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Büroangestellter, 28 Jahre, 1.500 €/Monat BU-Rente', price: 'ab 55 €/Monat' },
                  { label: 'Ingenieur, 35 Jahre, 2.000 €/Monat BU-Rente', price: 'ab 90 €/Monat' },
                  { label: 'Lehrer, 30 Jahre, 1.500 €/Monat BU-Rente', price: 'ab 80 €/Monat' },
                  { label: 'Handwerker, 32 Jahre, 1.500 €/Monat BU-Rente', price: 'ab 130 €/Monat' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-3"
                    style={{ borderBottom: '1px solid #DDE3EF' }}
                  >
                    <span className="text-sm" style={{ color: '#2D3142' }}>
                      {item.label}
                    </span>
                    <span
                      className="font-mono font-semibold text-sm"
                      style={{ color: '#0141CB', whiteSpace: 'nowrap', marginLeft: '16px' }}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: '#6B7494' }}>
                * Richtpreise. Tatsächliche Beiträge abhängig von Gesundheitszustand,
                Beruf und gewähltem Tarif. Kostenlose Berechnung auf Anfrage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ background: '#F4F6FA' }}>
        <div className="container-brand max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">FAQ</span>
            <div className="gold-divider mx-auto mt-3 mb-5" />
            <h2 className="font-display text-4xl font-bold" style={{ color: '#012778' }}>
              Häufige Fragen zur BU
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((f) => (
              <div
                key={f.question}
                className="card"
                style={{ padding: '24px 28px' }}
              >
                <h3 className="font-semibold text-base mb-2" style={{ color: '#0D0E12' }}>
                  {f.question}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7494' }}>
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#012778' }}>
        <div className="container-brand text-center">
          <h2
            className="font-display text-4xl font-bold text-white mb-4"
            style={{ lineHeight: 1.2 }}
          >
            Jetzt BU-Schutz sichern
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Kostenlose Beratung — wir vergleichen alle Anbieter für dich.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontakt" className="btn-primary">
              Kostenlose BU-Beratung
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
