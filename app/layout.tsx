import type React from "react"
import type { Metadata, Viewport } from "next"
import { Hind_Madurai, Tiro_Devanagari_Sanskrit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const hindMadurai = Hind_Madurai({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
})

const tiroDevanagari = Tiro_Devanagari_Sanskrit({
  subsets: ["devanagari", "latin"],
  weight: ["400"],
  variable: "--font-tiro",
})

export const metadata: Metadata = {
  title: "Vedic Mate - AI Powered Vedic Astrology | Ancient Wisdom, Divine Guidance",
  description:
    "Enter the sacred digital temple and connect with AI-powered Sanskrit pandits. Experience authentic Vedic astrology consultations in 15+ Indian languages, available 24/7.",
  keywords: [
    "Vedic astrology",
    "AI astrology",
    "Kundli",
    "horoscope",
    "spiritual guidance",
    "Sanskrit pandit",
    "temple",
  ],
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#D4AF37",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${hindMadurai.variable} ${tiroDevanagari.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
