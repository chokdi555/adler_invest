'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const EagleSvg = ({ style }: { style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 258 268"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    aria-hidden="true"
  >
    <path d="M154.544 0L103.071 89.1542H206.018L154.544 0Z" fill="#457FFC" />
    <path d="M205.989 89.1084L154.516 178.263H257.462L205.989 89.1084Z" fill="#0141CB" />
    <path d="M257.263 178.148L154.317 178.148L205.79 267.302L257.263 178.148Z" fill="#0539A9" />
    <path d="M154.361 178.217L102.888 267.371H205.834L154.361 178.217Z" fill="#012778" />
    <path d="M154.376 178.148L51.4294 178.148L102.903 267.302L154.376 178.148Z" fill="#001C59" />
    <path d="M206.004 89.2227L103.057 89.2227L154.53 178.377L206.004 89.2227Z" fill="#0E5AFD" />
    <path d="M51.4731 178.217L-6.10352e-05 267.371H102.946L51.4731 178.217Z" fill="white" fillOpacity="0.5" />
  </svg>
)

export default function ImmobilienHeroAnimated() {
  return (
    <section
      style={{
        minHeight: '100svh',
        paddingTop: 72,
        background: 'linear-gradient(135deg, #012778 0%, #001C59 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Watermark eagle */}
      <EagleSvg
        style={{
          position: 'absolute',
          right: '-4%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 520,
          height: 'auto',
          opacity: 0.06,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      {/* Subtle geometric pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(69,127,252,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(14,90,253,0.1) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <div className="container-brand" style={{ paddingTop: 'clamp(40px, 6vw, 80px)', paddingBottom: 'clamp(48px, 7vw, 96px)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 780 }}>
          <motion.p
            className="eyebrow-gold"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 24 }}
          >
            Adler Invest Immobilien
          </motion.p>

          <motion.h1
            className="font-display"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65, ease: 'easeOut' as const }}
            style={{
              fontSize: 'clamp(26px, 6vw, 68px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'white',
              letterSpacing: '-0.02em',
              marginBottom: 28,
            }}
          >
            Deine erste Immobilie —{' '}
            <em style={{ fontStyle: 'italic', color: '#C8A84B' }}>bezahlt vom Mieter</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55 }}
            style={{
              fontSize: 19,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.7,
              marginBottom: 44,
              maxWidth: 600,
            }}
          >
            Investiere in Immobilien ohne Eigenkapital. Dein Mieter zahlt die Rate. Du baust
            Vermögen auf.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}
          >
            <Link
              href="/kontakt"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'white',
                color: '#0141CB',
                padding: '14px 32px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Kostenlose Erstberatung sichern
            </Link>
            <a
              href="#so-funktioniert-es"
              className="btn-ghost"
            >
              Der stille Investor
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              flexWrap: 'wrap',
            }}
          >
            <span style={{ color: '#C8A84B', fontSize: 16, letterSpacing: 1 }}>★★★★★</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              4.9/5 Google Bewertung
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 4px' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              150+ Investoren
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 4px' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              Frankfurt & Rhein-Main
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
