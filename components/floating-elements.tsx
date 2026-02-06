"use client"

import type React from "react"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
}

export function FloatingElement({ children, className, delay = 0, duration = 3, distance = 10 }: FloatingElementProps) {
  return (
    <div
      className={cn("animate-float", className)}
      style={
        {
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          "--float-distance": `${distance}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
