export function SacredDiya({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="diyaFlame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="diyaBase" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CD853F" />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>
        <filter id="glowEffect">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow behind flame */}
      <ellipse cx="50" cy="45" rx="25" ry="30" fill="#FFA500" opacity="0.2">
        <animate attributeName="rx" values="22;28;22" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.15;0.25;0.15" dur="1s" repeatCount="indefinite" />
      </ellipse>

      {/* Main flame */}
      <path
        d="M50 20 Q35 40 40 55 Q45 50 50 55 Q55 50 60 55 Q65 40 50 20"
        fill="url(#diyaFlame)"
        filter="url(#glowEffect)"
      >
        <animate
          attributeName="d"
          values="M50 20 Q35 40 40 55 Q45 50 50 55 Q55 50 60 55 Q65 40 50 20;
                  M50 15 Q30 40 38 55 Q44 48 50 55 Q56 48 62 55 Q70 40 50 15;
                  M50 20 Q35 40 40 55 Q45 50 50 55 Q55 50 60 55 Q65 40 50 20"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </path>

      {/* Inner flame */}
      <path d="M50 30 Q42 42 45 52 Q48 48 50 52 Q52 48 55 52 Q58 42 50 30" fill="#FFD700">
        <animate
          attributeName="d"
          values="M50 30 Q42 42 45 52 Q48 48 50 52 Q52 48 55 52 Q58 42 50 30;
                  M50 28 Q40 42 44 52 Q47 46 50 52 Q53 46 56 52 Q60 42 50 28;
                  M50 30 Q42 42 45 52 Q48 48 50 52 Q52 48 55 52 Q58 42 50 30"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>

      {/* Wick */}
      <rect x="48" y="55" width="4" height="10" fill="#2d2d2d" rx="1" />

      {/* Diya base */}
      <ellipse cx="50" cy="75" rx="30" ry="10" fill="url(#diyaBase)" />
      <ellipse cx="50" cy="72" rx="25" ry="8" fill="#DEB887" />

      {/* Oil in diya */}
      <ellipse cx="50" cy="68" rx="20" ry="6" fill="#FFD700" opacity="0.6" />

      {/* Base stand */}
      <ellipse cx="50" cy="90" rx="35" ry="8" fill="url(#diyaBase)" />
      <ellipse cx="50" cy="100" rx="40" ry="10" fill="#8B4513" />
      <ellipse cx="50" cy="110" rx="45" ry="10" fill="#654321" />

      {/* Decorative patterns on base */}
      <ellipse cx="50" cy="100" rx="35" ry="7" fill="none" stroke="#FFD700" strokeWidth="1" strokeDasharray="4,3" />
    </svg>
  )
}

export function SacredKalash({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kalashGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#CD853F" />
        </linearGradient>
        <linearGradient id="coconutBrown" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
      </defs>

      {/* Mango leaves */}
      <g fill="#228B22">
        <path d="M50 45 Q35 30 30 20 Q40 25 50 45" opacity="0.9" />
        <path d="M50 45 Q40 25 45 15 Q50 25 50 45" />
        <path d="M50 45 Q60 25 55 15 Q50 25 50 45" />
        <path d="M50 45 Q65 30 70 20 Q60 25 50 45" opacity="0.9" />
        <path d="M50 45 Q30 35 25 30 Q35 30 50 45" opacity="0.8" />
        <path d="M50 45 Q70 35 75 30 Q65 30 50 45" opacity="0.8" />
      </g>

      {/* Coconut */}
      <ellipse cx="50" cy="55" rx="18" ry="15" fill="url(#coconutBrown)" />
      <ellipse cx="45" cy="50" rx="3" ry="2" fill="#2d2d2d" />
      <ellipse cx="55" cy="50" rx="3" ry="2" fill="#2d2d2d" />
      <ellipse cx="50" cy="55" rx="3" ry="2" fill="#2d2d2d" />

      {/* Kalash pot */}
      <path d="M30 70 Q25 90 30 120 L70 120 Q75 90 70 70 Q50 75 30 70" fill="url(#kalashGold)" />

      {/* Pot neck */}
      <ellipse cx="50" cy="70" rx="22" ry="6" fill="#FFD700" />
      <ellipse cx="50" cy="68" rx="18" ry="4" fill="#FFA500" />

      {/* Pot rim */}
      <ellipse cx="50" cy="120" rx="22" ry="6" fill="#CD853F" />

      {/* Decorative patterns */}
      <ellipse cx="50" cy="85" rx="18" ry="4" fill="none" stroke="#FFF8DC" strokeWidth="1" />
      <ellipse cx="50" cy="100" rx="20" ry="4" fill="none" stroke="#FFF8DC" strokeWidth="1" />

      {/* Om symbol on pot */}
      <text x="50" y="95" fontSize="14" fill="#8B0000" textAnchor="middle" fontFamily="serif">
        ॐ
      </text>

      {/* Base */}
      <ellipse cx="50" cy="130" rx="28" ry="8" fill="#CD853F" />
      <ellipse cx="50" cy="140" rx="32" ry="8" fill="#8B4513" />

      {/* Red cloth around neck */}
      <path d="M28 68 Q30 72 28 76 L32 78 Q30 74 32 70 Z" fill="#DC143C" />
      <path d="M72 68 Q70 72 72 76 L68 78 Q70 74 68 70 Z" fill="#DC143C" />
      <path d="M32 70 Q50 78 68 70" stroke="#DC143C" strokeWidth="3" fill="none" />
    </svg>
  )
}

