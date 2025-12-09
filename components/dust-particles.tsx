"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function DustParticles() {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; duration: number; delay: number }[]>([])

    useEffect(() => {
        // Generate static particles on client side only to avoid hydration mismatch
        const newParticles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: 10 + Math.random() * 20,
            delay: Math.random() * -20
        }))
        setParticles(newParticles)
    }, [])

    return (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute w-1 h-1 bg-[#D4AF37]/40 rounded-full blur-[1px]"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                    }}
                    animate={{
                        y: [0, -100],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                />
            ))}
        </div>
    )
}
