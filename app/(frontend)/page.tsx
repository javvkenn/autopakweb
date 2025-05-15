import Link from "next/link"
import Image from "next/image"
import { Package2, Recycle, Factory, Shield, Truck, ChevronRight, ArrowRight, Leaf, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSlider from "@/components/hero-slider"
import { SliderProvider } from "@/context/slider-context"
import QuoteButton from "@/components/quote-button"
import {
  fetchActiveSlider,
  fetchServices,
  fetchProducts,
  fetchIndustries,
  fetchCoreValues,
  fetchTestimonials,
  fetchBlogPosts,
} from "@/lib/payload-api"

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function Home() {
  // Fetch data from Payload CMS
  const slider = await fetchActiveSlider()
  const services = await fetchServices()
  const products = await fetchProducts()
  const industries = await fetchIndustries()
  const coreValues = await fetchCoreValues()
  const testimonials = await fetchTestimonials({ featured: true })
  const { docs: blogPosts } = await fetchBlogPosts({ limit: 3 })

  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4)

  return (
    <SliderProvider initialSlides={[]}>
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-0">
        {/* Hero Section with Animated Slider */}
        <HeroSlider/>

        {/* Services Overview */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Packaging Solutions</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                From design to delivery, we provide end-to-end solutions for all your packaging needs with a focus on
                sustainability and quality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services?.map((service) => {
                // Dynamically import the icon
                const IconComponent =
                  {
                    Package2,
                    Recycle,
                    Factory,
                    Shield,
                    Truck,
                  }[service.icon as keyof typeof import("lucide-react")] || Package2

                return (
                  <Card key={service.id}>
                    <CardHeader className="pb-2">
                      <IconComponent className="h-10 w-10 text-green-600 mb-2" />
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Product Highlights */}
        <section id="products" className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Featured Products</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium WPP Bag Range</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Discover our comprehensive range of woven polypropylene bags designed for various industries and
                applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts?.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.image?.url || "/placeholder.svg"}
                      alt={product.image?.alt || product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{product.shortDescription}</p>
                    <ul className="space-y-1 mb-4">
                      {product.keyFeatures?.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="p-0 text-green-600" asChild>
                      <Link href={`/products/${product.slug}`}>
                        Learn more <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/products">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section id="industries" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Industries</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Diverse Sectors</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our packaging solutions cater to a wide range of industries with specific requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {industries?.map((industry) => {
                // Use Package2 as default icon
                const IconComponent = Package2

                return (
                  <Link href={`/industries/${industry.slug}`} key={industry.id}>
                    <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                      <IconComponent className="h-10 w-10 mx-auto mb-2 text-green-600" />
                      <h3 className="font-medium mb-2">{industry.name}</h3>
                      <p className="text-sm text-muted-foreground">{industry.shortDescription}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="EcoWeave manufacturing facility"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <Badge className="mb-4">Why Choose Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The EcoWeave Advantage</h2>

                <div className="space-y-6">
                  {coreValues?.slice(0, 4).map((value) => {
                    // Dynamically import the icon
                    const IconComponent =
                      {
                        Shield,
                        Recycle,
                        Factory,
                        Truck,
                        Package2,
                        Leaf,
                        Award,
                        Users,
                      }[value.icon as keyof typeof import("lucide-react")] || Shield

                    return (
                      <div key={value.id} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Hear from businesses that rely on our packaging solutions for their products.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials?.map((testimonial) => (
                <Card key={testimonial.id} className="relative">
                  <CardContent className="pt-6">
                    <div className="absolute -top-5 left-6">
                      <div className="rounded-full overflow-hidden border-4 border-background w-12 h-12 relative">
                        <Image
                          src={testimonial.image?.url || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-green-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Packaging?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-green-50">
              Contact our team today to discuss your specific requirements and discover how our sustainable WPP bags can
              benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <QuoteButton className="bg-white text-green-600 hover:bg-green-50">Request a Quote</QuoteButton>
              <Button variant="outline" className="text-white border-white hover:bg-green-700" asChild>
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section id="blog" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Latest Insights</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Knowledge</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Stay updated with the latest trends and innovations in sustainable packaging.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts?.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.featuredImage?.url || "/placeholder.svg"}
                      alt={post.featuredImage?.alt || post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">
                      {new Date(post.publishedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
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

            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </SliderProvider>
  )
}
