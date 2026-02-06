import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, CheckCircle2, ArrowRight } from "lucide-react"
import { locations, getLocationBySlug } from "@/lib/locations-data"
import { garageDoors, awnings } from "@/lib/products-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface LocationPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    return {
      title: "Location Not Found",
    }
  }

  return {
    title: `Garage Doors & Awnings in ${location.name} | Kingsmere`,
    description: location.metaDescription,
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">
                <MapPin className="mr-1 h-3 w-3" />
                Serving {location.county}
              </Badge>
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground lg:text-5xl xl:text-6xl text-balance">
                Garage Doors & Awnings in {location.name}
              </h1>
              <p className="mb-6 text-lg text-primary-foreground/90 leading-relaxed">{location.description}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
                >
                  <a href="tel:01234567890">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={location.image || "/placeholder.svg"}
                alt={`Homes in ${location.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold lg:text-3xl text-center">Areas We Cover in {location.name}</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {location.serviceAreas.map((area) => (
              <div key={area} className="flex items-center gap-2 rounded-lg bg-card p-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products for this Location */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold lg:text-3xl">Popular Products in {location.name}</h2>

          {/* Garage Doors */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
              <span className="text-primary">Electric Garage Doors</span>
              <ArrowRight className="h-5 w-5" />
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {garageDoors.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="mb-2 font-bold text-balance">{product.name}</h4>
                    <p className="mb-3 text-sm text-muted-foreground">{product.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{product.priceFrom}</span>
                      <Link
                        href={`/garage-doors/${product.slug}`}
                        className="text-sm font-medium text-accent hover:underline"
                      >
                        Learn More
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Awnings */}
          <div>
            <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
              <span className="text-primary">Electric Awnings</span>
              <ArrowRight className="h-5 w-5" />
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {awnings.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="mb-2 font-bold text-balance">{product.name}</h4>
                    <p className="mb-3 text-sm text-muted-foreground">{product.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{product.priceFrom}</span>
                      <Link
                        href={`/awnings/${product.slug}`}
                        className="text-sm font-medium text-accent hover:underline"
                      >
                        Learn More
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Location */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold lg:text-3xl text-center">
            Why {location.name} Homeowners Choose Kingsmere
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="mb-3 h-8 w-8 text-secondary" />
                <h3 className="mb-2 text-lg font-bold">Local Experts</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We know {location.name} homes inside out. Our team understands local architecture and planning
                  requirements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="mb-3 h-8 w-8 text-secondary" />
                <h3 className="mb-2 text-lg font-bold">Fast Response Times</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Based locally, we can visit your property quickly for surveys and installation. No long waits.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="mb-3 h-8 w-8 text-secondary" />
                <h3 className="mb-2 text-lg font-bold">10-Year Warranty</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every installation comes with our comprehensive 10-year warranty for complete peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-balance">
            Ready to Transform Your {location.name} Home?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground text-pretty">
            Get your free, no-obligation quote today. Our expert team will visit your property and provide tailored
            recommendations.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Link href="/quote">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
