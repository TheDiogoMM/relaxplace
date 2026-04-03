import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/landing/HeroSection'
import ElementosGrid from '@/components/landing/ElementosGrid'
import CicloSection from '@/components/landing/CicloSection'
import ComoFuncionaSection from '@/components/landing/ComoFuncionaSection'
import CTABand from '@/components/landing/CTABand'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ElementosGrid />
        <CicloSection />
        <ComoFuncionaSection />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
