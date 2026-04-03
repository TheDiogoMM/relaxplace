'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOpts } from '@/lib/animations'
import { NOMES_ELEMENTO, CICLO, CORES_ELEMENTO, type Elemento } from '@/lib/elementos'

interface Props { elemento: Elemento }

export default function DiagramaLinear({ elemento }: Props) {
  const { anterior, proximo } = CICLO[elemento]
  const coresAtual    = CORES_ELEMENTO[elemento]
  const coresAnterior = CORES_ELEMENTO[anterior]
  const coresProximo  = CORES_ELEMENTO[proximo]

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      style={{
        background:    'var(--bg-2)',
        borderTop:    '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding:      '1.75rem 1.25rem',
      }}
    >
      <div style={{
        maxWidth: '600px',
        margin:   '0 auto',
        display:  'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(0.75rem, 3vw, 2rem)',
      }}>
        {/* Anterior */}
        <Nó
          elemento={anterior}
          nome={NOMES_ELEMENTO[anterior]}
          cor={coresAnterior.c}
          bg={coresAnterior.bg}
          label="Nutre você"
          dim
        />

        {/* Seta esquerda */}
        <Seta />

        {/* Atual */}
        <Nó
          elemento={elemento}
          nome={NOMES_ELEMENTO[elemento]}
          cor={coresAtual.c}
          bg={coresAtual.bg}
          label="Seu elemento"
          principal
        />

        {/* Seta direita */}
        <Seta />

        {/* Próximo */}
        <Nó
          elemento={proximo}
          nome={NOMES_ELEMENTO[proximo]}
          cor={coresProximo.c}
          bg={coresProximo.bg}
          label="Consome energia"
          dim
        />
      </div>
    </motion.section>
  )
}

function Nó({ nome, cor, bg, label, principal, dim }: {
  elemento:  Elemento
  nome:      string
  cor:       string
  bg:        string
  label:     string
  principal?: boolean
  dim?:       boolean
}) {
  const size = principal ? 72 : 48
  return (
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      alignItems:    'center',
      gap:           '6px',
      opacity:       dim ? 0.55 : 1,
      transition:    'opacity 0.2s',
      flexShrink:    0,
    }}>
      <div style={{
        width:        size,
        height:       size,
        borderRadius: '50%',
        background:   bg,
        border:       `${principal ? 2 : 1.5}px solid ${cor}`,
        display:      'flex',
        alignItems:   'center',
        justifyContent: 'center',
        boxShadow:    principal ? `0 4px 16px ${cor}30` : 'none',
      }}>
        <span style={{
          fontFamily:    'var(--font-ui)',
          fontSize:      principal ? '8px' : '7px',
          fontWeight:    600,
          letterSpacing: '0.1em',
          color:         cor,
          textTransform: 'uppercase',
          textAlign:     'center',
          padding:       '0 4px',
        }}>
          {nome}
        </span>
      </div>

      <span style={{
        fontFamily:    'var(--font-ui)',
        fontSize:      '0.625rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color:         'var(--ink-3)',
        textAlign:     'center',
        maxWidth:      '80px',
        lineHeight:    1.3,
      }}>
        {label}
      </span>
    </div>
  )
}

function Seta() {
  return (
    <div style={{
      display:    'flex',
      alignItems: 'center',
      color:      'var(--ink-3)',
      opacity:    0.35,
      fontSize:   '1.25rem',
      flexShrink: 0,
    }}>
      →
    </div>
  )
}
