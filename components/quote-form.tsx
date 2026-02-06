"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"

const productOptions = {
  "garage-doors": [
    { value: "roller", label: "Roller Garage Doors" },
    { value: "sectional", label: "Sectional Garage Doors" },
    { value: "side-hinged", label: "Side-Hinged Garage Doors" },
    { value: "up-and-over", label: "Up & Over Garage Doors" },
    { value: "not-sure", label: "Not sure - need advice" },
  ],
  awnings: [
    { value: "retractable", label: "Retractable Awnings" },
    { value: "patio", label: "Patio Awnings" },
    { value: "commercial", label: "Commercial Awnings" },
    { value: "not-sure", label: "Not sure - need advice" },
  ],
}

export function QuoteForm() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    productCategory: "",
    productType: "",
    propertyType: "",
    timeline: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postcode: "",
    address: "",
    additionalInfo: "",
    contactPreference: "phone",
    marketingConsent: false,
  })

  const totalSteps = 3

  function updateFormData(field: string, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  function nextStep() {
    if (step < totalSteps) setStep(step + 1)
  }

  function prevStep() {
    if (step > 1) setStep(step - 1)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-xl">
        <CardContent className="p-8 lg:p-12 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/20 mb-6">
            <CheckCircle2 className="h-10 w-10 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground font-serif mb-4">Quote Request Received!</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Thank you for your interest in Kingsmere. One of our team will call you within 24 hours to discuss your
            requirements and arrange a free survey.
          </p>
          <div className="bg-muted rounded-lg p-6 max-w-sm mx-auto">
            <p className="text-sm text-muted-foreground mb-2">Your reference number:</p>
            <p className="text-xl font-bold text-foreground">KM-{Date.now().toString().slice(-6)}</p>
          </div>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setStep(1)
              setFormData({
                productCategory: "",
                productType: "",
                propertyType: "",
                timeline: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                postcode: "",
                address: "",
                additionalInfo: "",
                contactPreference: "phone",
                marketingConsent: false,
              })
            }}
            variant="outline"
            className="mt-8 bg-transparent"
          >
            Submit Another Quote Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-6 lg:p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm text-muted-foreground">
              {step === 1 && "Product Selection"}
              {step === 2 && "Your Details"}
              {step === 3 && "Additional Information"}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Product Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">What are you interested in?</h3>
                <RadioGroup
                  value={formData.productCategory}
                  onValueChange={(value) => {
                    updateFormData("productCategory", value)
                    updateFormData("productType", "") // Reset product type when category changes
                  }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <Label
                    htmlFor="garage-doors"
                    className={`flex items-center gap-4 rounded-lg border-2 p-4 cursor-pointer transition-colors ${
                      formData.productCategory === "garage-doors" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value="garage-doors" id="garage-doors" />
                    <div>
                      <span className="font-medium">Garage Doors</span>
                      <p className="text-sm text-muted-foreground">Electric roller, sectional & more</p>
                    </div>
                  </Label>
                  <Label
                    htmlFor="awnings"
                    className={`flex items-center gap-4 rounded-lg border-2 p-4 cursor-pointer transition-colors ${
                      formData.productCategory === "awnings" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value="awnings" id="awnings" />
                    <div>
                      <span className="font-medium">Awnings</span>
                      <p className="text-sm text-muted-foreground">Retractable, patio & commercial</p>
                    </div>
                  </Label>
                </RadioGroup>
              </div>

              {formData.productCategory && (
                <div>
                  <Label htmlFor="productType" className="text-base font-medium">
                    Which type interests you?
                  </Label>
                  <Select value={formData.productType} onValueChange={(value) => updateFormData("productType", value)}>
                    <SelectTrigger className="mt-2 min-h-[48px]">
                      <SelectValue placeholder="Select a product type" />
                    </SelectTrigger>
                    <SelectContent>
                      {productOptions[formData.productCategory as keyof typeof productOptions]?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="propertyType" className="text-base font-medium">
                    Property Type
                  </Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => updateFormData("propertyType", value)}
                  >
                    <SelectTrigger className="mt-2 min-h-[48px]">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="detached">Detached House</SelectItem>
                      <SelectItem value="semi-detached">Semi-Detached House</SelectItem>
                      <SelectItem value="terraced">Terraced House</SelectItem>
                      <SelectItem value="bungalow">Bungalow</SelectItem>
                      <SelectItem value="flat">Flat/Apartment</SelectItem>
                      <SelectItem value="commercial">Commercial Property</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeline" className="text-base font-medium">
                    When do you need this?
                  </Label>
                  <Select value={formData.timeline} onValueChange={(value) => updateFormData("timeline", value)}>
                    <SelectTrigger className="mt-2 min-h-[48px]">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="1-3-months">1-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="just-looking">Just researching</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.productCategory}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px]"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Your Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Your Contact Details</h3>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    required
                    placeholder="John"
                    className="min-h-[48px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    required
                    placeholder="Smith"
                    className="min-h-[48px]"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    required
                    placeholder="john@example.com"
                    className="min-h-[48px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    required
                    placeholder="07onal 123 456"
                    className="min-h-[48px]"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="postcode">Postcode *</Label>
                  <Input
                    id="postcode"
                    value={formData.postcode}
                    onChange={(e) => updateFormData("postcode", e.target.value)}
                    required
                    placeholder="SW1A 1AA"
                    className="min-h-[48px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address (optional)</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                    placeholder="123 High Street"
                    className="min-h-[48px]"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" onClick={prevStep} variant="outline" className="min-h-[48px] bg-transparent">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.email ||
                    !formData.phone ||
                    !formData.postcode
                  }
                  className="bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px]"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Additional Information</h3>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Tell us more about your project (optional)</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                  placeholder="Any specific requirements, dimensions, colour preferences, or questions you have..."
                  rows={4}
                  className="resize-none"
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Preferred contact method</Label>
                <RadioGroup
                  value={formData.contactPreference}
                  onValueChange={(value) => updateFormData("contactPreference", value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="phone" id="phone-pref" />
                    <Label htmlFor="phone-pref" className="cursor-pointer">
                      Phone
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="email" id="email-pref" />
                    <Label htmlFor="email-pref" className="cursor-pointer">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="either" id="either-pref" />
                    <Label htmlFor="either-pref" className="cursor-pointer">
                      Either
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="marketing"
                  checked={formData.marketingConsent}
                  onCheckedChange={(checked) => updateFormData("marketingConsent", checked as boolean)}
                />
                <Label htmlFor="marketing" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                  I'd like to receive occasional updates about special offers and new products from Kingsmere. You can
                  unsubscribe at any time.
                </Label>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" onClick={prevStep} variant="outline" className="min-h-[48px] bg-transparent">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold min-h-[48px] px-8"
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center pt-4">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </a>
                . We'll never share your details with third parties.
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
