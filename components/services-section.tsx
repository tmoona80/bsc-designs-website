"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shirt, Palette, Scissors, Camera, Calendar, Users } from "lucide-react"

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
  {
    icon: Calendar,
    title: "Event Planning / Project Management",
    description:
      "Creating memorable events tailored to your vision. From intimate gatherings to corporate functions, we manage every detail.",
    features: [
      "Customized event concepts and detailed planning",
      "Vendor coordination and contract management",
      "On-site logistics and day-of execution",
      "Budget oversight and timeline management",
    ],
  },
  {
    icon: Users,
    title: "Training and Workshops",
    description:
      "Interactive training sessions that strengthen leadership, improve team collaboration, and build essential business skills.",
    features: [
      "Customized training programs for teams and leaders",
      "Professional development workshops",
      "Interactive learning with real-world application",
    ],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg rounded-2xl overflow-hidden flex flex-col"
            >
              <CardHeader className="p-6 flex-shrink-0">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#56756e] bg-opacity-20 rounded-xl flex items-center justify-center group-hover:bg-[#56756e] group-hover:bg-opacity-30 transition-colors">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                    <div className="h-16">
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6 flex-1">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start group/feature">
                        <div className="w-2 h-2 bg-[#30a68a] rounded-full mr-3 mt-2 flex-shrink-0 group-hover/feature:bg-[#56756e] transition-colors"></div>
                        <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
