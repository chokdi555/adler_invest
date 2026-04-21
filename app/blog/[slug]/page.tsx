import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'

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

const postContent: Record<string, string[]> = {
  'kapitalanlage-immobilie-erklaert': [
    'Eine Kapitalanlage Immobilie — auch Renditeobjekt genannt — ist eine Immobilie, die nicht selbst bewohnt wird, sondern vermietet. Das Besondere: Die Mieteinnahmen decken die monatliche Finanzierungsrate, sodass der Eigentümer Vermögen aufbaut, ohne eigenes Geld einzusetzen.',
    'Das Modell funktioniert so: Du nimmst eine Immobilienfinanzierung auf und kaufst eine Wohnung oder ein Haus. Ein Mieter zieht ein und zahlt monatlich Miete. Diese Miete fließt direkt auf dein Konto — und du verwendest sie, um die Kreditrate zu bedienen.',
    'Bei einem typischen Objekt (Kaufpreis: 200.000 €, Finanzierungsrate: ~800 €/Monat, Miete: ~780 €/Monat) liegt dein tatsächlicher Eigenaufwand bei nur 20–50 € im Monat. Nach 25 Jahren ist die Immobilie schuldenfrei — und die Miete fließt vollständig als passives Einkommen.',
    'Zusätzlich profitierst du von steuerlichen Vorteilen: Die jährliche Abschreibung (AfA) beträgt 2 % des Gebäudewerts, hinzu kommen alle Finanzierungszinsen und Instandhaltungskosten. Das reduziert deine Steuerlast erheblich.',
    'Adler Invest begleitet dich von der ersten Beratung bis zum Notartermin — kostenlos und unverbindlich.',
  ],
  'steuer-sparen-immobilien': [
    'Als Eigentümer einer vermieteten Immobilie hast du Zugang zu einem der attraktivsten Steuerprivilegien in Deutschland. Wir erklären die fünf wichtigsten Hebel.',
    '1. Abschreibung (AfA): 2 % des Gebäudewerts jährlich über 50 Jahre. Bei einem Gebäudewert von 150.000 € sind das 3.000 € Steuerabzug pro Jahr.',
    '2. Finanzierungszinsen: Alle Zinsen für deinen Immobilienkredit sind vollständig als Werbungskosten absetzbar. In den ersten Jahren des Kredits können das 4.000–8.000 € pro Jahr sein.',
    '3. Instandhaltungskosten: Reparaturen, Renovierungen und Modernisierungen (unter bestimmten Bedingungen) sind steuerlich absetzbar.',
    '4. Verwaltungskosten: Hausverwaltung, Steuerberater, Kontoführungsgebühren — alles absetzbar.',
    '5. Werbungskosten: Fahrten zum Objekt, Fachliteratur, anteilige Telefonkosten.',
    'Gut berechnete Kapitalanleger sparen so 1.500–4.000 € Steuern pro Jahr. Adler Invest erklärt dir in der Erstberatung, welche Steuervorteile konkret für dich gelten.',
  ],
  'immobilien-frankfurt-kaufen': [
    'Frankfurt am Main ist einer der attraktivsten Immobilienmärkte Deutschlands. Als Sitz der Europäischen Zentralbank, zahlreicher Großbanken und internationaler Unternehmen verzeichnet die Stadt ein konstantes Bevölkerungswachstum und eine stabile Nachfrage nach Wohnraum.',
    'Aktuelle Preise (2025): Im Frankfurter Stadtgebiet liegen die durchschnittlichen Kaufpreise für Eigentumswohnungen bei 5.000–7.500 €/m². Beliebte Investmentlagen wie Sachsenhausen (6.200–7.500 €/m²) oder das Westend (7.000–9.000 €/m²) bieten trotz hoher Preise solide Renditen durch hohe Mietnachfrage.',
    'Günstigere Einstiegslagen: Stadtteile wie Gallus (4.800–5.800 €/m²), Rödelheim (4.500–5.500 €/m²) oder Niederrad (5.000–6.000 €/m²) eignen sich besonders als Erstinvestment mit überschaubarem Kapitalbedarf.',
    'Mietrenditen: Die Bruttomietrendite liegt in Frankfurt typischerweise bei 3,5–4,5 %. Durch Steuervorteile (AfA, Zinsabzug) verbessert sich die Nettoperformance erheblich.',
    'Adler Invest verfügt über ein Netzwerk von Verkäufern und Entwicklern, das Zugang zu Objekten unter Marktwert ermöglicht — bevor sie auf dem freien Markt erscheinen. Sprich uns an.',
  ],
  'immobilien-unter-marktwert': [
    'Immobilien unter Marktwert zu kaufen bedeutet, eine Immobilie für weniger als ihren tatsächlichen Marktwert zu erwerben. Das klingt nach einem Glücksfall — ist aber das Ergebnis systematischer Arbeit.',
    'Wie findet Adler Invest solche Objekte? Erstens durch ein aktives Netzwerk von Eigentümern, Hausverwaltungen und Nachlassverwaltern, die diskret verkaufen möchten — ohne den öffentlichen Markt. Zweitens durch Kontakte zu Projektentwicklern mit Resteinheiten oder Paketverkäufen.',
    'Typische Szenarien: Ein Erbe möchte eine geerbte Wohnung schnell verwerten. Ein Vermieter mit mehreren Objekten verkauft eines im Paket. Ein Investor löst sein Portfolio auf. In diesen Situationen sind Abschläge von 10–20 % auf den Marktwert realistisch.',
    'Das Beispiel: Eine Wohnung mit Marktwert 220.000 € wird für 180.000 € verkauft. Du hast sofort 40.000 € an steuerpflichtigem Gewinnpotenzial eingebaut — noch bevor der erste Mieter einzieht.',
    'Adler Invest prüft alle Objekte vor der Empfehlung sorgfältig: Zustand, Lage, Mietpotenzial, rechtliche Situation. Du erhältst nur geprüfte Empfehlungen.',
  ],
  'berufsunfaehigkeit-versicherung': [
    'Statistisch gesehen wird jeder vierte Arbeitnehmer in Deutschland vor dem Rentenalter berufsunfähig. Die häufigsten Ursachen sind psychische Erkrankungen (rund 30 %), Erkrankungen des Bewegungsapparates (20 %) sowie Krebs und Herzerkrankungen. Die gesetzliche Erwerbsminderungsrente ist in den meisten Fällen nicht ausreichend — sie beträgt im Durchschnitt nur 800–1.000 € pro Monat.',
    'Die Berufsunfähigkeitsversicherung (BU) zahlt eine monatliche Rente, wenn du deinen zuletzt ausgeübten Beruf aus gesundheitlichen Gründen zu mindestens 50 % nicht mehr ausüben kannst. Diese Definition ist entscheidend: Du musst nicht vollständig arbeitsunfähig sein — es genügt, wenn du deinen spezifischen Beruf nicht mehr ausüben kannst.',
    'Worauf kommt es beim Tarif an? Erstens auf die BU-Definition: Gute Tarife verzichten auf die sogenannte "abstrakte Verweisung" — das bedeutet, dass der Versicherer dich nicht auf einen anderen, theoretisch möglichen Beruf verweisen darf. Zweitens auf die Nachversicherungsgarantie: Diese erlaubt dir, die Rente bei Lebensereignissen (Heirat, Kinder, Gehaltserhöhung) ohne erneute Gesundheitsprüfung zu erhöhen.',
    'Wann sollte man eine BU abschließen? So früh wie möglich. Je jünger und gesünder du bist, desto günstiger ist der Beitrag — und desto geringer das Risiko, aufgrund von Vorerkrankungen abgelehnt zu werden. Eine 30-jährige Bürokraft zahlt für eine monatliche Rente von 2.000 € typischerweise 60–120 € im Monat.',
    'Adler Invest vergleicht alle führenden BU-Anbieter — von Allianz über Swiss Life bis Nürnberger — und findet den Tarif, der zu deinem Beruf, deiner Gesundheit und deinem Budget passt. Die Beratung ist kostenlos und unverbindlich.',
  ],
  'rechtsschutz-wann-lohnt-es-sich': [
    'Ein Rechtsstreit kann schnell teuer werden: Die Anwaltskosten für ein arbeitsrechtliches Verfahren in der ersten Instanz beginnen bei 1.500 €, ein Mietrechtsstreit kostet je nach Streitwert 1.000–8.000 €, und ein Unfallverfahren vor dem Landgericht kann 10.000 € oder mehr kosten. Die Rechtsschutzversicherung übernimmt diese Kosten — und ermöglicht es dir, dein Recht auch dann durchzusetzen, wenn die Gegenseite finanziell stärker ist.',
    'Für wen lohnt sich eine Rechtsschutzversicherung besonders? Erstens für Mieter und Vermieter: Streitigkeiten über Betriebskosten, Mieterhöhungen, Mängel oder Kautionen sind häufig und kostspielig. Zweitens für Arbeitnehmer: Kündigung, Abmahnung, Mobbing oder Diskriminierung — arbeitsrechtliche Konflikte treffen viele. Drittens für Autofahrer: Ein Unfall, ein Bußgeldbescheid oder ein Führerscheinentzug können rechtliche Folgen haben, die sich mit Rechtsschutz deutlich leichter bekämpfen lassen.',
    'Die vier Kernmodule: Privat-Rechtsschutz (Alltags- und Vertragsstreitigkeiten), Berufs-Rechtsschutz (arbeitsrechtliche Konflikte), Verkehrs-Rechtsschutz (alles rund ums Fahrzeug) und Wohnungs-Rechtsschutz (Miet- und Eigentumsrecht). Wer alle vier Module kombiniert, ist umfassend abgesichert — für oft nur 20–40 € pro Monat.',
    'Wichtig zu wissen: Die meisten Tarife haben eine Wartezeit von 3 Monaten. Das bedeutet: Nur der Verkehrs-Rechtsschutz greift in vielen Tarifen sofort. Außerdem sind bereits bestehende oder absehbare Streitigkeiten grundsätzlich nicht versichert — der Abschluss sollte also vorsorglich erfolgen, nicht erst wenn ein Konflikt droht.',
    'Adler Invest vergleicht alle relevanten Rechtsschutztarife und berät dich, welches Modul-Paket zu deiner Lebenssituation passt. Die Beratung ist kostenlos — sprich uns einfach an.',
  ],
  'immobilien-ohne-eigenkapital': [
    'Der weit verbreitete Rat lautet: "Ohne 20 % Eigenkapital kaufst du keine Immobilie." Diese Faustregel gilt für Eigenheime — bei Kapitalanlagen ist die Realität differenzierter.',
    'Warum der Unterschied? Banken bewerten eine Kapitalanlage anders als ein Eigenheim. Bei einer vermieteten Immobilie zählen die Mieteinnahmen als zusätzliches Einkommen und verbessern die Bonität. In der Praxis finanzieren viele Banken 90–100 % des Kaufpreises für gut situierte Angestellte mit stabilen Mieteinnahmen.',
    'Voraussetzungen: Wichtig sind ein solides Nettoeinkommen (typischerweise ab 2.500 €/Monat netto), eine saubere Schufa, und ein Objekt mit hoher Vermietbarkeit und stabilem Mietumfeld.',
    'KfW-Programme: Zusätzlich gibt es staatliche Förderprogramme der KfW (z.B. KfW 261 für energieeffiziente Gebäude), die zinsgünstige Darlehen bereitstellen und den Eigenkapitalbedarf weiter senken.',
    'Adler Invest klärt in der kostenlosen Erstberatung, welche Finanzierungsmodelle für deine persönliche Situation in Frage kommen — ohne Verpflichtung.',
  ],
}

