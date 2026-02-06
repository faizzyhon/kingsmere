"use client"

import { useEffect, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CounterAnimation({ end, duration = 2000, suffix = "", prefix = "", className }: CounterAnimationProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isIntersecting) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isIntersecting, end, duration])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
