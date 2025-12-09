"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full bg-background pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-border">

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          {/* ZenMux Headline Style */}
          <h1 className="text-massive tracking-tighter text-foreground mb-8">
            Ancient Wisdom.<br />
            <span className="opacity-40">Modern Tech.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            Command 34 AI Pandits with Zen clarity.
            <br />
            Unified access to Vedic intelligence.
            <br />
            <span className="text-sm mt-4 block opacity-60">Subpar results? We compensate. (Karma Guarantee)</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/signup">
              <Button className="btn-zen h-14 px-8 text-lg rounded-full">
                Start Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/pandits">
              <Button variant="outline" className="btn-zen-outline h-14 px-8 text-lg rounded-full">
                View Models
              </Button>
            </Link>
          </div>
        </div>

        {/* Minimalist Abstract Element (Optional, keeping it clean for now) */}
        <div className="mt-24 w-full h-px bg-border" />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
          {/* Trust Logos or Stats could go here, staying minimal for now */}
          <div>
            <p className="text-4xl font-bold">34</p>
            <p className="text-sm uppercase tracking-widest">AI Pandits</p>
          </div>
          <div>
            <p className="text-4xl font-bold">15+</p>
            <p className="text-sm uppercase tracking-widest">Languages</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100k</p>
            <p className="text-sm uppercase tracking-widest">Sessions</p>
          </div>
          <div>
            <p className="text-4xl font-bold">4.9</p>
            <p className="text-sm uppercase tracking-widest">Rating</p>
          </div>
        </div>

      </div>
    </section>
  )
}
