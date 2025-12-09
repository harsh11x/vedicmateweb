"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Pandit Rajesh's guidance was incredible. His kundli analysis was spot-on.",
    lang: "Hindi",
  },
  {
    name: "Karthik Iyer",
    location: "Chennai",
    text: "Amazing that I could consult in Tamil! The pandit understood everything.",
    lang: "Tamil",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    text: "24/7 availability changed my life. Got guidance at 2 AM when I needed it.",
    lang: "Gujarati",
  },
  {
    name: "Lakshmi Reddy",
    location: "Hyderabad",
    text: "Speaking in Telugu made the consultation so comfortable. Accurate predictions.",
    lang: "Telugu",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-bold">Community</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Voices of<br />Devotion.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group border border-border p-10 rounded-3xl hover:bg-black hover:text-white transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">"{testimonial.text}"</p>

              <div className="flex justify-between items-end">
                <div>
                  <p className="font-bold text-sm uppercase tracking-wide">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground group-hover:text-neutral-400">{testimonial.location}</p>
                </div>
                <div className="text-xs border border-current px-3 py-1 rounded-full opacity-60">
                  {testimonial.lang}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
