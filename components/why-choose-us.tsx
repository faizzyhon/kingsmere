"use client"

import { Shield, Users, Clock, Award, Wrench, HeartHandshake } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { CounterAnimation } from "@/components/counter-animation"
import { useState } from "react"

const features = [
  {
    icon: Users,
    title: "Family-Run Business",
    description: "Since 2016, we've been a trusted family business putting customers first with personalized service.",
    stat: { value: 8, suffix: "+", label: "Years" },
  },
  {
    icon: Shield,
    title: "5 Year Warranty",
    description: "Every installation comes with our comprehensive warranty for complete peace of mind.",
    stat: { value: 5, suffix: "", label: "Year Warranty" },
  },
  {
    icon: Award,
    title: "Made in the UK",
    description: "We source premium UK-manufactured products, supporting British craftsmanship.",
    stat: { value: 100, suffix: "%", label: "UK Made" },
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Our skilled technicians ensure flawless installation with meticulous attention to detail.",
    stat: { value: 2500, suffix: "+", label: "Installs" },
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "From quote to completion, we work efficiently without compromising on quality.",
    stat: { value: 48, suffix: "hr", label: "Response" },
  },
  {
    icon: HeartHandshake,
    title: "After-Sales Support",
    description: "Our relationship doesn't end at installation. We're here for ongoing support and maintenance.",
    stat: { value: 24, suffix: "/7", label: "Support" },
  },
]

export function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">Why Kingsmere</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif text-balance">
            Trusted by Thousands of UK Homeowners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            We combine traditional values with modern technology to deliver exceptional home improvements.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} animation="zoom" delay={index * 100}>
              <div
                className="group relative bg-background rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 mb-4 transition-all duration-500 group-hover:bg-secondary group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="h-7 w-7 text-secondary transition-colors duration-500 group-hover:text-secondary-foreground" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-primary">
                        <CounterAnimation end={feature.stat.value} duration={2000} suffix={feature.stat.suffix} />
                      </span>
                      <span className="text-sm text-muted-foreground">{feature.stat.label}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-secondary/10 rotate-45 transition-all duration-500 group-hover:bg-secondary/20 group-hover:scale-150" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
