"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: "☉",
    title: "Kundli Generation",
    description: "Complete birth chart with planetary positions.",
    href: "/services#kundli",
    featured: true,
  },
  {
    icon: "❤",
    title: "Match Making",
    description: "Comprehensive compatibility analysis.",
    href: "/services#matchmaking",
    featured: true,
  },
  {
    icon: "☾",
    title: "Daily Horoscope",
    description: "Personalized daily predictions.",
    href: "/services#horoscope",
  },
  {
    icon: "💎",
    title: "Gemstones",
    description: "Recommendations based on charts.",
    href: "/services#gemstone",
  },
  {
    icon: "🏠",
    title: "Vastu Shastra",
    description: "Harmonize your living spaces.",
    href: "/services#vastu",
  },
  {
    icon: "🔢",
    title: "Numerology",
    description: "Power of numbers in your life.",
    href: "/services#numerology",
  },
  {
    icon: "📅",
    title: "Muhurat",
    description: "Auspicious timings for events.",
    href: "/services#muhurat",
  },
  {
    icon: "💼",
    title: "Career Guide",
    description: "Professional path insights.",
    href: "/services#career",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-32 px-6 border-b border-border bg-secondary/20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-bold">Offerings</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Comprehensive<br />Cosmic Analysis.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group relative bg-background border border-border p-8 hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[220px] ${service.featured ? "lg:col-span-2 lg:row-span-2 lg:min-h-[460px]" : ""
                }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`font-mono text-2xl ${service.featured ? "text-4xl" : ""}`}>{service.icon}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div>
                <h3 className={`font-bold mb-2 tracking-tight ${service.featured ? "text-3xl" : "text-lg"}`}>{service.title}</h3>
                <p className={`text-muted-foreground group-hover:text-neutral-400 ${service.featured ? "text-lg" : "text-xs"}`}>
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
