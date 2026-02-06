"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 mb-4">
          <CheckCircle2 className="h-8 w-8 text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you within 24 hours.</p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6 bg-transparent">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" required placeholder="John" className="min-h-[48px]" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" required placeholder="Smith" className="min-h-[48px]" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="min-h-[48px]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="01onal 234 567" className="min-h-[48px]" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">What are you interested in?</Label>
        <Select name="subject">
          <SelectTrigger className="min-h-[48px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="garage-doors">Garage Doors</SelectItem>
            <SelectItem value="awnings">Awnings</SelectItem>
            <SelectItem value="both">Both</SelectItem>
            <SelectItem value="other">Other / General Enquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project or ask a question..."
          rows={5}
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-h-[48px]"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
