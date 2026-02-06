"use client"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const frozen = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (frozen.current && freezeOnceVisible) return
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && freezeOnceVisible) {
          frozen.current = true
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, freezeOnceVisible])

  return { ref, isIntersecting }
}
