"use client"

import { Check, Mic, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const languages = [
  { name: "Hindi", native: "हिन्दी", region: "North India" },
  { name: "Tamil", native: "தமிழ்", region: "Tamil Nadu" },
  { name: "Telugu", native: "తెలుగు", region: "Andhra" },
  { name: "Bengali", native: "বাংলা", region: "Bengal" },
  { name: "Marathi", native: "मराठी", region: "Maharashtra" },
  { name: "Gujarati", native: "ગુજરાતી", region: "Gujarat" },
  { name: "Kannada", native: "ಕನ್ನಡ", region: "Karnataka" },
  { name: "Malayalam", native: "മലയാളം", region: "Kerala" },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", region: "Punjab" },
  { name: "Other", native: "More", region: "India" },
]

export function LanguagesSection() {
  return (
    <section
      id="languages"
      className="py-32 px-6 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-black"></span>
              <span className="text-xs uppercase tracking-widest font-bold">Languages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
              Hyper-local.<br />Universal.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our AI models have been fine-tuned on 15+ regional languages to capture the nuance of every prayer and prediction.
            </p>
            <div className="flex gap-4">
              <Button className="btn-zen px-8" asChild>
                <Link href="/languages">View All Languages</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {languages.map((lang, idx) => (
              <div key={idx} className="bg-background p-6 rounded-xl border border-border flex flex-col items-center text-center hover:border-black transition-colors">
                <span className="text-2xl font-light mb-2">{lang.native}</span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
