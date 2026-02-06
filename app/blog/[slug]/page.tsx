import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowLeft, Tag } from "lucide-react"
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Kingsmere Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <article className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6 -ml-2">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="mb-4 text-3xl font-bold lg:text-4xl xl:text-5xl text-balance">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString("en-GB", { dateStyle: "long" })}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="mb-4 mt-8 text-2xl font-bold text-primary">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              return (
                <p key={index} className="mb-4 leading-relaxed text-foreground">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <Separator className="my-12" />

          {/* CTA */}
          <div className="rounded-2xl bg-accent/10 p-8 text-center">
            <h3 className="mb-2 text-2xl font-bold">Ready to Transform Your Home?</h3>
            <p className="mb-6 text-muted-foreground">Get a free, no-obligation quote from our expert team today.</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t bg-muted/30 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold lg:text-3xl">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-lg border bg-card p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-md">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-2 font-bold text-balance">{relatedPost.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
