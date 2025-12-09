import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-bold">Legal</span>
          </div>
          <h1 className="text-massive leading-[0.85] tracking-tighter mb-8">Privacy<br />Policy.</h1>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-a:text-black">
            <p className="font-mono text-sm text-muted-foreground mb-12">Last updated: December 2024</p>

            <div className="space-y-12">
              <section>
                <h3>1. Information We Collect</h3>
                <p>
                  We collect information you provide directly to us, including your name, email address, phone number,
                  birth details for astrological consultations, and any other information you choose to provide during
                  your consultations with our AI Pandits.
                </p>
              </section>

              <section>
                <h3>2. How We Use Your Information</h3>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, including
                  generating personalized astrological readings, horoscopes, and consultations. Your birth details are
                  essential for accurate Vedic astrological analysis.
                </p>
              </section>

              <section>
                <h3>3. Data Security</h3>
                <p>
                  We implement appropriate security measures to protect your personal information. All consultation
                  data is encrypted and stored securely. We do not share your personal consultation details with third
                  parties.
                </p>
              </section>

              <section>
                <h3>4. Your Rights</h3>
                <p>
                  You have the right to access, update, or delete your personal information at any time. You can also
                  request a copy of all data we have stored about you.
                </p>
              </section>

              <section>
                <h3>5. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@vedicmate.com">privacy@vedicmate.com</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
