"use client"

import { useRef, useState, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useScroll, ScrollControls, Html, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"
import { PanditSage } from "@/components/illustrations/pandit-sage"

// Stone texture simulation
const StoneMaterial = ({ color = "#3E2723" }: { color?: string }) => (
    <meshStandardMaterial
        color={color}
        roughness={0.9}
        metalness={0.1}
    />
)

// Wooden texture simulation
const WoodMaterial = ({ color = "#5D4037" }: { color?: string }) => (
    <meshStandardMaterial
        color={color}
        roughness={0.6}
        metalness={0.0}
    />
)

function Pillar({ position }: { position: [number, number, number] }) {
    return (
        <group position={position}>
            <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.2, 1, 1.2]} />
                <StoneMaterial color="#2D1B18" />
            </mesh>
            <mesh position={[0, 3, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.4, 0.5, 5, 8]} />
                <StoneMaterial color="#3E2723" />
            </mesh>
            <mesh position={[0, 5.5, 0]} castShadow receiveShadow>
                <boxGeometry args={[1, 0.5, 1]} />
                <StoneMaterial color="#2D1B18" />
            </mesh>
        </group>
    )
}

function Diya({ position }: { position: [number, number, number] }) {
    return (
        <group position={position}>
            <mesh position={[0, 0, 0]} castShadow>
                <cylinderGeometry args={[0.15, 0.1, 0.1, 16]} />
                <meshStandardMaterial color="#8D6E63" />
            </mesh>
            <pointLight position={[0, 0.2, 0]} intensity={1.5} distance={3} color="#FF6B35" decay={2} />
            <mesh position={[0, 0.15, 0]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshBasicMaterial color="#FFD700" />
            </mesh>
        </group>
    )
}

function BajotTable({ position }: { position: [number, number, number] }) {
    return (
        <group position={position}>
            {/* Table Top */}
            <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
                <boxGeometry args={[2.5, 0.1, 1.5]} />
                <WoodMaterial color="#4E342E" />
            </mesh>
            {/* Legs */}
            <mesh position={[-1.1, 0.2, -0.6]} castShadow>
                <cylinderGeometry args={[0.05, 0.05, 0.4]} />
                <WoodMaterial />
            </mesh>
            <mesh position={[1.1, 0.2, -0.6]} castShadow>
                <cylinderGeometry args={[0.05, 0.05, 0.4]} />
                <WoodMaterial />
            </mesh>
            <mesh position={[-1.1, 0.2, 0.6]} castShadow>
                <cylinderGeometry args={[0.05, 0.05, 0.4]} />
                <WoodMaterial />
            </mesh>
            <mesh position={[1.1, 0.2, 0.6]} castShadow>
                <cylinderGeometry args={[0.05, 0.05, 0.4]} />
                <WoodMaterial />
            </mesh>

            {/* Book/Scriptures */}
            <mesh position={[0, 0.5, 0]} rotation={[0, 0.2, 0]} castShadow>
                <boxGeometry args={[0.8, 0.1, 0.6]} />
                <meshStandardMaterial color="#F5E6D3" />
            </mesh>
        </group>
    )
}

function TempleCorridor({ mode }: { mode: 'intro' | 'seated' }) {
    const scroll = useScroll()
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (mode === 'intro' && scroll) {
            // Move camera forward based on scroll
            const targetZ = -scroll.offset * 18
            state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 10 + targetZ, 0.1)
            state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 2, 0.1)
        } else if (mode === 'seated') {
            // Fixed position "sitting" in front of Pandit
            state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, -16, 0.05)
            state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.2, 0.05) // Lower eye level (sitting)
        }
    })

    return (
        <group ref={groupRef}>
            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -10]} receiveShadow>
                <planeGeometry args={[20, 40]} />
                <StoneMaterial color="#1A1410" />
            </mesh>

            {/* Ceiling */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, -10]} receiveShadow>
                <planeGeometry args={[20, 40]} />
                <StoneMaterial color="#0F0A08" />
            </mesh>

            {/* Pillars */}
            {[-2, -6, -10, -14, -18].map((z, i) => (
                <group key={`pillars-${i}`}>
                    <Pillar position={[-3, -0.5, z]} />
                    <Diya position={[-2.2, 0.5, z]} />
                    <Pillar position={[3, -0.5, z]} />
                    <Diya position={[2.2, 0.5, z]} />
                </group>
            ))}

            {/* Sanctum Area */}
            <group position={[0, 0, -20]}>
                {/* Back Wall */}
                <mesh position={[0, 3, -2]} receiveShadow>
                    <planeGeometry args={[20, 15]} />
                    <StoneMaterial color="#0F0A08" />
                </mesh>

                {/* Platform */}
                <mesh position={[0, 0, 0]} receiveShadow>
                    <boxGeometry args={[4, 0.5, 3]} />
                    <StoneMaterial color="#2D1B18" />
                </mesh>

                {/* The Pandit */}
                <group position={[0, 1.5, 0]}>
                    <Float speed={2} rotationIntensity={0.05} floatIntensity={0.1}>
                        <Html transform position={[0, 0, 0]} scale={0.3} style={{ pointerEvents: 'none' }}>
                            <div className="w-[600px] h-[800px] flex items-center justify-center">
                                <PanditSage variant="reading" className="w-full h-full drop-shadow-[0_0_50px_rgba(255,107,53,0.3)]" />
                            </div>
                        </Html>
                    </Float>
                </group>

                {/* The Table (Bajot) in front of Pandit */}
                <BajotTable position={[0, 0.2, 1.5]} />
            </group>

            {/* Atmospheric Particles */}
            <Sparkles count={150} scale={15} size={3} speed={0.3} opacity={0.4} color="#FFD700" position={[0, 2, -10]} />
        </group>
    )
}

export function TempleScene({ mode = 'intro' }: { mode?: 'intro' | 'seated' }) {
    return (
        <div className="w-full h-full bg-[#050302]">
            <Canvas shadows camera={{ position: [0, 2, 10], fov: 45 }}>
                <fog attach="fog" args={['#050302', 2, 20]} />
                <ambientLight intensity={0.3} color="#FF6B35" />
                <spotLight position={[0, 10, -10]} angle={0.5} penumbra={1} intensity={1} color="#FFD700" castShadow />

                {mode === 'intro' ? (
                    <ScrollControls pages={2} damping={0.2}>
                        <TempleCorridor mode="intro" />
                    </ScrollControls>
                ) : (
                    <TempleCorridor mode="seated" />
                )}
            </Canvas>

            {mode === 'intro' && (
                <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
                    <p className="text-[#D4AF37] opacity-60 text-sm font-serif animate-pulse">Scroll to approach the Sanctum</p>
                </div>
            )}
        </div>
    )
}
