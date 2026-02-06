"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedGarageDoor } from "@/components/animated-garage-door"
import { cn } from "@/lib/utils"

const showcaseItems = [
  {
    id: "smooth",
    title: "Smooth & Silent",
    description: "Our premium motors ensure whisper-quiet operation every time.",
  },
  {
    id: "secure",
    title: "Maximum Security",
    description: "Advanced locking mechanisms keep your home protected 24/7.",
  },
  {
    id: "smart",
    title: "Smart Integration",
    description: "Control your door from anywhere with smartphone connectivity.",
  },
]

export function InteractiveShowcase() {
  const [activeItem, setActiveItem] = useState("smooth")

  return (
    <section className="py-16 lg:py-24 bg-background-alt overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
            Experience the Difference
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif text-balance">
            See How Our Doors Transform Your Home
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <AnimatedGarageDoor />
          </AnimatedSection>

          <AnimatedSection animation="fade-left" className="space-y-6">
            {showcaseItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "w-full text-left p-6 rounded-xl transition-all duration-300 group",
                  activeItem === item.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-[1.02]"
                    : "bg-background hover:bg-muted hover:shadow-md",
                )}
              >
                <h3
                  className={cn(
                    "text-lg font-semibold mb-2 transition-colors",
                    activeItem === item.id ? "text-primary-foreground" : "text-foreground group-hover:text-primary",
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "transition-colors",
                    activeItem === item.id ? "text-primary-foreground/80" : "text-muted-foreground",
                  )}
                >
                  {item.description}
                </p>
              </button>
            ))}

            <Button
              asChild
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-h-[52px] group mt-8"
            >
              <Link href="/garage-doors">
                Explore All Door Styles
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
