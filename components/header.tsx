"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-4 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
      <div className="flex items-center gap-3 text-slate-800">
        <Image src="/images/logo.avif" alt="BSC Designs" width={200} height={66} className="h-16 w-auto" />
      </div>

      {/* Desktop Navigation - Updated styling to match modern design */}
      <div className="flex flex-1 justify-end gap-6">
        <nav className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium leading-normal transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium leading-normal transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium leading-normal transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium leading-normal transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium leading-normal transition-colors"
          >
            Contact
          </button>
        </nav>
        <button
          onClick={() => scrollToSection("contact")}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-[#1172d4] text-white text-sm font-bold leading-normal tracking-wide shadow-md hover:bg-blue-700 transition-all"
        >
          <span className="truncate">Request a Quote</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#f0f2f4] py-4 px-10">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-600 hover:text-blue-600 text-sm font-medium leading-normal transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-600 hover:text-blue-600 text-sm font-medium leading-normal transition-colors text-left"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-blue-600 text-sm font-medium leading-normal transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-600 hover:text-blue-600 text-sm font-medium leading-normal transition-colors text-left"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-blue-600 text-sm font-medium leading-normal transition-colors text-left"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-[#1172d4] text-white text-sm font-bold leading-normal tracking-wide shadow-md hover:bg-blue-700 transition-all mt-4"
            >
              <span className="truncate">Request a Quote</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
