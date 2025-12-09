export function PanditDoodle({
  className = "",
  variant = "male",
}: { className?: string; variant?: "male" | "female" }) {
  if (variant === "female") {
    return (
      <svg className={className} viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Female Pandit Doodle */}
        <defs>
          <linearGradient id="sariGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#D4A574" />
          </linearGradient>
          <linearGradient id="jewelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>

        {/* Aura glow */}
        <circle cx="100" cy="80" r="60" fill="url(#jewelGradient)" opacity="0.1">
          <animate attributeName="r" values="55;65;55" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Hair */}
        <path d="M60 70 Q50 90 55 120 L65 120 Q60 95 70 80 Z" fill="#1a1a1a" />
        <path d="M140 70 Q150 90 145 120 L135 120 Q140 95 130 80 Z" fill="#1a1a1a" />
        <ellipse cx="100" cy="65" rx="45" ry="35" fill="#1a1a1a" />

        {/* Face */}
        <ellipse cx="100" cy="85" rx="35" ry="40" fill="#DEB887" />

        {/* Bindi */}
        <circle cx="100" cy="65" r="4" fill="#DC143C">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Eyes */}
        <ellipse cx="88" cy="82" rx="6" ry="4" fill="#2d2d2d" />
        <ellipse cx="112" cy="82" rx="6" ry="4" fill="#2d2d2d" />
        <circle cx="88" cy="81" r="2" fill="white" />
        <circle cx="112" cy="81" r="2" fill="white" />

        {/* Eyebrows */}
        <path d="M80 76 Q88 73 96 76" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        <path d="M104 76 Q112 73 120 76" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />

        {/* Nose */}
        <path d="M100 85 Q102 92 100 95" stroke="#8B7355" strokeWidth="1.5" fill="none" />

        {/* Smile */}
        <path d="M92 100 Q100 108 108 100" stroke="#8B4513" strokeWidth="1.5" fill="none" />

        {/* Earrings */}
        <circle cx="62" cy="90" r="5" fill="url(#jewelGradient)">
          <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="138" cy="90" r="5" fill="url(#jewelGradient)">
          <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" delay="0.5s" />
        </circle>

        {/* Necklace */}
        <path d="M70 120 Q100 140 130 120" stroke="url(#jewelGradient)" strokeWidth="3" fill="none" />
        <circle cx="85" cy="128" r="3" fill="#FFD700" />
        <circle cx="100" cy="133" r="4" fill="#DC143C" />
        <circle cx="115" cy="128" r="3" fill="#FFD700" />

        {/* Sari/Clothing */}
        <path d="M65 120 Q60 180 70 250 L130 250 Q140 180 135 120 Q100 135 65 120" fill="url(#sariGradient)" />

        {/* Sari pallu (drape) */}
        <path d="M130 120 Q145 150 140 200 Q130 180 120 200 Q125 160 130 120" fill="#D4A574" opacity="0.8" />

        {/* Sari decorative border */}
        <path d="M70 240 L130 240" stroke="#FFD700" strokeWidth="3" strokeDasharray="5,3" />

        {/* Hands in namaste */}
        <ellipse cx="100" cy="185" rx="12" ry="20" fill="#DEB887" />
        <path
          d="M90 175 L90 195 M95 175 L95 195 M100 175 L100 195 M105 175 L105 195 M110 175 L110 195"
          stroke="#C4A67C"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Rudraksha mala in hands */}
        <circle cx="88" cy="190" r="2" fill="#8B4513" />
        <circle cx="92" cy="193" r="2" fill="#8B4513" />
        <circle cx="96" cy="195" r="2" fill="#8B4513" />
        <circle cx="104" cy="195" r="2" fill="#8B4513" />
        <circle cx="108" cy="193" r="2" fill="#8B4513" />
        <circle cx="112" cy="190" r="2" fill="#8B4513" />

        {/* Holy book */}
        <rect x="75" y="210" width="50" height="35" rx="2" fill="#8B0000" />
        <rect x="78" y="213" width="44" height="29" rx="1" fill="#FFF8DC" />
        <text x="100" y="230" fontSize="8" fill="#8B0000" textAnchor="middle" fontFamily="serif">
          ॐ
        </text>

        {/* Floating lotus */}
        <g transform="translate(150, 80)">
          <ellipse cx="0" cy="0" rx="12" ry="6" fill="#FFB6C1" opacity="0.8">
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <path d="M0 -3 Q-8 -10 0 -18 Q8 -10 0 -3" fill="#FF69B4" opacity="0.7" />
          <path d="M0 -3 Q-12 -5 -15 -12 Q-5 -8 0 -3" fill="#FFB6C1" opacity="0.6" />
          <path d="M0 -3 Q12 -5 15 -12 Q5 -8 0 -3" fill="#FFB6C1" opacity="0.6" />
        </g>

        {/* Sparkles */}
        <g fill="#FFD700">
          <circle cx="45" cy="60" r="2">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="155" cy="100" r="2">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="50" cy="160" r="1.5">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
        </g>
      </svg>
    )
  }

  return (
    <svg className={className} viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Male Pandit Doodle */}
      <defs>
        <linearGradient id="dhotiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="100%" stopColor="#F5DEB3" />
        </linearGradient>
        <linearGradient id="shawlGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
        <linearGradient id="auraGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Divine aura */}
      <ellipse cx="100" cy="100" rx="70" ry="80" fill="url(#auraGradient)">
        <animate attributeName="rx" values="65;75;65" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Shikha (tuft of hair) */}
      <path d="M100 30 Q95 20 100 10 Q105 20 100 30" fill="#1a1a1a" />
      <path d="M97 28 Q100 15 103 28" fill="#2d2d2d" />

      {/* Head/Face */}
      <ellipse cx="100" cy="70" rx="35" ry="38" fill="#DEB887" />

      {/* Tilak (U-shaped) */}
      <path d="M92 45 L92 60 Q100 65 108 60 L108 45" stroke="#FF6B35" strokeWidth="3" fill="none" />
      <line x1="100" y1="45" x2="100" y2="60" stroke="#FFD700" strokeWidth="2" />

      {/* Eyes */}
      <ellipse cx="88" cy="68" rx="5" ry="4" fill="#2d2d2d" />
      <ellipse cx="112" cy="68" rx="5" ry="4" fill="#2d2d2d" />
      <circle cx="89" cy="67" r="1.5" fill="white" />
      <circle cx="113" cy="67" r="1.5" fill="white" />

      {/* Wise eyebrows */}
      <path d="M80 62 Q88 58 96 62" stroke="#5c5c5c" strokeWidth="1.5" fill="none" />
      <path d="M104 62 Q112 58 120 62" stroke="#5c5c5c" strokeWidth="1.5" fill="none" />

      {/* Nose */}
      <path d="M100 70 Q103 78 100 82" stroke="#8B7355" strokeWidth="1.5" fill="none" />

      {/* Beard */}
      <path d="M70 85 Q75 110 100 115 Q125 110 130 85" fill="#808080" opacity="0.6" />
      <path d="M75 90 Q80 100 100 105 Q120 100 125 90" fill="#a0a0a0" opacity="0.4" />

      {/* Mustache */}
      <path d="M85 85 Q100 92 115 85" stroke="#606060" strokeWidth="2" fill="none" />

      {/* Ears */}
      <ellipse cx="65" cy="70" rx="5" ry="8" fill="#DEB887" />
      <ellipse cx="135" cy="70" rx="5" ry="8" fill="#DEB887" />

      {/* Rudraksha earrings */}
      <circle cx="65" cy="82" r="4" fill="#8B4513" />
      <circle cx="135" cy="82" r="4" fill="#8B4513" />

      {/* Neck */}
      <rect x="90" y="105" width="20" height="15" fill="#DEB887" />

      {/* Body - Dhoti */}
      <path d="M60 120 Q55 200 70 280 L130 280 Q145 200 140 120 Q100 130 60 120" fill="url(#dhotiGradient)" />

      {/* Angavastram (sacred cloth/shawl) */}
      <path d="M60 120 Q50 140 45 200 Q55 180 60 200 Q55 160 60 120" fill="url(#shawlGradient)" opacity="0.9" />
      <path d="M140 120 Q150 140 155 200 Q145 180 140 200 Q145 160 140 120" fill="url(#shawlGradient)" opacity="0.9" />
      <path d="M60 120 L140 120 Q120 125 100 128 Q80 125 60 120" fill="url(#shawlGradient)" />

      {/* Sacred thread (Janeu) */}
      <path d="M75 120 Q90 140 85 180 Q100 160 115 180 Q110 140 125 120" stroke="#FFF8DC" strokeWidth="2" fill="none" />

      {/* Rudraksha mala */}
      <g fill="#8B4513">
        <circle cx="80" cy="130" r="3" />
        <circle cx="85" cy="140" r="3" />
        <circle cx="88" cy="150" r="3" />
        <circle cx="90" cy="160" r="3" />
        <circle cx="100" cy="165" r="4" fill="#DC143C" />
        <circle cx="110" cy="160" r="3" />
        <circle cx="112" cy="150" r="3" />
        <circle cx="115" cy="140" r="3" />
        <circle cx="120" cy="130" r="3" />
      </g>

      {/* Hands in blessing mudra */}
      <g fill="#DEB887">
        {/* Right hand raised in blessing */}
        <ellipse cx="150" cy="160" rx="12" ry="15" />
        <ellipse cx="148" cy="145" rx="3" ry="10" />
        <ellipse cx="153" cy="145" rx="3" ry="10" />
        <ellipse cx="158" cy="148" rx="3" ry="8" />
      </g>
      <g fill="#DEB887">
        {/* Left hand with kamandalu */}
        <ellipse cx="55" cy="170" rx="10" ry="12" />
      </g>

      {/* Kamandalu (water pot) */}
      <ellipse cx="45" cy="190" rx="12" ry="18" fill="#CD853F" />
      <ellipse cx="45" cy="175" rx="6" ry="4" fill="#8B4513" />
      <path d="M38 175 Q35 165 40 160 L50 160 Q55 165 52 175" fill="#8B4513" />

      {/* Holy scriptures */}
      <rect x="120" y="200" width="35" height="25" rx="2" fill="#8B0000" transform="rotate(-10 137 212)" />
      <rect x="122" y="202" width="31" height="21" rx="1" fill="#FFF8DC" transform="rotate(-10 137 212)" />

      {/* Om symbol floating */}
      <text x="160" y="100" fontSize="20" fill="#FFD700" fontFamily="serif" opacity="0.8">
        ॐ
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
      </text>

      {/* Sparkles/divine light */}
      <g fill="#FFD700">
        <circle cx="40" cy="50" r="3">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="60" r="2">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.7s" />
        </circle>
        <circle cx="35" cy="140" r="2">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.4s" />
        </circle>
        <circle cx="170" cy="180" r="2.5">
          <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
        </circle>
      </g>

      {/* Floating lotus */}
      <g transform="translate(30, 100)">
        <ellipse cx="0" cy="0" rx="10" ry="5" fill="#FFB6C1" opacity="0.7">
          <animate attributeName="cy" values="0;-3;0" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <path d="M0 -2 Q-6 -8 0 -15 Q6 -8 0 -2" fill="#FF69B4" opacity="0.6" />
      </g>
    </svg>
  )
}

