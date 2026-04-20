'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'

interface HoverLinkProps {
  href: string
  children: React.ReactNode
  baseStyle?: CSSProperties
  hoverStyle?: CSSProperties
  className?: string
}

export default function HoverLink({ href, children, baseStyle, hoverStyle, className }: HoverLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      style={baseStyle}
      onMouseEnter={(e) => {
        if (hoverStyle) {
          Object.assign(e.currentTarget.style, hoverStyle)
        }
      }}
      onMouseLeave={(e) => {
        if (baseStyle && hoverStyle) {
          const style = e.currentTarget.style as unknown as Record<string, string>
          for (const key of Object.keys(hoverStyle)) {
            const k = key as keyof CSSProperties
            style[key] = (baseStyle[k] ?? '') as string
          }
        }
      }}
    >
      {children}
    </Link>
  )
}
