"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isDismissed) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300 lg:hidden",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none",
      )}
    >
      <div className="relative">
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg min-h-[56px] min-w-[56px] rounded-full px-6"
        >
          <Link href="/quote" className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span>Free Quote</span>
          </Link>
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background shadow-md"
          aria-label="Dismiss"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}
