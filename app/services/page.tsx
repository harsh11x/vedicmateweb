import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sun, Heart, Moon, Gem, Home, Binary, Calendar, Briefcase } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "kundli",
    icon: Sun,
    title: "Kundli Generation",
    description: "Complete birth chart with detailed planetary positions and predictions.",
    features: ["Birth Chart", "Planetary Positions", "Life Predictions"],
  },
  {
    id: "matchmaking",
    icon: Heart,
    title: "Match Making",
    description: "Comprehensive compatibility analysis for marriage and relationships.",
    features: ["36 Guna Milan", "Manglik Analysis", "Compatibility Score"],
  },
  {
    id: "horoscope",
    icon: Moon,
    title: "Daily Horoscope",
    description: "Personalized daily predictions based on your birth chart.",
    features: ["Daily/Weekly Forecasts", "Lucky Numbers", "Transits"],
  },
  {
    id: "gemstone",
    icon: Gem,
    title: "Gemstone Advice",
    description: "Personalized gemstone recommendations for energy enhancement.",
    features: ["Stone Selection", "Wearing Process", "Authenticity Guide"],
  },
  {
    id: "vastu",
    icon: Home,
    title: "Vastu Harmony",
    description: "Harmonize your living and working spaces for prosperity.",
    features: ["Home Analysis", "Directional Guidance", "Remedies"],
  },
  {
    id: "numerology",
    icon: Binary,
    title: "Numerology",
    description: "Discover the hidden power of numbers in your life path.",
    features: ["Life Path Number", "Name Analysis", "Destiny Numbers"],
  },
  {
    id: "muhurat",
    icon: Calendar,
    title: "Muhurat",
    description: "Find the most auspicious timings for your beginnings.",
    features: ["Marriage", "Business Launch", "Griha Pravesh"],
  },
  {
    id: "career",
    icon: Briefcase,
    title: "Career Path",
    description: "Navigate your professional journey with cosmic insight.",
    features: ["Career Selection", "Business Timing", "Financial Cycles"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-bold">Services</span>
          </div>
          <h1 className="text-massive leading-[0.85] tracking-tighter mb-8">
            Holistic<br />Vedic Guidance.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Comprehensive tools and insights to navigate every aspect of your life, powered by ancient wisdom and modern intelligence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="group border border-border rounded-xl p-8 hover:bg-secondary transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <service.icon className="w-10 h-10 stroke-1" />
                  <span className="text-xs font-mono opacity-30">{(idx + 1).toString().padStart(2, '0')}</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed min-h-[3rem]">{service.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-black rounded-full"></span>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full btn-zen-outline group-hover:bg-black group-hover:text-white transition-colors" asChild>
                  <Link href="/pandits">
                    Consult
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
