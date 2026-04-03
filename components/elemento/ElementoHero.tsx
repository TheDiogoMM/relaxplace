'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { NOMES_ELEMENTO, CORES_ELEMENTO, type Elemento } from '@/lib/elementos'
import type { ConteudoElemento } from '@/lib/elementos-conteudo'

interface Props {
  elemento:     Elemento
  conteudo:     ConteudoElemento
  nomeUsuario?: string
}

export default function ElementoHero({ elemento, conteudo, nomeUsuario }: Props) {
  const nome  = NOMES_ELEMENTO[elemento]
  const cores = CORES_ELEMENTO[elemento]

  return (
    <section style={{
      background: 'var(--surface)',
      padding: 'clamp(2.5rem, 6vw, 4rem) 1.25rem clamp(2rem, 4vw, 3rem)',
      textAlign: 'center',
    }}>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {/* Saudação personalizada */}
        {nomeUsuario && (
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.875rem',
              color: 'var(--ink-3)',
              letterSpacing: '0.04em',
            }}
          >
            Olá, <strong style={{ color: 'var(--ink-2)', fontWeight: 500 }}>{nomeUsuario}</strong>. Seu elemento é:
          </motion.p>
        )}

        {!nomeUsuario && (
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
            }}
          >
            Seu elemento é
          </motion.p>
        )}

        {/* Nome do elemento */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(3.5rem, 10vw, 5.5rem)',
            lineHeight: 1,
            color: cores.c,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          {nome}
        </motion.h1>

        {/* Badges */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[conteudo.estacao, conteudo.orgaos].map(tag => (
            <span key={tag} style={{
              background: cores.bg,
              color: cores.d,
              fontFamily: 'var(--font-ui)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: '9999px',
              border: `1px solid ${cores.c}30`,
            }}>
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Essência */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--ink-2)',
            lineHeight: 1.75,
            maxWidth: '480px',
            margin: 0,
            borderLeft: `3px solid ${cores.c}`,
            paddingLeft: '1.25rem',
            textAlign: 'left',
          }}
        >
          {conteudo.essencia}
        </motion.p>

        {/* Emoção */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '0.25rem',
          }}
        >
          <div style={{ height: '1px', width: '28px', background: cores.c, opacity: 0.4 }} />
          <span style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: cores.d,
          }}>
            {conteudo.emocao}
          </span>
          <div style={{ height: '1px', width: '28px', background: cores.c, opacity: 0.4 }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
