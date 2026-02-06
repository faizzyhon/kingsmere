"use client"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronDown, Sparkles } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"
import { FloatingElement } from "@/components/floating-elements"
import { TextReveal } from "@/components/text-reveal"
import { CounterAnimation } from "@/components/counter-animation"
import { useMousePosition } from "@/hooks/use-mouse-position"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const mousePosition = useMousePosition(heroRef)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const parallaxX = (mousePosition.elementX / (heroRef.current?.offsetWidth || 1) - 0.5) * 30
  const parallaxY = (mousePosition.elementY / (heroRef.current?.offsetHeight || 1) - 0.5) * 30

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center bg-background-alt overflow-hidden">
      <div
        className="absolute inset-0 z-0 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px) scale(1.15)` }}
      >
        <img
          src="/modern-luxury-home-exterior-with-beautiful-electri.jpg"
          alt="Beautiful home with modern garage door"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="absolute inset-0 z-[1] animate-gradient-shift"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(62,95,114,0.95) 0%, rgba(62,95,114,0.8) 30%, rgba(122,154,136,0.6) 60%, rgba(62,95,114,0.4) 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <FloatingElement delay={0} duration={4} distance={20} className="absolute top-20 right-20 opacity-30">
          <div className="w-40 h-40 rounded-full border-2 border-primary-foreground/30 animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={1} duration={5} distance={25} className="absolute bottom-40 left-10 opacity-15">
          <div className="w-56 h-56 rounded-full border border-primary-foreground/20" />
        </FloatingElement>
        <FloatingElement delay={2} duration={3.5} distance={15} className="absolute top-1/3 right-1/4 opacity-20">
          <div className="w-32 h-32 rounded-full bg-secondary/30 blur-xl" />
        </FloatingElement>
        <FloatingElement delay={0.5} duration={6} distance={30} className="absolute top-1/2 left-1/3 opacity-10">
          <Sparkles className="w-16 h-16 text-primary-foreground/40" />
        </FloatingElement>
        <FloatingElement delay={1.5} duration={4.5} distance={18} className="absolute bottom-1/3 right-10 opacity-25">
          <div className="w-24 h-24 rounded-full bg-accent/20 blur-lg" />
        </FloatingElement>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-foreground to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary-foreground to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary-foreground to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-2xl">
          <div
            className={`transition-all duration-700 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-secondary/20 backdrop-blur-md px-5 py-2 text-sm font-medium text-primary-foreground mb-6 border border-primary-foreground/20 shadow-lg hover:bg-secondary/30 transition-colors group">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
              </span>
              <span className="group-hover:translate-x-0.5 transition-transform">Family-run since 2016</span>
            </p>
          </div>

          <h1
            className={`text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-balance transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <TextReveal text="Transform Your Home with Premium Electric Doors" delay={400} />
          </h1>

          <p
            className={`mt-6 text-lg lg:text-xl leading-relaxed text-primary-foreground/90 text-pretty max-w-xl transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "600ms" }}
          >
            Discover the perfect blend of style, security, and convenience. Our expertly installed garage doors and
            awnings enhance your home and simplify your life.
          </p>

          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row sm:items-center transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "800ms" }}
          >
            <MagneticButton strength={0.25}>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-h-[52px] px-8 animate-pulse-glow relative overflow-hidden group shadow-2xl"
              >
                <Link href="/quote">
                  <span className="relative z-10 flex items-center text-lg">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 transition-all group-hover:translate-x-2 group-hover:scale-110" />
                  </span>
                  <div className="absolute inset-0 animate-shimmer opacity-30" />
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground min-h-[52px] backdrop-blur-md group shadow-lg hover:shadow-xl transition-all hover:border-primary-foreground/50"
              >
                <Link href="/gallery">
                  <Play className="mr-2 h-5 w-5 transition-all group-hover:scale-125 group-hover:text-secondary" />
                  <span className="text-lg">View Our Work</span>
                </Link>
              </Button>
            </MagneticButton>
          </div>

          <div
            className={`mt-12 flex flex-wrap items-center gap-6 lg:gap-8 text-sm text-primary-foreground/80 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all hover:scale-105 group">
              <div className="flex -space-x-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-primary bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center text-[10px] font-bold text-secondary-foreground transition-all hover:scale-110 hover:z-10 shadow-sm"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {i}★
                  </div>
                ))}
              </div>
              <span className="font-semibold">
                <CounterAnimation end={4.9} duration={2000} suffix="/5" /> Trustpilot
              </span>
            </div>
            <div className="h-6 w-px bg-primary-foreground/30 hidden sm:block" />
            <span className="px-4 py-2 rounded-full bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all hover:scale-105">
              <CounterAnimation end={2500} duration={2500} suffix="+" /> Happy Customers
            </span>
            <div className="h-6 w-px bg-primary-foreground/30 hidden sm:block" />
            <span className="px-4 py-2 rounded-full bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all hover:scale-105">
              <CounterAnimation end={10} duration={1500} /> Year Warranty
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="text-primary-foreground/60 flex flex-col items-center gap-2 group cursor-pointer hover:text-primary-foreground/80 transition-colors">
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
          <div className="relative">
            <ChevronDown className="h-5 w-5 animate-bounce-subtle" />
            <ChevronDown
              className="h-5 w-5 absolute top-0 left-0 animate-bounce-subtle opacity-50"
              style={{ animationDelay: "150ms" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[3]" />
    </section>
  )
}
