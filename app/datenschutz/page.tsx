import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Adler Invest',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1
          className="text-2xl sm:text-4xl font-bold mb-4"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: '#012778',
          }}
        >
          Datenschutzerklärung
        </h1>
        <p
          className="mb-10"
          style={{ color: '#6B7494', fontFamily: 'var(--font-dm-sans)' }}
        >
          Stand: März 2026
        </p>

        <div
          style={{
            fontFamily: 'var(--font-dm-sans)',
            color: '#2D3142',
            lineHeight: '1.75',
          }}
        >
          {/* 1. Verantwortlicher */}
          <Section title="1. Verantwortlicher">
            <p className="mb-3">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung
              (DSGVO) und anderer nationaler Datenschutzgesetze sowie
              sonstiger datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p className="mb-1">
              <strong>Adler Invest GmbH</strong>
            </p>
            <p className="mb-1">Kennedyallee 93</p>
            <p className="mb-1">60596 Frankfurt am Main</p>
            <p className="mb-1">
              Telefon: <a href="tel:+496900000000" style={{ color: '#0141CB' }}>+49 69 000 000 00</a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:datenschutz@adlerinvest.de" style={{ color: '#0141CB' }}>
                datenschutz@adlerinvest.de
              </a>
            </p>
          </Section>

          {/* 2. Arten der verarbeiteten Daten */}
          <Section title="2. Arten der verarbeiteten Daten">
            <p className="mb-3">
              Im Rahmen der Nutzung unserer Website und unserer Dienste
              verarbeiten wir folgende Kategorien personenbezogener Daten:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Bestandsdaten:</strong> Name, Vorname, Adresse,
                Geburtsdatum
              </li>
              <li>
                <strong>Kontaktdaten:</strong> E-Mail-Adresse,
                Telefonnummer
              </li>
              <li>
                <strong>Inhaltsdaten:</strong> Texteingaben und Angaben
                in Formularen (z. B. Kontaktformular)
              </li>
              <li>
                <strong>Nutzungsdaten:</strong> Besuchte Seiten,
                Zugriffszeiten, verwendeter Browser und
                Betriebssystem, IP-Adresse (anonymisiert)
              </li>
              <li>
                <strong>Meta- und Kommunikationsdaten:</strong>{' '}
                Geräte-Informationen, IP-Adressen
              </li>
            </ul>
          </Section>

          {/* 3. Zweck der Verarbeitung */}
          <Section title="3. Zweck der Verarbeitung">
            <p className="mb-3">
              Wir verarbeiten personenbezogene Daten zu folgenden Zwecken:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Bereitstellung, Betrieb und Optimierung unserer Website
              </li>
              <li>
                Bearbeitung von Kontaktanfragen und Kommunikation mit
                Interessenten und Kunden
              </li>
              <li>
                Durchführung von Beratungsgesprächen (Immobilien und
                Versicherungen)
              </li>
              <li>
                Vertragsanbahnung und Vertragserfüllung im Bereich
                Immobilienvermittlung und Versicherungsberatung
              </li>
              <li>
                Erfüllung gesetzlicher Pflichten (z. B. HGB, GewO,
                steuerliche Aufbewahrungspflichten)
              </li>
              <li>
                Wahrung berechtigter Interessen (z. B. IT-Sicherheit,
                Missbrauchsprävention)
              </li>
            </ul>
          </Section>

          {/* 4. Rechtsgrundlagen */}
          <Section title="4. Rechtsgrundlagen der Verarbeitung">
            <p className="mb-3">
              Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf
              Grundlage folgender Rechtsgrundlagen gemäß Art. 6 DSGVO:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung):</strong>{' '}
                Sofern Sie uns eine ausdrückliche Einwilligung zur
                Verarbeitung erteilt haben, z. B. beim Absenden des
                Kontaktformulars.
              </li>
              <li>
                <strong>
                  Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung):
                </strong>{' '}
                Wenn die Verarbeitung zur Durchführung vorvertraglicher
                Maßnahmen oder zur Vertragserfüllung erforderlich ist.
              </li>
              <li>
                <strong>
                  Art. 6 Abs. 1 lit. c DSGVO (Rechtliche Verpflichtung):
                </strong>{' '}
                Wenn die Verarbeitung zur Erfüllung einer rechtlichen
                Verpflichtung erforderlich ist (z. B.
                Aufbewahrungspflichten nach HGB oder AO).
              </li>
              <li>
                <strong>
                  Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen):
                </strong>{' '}
                Soweit die Verarbeitung zur Wahrung unserer berechtigten
                Interessen oder der Interessen Dritter erforderlich ist
                und Ihre Grundrechte nicht überwiegen (z. B.
                Sicherstellung des IT-Betriebs, statistische Auswertung
                der Websitenutzung).
              </li>
            </ul>
          </Section>

          {/* 5. Weitergabe an Dritte */}
          <Section title="5. Weitergabe von Daten an Dritte">
            <p className="mb-3">
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte
              erfolgt grundsätzlich nur, wenn:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Sie hierzu Ihre ausdrückliche Einwilligung erteilt haben
                (Art. 6 Abs. 1 lit. a DSGVO),
              </li>
              <li>
                die Weitergabe zur Vertragserfüllung erforderlich ist
                (Art. 6 Abs. 1 lit. b DSGVO),
              </li>
              <li>
                wir gesetzlich zur Weitergabe verpflichtet sind
                (Art. 6 Abs. 1 lit. c DSGVO), oder
              </li>
              <li>
                die Weitergabe auf Basis berechtigter Interessen
                erfolgt (Art. 6 Abs. 1 lit. f DSGVO).
              </li>
            </ul>
            <p className="mb-3">
              <strong>Auftragsverarbeiter:</strong> Wir setzen folgende
              Dienstleister als Auftragsverarbeiter gemäß Art. 28 DSGVO ein:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Resend, Inc.</strong> (USA) — E-Mail-Versanddienst
                für die Verarbeitung von Kontaktformular-Einsendungen.
                Die Datenübermittlung erfolgt auf Grundlage von
                Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2
                lit. c DSGVO.
              </li>
              <li>
                <strong>Vercel, Inc.</strong> (USA) — Hosting-Anbieter
                für unsere Website. Näheres hierzu unter Abschnitt 10.
              </li>
            </ul>
          </Section>

          {/* 6. Speicherdauer */}
          <Section title="6. Speicherdauer">
            <p className="mb-3">
              Wir speichern personenbezogene Daten nur so lange, wie dies
              für den jeweiligen Verarbeitungszweck erforderlich ist oder
              wie es gesetzliche Aufbewahrungspflichten vorschreiben.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Kontaktformular-Anfragen:</strong> Daten werden
                nach Abschluss der Bearbeitung für maximal 3 Monate
                gespeichert, sofern kein Vertragsverhältnis entstanden
                ist.
              </li>
              <li>
                <strong>Vertragsdaten:</strong> Daten aus bestehenden
                Vertragsverhältnissen werden für die Dauer des
                Vertragsverhältnisses sowie entsprechend der gesetzlichen
                Aufbewahrungsfristen (i. d. R. 6–10 Jahre) aufbewahrt.
              </li>
              <li>
                <strong>Server-Logs:</strong> Technische Zugriffsdaten
                werden automatisch nach 7 Tagen gelöscht.
              </li>
            </ul>
          </Section>

          {/* 7. Ihre Rechte */}
          <Section title="7. Ihre Rechte als betroffene Person">
            <p className="mb-3">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der
              Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Recht auf Auskunft</strong> (Art. 15 DSGVO):
                Sie können Auskunft darüber verlangen, ob und welche
                personenbezogenen Daten wir über Sie verarbeiten.
              </li>
              <li>
                <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO):
                Sie können die Berichtigung unrichtiger oder die
                Vervollständigung unvollständiger Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung</strong> (Art. 17 DSGVO):
                Sie können die Löschung Ihrer personenbezogenen Daten
                verlangen, sofern keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </li>
              <li>
                <strong>Recht auf Einschränkung der Verarbeitung</strong>{' '}
                (Art. 18 DSGVO): Sie können die Einschränkung der
                Verarbeitung Ihrer Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit</strong>{' '}
                (Art. 20 DSGVO): Sie können verlangen, dass Ihre Daten
                in einem strukturierten, gängigen und
                maschinenlesbaren Format übermittelt werden.
              </li>
              <li>
                <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie
                können der Verarbeitung Ihrer Daten jederzeit
                widersprechen, sofern die Verarbeitung auf Art. 6 Abs. 1
                lit. e oder f DSGVO beruht.
              </li>
              <li>
                <strong>Widerruf der Einwilligung</strong> (Art. 7
                Abs. 3 DSGVO): Eine erteilte Einwilligung können Sie
                jederzeit mit Wirkung für die Zukunft widerrufen.
              </li>
              <li>
                <strong>Beschwerderecht</strong> (Art. 77 DSGVO): Sie
                haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                zu beschweren. Die zuständige Aufsichtsbehörde ist der
                Hessische Beauftragte für Datenschutz und
                Informationsfreiheit, Postfach 3163, 65021 Wiesbaden.
              </li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a
                href="mailto:datenschutz@adlerinvest.de"
                style={{ color: '#0141CB' }}
              >
                datenschutz@adlerinvest.de
              </a>
            </p>
          </Section>

          {/* 8. Kontaktformular */}
          <Section title="8. Kontaktformular">
            <p className="mb-3">
              Wenn Sie uns über unser Kontaktformular eine Anfrage
              zukommen lassen, werden die von Ihnen angegebenen Daten
              (Vorname, Nachname, E-Mail-Adresse, Telefonnummer, Anliegen
              und Nachrichtentext) zur Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="mb-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), die Sie durch
              Aktivierung der Datenschutz-Checkbox und Absenden des
              Formulars erteilen. Ohne Ihre Einwilligung können wir Ihre
              Anfrage nicht bearbeiten.
            </p>
            <p className="mb-3">
              Die im Rahmen des Kontaktformulars eingegebenen Daten
              verbleiben bei uns, bis Sie uns zur Löschung auffordern,
              Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
              für die Datenspeicherung entfällt (z. B. nach abgeschlossener
              Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
              — insbesondere Aufbewahrungsfristen — bleiben unberührt.
            </p>
            <p>
              Daten aus Kontaktformular-Anfragen ohne nachfolgendes
              Vertragsverhältnis werden nach <strong>3 Monaten</strong>{' '}
              automatisch gelöscht.
            </p>
          </Section>

          {/* 9. Cookies */}
          <Section title="9. Cookies">
            <p className="mb-3">
              Unsere Website verwendet Cookies. Cookies sind kleine
              Textdateien, die auf Ihrem Endgerät gespeichert werden und
              die Ihr Browser speichert.
            </p>
            <p className="mb-3">
              Wir setzen ausschließlich <strong>technisch notwendige Cookies</strong>{' '}
              ein, die für den Betrieb der Website erforderlich sind. Diese
              Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              (berechtigte Interessen) verarbeitet und bedürfen keiner
              gesonderten Einwilligung.
            </p>
            <p className="mb-3">
              Wir setzen keine Tracking- oder Analyse-Cookies ohne Ihre
              ausdrückliche Einwilligung ein. Unsere Website verwendet
              Plausible Analytics, ein datenschutzfreundliches Analyse-Tool,
              das ohne Cookies auskommt und keine personenbezogenen Daten
              erhebt.
            </p>
            <p>
              Sie können die Speicherung von Cookies durch eine
              entsprechende Einstellung Ihres Browsers unterbinden.
              Bitte beachten Sie, dass dies die Funktionalität der Website
              einschränken kann.
            </p>
          </Section>

          {/* 10. Hosting */}
          <Section title="10. Hosting (Vercel)">
            <p className="mb-3">
              Diese Website wird bei <strong>Vercel, Inc.</strong>,
              340 Pine Street Suite 701, San Francisco, CA 94104, USA,
              gehostet. Vercel ist ein US-amerikanischer Anbieter von
              Cloud-Hosting-Diensten.
            </p>
            <p className="mb-3">
              Beim Aufruf unserer Website werden durch den Hosting-Anbieter
              automatisch technische Zugriffsdaten (sog. Server-Logs)
              gespeichert, darunter:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>IP-Adresse des anfragenden Rechners (anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Übertragene Datenmenge</li>
              <li>Meldung über erfolgreichen Abruf</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem des Nutzers</li>
            </ul>
            <p className="mb-3">
              Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1
              lit. f DSGVO (berechtigte Interessen an einem sicheren und
              störungsfreien Betrieb der Website).
            </p>
            <p>
              Da Vercel ein US-amerikanisches Unternehmen ist, können
              Daten in die USA übermittelt werden. Die Datenübermittlung
              erfolgt auf Grundlage von Standardvertragsklauseln (SCCs)
              gemäß Art. 46 Abs. 2 lit. c DSGVO. Vercel ist unter dem
              EU-US Data Privacy Framework zertifiziert.
            </p>
          </Section>

          {/* 11. Änderungen */}
          <Section title="11. Änderungen dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung
              anzupassen, um sie stets den aktuellen rechtlichen
              Anforderungen zu entsprechen oder um Änderungen unserer
              Leistungen in der Datenschutzerklärung umzusetzen, z. B.
              bei der Einführung neuer Services. Für Ihren erneuten Besuch
              gilt dann die neue Datenschutzerklärung. Wir empfehlen Ihnen,
              diese Seite regelmäßig aufzurufen, um sich über den aktuellen
              Datenschutzstand zu informieren. Der Stand der aktuellen
              Version ist oben auf dieser Seite angegeben.
            </p>
          </Section>

          {/* 12. Kontakt Datenschutz */}
          <Section title="12. Kontakt zum Datenschutz">
            <p className="mb-3">
              Bei Fragen zum Datenschutz, zur Ausübung Ihrer Rechte oder
              bei Anliegen zur Datenverarbeitung wenden Sie sich bitte an:
            </p>
            <p className="mb-1">
              <strong>Adler Invest GmbH — Datenschutz</strong>
            </p>
            <p className="mb-1">Kennedyallee 93</p>
            <p className="mb-1">60596 Frankfurt am Main</p>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:datenschutz@adlerinvest.de"
                style={{ color: '#0141CB' }}
              >
                datenschutz@adlerinvest.de
              </a>
            </p>
          </Section>
        </div>
      </div>
    </main>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl font-semibold mb-4"
        style={{ color: '#0141CB', fontFamily: 'var(--font-dm-sans)' }}
      >
        {title}
      </h2>
      {children}
      <hr style={{ borderColor: '#DDE3EF', marginTop: '2.5rem' }} />
    </section>
  )
}
