import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { fetchContactInfo, fetchFAQs } from "@/lib/payload-api"

export const revalidate = 60 // Revalidate this page every 60 seconds

export const metadata = {
  title: "Contact EcoWeave Packaging | Get in Touch",
  description:
    "Contact EcoWeave Packaging for inquiries about our sustainable WPP bags, request quotes, or discuss custom packaging solutions for your business needs.",
}

export default async function ContactPage() {
  // Fetch data from Payload CMS
  const contactInfo = await fetchContactInfo()
  const faqs = await fetchFAQs()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have questions about our products or need a custom packaging solution? Our team is ready to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and our team will get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to us directly through any of these channels.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo?.phones && contactInfo.phones.length > 0 && (
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          {contactInfo.phones.map((phone, index) => (
                            <p key={index} className="text-muted-foreground">
                              {phone.label ? `${phone.label}: ` : ""}
                              {phone.number}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {contactInfo?.emails && contactInfo.emails.length > 0 && (
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          {contactInfo.emails.map((email, index) => (
                            <p key={index} className="text-muted-foreground">
                              {email.label ? `${email.label}: ` : ""}
                              {email.address}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {contactInfo?.headquarters && (
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-medium">Headquarters</h3>
                          <p className="text-muted-foreground">
                            {contactInfo.headquarters.addressLine1}
                            <br />
                            {contactInfo.headquarters.addressLine2 && (
                              <>
                                {contactInfo.headquarters.addressLine2}
                                <br />
                              </>
                            )}
                            {contactInfo.headquarters.city}, {contactInfo.headquarters.state}{" "}
                            {contactInfo.headquarters.postalCode}
                            <br />
                            {contactInfo.headquarters.country}
                          </p>
                        </div>
                      </div>
                    )}

                    {contactInfo?.operatingHours && contactInfo.operatingHours.length > 0 && (
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-medium">Operating Hours</h3>
                          {contactInfo.operatingHours.map((hours, index) => (
                            <p key={index} className="text-muted-foreground">
                              {hours.days}: {hours.hours}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {contactInfo?.globalOffices && (
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-medium">Global Offices</h3>
                          <div
                            className="text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: contactInfo.globalOffices }}
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Location</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Visit our headquarters or manufacturing facility.
              </p>
            </div>

            <div className="h-[400px] bg-slate-200 rounded-lg flex items-center justify-center">
              {contactInfo?.headquarters?.mapEmbedUrl ? (
                <iframe
                  src={contactInfo.headquarters.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EcoWeave Packaging Location"
                  className="rounded-lg"
                ></iframe>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1651271702831!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EcoWeave Packaging Location"
                  className="rounded-lg"
                ></iframe>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">FAQs</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Find quick answers to common questions about our products and services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.length > 0
                ? faqs.map((faq) => (
                    <Card key={faq.id} className="p-6">
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </Card>
                  ))
                : // Fallback FAQs if none are in the CMS
                  [
                    {
                      question: "What is the minimum order quantity?",
                      answer:
                        "Our minimum order quantity varies by product type. For standard WPP bags, the MOQ is typically 5,000 pieces, while custom printed bags may require a minimum of 10,000 pieces.",
                    },
                    {
                      question: "How long does production take?",
                      answer:
                        "Production time depends on the product type and quantity. Standard bags typically take 2-3 weeks, while custom printed bags may require 3-4 weeks. Large orders may take longer.",
                    },
                    {
                      question: "Do you offer samples before production?",
                      answer:
                        "Yes, we provide pre-production samples for approval before beginning full production runs. Sample costs may apply for custom designs but are typically credited against your final order.",
                    },
                    {
                      question: "What payment methods do you accept?",
                      answer:
                        "We accept bank transfers, letters of credit, and major credit cards. For new customers, we typically require a 30% deposit with the balance due before shipping.",
                    },
                    {
                      question: "Do you ship internationally?",
                      answer:
                        "Yes, we ship to over 50 countries worldwide. Our logistics team can arrange shipping to virtually any destination and provide competitive freight quotes.",
                    },
                    {
                      question: "Are your bags recyclable?",
                      answer:
                        "Yes, our WPP bags are recyclable. We also offer biodegradable options for environmentally conscious customers seeking more sustainable packaging solutions.",
                    },
                  ].map((faq, index) => (
                    <Card key={index} className="p-6">
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
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
