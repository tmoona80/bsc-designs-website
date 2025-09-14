"use client"

import { Badge, Shield, Star } from "lucide-react"
import Image from "next/image"

export default function ProductsShowcase() {
  const products = [
    {
      name: "T-Shirts",
      image: "/images/black-tshirt-perfect-match.png",
      description: "Premium cotton tees for any design",
    },
    {
      name: "Sweatshirts",
      image: "/images/new-gray-sweatshirt.png",
      description: "Cozy hoodies and crewnecks",
    },
    {
      name: "Joggers",
      image: "/images/gray-joggers-transparent.png",
      description: "Comfortable athletic wear",
    },
    {
      name: "Polo Shirts",
      image: "/images/pink-polo-transparent.png",
      description: "Professional polos for corporate wear",
    },
    {
      name: "Dress Shirts",
      image: "/images/white-dress-shirt-transparent.png",
      description: "Crisp button-downs for business attire",
    },
    {
      name: "Vests",
      image: "/images/black-vest-transparent.png",
      description: "Quilted vests for outdoor events",
    },
    {
      name: "Hats",
      image: "/images/pink-cap-transparent.png",
      description: "Caps and beanies for branding",
    },
    {
      name: "Hoodies",
      image: "/images/black-hoodie.png",
      description: "Premium hoodies for custom designs",
    },
    {
      name: "Gift Items",
      image: "/images/gift-merchandise.png",
      description: "Mugs, notebooks & promotional items",
    },
  ]

  return (
    <section id="products" className="py-20" style={{ backgroundColor: "#f5f3f0" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">We Print On Everything</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From corporate uniforms to custom merchandise, we bring your designs to life on any product
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="text-center group">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-xl overflow-hidden group-hover:shadow-md transition-all duration-300">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          ))}
        </div>

        {/* Quality guarantee */}
        <div className="flex items-center justify-center space-x-8 pt-8 border-t border-border">
          <div className="flex items-center space-x-2 text-primary">
            <Shield className="h-6 w-6" />
            <span className="font-semibold">Premium Quality</span>
          </div>
          <div className="flex items-center space-x-2 text-primary">
            <Star className="h-6 w-6 fill-current" />
            <span className="font-semibold">5-Star Service</span>
          </div>
          <div className="flex items-center space-x-2 text-primary">
            <Badge className="h-6 w-6" />
            <span className="font-semibold">Fast Turnaround</span>
          </div>
        </div>
      </div>
    </section>
  )
}
