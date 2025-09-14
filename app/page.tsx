import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProductsShowcase from "@/components/products-showcase"
import ServicesSection from "@/components/services-section"
import ClientsSection from "@/components/clients-section"
import ContactSection from "@/components/contact-section-formspree"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ProductsShowcase />
          <ServicesSection />
          <ClientsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
