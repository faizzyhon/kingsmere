import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"
import { CTASection } from "@/components/cta-section"
import { garageDoors } from "@/lib/products-data"

export const metadata: Metadata = {
  title: "Electric Garage Doors | Kingsmere Home Improvements",
  description:
    "Premium electric garage doors for UK homes. Roller, sectional, side-hinged and up & over doors with expert installation and 10-year warranty. Get a free quote today.",
  keywords: "electric garage doors, roller doors, sectional doors, garage door installation, UK",
}

export default function GarageDoorsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Electric Garage Doors"
          description="Discover our premium range of electric garage doors. From space-saving roller doors to traditional side-hinged options, we have the perfect solution for your home."
          breadcrumbs={[{ name: "Garage Doors", href: "/garage-doors" }]}
        />

        {/* Products Grid */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {garageDoors.map((product) => (
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
                Why Choose an Electric Garage Door?
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Convenience",
                  description: "Open and close your garage without leaving your car, even in bad weather.",
                },
                {
                  title: "Security",
                  description: "Advanced locking mechanisms and rolling code technology keep your home safe.",
                },
                {
                  title: "Insulation",
                  description: "Double-skinned panels help regulate temperature and reduce energy bills.",
                },
                {
                  title: "Value",
                  description: "A quality garage door can increase your property value by up to 5%.",
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
