'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ phone }: { phone: string }) {
  return (
    <a
      href={`https://wa.me/${phone.replace(/\D/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '14px 24px',
        background: '#25D366',
        color: 'white',
        borderRadius: '8px',
        fontFamily: 'var(--font-dm-sans)',
        fontWeight: 600,
        fontSize: '15px',
        letterSpacing: '0.04em',
        textDecoration: 'none',
        transition: 'background 0.2s, transform 0.15s',
        marginBottom: '32px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#22c55e'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#25D366'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <MessageCircle size={20} />
      WhatsApp schreiben
    </a>
  )
}
