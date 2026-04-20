'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

const schema = z.object({
  vorname: z.string().min(2, 'Bitte geben Sie Ihren Vornamen ein'),
  nachname: z.string().min(2, 'Bitte geben Sie Ihren Nachnamen ein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  telefon: z.string().optional(),
  interesse: z.enum(['Immobilien-Kapitalanlage', 'Versicherungsberatung', 'Beides', 'Sonstiges'], {
    error: 'Bitte wählen Sie ein Thema',
  }),
  nachricht: z.string().optional(),
  datenschutz: z.literal(true, {
    error: 'Bitte stimmen Sie der Datenschutzerklärung zu',
  }),
})

type FormData = z.infer<typeof schema>

const inputStyle = {
  border: '1px solid #DDE3EF',
  borderRadius: '8px',
  padding: '12px 16px',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '16px',
  color: '#2D3142',
  background: 'white',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
}

const inputErrorStyle = {
  ...inputStyle,
  borderColor: '#CC2B2B',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '14px',
  fontWeight: 500,
  color: '#2D3142',
  marginBottom: '6px',
}

const errorStyle: React.CSSProperties = {
  color: '#CC2B2B',
  fontSize: '13px',
  fontFamily: 'var(--font-dm-sans)',
  marginTop: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading')
    setSubmitError('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.error || 'Unbekannter Fehler')
      }
      setSubmitState('success')
    } catch (err) {
      setSubmitState('error')
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      )
    }
  }

  if (submitState === 'success') {
    return (
      <div
        style={{
          padding: '48px 40px',
          background: '#F4F6FA',
          borderRadius: '16px',
          border: '1px solid #DDE3EF',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'rgba(26,138,90,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}
        >
          <CheckCircle size={32} color="#1A8A5A" />
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#012778',
            marginBottom: '12px',
          }}
        >
          Vielen Dank!
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '16px',
            color: '#6B7494',
            lineHeight: 1.6,
          }}
        >
          Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
        </p>
      </div>
    )
  }

  const vornameReg = register('vorname')
  const nachnameReg = register('nachname')
  const emailReg = register('email')
  const telefonReg = register('telefon')
  const interesseReg = register('interesse')
  const nachrichtReg = register('nachricht')

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Vorname + Nachname */}
      <div className="form-name-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label htmlFor="vorname" style={labelStyle}>
            Vorname <span style={{ color: '#CC2B2B' }}>*</span>
          </label>
          <input
            id="vorname"
            type="text"
            placeholder="Max"
            style={errors.vorname ? inputErrorStyle : inputStyle}
            onFocus={(e) => { if (!errors.vorname) e.currentTarget.style.borderColor = '#0141CB' }}
            {...vornameReg}
            onBlur={(e) => { vornameReg.onBlur(e); if (!errors.vorname) e.currentTarget.style.borderColor = '#DDE3EF' }}
          />
          {errors.vorname && (
            <p style={errorStyle}>
              <AlertCircle size={12} />
              {errors.vorname.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="nachname" style={labelStyle}>
            Nachname <span style={{ color: '#CC2B2B' }}>*</span>
          </label>
          <input
            id="nachname"
            type="text"
            placeholder="Mustermann"
            style={errors.nachname ? inputErrorStyle : inputStyle}
            onFocus={(e) => { if (!errors.nachname) e.currentTarget.style.borderColor = '#0141CB' }}
            {...nachnameReg}
            onBlur={(e) => { nachnameReg.onBlur(e); if (!errors.nachname) e.currentTarget.style.borderColor = '#DDE3EF' }}
          />
          {errors.nachname && (
            <p style={errorStyle}>
              <AlertCircle size={12} />
              {errors.nachname.message}
            </p>
          )}
        </div>
      </div>

      {/* E-Mail */}
      <div>
        <label htmlFor="email" style={labelStyle}>
          E-Mail-Adresse <span style={{ color: '#CC2B2B' }}>*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="max.mustermann@email.de"
          style={errors.email ? inputErrorStyle : inputStyle}
          onFocus={(e) => { if (!errors.email) e.currentTarget.style.borderColor = '#0141CB' }}
          {...emailReg}
          onBlur={(e) => { emailReg.onBlur(e); if (!errors.email) e.currentTarget.style.borderColor = '#DDE3EF' }}
        />
        {errors.email && (
          <p style={errorStyle}>
            <AlertCircle size={12} />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="telefon" style={labelStyle}>
          Telefonnummer{' '}
          <span style={{ color: '#6B7494', fontWeight: 400 }}>(optional, für schnellere Rückmeldung)</span>
        </label>
        <input
          id="telefon"
          type="tel"
          placeholder="+49 69 000 000 00"
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = '#0141CB' }}
          {...telefonReg}
          onBlur={(e) => { telefonReg.onBlur(e); e.currentTarget.style.borderColor = '#DDE3EF' }}
        />
      </div>

      {/* Interesse */}
      <div>
        <label htmlFor="interesse" style={labelStyle}>
          Ihr Interesse <span style={{ color: '#CC2B2B' }}>*</span>
        </label>
        <select
          id="interesse"
          style={{
            ...(errors.interesse ? inputErrorStyle : inputStyle),
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7494' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center',
            paddingRight: '48px',
            cursor: 'pointer',
          }}
          onFocus={(e) => { if (!errors.interesse) e.currentTarget.style.borderColor = '#0141CB' }}
          {...interesseReg}
          onBlur={(e) => { interesseReg.onBlur(e); if (!errors.interesse) e.currentTarget.style.borderColor = '#DDE3EF' }}
        >
          <option value="">Bitte wählen…</option>
          <option value="Immobilien-Kapitalanlage">Immobilien-Kapitalanlage</option>
          <option value="Versicherungsberatung">Versicherungsberatung</option>
          <option value="Beides">Beides</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
        {errors.interesse && (
          <p style={errorStyle}>
            <AlertCircle size={12} />
            {errors.interesse.message}
          </p>
        )}
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="nachricht" style={labelStyle}>
          Ihre Nachricht{' '}
          <span style={{ color: '#6B7494', fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          id="nachricht"
          rows={4}
          placeholder="Teilen Sie uns gerne vorab mit, was Sie bewegt…"
          style={{
            ...inputStyle,
            resize: 'vertical',
            minHeight: '120px',
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = '#0141CB' }}
          {...nachrichtReg}
          onBlur={(e) => { nachrichtReg.onBlur(e); e.currentTarget.style.borderColor = '#DDE3EF' }}
        />
      </div>

      {/* Datenschutz */}
      <div>
        <label
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            cursor: 'pointer',
          }}
        >
          <input
            type="checkbox"
            style={{
              marginTop: '2px',
              width: '18px',
              height: '18px',
              flexShrink: 0,
              accentColor: '#0141CB',
              cursor: 'pointer',
            }}
            {...register('datenschutz')}
          />
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '14px',
              color: '#6B7494',
              lineHeight: 1.5,
            }}
          >
            Ich habe die{' '}
            <Link
              href="/datenschutz"
              style={{ color: '#0141CB', textDecoration: 'underline' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung
            </Link>{' '}
            gelesen und stimme der Verarbeitung meiner Daten zu.{' '}
            <span style={{ color: '#CC2B2B' }}>*</span>
          </span>
        </label>
        {errors.datenschutz && (
          <p style={{ ...errorStyle, marginTop: '8px' }}>
            <AlertCircle size={12} />
            {errors.datenschutz.message}
          </p>
        )}
      </div>

      {/* Submit error */}
      {submitState === 'error' && (
        <div
          style={{
            padding: '14px 16px',
            background: 'rgba(204,43,43,0.06)',
            border: '1px solid rgba(204,43,43,0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#CC2B2B',
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '14px',
          }}
        >
          <AlertCircle size={16} style={{ flexShrink: 0 }} />
          {submitError}
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        className="btn-primary"
        disabled={submitState === 'loading'}
        style={{
          width: '100%',
          justifyContent: 'center',
          opacity: submitState === 'loading' ? 0.75 : 1,
          cursor: submitState === 'loading' ? 'not-allowed' : 'pointer',
        }}
      >
        {submitState === 'loading' ? (
          <>
            <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
            Wird gesendet…
          </>
        ) : (
          'Kostenlose Beratung sichern'
        )}
      </button>

      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '12px',
          color: '#6B7494',
          textAlign: 'center',
        }}
      >
        Kostenlos & unverbindlich · Antwort innerhalb von 24 Stunden
      </p>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 480px) {
          .form-name-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </form>
  )
}
