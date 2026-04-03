import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ElementoHero from '@/components/elemento/ElementoHero'
import DiagramaLinear from '@/components/elemento/DiagramaLinear'
import ElementoConteudo from '@/components/elemento/ElementoConteudo'
import ElementoCTA from '@/components/elemento/ElementoCTA'
import { NOMES_ELEMENTO, CICLO, type Elemento } from '@/lib/elementos'
import { CONTEUDO } from '@/lib/elementos-conteudo'

const ELEMENTOS_VALIDOS: Elemento[] = ['madeira', 'fogo', 'terra', 'metal', 'agua']

interface Props {
  params:      Promise<{ elemento: string }>
  searchParams: Promise<{ nome?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { elemento } = await params
  if (!ELEMENTOS_VALIDOS.includes(elemento as Elemento)) return {}
  const e    = elemento as Elemento
  const nome = NOMES_ELEMENTO[e]
  return {
    title:       `Elemento ${nome} — Relax Place`,
    description: `Você é do elemento ${nome}. Descubra suas características, práticas holísticas e orientações de bem-estar alinhadas à sua natureza.`,
  }
}

export function generateStaticParams() {
  return ELEMENTOS_VALIDOS.map(e => ({ elemento: e }))
}

export default async function ElementoPage({ params, searchParams }: Props) {
  const { elemento } = await params
  const { nome }     = await searchParams

  if (!ELEMENTOS_VALIDOS.includes(elemento as Elemento)) notFound()

  const e          = elemento as Elemento
  const conteudo   = CONTEUDO[e]
  const ciclo      = CICLO[e]
  const nomeUsuario = nome ? decodeURIComponent(nome) : undefined

  return (
    <>
      <Navbar />
      <main>
        <ElementoHero
          elemento={e}
          conteudo={conteudo}
          nomeUsuario={nomeUsuario}
        />
        <DiagramaLinear elemento={e} />
        <ElementoConteudo elemento={e} conteudo={conteudo} ciclo={ciclo} />
        <ElementoCTA />
      </main>
      <Footer />
    </>
  )
}
