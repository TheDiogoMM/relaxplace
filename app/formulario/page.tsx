import { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import FormularioElemento from '@/components/formulario/FormularioElemento'

export const metadata: Metadata = {
  title: 'Descubra Seu Elemento — Relax Place',
  description: 'Informe seus dados e descubra qual dos cinco elementos da Medicina Tradicional Chinesa governa a sua vida.',
}

export default function FormularioPage() {
  return (
    <>
      <Navbar />
      <main style={{
        minHeight:  'calc(100vh - 64px)',
        background: 'var(--bg)',
        display:    'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(2rem, 5vw, 4rem) 1.25rem',
      }}>
        {/* Header */}
        <div style={{
          textAlign:  'center',
          marginBottom: '2rem',
          display:    'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <p className="section-tag">Autoconhecimento</p>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize:   'clamp(2rem, 4vw, 2.75rem)',
            color:      'var(--ink)',
            margin:     0,
            lineHeight: 1.15,
          }}>
            Qual é o Seu{' '}
            <em style={{ color: 'var(--sage-d)' }}>Elemento?</em>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.9375rem',
            color:      'var(--ink-2)',
            maxWidth:   '420px',
            lineHeight: 1.7,
            margin:     0,
          }}>
            Informe seus dados para descobrir o elemento que rege sua vida
            segundo a Medicina Tradicional Chinesa.
          </p>
        </div>

        {/* Formulário */}
        <FormularioElemento />
      </main>
      <Footer />
    </>
  )
}
