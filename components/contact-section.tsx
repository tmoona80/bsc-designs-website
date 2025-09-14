"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Copy, Check } from "lucide-react"

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [emailContent, setEmailContent] = useState("")
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string

    const emailText = `To: info@bscdesigns.ca, 01timsolomon@gmail.com
Subject: Quote Request from ${name} - ${service}

New quote request from BSC Designs website:

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Service: ${service}

Project Details:
${message}

---
This quote request was submitted through the BSC Designs website.`

    setEmailContent(emailText)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quote Request Ready!</h3>
                  <p className="text-gray-600 mb-6">
                    Your quote request has been prepared. Please copy the email content below and send it to us:
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg text-left mb-4 max-h-64 overflow-y-auto">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap">{emailContent}</pre>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button onClick={copyToClipboard} className="bg-blue-600 hover:bg-blue-700">
                      {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                      {copied ? "Copied!" : "Copy Email"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false)
                        setShowForm(false)
                        setEmailContent("")
                      }}
                    >
                      New Quote
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 mt-4">
                    After copying, paste this into your email client and send to get your quote within 1-2 business
                    days.
                  </p>
                </div>
              ) : (
                // Existing code for form
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      {isSubmitting ? "Preparing..." : "Get Quote"}
                    </Button>
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
