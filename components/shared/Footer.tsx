import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 1.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        textAlign: 'center',
      }}>
        {/* Logos */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}>
          <Logo height={56} />
          <div style={{ width: '1px', height: '52px', background: 'var(--border)' }} />
          <Image
            src="/logodesginholistico.png"
            alt="Design Holístico Interiores"
            width={220}
            height={56}
            style={{ objectFit: 'contain', height: '56px', width: 'auto' }}
          />
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '0.9375rem',
          color: 'var(--ink-3)',
          letterSpacing: '0.02em',
        }}>
          Equilíbrio. Harmonia. Bem-estar.
        </p>

        {/* Links */}
        <nav style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {[
            { href: '/#inicio',        label: 'Início'        },
            { href: '/#como-funciona', label: 'Como Funciona' },
          ].map((link, i) => (
            <span key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {i > 0 && <span style={{ color: 'var(--border-2)', fontSize: '0.75rem' }}>·</span>}
              <Link href={link.href} style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.8125rem',
                color: 'var(--ink-3)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}>
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        {/* Contato */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a
            href="https://wa.me/5521986458880"
            target="_blank"
            rel="noopener noreferrer"
            style={contactLinkStyle}
            aria-label="WhatsApp do Relax Place"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <a
            href="mailto:suporte.decorandocomafran@gmail.com"
            style={contactLinkStyle}
            aria-label="E-mail do Relax Place"
          >
            <EmailIcon />
            E-mail
          </a>
          <a
            href="https://www.instagram.com/francoiselemosnova"
            target="_blank"
            rel="noopener noreferrer"
            style={contactLinkStyle}
            aria-label="Instagram do Relax Place"
          >
            <InstagramIcon />
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.75rem',
          color: 'var(--ink-3)',
          marginTop: '0.5rem',
        }}>
          © 2024 Relax Place. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

const contactLinkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: 'var(--font-ui)',
  fontSize: '0.8125rem',
  color: 'var(--ink-2)',
  textDecoration: 'none',
  letterSpacing: '0.01em',
  transition: 'color 0.2s',
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}
