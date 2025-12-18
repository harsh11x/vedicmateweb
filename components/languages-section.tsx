"use client"

import { Check, Mic, MessageSquare } from "lucide-react"
import Link from "next/link"

const languages = [
  { name: "Hindi", native: "हिन्दी", speakers: "600M+", region: "North India" },
  { name: "Tamil", native: "தமிழ்", speakers: "80M+", region: "Tamil Nadu" },
  { name: "Telugu", native: "తెలుగు", speakers: "85M+", region: "Andhra & Telangana" },
  { name: "Bengali", native: "বাংলা", speakers: "100M+", region: "West Bengal" },
  { name: "Marathi", native: "मराठी", speakers: "95M+", region: "Maharashtra" },
  { name: "Gujarati", native: "ગુજરાતી", speakers: "60M+", region: "Gujarat" },
  { name: "Kannada", native: "ಕನ್ನಡ", speakers: "45M+", region: "Karnataka" },
  { name: "Malayalam", native: "മലയാളം", speakers: "38M+", region: "Kerala" },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", speakers: "35M+", region: "Punjab" },
  { name: "Odia", native: "ଓଡ଼ିଆ", speakers: "40M+", region: "Odisha" },
  { name: "Assamese", native: "অসমীয়া", speakers: "15M+", region: "Assam" },
  { name: "Urdu", native: "اردو", speakers: "70M+", region: "Pan India" },
  { name: "Sanskrit", native: "संस्कृतम्", speakers: "Sacred", region: "Vedic" },
  { name: "Kashmiri", native: "कॉशुर", speakers: "7M+", region: "Kashmir" },
  { name: "Nepali", native: "नेपाली", speakers: "16M+", region: "Sikkim & Nepal" },
]

export function LanguagesSection() {
  return (
    <section
      id="languages"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#D4AF37] text-sm font-medium mb-4">
            Speak Your Language • अपनी भाषा में बात करें
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-balance text-[#F5E6D3]">
            Consult in <span className="gradient-text-gold">15+ Indian languages</span>
          </h2>
          <p className="text-lg text-[#F5E6D3]/70">
            Our AI pandits understand and speak your native language fluently. Chat or call in Hindi, Tamil, Telugu,
            Bengali, and many more.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: MessageSquare, text: "Text in your language" },
            { icon: Mic, text: "Voice calls supported" },
            { icon: Check, text: "Native pronunciation" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A0F0D]/40 border border-[#D4AF37]/30 backdrop-blur-sm">
              <item.icon className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm text-[#F5E6D3]">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className="group relative p-4 rounded-xl bg-[#1A0F0D]/60 backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="text-2xl font-serif font-medium text-[#FFD700] mb-1">{lang.native}</p>
              <p className="text-sm font-medium text-[#F5E6D3]">{lang.name}</p>
              <p className="text-xs text-[#D4AF37]/70 mt-1">{lang.region}</p>

              {/* Hover details */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D4AF37]/90 to-[#B8860B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-[#1A0F0D] text-center">
                  <p className="text-xl font-bold font-serif">{lang.native}</p>
                  <p className="text-sm font-medium opacity-90">{lang.speakers} speakers</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Updated to link to /languages page */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Don't see your language?{" "}
            <Link href="/languages" className="text-saffron hover:underline">
              Request it here
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
