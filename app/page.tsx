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
    <main className="min-h-screen bg-background paper-texture">
      <Header />
      <HeroSection />

      {/* Morph Glass Wrapper for Lower Content */}
      <div className="relative z-10 bg-[#0C0806]/90 backdrop-blur-3xl border-t border-[#D4AF37]/10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <FeaturesSection />
        <LanguagesSection />
        <PanditsSection />
        <ServicesSection />
        <TestimonialsSection />
        <DownloadSection />
        <Footer />
      </div>
    </main>
  )
}
