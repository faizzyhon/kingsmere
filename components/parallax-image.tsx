"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
}

export function ParallaxImage({ src, alt, className, speed = 0.3 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress))
      setOffset((clampedProgress - 0.5) * 100 * speed)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="h-[120%] w-full object-cover transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${offset}px)` }}
      />
    </div>
  )
}
