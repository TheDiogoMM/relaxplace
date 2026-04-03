'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, viewportOpts } from '@/lib/animations'

export default function ApresentacaoSection() {
  return (
    <section
      id="especialista"
      style={{
        background: 'var(--surface)',
        borderTop:  '1px solid var(--border)',
        padding:    'clamp(3rem, 6vw, 5rem) 1.5rem',
      }}
    >
      <div style={{
        maxWidth:    '1000px',
        margin:      '0 auto',
        display:     'grid',
        gridTemplateColumns: 'min(340px, 42%) 1fr',
        gap:         'clamp(2.5rem, 6vw, 5rem)',
        alignItems:  'center',
      }}
      className="apresentacao-grid"
      >

        {/* Foto */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            position:     'relative',
            display:      'flex',
            justifyContent: 'center',
          }}
        >
          {/* Anel decorativo */}
          <div style={{
            position:     'absolute',
            inset:        '-12px',
            borderRadius: '50% 46% 52% 48% / 48% 52% 46% 50%',
            border:       '1px solid var(--sage-l)',
            opacity:      0.45,
            zIndex:       0,
          }} />
          <div style={{
            position:     'absolute',
            inset:        '-26px',
            borderRadius: '48% 52% 50% 48% / 50% 48% 52% 50%',
            border:       '1px solid var(--sage-l)',
            opacity:      0.2,
            zIndex:       0,
          }} />

          {/* Imagem */}
          <div style={{
            position:     'relative',
            zIndex:       1,
            borderRadius: '50% 46% 52% 48% / 48% 52% 46% 50%',
            overflow:     'hidden',
            width:        '100%',
            maxWidth:     '300px',
            aspectRatio:  '3 / 4',
            background:   'var(--sage-xl)',
          }}>
            <Image
              src="/Fran.png"
              alt="Françoise Lemos — Designer de Interiores especialista em Design Holístico"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              sizes="(max-width: 768px) 70vw, 300px"
              priority
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            display:        'flex',
            flexDirection:  'column',
            gap:            '1.25rem',
          }}
        >
          <p className="section-tag">Quem Está Por Trás</p>

          <div>
            <h2 style={{
              fontFamily:  'var(--font-display)',
              fontWeight:  300,
              fontSize:    'clamp(1.75rem, 3.5vw, 2.5rem)',
              color:       'var(--ink)',
              margin:      0,
              lineHeight:  1.15,
            }}>
              Françoise Lemos
            </h2>
            <p style={{
              fontFamily:    'var(--font-ui)',
              fontSize:      '0.8125rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         'var(--sage-d)',
              margin:        '0.5rem 0 0',
            }}>
              Design Holístico de Interiores
            </p>
          </div>

          {/* Linha decorativa */}
          <div style={{
            width:      '40px',
            height:     '1px',
            background: 'var(--sage)',
            opacity:    0.6,
          }} />

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   'clamp(0.9375rem, 1.5vw, 1.0625rem)',
            color:      'var(--ink-2)',
            lineHeight: 1.85,
            margin:     0,
          }}>
            Desenvolvo ambientes que vão além da estética — espaços que refletem,
            sustentam e potencializam a energia de quem vive neles.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.9375rem',
            color:      'var(--ink-2)',
            lineHeight: 1.85,
            margin:     0,
          }}>
            Este teste é um primeiro acesso à forma como o seu ambiente pode estar
            impactando sua energia — mesmo quando você ainda não percebe.
          </p>

          {/* Assinatura */}
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle:  'italic',
            fontSize:   '1.375rem',
            color:      'var(--sage-d)',
            margin:     '0.25rem 0 0',
          }}>
            Françoise
          </p>
        </motion.div>

      </div>

      {/* Responsivo: coluna única em mobile */}
      <style>{`
        @media (max-width: 640px) {
          .apresentacao-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .apresentacao-grid > div:first-child {
            margin: 0 auto;
            max-width: 220px;
          }
        }
      `}</style>
    </section>
  )
}
