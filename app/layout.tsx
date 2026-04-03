import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit, Lora } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-outfit',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Relax Place — Descubra Seu Elemento da Medicina Tradicional Chinesa',
  description:
    'Descubra qual dos cinco elementos da MTC governa sua vida. Uma jornada de autoconhecimento, saúde e equilíbrio holístico.',
  keywords:
    'medicina tradicional chinesa, cinco elementos, terapias holísticas, bem-estar, autoconhecimento',
  icons: {
    icon:        '/logoimg.png',
    shortcut:    '/logoimg.png',
    apple:       '/logoimg.png',
  },
  openGraph: {
    title: 'Relax Place — Seu Elemento da MTC',
    description:
      'Descubra o elemento que governa sua vida e receba orientações personalizadas de bem-estar.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${outfit.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)]">
        {children}
      </body>
    </html>
  )
}
