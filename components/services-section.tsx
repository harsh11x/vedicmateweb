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
    color: "from-orange-500 to-amber-500",
    href: "/services#kundli",
  },
  {
    icon: "❤",
    title: "Match Making",
    titleHi: "कुंडली मिलान",
    description: "Comprehensive compatibility analysis for marriage.",
    featured: true,
    color: "from-pink-500 to-rose-500",
    href: "/services#matchmaking",
  },
  {
    icon: "☾",
    title: "Daily Horoscope",
    titleHi: "दैनिक राशिफल",
    description: "Personalized daily, weekly, and monthly predictions.",
    color: "from-indigo-500 to-purple-500",
    href: "/services#horoscope",
  },
  {
    icon: "💎",
    title: "Gemstone Advice",
    titleHi: "रत्न सलाह",
    description: "Recommendations based on your planetary positions.",
    color: "from-cyan-500 to-blue-500",
    href: "/services#gemstone",
  },
  {
    icon: "🏠",
    title: "Vastu Consultation",
    titleHi: "वास्तु परामर्श",
    description: "Harmonize your living and working spaces.",
    color: "from-green-500 to-emerald-500",
    href: "/services#vastu",
  },
  {
    icon: "🔢",
    title: "Numerology",
    titleHi: "अंक ज्योतिष",
    description: "Discover the power of numbers in your life.",
    color: "from-violet-500 to-purple-500",
    href: "/services#numerology",
  },
  {
    icon: "📅",
    title: "Muhurat Selection",
    titleHi: "मुहूर्त चयन",
    description: "Find auspicious timings for important events.",
    color: "from-amber-500 to-yellow-500",
    href: "/services#muhurat",
  },
  {
    icon: "💼",
    title: "Career Guidance",
    titleHi: "करियर मार्गदर्शन",
    description: "Navigate your professional path with cosmic insights.",
    color: "from-blue-500 to-indigo-500",
    href: "/services#career",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
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
              className={`group relative bg-card border border-border/50 rounded-2xl p-6 hover:border-saffron/40 hover:shadow-xl hover:shadow-saffron/5 transition-all duration-500 cursor-pointer overflow-hidden ${service.featured ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className={`relative mb-4 ${service.featured ? "text-5xl" : "text-3xl"}`}>{service.icon}</div>

              {/* Content */}
              <div className="relative">
                <h3 className={`font-semibold mb-1 ${service.featured ? "text-2xl" : "text-base"}`}>{service.title}</h3>
                <p className={`text-saffron/70 mb-3 ${service.featured ? "text-base" : "text-xs"}`}>
                  {service.titleHi}
                </p>
                <p className={`text-muted-foreground leading-relaxed ${service.featured ? "text-base" : "text-sm"}`}>
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-saffron">
                <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors" />
              </div>

              {/* Featured badge */}
              {service.featured && (
                <div className="absolute bottom-6 right-6">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-saffron/20 to-gold/20 text-saffron font-medium border border-saffron/20">
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
