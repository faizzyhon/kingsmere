"use client"

import { Shield, Award, Star, CheckCircle, Truck, Clock } from "lucide-react"
import { Marquee } from "@/components/marquee"

const trustItems = [
  { icon: Shield, text: "10 Year Warranty" },
  { icon: Award, text: "Made in the UK" },
  { icon: Star, text: "4.9/5 Trustpilot" },
  { icon: CheckCircle, text: "2,500+ Installations" },
  { icon: Truck, text: "Free Delivery" },
  { icon: Clock, text: "48hr Response" },
]

export function TrustBanner() {
  return (
    <section className="py-4 bg-primary overflow-hidden">
      <Marquee speed="slow" pauseOnHover>
        {trustItems.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-2 px-6 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
          >
            <item.icon className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
