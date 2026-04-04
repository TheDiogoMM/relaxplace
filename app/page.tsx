import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/landing/HeroSection'
import ApresentacaoSection from '@/components/landing/ApresentacaoSection'
import CTABand from '@/components/landing/CTABand'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ApresentacaoSection />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
