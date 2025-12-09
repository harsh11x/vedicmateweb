import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-bold">Legal</span>
          </div>
          <h1 className="text-massive leading-[0.85] tracking-tighter mb-8">Refund<br />Policy.</h1>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-a:text-black">
            <p className="font-mono text-sm text-muted-foreground mb-12">Last updated: December 2024</p>

            <div className="space-y-12">
              <section>
                <h3>1. Subscription Refunds</h3>
                <p>
                  If you are not satisfied with our Premium or Family subscription, you may request a full refund
                  within 7 days of your initial purchase. After 7 days, refunds will be prorated based on usage.
                </p>
              </section>

              <section>
                <h3>2. Consultation Credits</h3>
                <p>
                  Unused consultation credits from subscription plans are non-refundable but do not expire as long as
                  your subscription is active.
                </p>
              </section>

              <section>
                <h3>3. Technical Issues</h3>
                <p>
                  If you experience technical issues that prevent you from using our services, please contact our
                  support team. We will either resolve the issue or provide appropriate compensation.
                </p>
              </section>

              <section>
                <h3>4. How to Request a Refund</h3>
                <p>
                  To request a refund, please email us at <a href="mailto:refunds@vedicmate.com">refunds@vedicmate.com</a> with your account details and reason
                  for the refund. We will process your request within 5-7 business days.
                </p>
              </section>

              <section>
                <h3>5. Cancellation</h3>
                <p>
                  You may cancel your subscription at any time. Upon cancellation, you will continue to have access to
                  premium features until the end of your current billing period.
                </p>
              </section>

              <section>
                <h3>6. Contact</h3>
                <p>
                  For any questions about refunds, please contact us at <a href="mailto:support@vedicmate.com">support@vedicmate.com</a>.
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
