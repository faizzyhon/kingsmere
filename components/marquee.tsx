"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({ children, className, reverse = false, pauseOnHover = true, speed = "normal" }: MarqueeProps) {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  }

  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-8 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{ animationDuration: speedMap[speed] }}
      >
        {children}
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 gap-8 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{ animationDuration: speedMap[speed] }}
        aria-hidden
      >
        {children}
        {children}
      </div>
    </div>
  )
}
