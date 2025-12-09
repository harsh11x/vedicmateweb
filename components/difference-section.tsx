import { Check, X } from "lucide-react"

const comparisons = [
  { traditional: "Limited availability", vedic: "Available 24/7/365" },
  { traditional: "Need appointments", vedic: "Instant consultation" },
  { traditional: "₹500-2000 per session", vedic: "₹25/minute" },
  { traditional: "One specialization", vedic: "34 different specialists" },
  { traditional: "Time zone dependent", vedic: "Global accessibility" },
  { traditional: "Judgment & pressure", vedic: "Non-judgmental AI" },
  { traditional: "No record keeping", vedic: "Complete history saved" },
  { traditional: "One language only", vedic: "15+ languages supported" },
]

export function DifferenceSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">What Makes Us Different</h2>
          <p className="text-xl text-primary font-serif">हम अलग कैसे हैं</p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl border-2 border-border overflow-hidden shadow-lg">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-primary/10">
              <div className="p-4 md:p-6 text-center border-r border-border">
                <h3 className="text-lg md:text-xl font-bold text-foreground">Traditional Pandits</h3>
                <p className="text-sm text-muted-foreground">पारंपरिक पंडित</p>
              </div>
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-primary">Vedic Mate AI Pandits</h3>
                <p className="text-sm text-primary/80">वैदिक मेट ए.आई. पंडित</p>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 ${index !== comparisons.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-4 md:p-5 flex items-center gap-3 border-r border-border bg-muted/30">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">{item.traditional}</span>
                </div>
                <div className="p-4 md:p-5 flex items-center gap-3 bg-primary/5">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground font-medium">{item.vedic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
