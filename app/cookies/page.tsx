
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"

export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
            <DecorativeMandala className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none" />

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-4">Cookie Policy</h1>
            <p className="text-[#F5E6D3] text-lg max-w-md">
                We use cookies to enhance your experience. Detailed policy coming soon.
            </p>
        </main>
    )
}
