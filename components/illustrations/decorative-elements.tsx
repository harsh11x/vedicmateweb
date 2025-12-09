"use client"

export function TemplePillar({ className = "", side = "left" }: { className?: string; side?: "left" | "right" }) {
  const isLeft = side === "left"

  return (
    <svg viewBox="0 0 100 600" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id={`pillarGrad${side}`}
          x1={isLeft ? "0%" : "100%"}
          y1="0%"
          x2={isLeft ? "100%" : "0%"}
          y2="0%"
        >
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="30%" stopColor="#C9B49A" />
          <stop offset="70%" stopColor="#A08060" />
          <stop offset="100%" stopColor="#6B5B4F" />
        </linearGradient>
      </defs>

      {/* Base */}
      <rect x="10" y="550" width="80" height="50" fill="#8B7355" rx="5" />
      <rect x="5" y="540" width="90" height="15" fill="#D4AF37" rx="3" />

      {/* Main pillar shaft */}
      <rect x="20" y="100" width="60" height="440" fill={`url(#pillarGrad${side})`} />

      {/* Carved details */}
      {[150, 250, 350, 450].map((y, i) => (
        <g key={i}>
          <rect x="25" y={y} width="50" height="60" fill="#A08060" rx="2" />
          <rect x="30" y={y + 5} width="40" height="50" fill="#B8A58A" rx="2" />
          {/* Deity carving placeholder */}
          <ellipse cx="50" cy={y + 30} rx="12" ry="18" fill="#C9B49A" />
          <circle cx="50" cy={y + 22} r="6" fill="#B8A58A" />
        </g>
      ))}

      {/* Capital (top) */}
      <rect x="5" y="85" width="90" height="20" fill="#D4AF37" rx="3" />
      <rect x="15" y="65" width="70" height="25" fill="#C9B49A" rx="5" />
      <rect x="10" y="50" width="80" height="20" fill="#D4AF37" rx="3" />

      {/* Lotus capital decoration */}
      <ellipse cx="50" cy="45" rx="35" ry="10" fill="#B8860B" />
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={i}
          cx={50 + Math.cos((i * 45 * Math.PI) / 180) * 25}
          cy={40 + Math.sin((i * 45 * Math.PI) / 180) * 8}
          rx="8"
          ry="15"
          fill="#D4AF37"
          transform={`rotate(${i * 45} ${50 + Math.cos((i * 45 * Math.PI) / 180) * 25} ${40 + Math.sin((i * 45 * Math.PI) / 180) * 8})`}
        />
      ))}
    </svg>
  )
}

export function SacredBell({ className = "", animate = false }: { className?: string; animate?: boolean }) {
  return (
    <svg
      viewBox="0 0 60 100"
      className={`${className} ${animate ? "animate-bell" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bellGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {/* Chain/rope */}
      <path d="M30 0 L30 15" stroke="#8B4513" strokeWidth="3" />

      {/* Top hook */}
      <ellipse cx="30" cy="18" rx="8" ry="6" fill="url(#bellGold)" />

      {/* Bell body */}
      <path d="M15 25 Q10 50 8 70 Q8 85 30 90 Q52 85 52 70 Q50 50 45 25 Z" fill="url(#bellGold)" />

      {/* Bell rim */}
      <ellipse cx="30" cy="88" rx="24" ry="8" fill="#B8860B" />

      {/* Decorative bands */}
      <ellipse cx="30" cy="40" rx="16" ry="4" fill="none" stroke="#FFE55C" strokeWidth="2" />
      <ellipse cx="30" cy="60" rx="20" ry="5" fill="none" stroke="#FFE55C" strokeWidth="2" />

      {/* Clapper */}
      <line x1="30" y1="35" x2="30" y2="80" stroke="#8B4513" strokeWidth="2" />
      <circle cx="30" cy="82" r="6" fill="#6B5B4F" />
    </svg>
  )
}

export function IncenseHolder({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Stand */}
      <ellipse cx="30" cy="115" rx="25" ry="5" fill="#8B4513" />
      <rect x="25" y="80" width="10" height="35" fill="#A0522D" />
      <ellipse cx="30" cy="80" rx="15" ry="6" fill="#CD853F" />

      {/* Incense stick */}
      <line x1="30" y1="20" x2="30" y2="80" stroke="#4A3728" strokeWidth="2" />

      {/* Smoke particles */}
      <g className="animate-smoke">
        <ellipse cx="30" cy="15" rx="3" ry="8" fill="#C9B49A" opacity="0.6" />
      </g>
      <g className="animate-smoke" style={{ animationDelay: "1s" }}>
        <ellipse cx="32" cy="8" rx="4" ry="10" fill="#D4C4B0" opacity="0.4" />
      </g>
      <g className="animate-smoke" style={{ animationDelay: "2s" }}>
        <ellipse cx="28" cy="0" rx="5" ry="12" fill="#E8D5C4" opacity="0.3" />
      </g>

      {/* Glowing tip */}
      <circle cx="30" cy="20" r="3" fill="#FF6B35">
        <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.7;1" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export function RotatingMandala({
  className = "",
  size = "large",
}: { className?: string; size?: "small" | "medium" | "large" }) {
  const dimensions = { small: 100, medium: 200, large: 400 }
  const dim = dimensions[size]
  const center = dim / 2

  return (
    <svg
      viewBox={`0 0 ${dim} ${dim}`}
      className={`${className} animate-mandala`}
      style={{ animationDuration: size === "large" ? "120s" : size === "medium" ? "80s" : "60s" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`mandalaGrad${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Outer circles */}
      <circle cx={center} cy={center} r={center - 5} fill="none" stroke={`url(#mandalaGrad${size})`} strokeWidth="2" />
      <circle cx={center} cy={center} r={center - 20} fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
      <circle cx={center} cy={center} r={center - 40} fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.25" />

      {/* Petals */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180
        const x = center + Math.cos(angle) * (center - 30)
        const y = center + Math.sin(angle) * (center - 30)
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx={dim / 20}
            ry={dim / 10}
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1"
            opacity="0.2"
            transform={`rotate(${i * 22.5} ${x} ${y})`}
          />
        )
      })}

      {/* Inner geometric pattern */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180
        const x1 = center + Math.cos(angle) * (center - 60)
        const y1 = center + Math.sin(angle) * (center - 60)
        const x2 = center + Math.cos(angle + Math.PI) * (center - 60)
        const y2 = center + Math.sin(angle + Math.PI) * (center - 60)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FF6B35" strokeWidth="1" opacity="0.15" />
      })}

      {/* Center lotus */}
      <circle cx={center} cy={center} r={dim / 10} fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.3" />
      <circle cx={center} cy={center} r={dim / 20} fill="#D4AF37" opacity="0.1" />
    </svg>
  )
}
