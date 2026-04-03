'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from './Logo'

const NAV_LINKS = [
  { href: '/#inicio',        label: 'Início'        },
  { href: '/#como-funciona', label: 'Como Funciona' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        role="navigation"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: scrolled || menuOpen
            ? 'rgba(255,255,255,0.96)'
            : 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid var(--border)`,
          transition: 'background 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.25rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" onClick={closeMenu} aria-label="Página inicial Relax Place">
            <Logo height={38} />
          </Link>

          {/* Links desktop */}
          <nav
            aria-label="Navegação principal"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} style={navLinkStyle}>
                {label}
              </Link>
            ))}

            <Link href="/formulario" style={ctaStyle}>
              Descubra Seu Elemento →
            </Link>
          </nav>

          {/* Botão hambúrguer (mobile) */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            className="hamburger-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--ink)',
            }}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div
            style={{
              background: 'rgba(255,255,255,0.98)',
              borderTop: '1px solid var(--border)',
              padding: '1rem 1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1rem',
                  color: 'var(--ink-2)',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'block',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/formulario"
              onClick={closeMenu}
              style={{
                ...ctaStyle,
                marginTop: '1rem',
                textAlign: 'center',
                display: 'block',
              }}
            >
              Descubra Seu Elemento →
            </Link>
          </div>
        )}
      </header>

      {/* CSS responsivo via style tag */}
      <style>{`
        @media (max-width: 767px) {
          .desktop-nav  { display: none !important; }
          .hamburger-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </>
  )
}

const navLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ui)',
  fontSize: '0.875rem',
  fontWeight: 400,
  color: 'var(--ink-2)',
  textDecoration: 'none',
  letterSpacing: '0.01em',
}

const ctaStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ui)',
  fontSize: '0.8125rem',
  fontWeight: 500,
  letterSpacing: '0.03em',
  color: 'white',
  background: 'var(--sage)',
  padding: '9px 20px',
  borderRadius: '9999px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  )
}
