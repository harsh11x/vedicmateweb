import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { LanguagesSection } from "@/components/languages-section"
import { PanditsSection } from "@/components/pandits-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <LanguagesSection />
      <PanditsSection />
      <ServicesSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
