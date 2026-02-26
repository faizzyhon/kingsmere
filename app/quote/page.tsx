import type { Metadata } from "next"
import { Shield, Clock, Award, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { PageHeader } from "@/components/page-header"
import { QuoteForm } from "@/components/quote-form"

export const metadata: Metadata = {
  title: "Free Brochure & Survey | Kingsmere Home Improvements",
  description:
    "Request your free brochure or book a free, no-obligation home survey for electric roller garage doors or awnings from Kingsmere Home Improvements.",
  keywords: "free brochure, free survey, garage door quote, awning quote, home improvement quote UK",
}

const benefits = [
  {
    icon: CheckCircle2,
    title: "Free Survey",
    description: "We'll visit your property at no cost",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Quote delivered within 48 hours",
  },
  {
    icon: Shield,
    title: "No Obligation",
    description: "No pressure, no commitment required",
  },
  {
    icon: Award,
    title: "Price Match",
    description: "We'll match any like-for-like quote",
  },
]

export default function QuotePage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Free Brochure & Survey"
          description="Request a free brochure or book a free, no-obligation home survey. Complete the form below and one of our team will be in touch. No pressure - just honest advice."
          breadcrumbs={[{ name: "Free Brochure & Survey", href: "/quote" }]}
        />

        {/* Benefits Bar */}
        <section className="py-6 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary-foreground">{benefit.title}</p>
                    <p className="text-xs text-secondary-foreground/80 hidden sm:block">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <QuoteForm />
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl font-serif mb-4">
                What Happens Next?
              </h2>
              <div className="grid gap-8 md:grid-cols-3 mt-8">
                {[
                  {
                    step: "1",
                    title: "We Call You",
                    description: "Within 24 hours of receiving your enquiry, we'll call to discuss your requirements.",
                  },
                  {
                    step: "2",
                    title: "Free Survey",
                    description: "We'll arrange a convenient time to visit your property and take measurements.",
                  },
                  {
                    step: "3",
                    title: "Detailed Quote",
                    description:
                      "You'll receive a comprehensive quote within 48 hours of the survey - no hidden costs.",
                  },
                ].map((item) => (
                  <div key={item.step} className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
