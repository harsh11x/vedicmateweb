"use client"

import { Check, X } from "lucide-react"

const comparisons = [
  { feature: "Availability", traditional: "Limited hours", vedic: "24/7/365" },
  { feature: "Appointment", traditional: "Required", vedic: "Instant access" },
  { feature: "Cost per session", traditional: "₹500-2000", vedic: "₹25/minute" },
  { feature: "Specialists", traditional: "One", vedic: "34 different experts" },
  { feature: "Languages", traditional: "Usually one", vedic: "15+ supported" },
  { feature: "Consultation history", traditional: "Not saved", vedic: "Complete records" },
  { feature: "Privacy", traditional: "Face-to-face", vedic: "Anonymous if preferred" },
]

export function ComparisonSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">A better way to seek guidance</h2>
          <p className="text-lg text-muted-foreground">See how Vedic Mate compares to traditional consultations.</p>
        </div>

        {/* Comparison Table */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-border bg-muted/50">
            <div className="text-sm font-medium text-muted-foreground">Feature</div>
            <div className="text-sm font-medium text-muted-foreground text-center">Traditional Pandit</div>
            <div className="text-sm font-medium text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold font-semibold">
                Vedic Mate
              </span>
            </div>
          </div>

          {/* Table Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 p-6 border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
            >
              <div className="font-medium">{row.feature}</div>
              <div className="text-center text-muted-foreground flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-destructive/60" />
                {row.traditional}
              </div>
              <div className="text-center font-medium flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                {row.vedic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
