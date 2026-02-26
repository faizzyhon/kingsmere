import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Award, Shield, Heart, Target } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us | Kingsmere Home Improvements",
  description:
    "Family-run home improvement specialists since 2016. Learn about our story, values, and commitment to transforming UK homes with premium garage doors and awnings.",
  keywords: "about Kingsmere, family business, home improvements UK, trusted installers",
}

const stats = [
  { value: "2016", label: "Established" },
  { value: "2,500+", label: "Happy Customers" },
  { value: "5", label: "Year Warranty" },
  { value: "4.9", label: "Trustpilot Rating" },
]

const values = [
  {
    icon: Heart,
    title: "Family Values",
    description:
      "As a family-run business, we treat every customer like an extension of our own family. Your satisfaction is our priority.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "We only source premium UK-manufactured products that meet our exacting standards for durability and performance.",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description:
      "From the initial survey to the final installation, every step is carried out with meticulous precision.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "No hidden costs, no pressure sales. Just honest advice and competitive pricing you can rely on.",
  },
]



export default function AboutPage() {
  return (
    /* Wrapped in theme-about to trigger the Cedar Grove & Gypsum Rose palette */
    <div className="theme-about bg-background text-foreground transition-colors duration-700">
      <Header />
      <main>
        <PageHeader
          title="About Kingsmere"
          description="A family business built on trust, quality, and exceptional service. Discover the people and values behind every Kingsmere installation."
          breadcrumbs={[{ name: "About Us", href: "/about" }]}
        />

        {/* Stats Section - Uses themed 'secondary' background (Gypsum Rose) */}
        <section className="py-12 bg-secondary/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary lg:text-4xl font-serif">{stat.value}</p>
                  <p className="mt-1 text-sm text-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl font-serif mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Kingsmere Home Improvements was founded in 2016 by the Thompson family with a simple mission: to
                    bring premium home improvement products to UK homeowners, backed by the kind of personal service
                    that only a family business can provide.
                  </p>
                  <p>
                    What started as a small operation serving our local community has grown into a trusted national
                    brand, but our core values remain unchanged. Every installation is treated with the same care and
                    attention as if it were our own home.
                  </p>
                </div>
                <Button asChild className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/quote">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-4 border-secondary/20 shadow-xl">
                <img
                  src="/family-business-team-photo-professional.jpg"
                  alt="The Kingsmere team"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Uses themed 'muted' background */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl font-serif">Our Values</h2>
              <p className="mt-4 text-muted-foreground">The principles that guide everything we do at Kingsmere.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="border-0 shadow-lg bg-background">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Automatically inherits primary from theme-about (Cedar Grove) */}
        <section className="py-12 lg:py-20 bg-primary text-primary-foreground animate-pulse-glow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl font-serif">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Get in touch today for a free, no-obligation quote. We'd love to help transform your home.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground min-h-[48px]">
                <Link href="/quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
