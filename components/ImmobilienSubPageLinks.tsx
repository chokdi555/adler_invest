'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const subPages = [
  { href: '/immobilien/kapitalanlage', title: 'Immobilie als Kapitalanlage', description: 'Renditeobjekte ohne Eigenkapital' },
  { href: '/immobilien/frankfurt', title: 'Immobilien in Frankfurt', description: 'Haus & Wohnung kaufen in Frankfurt' },
  { href: '/immobilien/rhein-main', title: 'Immobilien im Rhein-Main', description: 'Haus & Wohnung im Rhein-Main-Gebiet' },
  { href: '/immobilien/immobilien-unter-dem-marktwert', title: 'Immobilien unter dem Marktwert', description: 'Günstige Immobilien finden' },
  { href: '/immobilien/steueroptimierung', title: 'Steueroptimierung', description: 'Steuerliche Vorteile nutzen' },
]

export default function ImmobilienSubPageLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
      {subPages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '20px 22px',
            background: '#F4F6FA',
            borderRadius: 12,
            border: '1px solid #DDE3EF',
            textDecoration: 'none',
            transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
            color: 'inherit',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#EEF2FA'
            e.currentTarget.style.borderColor = '#0141CB'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#F4F6FA'
            e.currentTarget.style.borderColor = '#DDE3EF'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#012778', marginBottom: 3 }}>
              {page.title}
            </div>
            <div style={{ fontSize: 12, color: '#6B7494' }}>{page.description}</div>
          </div>
          <ArrowRight size={16} color="#0141CB" strokeWidth={2} style={{ flexShrink: 0 }} />
        </Link>
      ))}
    </div>
  )
}
