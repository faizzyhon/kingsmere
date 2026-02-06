"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom" | "blur"
  delay?: number
  duration?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  const animations = {
    "fade-up": {
      initial: "opacity-0 translate-y-12",
      animate: "opacity-100 translate-y-0",
    },
    "fade-down": {
      initial: "opacity-0 -translate-y-12",
      animate: "opacity-100 translate-y-0",
    },
    "fade-left": {
      initial: "opacity-0 translate-x-12",
      animate: "opacity-100 translate-x-0",
    },
    "fade-right": {
      initial: "opacity-0 -translate-x-12",
      animate: "opacity-100 translate-x-0",
    },
    zoom: {
      initial: "opacity-0 scale-95",
      animate: "opacity-100 scale-100",
    },
    blur: {
      initial: "opacity-0 blur-sm",
      animate: "opacity-100 blur-0",
    },
  }

  const { initial, animate } = animations[animation]

  return (
    <div
      ref={ref}
      className={cn("transition-all ease-out", isIntersecting ? animate : initial, className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
