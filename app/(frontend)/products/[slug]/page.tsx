import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteButton from "@/components/quote-button"

// Product data
const products = {
  "standard-wpp-bags": {
    name: "Standard WPP Bags",
    title: "Standard Woven Polypropylene Bags",
    description: "Durable, cost-effective packaging for a wide range of products.",
    image: "/placeholder.svg?height=500&width=800",
    content: `
      Our standard woven polypropylene bags provide reliable, versatile packaging for various industries. These bags are manufactured using high-quality polypropylene tapes woven into a strong, durable fabric.
      
      Standard WPP bags offer excellent tensile strength, making them ideal for packaging products ranging from agricultural commodities to industrial materials. The breathable nature of the fabric allows for air circulation while providing protection against dust and light moisture.
      
      These bags are available in various sizes, colors, and weave densities to suit different applications. They can be customized with basic printing options to display your brand and product information.
    `,
    features: [
      "High tensile strength for durability",
      "Moisture resistant properties",
      "Available in various sizes from 5kg to 50kg capacity",
      "Optional UV protection for extended outdoor use",
      "Customizable colors and basic printing options",
      "Breathable material ideal for agricultural products",
    ],
    specifications: [
      { name: "Material Weight", value: "60-120 GSM" },
      { name: "Load Capacity", value: "5-50 kg" },
      { name: "Standard Sizes", value: '15"x24" to 24"x40"' },
      { name: "Printing Colors", value: "Up to 4 colors" },
      { name: "UV Protection", value: "Optional" },
      { name: "Moisture Resistance", value: "Moderate" },
    ],
    applications: [
      {
        industry: "Agriculture",
        uses: ["Grain storage", "Seed packaging", "Animal feed"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        industry: "Construction",
        uses: ["Sand", "Aggregates", "Basic building materials"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        industry: "Industrial",
        uses: ["Raw materials", "Non-hazardous chemicals", "Minerals"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    variants: [
      {
        name: "Standard Open Mouth Bags",
        description: "Traditional open-top design for easy filling and stitched closure.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Gusseted Bags",
        description: "Side gussets that expand to increase capacity and provide a stable base.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Valve Bags",
        description: "Self-closing valve for easy filling with automatic equipment.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  "laminated-wpp-bags": {
    name: "Laminated WPP Bags",
    title: "Laminated Woven Polypropylene Bags",
    description: "Premium bags with enhanced protection and superior appearance.",
    image: "/placeholder.svg?height=500&width=800",
    content: `
      Our laminated woven polypropylene bags offer enhanced protection and a premium appearance for your products. These bags feature a layer of polypropylene film laminated to the woven fabric, creating a smooth surface with superior barrier properties.
      
      The lamination process significantly improves moisture resistance, making these bags ideal for products that require protection from humidity and environmental conditions. The smooth surface also provides an excellent printing substrate for high-quality graphics and branding.
      
      Laminated WPP bags are available in both glossy and matte finishes to suit your brand aesthetics. They offer enhanced UV protection and are suitable for products that require extended shelf life or will be stored in challenging conditions.
    `,
    features: [
      "Superior moisture barrier protection",
      "Enhanced UV resistance for longer outdoor exposure",
      "Glossy or matte finish for premium product presentation",
      "Excellent printing surface for high-quality graphics",
      "Available with various closure options",
      "Ideal for fertilizers, chemicals, and food products",
    ],
    specifications: [
      { name: "Material Weight", value: "80-140 GSM" },
      { name: "Load Capacity", value: "10-50 kg" },
      { name: "Standard Sizes", value: '15"x24" to 24"x40"' },
      { name: "Printing Colors", value: "Up to 6 colors" },
      { name: "UV Protection", value: "Standard" },
      { name: "Moisture Resistance", value: "High" },
    ],
    applications: [
      {
        industry: "Food & Beverage",
        uses: ["Rice", "Flour", "Sugar", "Pet food"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        industry: "Chemicals & Fertilizers",
        uses: ["Fertilizers", "Non-hazardous chemicals", "Powdered products"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        industry: "Construction",
        uses: ["Cement", "Gypsum", "Moisture-sensitive materials"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    variants: [
      {
        name: "PP Woven Laminated Bags",
        description: "Standard lamination for improved moisture resistance and printing quality.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Block Bottom Laminated Bags",
        description: "Self-standing bags with a flat bottom for stable display and storage.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Valve Laminated Bags",
        description: "Laminated bags with filling valve for automated packaging lines.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  "bopp-printed-bags": {
    name: "BOPP Printed Bags",
    title: "BOPP Printed Woven Polypropylene Bags",
    description: "High-quality printed bags with vibrant graphics for brand visibility.",
    image: "/placeholder.svg?height=500&width=800",
    content: `
      Our BOPP (Biaxially Oriented Polypropylene) printed bags combine durability with outstanding visual appeal. These premium bags feature high-resolution printing that showcases your brand with vibrant colors and sharp details.
      
      The BOPP film provides an excellent printing surface that allows for photographic-quality images, intricate designs, and vibrant colors. This makes these bags perfect for retail and consumer-facing packaging where brand presentation is crucial.
      
      Beyond their visual appeal, BOPP printed bags offer superior protection against moisture, UV radiation, and physical damage. They are available in various finishes and can include features like handles, zippers, or windows for enhanced functionality.
    `,
    features: [
      "Vibrant, high-resolution printing up to 10 colors",
      "Excellent clarity and gloss for maximum visual impact",
      "Superior tear and puncture resistance",
      "Enhanced barrier properties for product protection",
      "Retail-ready presentation with optional handles",
      "Recyclable and environmentally responsible",
    ],
    specifications: [
      { name: "Material Weight", value: "90-150 GSM" },
      { name: "Load Capacity", value: "5-25 kg" },
      { name: "Standard Sizes", value: '12"x18" to 20"x30"' },
      { name: "Printing Colors", value: "Up to 10 colors" },
      { name: "UV Protection", value: "Standard" },
      { name: "Moisture Resistance", value: "Very High" },
    ],
    applications: [
      {
        industry: "Retail",
        uses: ["Consumer products", "Pet food", "Specialty foods"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        industry: "Food & Beverage",
        uses: ["Premium food products", "Coffee", "Specialty grains"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        industry: "Garden & Agriculture",
        uses: ["Potting soil", "Garden fertilizers", "Retail seed products"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    variants: [
      {
        name: "Standard BOPP Bags",
        description: "Classic design with high-quality printing for premium product presentation.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "BOPP Bags with Handles",
        description: "Convenient carry handles for retail and consumer applications.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "BOPP Bags with Windows",
        description: "Transparent sections that allow consumers to view the product inside.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  "custom-wpp-solutions": {
    name: "Custom WPP Solutions",
    title: "Custom Woven Polypropylene Packaging Solutions",
    description: "Tailored packaging designed to meet your specific requirements.",
    image: "/placeholder.svg?height=500&width=800",
    content: `
      Our custom woven polypropylene packaging solutions are tailored to meet your specific requirements. Whether you need specialized features, unique dimensions, or innovative designs, our team works closely with you to develop the perfect packaging solution for your products.
      
      We offer a comprehensive design and development process that begins with understanding your product, handling requirements, and brand objectives. Our engineering team can create custom solutions that address specific challenges such as unusual shapes, special closure requirements, or unique protection needs.
      
      From concept to production, we provide full support including prototyping, testing, and optimization to ensure your custom packaging performs exactly as required. Our flexible manufacturing capabilities allow us to produce custom solutions in quantities that match your business needs.
    `,
    features: [
      "Custom dimensions and capacities",
      "Specialized features like valve openings or handles",
      "Unique closure systems for specific applications",
      "Integration of anti-counterfeit features",
      "Biodegradable and compostable material options",
      "Combination of different materials for specialized performance",
    ],
    specifications: [
      { name: "Material Weight", value: "Custom as required" },
      { name: "Load Capacity", value: "Custom as required" },
      { name: "Dimensions", value: "Custom as required" },
      { name: "Printing", value: "Full customization available" },
      { name: "Special Features", value: "Multiple options available" },
      { name: "Minimum Order", value: "Varies by product complexity" },
    ],
    applications: [
      {
        industry: "Specialized Industries",
        uses: ["Unique products", "Special handling requirements", "Custom dimensions"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        industry: "Premium Brands",
        uses: ["Distinctive packaging", "Enhanced brand experience", "Luxury presentation"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        industry: "Technical Products",
        uses: ["Sensitive equipment", "Precision parts", "Specialized protection needs"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    variants: [
      {
        name: "Custom Shape Bags",
        description: "Uniquely shaped bags designed for specific products or applications.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Multi-Compartment Bags",
        description: "Bags with separate sections for different components or products.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Specialty Closure Bags",
        description: "Custom closure systems for specific filling or dispensing requirements.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return {
      title: "Product Not Found | EcoWeave Packaging",
      description: "The requested product information could not be found.",
    }
  }

  return {
    title: `${product.name} | EcoWeave Packaging`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = products[slug as keyof typeof products]

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-20">
          <div className="container text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-8">The product you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Product Details</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{product.title}</h1>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <Badge className="mb-4">{product.name}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Product Overview</h2>
                <div className="space-y-4 text-muted-foreground">
                  {product.content.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <QuoteButton className="bg-green-600 hover:bg-green-700">Request a Quote</QuoteButton>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our {product.name} offer specific features designed to meet your packaging needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Specifications</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Details</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">Detailed specifications of our {product.name}.</p>
            </div>

            <div className="overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : ""}>
                      <td className="border p-3 font-medium">{spec.name}</td>
                      <td className="border p-3">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Product Variants */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Options</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Variants</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore the different variants of our {product.name}.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {product.variants.map((variant, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={variant.image || "/placeholder.svg"} alt={variant.name} fill className="object-cover" />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{variant.name}</h3>
                    <p className="text-muted-foreground mb-4">{variant.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <QuoteButton>Request Quote</QuoteButton>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Contact Sales</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Applications</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Applications</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Discover how our {product.name} are used across different industries.
              </p>
            </div>

            <Tabs defaultValue={product.applications[0].industry.toLowerCase().replace(/\s+/g, "-")} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-3xl">
                  {product.applications.map((app, index) => (
                    <TabsTrigger key={index} value={app.industry.toLowerCase().replace(/\s+/g, "-")}>
                      {app.industry}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {product.applications.map((app, index) => (
                <TabsContent key={index} value={app.industry.toLowerCase().replace(/\s+/g, "-")}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[300px]">
                      <Image
                        src={app.image || "/placeholder.svg"}
                        alt={app.industry}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{app.industry} Applications</h3>
                      <p className="text-muted-foreground mb-6">
                        Our {product.name} are widely used in the {app.industry} industry for various applications.
                      </p>
                      <h4 className="font-medium mb-2">Common Uses:</h4>
                      <ul className="space-y-2 mb-6">
                        {app.uses.map((use, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{use}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="bg-green-600 hover:bg-green-700" asChild>
                        <Link href={`/industries/${app.industry.toLowerCase().replace(/\s+/g, "-")}`}>
                          Learn More About {app.industry} Solutions
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-green-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Order {product.name}?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-green-50">
              Contact our team today to discuss your specific requirements or request a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <QuoteButton className="bg-white text-green-600 hover:bg-green-50">Request a Quote</QuoteButton>
              <Button variant="outline" className="text-white border-white hover:bg-green-700" asChild>
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Back to Products */}
        <section className="py-8 md:py-12">
          <div className="container">
            <Button variant="link" className="text-green-600" asChild>
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Products
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
