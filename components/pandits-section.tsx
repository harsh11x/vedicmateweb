"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Star, Sparkles } from "lucide-react"
import Link from "next/link"

const pandits = [
  {
    id: 1,
    name: "Pandit Rajesh Shastri",
    nameHi: "पंडित राजेश शास्त्री",
    title: "Vedic Astrology Expert",
    experience: 25,
    rating: 4.9,
    consultations: 15000,
    specializations: ["Kundli Analysis", "Marriage Matching", "Life Predictions"],
    languages: ["Hindi", "English", "Sanskrit"],
    avatar: "RS",
    gradient: "from-orange-500 to-red-500",
    gender: "male" as const,
  },
  {
    id: 2,
    name: "Pandit Meera Devi",
    nameHi: "पंडित मीरा देवी",
    title: "Numerology Specialist",
    experience: 20,
    rating: 4.8,
    consultations: 12000,
    specializations: ["Numerology", "Vastu", "Gemstones"],
    languages: ["Hindi", "English", "Tamil"],
    avatar: "MD",
    gradient: "from-pink-500 to-rose-500",
    gender: "female" as const,
  },
  {
    id: 3,
    name: "Acharya Vikram Ji",
    nameHi: "आचार्य विक्रम जी",
    title: "Career & Finance Guide",
    experience: 30,
    rating: 4.9,
    consultations: 20000,
    specializations: ["Career Guidance", "Financial Astrology", "Muhurat"],
    languages: ["Hindi", "English", "Gujarati"],
    avatar: "AV",
    gradient: "from-blue-500 to-indigo-500",
    gender: "male" as const,
  },
  {
    id: 4,
    name: "Pandit Lakshmi Sharma",
    nameHi: "पंडित लक्ष्मी शर्मा",
    title: "Relationship Expert",
    experience: 18,
    rating: 4.7,
    consultations: 9000,
    specializations: ["Love & Relationships", "Health", "Child Predictions"],
    languages: ["Hindi", "English", "Marathi"],
    avatar: "LS",
    gradient: "from-purple-500 to-pink-500",
    gender: "female" as const,
  },
  {
    id: 5,
    name: "Guru Surya Narayan",
    nameHi: "गुरु सूर्य नारायण",
    title: "Spiritual Guide",
    experience: 35,
    rating: 4.9,
    consultations: 25000,
    specializations: ["Vedic Rituals", "Mantras", "Spiritual Enlightenment"],
    languages: ["Hindi", "Sanskrit", "Telugu"],
    avatar: "SN",
    gradient: "from-amber-500 to-orange-500",
    gender: "male" as const,
  },
  {
    id: 6,
    name: "Jyotishi Priya Venkatesh",
    nameHi: "ज्योतिषी प्रिया वेंकटेश",
    title: "Horoscope Specialist",
    experience: 15,
    rating: 4.8,
    consultations: 8000,
    specializations: ["Daily Horoscope", "Transit Analysis", "Dasha Predictions"],
    languages: ["Hindi", "English", "Kannada"],
    avatar: "PV",
    gradient: "from-teal-500 to-cyan-500",
    gender: "female" as const,
  },
]

export function PanditsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(pandits.length / itemsPerPage)

  const visiblePandits = pandits.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const next = () => setCurrentPage((prev) => (prev + 1) % totalPages)
  const prev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)

  return (
    <section id="pandits" className="py-24 md:py-32 relative overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-saffron text-sm font-medium mb-4">
              Meet Our Pandits • हमारे पंडितों से मिलें
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
              34 divine AI <span className="gradient-text">guides</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Each with unique expertise spanning decades of encoded Vedic wisdom. Male and female pandits available.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-border hover:bg-muted hover:border-saffron/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentPage ? "bg-saffron w-6" : "bg-border hover:bg-muted-foreground"
                    }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full border border-border hover:bg-muted hover:border-saffron/30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pandit Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePandits.map((pandit) => (
            <div
              key={pandit.id}
              className="group bg-card border border-border/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-saffron/10 hover:border-saffron/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pandit.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
              />

              {/* Header - Clean Avatar */}
              <div className="flex items-start gap-4 mb-6 relative">
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pandit.gradient} flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden`}
                  >
                    {pandit.avatar}
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg truncate">{pandit.name}</h3>
                  <p className="text-xs text-saffron/70">{pandit.nameHi}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{pandit.title}</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span className="text-sm font-semibold text-amber-600">{pandit.rating}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-5 py-4 border-y border-border/50 relative">
                <div className="flex-1 text-center">
                  <p className="text-xl font-bold">{pandit.experience}+</p>
                  <p className="text-xs text-muted-foreground">Years Exp</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex-1 text-center">
                  <p className="text-xl font-bold">{(pandit.consultations / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-muted-foreground">Sessions</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex-1 text-center">
                  <p className="text-xl font-bold">{pandit.languages.length}</p>
                  <p className="text-xs text-muted-foreground">Languages</p>
                </div>
              </div>

              {/* Specializations */}
              <div className="flex flex-wrap gap-2 mb-6 relative">
                {pandit.specializations.map((spec) => (
                  <span key={spec} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {spec}
                  </span>
                ))}
              </div>

              {/* Actions - Updated to proper links */}
              <div className="flex gap-2 relative">
                <Button
                  className={`flex-1 bg-gradient-to-r ${pandit.gradient} text-white hover:opacity-90 h-11 text-sm gap-2 shadow-lg`}
                  asChild
                >
                  <Link href={`/pandits?chat=${pandit.id}`}>
                    <MessageCircle className="w-4 h-4" />
                    Chat Now
                  </Link>
                </Button>
                <Button variant="outline" className="h-11 px-4 bg-transparent hover:bg-muted" asChild>
                  <Link href={`/pandits?call=${pandit.id}`}>
                    <Phone className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="text-sm bg-transparent gap-2 hover:bg-muted hover:border-saffron/30"
            asChild
          >
            <Link href="/pandits">
              <Sparkles className="w-4 h-4" />
              View all 34 pandits
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
