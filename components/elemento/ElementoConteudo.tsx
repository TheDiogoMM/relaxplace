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

export default function ElementoConteudo({ elemento, conteudo, ciclo }: Props) {
  const cores   = CORES_ELEMENTO[elemento]
  const nomeEl  = NOMES_ELEMENTO[elemento]
  const nomeAnt = NOMES_ELEMENTO[ciclo.anterior]
  const nomePro = NOMES_ELEMENTO[ciclo.proximo]

  return (
    <section style={{
      background: 'var(--bg)',
      padding:    'clamp(2.5rem, 5vw, 3.5rem) 1.25rem',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

        {/* Texto do ciclo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            background:   'var(--surface)',
            border:       '1px solid var(--border)',
            borderLeft:   `3px solid ${cores.c}`,
            borderRadius: '12px',
            padding:      '1.5rem 1.75rem',
            display:      'flex',
            flexDirection:'column',
            gap:          '0.75rem',
          }}
        >
          <p className="section-tag">O Ciclo</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.8, margin: 0 }}>
            No caminho do equilíbrio holístico, suas práticas e o ambiente em que você vive devem priorizar
            as energias do seu elemento principal (<strong style={{ color: cores.c }}>{nomeEl}</strong>) e
            do elemento que o nutre e fortalece (<strong>{nomeAnt}</strong>).
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.8, margin: 0 }}>
            Atenção ao equilíbrio: o elemento <strong>{nomePro}</strong> consome sua energia —
            use sua influência com moderação para preservar sua vitalidade.
          </p>
        </motion.div>

        {/* 4 cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap:                 '1rem',
          }}
        >
          <Card
            titulo="Pontos Fortes"
            cor={cores.c}
            bg={cores.bg}
            items={conteudo.pontos}
            icone="✦"
          />
          <Card
            titulo="Desafios"
            cor="var(--clay)"
            bg="var(--clay-xl)"
            items={conteudo.desafios}
            icone="◈"
          />
          <Card
            titulo="Órgãos e Sistemas"
            cor="var(--slate-brand)"
            bg="var(--slate-xl)"
            items={[conteudo.orgaos]}
            texto={conteudo.personalidade}
            icone="♡"
          />
          <Card
            titulo="Práticas Recomendadas"
            cor={cores.d}
            bg={cores.bg}
            items={conteudo.praticas}
            extra={`Alimentação: ${conteudo.alimentacao}`}
            icone="◎"
          />
        </motion.div>
      </div>
    </section>
  )
}

function Card({ titulo, cor, bg, items, texto, extra, icone }: {
  titulo:  string
  cor:     string
  bg:      string
  items:   string[]
  texto?:  string
  extra?:  string
  icone:   string
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
        gap:          '0.875rem',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '14px', color: cor }}>{icone}</span>
        <h3 style={{
          fontFamily:    'var(--font-ui)',
          fontWeight:    500,
          fontSize:      '0.8125rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color:         cor,
          margin:        0,
        }}>
          {titulo}
        </h3>
      </div>

      {/* Texto livre */}
      {texto && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '0.875rem',
          color:      'var(--ink-2)',
          lineHeight: 1.7,
          margin:     0,
        }}>
          {texto}
        </p>
      )}

      {/* Lista */}
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {items.map(item => (
          <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: cor, flexShrink: 0, marginTop: '7px',
            }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.875rem',
              color:      'var(--ink-2)',
              lineHeight: 1.55,
            }}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Extra */}
      {extra && (
        <p style={{
          fontFamily:  'var(--font-body)',
          fontStyle:   'italic',
          fontSize:    '0.8125rem',
          color:       'var(--ink-3)',
          lineHeight:  1.6,
          margin:      0,
          paddingTop:  '0.5rem',
          borderTop:   '1px solid var(--border)',
        }}>
          {extra}
        </p>
      )}
    </motion.div>
  )
}
