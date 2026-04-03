'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { calcularElemento } from '@/lib/elementos'

interface FormData {
  nome:       string
  sobrenome:  string
  nascimento: string
  telefone:   string
  email:      string
}

interface Erros {
  nome?:       string
  sobrenome?:  string
  nascimento?: string
  telefone?:   string
  email?:      string
}

function formatarTelefone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2)  return d
  if (d.length <= 6)  return `(${d.slice(0,2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`
}

function validar(f: FormData): Erros {
  const e: Erros = {}
  if (!f.nome.trim() || f.nome.trim().length < 2)
    e.nome = 'Nome precisa ter ao menos 2 caracteres.'
  if (!f.sobrenome.trim() || f.sobrenome.trim().length < 2)
    e.sobrenome = 'Sobrenome precisa ter ao menos 2 caracteres.'
  if (!f.nascimento)
    e.nascimento = 'Data de nascimento é obrigatória.'
  else {
    const d = new Date(f.nascimento)
    const hoje = new Date()
    if (isNaN(d.getTime()) || d.getFullYear() < 1900 || d > hoje)
      e.nascimento = 'Insira uma data válida entre 1900 e hoje.'
  }
  const tel = f.telefone.replace(/\D/g, '')
  if (!tel || tel.length < 10)
    e.telefone = 'Telefone inválido. Ex: (11) 91234-5678'
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = 'E-mail inválido.'
  return e
}

export default function FormularioElemento() {
  const router = useRouter()
  const [form, setForm] = useState<FormData>({
    nome: '', sobrenome: '', nascimento: '', telefone: '', email: '',
  })
  const [erros, setErros]       = useState<Erros>({})
  const [enviando, setEnviando] = useState(false)

  const set = (campo: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = campo === 'telefone' ? formatarTelefone(e.target.value) : e.target.value
      setForm(f => ({ ...f, [campo]: val }))
      if (erros[campo]) setErros(er => ({ ...er, [campo]: undefined }))
    }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const novosErros = validar(form)
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros)
      return
    }
    setEnviando(true)
    const data = new Date(form.nascimento)
    // Ajuste de fuso: evitar off-by-one
    const dataLocal = new Date(data.getUTCFullYear(), data.getUTCMonth(), data.getUTCDate())
    const elemento  = calcularElemento(dataLocal)
    const params    = new URLSearchParams({
      nome: `${form.nome.trim()} ${form.sobrenome.trim()}`,
    })
    router.push(`/elemento/${elemento}?${params}`)
  }

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      noValidate
      style={{
        background:   'var(--surface)',
        border:       '1px solid var(--border)',
        borderRadius: '20px',
        padding:      'clamp(1.75rem, 4vw, 2.5rem)',
        display:      'flex',
        flexDirection:'column',
        gap:          '1.25rem',
        width:        '100%',
        maxWidth:     '460px',
        margin:       '0 auto',
      }}
    >
      {/* Nome + Sobrenome */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <Field
          label="Nome *"
          type="text"
          value={form.nome}
          onChange={set('nome')}
          erro={erros.nome}
          autoComplete="given-name"
          placeholder="Ana"
        />
        <Field
          label="Sobrenome *"
          type="text"
          value={form.sobrenome}
          onChange={set('sobrenome')}
          erro={erros.sobrenome}
          autoComplete="family-name"
          placeholder="Silva"
        />
      </div>

      {/* Data */}
      <Field
        label="Data de Nascimento *"
        type="date"
        value={form.nascimento}
        onChange={set('nascimento')}
        erro={erros.nascimento}
        hint="A data exata é importante para o cálculo do calendário chinês."
        autoComplete="bday"
        max={new Date().toISOString().split('T')[0]}
        min="1900-01-01"
      />

      {/* Telefone */}
      <Field
        label="Telefone / WhatsApp *"
        type="tel"
        value={form.telefone}
        onChange={set('telefone')}
        erro={erros.telefone}
        hint="Usaremos para enviar orientações personalizadas."
        autoComplete="tel"
        placeholder="(11) 91234-5678"
        inputMode="numeric"
      />

      {/* E-mail opcional */}
      <Field
        label="E-mail"
        type="email"
        value={form.email}
        onChange={set('email')}
        erro={erros.email}
        autoComplete="email"
        placeholder="ana@email.com (opcional)"
        inputMode="email"
      />

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={enviando}
        whileHover={!enviando ? { scale: 1.01 } : {}}
        whileTap={!enviando  ? { scale: 0.98 } : {}}
        style={{
          marginTop:     '0.25rem',
          width:         '100%',
          padding:       '14px 24px',
          borderRadius:  '9999px',
          border:        'none',
          cursor:        enviando ? 'not-allowed' : 'pointer',
          background:    enviando ? 'var(--sage-l)' : 'var(--sage)',
          color:         'white',
          fontFamily:    'var(--font-ui)',
          fontWeight:    500,
          fontSize:      '1rem',
          letterSpacing: '0.02em',
          transition:    'background 0.2s',
        }}
      >
        {enviando ? 'Calculando...' : 'Quero Saber Meu Elemento →'}
      </motion.button>
    </motion.form>
  )
}

/* ── Componente de campo reutilizável ── */
interface FieldProps {
  label:        string
  type:         string
  value:        string
  onChange:     (e: React.ChangeEvent<HTMLInputElement>) => void
  erro?:        string
  hint?:        string
  autoComplete?: string
  placeholder?: string
  max?:         string
  min?:         string
  inputMode?:   React.HTMLAttributes<HTMLInputElement>['inputMode']
}

function Field({ label, type, value, onChange, erro, hint, autoComplete, placeholder, max, min, inputMode }: FieldProps) {
  const id = label.toLowerCase().replace(/[^a-z]/g, '-')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <label htmlFor={id} style={{
        fontFamily:    'var(--font-ui)',
        fontSize:      '0.8125rem',
        fontWeight:    500,
        color:         'var(--ink-2)',
        letterSpacing: '0.01em',
      }}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        max={max}
        min={min}
        inputMode={inputMode}
        style={{
          padding:      '10px 14px',
          borderRadius: '10px',
          border:       `1px solid ${erro ? 'var(--clay)' : 'var(--border-2)'}`,
          background:   erro ? 'var(--clay-xl)' : 'var(--bg)',
          color:        'var(--ink)',
          fontFamily:   'var(--font-ui)',
          fontSize:     '0.9375rem',
          outline:      'none',
          transition:   'border-color 0.2s, box-shadow 0.2s',
          width:        '100%',
          boxSizing:    'border-box',
        }}
        onFocus={e => { e.target.style.borderColor = 'var(--sage)'; e.target.style.boxShadow = '0 0 0 3px rgba(107,143,113,0.12)' }}
        onBlur={e  => { e.target.style.borderColor = erro ? 'var(--clay)' : 'var(--border-2)'; e.target.style.boxShadow = 'none' }}
      />

      <AnimatePresence>
        {erro && (
          <motion.p
            key="erro"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize:   '0.75rem',
              color:      'var(--clay)',
              margin:     0,
            }}
          >
            {erro}
          </motion.p>
        )}
        {!erro && hint && (
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontSize:   '0.72rem',
            color:      'var(--ink-3)',
            margin:     0,
          }}>
            {hint}
          </p>
        )}
      </AnimatePresence>
    </div>
  )
}
