import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Award, Users, Factory, CheckCircle2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  fetchCompanyHistory,
  fetchCoreValues,
  fetchProcessSteps,
  fetchCertifications,
  fetchTeamMembers,
} from "@/lib/payload-api"

export const revalidate = 60 // Revalidate this page every 60 seconds

export const metadata = {
  title: "About EcoWeave Packaging | Our Story & Values",
  description:
    "Learn about EcoWeave Packaging's journey, our commitment to sustainable WPP bag manufacturing, and our core values that drive innovation in eco-friendly packaging solutions.",
}

export default async function AboutPage() {
  // Fetch data from Payload CMS
  const companyHistory = await fetchCompanyHistory()
  const coreValues = await fetchCoreValues()
  const processSteps = await fetchProcessSteps()
  const certifications = await fetchCertifications()
  const teamMembers = await fetchTeamMembers()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story & Mission</h1>
              <p className="text-lg text-muted-foreground">
                Discover the journey of EcoWeave Packaging, from our humble beginnings to becoming a leading
                manufacturer of sustainable WPP bags.
              </p>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src={companyHistory?.image?.url || "/placeholder.svg?height=400&width=600"}
                  alt="EcoWeave Packaging history"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <Badge className="mb-4">Our History</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {companyHistory?.title || "From Vision to Reality"}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  {companyHistory?.content ? (
                    <div dangerouslySetInnerHTML={{ __html: companyHistory.content }} />
                  ) : (
                    <>
                      <p>
                        Founded in 2005, EcoWeave Packaging began with a simple mission: to create packaging solutions
                        that balance durability with environmental responsibility.
                      </p>
                      <p>
                        Our founder, Sarah Johnson, recognized the growing need for sustainable alternatives to
                        traditional packaging in industrial applications. Starting with a small facility and just five
                        employees, we focused on developing woven polypropylene bags that reduced environmental impact
                        without compromising on strength.
                      </p>
                      <p>
                        Today, EcoWeave has grown into a global operation with manufacturing facilities in three
                        countries, serving clients across six continents. Despite our growth, we remain committed to our
                        founding principles of sustainability, innovation, and exceptional quality.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Core Values</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our values form the foundation of everything we do at EcoWeave Packaging.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.length > 0
                ? coreValues.map((value) => {
                    // Dynamically import the icon
                    const IconComponent =
                      {
                        Leaf,
                        Award,
                        Factory,
                        Users,
                        Shield: CheckCircle2,
                        Recycle: Leaf,
                        Package2: Factory,
                        Truck: Factory,
                      }[value.icon as keyof typeof import("lucide-react")] || Leaf

                    return (
                      <Card key={value.id} className="text-center p-6">
                        <CardContent className="pt-6">
                          <div className="flex justify-center">
                            <IconComponent className="h-10 w-10 text-green-600 mb-4" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </CardContent>
                      </Card>
                    )
                  })
                : // Fallback values if none are in the CMS
                  [
                    {
                      title: "Sustainability",
                      description:
                        "We're committed to minimizing environmental impact through responsible sourcing and manufacturing practices.",
                      icon: <Leaf className="h-10 w-10 text-green-600 mb-4" />,
                    },
                    {
                      title: "Durability",
                      description:
                        "We never compromise on the quality and strength of our products, ensuring they perform reliably in all conditions.",
                      icon: <Award className="h-10 w-10 text-green-600 mb-4" />,
                    },
                    {
                      title: "Innovation",
                      description:
                        "We continuously explore new materials, techniques, and designs to improve our products and processes.",
                      icon: <Factory className="h-10 w-10 text-green-600 mb-4" />,
                    },
                    {
                      title: "Client Satisfaction",
                      description:
                        "We measure our success by the success of our clients and their satisfaction with our products and service.",
                      icon: <Users className="h-10 w-10 text-green-600 mb-4" />,
                    },
                  ].map((value, index) => (
                    <Card key={index} className="text-center p-6">
                      <CardContent className="pt-6">
                        <div className="flex justify-center">{value.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Create Quality</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our meticulous manufacturing process ensures consistent quality in every WPP bag we produce.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {processSteps.length > 0
                  ? processSteps.map((step) => (
                      <div key={step.id} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="font-bold text-green-600">{step.step}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))
                  : // Fallback process steps if none are in the CMS
                    [
                      {
                        step: 1,
                        title: "Raw Material Selection",
                        description:
                          "We source high-quality polypropylene granules that meet strict quality standards for strength and durability.",
                      },
                      {
                        step: 2,
                        title: "Extrusion Process",
                        description:
                          "The granules are melted and extruded into thin, flat tapes that are stretched to increase tensile strength.",
                      },
                      {
                        step: 3,
                        title: "Weaving",
                        description:
                          "The tapes are woven into fabric sheets using advanced circular looms for consistent quality and strength.",
                      },
                      {
                        step: 4,
                        title: "Cutting & Stitching",
                        description:
                          "The woven fabric is cut to size, printed if required, and stitched to form the final bag product.",
                      },
                      {
                        step: 5,
                        title: "Quality Control & Packaging",
                        description:
                          "Each bag undergoes rigorous quality checks before being packaged and prepared for shipment.",
                      },
                    ].map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="font-bold text-green-600">{step.step}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="EcoWeave manufacturing process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Certifications</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Assurance</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our commitment to quality and sustainability is backed by international certifications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {certifications.length > 0
                ? certifications.map((cert) => (
                    <Card key={cert.id} className="text-center p-6">
                      <CardContent className="pt-6">
                        {cert.logo ? (
                          <div className="relative h-10 w-10 mx-auto mb-4">
                            <Image
                              src={cert.logo.url || "/placeholder.svg"}
                              alt={cert.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-4" />
                        )}
                        <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                        <p className="text-muted-foreground">{cert.description}</p>
                      </CardContent>
                    </Card>
                  ))
                : // Fallback certifications if none are in the CMS
                  [
                    { name: "ISO 9001:2015", description: "Quality Management System" },
                    { name: "ISO 14001:2015", description: "Environmental Management" },
                    { name: "ISO 45001:2018", description: "Occupational Health & Safety" },
                    { name: "GOTS Certified", description: "Global Organic Textile Standard" },
                  ].map((cert, index) => (
                    <Card key={index} className="text-center p-6">
                      <CardContent className="pt-6">
                        <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                        <p className="text-muted-foreground">{cert.description}</p>
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Meet the experienced professionals guiding EcoWeave Packaging's vision and operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.length > 0
                ? teamMembers.map((person) => (
                    <Card key={person.id} className="overflow-hidden">
                      <div className="relative h-64">
                        <Image
                          src={person.image?.url || "/placeholder.svg"}
                          alt={person.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold">{person.name}</h3>
                        <p className="text-green-600 mb-2">{person.position}</p>
                        <p className="text-muted-foreground">{person.bio}</p>
                      </CardContent>
                    </Card>
                  ))
                : // Fallback team members if none are in the CMS
                  [
                    {
                      name: "Sarah Johnson",
                      position: "Founder & CEO",
                      bio: "With over 20 years of experience in sustainable packaging, Sarah leads our company's strategic vision and innovation initiatives.",
                      image: "/placeholder.svg?height=300&width=300",
                    },
                    {
                      name: "Michael Rodriguez",
                      position: "Chief Operations Officer",
                      bio: "Michael oversees our global manufacturing operations, ensuring efficiency and adherence to our quality and sustainability standards.",
                      image: "/placeholder.svg?height=300&width=300",
                    },
                    {
                      name: "Priya Sharma",
                      position: "Head of Research & Development",
                      bio: "Priya leads our R&D team in developing innovative, eco-friendly packaging solutions that meet evolving market needs.",
                      image: "/placeholder.svg?height=300&width=300",
                    },
                  ].map((person, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-64">
                        <Image
                          src={person.image || "/placeholder.svg"}
                          alt={person.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold">{person.name}</h3>
                        <p className="text-green-600 mb-2">{person.position}</p>
                        <p className="text-muted-foreground">{person.bio}</p>
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
