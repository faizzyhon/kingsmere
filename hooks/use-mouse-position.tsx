"use client"

import { useState, useEffect, type RefObject } from "react"

interface MousePosition {
  x: number
  y: number
  elementX: number
  elementY: number
}

export function useMousePosition(elementRef?: RefObject<HTMLElement | null>) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let elementX = e.clientX
      let elementY = e.clientY

      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect()
        elementX = e.clientX - rect.left
        elementY = e.clientY - rect.top
      }

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        elementX,
        elementY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [elementRef])

  return mousePosition
}
