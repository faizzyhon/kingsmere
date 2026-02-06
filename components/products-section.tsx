"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { TiltCard } from "@/components/tilt-card"
import { useRef } from "react"

const products = [
  {
    category: "Electric Garage Doors",
    description: "Smooth, silent operation with premium insulation and smart home integration.",
    href: "/garage-doors",
    image: "/modern-electric-roller-garage-door-on-luxury-home.jpg",
    items: [
      { name: "Roller Doors", href: "/garage-doors/roller" },
      { name: "Sectional Doors", href: "/garage-doors/sectional" },
      { name: "Side-Hinged", href: "/garage-doors/side-hinged" },
      { name: "Up & Over", href: "/garage-doors/up-and-over" },
    ],
  },
  {
    category: "Electric Awnings",
    description: "Extend your living space outdoors with motorized shade solutions.",
    href: "/awnings",
    image: "/beautiful-retractable-patio-awning-on-modern-house.jpg",
    items: [
      { name: "Retractable", href: "/awnings/retractable" },
      { name: "Patio Awnings", href: "/awnings/patio" },
      { name: "Commercial", href: "/awnings/commercial" },
    ],
  },
]

export function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-background cursor-glow relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">Our Products</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif text-balance">
            Premium Home Improvement Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From sleek electric garage doors to elegant patio awnings, we offer a comprehensive range of products
            designed to enhance your home.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <AnimatedSection
              key={product.category}
              animation={index === 0 ? "fade-right" : "fade-left"}
              delay={index * 150}
            >
              <TiltCard className="group h-full">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.category}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      <h3 className="text-2xl font-bold text-white font-serif">{product.category}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.items.map((item, i) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent overflow-hidden relative"
                    >
                      <Link href={product.href}>
                        <span className="relative z-10 flex items-center justify-center w-full">
                          Explore {product.category}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                        </span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
