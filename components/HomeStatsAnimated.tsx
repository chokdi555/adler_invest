'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: string
  numericEnd: number
  prefix: string
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: '200+', numericEnd: 200, prefix: '', suffix: '+', label: 'Zufriedene Kunden' },
  { value: '10', numericEnd: 10, prefix: '', suffix: '', label: 'Jahre Erfahrung' },
  { value: '50+', numericEnd: 50, prefix: '', suffix: '+', label: 'Partneranbieter' },
  { value: '€50M+', numericEnd: 50, prefix: '€', suffix: 'M+', label: 'Betreutes Vermögen' },
]

function CountUp({ end, prefix, suffix, started }: { end: number; prefix: string; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let frame: number
    const duration = 1800
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started, end])

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function HomeStatsAnimated() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{ background: '#012778', color: 'white' }}
      aria-label="Kennzahlen"
    >
      {/* Full-bleed — no container padding intentionally */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center border-b border-b-white/10 md:border-b-0 md:border-r md:border-r-white/10 last:border-b-0 last:border-r-0"
            style={{
              padding: 'clamp(36px, 5vw, 72px) clamp(12px, 3vw, 48px)',
              gap: 8,
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 'clamp(32px, 8vw, 80px)',
                fontWeight: 500,
                lineHeight: 1,
                color: 'white',
                letterSpacing: '-0.02em',
              }}
            >
              <CountUp end={stat.numericEnd} prefix={stat.prefix} suffix={stat.suffix} started={inView} />
            </div>
            <div
              className="stats-label"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.65)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginTop: 4,
                textAlign: 'center',
              }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
