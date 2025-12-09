"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const pandits = [
  {
    name: "Pandit Rajesh",
    specialty: "Vedic Astrology",
    initials: "PR"
  },
  {
    name: "Meera Devi",
    specialty: "Numerology",
    initials: "MD"
  },
  {
    name: "Guru Surya",
    specialty: "Spiritual Guide",
    initials: "GS"
  }
]

export function PanditsSection() {
  return (
    <section id="pandits" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-black"></span>
              <span className="text-xs uppercase tracking-widest font-bold">The Collective</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9]">
              34 Expert minds.<br />One purpose.
            </h2>
          </div>
          <Button variant="outline" className="btn-zen-outline px-8" asChild>
            <Link href="/pandits">Meet Everyone</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pandits.map((p, i) => (
            <div key={i} className="border border-border p-8 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary text-black rounded-full flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-white transition-colors">
                {p.initials}
              </div>
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className="text-muted-foreground group-hover:text-neutral-400 mb-8">{p.specialty}</p>

              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                Chat Now <MessageCircle className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
