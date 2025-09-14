import { Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BSC Designs</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Your one-stop shop for custom merchandise printing.</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <a
                href="mailto:info@bscdesigns.ca"
                className="flex items-center space-x-2 hover:text-white transition-colors"
                aria-label="Email us"
              >
                <Mail size={20} />
                <span>Email: info@bscdesigns.ca</span>
              </a>
              <a
                href="tel:+14167883355"
                className="flex items-center space-x-2 hover:text-white transition-colors"
                aria-label="Call us"
              >
                <Phone size={20} />
                <span>Phone: 416-788-3355</span>
              </a>
              <p className="text-sm">Address: Toronto, ON, Canada</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/bsc.designs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 BSC Designs. All rights reserved. |
            <a href="#" className="hover:text-white ml-1">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-white ml-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
