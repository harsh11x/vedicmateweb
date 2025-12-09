"use client"

import { Users, Clock, Globe, Shield, MessageCircle, BookOpen } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "34 AI Pandits",
    description: "Expertise spanning decades of encoded wisdom.",
  },
  {
    icon: Globe,
    title: "15+ Languages",
    description: "Fluency in regional Indian dialects.",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Instant guidance, any time of day.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "Encrypted and confidential conversations.",
  },
  {
    icon: MessageCircle,
    title: "Chat & Voice",
    description: "Seamless multimodal communication.",
  },
  {
    icon: BookOpen,
    title: "Authentic Wisdom",
    description: "Strictly based on Vedic scriptures.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-6 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-bold">Why Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Ancient Wisdom.<br />Modern Core.
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            We've distilled centuries of tradition into an accessible, privacy-first digital experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
            >
              <div
                className="w-12 h-12 flex items-center justify-start mb-6"
              >
                <feature.icon className="w-8 h-8 text-black" />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
