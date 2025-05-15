import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { fetchBlogPosts, fetchCategories } from "@/lib/payload-api"
import { format } from "date-fns"

export const revalidate = 60 // Revalidate this page every 60 seconds

export async function generateMetadata() {
  return {
    title: "Blog | EcoWeave Packaging Insights",
    description:
      "Explore the latest articles on sustainable packaging, WPP bag innovations, industry trends, and eco-friendly packaging solutions from EcoWeave Packaging experts.",
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const category = typeof searchParams.category === "string" ? searchParams.category : ""

  const { docs: blogPosts, totalPages } = await fetchBlogPosts({
    page,
    limit: 6,
    category,
  })

  const categories = await fetchCategories()

  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Our Blog</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Insights</h1>
              <p className="text-lg text-muted-foreground">
                Stay updated with the latest trends, innovations, and best practices in sustainable packaging.
              </p>
            </div>
          </div>
        </section>

        {featuredPost && (
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px]">
                  <Image
                    src={featuredPost.featuredImage.url || "/placeholder.svg"}
                    alt={featuredPost.featuredImage.alt || featuredPost.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <Badge className="mb-4">Featured Article</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={featuredPost.author.image.url || "/placeholder.svg"}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{featuredPost.author.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(featuredPost.publishedDate), "MMMM d, yyyy")} • {featuredPost.readTime} min
                        read
                      </p>
                    </div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700" asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>Read Full Article</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Latest Articles */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <Badge className="mb-2">Latest Articles</Badge>
                <h2 className="text-3xl font-bold">Recent Publications</h2>
              </div>
              <div className="mt-4 md:mt-0">
                <Button variant="outline" asChild>
                  <Link href="/blog">View All Articles</Link>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post: any) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Badge className="absolute top-2 left-2 z-10 bg-green-100 text-green-800 hover:bg-green-100 border-none">
                      {post.category.name}
                    </Badge>
                    <Image
                      src={post.featuredImage.url || "/placeholder.svg"}
                      alt={post.featuredImage.alt || post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span>{format(new Date(post.publishedDate), "MMMM d, yyyy")}</span>
                      <span>•</span>
                      <span>{post.author.name}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0 text-green-600" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read more <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <Link key={i} href={`/blog?page=${i + 1}${category ? `&category=${category}` : ""}`}>
                      <Button
                        variant={page === i + 1 ? "default" : "outline"}
                        className={page === i + 1 ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {i + 1}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Categories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Topic</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore our articles organized by subject matter to find the information most relevant to your
                interests.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {categories.map((category: any) => (
                <Link href={`/blog?category=${category.slug}`} key={category.id}>
                  <div className="p-6 border rounded-lg hover:shadow-md transition-shadow hover:border-green-600">
                    <h3 className="font-medium mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {/* You could add a count here if available from the API */}
                      Articles
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-green-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Informed</h2>
              <p className="mb-8 text-green-50">
                Subscribe to our newsletter to receive the latest articles, industry insights, and packaging innovations
                directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1"
                />
                <Button className="bg-white text-green-600 hover:bg-green-50">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
