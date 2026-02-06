"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    // Only show custom cursor on desktop
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      setIsHidden(false)
    }

    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Add trail particle
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ }
      setTrail((prev) => [...prev.slice(-8), newTrail])

      // Check if hovering over interactive element
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        window.getComputedStyle(target).cursor === "pointer"
      setIsPointer(isInteractive)
    }

    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  // Remove old trail particles
  useEffect(() => {
    const cleanup = setInterval(() => {
      setTrail((prev) => prev.slice(-6))
    }, 50)
    return () => clearInterval(cleanup)
  }, [])

  if (isHidden) return null

  return (
    <>
      {/* Trail particles */}
      {trail.map((t, i) => (
        <div
          key={t.id}
          className="pointer-events-none fixed z-[9998] rounded-full bg-secondary/30 mix-blend-screen hidden md:block"
          style={{
            left: t.x,
            top: t.y,
            width: 4 + i * 0.5,
            height: 4 + i * 0.5,
            transform: "translate(-50%, -50%)",
            opacity: ((i + 1) / trail.length) * 0.4,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className={cn(
          "pointer-events-none fixed z-[9999] rounded-full border-2 border-accent transition-transform duration-150 ease-out hidden md:block",
          isPointer ? "scale-150 bg-accent/20" : "scale-100",
        )}
        style={{
          left: position.x,
          top: position.y,
          width: 32,
          height: 32,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Inner dot */}
      <div
        className={cn(
          "pointer-events-none fixed z-[9999] rounded-full bg-accent transition-transform duration-75 ease-out hidden md:block",
          isPointer ? "scale-0" : "scale-100",
        )}
        style={{
          left: position.x,
          top: position.y,
          width: 6,
          height: 6,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  )
}
