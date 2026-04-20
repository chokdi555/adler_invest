'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Shield, ArrowRight } from 'lucide-react'

const EagleSvg = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 258 268"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path d="M154.544 0L103.071 89.1542H206.018L154.544 0Z" fill="#457FFC" />
    <path d="M205.989 89.1084L154.516 178.263H257.462L205.989 89.1084Z" fill="#0141CB" />
    <path d="M257.263 178.148L154.317 178.148L205.79 267.302L257.263 178.148Z" fill="#0539A9" />
    <path d="M154.361 178.217L102.888 267.371H205.834L154.361 178.217Z" fill="#012778" />
    <path d="M154.376 178.148L51.4294 178.148L102.903 267.302L154.376 178.148Z" fill="#001C59" />
    <path d="M206.004 89.2227L103.057 89.2227L154.53 178.377L206.004 89.2227Z" fill="#0E5AFD" />
    <path d="M51.4731 178.217L-6.10352e-05 267.371H102.946L51.4731 178.217Z" fill="black" />
  </svg>
)

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' as const },
  }),
}

export default function HomeHeroAnimated() {
  const headlineWords = ['Eine', 'bessere', 'Lösung', 'gibt', 'es', 'nicht.']

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100svh', paddingTop: 72, background: '#ffffff' }}
    >
      {/* Watermark eagle */}
      <EagleSvg
        style={{
          position: 'absolute',
          right: '-5%',
          top: '5%',
          width: 540,
          height: 'auto',
          opacity: 0.04,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      <div className="container-brand" style={{ paddingTop: 'clamp(40px, 6vw, 80px)', paddingBottom: 'clamp(40px, 6vw, 80px)' }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] items-center"
          style={{
            gap: 'clamp(32px, 5vw, 64px)',
            minHeight: 'calc(100svh - 72px - 160px)',
          }}
        >
          {/* LEFT — text column */}
          <div>
            <motion.p
              className="eyebrow"
              style={{ marginBottom: 20 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frankfurt am Main · Rhein-Main
            </motion.p>

            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 7vw, 72px)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#012778',
                marginBottom: 28,
                letterSpacing: '-0.02em',
              }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: '#6B7494',
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 40,
              }}
            >
              Als unabhängiger Versicherungsmakler vergleichen wir alle Anbieter und finden
              den Schutz, der wirklich zu dir passt. Persönlich. Unabhängig. Transparent.
            </motion.p>

            {/* Division CTA cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}
            >
              {/* Versicherungen card — primary */}
              <Link
                href="/versicherungen"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  background: '#0141CB',
                  color: 'white',
                  padding: '20px 28px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  flex: '1 1 220px',
                  minWidth: 0,
                  transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0E5AFD'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(1,65,203,0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0141CB'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Shield size={24} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.75, marginBottom: 2 }}>
                    Adler Invest
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>Versicherungen</div>
                </div>
                <ArrowRight size={18} style={{ marginLeft: 'auto', opacity: 0.8, flexShrink: 0 }} />
              </Link>

              {/* Immobilien card — secondary */}
              <Link
                href="/immobilien"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  background: 'white',
                  color: '#0141CB',
                  padding: '20px 28px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  border: '1.5px solid #0141CB',
                  flex: '1 1 220px',
                  minWidth: 0,
                  transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#EEF2FA'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(1,65,203,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Building2 size={24} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 2 }}>
                    Adler Invest
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>Immobilien</div>
                </div>
                <ArrowRight size={18} style={{ marginLeft: 'auto', opacity: 0.6, flexShrink: 0 }} />
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
              }}
            >
              <span style={{ color: '#C8A84B', fontSize: 16, letterSpacing: 1 }}>★★★★★</span>
              <span style={{ fontSize: 13, color: '#6B7494', fontWeight: 500 }}>
                Google Bewertung
              </span>
              <span style={{ color: '#DDE3EF', margin: '0 4px' }}>·</span>
              <span style={{ fontSize: 13, color: '#6B7494', fontWeight: 500 }}>
                200+ zufriedene Kunden
              </span>
            </motion.div>
          </div>

          {/* RIGHT — decorative eagle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' as const }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            className="max-lg:hidden"
          >
            {/* Glow behind eagle */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(1,65,203,0.08) 0%, transparent 70%)',
                borderRadius: '50%',
              }}
            />
            <EagleSvg style={{ width: '80%', maxWidth: 380, height: 'auto', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 16px 48px rgba(1,65,203,0.18))' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
