"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      style={{
        background: "#56756e",
        minHeight: "70vh",
        backgroundColor: "#56756e",
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          zIndex: 1,
        }}
      >
        <span
          className="font-bold whitespace-nowrap"
          style={{
            fontSize: "clamp(10rem, 20vw, 20rem)",
            opacity: 0.08,
            transform: "none",
            userSelect: "none",
            pointerEvents: "none",
            color: "rgba(255, 255, 255, 0.08)",
          }}
          aria-hidden="true"
        >
          BSC Designs
        </span>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">Custom Merchandise Printing</h1>

          <p className="text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto text-white">
            High-quality printing for your brand. From apparel to accessories, we've got you covered.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
