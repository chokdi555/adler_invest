'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type Token =
  | { type: 'text'; value: string }
  | { type: 'number'; end: number; decimals: number; thousands: boolean }

// Parse a stat label like "5.000 – 7.500 €" or "770.000+" into static text
// tokens and numeric tokens we can tween. German formatting: "." is a
// thousands separator, "," is the decimal point.
function parse(value: string): Token[] {
  const tokens: Token[] = []
  const regex = /\d[\d.,]*\d|\d/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = regex.exec(value)) !== null) {
    if (m.index > last) tokens.push({ type: 'text', value: value.slice(last, m.index) })
    const raw = m[0]
    let end: number
    let decimals = 0
    let thousands = false
    if (raw.includes(',')) {
      end = parseFloat(raw.replace(/\./g, '').replace(',', '.'))
      decimals = (raw.split(',')[1] ?? '').length
      thousands = raw.includes('.')
    } else if (raw.includes('.')) {
      end = parseInt(raw.replace(/\./g, ''), 10)
      thousands = true
    } else {
      end = parseInt(raw, 10)
    }
    tokens.push({ type: 'number', end, decimals, thousands })
    last = m.index + raw.length
  }
  if (last < value.length) tokens.push({ type: 'text', value: value.slice(last) })
  return tokens
}

function formatNumber(current: number, decimals: number, thousands: boolean): string {
  if (decimals > 0) {
    const fixed = current.toFixed(decimals)
    const [intPart, decPart] = fixed.split('.')
    const intFormatted = thousands ? Number(intPart).toLocaleString('de-DE') : intPart
    return decPart !== undefined ? `${intFormatted},${decPart}` : intFormatted
  }
  const rounded = Math.round(current)
  return thousands ? rounded.toLocaleString('de-DE') : String(rounded)
}

interface AnimatedStatProps {
  value: string
  className?: string
  style?: React.CSSProperties
  duration?: number
}

export default function AnimatedStat({
  value,
  className,
  style,
  duration = 1800,
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [progress, setProgress] = useState(0)

  const tokens = useMemo(() => parse(value), [value])
  const hasNumbers = tokens.some((t) => t.type === 'number')

  useEffect(() => {
    if (!inView || !hasNumbers) {
      if (!hasNumbers) setProgress(1)
      return
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(eased)
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, duration, hasNumbers])

  return (
    <div ref={ref} className={className} style={style} aria-label={value}>
      {tokens.map((t, i) =>
        t.type === 'text' ? (
          <span key={i} aria-hidden="true">{t.value}</span>
        ) : (
          <span key={i} aria-hidden="true">
            {formatNumber(t.end * progress, t.decimals, t.thousands)}
          </span>
        ),
      )}
    </div>
  )
}
