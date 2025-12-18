import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"
import Link from "next/link"

const services = [
  {
    id: "kundli",
    icon: "☉",
    title: "Kundli Generation",
    titleHi: "कुंडली निर्माण",
    description:
      "Get your complete birth chart with detailed planetary positions, houses, and life predictions based on Vedic astrology principles.",
    features: ["Complete birth chart", "Planetary positions", "Dasha periods", "Life predictions", "PDF download"],
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "matchmaking",
    icon: "❤",
    title: "Match Making",
    titleHi: "कुंडली मिलान",
    description:
      "Comprehensive Guna Milan and compatibility analysis for marriage. Get detailed insights into your relationship compatibility.",
    features: [
      "36 Guna matching",
      "Manglik analysis",
      "Compatibility score",
      "Detailed report",
      "Remedies suggestions",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "horoscope",
    icon: "☾",
    title: "Daily Horoscope",
    titleHi: "दैनिक राशिफल",
    description:
      "Personalized daily, weekly, and monthly predictions based on your birth chart and current planetary transits.",
    features: ["Daily predictions", "Weekly forecast", "Monthly overview", "Lucky numbers", "Favorable timings"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "gemstone",
    icon: "💎",
    title: "Gemstone Advice",
    titleHi: "रत्न सलाह",
    description:
      "Get personalized gemstone recommendations based on your planetary positions to enhance positive energies in your life.",
    features: [
      "Personalized recommendations",
      "Quality guidance",
      "Wearing instructions",
      "Alternative stones",
      "Authenticity tips",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "vastu",
    icon: "🏠",
    title: "Vastu Consultation",
    titleHi: "वास्तु परामर्श",
    description:
      "Harmonize your living and working spaces according to Vastu Shastra principles for prosperity and well-being.",
    features: ["Home analysis", "Office Vastu", "Remedies", "Direction guidance", "Floor plan review"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "numerology",
    icon: "🔢",
    title: "Numerology",
    titleHi: "अंक ज्योतिष",
    description:
      "Discover the power of numbers in your life. Get insights into your destiny, personality, and life path through numerology.",
    features: ["Life path number", "Destiny number", "Name analysis", "Lucky numbers", "Color guidance"],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "muhurat",
    icon: "📅",
    title: "Muhurat Selection",
    titleHi: "मुहूर्त चयन",
    description:
      "Find the most auspicious timings for important events like marriage, business, travel, and new beginnings.",
    features: ["Marriage muhurat", "Business timings", "Travel dates", "Griha pravesh", "Special occasions"],
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "career",
    icon: "💼",
    title: "Career Guidance",
    titleHi: "करियर मार्गदर्शन",
    description:
      "Navigate your professional path with cosmic insights. Get guidance on career choices, job changes, and business decisions.",
    features: ["Career analysis", "Job timing", "Business guidance", "Partnership advice", "Financial periods"],
    color: "from-blue-500 to-indigo-500",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <DecorativeMandala className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none" />
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block text-saffron text-sm font-medium mb-4">Our Services • हमारी सेवाएं</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
              Comprehensive <span className="gradient-text">Vedic guidance</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From daily horoscopes to life-changing decisions, our AI Pandits guide every aspect of your spiritual
              journey with authentic Vedic wisdom.
            </p>
            <p className="text-base text-saffron/80 mt-2">
              दैनिक राशिफल से लेकर जीवन बदलने वाले निर्णयों तक, हमारे AI पंडित आपका मार्गदर्शन करते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-saffron/40 hover:shadow-xl transition-all duration-500 scroll-mt-24"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                />

                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-1">{service.title}</h2>
                      <p className="text-saffron/70">{service.titleHi}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-saffron" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`bg-gradient-to-r ${service.color} text-white hover:opacity-90 gap-2`} asChild>
                    <Link href="/pandits">
                      Consult Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
