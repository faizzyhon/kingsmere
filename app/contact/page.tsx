import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Kingsmere Home Improvements",
  description:
    "Get in touch with Kingsmere Home Improvements. Call us, email us, or fill out our contact form for a free quote on garage doors and awnings.",
  keywords: "contact Kingsmere, garage door quote, awning quote, home improvements contact",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["01234 567 890"],
    action: { label: "Call us now", href: "tel:01234567890" },
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@kingsmere.co.uk"],
    action: { label: "Send email", href: "mailto:info@kingsmere.co.uk" },
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 High Street", "London, UK", "SW1A 1AA"],
    action: null,
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon-Fri: 8am - 6pm", "Sat: 9am - 4pm", "Sun: Closed"],
    action: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Contact Us"
          description="Have a question or ready to get started? We're here to help. Reach out to our friendly team and we'll get back to you as soon as possible."
          breadcrumbs={[{ name: "Contact", href: "/contact" }]}
        />

        <section className="py-12 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-xl font-bold text-foreground font-serif mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <Card key={item.title} className="border-0 shadow-md">
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 flex-shrink-0">
                          <item.icon className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          {item.details.map((detail, index) => (
                            <p key={index} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                          {item.action && (
                            <a
                              href={item.action.href}
                              className="inline-block mt-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                              {item.action.label}
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 aspect-video rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  <img src="/uk-map-location-pin-london.jpg" alt="Our location" className="h-full w-full object-cover" />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 lg:p-8">
                    <h2 className="text-xl font-bold text-foreground font-serif mb-2">Send Us a Message</h2>
                    <p className="text-muted-foreground mb-6">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl font-serif">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  question: "How long does installation take?",
                  answer:
                    "Most garage door installations are completed in a single day. Awnings typically take 2-4 hours depending on the size and complexity.",
                },
                {
                  question: "Do you offer free quotes?",
                  answer:
                    "Yes! We offer completely free, no-obligation quotes. One of our surveyors will visit your property to assess your requirements and provide a detailed quotation.",
                },
                {
                  question: "What areas do you cover?",
                  answer:
                    "We provide installation services across the entire UK. Contact us to confirm availability in your area.",
                },
                {
                  question: "What warranty do you offer?",
                  answer:
                    "All our garage doors come with a 10-year warranty. Awnings include a 5-year warranty. Both cover parts and labour.",
                },
              ].map((faq) => (
                <Card key={faq.question} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
