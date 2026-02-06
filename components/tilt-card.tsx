"use client"

import type React from "react"

import { type ReactNode, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
  glare?: boolean
}

export function TiltCard({ children, className, maxTilt = 10, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -maxTilt * 2
    const rotateY = (x - 0.5) * maxTilt * 2
    setTransform({ rotateX, rotateY, glareX: x * 100, glareY: y * 100 })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative transition-transform duration-200 ease-out", className)}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        />
      )}
    </div>
  )
}
