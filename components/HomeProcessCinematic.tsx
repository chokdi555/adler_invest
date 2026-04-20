'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Search, GitCompare, FileCheck, Handshake } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Kostenlose Analyse',
    body:
      'Wir nehmen uns Zeit für dich. In einem persönlichen Gespräch verstehen wir deine Lebenssituation, deine Ziele und deinen Absicherungsbedarf — komplett unverbindlich.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Vergleich aller Anbieter',
    body:
      'Wir durchleuchten systematisch den gesamten deutschen Versicherungsmarkt. Mehr als 200 Anbieter. Hunderte Tarife. Wir filtern, was wirklich zu dir passt.',
    icon: GitCompare,
  },
  {
    num: '03',
    title: 'Persönliche Empfehlung',
    body:
      'Du erhältst eine klare, nachvollziehbare Empfehlung — mit Begründung, Vergleich und ehrlicher Einschätzung. Ohne Fachchinesisch. Ohne Verkaufsdruck.',
    icon: FileCheck,
  },
  {
    num: '04',
    title: 'Abschluss & Betreuung',
    body:
      'Wir begleiten dich beim Abschluss und bleiben auch danach dein fester Ansprechpartner — für Fragen, Anpassungen und im Schadenfall.',
    icon: Handshake,
  },
]

export default function HomeProcessCinematic() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      style={{
        background: '#0D0E12',
        color: 'white',
        padding: 'clamp(80px, 12vw, 160px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="process-heading"
    >
      {/* Subtle watermark eagle */}
      <svg
        viewBox="0 0 258 268"
        fill="none"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-8%',
          top: '8%',
          width: 640,
          height: 'auto',
          opacity: 0.035,
          pointerEvents: 'none',
        }}
      >
        <path d="M154.544 0L103.071 89.1542H206.018L154.544 0Z" fill="#457FFC" />
        <path d="M205.989 89.1084L154.516 178.263H257.462L205.989 89.1084Z" fill="#0141CB" />
        <path d="M257.263 178.148L154.317 178.148L205.79 267.302L257.263 178.148Z" fill="#0539A9" />
        <path d="M154.361 178.217L102.888 267.371H205.834L154.361 178.217Z" fill="#012778" />
        <path d="M154.376 178.148L51.4294 178.148L102.903 267.302L154.376 178.148Z" fill="#001C59" />
        <path d="M206.004 89.2227L103.057 89.2227L154.53 178.377L206.004 89.2227Z" fill="#0E5AFD" />
        <path d="M51.4731 178.217L-6.10352e-05 267.371H102.946L51.4731 178.217Z" fill="white" />
      </svg>

      <div className="container-brand" style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(64px, 10vw, 120px)' }}>
          <motion.p
            className="eyebrow"
            style={{ color: '#C8A84B', marginBottom: 16 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            UNSER VORGEHEN
          </motion.p>
          <motion.h2
            id="process-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(32px, 5.5vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'white',
              maxWidth: 860,
              margin: '0 auto',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            In vier Schritten zur{' '}
            <em className="italic" style={{ color: '#457FFC' }}>
              richtigen Versicherung
            </em>
          </motion.h2>
          <motion.p
            style={{
              marginTop: 24,
              fontSize: 18,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 560,
              margin: '24px auto 0',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.25, duration: 0.55 }}
          >
            Transparent. Unabhängig. Ohne Fachchinesisch — damit du genau weißt, was du bekommst.
          </motion.p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto' }}>
          {/* Vertical track */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 'clamp(28px, 6vw, 48px)',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'rgba(255,255,255,0.08)',
            }}
          />
          {/* Filled progress line */}
          <motion.div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 'clamp(28px, 6vw, 48px)',
              top: 0,
              width: 2,
              height: lineHeight,
              background: 'linear-gradient(180deg, #457FFC 0%, #0141CB 100%)',
              boxShadow: '0 0 24px rgba(69,127,252,0.4)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(48px, 7vw, 96px)' }}>
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'clamp(58px, 12vw, 96px) 1fr',
                    gap: 'clamp(20px, 4vw, 48px)',
                    position: 'relative',
                  }}
                >
                  {/* Node dot */}
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-120px' }}
                      transition={{ delay: 0.2, duration: 0.45, ease: [0.22, 1.2, 0.36, 1] }}
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        background: '#0D0E12',
                        border: '2px solid #457FFC',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 32px rgba(69,127,252,0.35)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Icon size={22} strokeWidth={1.5} color="#457FFC" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: 4, paddingBottom: 8 }}>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 'clamp(56px, 9vw, 104px)',
                        fontWeight: 500,
                        lineHeight: 0.9,
                        letterSpacing: '-0.04em',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.15) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: 16,
                        display: 'inline-block',
                      }}
                    >
                      {step.num}
                    </div>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: 'clamp(22px, 3vw, 34px)',
                        fontWeight: 700,
                        color: 'white',
                        lineHeight: 1.2,
                        marginBottom: 14,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: 'rgba(255,255,255,0.65)',
                        maxWidth: 600,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
