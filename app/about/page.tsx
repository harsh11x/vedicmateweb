import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Globe, Clock, Heart, ArrowRight } from "lucide-react"
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"
import { TempleOnClouds } from "@/components/illustrations/temple-clouds"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <DecorativeMandala className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none" />
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-saffron text-sm font-medium mb-4">About Us • हमारे बारे में</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
                Ancient wisdom, <span className="gradient-text">modern delivery</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Vedic Mate was born from a simple vision: to make authentic Vedic wisdom accessible to everyone,
                regardless of time, location, or language barriers.
              </p>
              <p className="text-base text-saffron/80">
                वैदिक मेट एक सरल दृष्टिकोण से जन्मा: प्रामाणिक वैदिक ज्ञान को सभी के लिए सुलभ बनाना।
              </p>
            </div>
            <div className="flex justify-center">
              <TempleOnClouds className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">Our Mission • हमारा मिशन</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "To preserve and share the timeless wisdom of Vedic traditions through innovative technology, making
              spiritual guidance available to seekers across India and the world, in their own language, at any time
              they need it."
            </p>
            <p className="text-lg text-saffron/80 mt-4 font-serif">"वैदिक परंपराओं के शाश्वत ज्ञान को संरक्षित और साझा करना"</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "1,00,000+", label: "Happy Users", labelHi: "खुश उपयोगकर्ता" },
              { icon: Globe, value: "15+", label: "Languages", labelHi: "भाषाएं" },
              { icon: Clock, value: "24/7", label: "Available", labelHi: "उपलब्ध" },
              { icon: Heart, value: "34", label: "AI Pandits", labelHi: "AI पंडित" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-card border border-border/50">
                <stat.icon className="w-8 h-8 text-saffron mx-auto mb-4" />
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-saffron/60">{stat.labelHi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">Our Values • हमारे मूल्य</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Authenticity",
                titleHi: "प्रामाणिकता",
                description: "Every piece of guidance is rooted in authentic Vedic scriptures and traditions.",
              },
              {
                title: "Accessibility",
                titleHi: "सुलभता",
                description: "Available 24/7 in 15+ languages, making wisdom accessible to all.",
              },
              {
                title: "Privacy",
                titleHi: "गोपनीयता",
                description: "Your consultations are completely confidential and secure.",
              },
            ].map((value, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 text-center">
                <h3 className="text-xl font-semibold mb-1">{value.title}</h3>
                <p className="text-sm text-saffron/70 mb-3">{value.titleHi}</p>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-saffron/10 to-gold/10 border border-saffron/20">
            <h2 className="text-3xl font-serif font-semibold mb-4">Begin your spiritual journey today</h2>
            <p className="text-muted-foreground mb-6">
              Connect with our AI Pandits and experience the power of Vedic wisdom.
            </p>
            <Button className="bg-gradient-to-r from-saffron to-copper text-white gap-2" asChild>
              <Link href="/pandits">
                Start Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
