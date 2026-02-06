import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog - Expert Home Improvement Advice | Kingsmere",
  description:
    "Read expert advice, tips, and guides on garage doors, awnings, and home improvements. Stay informed with the latest insights from Kingsmere's professional team.",
}

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  return (
    /* Wrapped in theme-contact to trigger the Airy Antique palette (Plum & Soft Blue) */
    <div className="theme-contact min-h-screen bg-background transition-colors duration-700">
      <Header />
      <main>
        <PageHeader
          title="Blog & Advice"
          description="Expert insights, guides, and tips for your home improvement journey"
        />

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter - Uses 'secondary' (Country Air) for hover states */}
            <div className="mb-8 flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground border-primary/30 text-primary">
                All Posts
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground border-primary/30 text-primary"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full bg-background-alt/40 hover:shadow-2xl transition-all duration-300 border-border/50 group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Overlay badge using theme accent (Gypsum Rose) */}
                        <div className="absolute top-4 left-4">
                           <Badge className="bg-accent text-accent-foreground">{post.category}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-primary/70" />
                          <span>{new Date(post.publishedAt).toLocaleDateString("en-GB")}</span>
                        </div>
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-foreground font-serif leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 border-t border-border/10 mt-auto">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4 text-secondary" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>

            {/* CTA Section - Uses the soft Country Air background variant */}
            <div className="mt-16 rounded-2xl bg-secondary/20 p-8 text-center lg:p-12 border border-secondary/30 relative overflow-hidden">
              {/* Subtle background glow based on theme accent */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              
              <h2 className="mb-4 text-2xl font-bold lg:text-3xl text-foreground font-serif">
                Need Expert Advice?
              </h2>
              <p className="mb-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team is here to help you choose the perfect solution for your home.
              </p>
              <Link
                href="/quote"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}