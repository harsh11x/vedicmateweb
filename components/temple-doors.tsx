"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"

export function TempleDoors() {
    // Start visible
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Only show once per session (optional, but good UX)
        // For now, let's show it on every refresh as per user request context "where is it"
        // const hasSeen = sessionStorage.getItem("hasSeenTempleEntry")
        // if (hasSeen) {
        //   setIsVisible(false)
        //   return
        // }

        // Start opening sequence after a short delay
        const timer = setTimeout(() => {
            // sessionStorage.setItem("hasSeenTempleEntry", "true")
            // We don't hide the component immediately, we let the animation play out
            // then we can remove it from DOM if needed, but AnimatePresence handles "exit"
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    // We want the doors to stay mounted until they animate out?
    // Actually easier: We always render them, and they animate *to* the open state.
    // Or we use AnimatePresence to remove them after opening?
    // Let's keep it simple: They are fixed overlay. They animate open.
    // Then we set pointer-events-none so users can click through.

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Trigger opening after wait
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 800) // Small delay to let user see the closed doors
        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div className={`fixed inset-0 z-[100] flex pointer-events-none`}>
            {/* Left Door */}
            <motion.div
                initial={{ x: "0%" }}
                animate={{ x: isOpen ? "-100%" : "0%" }}
                transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }} // Custom ease for heavy door feel
                className="w-1/2 h-full bg-[#1A0F0D] border-r-4 border-[#D4AF37] relative flex items-center justify-end pointer-events-auto"
            >
                {/* Door Texture/Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />

                {/* Decorative Panel */}
                <div className="absolute inset-4 border border-[#D4AF37]/30 rounded-lg flex items-center justify-center">
                    <div className="w-full h-full border-y-[1px] border-[#D4AF37]/10" />
                </div>

                {/* Center Handle Area - Left Half */}
                <div className="mr-[-2rem] z-10 flex flex-col items-center">
                    {/* Handle */}
                    <div className="w-4 h-32 bg-gradient-to-b from-[#B8860B] via-[#FFD700] to-[#B8860B] rounded-l-full shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
                </div>
            </motion.div>

            {/* Right Door */}
            <motion.div
                initial={{ x: "0%" }}
                animate={{ x: isOpen ? "100%" : "0%" }}
                transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-1/2 h-full bg-[#1A0F0D] border-l-4 border-[#D4AF37] relative flex items-center justify-start pointer-events-auto"
            >
                {/* Door Texture/Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />

                {/* Decorative Panel */}
                <div className="absolute inset-4 border border-[#D4AF37]/30 rounded-lg flex items-center justify-center">
                    <div className="w-full h-full border-y-[1px] border-[#D4AF37]/10" />
                </div>

                {/* Center Handle Area - Right Half */}
                <div className="ml-[-2rem] z-10 flex flex-col items-center">
                    {/* Handle */}
                    <div className="w-4 h-32 bg-gradient-to-b from-[#B8860B] via-[#FFD700] to-[#B8860B] rounded-r-full shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
                </div>
            </motion.div>

            {/* Central 'Om' or Light that fades out */}
            <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 1.5 : 1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none mix-blend-screen"
            >
                <div className="relative">
                    <div className="text-8xl md:text-9xl text-[#FFD700] drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-pulse">
                        ॐ
                    </div>
                    {/* Burst rays */}
                    <div className="absolute inset-0 bg-[#FFD700] blur-3xl opacity-50" />
                </div>
            </motion.div>

            {/* Light Burst from behind */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 0 : 0.5 }} // Flash of light
                transition={{ duration: 0.5 }}
                className="fixed inset-0 bg-[#FFD700] z-[90] pointer-events-none mix-blend-overlay"
            />

        </div>
    )
}
