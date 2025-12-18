import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Check, Mic, MessageSquare } from "lucide-react"
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"
import Link from "next/link"

const languages = [
  { name: "Hindi", native: "हिन्दी", speakers: "600M+", region: "North India", greeting: "नमस्ते", available: true },
  { name: "Tamil", native: "தமிழ்", speakers: "80M+", region: "Tamil Nadu", greeting: "வணக்கம்", available: true },
  {
    name: "Telugu",
    native: "తెలుగు",
    speakers: "85M+",
    region: "Andhra & Telangana",
    greeting: "నమస్కారం",
    available: true,
  },
  { name: "Bengali", native: "বাংলা", speakers: "100M+", region: "West Bengal", greeting: "নমস্কার", available: true },
  { name: "Marathi", native: "मराठी", speakers: "95M+", region: "Maharashtra", greeting: "नमस्कार", available: true },
  { name: "Gujarati", native: "ગુજરાતી", speakers: "60M+", region: "Gujarat", greeting: "નમસ્તે", available: true },
  { name: "Kannada", native: "ಕನ್ನಡ", speakers: "45M+", region: "Karnataka", greeting: "ನಮಸ್ಕಾರ", available: true },
  { name: "Malayalam", native: "മലയാളം", speakers: "38M+", region: "Kerala", greeting: "നമസ്കാരം", available: true },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", speakers: "35M+", region: "Punjab", greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", available: true },
  { name: "Odia", native: "ଓଡ଼ିଆ", speakers: "40M+", region: "Odisha", greeting: "ନମସ୍କାର", available: true },
  { name: "Assamese", native: "অসমীয়া", speakers: "15M+", region: "Assam", greeting: "নমস্কাৰ", available: true },
  { name: "Urdu", native: "اردو", speakers: "70M+", region: "Pan India", greeting: "آداب", available: true },
  { name: "Sanskrit", native: "संस्कृतम्", speakers: "Sacred", region: "Vedic", greeting: "नमः", available: true },
  { name: "Kashmiri", native: "कॉशुर", speakers: "7M+", region: "Kashmir", greeting: "आदाब", available: true },
  { name: "Nepali", native: "नेपाली", speakers: "16M+", region: "Sikkim & Nepal", greeting: "नमस्ते", available: true },
]

export default function LanguagesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <DecorativeMandala className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none" />
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block text-saffron text-sm font-medium mb-4">Languages • भाषाएं</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
              Speak in your <span className="gradient-text">native language</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our AI Pandits understand and speak 15+ Indian languages fluently. Chat or call in Hindi, Tamil, Telugu,
              Bengali, and many more regional languages.
            </p>
            <p className="text-base text-saffron/80 mt-2">हमारे AI पंडित 15+ भारतीय भाषाओं में धाराप्रवाह बात करते हैं।</p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { icon: MessageSquare, text: "Text in your language" },
              { icon: Mic, text: "Voice calls supported" },
              { icon: Phone, text: "Native pronunciation" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
                <item.icon className="w-4 h-4 text-saffron" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-12">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-saffron/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <p className="text-4xl font-medium text-saffron mb-2">{lang.native}</p>
                  <p className="text-lg font-semibold">{lang.name}</p>
                  <p className="text-sm text-muted-foreground">{lang.region}</p>
                </div>

                <div className="space-y-2 text-center mb-4">
                  <p className="text-xs text-muted-foreground">{lang.speakers} speakers</p>
                  <p className="text-sm text-saffron/80">"{lang.greeting}"</p>
                </div>

                <div className="flex items-center justify-center gap-1 text-green-500">
                  <Check className="w-4 h-4" />
                  <span className="text-xs font-medium">Available</span>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-saffron to-copper text-white text-xs"
                    asChild
                  >
                    <Link href="/pandits">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Chat
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent" asChild>
                    <Link href="/pandits?mode=voice">
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Language */}
      <section className="py-12">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-saffron/10 to-gold/10 border border-saffron/20">
            <h2 className="text-2xl font-semibold mb-2">Don't see your language?</h2>
            <p className="text-muted-foreground mb-4">
              We're constantly adding more languages. Let us know which language you'd like us to support.
            </p>
            <Button className="bg-gradient-to-r from-saffron to-copper text-white">Request a Language</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
