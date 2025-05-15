import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsletterForm from "@/components/newsletter-form"
import { fetchBlogPostBySlug } from "@/lib/payload-api"
import { notFound } from "next/navigation"
import { format } from "date-fns"

export const revalidate = 60 // Revalidate this page every 60 seconds

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Article Not Found | EcoWeave Packaging Blog",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: `${post.title} | EcoWeave Packaging Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Format the date
  const formattedDate = format(new Date(post.publishedDate), "MMMM d, yyyy")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">{post.category.name}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={post.author.image.url || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="relative h-[400px] mb-8">
                  <Image
                    src={post.featuredImage.url || "/placeholder.svg"}
                    alt={post.featuredImage.alt || post.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-green max-w-none">
                  {/* Render rich text content from Payload */}
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-lg font-medium mb-4">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: any) => (
                        <Badge key={tag.id} variant="outline" className="bg-green-50">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to Blog */}
                <div className="mt-12">
                  <Button variant="link" className="text-green-600 p-0" asChild>
                    <Link href="/blog">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-1">
                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Related Articles */}
                  {post.relatedPosts && post.relatedPosts.length > 0 && (
                    <div className="border rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                      <div className="space-y-6">
                        {post.relatedPosts.map((related: any) => (
                          <div key={related.id} className="flex flex-col gap-2">
                            <div className="relative h-40 w-full">
                              <Image
                                src={related.featuredImage.url || "/placeholder.svg"}
                                alt={related.featuredImage.alt || related.title}
                                fill
                                className="object-cover rounded-md"
                              />
                            </div>
                            <h4 className="font-medium">{related.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {format(new Date(related.publishedDate), "MMMM d, yyyy")}
                            </p>
                            <Button variant="link" className="text-green-600 p-0" asChild>
                              <Link href={`/blog/${related.slug}`}>Read article</Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Newsletter Signup */}
                  <div className="border rounded-lg p-6 bg-green-50">
                    <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-muted-foreground mb-4">
                      Stay updated with the latest insights and innovations in sustainable packaging.
                    </p>
                    <NewsletterForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
