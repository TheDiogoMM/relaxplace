'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOpts } from '@/lib/animations'

export default function ElementoCTA() {
  return (
    <section style={{
      background:  'var(--sage)',
      padding:     'clamp(3rem, 6vw, 4.5rem) 1.25rem',
      textAlign:   'center',
    }}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        style={{
          maxWidth:      '600px',
          margin:        '0 auto',
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          gap:           '1.5rem',
        }}
      >
        {/* Ornamento */}
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ height: '1px', width: '32px', background: 'rgba(255,255,255,0.4)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
          <div style={{ height: '1px', width: '32px', background: 'rgba(255,255,255,0.4)' }} />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize:   'clamp(1.75rem, 4vw, 2.5rem)',
            color:      'white',
            margin:     0,
            lineHeight: 1.2,
          }}
        >
          Pronta para transformar{' '}
          <em style={{ fontStyle: 'italic' }}>seu espaço?</em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '1.0625rem',
            color:      'rgba(255,255,255,0.88)',
            lineHeight: 1.8,
            margin:     0,
            maxWidth:   '480px',
          }}
        >
          Se você deseja um ambiente que sustente a sua energia — e não o contrário —
          posso te orientar de forma personalizada.{' '}
          Fale comigo e entenda como aplicar isso no seu espaço.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href="https://wa.me/5521986458880"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            '10px',
            fontFamily:     'var(--font-ui)',
            fontWeight:     500,
            fontSize:       '1rem',
            letterSpacing:  '0.02em',
            color:          '#1a5c30',
            background:     'white',
            padding:        '15px 36px',
            borderRadius:   '9999px',
            textDecoration: 'none',
            boxShadow:      '0 8px 32px rgba(0,0,0,0.18)',
            marginTop:      '0.5rem',
          }}
        >
          <WhatsAppIcon />
          Fale comigo →
        </motion.a>
      </motion.div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
