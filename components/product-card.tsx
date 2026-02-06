import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryPath = product.category === "garage-doors" ? "garage-doors" : "awnings"

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
            From {product.priceFrom}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground font-serif mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">{product.shortDescription}</p>

        {/* Key Features Preview */}
        <ul className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-foreground">
              <Check className="h-4 w-4 text-secondary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
            <Link href={`/${categoryPath}/${product.slug}`}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Link href="/quote">Quote</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
