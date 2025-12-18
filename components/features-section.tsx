"use client"

import { Users, Clock, Globe, Shield, MessageCircle, BookOpen } from "lucide-react"
import { PanditDoodle } from "@/components/illustrations/pandit-doodle"
import { FloatingSacredSymbols } from "@/components/illustrations/sacred-elements"

const features = [
  {
    icon: Users,
    title: "34 AI Pandits",
    titleHi: "३४ AI पंडित",
    description: "Male and female pandits with 10-35 years of encoded Vedic wisdom and expertise.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    title: "15+ Languages",
    titleHi: "१५+ भाषाएं",
    description: "Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi & more.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    titleHi: "२४/७ उपलब्ध",
    description: "No appointments. Get divine guidance any time, day or night, 365 days a year.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "100% Private",
    titleHi: "पूर्ण गोपनीयता",
    description: "Your consultations are completely confidential. No judgment, only compassion.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: MessageCircle,
    title: "Chat & Voice",
    titleHi: "चैट और कॉल",
    description: "Type or speak naturally. Choose your preferred consultation mode.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: BookOpen,
    title: "Authentic Wisdom",
    titleHi: "प्रामाणिक ज्ञान",
    description: "Trained on thousands of years of Vedic texts, scriptures and principles.",
    color: "from-amber-500 to-orange-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <FloatingSacredSymbols className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute -left-10 top-1/4 opacity-20 hidden xl:block">
        <PanditDoodle variant="male" className="w-48 h-72" />
      </div>
      <div className="absolute -right-10 bottom-1/4 opacity-20 hidden xl:block">
        <PanditDoodle variant="female" className="w-44 h-64" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-saffron text-sm font-medium mb-4">Why Choose Us • हमें क्यों चुनें</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-balance">
            Ancient wisdom meets <span className="gradient-text">modern technology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the perfect blend of timeless Vedic knowledge and cutting-edge AI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-saffron/30 hover:shadow-xl hover:shadow-saffron/5 transition-all duration-500"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
              />

              <div
                className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <div className="relative">
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-saffron/70 mb-3">{feature.titleHi}</p>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
