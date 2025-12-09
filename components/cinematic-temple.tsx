"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import Image from "next/image"
import { DustParticles } from "@/components/dust-particles"

interface CinematicTempleProps {
    mode?: 'intro' | 'seated'
}

export function CinematicTemple({ mode = 'intro' }: CinematicTempleProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Smoother scroll physics
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20,
        mass: 1.2,
        restDelta: 0.001
    })

    // Intro Mode Animations (The Journey In)
    const bgScale = useTransform(smoothScroll, [0, 1], [1.1, 1.3]) // Subtle zoom
    const bgY = useTransform(smoothScroll, [0, 1], ["0%", "5%"])
    const overlayOpacity = useTransform(smoothScroll, [0, 0.5], [0.3, 0]) // Clearer view as we enter

    // Seated Mode (Static/Ambient)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth mouse movement for parallax
    const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 30 })
    const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 30 })

    useEffect(() => {
        if (mode === 'seated') {
            const handleMouseMove = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 15
                const y = (e.clientY / window.innerHeight - 0.5) * 15
                mouseX.set(x)
                mouseY.set(y)
            }
            window.addEventListener('mousemove', handleMouseMove)
            return () => window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [mode, mouseX, mouseY])

    // Parallax transforms for seated mode
    const bgX = useTransform(smoothMouseX, (x) => x * -0.5)
    const bgYSeated = useTransform(smoothMouseY, (y) => y * -0.5)

    if (mode === 'seated') {
        return (
            <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-[#0C0806]">
                {/* Background - Rich Warmth */}
                <motion.div
                    className="absolute inset-0 z-0 will-change-transform"
                    style={{ x: bgX, y: bgYSeated, scale: 1.05 }}
                >
                    <Image
                        src="/assets/temple-bg.png"
                        alt="Temple Sanctum"
                        fill
                        className="object-cover opacity-80" // Increased visibility
                        priority
                        quality={90}
                    />
                    {/* Divine Warm Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0D] via-transparent to-[#1A0F0D]/40" />
                    <div className="absolute inset-0 bg-[#FF9933] mix-blend-overlay opacity-10" /> {/* Saffron Tint */}
                </motion.div>

                {/* Dust Particles - Golden */}
                <DustParticles />

                {/* Atmosphere */}
                <div className="absolute inset-0 z-30 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
            </div>
        )
    }

    // Intro Mode (Hero Background)
    return (
        <div ref={containerRef} className="relative w-full h-[150vh] pointer-events-none">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0C0806]">

                {/* Background Layer */}
                <motion.div
                    style={{ scale: bgScale, y: bgY }}
                    className="absolute inset-0 z-0 will-change-transform"
                >
                    <Image
                        src="/assets/temple-bg.png"
                        alt="Temple Sanctum"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />

                    {/* Depth Gradients */}
                    <motion.div
                        style={{ opacity: overlayOpacity }}
                        className="absolute inset-0 bg-black/40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

                    {/* Golden Haze */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1A0F0D_90%)]" />
                    <div className="absolute inset-0 bg-[#FFD700] mix-blend-overlay opacity-5" />
                </motion.div>

                {/* Dust Particles */}
                <DustParticles />
            </div>
        </div>
    )
}
