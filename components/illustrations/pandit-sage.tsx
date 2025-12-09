"use client"

export function PanditSage({
  variant = "meditating",
  className = "",
}: { variant?: "meditating" | "blessing" | "reading"; className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C4A0" />
          <stop offset="100%" stopColor="#D4A574" />
        </linearGradient>
        <linearGradient id="dhotiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="50%" stopColor="#FFF5E6" />
          <stop offset="100%" stopColor="#FFE8D6" />
        </linearGradient>
        <linearGradient id="angavastramGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#F7931E" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
        <filter id="softShadow">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2" />
        </filter>
      </defs>
      {/* Aura glow */}
      <ellipse cx="100" cy="150" rx="80" ry="120" fill="#FFD700" opacity="0.1" className="animate-glow" />
      <ellipse cx="100" cy="150" rx="60" ry="100" fill="#FF6B35" opacity="0.08" />
      {/* Sitting mat / Asana */}
      <ellipse cx="100" cy="280" rx="70" ry="15" fill="#8B4513" />
      <ellipse cx="100" cy="278" rx="65" ry="12" fill="#A0522D" />
      <path d="M35 278 Q100 260 165 278" fill="none" stroke="#D4AF37" strokeWidth="2" />
      {/* Legs in lotus position */}
      <ellipse cx="70" cy="260" rx="30" ry="12" fill="url(#dhotiGradient)" />
      <ellipse cx="130" cy="260" rx="30" ry="12" fill="url(#dhotiGradient)" />
      {/* Body / Torso */}
      <path
        d="M60 180 Q60 220 70 260 L130 260 Q140 220 140 180 Z"
        fill="url(#dhotiGradient)"
        filter="url(#softShadow)"
      />
      {/* Dhoti folds */}
      <path d="M70 200 Q100 210 130 200" fill="none" stroke="#E8D5C4" strokeWidth="1" />
      <path d="M75 220 Q100 230 125 220" fill="none" stroke="#E8D5C4" strokeWidth="1" />
      <path d="M78 240 Q100 250 122 240" fill="none" stroke="#E8D5C4" strokeWidth="1" />
      {/* Angavastram (sacred cloth) */}
      <path
        d="M50 120 Q40 160 50 200 Q80 180 100 180 Q120 180 150 200 Q160 160 150 120"
        fill="url(#angavastramGradient)"
        opacity="0.9"
      />
      <path d="M55 130 Q100 150 145 130" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
      <path d="M50 160 Q100 180 150 160" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
      {/* Neck */}
      <rect x="85" y="95" width="30" height="25" fill="url(#skinTone)" />
      {/* Rudraksha mala */}
      <g>
        {[...Array(15)].map((_, i) => {
          const angle = (i * 12 - 90) * (Math.PI / 180)
          const x = 100 + Math.cos(angle) * 35
          const y = 130 + Math.sin(angle) * 25
          return <circle key={i} cx={x} cy={y} r="3" fill="#8B4513" />
        })}
      </g>
      {/* Head */}
      <ellipse cx="100" cy="70" rx="35" ry="40" fill="url(#skinTone)" filter="url(#softShadow)" />
      {/* Hair / Bald with sikha */}
      <ellipse cx="100" cy="45" rx="30" ry="15" fill="#4A3728" />
      <path d="M100 30 Q110 20 105 35" fill="#4A3728" /> {/* Sikha tuft */}
      {/* Tilak */}
      <path d="M100 50 L95 65 L100 60 L105 65 Z" fill="#FF6B35" />
      <line x1="100" y1="52" x2="100" y2="58" stroke="#FFC107" strokeWidth="2" />
      {/* Eyes (closed in meditation) */}
      <path d="M85 70 Q90 68 95 70" fill="none" stroke="#3E2723" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M105 70 Q110 68 115 70" fill="none" stroke="#3E2723" strokeWidth="1.5" strokeLinecap="round" />
      {/* Nose */}
      <path d="M100 70 Q102 80 100 85" fill="none" stroke="#C9A87C" strokeWidth="1.5" />
      {/* Serene smile */}
      <path d="M92 92 Q100 96 108 92" fill="none" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
      {/* Ears */}
      <ellipse cx="65" cy="72" rx="6" ry="10" fill="url(#skinTone)" />
      <ellipse cx="135" cy="72" rx="6" ry="10" fill="url(#skinTone)" />
      {/* Arms in meditation pose */}
      {variant === "meditating" && (
        <>
          {/* Left arm */}
          <path
            d="M60 140 Q40 180 60 220 Q70 240 85 250"
            fill="url(#skinTone)"
            stroke="url(#skinTone)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Right arm */}
          <path
            d="M140 140 Q160 180 140 220 Q130 240 115 250"
            fill="url(#skinTone)"
            stroke="url(#skinTone)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Hands in mudra */}
          <circle cx="85" cy="252" r="12" fill="url(#skinTone)" />
          <circle cx="115" cy="252" r="12" fill="url(#skinTone)" />
        </>
      )}
      {variant === "blessing" && (
        <>
          {/* Left arm resting */}
          <path
            d="M60 140 Q40 180 60 220 Q70 240 85 250"
            fill="url(#skinTone)"
            stroke="url(#skinTone)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <circle cx="85" cy="252" r="12" fill="url(#skinTone)" />
          {/* Right arm raised blessing */}
          <path
            d="M140 140 Q170 120 155 80"
            fill="url(#skinTone)"
            stroke="url(#skinTone)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <circle cx="155" cy="75" r="15" fill="url(#skinTone)" />
          {/* Blessing gesture fingers */}
          <path d="M155 60 L155 50" stroke="url(#skinTone)" strokeWidth="5" strokeLinecap="round" />
          <path d="M150 62 L145 55" stroke="url(#skinTone)" strokeWidth="5" strokeLinecap="round" />
        </>
      )}
      {variant === "reading" && (
        <>
          {/* Both arms holding book */}
          <path
            d="M60 140 Q50 160 55 190"
            fill="url(#skinTone)"
            stroke="url(#skinTone)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M140 140 Q150 160 145 190"
            fill="url(#skinTone)"
            stroke="url(#skinTone)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          {/* Ancient scripture book */}
          <rect x="55" y="185" width="90" height="60" rx="3" fill="#D4C4A8" />
          <rect x="60" y="190" width="80" height="50" fill="#E8D5B5" />
          <line x1="100" y1="190" x2="100" y2="240" stroke="#C9B49A" strokeWidth="2" />
          {/* Sanskrit text lines */}
          <line x1="65" y1="200" x2="95" y2="200" stroke="#6B0F1A" strokeWidth="1" opacity="0.5" />
          <line x1="65" y1="210" x2="90" y2="210" stroke="#6B0F1A" strokeWidth="1" opacity="0.5" />
          <line x1="65" y1="220" x2="92" y2="220" stroke="#6B0F1A" strokeWidth="1" opacity="0.5" />
          <line x1="105" y1="200" x2="135" y2="200" stroke="#6B0F1A" strokeWidth="1" opacity="0.5" />
          <line x1="105" y1="210" x2="130" y2="210" stroke="#6B0F1A" strokeWidth="1" opacity="0.5" />
          <line x1="105" y1="220" x2="133" y2="220" stroke="#6B0F1A" strokeWidth="1" opacity="0.5" />
          {/* Hands */}
          <circle cx="55" cy="195" r="10" fill="url(#skinTone)" />
          <circle cx="145" cy="195" r="10" fill="url(#skinTone)" />
        </>
      )}
      {/* Sacred items nearby */}
      {/* Kamandalu */}
      <g transform="translate(160, 240)">
        <ellipse cx="0" cy="20" rx="12" ry="8" fill="#B87333" />
        <path d="M-10 20 Q-12 5 0 0 Q12 5 10 20" fill="#CD853F" />
        <ellipse cx="0" cy="0" rx="6" ry="3" fill="#B87333" />
        <path d="M5 0 Q15 -5 10 -15 Q5 -20 0 -15" fill="none" stroke="#8B4513" strokeWidth="3" />
      </g>
      {/* Small diya */}
      <g transform="translate(25, 250)">
        <ellipse cx="0" cy="10" rx="10" ry="5" fill="#D4AF37" />
        <ellipse cx="0" cy="8" rx="7" ry="3" fill="#B8860B" />
        <ellipse cx="0" cy="0" rx="3" ry="6" fill="#FF6B35" className="animate-flame" />
        <ellipse cx="0" cy="-2" rx="1.5" ry="4" fill="#FFD700" />
      </g>
    </svg>
  )
}

export function FloatingSanskrit({ className = "" }: { className?: string }) {
  const mantras = ["ॐ", "श्री", "नमः", "स्वाहा", "शान्ति", "सत्यम्", "शिवम्", "सुन्दरम्"]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {mantras.map((mantra, i) => (
        <span
          key={i}
          className="absolute font-serif text-[#D4AF37] animate-sanskrit"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 25}%`,
            fontSize: `${16 + (i % 3) * 8}px`,
            opacity: 0.15 + (i % 3) * 0.1,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          {mantra}
        </span>
      ))}
    </div>
  )
}
