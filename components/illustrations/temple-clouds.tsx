"use client"

export function TempleOnClouds({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Gradients for depth */}
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF3E2" stopOpacity="0" />
          <stop offset="100%" stopColor="#F5E6D3" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5E6D3" />
        </linearGradient>
        <linearGradient id="templeGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A853" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="templeBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#F5E6D3" />
        </linearGradient>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#8B4513" floodOpacity="0.15" />
        </filter>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="400" cy="250" r="200" fill="#D4A853" opacity="0.08" className="animate-glow" />

      {/* Distant clouds */}
      <g className="animate-drift" style={{ animationDuration: "15s" }}>
        <ellipse cx="100" cy="380" rx="80" ry="30" fill="url(#cloudGradient)" opacity="0.4" />
        <ellipse cx="120" cy="370" rx="50" ry="20" fill="#FFFFFF" opacity="0.5" />
      </g>
      <g className="animate-drift-reverse" style={{ animationDuration: "18s" }}>
        <ellipse cx="700" cy="400" rx="90" ry="35" fill="url(#cloudGradient)" opacity="0.4" />
        <ellipse cx="680" cy="390" rx="55" ry="22" fill="#FFFFFF" opacity="0.5" />
      </g>

      {/* Main cloud platform */}
      <g filter="url(#softShadow)">
        <path
          d="M150 380 Q200 340 300 355 Q350 310 420 330 Q500 300 560 325 Q620 310 680 345 Q730 335 750 370 Q780 400 750 440 Q700 480 600 470 Q480 500 380 480 Q280 500 200 470 Q120 480 100 440 Q80 400 150 380Z"
          fill="url(#cloudGradient)"
          className="animate-float-slow"
          style={{ animationDelay: "0.5s" }}
        />
        {/* Cloud highlights */}
        <ellipse cx="300" cy="370" rx="60" ry="25" fill="#FFFFFF" opacity="0.6" />
        <ellipse cx="500" cy="365" rx="70" ry="28" fill="#FFFFFF" opacity="0.6" />
        <ellipse cx="650" cy="375" rx="50" ry="22" fill="#FFFFFF" opacity="0.5" />
      </g>

      {/* Small floating clouds */}
      <g className="animate-drift" style={{ animationDuration: "12s", animationDelay: "2s" }}>
        <ellipse cx="200" cy="200" rx="45" ry="18" fill="#FFFFFF" opacity="0.5" />
        <ellipse cx="220" cy="195" rx="30" ry="12" fill="#FFFFFF" opacity="0.6" />
      </g>
      <g className="animate-drift-reverse" style={{ animationDuration: "14s", animationDelay: "4s" }}>
        <ellipse cx="620" cy="180" rx="50" ry="20" fill="#FFFFFF" opacity="0.5" />
        <ellipse cx="600" cy="175" rx="35" ry="14" fill="#FFFFFF" opacity="0.6" />
      </g>

      {/* Temple Structure */}
      <g filter="url(#softShadow)" className="animate-float-slow">
        {/* Temple base platform */}
        <rect x="280" y="340" width="240" height="20" rx="3" fill="url(#templeGold)" />
        <rect x="290" y="335" width="220" height="8" rx="2" fill="#E8C872" />

        {/* Main temple body */}
        <rect x="310" y="240" width="180" height="100" fill="url(#templeBody)" stroke="#D4A853" strokeWidth="2" />

        {/* Pillars */}
        <rect x="320" y="250" width="12" height="85" fill="#D4A853" opacity="0.8" />
        <rect x="350" y="250" width="12" height="85" fill="#D4A853" opacity="0.6" />
        <rect x="438" y="250" width="12" height="85" fill="#D4A853" opacity="0.6" />
        <rect x="468" y="250" width="12" height="85" fill="#D4A853" opacity="0.8" />

        {/* Temple entrance arch */}
        <path d="M370 340 L370 280 Q400 255 430 280 L430 340Z" fill="#4A3728" stroke="#D4A853" strokeWidth="2" />
        {/* Inner glow in entrance */}
        <path d="M380 340 L380 290 Q400 270 420 290 L420 340Z" fill="#D4A853" opacity="0.3" />

        {/* Middle tier */}
        <path d="M300 240 L400 195 L500 240Z" fill="url(#templeBody)" stroke="#D4A853" strokeWidth="2" />
        <rect x="330" y="200" width="140" height="40" fill="url(#templeBody)" stroke="#D4A853" strokeWidth="1.5" />

        {/* Decorative elements on middle tier */}
        <circle cx="370" cy="218" r="8" fill="#D4A853" opacity="0.5" />
        <circle cx="400" cy="218" r="10" fill="#D4A853" opacity="0.7" />
        <circle cx="430" cy="218" r="8" fill="#D4A853" opacity="0.5" />

        {/* Upper tier */}
        <path d="M340 200 L400 165 L460 200Z" fill="url(#templeBody)" stroke="#D4A853" strokeWidth="2" />
        <rect x="360" y="155" width="80" height="25" fill="url(#templeBody)" stroke="#D4A853" strokeWidth="1.5" />

        {/* Shikhara (main spire) */}
        <path d="M370 155 L400 70 L430 155Z" fill="url(#templeGold)" stroke="#B8860B" strokeWidth="2" />
        {/* Spire details */}
        <path d="M385 130 L400 90 L415 130" fill="none" stroke="#FFF8E7" strokeWidth="1" opacity="0.5" />
        <path d="M380 145 L400 100 L420 145" fill="none" stroke="#FFF8E7" strokeWidth="1" opacity="0.3" />

        {/* Kalash (sacred pot on top) */}
        <g filter="url(#glow)">
          <ellipse cx="400" cy="65" rx="12" ry="8" fill="url(#templeGold)" />
          <path d="M400 57 L400 40" stroke="#D4A853" strokeWidth="3" />
          <circle cx="400" cy="35" r="6" fill="url(#templeGold)" />
          <path d="M394 35 L400 25 L406 35" fill="#D4A853" />
        </g>

        {/* Decorative flags */}
        <g className="animate-pulse-soft">
          <path d="M325 240 L325 210 L345 220 L325 230Z" fill="#FF6B35" opacity="0.8" />
          <path d="M475 240 L475 210 L455 220 L475 230Z" fill="#FF6B35" opacity="0.8" />
        </g>

        {/* Om symbol on temple */}
        <text x="400" y="290" textAnchor="middle" fontSize="28" fill="#D4A853" fontFamily="serif" opacity="0.8">
          ॐ
        </text>
      </g>

      {/* Stars/sparkles */}
      <g>
        <circle cx="150" cy="100" r="3" fill="#D4A853" className="animate-twinkle" style={{ animationDelay: "0s" }} />
        <circle cx="650" cy="80" r="3" fill="#D4A853" className="animate-twinkle" style={{ animationDelay: "0.5s" }} />
        <circle cx="250" cy="60" r="2" fill="#D4A853" className="animate-twinkle" style={{ animationDelay: "1s" }} />
        <circle
          cx="550"
          cy="120"
          r="2.5"
          fill="#D4A853"
          className="animate-twinkle"
          style={{ animationDelay: "1.5s" }}
        />
        <circle cx="100" cy="180" r="2" fill="#D4A853" className="animate-twinkle" style={{ animationDelay: "2s" }} />
        <circle cx="700" cy="150" r="2" fill="#D4A853" className="animate-twinkle" style={{ animationDelay: "2.5s" }} />
        <circle
          cx="350"
          cy="50"
          r="2.5"
          fill="#D4A853"
          className="animate-twinkle"
          style={{ animationDelay: "0.8s" }}
        />
        <circle cx="480" cy="40" r="2" fill="#D4A853" className="animate-twinkle" style={{ animationDelay: "1.3s" }} />
      </g>

      {/* Lotus flowers floating */}
      <g className="animate-float" style={{ animationDelay: "1s" }}>
        <path d="M120 450 Q130 440 140 450 Q130 445 120 450Z" fill="#FFB6C1" opacity="0.7" />
        <path d="M115 450 Q125 435 135 450" fill="none" stroke="#FFB6C1" strokeWidth="1" opacity="0.5" />
      </g>
      <g className="animate-float" style={{ animationDelay: "2s" }}>
        <path d="M680 440 Q690 430 700 440 Q690 435 680 440Z" fill="#FFB6C1" opacity="0.7" />
        <path d="M675 440 Q685 425 695 440" fill="none" stroke="#FFB6C1" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Birds (simple V shapes) */}
      <g stroke="#8B7355" strokeWidth="1.5" fill="none" opacity="0.4">
        <path d="M180 120 Q185 115 190 120 Q195 115 200 120" className="animate-drift" />
        <path d="M600 100 Q605 95 610 100 Q615 95 620 100" className="animate-drift-reverse" />
      </g>
    </svg>
  )
}
