'use client'

import { motion } from 'framer-motion'
import { fadeUp, slideLeft, viewportOpts } from '@/lib/animations'

export default function SobreSection() {
  return (
    <section
      id="sobre"
      style={{
        background: 'var(--surface)',
        padding: 'clamp(4rem, 7vw, 6rem) 1.5rem',
      }}
    >
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
      }}>
        {/* Tag */}
        <motion.p
          className="section-tag"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
        >
          Quem Somos
        </motion.p>

        {/* Título */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Um Espaço de{' '}
          <em style={{ color: 'var(--sage-d)' }}>Cura e Reconexão</em>
        </motion.h2>

        {/* Linha decorativa */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            width: '60px',
            height: '2px',
            background: 'var(--sage)',
            borderRadius: '2px',
          }}
        />

        {/* Parágrafos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
            color: 'var(--ink-2)',
            lineHeight: 1.8,
            margin: 0,
          }}>
            O Relax Place nasceu da crença de que o bem-estar verdadeiro começa pelo
            autoconhecimento. Integramos princípios da Medicina Tradicional Chinesa,
            terapias holísticas e práticas contemplativas em uma jornada única de
            cuidado com o ser.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
            color: 'var(--ink-2)',
            lineHeight: 1.8,
            margin: 0,
            borderLeft: '2px solid var(--sage-l)',
            paddingLeft: '1.25rem',
          }}>
            Nosso trabalho é te ajudar a encontrar o equilíbrio entre o que você é e
            o que seu corpo e mente precisam — respeitando sua natureza mais profunda.
          </p>
        </motion.div>

        {/* Valores visuais */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            marginTop: '0.5rem',
          }}
        >
          {['Autoconhecimento', 'Equilíbrio', 'Bem-estar', 'Cuidado'].map(valor => (
            <div
              key={valor}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--sage)',
              }} />
              <span style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--sage-d)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {valor}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
