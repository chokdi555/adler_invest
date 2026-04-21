import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Immobilien & Versicherungen | Adler Invest',
  description:
    'Expertenwissen zu Immobilien-Kapitalanlagen, Versicherungen und Finanzplanung. Aktuelle Artikel vom Adler Invest Team in Frankfurt.',
  keywords: ['Immobilien Blog', 'Kapitalanlage Ratgeber', 'Versicherungen Frankfurt'],
  alternates: { canonical: 'https://adlerinvest.de/blog' },
  openGraph: {
    title: 'Blog | Immobilien & Versicherungen | Adler Invest',
    description:
      'Expertenwissen zu Immobilien-Kapitalanlagen, Versicherungen und Finanzplanung.',
    url: 'https://adlerinvest.de/blog',
    siteName: 'Adler Invest',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const categoryStyles: Record<string, { bg: string; color: string }> = {
  Immobilien: { bg: '#EEF2FA', color: '#0141CB' },
  Steuern: { bg: '#FDF6E3', color: '#C8A84B' },
  Finanzierung: { bg: '#E8F5EE', color: '#1A8A5A' },
  Versicherungen: { bg: '#EEF2FA', color: '#0141CB' },
  Markt: { bg: '#F4F6FA', color: '#6B7494' },
}

const posts = [
  {
    slug: 'kapitalanlage-immobilie-erklaert',
    title: 'Kapitalanlage Immobilie: So funktioniert das Mieter-zahlt-Modell',
    excerpt:
      'Wie funktioniert eine Kapitalanlage Immobilie genau? Wir erklären das Modell Schritt für Schritt — mit konkreten Zahlen.',
    date: '28. März 2026',
    category: 'Immobilien',
    readTime: '8 min',
  },
  {
    slug: 'steuer-sparen-immobilien',
    title: 'Steuer sparen mit Immobilien: Die 5 wichtigsten Vorteile',
    excerpt:
      'Als Kapitalanleger profitierst du von erheblichen Steuervorteilen. Wir erklären AfA, Zinsabzug und mehr.',
    date: '10. März 2026',
    category: 'Steuern',
    readTime: '6 min',
  },
  {
    slug: 'berufsunfaehigkeit-versicherung',
    title: 'Berufsunfähigkeitsversicherung: Warum sie unverzichtbar ist',
    excerpt:
      'Jeder vierte Arbeitnehmer wird vor der Rente berufsunfähig. Warum die BU-Versicherung die wichtigste Absicherung überhaupt ist — und was einen guten Tarif ausmacht.',
    date: '20. Februar 2026',
    category: 'Versicherungen',
    readTime: '7 min',
  },
  {
    slug: 'rechtsschutz-wann-lohnt-es-sich',
    title: 'Rechtsschutzversicherung: Wann lohnt sie sich wirklich?',
    excerpt:
      'Mietstreit, Kündigung, Verkehrsunfall — ein Rechtsstreit kostet schnell Tausende Euro. Wann die Rechtsschutzversicherung sinnvoll ist und worauf du achten solltest.',
    date: '5. Februar 2026',
    category: 'Versicherungen',
    readTime: '6 min',
  },
  {
    slug: 'immobilien-frankfurt-kaufen',
    title: 'Immobilien in Frankfurt kaufen: Preise, Lagen, Tipps für 2025',
    excerpt:
      'Der Frankfurter Immobilienmarkt 2025: aktuelle Preise, beste Stadtteile und Tipps für Kapitalanleger.',
    date: '14. Januar 2026',
    category: 'Immobilien',
    readTime: '10 min',
  },
  {
    slug: 'immobilien-unter-marktwert',
    title: 'Immobilien unter Marktwert finden — wie das funktioniert',
    excerpt:
      'Wie findet Adler Invest Immobilien unter Marktwert? Die Strategien und Quellen unseres Teams.',
    date: '18. Dezember 2025',
    category: 'Immobilien',
    readTime: '7 min',
  },
  {
    slug: 'immobilien-ohne-eigenkapital',
    title: 'Eigenkapital für Immobilien: Braucht man wirklich 20%?',
    excerpt:
      'Der Mythos vom nötigen Eigenkapital — warum viele Kapitalanlagen auch ohne 20% Eigenkapital möglich sind.',
    date: '17. November 2025',
    category: 'Finanzierung',
    readTime: '5 min',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Adler Invest Blog',
  url: 'https://adlerinvest.de/blog',
  description:
    'Expertenwissen zu Immobilien-Kapitalanlagen, Versicherungen und Finanzplanung.',
  publisher: {
    '@type': 'Organization',
    name: 'Adler Invest',
    logo: 'https://adlerinvest.de/logo.svg',
  },
}

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* Hero */}
      <section
        className="pt-[72px] py-16"
        style={{ background: '#F4F6FA' }}
      >
        <div className="container-brand">
          <p className="eyebrow mb-4">BLOG</p>
          <h1
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}
          >
            Expertenwissen für deinen Vermögensaufbau
          </h1>
          <p className="text-lg max-w-[560px]" style={{ color: '#6B7494' }}>
            Praxisnahe Artikel zu Immobilien-Kapitalanlagen, Steueroptimierung und
            Versicherungen — vom Adler Invest Team in Frankfurt am Main.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const catStyle = categoryStyles[post.category] ?? categoryStyles['Markt']
              return (
                <article
                  key={post.slug}
                  className="card flex flex-col group"
                  style={{ padding: '0', overflow: 'hidden' }}
                >
                  {/* Category banner top accent */}
                  <div
                    className="h-1 w-full"
                    style={{ background: catStyle.color }}
                  />
                  <div className="p-8 flex flex-col flex-1">
                    {/* Category badge */}
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block self-start mb-4"
                      style={{ background: catStyle.bg, color: catStyle.color }}
                    >
                      {post.category}
                    </span>

                    <h2
                      className="text-xl font-semibold mb-3 leading-snug flex-1"
                      style={{ color: '#012778', fontFamily: 'var(--font-playfair)' }}
                    >
                      {post.title}
                    </h2>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7494' }}>
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-6" style={{ color: '#6B7494' }}>
                      <span className="flex items-center gap-1.5 text-xs">
                        <Calendar size={13} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs">
                        <Clock size={13} />
                        {post.readTime} Lesezeit
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                      style={{ color: '#0141CB', letterSpacing: '0.02em' }}
                    >
                      Weiterlesen
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#012778' }}>
        <div className="container-brand text-center">
          <p className="eyebrow-gold mb-4">Persönliche Beratung</p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Fragen? Wir beraten dich kostenlos.
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-[440px] mx-auto">
            Artikel sind ein Anfang — aber deine Situation ist individuell. Sprich
            direkt mit einem Experten.
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
            Kostenlose Beratung sichern
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
