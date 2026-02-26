import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBanner } from "@/components/trust-banner"
import { ProductsSection } from "@/components/products-section"

import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { ScrollProgress } from "@/components/scroll-progress"

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <ProductsSection />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
