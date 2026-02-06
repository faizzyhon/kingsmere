"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
// Import the Logo component you just created
import { Logo } from "@/components/logo"

const navigation = {
  doors: [
    { name: "Roller Garage Doors", href: "/garage-doors/roller" },
    { name: "Sectional Garage Doors", href: "/garage-doors/sectional" },
    { name: "Side-Hinged Doors", href: "/garage-doors/side-hinged" },
    { name: "Up & Over Doors", href: "/garage-doors/up-and-over" },
  ],
  awnings: [
    { name: "Retractable Awnings", href: "/awnings/retractable" },
    { name: "Patio Awnings", href: "/awnings/patio" },
    { name: "Commercial Awnings", href: "/awnings/commercial" },
  ],
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // Adjusted opacity for better logo visibility
        isScrolled ? "bg-primary shadow-lg" : "bg-primary/95",
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 active:scale-95">
            {/* We pass a text-primary-foreground class to ensure 
               the SVG and Text colors pop against the header background.
            */}
            <Logo className="h-10 lg:h-12 text-primary-foreground" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Garage Doors
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {navigation.doors.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link href="/garage-doors" className="font-medium text-primary">
                    View All Garage Doors
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Awnings
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {navigation.awnings.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link href="/awnings" className="font-medium text-primary">
                    View All Awnings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/blog"
              className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              About Us
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
              <Link href="/quote">Get a Quote</Link>
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
                  Garage Doors
                </p>
                {navigation.doors.map((item) => (
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

              <div className="border-t border-primary-foreground/20 pt-4">
                <p className="px-3 text-xs font-semibold text-primary-foreground/60 uppercase tracking-wider">
                  Awnings
                </p>
                {navigation.awnings.map((item) => (
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
                  href="/blog"
                  className="block px-3 py-3 text-base text-primary-foreground hover:bg-primary-foreground/10 rounded-md min-h-[44px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-3 text-base text-primary-foreground hover:bg-primary-foreground/10 rounded-md min-h-[44px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
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
                    Get a Free Quote
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