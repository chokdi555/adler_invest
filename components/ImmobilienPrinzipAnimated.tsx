'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Landmark, Key, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Landmark,
    number: '01',
    title: 'Finanzierung',
    description:
      'Du nimmst eine Immobilienfinanzierung auf. Kein oder minimales Eigenkapital nötig.',
  },
  {
    icon: Key,
    number: '02',
    title: 'Vermietung',
    description:
      'Ein Mieter zieht ein und zahlt monatliche Miete — direkt auf dein Konto.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Vermögensaufbau',
    description:
      'Die Miete deckt die Rate. Dein Eigenkapital wächst monatlich.',
  },
]

export default function ImmobilienPrinzipAnimated() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref}>
      {/* Steps */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3"
        style={{
          gap: 0,
          position: 'relative',
          marginBottom: 56,
        }}
      >
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.55, ease: 'easeOut' as const }}
              className={`${i < steps.length - 1 ? 'border-b border-b-border lg:border-b-0 lg:border-r lg:border-r-border' : ''}`}
              style={{
                padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 36px)',
                position: 'relative',
              }}
            >
              {/* Connector arrow — desktop only */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    right: -14,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 28,
                    height: 28,
                    background: '#0141CB',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                  className="hidden lg:flex"
                >
                  →
                </div>
              )}

              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: '#EEF2FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <Icon size={26} strokeWidth={1.5} color="#0141CB" />
              </div>

              <div
                className="font-mono"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: '#C8A84B',
                  letterSpacing: '0.12em',
                  marginBottom: 8,
                }}
              >
                SCHRITT {step.number}
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#012778',
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>

              <p style={{ fontSize: 15, color: '#6B7494', lineHeight: 1.7 }}>
                {step.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Financial example */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.55, duration: 0.55, ease: 'easeOut' as const }}
        className="px-5 py-8 sm:px-12 sm:py-10"
        style={{
          background: 'white',
          border: '2px solid #0141CB',
          borderRadius: 16,
          maxWidth: 740,
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <span className="gold-divider" />
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#012778',
              fontFamily: 'var(--font-display)',
            }}
          >
            Typisches Beispiel — Objekt 200.000 €
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-4">
          {[
            { label: 'Monatliche Rate', value: '~800 €' },
            { label: 'Monatliche Miete', value: '~780 €' },
            { label: 'Ihr Eigenaufwand', value: '~20–50 €/Monat', highlight: true },
            { label: 'Wert nach 25 Jahren', value: '280.000–350.000 €', highlight: true },
          ].map((row) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 14,
                borderBottom: '1px solid #DDE3EF',
              }}
            >
              <span style={{ fontSize: 14, color: '#6B7494', fontWeight: 500 }}>{row.label}</span>
              <span
                className="font-mono"
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: row.highlight ? '#0141CB' : '#2D3142',
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 12, color: '#6B7494', marginTop: 20, lineHeight: 1.6 }}>
          * Beispielrechnung. Tatsächliche Werte hängen von Zinsniveau, Standort und Mietmarkt ab.
          Individuelle Beratung erforderlich.
        </p>
      </motion.div>
    </div>
  )
}
