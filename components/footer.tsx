import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Shield, Award, Clock } from "lucide-react"

const footerLinks = {
  products: [
    { name: "Roller Garage Doors", href: "/garage-doors/roller" },
    { name: "Sectional Garage Doors", href: "/garage-doors/sectional" },
    { name: "Retractable Awnings", href: "/awnings/retractable" },
    { name: "Patio Awnings", href: "/awnings/patio" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  locations: [
    { name: "London", href: "/locations/london" },
    { name: "Birmingham", href: "/locations/birmingham" },
    { name: "Manchester", href: "/locations/manchester" },
    { name: "Bristol", href: "/locations/bristol" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Trust Signals Bar */}
      <div className="border-b border-primary-foreground/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Shield className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold">10 Year Warranty</p>
                <p className="text-xs text-primary-foreground/70">On all products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Award className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold">Made in the UK</p>
                <p className="text-xs text-primary-foreground/70">Quality assured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Clock className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold">Since 2016</p>
                <p className="text-xs text-primary-foreground/70">Family business</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <div className="text-xs font-bold text-secondary-foreground">4.9★</div>
              </div>
              <div>
                <p className="text-sm font-semibold">Excellent Reviews</p>
                <p className="text-xs text-primary-foreground/70">Trustpilot rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex flex-col mb-4">
              <span className="text-xl font-bold font-serif">Kingsmere</span>
              <span className="text-sm text-primary-foreground/80 -mt-1">Home Improvements</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
              Family-run home improvement specialists, transforming UK homes since 2016 with premium electric garage
              doors and awnings.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Locations</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:01234567890"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  01234 567 890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kingsmere.co.uk"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  info@kingsmere.co.uk
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>
                    123 High Street
                    <br />
                    London, UK
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Kingsmere Home Improvements. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
