'use client'

import Link from 'next/link'

export default function ImmobilienCTASection() {
  return (
    <section
      style={{
        background: '#012778',
        padding: 'clamp(56px, 9vw, 112px) 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="immo-cta-heading"
    >
      {/* Eagle watermark */}
      <svg
        viewBox="0 0 258 268"
        fill="none"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-5%',
          bottom: '-10%',
          width: 480,
          height: 'auto',
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      >
        <path d="M154.544 0L103.071 89.1542H206.018L154.544 0Z" fill="#457FFC" />
        <path d="M205.989 89.1084L154.516 178.263H257.462L205.989 89.1084Z" fill="#0141CB" />
        <path d="M257.263 178.148L154.317 178.148L205.79 267.302L257.263 178.148Z" fill="#0539A9" />
        <path d="M154.361 178.217L102.888 267.371H205.834L154.361 178.217Z" fill="#012778" />
        <path d="M154.376 178.148L51.4294 178.148L102.903 267.302L154.376 178.148Z" fill="#001C59" />
        <path d="M206.004 89.2227L103.057 89.2227L154.53 178.377L206.004 89.2227Z" fill="#0E5AFD" />
        <path d="M51.4731 178.217L-6.10352e-05 267.371H102.946L51.4731 178.217Z" fill="white" fillOpacity="0.5" />
      </svg>

      <div className="container-brand" style={{ position: 'relative', zIndex: 1 }}>
        <p className="eyebrow-gold" style={{ marginBottom: 20 }}>STARTEN SIE JETZT</p>
        <h2
          id="immo-cta-heading"
          className="font-display"
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Bereit für deine erste Immobilie?
        </h2>
        <p
          style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            maxWidth: 500,
            margin: '0 auto 44px',
          }}
        >
          Vereinbare noch heute dein kostenloses Erstgespräch. Wir zeigen dir konkrete
          Objekte und Finanzierungsmöglichkeiten.
        </p>
        <Link
          href="/kontakt"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'white',
            color: '#0141CB',
            padding: '14px 28px',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: '0.04em',
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.25)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Jetzt kostenlose Beratung buchen
        </Link>
      </div>
    </section>
  )
}
