"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string

    try {
      const response = await fetch("https://formspree.io/f/xqadopkq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          service,
          message,
          _subject: `New Quote Request from ${name} - BSC Designs`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (err) {
      setError(
        "There was an error submitting your request. Please try again or contact us directly at info@bscdesigns.ca",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Let's create something amazing together. Get a free quote for your custom merchandise today.
        </p>

        {!showForm ? (
          <Button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Request a Quote
          </Button>
        ) : (
          <Card className="max-w-2xl mx-auto mt-8">
            <CardHeader>
              <CardTitle>Get a Quote</CardTitle>
              <CardDescription>
                Tell us about your project and we'll get back to you within 1-2 business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your quote request has been sent successfully. We'll get back to you within 1-2 business days with a
                    detailed quote.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setShowForm(false)
                      setError("")
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-4">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" name="company" placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="DTF Printing">DTF Printing</option>
                      <option value="Screen Printing">Screen Printing</option>
                      <option value="Embroidery">Embroidery</option>
                      <option value="Photography">Photography</option>
                      <option value="Event Planning / Project Management">Event Planning / Project Management</option>
                      <option value="Training and Workshops">Training and Workshops</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Consultation">Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, quantity needed, timeline, design requirements, etc."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Get Quote"}
                    </Button>
                  </div>

                  <div className="text-center text-sm text-gray-600 mt-4">
                    <p>Or contact us directly:</p>
                    <p>
                      <a href="mailto:info@bscdesigns.ca" className="text-blue-600 hover:underline">
                        info@bscdesigns.ca
                      </a>
                      {" | "}
                      <a href="tel:+14167883355" className="text-blue-600 hover:underline">
                        (416) 788-3355
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
