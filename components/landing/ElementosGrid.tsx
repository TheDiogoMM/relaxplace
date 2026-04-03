'use client'

import { motion } from 'framer-motion'
import { staggerSlow, cardReveal, fadeUp, viewportOpts } from '@/lib/animations'

const ELEMENTOS = [
  {
    id: 'madeira',
    nome: 'Madeira',
    descricao: 'Crescimento, Visão, Vitalidade',
    cor: 'var(--wood-c)',
    bg: 'var(--wood-bg)',
    icon: IconMadeira,
  },
  {
    id: 'fogo',
    nome: 'Fogo',
    descricao: 'Paixão, Alegria, Expressão',
    cor: 'var(--fire-c)',
    bg: 'var(--fire-bg)',
    icon: IconFogo,
  },
  {
    id: 'terra',
    nome: 'Terra',
    descricao: 'Estabilidade, Nutrição, Harmonia',
    cor: 'var(--earth-c)',
    bg: 'var(--earth-bg)',
    icon: IconTerra,
  },
  {
    id: 'metal',
    nome: 'Metal',
    descricao: 'Clareza, Precisão, Essência',
    cor: 'var(--metal-c)',
    bg: 'var(--metal-bg)',
    icon: IconMetal,
  },
  {
    id: 'agua',
    nome: 'Água',
    descricao: 'Fluxo, Sabedoria, Profundidade',
    cor: 'var(--water-c)',
    bg: 'var(--water-bg)',
    icon: IconAgua,
  },
]

export default function ElementosGrid() {
  return (
    <section
      id="elementos"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(2.5rem, 4vw, 3.5rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <p className="section-tag">O Método</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.2,
          }}>
            A Sabedoria Milenar dos{' '}
            <em style={{ color: 'var(--sage-d)' }}>Cinco Elementos</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--ink-2)',
            maxWidth: '560px',
            lineHeight: 1.75,
            margin: 0,
          }}>
            O universo, segundo a MTC, é compreendido por cinco forças primordiais.
            Cada elemento representa um padrão de energia, uma forma de ser — e o seu
            é determinado pelo seu ano de nascimento no calendário lunissolar chinês.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '1rem',
          }}
        >
          {ELEMENTOS.map(({ id, nome, descricao, cor, bg, icon: Icon }) => (
            <motion.div
              key={id}
              variants={cardReveal}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderTop: `2px solid ${cor}`,
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              whileHover={{
                y: -3,
                boxShadow: `0 8px 24px ${cor}20`,
                transition: { duration: 0.2 },
              }}
            >
              {/* Ícone */}
              <div style={{
                width: '44px',
                height: '44px',
                background: bg,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon cor={cor} />
              </div>

              {/* Nome */}
              <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.625rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: cor,
                margin: 0,
              }}>
                {nome}
              </p>

              {/* Descrição */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--ink-2)',
                lineHeight: 1.55,
                margin: 0,
              }}>
                {descricao}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Ícones SVG inline minimalistas
function IconMadeira({ cor }: { cor: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21V8M12 8C12 8 8 11 6 7M12 8C12 8 16 11 18 7" stroke={cor} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 8C12 5 10 3 12 2C14 3 12 5 12 8Z" fill={cor} fillOpacity="0.2" stroke={cor} strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}

function IconFogo({ cor }: { cor: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22C12 22 5 17 5 11C5 7 8 4 12 4C12 4 10 7 12 9C14 7 14 4 16 4C18 6 19 9 19 11C19 17 12 22 12 22Z" fill={cor} fillOpacity="0.15" stroke={cor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18C12 18 9 15 9 12.5C9 11 10.5 10 12 11C13.5 10 15 11 15 12.5C15 15 12 18 12 18Z" fill={cor} fillOpacity="0.4"/>
    </svg>
  )
}

function IconTerra({ cor }: { cor: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="14" rx="8" ry="5" fill={cor} fillOpacity="0.15" stroke={cor} strokeWidth="1.5"/>
      <ellipse cx="12" cy="14" rx="4" ry="2.5" fill={cor} fillOpacity="0.3"/>
      <line x1="12" y1="9" x2="12" y2="5" stroke={cor} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="4" r="1.5" fill={cor} fillOpacity="0.5"/>
    </svg>
  )
}

function IconMetal({ cor }: { cor: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polygon points="12,3 19,9 16,20 8,20 5,9" fill={cor} fillOpacity="0.12" stroke={cor} strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="12,7 16,10 14.5,17 9.5,17 8,10" fill={cor} fillOpacity="0.25"/>
    </svg>
  )
}

function IconAgua({ cor }: { cor: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3C12 3 5 10 5 15C5 18.866 8.134 22 12 22C15.866 22 19 18.866 19 15C19 10 12 3 12 3Z" fill={cor} fillOpacity="0.15" stroke={cor} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 16C8.5 18 10 19.5 12 20" stroke={cor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  )
}