export async function generateStaticParams() {
  return [
    { slug: 'kapitalanlage-immobilie-erklaert' },
    { slug: 'steuer-sparen-immobilien' },
    { slug: 'berufsunfaehigkeit-versicherung' },
    { slug: 'rechtsschutz-wann-lohnt-es-sich' },
    { slug: 'immobilien-frankfurt-kaufen' },
    { slug: 'immobilien-unter-marktwert' },
    { slug: 'immobilien-ohne-eigenkapital' },
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Adler Invest Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://adlerinvest.de/blog/${slug}` },
    openGraph: {
      title: `${post.title} | Adler Invest Blog`,
      description: post.excerpt,
      url: `https://adlerinvest.de/blog/${slug}`,
      siteName: 'Adler Invest',
      locale: 'de_DE',
      type: 'article',
    },
    robots: { index: true, follow: true },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const content = postContent[slug] ?? []
  const catStyle = categoryStyles[post.category] ?? categoryStyles['Markt']

  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 2)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'Adler Invest' },
    publisher: {
      '@type': 'Organization',
      name: 'Adler Invest',
      logo: 'https://adlerinvest.de/logo.svg',
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `https://adlerinvest.de/blog/${slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />

      {/* Hero header */}
      <section
        className="pt-[72px] py-12"
        style={{ background: '#F4F6FA' }}
      >
        <div className="container-brand max-w-[720px]">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium mb-4 transition-colors duration-200 hover:opacity-70"
            style={{ color: '#0141CB' }}
          >
            <ArrowLeft size={15} />
            Zurück zum Blog
          </Link>

          <span
            className="text-xs font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block mb-5"
            style={{ background: catStyle.bg, color: catStyle.color }}
          >
            {post.category}
          </span>

          <h1
            className="text-3xl lg:text-4xl font-bold mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)', color: '#012778' }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-5" style={{ color: '#6B7494' }}>
            <span className="flex items-center gap-1.5 text-sm">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-sm">
              <Clock size={14} />
              {post.readTime} Lesezeit
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16" style={{ background: '#FFFFFF' }}>
        <div className="container-brand max-w-[720px]">
          <div className="space-y-6 mb-14">
            {content.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: i === 0 ? '#2D3142' : '#6B7494', fontSize: i === 0 ? '1.0625rem' : '1rem' }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA box */}
          <div
            className="rounded-[16px] p-8"
            style={{ background: 'linear-gradient(135deg, #012778 0%, #0141CB 100%)' }}
          >
            <p className="eyebrow-gold mb-3">Jetzt handeln</p>
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Kostenlose Beratung sichern
            </h3>
            <p className="text-white/75 text-sm mb-6 max-w-[400px]">
              Lass dich persönlich beraten — unverbindlich und kostenlos. Wir
              prüfen, was für deine individuelle Situation möglich ist.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200"
              style={{
                background: '#FFFFFF',
                color: '#0141CB',
                letterSpacing: '0.04em',
              }}
            >
              Jetzt Termin vereinbaren
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16" style={{ background: '#F4F6FA' }}>
        <div className="container-brand max-w-[720px]">
          <h2
            className="text-xl font-semibold mb-8"
            style={{ color: '#012778', fontFamily: 'var(--font-playfair)' }}
          >
            Weitere Artikel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((related) => {
              const relCat = categoryStyles[related.category] ?? categoryStyles['Markt']
              return (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="card group flex flex-col"
                  style={{ padding: '24px', textDecoration: 'none' }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full inline-block self-start mb-3"
                    style={{ background: relCat.bg, color: relCat.color }}
                  >
                    {related.category}
                  </span>
                  <h3
                    className="text-base font-semibold mb-2 leading-snug"
                    style={{ color: '#012778' }}
                  >
                    {related.title}
                  </h3>
                  <span
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                    style={{ color: '#0141CB' }}
                  >
                    Lesen
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
