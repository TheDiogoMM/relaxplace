'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, stagger, cardReveal, viewportOpts } from '@/lib/animations'

const PASSOS = [
  {
    numero: '01',
    titulo: 'Informe Seus Dados',
    descricao:
      'Preencha nome e data de nascimento. O calendário chinês lunissolar começa em fevereiro — o sistema calcula com precisão.',
  },
  {
    numero: '02',
    titulo: 'Receba Seu Elemento',
    descricao:
      'Em instantes descubra qual dos cinco elementos rege sua natureza, com toda a profundidade de uma tradição milenar.',
  },
  {
    numero: '03',
    titulo: 'Explore Seu Caminho',
    descricao:
      'Conheça as características do seu elemento, práticas holísticas alinhadas à sua natureza e orientações para viver em equilíbrio.',
  },
]

export default function ComoFuncionaSection() {
  return (
    <section
      id="como-funciona"
      style={{
        background: 'var(--surface)',
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
          <p className="section-tag">O Processo</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.2,
          }}>
            Três Passos Para o Seu{' '}
            <em style={{ color: 'var(--sage-d)' }}>Autoconhecimento</em>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {PASSOS.map(({ numero, titulo, descricao }) => (
            <motion.div
              key={numero}
              variants={cardReveal}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Número */}
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: 'var(--sage-l)',
                lineHeight: 1,
              }}>
                {numero}
              </span>

              {/* Título */}
              <h3 style={{
                fontFamily: 'var(--font-ui)',
                fontWeight: 500,
                fontSize: '1.0625rem',
                color: 'var(--ink)',
                margin: 0,
              }}>
                {titulo}
              </h3>

              {/* Descrição */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--ink-2)',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {descricao}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA central */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
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
            Começar Agora →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
