import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
    title: "Contact Us | Vedic Mate",
    description: "Get in touch with us for support and inquiries.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 px-4 md:px-8 lg:px-12 bg-background flex flex-col items-center">
            <div className="max-w-4xl w-full mt-10">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-[#F5E6D3] text-center">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-serif text-[#D4AF37]">Get in Touch</h2>
                        <p className="text-[#F5E6D3]/80">We are here to help you on your spiritual journey. Reach out to us for any assistance.</p>

                        <div className="space-y-4 mt-8">
                            <div className="flex items-center gap-4 text-[#F5E6D3]">
                                <Mail className="w-5 h-5 text-[#D4AF37]" />
                                <span>vedicmate@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#F5E6D3]">
                                <Phone className="w-5 h-5 text-[#D4AF37]" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#F5E6D3]">
                                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                                <span>Vedic Research Institute, Varanasi, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1A0F0D] p-8 rounded-xl border border-[#D4AF37]/20">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Name</label>
                                <input type="text" className="w-full bg-black/30 border border-[#D4AF37]/30 rounded-md p-2 text-[#F5E6D3] focus:border-[#D4AF37] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Email</label>
                                <input type="email" className="w-full bg-black/30 border border-[#D4AF37]/30 rounded-md p-2 text-[#F5E6D3] focus:border-[#D4AF37] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#D4AF37] mb-1">Message</label>
                                <textarea rows={4} className="w-full bg-black/30 border border-[#D4AF37]/30 rounded-md p-2 text-[#F5E6D3] focus:border-[#D4AF37] outline-none"></textarea>
                            </div>
                            <button className="w-full bg-[#D4AF37] text-black font-bold py-2 rounded-md hover:bg-[#FDB931] transition-colors">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
