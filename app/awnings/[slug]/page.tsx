import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { awnings, getProductBySlug } from "@/lib/products-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug("awnings", slug)

  if (!product) {
    return { title: "Product Not Found" }
  }

  return {
    title: `${product.name} | Kingsmere Home Improvements`,
    description: product.description,
  }
}

export function generateStaticParams() {
  return awnings.map((product) => ({
    slug: product.slug,
  }))
}

export default async function AwningProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug("awnings", slug)

  if (!product) {
    notFound()
  }

  const otherProducts = awnings.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title={product.name}
          description={product.shortDescription}
          breadcrumbs={[
            { name: "Awnings", href: "/awnings" },
            { name: product.name, href: `/awnings/${product.slug}` },
          ]}
        />

        {/* Product Details */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-secondary px-4 py-2 text-lg font-bold text-secondary-foreground">
                    From {product.priceFrom}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20">
                        <Check className="h-4 w-4 text-secondary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-h-[48px]"
                  >
                    <Link href="/quote">
                      Get a Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="min-h-[48px] bg-transparent">
                    <a href="tel:01234567890">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Products */}
        <section className="py-12 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground font-serif mb-8">Explore Other Awnings</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {otherProducts.map((p) => (
                <Card key={p.id} className="overflow-hidden border-0 shadow-lg">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative aspect-video sm:aspect-square sm:w-48 flex-shrink-0">
                      <img src={p.image || "/placeholder.svg"} alt={p.name} className="h-full w-full object-cover" />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{p.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{p.shortDescription}</p>
                      <Button asChild variant="outline" size="sm" className="w-fit bg-transparent">
                        <Link href={`/awnings/${p.slug}`}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
