"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { CounterAnimation } from "@/components/counter-animation"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section className="relative bg-background pt-24 lg:pt-28 pb-12 lg:pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Family-run since 2016
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-serif text-balance">
              Transform Your Home with Premium Roller Doors & Awnings
            </h1>

            <p className="mt-5 text-base lg:text-lg leading-relaxed text-muted-foreground text-pretty max-w-xl">
              Discover the perfect blend of style, security, and convenience. Our expertly installed roller garage doors
              and awnings enhance your home and simplify your life.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-h-[48px] px-8 shadow-md"
              >
                <Link href="/quote">
                  <span className="flex items-center">
                    Free Brochure & Survey
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/5 min-h-[48px]"
              >
                <a href="tel:01234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 01234 567 890
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted">
                <span className="font-semibold text-foreground">
                  <CounterAnimation end={4.9} duration={2000} suffix="/5" />
                </span>
                <span>Trustpilot</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-muted">
                <CounterAnimation end={2500} duration={2500} suffix="+" /> Happy Customers
              </div>
              <div className="px-3 py-1.5 rounded-full bg-muted">
                <CounterAnimation end={5} duration={1500} /> Year Warranty
              </div>
            </div>
          </div>

          {/* Hero Image - Crocodile-style smaller image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
              <img
                src="/roller-garage-door-hero.jpg"
                alt="Modern roller garage door on a beautiful home"
                className="h-full w-full object-cover"
                onLoad={() => setIsLoaded(true)}
              />
              {/* Subtle overlay for text contrast if needed */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
