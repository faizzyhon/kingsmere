"use client"

import Link from "next/link"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { MagneticButton } from "@/components/magnetic-button"
import { FloatingElement } from "@/components/floating-elements"
import { useMousePosition } from "@/hooks/use-mouse-position"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const mousePosition = useMousePosition(sectionRef)

  const spotlightX = (mousePosition.elementX / (sectionRef.current?.offsetWidth || 1)) * 100
  const spotlightY = (mousePosition.elementY / (sectionRef.current?.offsetHeight || 1)) * 100

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-primary animate-gradient-shift"
        style={{ backgroundImage: "linear-gradient(-45deg, #3e5f72, #4a6d80, #5a7d8e, #3e5f72)" }}
      />

      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${spotlightX}% ${spotlightY}%, rgba(122, 154, 136, 0.15), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} duration={4} distance={20} className="absolute top-10 left-10">
          <Sparkles className="h-8 w-8 text-primary-foreground/20" />
        </FloatingElement>
        <FloatingElement delay={1} duration={5} distance={15} className="absolute top-20 right-20">
          <div className="w-4 h-4 rounded-full bg-secondary/30" />
        </FloatingElement>
        <FloatingElement delay={2} duration={3.5} distance={25} className="absolute bottom-20 left-1/4">
          <div className="w-6 h-6 rounded-full bg-accent/20" />
        </FloatingElement>
        <FloatingElement delay={0.5} duration={4.5} distance={18} className="absolute bottom-10 right-1/3">
          <Sparkles className="h-6 w-6 text-primary-foreground/10" />
        </FloatingElement>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl font-serif text-balance">
            Ready to Transform Your Home?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 text-pretty">
            Get a free, no-obligation quote today. Our team will survey your property and provide expert recommendations
            tailored to your needs and budget.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <MagneticButton strength={0.25}>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-h-[52px] px-10 text-lg shadow-2xl animate-pulse-glow relative overflow-hidden group"
              >
                <Link href="/quote">
                  <span className="relative z-10 flex items-center">
                    Free Brochure & Survey
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 animate-shimmer opacity-40" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground min-h-[52px] text-lg group"
              >
                <a href="tel:01234567890">
                  <Phone className="mr-2 h-5 w-5 transition-all group-hover:rotate-12 group-hover:scale-110" />
                  Call 01234 567 890
                </a>
              </Button>
            </MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/70">
            {["Free surveys available", "No pressure sales", "Competitive pricing"].map((item, i) => (
              <span
                key={item}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 transition-all hover:bg-primary-foreground/10 hover:scale-105"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {item}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
