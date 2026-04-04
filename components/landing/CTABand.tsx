'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOpts } from '@/lib/animations'

export default function CTABand() {
  return (
    <section
      style={{
        background: 'var(--sage-xl)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(1.75rem, 3vw, 2.5rem) 1.5rem',
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Ornamento */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div style={{ height: '1px', width: '36px', background: 'var(--sage)' }} />
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'var(--sage)',
            opacity: 0.6,
          }} />
          <div style={{ height: '1px', width: '36px', background: 'var(--sage)' }} />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Pronto Para Se{' '}
          <em style={{ color: 'var(--sage-d)' }}>Conhecer Melhor?</em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '1.0625rem',
            color: 'var(--ink-2)',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          "A jornada de mil milhas começa com um único passo."
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            href="/formulario"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-ui)',
              fontWeight: 500,
              fontSize: '1rem',
              letterSpacing: '0.025em',
              color: 'white',
              background: 'var(--sage)',
              padding: '15px 36px',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(107, 143, 113, 0.3)',
            }}
          >
            Descobrir Meu Elemento →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
