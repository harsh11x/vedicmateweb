
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-background">


      <section className="pt-24 pb-12 relative overflow-hidden">
        <DecorativeMandala className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none" />
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-saffron text-sm font-medium mb-4">Refund Policy • धनवापसी नीति</span>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-8">Refund Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Subscription Refunds</h2>
                  <p className="text-muted-foreground">
                    If you are not satisfied with our Premium or Family subscription, you may request a full refund
                    within 7 days of your initial purchase. After 7 days, refunds will be prorated based on usage.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Consultation Credits</h2>
                  <p className="text-muted-foreground">
                    Unused consultation credits from subscription plans are non-refundable but do not expire as long as
                    your subscription is active.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Technical Issues</h2>
                  <p className="text-muted-foreground">
                    If you experience technical issues that prevent you from using our services, please contact our
                    support team. We will either resolve the issue or provide appropriate compensation.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. How to Request a Refund</h2>
                  <p className="text-muted-foreground">
                    To request a refund, please email us at refunds@vedicmate.com with your account details and reason
                    for the refund. We will process your request within 5-7 business days.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Cancellation</h2>
                  <p className="text-muted-foreground">
                    You may cancel your subscription at any time. Upon cancellation, you will continue to have access to
                    premium features until the end of your current billing period.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
                  <p className="text-muted-foreground">
                    For any questions about refunds, please contact us at support@vedicmate.com or call our toll-free
                    number: 1800-XXX-XXXX.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}
