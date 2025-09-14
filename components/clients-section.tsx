"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ClientsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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
    {
      image: "/images/wedding-photography.png",
      title: "Wedding Photography",
      subtitle: "Bridal Party Session",
      alt: "Wedding Photography Services",
    },
    {
      image: "/images/family-photography.png",
      title: "Family Photography",
      subtitle: "Children's Portrait Session",
      alt: "Family Photography Services",
    },
    {
      image: "/images/fashion-photography.png",
      title: "Fashion Photography",
      subtitle: "Product & Lifestyle Shoot",
      alt: "Fashion Photography Services",
    },
  ]

  const scrollToSlide = (direction: "next" | "prev") => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const isMobile = window.innerWidth < 768
    const slidesPerView = isMobile ? 1 : 3
    const slideWidth = container.offsetWidth / slidesPerView

    if (direction === "next") {
      const maxSlide = portfolioItems.length - slidesPerView
      const nextSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1
      setCurrentSlide(nextSlide)
      container.scrollTo({
        left: nextSlide * slideWidth,
        behavior: "smooth",
      })
    } else {
      const maxSlide = portfolioItems.length - slidesPerView
      const prevSlide = currentSlide <= 0 ? maxSlide : currentSlide - 1
      setCurrentSlide(prevSlide)
      container.scrollTo({
        left: prevSlide * slideWidth,
        behavior: "smooth",
      })
    }
  }

  const goToSlide = (index: number) => {
    if (!scrollContainerRef.current) return

    setCurrentSlide(index)
    const isMobile = window.innerWidth < 768
    const slidesPerView = isMobile ? 1 : 3
    const slideWidth = scrollContainerRef.current.offsetWidth / slidesPerView
    scrollContainerRef.current.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    })
  }

  const getTotalSlides = () => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768
      const slidesPerView = isMobile ? 1 : 3
      return Math.max(1, portfolioItems.length - slidesPerView + 1)
    }
    return Math.max(1, portfolioItems.length - 2)
  }

  const totalSlides = getTotalSlides()

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

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-hidden scroll-smooth gap-4 md:gap-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {portfolioItems.map((item, index) => (
                <div key={index} className="flex-none w-full md:w-1/3 min-w-0">
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-64 md:h-80 mb-4 md:mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm md:text-base text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSlide("prev")}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 md:p-2 shadow-lg hover:bg-white transition-colors z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>

            <button
              onClick={() => scrollToSlide("next")}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 md:p-2 shadow-lg hover:bg-white transition-colors z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-[#30a68a]" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
