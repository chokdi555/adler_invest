import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | Adler Invest',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1
          className="text-2xl sm:text-4xl font-bold mb-10"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: '#012778',
          }}
        >
          Impressum
        </h1>

        <div
          className="prose max-w-none"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            color: '#2D3142',
            lineHeight: '1.75',
          }}
        >
          {/* Angaben gemäß § 5 TMG */}
          <section className="mb-10">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: '#0141CB' }}
            >
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mb-1">
              <strong>Adler Invest GmbH</strong>
            </p>
            <p className="mb-1">Kennedyallee 93</p>
            <p className="mb-1">60596 Frankfurt am Main</p>
            <p className="mb-4">Deutschland</p>
            <p>
              <strong>Vertreten durch:</strong> Cihan Özkan (Inhaber)
            </p>
          </section>

          <hr style={{ borderColor: '#DDE3EF', marginBottom: '2.5rem' }} />

          {/* Kontakt */}
          <section className="mb-10">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: '#0141CB' }}
            >
              Kontakt
            </h2>
            <p className="mb-1">
              <strong>Telefon:</strong> +49 176 63790950
            </p>
            <p className="mb-1">
              <strong>E-Mail:</strong>{' '}
              <a
                href="mailto:info@adlerinvest.de"
                style={{ color: '#0141CB' }}
              >
                info@adlerinvest.de
              </a>
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a
                href="https://adlerinvest.de"
                style={{ color: '#0141CB' }}
              >
                www.adlerinvest.de
              </a>
            </p>
          </section>

          <hr style={{ borderColor: '#DDE3EF', marginBottom: '2.5rem' }} />

          {/* Registereintrag */}
          <section className="mb-10">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: '#0141CB' }}
            >
              Registereintrag
            </h2>
            <p className="mb-1">
              <strong>Registergericht:</strong> Amtsgericht Frankfurt am Main
            </p>
            <p>
              <strong>Registernummer:</strong> HRB 00000
            </p>
          </section>

          <hr style={{ borderColor: '#DDE3EF', marginBottom: '2.5rem' }} />

          {/* Umsatzsteuer */}
          <section className="mb-10">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: '#0141CB' }}
            >
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              Gemäß § 27a Umsatzsteuergesetz: <strong>DE000000000</strong>
            </p>
          </section>

          <hr style={{ borderColor: '#DDE3EF', marginBottom: '2.5rem' }} />

          {/* Berufsbezeichnung und berufsrechtliche Regelungen */}
          <section className="mb-10">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: '#0141CB' }}
            >
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p className="mb-3">
              <strong>Berufsbezeichnungen:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                Versicherungsmakler gemäß § 34d Gewerbeordnung (GewO)
              </li>
              <li>
                Immobiliendarlehensvermittler gemäß § 34i Gewerbeordnung
                (GewO)
              </li>
            </ul>
            <p className="mb-1">
              <strong>Zuständige Aufsichtsbehörde:</strong>
            </p>
            <p className="mb-1">IHK Frankfurt am Main</p>
            <p className="mb-1">Börsenplatz 4</p>
            <p>60313 Frankfurt am Main</p>
          </section>

          <hr style={{ borderColor: '#DDE3EF', marginBottom: '2.5rem' }} />

          {/* Schlichtung */}
          <section className="mb-10">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ color: '#0141CB' }}
            >
              Streitschlichtung
            </h2>
            <p className="mb-3">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0141CB' }}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse findest du oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <hr style={{ borderColor: '#DDE3EF', marginBottom: '2.5rem' }} />

          {/* Haftungsausschluss */}
          <section className="mb-10">
            <h2
              className="text-xl font-semibold mb-6"
              style={{ color: '#0141CB' }}
            >
              Haftungsausschluss
            </h2>

            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: '#012778' }}
            >
              Haftung für Inhalte
            </h3>
            <p className="mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: '#012778' }}
            >
              Haftung für Links
            </h3>
            <p className="mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir
              für diese fremden Inhalte auch keine Gewähr übernehmen. Für
              die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
              waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
              permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Links umgehend entfernen.
            </p>

            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: '#012778' }}
            >
              Urheberrecht
            </h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke
              auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
              der schriftlichen Zustimmung des jeweiligen Autors bzw.
              Erstellers. Downloads und Kopien dieser Seite sind nur für
              den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
              die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet.
              Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Solltest du trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um
              einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