export function FloatingSacredSymbols({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Scattered Om symbols */}
      <text x="50" y="80" fontSize="36" fill="#FF6B35" fontFamily="serif" opacity="0.08">
        ॐ
      </text>
      <text x="420" y="50" fontSize="28" fill="#FFD700" fontFamily="serif" opacity="0.1">
        ॐ
      </text>
      <text x="250" y="280" fontSize="32" fill="#D4A574" fontFamily="serif" opacity="0.06">
        ॐ
      </text>
      <text x="380" y="220" fontSize="24" fill="#FF6B35" fontFamily="serif" opacity="0.07">
        ॐ
      </text>

      {/* Swastika symbols */}
      <g transform="translate(100, 200)" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.08">
        <line x1="-15" y1="0" x2="15" y2="0" />
        <line x1="0" y1="-15" x2="0" y2="15" />
        <line x1="15" y1="0" x2="15" y2="-10" />
        <line x1="-15" y1="0" x2="-15" y2="10" />
        <line x1="0" y1="-15" x2="10" y2="-15" />
        <line x1="0" y1="15" x2="-10" y2="15" />
      </g>

      {/* Lotus patterns */}
      <g transform="translate(450, 150)" opacity="0.1">
        <ellipse cx="0" cy="10" rx="20" ry="8" fill="#90EE90" />
        <path d="M0 0 Q-12 -10 0 -25 Q12 -10 0 0" fill="#FFB6C1" />
        <path d="M0 0 Q-18 -5 -25 -15 Q-10 -8 0 0" fill="#FFC0CB" />
        <path d="M0 0 Q18 -5 25 -15 Q10 -8 0 0" fill="#FFC0CB" />
      </g>

      {/* Trishul */}
      <g transform="translate(30, 150)" fill="none" stroke="#CD853F" strokeWidth="2" opacity="0.1">
        <line x1="0" y1="10" x2="0" y2="50" />
        <path d="M0 10 L0 -10 M-12 0 Q0 -25 12 0" />
        <line x1="-15" y1="5" x2="-12" y2="-5" />
        <line x1="15" y1="5" x2="12" y2="-5" />
      </g>

      {/* Stars */}
      <g fill="#FFD700">
        <circle cx="180" cy="40" r="3" opacity="0.15">
          <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="320" cy="100" r="2" opacity="0.12">
          <animate attributeName="opacity" values="0.08;0.18;0.08" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="70" cy="250" r="2.5" opacity="0.1">
          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="480" cy="280" r="2" opacity="0.12">
          <animate attributeName="opacity" values="0.08;0.16;0.08" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>
      </g>

      {/* Rudraksha beads */}
      <g fill="#8B4513" opacity="0.1">
        <circle cx="200" cy="180" r="5" />
        <circle cx="215" cy="185" r="5" />
        <circle cx="230" cy="183" r="5" />
        <circle cx="245" cy="188" r="5" />
      </g>
    </svg>
  )
}
