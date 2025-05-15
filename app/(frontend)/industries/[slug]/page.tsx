import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteButton from "@/components/quote-button"

// Industry data
const industries = {
  agriculture: {
    name: "Agriculture",
    title: "Agricultural Packaging Solutions",
    description: "Sustainable and durable WPP bags for seeds, grains, animal feed, and agricultural products.",
    image: "/placeholder.svg?height=500&width=800",
    content: `
      The agricultural sector demands packaging that can withstand harsh conditions while protecting valuable products from moisture, pests, and contamination. Our agricultural WPP bags are specifically designed to meet these challenges.
      
      Our agricultural packaging solutions feature breathable materials that prevent moisture buildup while maintaining product integrity. The high tensile strength ensures durability during transportation and storage, even in challenging environments.
      
      We offer customized printing options to showcase your brand and product information clearly, enhancing recognition in the marketplace. Our bags are available in various sizes to accommodate different agricultural products, from small seed packages to large grain and feed containers.
    `,
    features: [
      "Moisture-resistant materials to protect against humidity",
      "Breathable fabric to prevent condensation",
      "UV protection for extended outdoor storage",
      "High tensile strength for heavy agricultural products",
      "Customizable sizes from 5kg to 50kg capacity",
      "Food-grade materials available for edible products",
    ],
    products: [
      {
        name: "Standard WPP Grain Bags",
        description: "Durable bags ideal for storing and transporting grains, seeds, and animal feed.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Ventilated Produce Bags",
        description: "Breathable bags with mesh sections for fresh produce that requires air circulation.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Heavy-Duty Fertilizer Bags",
        description: "Extra-strong bags designed specifically for fertilizers and soil amendments.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    caseStudy: {
      title: "GreenGrow Farms Improves Product Freshness",
      content:
        "GreenGrow Farms, a major organic grain producer, switched to our ventilated WPP bags and reported a 30% reduction in moisture-related issues during storage and transportation. The custom printing also helped strengthen their brand recognition in retail environments.",
      image: "/placeholder.svg?height=300&width=500",
    },
  },
  chemicals: {
    name: "Fertilizer & Chemicals",
    title: "Chemical & Fertilizer Packaging Solutions",
    description: "Specialized WPP bags with enhanced barrier properties for safe chemical containment.",
    image: "/placeholder.svg?height=500&width=800",
    content: `
      Chemical and fertilizer products require packaging that provides exceptional containment, protection, and safety features. Our specialized WPP bags for this industry are engineered to meet strict regulatory requirements while ensuring product integrity.
      
      We offer laminated WPP bags with enhanced barrier properties to prevent moisture ingress and chemical leakage. Our valve bags feature self-closing systems that maintain a hermetic seal after filling, protecting both the product and the environment.
      
      All our chemical packaging solutions undergo rigorous testing to ensure compliance with international safety standards. We also provide UN-certified bags for hazardous materials that require specialized containment during transportation and storage.
    `,
    features: [
      "Enhanced barrier properties to prevent chemical leakage",
      "Moisture-resistant lamination for extended shelf life",
      "UN certification available for hazardous materials",
      "Chemical-resistant materials for product integrity",
      "Valve bag options for easy filling and secure closure",
      "Clear hazard labeling and identification options",
    ],
    products: [
      {
        name: "Laminated Chemical Bags",
        description: "Premium bags with enhanced barrier properties for chemical products.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "UN-Certified Hazardous Material Bags",
        description: "Specialized bags that meet international standards for transporting hazardous materials.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Valve Fertilizer Bags",
        description: "Self-closing valve bags designed for efficient filling and secure containment of fertilizers.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    caseStudy: {
      title: "ChemSolutions Reduces Environmental Impact",
      content:
        "ChemSolutions, a leading fertilizer manufacturer, implemented our specialized valve bags and reported a 40% reduction in product spillage during transportation and handling. This not only improved safety but also significantly reduced their environmental footprint.",
      image: "/placeholder.svg?height=300&width=500",
    },
  },
  construction: {
    name: "Cement & Construction",
    title: "Construction Material Packaging",
    description: "Heavy-duty WPP bags designed for cement, sand, and building materials.",
    image: "/placeholder.svg?height=500&width=800",
    content: `
      The construction industry demands packaging that can withstand extreme weight, abrasion, and rough handling. Our construction material bags are engineered with reinforced weaves and specialized coatings to meet these demanding requirements.
      
      We offer high-strength WPP bags capable of containing heavy materials like cement, sand, and aggregates without tearing or breaking. Our block bottom bags provide enhanced stability during stacking and transportation, reducing the risk of toppling and product loss.
      
      For moisture-sensitive construction materials, we provide laminated options with superior water resistance. All our construction bags feature easy-open systems and are designed for compatibility with automated filling equipment used in modern production facilities.
    `,
    features: [
      "Reinforced weave for exceptional tensile strength",
      "Abrasion-resistant coating for rough materials",
      "Block bottom design for enhanced stability",
      "Moisture barrier for water-sensitive materials",
      "Compatible with automated filling systems",
      "UV protection for outdoor storage on construction sites",
    ],
    products: [
      {
        name: "Heavy-Duty Cement Bags",
        description: "Extra-strong bags specifically designed for cement and similar construction materials.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Block Bottom Construction Bags",
        description: "Stable, self-standing bags ideal for sand, aggregates, and other building materials.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Moisture-Resistant Plaster Bags",
        description: "Laminated bags that protect moisture-sensitive construction materials.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    caseStudy: {
      title: "BuildRight Improves Efficiency with Custom Packaging",
      content:
        "BuildRight Construction Materials switched to our block bottom construction bags and experienced a 25% increase in filling efficiency and a significant reduction in bag breakage during handling and transportation. The improved packaging also enhanced their brand image in the market.",
      image: "/placeholder.svg?height=300&width=500",
    },
  },
  food: {
    name: "Food Packaging",
    title: "Food-Grade Packaging Solutions",
    description: "Safe, compliant WPP bags for food products that maintain freshness and quality.",
    image: "/placeholder.svg?height=500&width=800",
    content: `
      Food packaging requires the highest standards of safety, cleanliness, and regulatory compliance. Our food-grade WPP bags are manufactured in controlled environments and meet all international food safety standards.
      
      We offer a range of food-safe packaging solutions with various barrier properties to maintain product freshness and extend shelf life. Our bags are designed to protect against moisture, oxygen, light, and contaminants that could affect food quality.
      
      For consumer-facing products, we provide high-quality printing options that showcase your brand and product information while complying with food labeling regulations. Our food packaging solutions are available with features like resealable closures and easy-open systems for enhanced consumer convenience.
    `,
    features: [
      "Food-grade materials compliant with FDA and EU regulations",
      "Oxygen and moisture barriers to maintain freshness",
      "Clean manufacturing in controlled environments",
      "Available with antimicrobial properties",
      "Resealable options for consumer convenience",
      "High-quality printing for brand visibility and regulatory information",
    ],
    products: [
      {
        name: "Food-Grade Rice and Grain Bags",
        description: "Clean, safe bags designed specifically for rice, flour, and other grain products.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Consumer Food Packaging",
        description: "Retail-ready bags with high-quality printing and convenient features for end consumers.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Bulk Food Ingredient Bags",
        description: "Large-capacity bags for bulk food ingredients used in commercial food production.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    caseStudy: {
      title: "Global Foods Extends Product Shelf Life",
      content:
        "Global Foods, a major rice distributor, implemented our food-grade barrier bags and achieved a 40% increase in product shelf life. The enhanced packaging also improved their brand perception among consumers, leading to increased market share.",
      image: "/placeholder.svg?height=300&width=500",
    },
  },
  retail: {
    name: "Retail & Bulk Trade",
    title: "Retail Packaging Solutions",
    description: "Attractive, branded WPP bags that enhance product visibility in retail environments.",
    image: "/placeholder.svg?height=500&width=800",
    content: `
      Retail packaging must balance functionality with visual appeal to attract consumers and represent your brand effectively. Our retail WPP packaging solutions are designed to stand out on store shelves while providing the protection your products need.
      
      We offer high-quality BOPP printed bags with vibrant colors and sharp graphics that showcase your brand identity. Our retail packaging includes consumer-friendly features like handles, resealable closures, and transparent windows for product visibility.
      
      For bulk trade applications, we provide durable, cost-effective solutions that maintain your professional image while offering the strength needed for larger quantities. All our retail packaging can be customized to meet specific market requirements and brand guidelines.
    `,
    features: [
      "High-resolution printing up to 10 colors",
      "Glossy or matte finishes for premium appearance",
      "Optional handles for consumer convenience",
      "Transparent windows for product visibility",
      "Resealable closure options",
      "Retail-ready designs that stand upright on shelves",
    ],
    products: [
      {
        name: "BOPP Printed Retail Bags",
        description: "Visually striking bags with high-quality graphics for consumer products.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Handled Shopping Bags",
        description: "Convenient bags with integrated handles for retail environments.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Bulk Trade Packaging",
        description: "Professional, branded packaging for wholesale and bulk products.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    caseStudy: {
      title: "RetailPlus Increases Sales with Premium Packaging",
      content:
        "RetailPlus, a specialty food retailer, upgraded to our BOPP printed retail bags with transparent windows and reported a 35% increase in product sales. Customers appreciated the premium look and ability to see the product before purchase.",
      image: "/placeholder.svg?height=300&width=500",
    },
  },
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug as keyof typeof industries]

  if (!industry) {
    return {
      title: "Industry Not Found | EcoWeave Packaging",
      description: "The requested industry information could not be found.",
    }
  }

  return {
    title: `${industry.name} Packaging Solutions | EcoWeave Packaging`,
    description: industry.description,
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const industry = industries[slug as keyof typeof industries]

  if (!industry) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-20">
          <div className="container text-center">
            <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
            <p className="mb-8">The industry you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link href="/#industries">View All Industries</Link>
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
              <Badge className="mb-4">Industry Solutions</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{industry.title}</h1>
              <p className="text-lg text-muted-foreground">{industry.description}</p>
            </div>
          </div>
        </section>

        {/* Industry Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <Badge className="mb-4">{industry.name}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Overview</h2>
                <div className="space-y-4 text-muted-foreground">
                  {industry.content.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
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
                Our {industry.name.toLowerCase()} packaging solutions offer specific features designed to meet the
                unique challenges of this industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {industry.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Solutions</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended Products</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore our specialized packaging solutions designed specifically for the {industry.name.toLowerCase()}{" "}
                industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {industry.products.map((product, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
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

        {/* Case Study */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Success Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Study</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                See how our solutions have helped businesses in the {industry.name.toLowerCase()} industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="relative h-[300px]">
                <Image
                  src={industry.caseStudy.image || "/placeholder.svg"}
                  alt={industry.caseStudy.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{industry.caseStudy.title}</h3>
                <p className="text-muted-foreground mb-6">{industry.caseStudy.content}</p>
                <Button className="bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/contact">Discuss Your Requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-green-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your {industry.name} Packaging?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-green-50">
              Contact our team today to discuss your specific requirements and discover how our specialized WPP bags can
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

        {/* Back to Industries */}
        <section className="py-8 md:py-12">
          <div className="container">
            <Button variant="link" className="text-green-600" asChild>
              <Link href="/#industries">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Industries
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
