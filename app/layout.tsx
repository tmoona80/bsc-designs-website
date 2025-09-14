import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Noto_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
})

export const metadata: Metadata = {
  title: "BSC Designs - Custom Printing & Apparel in Toronto",
  description:
    "Professional custom printing services in Toronto. DTF printing, screen printing, embroidery, and photography services for businesses and individuals.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${notoSans.variable} bg-gray-50`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
