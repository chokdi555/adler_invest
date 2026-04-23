'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  {
    label: 'Versicherungen',
    href: '/versicherungen',
    children: [
      { label: 'Berufsunfähigkeit', href: '/versicherungen/berufsunfaehigkeit' },
      { label: 'Krankenversicherung', href: '/versicherungen/krankenversicherung' },
      { label: 'Haftpflicht', href: '/versicherungen/haftpflicht' },
      { label: 'Altersvorsorgeversicherung', href: '/versicherungen/altersvorsorge' },
      { label: 'Hausrat', href: '/versicherungen/hausrat' },
      { label: 'KFZ', href: '/versicherungen/kfz' },
      { label: 'Rechtsschutz', href: '/versicherungen/rechtsschutz' },
      { label: 'Reiseversicherung', href: '/versicherungen/reiseversicherung' },
    ],
  },
  {
    label: 'Immobilien',
    href: '/immobilien',
    children: [
      { label: 'Immobilie als Kapitalanlage', href: '/immobilien/kapitalanlage' },
      { label: 'Immobilien in Frankfurt', href: '/immobilien/frankfurt' },
      { label: 'Immobilien im Rhein-Main', href: '/immobilien/rhein-main' },
      { label: 'Immobilien unter dem Marktwert', href: '/immobilien/immobilien-unter-dem-marktwert' },
      { label: 'Steueroptimierung', href: '/immobilien/steueroptimierung' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Über uns', href: '/ueber-uns' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isDarkHeroPage =
    pathname !== '/' &&
    !pathname.startsWith('/blog') &&
    pathname !== '/ueber-uns' &&
    pathname !== '/kontakt'

  const whiteNav = isDarkHeroPage && !scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className="site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '0.5px solid #DDE3EF' : '0.5px solid transparent',
        boxShadow: scrolled
          ? '0 1px 3px rgba(1,65,203,0.06), 0 1px 2px rgba(0,0,0,0.04)'
          : 'none',
      }}
    >
      <div className="container-brand">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
            <svg width="32" height="32" viewBox="0 0 258 268" fill="none" aria-hidden="true" className="flex-shrink-0">
              <path d="M154.544 0L103.071 89.1542H206.018L154.544 0Z" fill="#457FFC"/>
              <path d="M205.989 89.1084L154.516 178.263H257.462L205.989 89.1084Z" fill="#0141CB"/>
              <path d="M257.263 178.148L154.317 178.148L205.79 267.302L257.263 178.148Z" fill="#0539A9"/>
              <path d="M154.361 178.217L102.888 267.371H205.834L154.361 178.217Z" fill="#012778"/>
              <path d="M154.376 178.148L51.4294 178.148L102.903 267.302L154.376 178.148Z" fill="#001C59"/>
              <path d="M206.004 89.2227L103.057 89.2227L154.53 178.377L206.004 89.2227Z" fill="#0E5AFD"/>
              <path d="M51.4731 178.217L-6.10352e-05 267.371H102.946L51.4731 178.217Z" fill="black"/>
            </svg>
            <div className="flex flex-col leading-tight min-w-0">
              <span
                className="logo-text font-semibold tracking-widest text-xs sm:text-sm uppercase transition-colors duration-300 truncate"
                style={{ color: whiteNav ? 'white' : '#0D0E12', fontFamily: 'var(--font-dm-sans)' }}
              >
                ADLER INVEST
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 nav-link transition-colors duration-300${pathname.startsWith(item.href + '/') || pathname === item.href ? ' active' : ''}`}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', color: whiteNav ? 'rgba(255,255,255,0.9)' : undefined }}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200"
                      style={{ transform: openDropdown === item.href ? 'rotate(180deg)' : 'rotate(0)' }}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-3"
                        style={{ minWidth: 220 }}
                      >
                        <div
                          className="rounded-xl border py-2"
                          style={{
                            background: 'white',
                            borderColor: '#DDE3EF',
                            boxShadow: '0 8px 32px rgba(1,65,203,0.14), 0 4px 8px rgba(0,0,0,0.04)',
                          }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm transition-colors"
                              style={{
                                color: pathname === child.href ? '#0141CB' : '#2D3142',
                                fontWeight: pathname === child.href ? 600 : 400,
                                fontFamily: 'var(--font-dm-sans)',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#EEF2FA'
                                e.currentTarget.style.color = '#0141CB'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent'
                                e.currentTarget.style.color = pathname === child.href ? '#0141CB' : '#2D3142'
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link transition-colors duration-300${pathname === item.href || pathname.startsWith(item.href + '/') ? ' active' : ''}`}
                  style={whiteNav ? { color: 'rgba(255,255,255,0.9)' } : undefined}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/kontakt" className={whiteNav ? 'btn-ghost' : 'btn-primary'} style={{ padding: '10px 22px', fontSize: 14 }}>
              Kostenlose Beratung
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger-btn lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300"
            style={{ color: whiteNav ? 'rgba(255,255,255,0.9)' : '#2D3142' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'white', borderTop: '1px solid #DDE3EF' }}
          >
            <div style={{ maxHeight: 'calc(100svh - 72px)', overflowY: 'auto', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
            <div className="container-brand py-6 flex flex-col gap-1">
              {navItems.map((item) => {
                const isParentActive = pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-3 border-b"
                    style={{
                      borderColor: '#DDE3EF',
                      color: isParentActive ? '#0141CB' : '#2D3142',
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: isParentActive ? 700 : 600,
                      fontSize: 16,
                      textDecoration: 'none',
                      borderLeftWidth: isParentActive ? 3 : 0,
                      borderLeftStyle: 'solid',
                      borderLeftColor: '#0141CB',
                      paddingLeft: isParentActive ? 10 : 0,
                    }}
                  >
                    {item.label}
                    {isParentActive && (
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0141CB', flexShrink: 0 }} />
                    )}
                  </Link>
                  {item.children && (
                    <div className="pl-4 flex flex-col gap-0.5 pt-1 pb-2">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href
                        return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 block"
                          style={{
                            color: isChildActive ? '#0141CB' : '#6B7494',
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: 14,
                            fontWeight: isChildActive ? 600 : 400,
                            textDecoration: 'none',
                            borderLeft: isChildActive ? '2px solid #457FFC' : '2px solid transparent',
                            paddingLeft: 8,
                          }}
                        >
                          {child.label}
                        </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
                )
              })}
              <div className="pt-4">
                <Link
                  href="/kontakt"
                  className="btn-primary w-full justify-center"
                  style={pathname === '/kontakt' ? { background: '#012778', boxShadow: '0 4px 16px rgba(1,65,203,0.30)' } : undefined}
                >
                  Kostenlose Beratung sichern
                </Link>
              </div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
