import { Header } from "@/components/header"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Star, Filter, Search } from "lucide-react"
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"
import { PANDITS } from "@/lib/pandit-data"

const GRADIENTS = [
  "from-orange-500 to-red-500",
  "from-pink-500 to-rose-500",
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-teal-500 to-cyan-500",
  "from-green-500 to-emerald-500",
  "from-violet-500 to-purple-500",
]

const LANGUAGES = ["Hindi", "English", "Sanskrit", "Tamil", "Gujarati", "Marathi", "Bengali", "Punjabi", "Malayalam", "Kannada", "Telugu"]

// Helper to generate consistent visual data from ID
function getVisualData(id: string, index: number, name: string) {
  const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)

  // Gradient
  const gradient = GRADIENTS[index % GRADIENTS.length]

  // Rating (4.5 to 5.0)
  const rating = (4.5 + (seed % 50) / 100).toFixed(1)

  // Experience (10 to 40 years)
  const experience = 10 + (seed % 30)

  // Consultations (5000 to 30000)
  const consultations = 5000 + (seed * 100) % 25000

  // Gender (approximate based on name for avatar, though we just use initials)
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2)

  // Languages - Take Hindi/English + 1 random regional
  const regional = LANGUAGES[2 + (seed % (LANGUAGES.length - 2))]
  const langs = ["Hindi", "English", regional]

  return { gradient, rating, experience, consultations, initials, langs }
}

export default function PanditsPage() {
  const panditsList = Object.values(PANDITS).map((p, i) => {
    const visual = getVisualData(p.id, i, p.name)
    return {
      ...p,
      ...visual,
      specializationsList: p.specialization.split(',').map(s => s.trim())
    }
  })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <DecorativeMandala className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none" />
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block text-saffron text-sm font-medium mb-4">AI Pandits • AI पंडित</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
              Meet our <span className="gradient-text">{panditsList.length} divine guides</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Each AI Pandit is trained on decades of authentic Vedic wisdom. Choose from male and female pandits, each
              with unique expertise spanning astrology, numerology, vastu, and spiritual guidance.
            </p>
            <p className="text-base text-saffron/80 mt-2">प्रत्येक AI पंडित दशकों के प्रामाणिक वैदिक ज्ञान पर प्रशिक्षित है।</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-y border-border/50">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search pandits..."
                className="bg-transparent border-none outline-none text-sm w-40"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <div className="flex gap-2">
              {["All", "Male", "Female", "Astrology", "Numerology", "Vastu"].map((filter) => (
                <Button
                  key={filter}
                  variant="outline"
                  size="sm"
                  className={filter === "All" ? "bg-saffron/10 border-saffron/30 text-saffron" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pandits Grid */}
      <section className="py-12">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {panditsList.map((pandit) => (
              <div
                key={pandit.id}
                className="group bg-card border border-border/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-saffron/10 hover:border-saffron/30 transition-all duration-500 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pandit.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                />

                <div className="flex items-start gap-4 mb-6 relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pandit.gradient} flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    {pandit.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg truncate">{pandit.name}</h3>
                    <p className="text-xs text-saffron/70 truncate">{pandit.personality.split('.')[0]}</p>
                    <p className="text-sm text-muted-foreground mt-0.5 truncate">{pandit.specializationsList[0]}</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span className="text-sm font-semibold text-amber-600">{pandit.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-5 py-4 border-y border-border/50 relative">
                  <div className="flex-1 text-center">
                    <p className="text-xl font-bold">{pandit.experience}+</p>
                    <p className="text-xs text-muted-foreground">Years Exp</p>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="flex-1 text-center">
                    <p className="text-xl font-bold">{(pandit.consultations / 1000).toFixed(0)}K</p>
                    <p className="text-xs text-muted-foreground">Sessions</p>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="flex-1 text-center">
                    <p className="text-xl font-bold">{pandit.langs.length}</p>
                    <p className="text-xs text-muted-foreground">Languages</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 relative h-16 overflow-hidden">
                  {pandit.specializationsList.slice(0, 3).map((spec) => (
                    <span key={spec} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground whitespace-nowrap">
                      {spec}
                    </span>
                  ))}
                  {pandit.specializationsList.length > 3 && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">+{pandit.specializationsList.length - 3} more</span>
                  )}
                </div>

                <div className="flex gap-2 relative">
                  <Button
                    className={`flex-1 bg-gradient-to-r ${pandit.gradient} text-white hover:opacity-90 h-11 text-sm gap-2 shadow-lg`}
                    asChild
                  >
                    <Link href={`/chat/${pandit.id}`}>
                      <MessageCircle className="w-4 h-4" />
                      Chat Now
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-11 px-4 bg-transparent hover:bg-muted">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
