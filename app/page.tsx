import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBanner } from "@/components/trust-banner"
import { ProductsSection } from "@/components/products-section"
import { InteractiveShowcase } from "@/components/interactive-showcase"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { ParticlesBackground } from "@/components/particles-background"

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <ProductsSection />
        <InteractiveShowcase />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
