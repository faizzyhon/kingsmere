"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const productsMenu = [
  { name: "Roller Garage Doors", href: "/garage-doors/roller" },
  { name: "Awnings", href: "/awnings" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-primary shadow-lg" : "bg-primary/95",
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 active:scale-95">
            <Logo className="h-10 lg:h-12 text-primary-foreground" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {/* Products Dropdown - click to toggle */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                Products
                <ChevronDown className={cn("h-4 w-4 transition-transform", productsOpen && "rotate-180")} />
              </button>
              {productsOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-lg bg-white shadow-xl border border-border py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {productsMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
                      onClick={() => setProductsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a href="tel:01234567890" className="flex items-center gap-2 text-sm text-primary-foreground group">
              <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              <span className="group-hover:underline underline-offset-4">01234 567 890</span>
            </a>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-sm">
              <Link href="/quote">Free Brochure & Survey</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-primary-foreground min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md hover:bg-primary-foreground/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-2">
              <div className="border-t border-primary-foreground/20 pt-4">
                <p className="px-3 text-xs font-semibold text-primary-foreground/60 uppercase tracking-wider">
                  Products
                </p>
                {productsMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-3 text-base text-primary-foreground hover:bg-primary-foreground/10 rounded-md min-h-[44px]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="border-t border-primary-foreground/20 pt-4 space-y-2">
                <Link
                  href="/about"
                  className="block px-3 py-3 text-base text-primary-foreground hover:bg-primary-foreground/10 rounded-md min-h-[44px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-3 text-base text-primary-foreground hover:bg-primary-foreground/10 rounded-md min-h-[44px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-3 text-base text-primary-foreground hover:bg-primary-foreground/10 rounded-md min-h-[44px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <div className="border-t border-primary-foreground/20 pt-4">
                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-h-[44px]"
                >
                  <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                    Free Brochure & Survey
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
