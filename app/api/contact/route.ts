import { Resend } from 'resend'

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured')
    return Response.json(
      { error: 'E-Mail-Versand ist nicht konfiguriert.' },
      { status: 500 }
    )
  }
  const resend = new Resend(apiKey)
  const recipient = process.env.CONTACT_EMAIL || 'info@adlerinvest.de'

  try {
    const body = await request.json()
    const { vorname, nachname, email, telefon, interesse, nachricht } = body

    // Basic validation
    if (!vorname || !nachname || !email || !interesse) {
      return Response.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
    }

    const v = {
      vorname: escapeHtml(String(vorname)),
      nachname: escapeHtml(String(nachname)),
      email: escapeHtml(String(email)),
      telefon: telefon ? escapeHtml(String(telefon)) : '',
      interesse: escapeHtml(String(interesse)),
      nachricht: nachricht ? escapeHtml(String(nachricht)).replace(/\n/g, '<br>') : '',
    }

    const { error } = await resend.emails.send({
      from: 'Adler Invest Website <noreply@adlerinvest.de>',
      to: [recipient],
      replyTo: String(email),
      subject: `Neue Kontaktanfrage – ${v.interesse} – ${v.vorname} ${v.nachname}`,
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F4F6FA; border-radius: 12px;">
          <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #DDE3EF;">
            <h2 style="margin: 0 0 4px; font-size: 20px; color: #012778;">Neue Kontaktanfrage</h2>
            <p style="margin: 0; font-size: 14px; color: #6B7494;">Über adlerinvest.de</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-size: 14px; color: #6B7494; width: 140px;">Name</td>
              <td style="padding: 10px 0; font-size: 15px; color: #2D3142; font-weight: 600;">${v.vorname} ${v.nachname}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 14px; color: #6B7494;">E-Mail</td>
              <td style="padding: 10px 0; font-size: 15px; color: #2D3142;">
                <a href="mailto:${v.email}" style="color: #0141CB;">${v.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 14px; color: #6B7494;">Telefon</td>
              <td style="padding: 10px 0; font-size: 15px; color: #2D3142;">${v.telefon || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 14px; color: #6B7494;">Interesse</td>
              <td style="padding: 10px 0;">
                <span style="display: inline-block; background: #EEF2FA; color: #0141CB; font-size: 13px; font-weight: 600; padding: 4px 12px; border-radius: 20px;">${v.interesse}</span>
              </td>
            </tr>
            ${v.nachricht ? `
            <tr>
              <td style="padding: 10px 0; font-size: 14px; color: #6B7494; vertical-align: top;">Nachricht</td>
              <td style="padding: 10px 0; font-size: 15px; color: #2D3142; line-height: 1.6;">${v.nachricht}</td>
            </tr>
            ` : ''}
          </table>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #DDE3EF;">
            <a href="mailto:${v.email}" style="display: inline-block; background: #0141CB; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
              Antworten
            </a>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json(
        { error: 'E-Mail konnte nicht gesendet werden.' },
        { status: 502 }
      )
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Interner Fehler. Bitte versuche es später erneut.' },
      { status: 500 }
    )
  }
}
