'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, cardReveal, viewportOpts } from '@/lib/animations'
import { NOMES_ELEMENTO, CORES_ELEMENTO, type Elemento } from '@/lib/elementos'
import type { ConteudoElemento } from '@/lib/elementos-conteudo'

interface Props {
  elemento: Elemento
  conteudo: ConteudoElemento
  ciclo:    { anterior: Elemento; proximo: Elemento }
}

export default function ElementoConteudo({ elemento, conteudo, ciclo: _ciclo }: Props) {
  const cores  = CORES_ELEMENTO[elemento]
  const nomeEl = NOMES_ELEMENTO[elemento]

  return (
    <section style={{
      background: 'var(--bg)',
      padding:    'clamp(2.5rem, 5vw, 3.5rem) 1.25rem',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* Bloco Ambiente & Energia — topo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            background:   'var(--surface)',
            border:       '1px solid var(--border)',
            borderLeft:   `3px solid ${cores.c}`,
            borderRadius: '14px',
            padding:      'clamp(1.5rem, 3vw, 2rem) clamp(1.25rem, 3vw, 2rem)',
            display:      'flex',
            flexDirection:'column',
            gap:          '1.1rem',
          }}
        >
          <p className="section-tag" style={{ color: cores.c }}>Ambiente &amp; Energia</p>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.85, margin: 0 }}>
            {conteudo.descricaoAmbiente}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.85, margin: 0 }}>
            {conteudo.posicaoCiclo}
          </p>

          <div style={{
            background:   cores.bg,
            borderRadius: '10px',
            padding:      '1rem 1.25rem',
            borderLeft:   `2px solid ${cores.c}`,
          }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--ink-2)', lineHeight: 1.8, margin: 0 }}>
              {conteudo.avisoAmbiente}
            </p>
          </div>
        </motion.div>

        {/* Recomendações */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap:                 '1rem',
          }}
        >
          {/* Cores do Elemento */}
          <RecomendacaoCard
            titulo="Cores do Elemento"
            subtitulo={nomeEl}
            texto={conteudo.coresElemento}
            cor={cores.c}
            bg={cores.bg}
            icone="◉"
          />

          {/* Cores de Nutrição */}
          <RecomendacaoCard
            titulo="Cores de Nutrição"
            subtitulo="Elemento Nutridor"
            texto={conteudo.coresNutricao}
            cor={cores.c}
            bg={cores.bg}
            icone="✦"
          />
        </motion.div>

        {/* Formas */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap:                 '1rem',
          }}
        >
          {/* Favoráveis */}
          <div style={{
            background:   'var(--surface)',
            border:       '1px solid var(--border)',
            borderTop:    `2px solid ${cores.c}`,
            borderRadius: '12px',
            padding:      '1.5rem',
            display:      'flex',
            flexDirection:'column',
            gap:          '0.75rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: cores.c, fontSize: '13px' }}>◎</span>
              <h3 style={{
                fontFamily:    'var(--font-ui)',
                fontWeight:    500,
                fontSize:      '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         cores.c,
                margin:        0,
              }}>
                Formas Favoráveis
              </h3>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.9rem',
              color:      'var(--ink-2)',
              lineHeight: 1.7,
              margin:     0,
            }}>
              {conteudo.formasFavoraveis}
            </p>
          </div>

          {/* Menos favoráveis */}
          <div style={{
            background:   'var(--surface)',
            border:       '1px solid var(--border)',
            borderTop:    '2px solid var(--clay)',
            borderRadius: '12px',
            padding:      '1.5rem',
            display:      'flex',
            flexDirection:'column',
            gap:          '0.75rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--clay)', fontSize: '13px' }}>◈</span>
              <h3 style={{
                fontFamily:    'var(--font-ui)',
                fontWeight:    500,
                fontSize:      '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         'var(--clay)',
                margin:        0,
              }}>
                Formas Menos Favoráveis
              </h3>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.9rem',
              color:      'var(--ink-2)',
              lineHeight: 1.7,
              margin:     0,
            }}>
              {conteudo.formasMenos}
            </p>
          </div>
        </motion.div>

        {/* Essência — após os cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
        >
          <p style={{
            fontFamily:  'var(--font-body)',
            fontStyle:   'italic',
            fontSize:    'clamp(1rem, 2.5vw, 1.125rem)',
            color:       'var(--ink-2)',
            lineHeight:  1.75,
            margin:      0,
            borderLeft:  `3px solid ${cores.c}`,
            paddingLeft: '1.25rem',
          }}>
            {conteudo.essencia}
          </p>
        </motion.div>

        {/* Conclusão */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            textAlign:  'center',
            padding:    '0 1rem',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontStyle:  'italic',
            fontSize:   '1rem',
            color:      'var(--ink-2)',
            lineHeight: 1.8,
            margin:     0,
            maxWidth:   '600px',
            marginInline: 'auto',
          }}>
            {conteudo.conclusao}
          </p>
        </motion.div>

      </div>
    </section>
  )
}

function RecomendacaoCard({ titulo, subtitulo, texto, cor, bg, icone }: {
  titulo:    string
  subtitulo: string
  texto:     string
  cor:       string
  bg:        string
  icone:     string
}) {
  return (
    <motion.div
      variants={cardReveal}
      style={{
        background:   'var(--surface)',
        border:       '1px solid var(--border)',
        borderTop:    `2px solid ${cor}`,
        borderRadius: '12px',
        padding:      '1.5rem',
        display:      'flex',
        flexDirection:'column',
        gap:          '0.75rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '13px', color: cor }}>{icone}</span>
        <div>
          <h3 style={{
            fontFamily:    'var(--font-ui)',
            fontWeight:    500,
            fontSize:      '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color:         cor,
            margin:        0,
          }}>
            {titulo}
          </h3>
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontSize:   '0.7rem',
            color:      'var(--ink-3)',
            margin:     0,
            letterSpacing: '0.02em',
          }}>
            {subtitulo}
          </p>
        </div>
      </div>

      <div style={{
        background:   bg,
        borderRadius: '8px',
        padding:      '0.75rem 1rem',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '0.9rem',
          color:      'var(--ink-2)',
          lineHeight: 1.65,
          margin:     0,
        }}>
          {texto}
        </p>
      </div>
    </motion.div>
  )
}
