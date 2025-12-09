import { Header } from "@/components/header"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MessageCircle, Star } from "lucide-react"
import { PANDITS } from "@/lib/pandit-data"

const LANGUAGES = ["Hindi", "English", "Sanskrit", "Tamil", "Gujarati", "Marathi", "Bengali", "Punjabi", "Malayalam", "Kannada", "Telugu"]

// Helper to generate consistent visual data from ID (B&W Version)
function getVisualData(id: string, index: number, name: string) {
  const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)

  // Rating (4.5 to 5.0)
  const rating = (4.5 + (seed % 50) / 100).toFixed(1)

  // Experience (10 to 40 years)
  const experience = 10 + (seed % 30)

  // Consultations (5000 to 30000)
  const consultations = 5000 + (seed * 100) % 25000

  // Initials
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2)

  // Languages - Take Hindi/English + 1 random regional
  const regional = LANGUAGES[2 + (seed % (LANGUAGES.length - 2))]
  const langs = ["Hindi", "English", regional]

  return { rating, experience, consultations, initials, langs }
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
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Modern Hero for Listing */}
      <section className="pt-32 pb-12 relative border-b border-border">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            AI Models <span className="text-muted-foreground font-light text-2xl ml-2">({panditsList.length} Available)</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Select a model specialized for your specific query. Each model is fine-tuned on distinct Vedic datasets.
          </p>
        </div>
      </section>

      {/* Pandits Grid (ZenMux Style) */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {panditsList.map((pandit) => (
              <div
                key={pandit.id}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >

                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-black text-white flex items-center justify-center font-bold text-lg">
                    {pandit.initials}
                  </div>
                  <div className="flex items-center gap-1 bg-secondary px-2 py-1 rounded text-xs font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    {pandit.rating}
                  </div>
                </div>

                {/* Identity */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg leading-tight mb-1">{pandit.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{pandit.specializationsList[0]}</p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground mb-6">
                  <div>
                    <span className="block text-foreground font-semibold">{pandit.experience}+</span>
                    <span className="text-xs">Years</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-semibold">{(pandit.consultations / 1000).toFixed(0)}k</span>
                    <span className="text-xs">Sessions</span>
                  </div>
                </div>

                {/* Action */}
                <Button className="w-full btn-zen-outline hover:bg-black hover:text-white transition-colors gap-2" asChild>
                  <Link href={`/chat/${pandit.id}`}>
                    Chat Now <MessageCircle className="w-4 h-4 ml-auto" />
                  </Link>
                </Button>

              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

