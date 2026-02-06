"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function TextReveal({ text, className, delay = 0, staggerDelay = 30 }: TextRevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const words = text.split(" ")

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className={cn(
            "inline-block transition-all duration-500 ease-out",
            isIntersecting ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm",
          )}
          style={{
            transitionDelay: `${delay + i * staggerDelay}ms`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  )
}
