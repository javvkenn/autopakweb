"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteButton from "@/components/quote-button"

export const dynamic = "force-dynamic"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get("type")

  // Set default tab based on URL parameter
  let defaultTab = "standard"
  if (typeParam) {
    if (["standard", "laminated", "bopp", "custom"].includes(typeParam)) {
      defaultTab = typeParam
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Our Products</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete WPP Bag Solutions</h1>
              <p className="text-lg text-muted-foreground">
                Discover our comprehensive range of woven polypropylene bags designed for various industries and
                applications.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Tabs defaultValue={defaultTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
                  <TabsTrigger value="standard">Standard WPP</TabsTrigger>
                  <TabsTrigger value="laminated">Laminated WPP</TabsTrigger>
                  <TabsTrigger value="bopp">BOPP Printed</TabsTrigger>
                  <TabsTrigger value="custom">Custom Solutions</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="standard">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[400px]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Standard WPP Bags"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Standard WPP Bags</h2>
                    <p className="text-muted-foreground mb-6">
                      Our standard woven polypropylene bags provide reliable, cost-effective packaging for a wide range
                      of products. These versatile bags are ideal for agricultural products, animal feed, seeds, and
                      general industrial use.
                    </p>

                    <div className="space-y-4 mb-6">
                      <h3 className="text-xl font-bold">Key Features:</h3>
                      <ul className="space-y-2">
                        {[
                          "High tensile strength for durability",
                          "Moisture resistant properties",
                          "Available in various sizes from 5kg to 50kg capacity",
                          "Optional UV protection for extended outdoor use",
                          "Customizable colors and basic printing options",
                          "Breathable material ideal for agricultural products",
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-green-600 hover:bg-green-700" asChild>
                        <Link href="/products/standard-wpp-bags">
                          Learn More <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Contact Sales</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="laminated">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[400px]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Laminated WPP Bags"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Laminated WPP Bags</h2>
                    <p className="text-muted-foreground mb-6">
                      Our laminated woven polypropylene bags offer enhanced protection and a premium appearance. The
                      lamination process adds an extra layer of protection, making these bags ideal for products that
                      require moisture resistance, extended shelf life, or a high-quality presentation.
                    </p>

                    <div className="space-y-4 mb-6">
                      <h3 className="text-xl font-bold">Key Features:</h3>
                      <ul className="space-y-2">
                        {[
                          "Superior moisture barrier protection",
                          "Enhanced UV resistance for longer outdoor exposure",
                          "Glossy finish for premium product presentation",
                          "Excellent printing surface for high-quality graphics",
                          "Available in matt or glossy finishes",
                          "Ideal for fertilizers, chemicals, and food products",
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-green-600 hover:bg-green-700" asChild>
                        <Link href="/products/laminated-wpp-bags">
                          Learn More <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Contact Sales</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bopp">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[400px]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="BOPP Printed Bags"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">BOPP Printed Bags</h2>
                    <p className="text-muted-foreground mb-6">
                      Our BOPP (Biaxially Oriented Polypropylene) printed bags combine durability with outstanding
                      visual appeal. These bags feature high-resolution printing that showcases your brand with vibrant
                      colors and sharp details, making them perfect for retail and consumer-facing packaging.
                    </p>

                    <div className="space-y-4 mb-6">
                      <h3 className="text-xl font-bold">Key Features:</h3>
                      <ul className="space-y-2">
                        {[
                          "Vibrant, high-resolution printing up to 10 colors",
                          "Excellent clarity and gloss for maximum visual impact",
                          "Superior tear and puncture resistance",
                          "Enhanced barrier properties for product protection",
                          "Retail-ready presentation with optional handles",
                          "Recyclable and environmentally responsible",
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-green-600 hover:bg-green-700" asChild>
                        <Link href="/products/bopp-printed-bags">
                          Learn More <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Contact Sales</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[400px]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Custom WPP Solutions"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Custom WPP Solutions</h2>
                    <p className="text-muted-foreground mb-6">
                      Our custom woven polypropylene packaging solutions are tailored to meet your specific
                      requirements. Whether you need specialized features, unique dimensions, or innovative designs, our
                      team works closely with you to develop the perfect packaging solution for your products.
                    </p>

                    <div className="space-y-4 mb-6">
                      <h3 className="text-xl font-bold">Customization Options:</h3>
                      <ul className="space-y-2">
                        {[
                          "Custom dimensions and capacities",
                          "Specialized features like valve openings or handles",
                          "Unique closure systems for specific applications",
                          "Integration of anti-counterfeit features",
                          "Biodegradable and compostable material options",
                          "Combination of different materials for specialized performance",
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-green-600 hover:bg-green-700" asChild>
                        <Link href="/products/custom-wpp-solutions">
                          Learn More <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Contact Sales</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Specifications</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Details</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our WPP bags are manufactured to meet the highest industry standards.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border p-3 text-left">Specification</th>
                    <th className="border p-3 text-left">Standard WPP</th>
                    <th className="border p-3 text-left">Laminated WPP</th>
                    <th className="border p-3 text-left">BOPP Printed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">Material Weight</td>
                    <td className="border p-3">60-120 GSM</td>
                    <td className="border p-3">80-140 GSM</td>
                    <td className="border p-3">90-150 GSM</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border p-3 font-medium">Load Capacity</td>
                    <td className="border p-3">5-50 kg</td>
                    <td className="border p-3">10-50 kg</td>
                    <td className="border p-3">5-25 kg</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Standard Sizes</td>
                    <td className="border p-3">15"x24" to 24"x40"</td>
                    <td className="border p-3">15"x24" to 24"x40"</td>
                    <td className="border p-3">12"x18" to 20"x30"</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border p-3 font-medium">Printing Colors</td>
                    <td className="border p-3">Up to 4 colors</td>
                    <td className="border p-3">Up to 6 colors</td>
                    <td className="border p-3">Up to 10 colors</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">UV Protection</td>
                    <td className="border p-3">Optional</td>
                    <td className="border p-3">Standard</td>
                    <td className="border p-3">Standard</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border p-3 font-medium">Moisture Resistance</td>
                    <td className="border p-3">Moderate</td>
                    <td className="border p-3">High</td>
                    <td className="border p-3">Very High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Applications</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our WPP bags are designed to meet the specific needs of various industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Agriculture",
                  description:
                    "Durable bags for seeds, grains, animal feed, and fertilizers that protect against moisture while allowing breathability.",
                  products: ["Standard WPP Bags", "Laminated Bags", "Custom Solutions"],
                  image: "/placeholder.svg?height=200&width=400",
                  link: "/industries/agriculture",
                },
                {
                  industry: "Fertilizer & Chemicals",
                  description:
                    "Specialized bags with enhanced barrier properties to safely contain chemical products and fertilizers.",
                  products: ["Laminated WPP Bags", "Valve Bags", "UN Certified Bags"],
                  image: "/placeholder.svg?height=200&width=400",
                  link: "/industries/chemicals",
                },
                {
                  industry: "Cement & Construction",
                  description:
                    "High-strength bags designed to withstand the weight and abrasion of cement, sand, and other construction materials.",
                  products: ["Heavy-Duty WPP Bags", "Valve Bags", "Block Bottom Bags"],
                  image: "/placeholder.svg?height=200&width=400",
                  link: "/industries/construction",
                },
                {
                  industry: "Food Packaging",
                  description:
                    "Food-grade bags that maintain product freshness and comply with international food safety standards.",
                  products: ["Food-Grade WPP Bags", "BOPP Printed Bags", "Laminated Bags"],
                  image: "/placeholder.svg?height=200&width=400",
                  link: "/industries/food",
                },
                {
                  industry: "Retail & Bulk Trade",
                  description:
                    "Attractive, branded packaging solutions that enhance product visibility and appeal in retail environments.",
                  products: ["BOPP Printed Bags", "Handled Bags", "Custom Retail Solutions"],
                  image: "/placeholder.svg?height=200&width=400",
                  link: "/industries/retail",
                },
                {
                  industry: "Pet Food & Products",
                  description:
                    "Specialized bags for pet food that preserve freshness and feature consumer-friendly designs.",
                  products: ["Laminated Bags", "BOPP Printed Bags", "Resealable Options"],
                  image: "/placeholder.svg?height=200&width=400",
                  link: "/industries/pet-food",
                },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.industry} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{item.industry}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Recommended Products:</h4>
                      <ul className="space-y-1">
                        {item.products.map((product, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="link" className="p-0 text-green-600" asChild>
                      <Link href={item.link}>
                        Learn more <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-green-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Order?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-green-50">
              Contact our sales team today to discuss your specific requirements or request a quote for our WPP bags.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <QuoteButton className="bg-white text-green-600 hover:bg-green-50">Request a Quote</QuoteButton>
              <Button variant="outline" className="text-white border-white hover:bg-green-700" asChild>
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
