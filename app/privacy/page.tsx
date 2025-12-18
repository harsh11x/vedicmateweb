import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 relative overflow-hidden">
        <DecorativeMandala className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none" />
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-[#D4AF37] text-sm font-medium mb-4">Privacy Policy • गोपनीयता नीति</span>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-[#F5E6D3]">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-[#F5E6D3]/80 mb-6">Last updated: December 2024</p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-[#F5E6D3]">1. Information We Collect</h2>
                  <p className="text-[#F5E6D3]/80">
                    We collect information you provide directly to us, including your name, email address, phone number,
                    birth details for astrological consultations, and any other information you choose to provide during
                    your consultations with our AI Pandits.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-[#F5E6D3]">2. How We Use Your Information</h2>
                  <p className="text-[#F5E6D3]/80">
                    We use the information we collect to provide, maintain, and improve our services, including
                    generating personalized astrological readings, horoscopes, and consultations. Your birth details are
                    essential for accurate Vedic astrological analysis.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-[#F5E6D3]">3. Data Security</h2>
                  <p className="text-[#F5E6D3]/80">
                    We implement appropriate security measures to protect your personal information. All consultation
                    data is encrypted and stored securely. We do not share your personal consultation details with third
                    parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-[#F5E6D3]">4. Your Rights</h2>
                  <p className="text-[#F5E6D3]/80">
                    You have the right to access, update, or delete your personal information at any time. You can also
                    request a copy of all data we have stored about you.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-[#F5E6D3]">5. Contact Us</h2>
                  <p className="text-[#F5E6D3]/80">
                    If you have any questions about this Privacy Policy, please contact us at privacy@vedicmate.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
