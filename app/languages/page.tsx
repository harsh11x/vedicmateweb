import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

const languages = [
  { name: "Hindi", native: "हिन्दी", region: "North India", available: true },
  { name: "Tamil", native: "தமிழ்", region: "Tamil Nadu", available: true },
  { name: "Telugu", native: "తెలుగు", region: "Andhra & Telangana", available: true, },
  { name: "Bengali", native: "বাংলা", region: "West Bengal", available: true },
  { name: "Marathi", native: "मराठी", region: "Maharashtra", available: true },
  { name: "Gujarati", native: "ગુજરાતી", region: "Gujarat", available: true },
  { name: "Kannada", native: "ಕನ್ನಡ", region: "Karnataka", available: true },
  { name: "Malayalam", native: "മലയാളം", region: "Kerala", available: true },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", region: "Punjab", available: true },
  { name: "Odia", native: "ଓଡ଼ିଆ", region: "Odisha", available: true },
  { name: "Assamese", native: "অসমীয়া", region: "Assam", available: true },
  { name: "Urdu", native: "اردو", region: "Pan India", available: true },
  { name: "Sanskrit", native: "संस्कृतम्", region: "Vedic", available: true },
  { name: "Kashmiri", native: "कॉशुर", region: "Kashmir", available: true },
  { name: "Nepali", native: "नेपाली", region: "Sikkim & Nepal", available: true },
]

export default function LanguagesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-bold">Languages</span>
          </div>
          <h1 className="text-massive leading-[0.85] tracking-tighter mb-8">
            Universal<br />Dialogue.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Wisdom has no language barrier. Connect with our AI Pandits in the tongue that speaks to your soul.
          </p>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="group relative p-8 rounded-xl border border-border hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <p className="text-3xl font-light mb-2 opacity-80 group-hover:opacity-100 transition-opacity">{lang.native}</p>
                  <p className="font-bold tracking-tight uppercase text-sm">{lang.name}</p>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-white text-white hover:bg-white hover:text-black" asChild>
                    <Link href="/pandits"><MessageCircle className="w-4 h-4" /></Link>
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-white text-white hover:bg-white hover:text-black" asChild>
                    <Link href="/pandits?mode=voice"><Phone className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Language */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Missing a language?</h2>
          <Button className="btn-zen px-8" asChild>
            <Link href="/contact">Request Addition</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
