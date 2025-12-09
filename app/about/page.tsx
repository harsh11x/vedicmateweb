import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Globe, Clock, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-bold">About Us</span>
          </div>
          <h1 className="text-massive leading-[0.85] tracking-tighter mb-8">
            Ancient Wisdom.<br />Modern Sanctum.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Vedic Mate bridges the gap between timeless scriptures and the digital age. We make authentic guidance accessible, instant, and borderless.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To preserve and distribute the profound knowledge of Vedic traditions through state-of-the-art AI. We envision a world where spiritual clarity is just a conversation away.
              </p>
              <div className="flex flex-col gap-4">
                <div className="p-4 border border-border rounded-xl">
                  <p className="font-medium">"Knowledge that is not shared is lost."</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8 flex items-center justify-center">
              {/* Abstract visual placeholder */}
              <div className="w-48 h-48 border-2 border-dashed border-black rounded-full animate-spin-slow opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "100K+", label: "Seekers Guided" },
              { value: "15+", label: "Languages" },
              { value: "24/7", label: "Availability" },
              { value: "No.1", label: "AI Vedic Platform" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-5xl md:text-6xl font-black tracking-tighter mb-2">{stat.value}</p>
                <p className="text-sm uppercase tracking-widest opacity-60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "Rooted strictly in classical texts like Brihat Parashara Hora Shastra.",
              },
              {
                title: "Privacy",
                description: "Your spiritual journey is sacred. We ensure absolute confidentiality.",
              },
              {
                title: "Clarity",
                description: "No ambiguous riddles. Actionable, clear, and wise guidance.",
              },
            ].map((value, i) => (
              <div key={i} className="p-8 border border-border rounded-2xl hover:bg-secondary transition-colors group">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-6">Begin Your Journey</h2>
          <p className="text-muted-foreground mb-8 text-lg">The stars are aligning. Are you ready to listen?</p>
          <Button className="btn-zen px-8 py-6 text-lg" asChild>
            <Link href="/pandits">
              Consult Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
