import { OmSymbol } from "@/components/icons/om-symbol"
import { Users, Clock, Wallet, Globe } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "34 AI Pandits",
    titleHindi: "३४ ए.आई. पंडित",
    description:
      "Each with unique personality, 10-35 years of wisdom encoded. Male & Female pandits available with all specializations covered.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    titleHindi: "२४×७ सेवा उपलब्ध",
    description:
      "No waiting, no appointments. Instant divine guidance. Always online, always caring. Like having pandit in your pocket.",
  },
  {
    icon: Wallet,
    title: "Affordable Wisdom",
    titleHindi: "सस्ती और प्रभावी सेवा",
    description: "₹25/minute only. No hidden charges. First consultation FREE. Transparent pricing always.",
  },
  {
    icon: Globe,
    title: "Multiple Languages",
    titleHindi: "बहुभाषी सेवा",
    description:
      "15+ Indian languages. AI speaks YOUR language. Hindi, Tamil, Telugu, Bengali, Gujarati, Marathi, Kannada, and more.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🌟</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Vedic Mate?</h2>
            <span className="text-2xl">🌟</span>
          </div>
          <p className="text-xl text-primary font-serif">क्यों चुनें वैदिक मेट?</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-lg p-6 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              {/* Corner Om Decorations */}
              <OmSymbol className="absolute top-2 right-2 w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-primary font-serif mb-3">{feature.titleHindi}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-b-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