export function FloatingPanditElements({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floating sacred elements */}

      {/* Om symbols */}
      <text x="50" y="50" fontSize="28" fill="#FF6B35" fontFamily="serif" opacity="0.15">
        ॐ
      </text>
      <text x="350" y="180" fontSize="24" fill="#FFD700" fontFamily="serif" opacity="0.12">
        ॐ
      </text>
      <text x="180" y="30" fontSize="20" fill="#D4A574" fontFamily="serif" opacity="0.1">
        ॐ
      </text>

      {/* Swastika (auspicious symbol) */}
      <g transform="translate(320, 50)" fill="none" stroke="#FF6B35" strokeWidth="2" opacity="0.15">
        <line x1="-12" y1="0" x2="12" y2="0" />
        <line x1="0" y1="-12" x2="0" y2="12" />
        <line x1="12" y1="0" x2="12" y2="-8" />
        <line x1="-12" y1="0" x2="-12" y2="8" />
        <line x1="0" y1="-12" x2="8" y2="-12" />
        <line x1="0" y1="12" x2="-8" y2="12" />
      </g>

      {/* Diya (oil lamp) */}
      <g transform="translate(80, 150)" opacity="0.2">
        <ellipse cx="0" cy="0" rx="15" ry="6" fill="#CD853F" />
        <path d="M-10 -2 Q0 -10 10 -2" fill="#8B4513" />
        <ellipse cx="0" cy="-8" rx="3" ry="6" fill="#FFA500">
          <animate attributeName="ry" values="5;7;5" dur="0.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="0" cy="-12" rx="1.5" ry="3" fill="#FFD700" />
      </g>

      {/* Lotus flowers */}
      <g transform="translate(250, 80)" opacity="0.15">
        <ellipse cx="0" cy="8" rx="18" ry="6" fill="#90EE90" />
        <path d="M0 0 Q-10 -8 0 -20 Q10 -8 0 0" fill="#FFB6C1" />
        <path d="M0 0 Q-15 -3 -20 -12 Q-8 -5 0 0" fill="#FFC0CB" />
        <path d="M0 0 Q15 -3 20 -12 Q8 -5 0 0" fill="#FFC0CB" />
        <path d="M0 0 Q-12 -6 -15 -16 Q-5 -8 0 0" fill="#FFB6C1" opacity="0.8" />
        <path d="M0 0 Q12 -6 15 -16 Q5 -8 0 0" fill="#FFB6C1" opacity="0.8" />
        <circle cx="0" cy="-5" r="4" fill="#FFD700" />
      </g>

      {/* Rudraksha beads trail */}
      <g fill="#8B4513" opacity="0.2">
        <circle cx="120" cy="100" r="4" />
        <circle cx="135" cy="105" r="4" />
        <circle cx="150" cy="108" r="4" />
        <circle cx="165" cy="105" r="4" />
        <circle cx="180" cy="100" r="4" />
      </g>

      {/* Conch shell */}
      <g transform="translate(380, 120)" opacity="0.12">
        <ellipse cx="0" cy="0" rx="12" ry="18" fill="#FFF8DC" />
        <path d="M8 -10 Q15 -5 12 5 Q8 0 8 -10" fill="#F5DEB3" />
        <ellipse cx="-5" cy="0" rx="4" ry="8" fill="#FFE4C4" />
      </g>

      {/* Trishul (trident) */}
      <g transform="translate(20, 100)" fill="none" stroke="#CD853F" strokeWidth="2" opacity="0.15">
        <line x1="0" y1="0" x2="0" y2="40" />
        <path d="M0 0 L0 -15 M-8 -8 Q0 -20 8 -8" />
        <line x1="-12" y1="-5" x2="-8" y2="-12" />
        <line x1="12" y1="-5" x2="8" y2="-12" />
      </g>

      {/* Stars/sparkles */}
      <g fill="#FFD700" opacity="0.3">
        <circle cx="100" cy="40" r="2">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="30" r="1.5">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="200" cy="170" r="2">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
      </g>
    </svg>
  )
}
