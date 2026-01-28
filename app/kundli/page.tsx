import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kundli | Vedic Mate",
    description: "Generate your free Janam Kundli and get detailed analysis.",
}

export default function KundliPage() {
    return (
        <main className="min-h-screen pt-24 px-4 md:px-8 lg:px-12 bg-background flex flex-col items-center">
            <div className="max-w-4xl w-full text-center mt-20">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-[#F5E6D3]">Janampatri / Kundli</h1>
                <p className="text-[#F5E6D3]/80 text-lg">Advanced Kundli generation software is coming soon.</p>
                <div className="mt-8 p-6 border border-[#D4AF37]/20 rounded-lg bg-[#1A0F0D]/50 inline-block">
                    <span className="text-[#D4AF37]">Coming Soon</span>
                </div>
            </div>
        </main>
    )
}
