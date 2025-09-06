import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shirt, Palette, Scissors, Camera } from "lucide-react"

const services = [
  {
    icon: Shirt,
    title: "DTF Printing",
    description:
      "Direct-to-Film printing for vibrant, durable designs on any fabric. Perfect for detailed graphics and small batch orders.",
    features: ["Full color printing", "Soft feel finish", "Quick turnaround", "No minimum orders"],
  },
  {
    icon: Palette,
    title: "Screen Printing",
    description:
      "Traditional screen printing for large orders with consistent, professional results. Ideal for corporate uniforms and team apparel.",
    features: ["Cost-effective for bulk", "Vibrant colors", "Durable prints", "Professional finish"],
  },
  {
    icon: Scissors,
    title: "Embroidery",
    description:
      "Premium embroidery services for a sophisticated, professional look. Perfect for corporate logos and branded apparel.",
    features: ["Premium quality", "Professional appearance", "Long-lasting", "Corporate ready"],
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Professional photography services including fashion, wedding, corporate, and product photography to complement your brand.",
    features: ["Fashion photography", "Wedding coverage", "Corporate headshots", "Product photography"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional printing solutions tailored to your needs. From single pieces to large corporate orders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg rounded-2xl overflow-hidden"
            >
              <CardHeader className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#56756e] bg-opacity-20 rounded-xl flex items-center justify-center group-hover:bg-[#56756e] group-hover:bg-opacity-30 transition-colors">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#56756e] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
