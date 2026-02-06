import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"
import { CTASection } from "@/components/cta-section"
import { awnings } from "@/lib/products-data"

export const metadata: Metadata = {
  title: "Electric Awnings | Kingsmere Home Improvements",
  description:
    "Premium electric awnings for UK homes and businesses. Retractable, patio and commercial awnings with expert installation. Transform your outdoor space today.",
  keywords: "electric awnings, retractable awnings, patio awnings, commercial awnings, UK",
}

export default function AwningsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Electric Awnings"
          description="Extend your living space outdoors with our premium electric awnings. Perfect for patios, gardens, and commercial spaces, our motorized awnings provide shade and style at the touch of a button."
          breadcrumbs={[{ name: "Awnings", href: "/awnings" }]}
        />

        {/* Products Grid */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {awnings.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl font-serif">
                Transform Your Outdoor Living
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "UV Protection",
                  description: "Our fabrics block up to 95% of harmful UV rays, protecting your family and furniture.",
                },
                {
                  title: "Temperature Control",
                  description: "Reduce indoor temperatures by up to 8°C when the awning is extended over windows.",
                },
                {
                  title: "All-Weather Use",
                  description: "Rain or shine, enjoy your outdoor space with waterproof fabric options.",
                },
                {
                  title: "Easy Operation",
                  description: "Motorized controls with optional wind sensors for automatic retraction.",
                },
              ].map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
