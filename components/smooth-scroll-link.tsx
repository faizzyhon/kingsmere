"use client"

import type React from "react"

import type { ReactNode } from "react"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function SmoothScrollLink({ href, children, className }: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
