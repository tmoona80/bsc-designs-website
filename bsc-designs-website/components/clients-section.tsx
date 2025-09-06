"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const portfolioItems = [
    {
      image: "/images/next-up-sports-team.jpg",
      title: "Next Up Sports",
      subtitle: "Team Uniforms",
      alt: "Next Up Sports Team",
    },
    {
      image: "/images/trendsetters-academy-uniforms.jpg",
      title: "Trendsetters",
      subtitle: "Academy Uniforms",
      alt: "Trendsetters Academy",
    },
    {
      image: "/images/beaute-corporate-hoodies.jpg",
      title: "Beauté Maintenant",
      subtitle: "Corporate Hoodies",
      alt: "Beauté Maintenant Hoodies",
    },
    {
      image: "/images/ufr-custom-hoodie.jpg",
      title: "UFR Supporter",
      subtitle: "Custom Hoodies",
      alt: "UFR Custom Design",
    },
    {
      image: "/images/health-tshirt-dtf.jpg",
      title: "Integrative Health",
      subtitle: "DTF T-Shirts",
      alt: "Integrative Health DTF Printing",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, portfolioItems.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.max(1, portfolioItems.length - 2)) % Math.max(1, portfolioItems.length - 2),
    )
  }

  return (
    <section id="portfolio" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Trusted by <span className="text-[#30a68a]">Leading Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with major corporations, sports teams, and local businesses across Toronto.
          </p>
        </div>

        <div className="relative">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Customer Projects</h3>

          {/* Gallery Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div key={index} className="flex-none w-1/3 bg-white rounded-xl p-6 shadow-sm">
                  <div className="relative h-80 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
            disabled={currentIndex >= portfolioItems.length - 3}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, portfolioItems.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
