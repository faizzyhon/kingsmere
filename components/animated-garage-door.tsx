"use client"

import { useState, useEffect } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

export function AnimatedGarageDoor() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [isOpen, setIsOpen] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasAnimated(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting, hasAnimated])

  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto aspect-[4/5]">
      {/* House frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted to-muted/80 rounded-t-3xl shadow-2xl overflow-hidden">
        {/* Roof */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[120%]">
          <div className="w-full h-16 bg-primary/90 clip-roof" />
        </div>

        {/* Window */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-12 bg-secondary/20 rounded border-4 border-primary/30 grid grid-cols-2">
          <div className="border-r border-primary/20" />
          <div />
        </div>

        {/* Garage door frame */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[65%] bg-foreground/10 rounded-t-lg p-2">
          {/* Door panels container */}
          <div className="relative h-full w-full overflow-hidden rounded-t">
            {/* Door panels */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  "absolute left-0 right-0 h-1/4 bg-gradient-to-b from-primary to-primary/90 border-b border-primary-foreground/20 transition-all duration-1000 ease-in-out shadow-md",
                  "before:absolute before:inset-x-4 before:top-1/2 before:-translate-y-1/2 before:h-2 before:bg-primary-foreground/10 before:rounded",
                )}
                style={{
                  top: isOpen ? `-${(i + 1) * 25}%` : `${i * 25}%`,
                  transitionDelay: isOpen ? `${i * 100}ms` : `${(3 - i) * 100}ms`,
                  opacity: isOpen ? 0.3 : 1,
                }}
              />
            ))}

            {/* Interior revealed */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-b from-foreground/80 to-foreground/90 transition-opacity duration-500",
                isOpen ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
            >
              {/* Car silhouette */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4">
                <div className="w-full h-8 bg-accent/60 rounded-t-xl" />
                <div className="w-[90%] mx-auto h-6 bg-accent/50 rounded-b" />
                <div className="flex justify-between px-2 -mt-1">
                  <div className="w-6 h-3 bg-foreground/50 rounded-full" />
                  <div className="w-6 h-3 bg-foreground/50 rounded-full" />
                </div>
              </div>

              {/* Interior light */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-amber-400/80 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
            </div>
          </div>
        </div>

        {/* Driveway */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-foreground/20 rounded-t-lg" />
      </div>

      {/* Hover to toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute inset-0 cursor-pointer z-10"
        aria-label={isOpen ? "Close garage door" : "Open garage door"}
      />

      {/* Label */}
      <div
        className={cn(
          "absolute -bottom-12 left-1/2 -translate-x-1/2 text-center transition-all duration-500",
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <p className="text-sm text-muted-foreground">Click to {isOpen ? "close" : "open"}</p>
      </div>
    </div>
  )
}
