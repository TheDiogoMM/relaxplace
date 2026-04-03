'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, scaleIn, viewportOpts } from '@/lib/animations'
import DiagramaCiclo from './DiagramaCiclo'

export default function CicloSection() {
  return (
    <section
      style={{
        background: 'var(--bg)',
        padding: 'clamp(2.5rem, 4vw, 3.5rem) 1.5rem',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(2.5rem, 5vw, 4rem)',
        textAlign: 'center',
      }}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <p className="section-tag">O Ciclo Natural</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.2,
          }}>
            Cada Elemento{' '}
            <em style={{ color: 'var(--sage-d)' }}>Nutre o Próximo</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--ink-2)',
            maxWidth: '560px',
            lineHeight: 1.75,
            margin: 0,
          }}>
            Na medicina chinesa, cada pessoa é representada por um elemento que interage
            com os demais, influenciando seus níveis de energia. O elemento anterior ao
            seu o fortalece. O elemento seguinte consome sua energia.
          </p>
        </motion.div>

        {/* Diagrama maior */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
        >
          <DiagramaCiclo size={440} interactive />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
        >
          <Link
            href="/formulario"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-ui)',
              fontWeight: 500,
              fontSize: '0.9375rem',
              letterSpacing: '0.02em',
              color: 'white',
              background: 'var(--sage)',
              padding: '13px 32px',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
          >
            Descubra Seu Elemento →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
