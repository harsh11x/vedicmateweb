
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"

export default function Disclaimer() {
    return (
        <main className="min-h-screen bg-[#0C0806] flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
            <DecorativeMandala className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none" />

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-4">Disclaimer</h1>
            <p className="text-[#F5E6D3] text-lg max-w-md">
                Astrology is a guidance tool. Results may vary.
            </p>
        </main>
    )
}
