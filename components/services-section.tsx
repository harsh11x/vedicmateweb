"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: "☉",
    title: "Kundli Generation",
    titleHi: "कुंडली निर्माण",
    description: "Complete birth chart with planetary positions and life predictions.",
    featured: true,
    color: "from-[#D4AF37] to-[#B8860B]", // Gold
    href: "/services#kundli",
  },
  {
    icon: "❤",
    title: "Match Making",
    titleHi: "कुंडली मिलान",
    description: "Comprehensive compatibility analysis for marriage.",
    featured: true,
    color: "from-[#FF9933] to-[#FF4500]", // Saffron
    href: "/services#matchmaking",
  },
  {
    icon: "☾",
    title: "Daily Horoscope",
    titleHi: "दैनिक राशिफल",
    description: "Personalized daily, weekly, and monthly predictions.",
    color: "from-[#8B4513] to-[#4A0E0E]", // Earth
    href: "/services#horoscope",
  },
  {
    icon: "💎",
    title: "Gemstone Advice",
    titleHi: "रत्न सलाह",
    description: "Recommendations based on your planetary positions.",
    color: "from-[#D4AF37] to-[#FF9933]", // Gold-Saffron
    href: "/services#gemstone",
  },
  {
    icon: "🏠",
    title: "Vastu Consultation",
    titleHi: "वास्तु परामर्श",
    description: "Harmonize your living and working spaces.",
    color: "from-[#B8860B] to-[#4A0E0E]", // Dark Gold
    href: "/services#vastu",
  },
  {
    icon: "🔢",
    title: "Numerology",
    titleHi: "अंक ज्योतिष",
    description: "Discover the power of numbers in your life.",
    color: "from-[#FFD700] to-[#DAA520]", // Bright Gold
    href: "/services#numerology",
  },
  {
    icon: "📅",
    title: "Muhurat Selection",
    titleHi: "मुहूर्त चयन",
    description: "Find auspicious timings for important events.",
    color: "from-[#D4AF37] to-[#B8860B]", // Gold
    href: "/services#muhurat",
  },
  {
    icon: "💼",
    title: "Career Guidance",
    titleHi: "करियर मार्गदर्शन",
    description: "Navigate your professional path with cosmic insights.",
    color: "from-[#FF9933] to-[#FF4500]", // Saffron
    href: "/services#career",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-saffron text-sm font-medium mb-4">Our Services • हमारी सेवाएं</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            Comprehensive <span className="gradient-text">Vedic guidance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From daily horoscopes to life-changing decisions, we guide every aspect of your journey.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group relative bg-[#1A0F0D]/60 backdrop-blur-md border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 cursor-pointer overflow-hidden ${service.featured ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className={`relative mb-4 ${service.featured ? "text-5xl" : "text-3xl"} text-[#D4AF37]`}>{service.icon}</div>

              {/* Content */}
              <div className="relative">
                <h3 className={`font-serif text-[#F5E6D3] mb-1 ${service.featured ? "text-2xl" : "text-base"}`}>{service.title}</h3>
                <p className={`text-[#F5E6D3]/90 mb-3 ${service.featured ? "text-base" : "text-xs"}`}>
                  {service.titleHi}
                </p>
                <p className={`text-[#F5E6D3]/80 leading-relaxed ${service.featured ? "text-base" : "text-sm"}`}>
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#D4AF37]">
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:text-[#1A0F0D] transition-colors" />
              </div>

              {/* Featured badge */}
              {service.featured && (
                <div className="absolute bottom-6 right-6">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-medium border border-[#D4AF37]/20">
                    Popular
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
