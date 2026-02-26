"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "London",
    rating: 5,
    text: "Absolutely fantastic service from start to finish. The team were professional, tidy, and the garage door looks stunning. Would highly recommend Kingsmere to anyone.",
    product: "Roller Garage Door",
  },
  {
    name: "David Williams",
    location: "Birmingham",
    rating: 5,
    text: "We've had our awning for a year now and it's transformed our garden. The quality is exceptional and the installation was seamless. Great value for money.",
    product: "Retractable Awning",
  },
  {
    name: "Emma & James Clarke",
    location: "Manchester",
    rating: 5,
    text: "From the initial survey to the final installation, everything was handled professionally. The electric garage door is whisper quiet and works perfectly. Thank you!",
    product: "Roller Garage Door",
  },
  {
    name: "Michael Foster",
    location: "Bristol",
    rating: 5,
    text: "Incredible attention to detail. The team went above and beyond to ensure everything was perfect. Our new garage door has completely transformed the front of our house.",
    product: "Roller Garage Door",
  },
  {
    name: "Jennifer Adams",
    location: "Leeds",
    rating: 5,
    text: "Professional, punctual and polite. The installation team were a pleasure to work with. The patio awning is exactly what we wanted.",
    product: "Patio Awning",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">Customer Reviews</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif text-balance">
            What Our Customers Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-amber-400 text-amber-400 transition-transform hover:scale-125"
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 500+ reviews</span>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full bg-background shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-all hover:scale-110 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-12 w-12 rounded-full bg-background shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-all hover:scale-110 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-xl max-w-2xl mx-auto bg-gradient-to-br from-background to-muted/50">
                    <CardContent className="p-8 md:p-12">
                      <Quote className="h-12 w-12 text-secondary/20 mb-6" />
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-serif italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p className="font-semibold text-lg text-foreground">{testimonial.name}</p>
                          <p className="text-muted-foreground">{testimonial.location}</p>
                        </div>
                        <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                          {testimonial.product}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setActiveIndex(index)
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  activeIndex === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <AnimatedSection animation="zoom" delay={300} className="mt-12 flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">Rated Excellent on</p>
          <div className="flex items-center gap-2 px-6 py-3 bg-[#00b67a] rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
            <Star className="h-6 w-6 fill-white text-white" />
            <span className="font-bold text-white text-lg">Trustpilot</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
