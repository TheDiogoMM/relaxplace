'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, stagger, viewportOpts } from '@/lib/animations'
import DiagramaCiclo from './DiagramaCiclo'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      style={{
        background: 'var(--surface)',
        padding: 'clamp(2.5rem, 5vw, 4rem) 1.5rem clamp(2rem, 4vw, 3rem)',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
        gap: 'clamp(2rem, 4vw, 3.5rem)',
        alignItems: 'center',
      }}>
        {/* Texto */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {/* Tag */}
          <motion.p variants={fadeUp} className="section-tag">
            Medicina Tradicional Chinesa
          </motion.p>

          {/* Título */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              lineHeight: 1.1,
              color: 'var(--ink)',
              margin: 0,
            }}
          >
            Descubra o Elemento{' '}
            <em style={{ color: 'var(--sage-d)', fontStyle: 'italic' }}>
              que Governa
            </em>{' '}
            a Sua Vida
          </motion.h1>

          {/* Parágrafo */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
              color: 'var(--ink-2)',
              lineHeight: 1.75,
              maxWidth: '480px',
              margin: 0,
            }}
          >
            Há mais de 3.000 anos, a Medicina Tradicional Chinesa revela que cada
            pessoa nasce sob a influência de um dos cinco elementos da natureza.
            Esse elemento molda sua personalidade, sua saúde e seu caminho de equilíbrio.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Link href="/formulario" style={btnPrimaryStyle}>
              Descubra Seu Elemento
              <span style={{ marginLeft: '8px' }}>→</span>
            </Link>
            <Link href="#como-funciona" style={btnGhostStyle}>
              Como funciona? ↓
            </Link>
          </motion.div>
        </motion.div>

        {/* Diagrama */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DiagramaCiclo size={380} interactive />
        </motion.div>
      </div>
    </section>
  )
}

const btnPrimaryStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: 'var(--font-ui)',
  fontWeight: 500,
  fontSize: '0.9375rem',
  letterSpacing: '0.02em',
  color: 'white',
  background: 'var(--sage)',
  padding: '13px 28px',
  borderRadius: '9999px',
  textDecoration: 'none',
  transition: 'background 0.2s',
  flexShrink: 0,
}

const btnGhostStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ui)',
  fontSize: '0.875rem',
  color: 'var(--ink-2)',
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  letterSpacing: '0.01em',
}
