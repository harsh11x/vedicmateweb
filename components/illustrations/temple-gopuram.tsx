"use client"

export function TempleGopuram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Sky gradient */}
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4B5" />
          <stop offset="30%" stopColor="#FFDAB9" />
          <stop offset="60%" stopColor="#FFE8D6" />
          <stop offset="100%" stopColor="#FFF8F0" />
        </linearGradient>

        {/* Temple stone gradient */}
        <linearGradient id="stoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9B49A" />
          <stop offset="50%" stopColor="#B8A58A" />
          <stop offset="100%" stopColor="#A89478" />
        </linearGradient>

        {/* Gold gradient */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>

        {/* Cloud gradient */}
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFF5E6" stopOpacity="0.6" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shadow filter */}
        <filter id="shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Sky background */}
      <rect width="800" height="600" fill="url(#skyGradient)" />

      {/* Sun rays */}
      <g opacity="0.3">
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="400"
            y1="80"
            x2={400 + Math.cos((i * 30 * Math.PI) / 180) * 300}
            y2={80 + Math.sin((i * 30 * Math.PI) / 180) * 300}
            stroke="#FFD700"
            strokeWidth="2"
            opacity="0.5"
          />
        ))}
      </g>

      {/* Sun */}
      <circle cx="400" cy="80" r="40" fill="#FFD700" filter="url(#glow)" className="animate-glow">
        <animate attributeName="r" values="38;42;38" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Distant mountains */}
      <path
        d="M0 450 Q100 380 200 420 Q300 350 400 400 Q500 340 600 390 Q700 350 800 420 L800 600 L0 600 Z"
        fill="#D4C4B0"
        opacity="0.5"
      />

      {/* Clouds - Left */}
      <g className="animate-cloud" style={{ animationDelay: "0s" }}>
        <ellipse cx="100" cy="150" rx="80" ry="30" fill="url(#cloudGradient)" />
        <ellipse cx="140" cy="140" rx="60" ry="25" fill="url(#cloudGradient)" />
        <ellipse cx="60" cy="145" rx="50" ry="20" fill="url(#cloudGradient)" />
      </g>

      {/* Clouds - Right */}
      <g className="animate-cloud" style={{ animationDelay: "5s" }}>
        <ellipse cx="680" cy="120" rx="70" ry="28" fill="url(#cloudGradient)" />
        <ellipse cx="720" cy="110" rx="55" ry="22" fill="url(#cloudGradient)" />
        <ellipse cx="640" cy="115" rx="45" ry="18" fill="url(#cloudGradient)" />
      </g>

      {/* Cloud platform for temple */}
      <g filter="url(#shadow)">
        <ellipse cx="400" cy="500" rx="350" ry="80" fill="url(#cloudGradient)" />
        <ellipse cx="400" cy="490" rx="300" ry="60" fill="#FFFFFF" opacity="0.8" />
        <ellipse cx="400" cy="485" rx="250" ry="45" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Main Temple Gopuram */}
      <g filter="url(#shadow)">
        {/* Base platform */}
        <rect x="200" y="420" width="400" height="60" fill="url(#stoneGradient)" />
        <rect x="180" y="450" width="440" height="30" fill="#A89478" />

        {/* Temple steps */}
        <rect x="320" y="440" width="160" height="15" fill="#B8A58A" />
        <rect x="340" y="455" width="120" height="15" fill="#C9B49A" />
        <rect x="360" y="470" width="80" height="10" fill="#D4C4B0" />

        {/* Main sanctum */}
        <rect x="250" y="300" width="300" height="120" fill="url(#stoneGradient)" />

        {/* Entrance door */}
        <rect x="360" y="340" width="80" height="80" fill="#3E2723" rx="40" ry="5" />
        <rect x="370" y="350" width="60" height="70" fill="#2D1F1A" rx="30" ry="3" />

        {/* Door decorations */}
        <circle cx="400" cy="380" r="8" fill="#D4AF37" />
        <rect x="395" y="375" width="10" height="15" fill="#B8860B" rx="2" />

        {/* Tier 1 */}
        <rect x="270" y="250" width="260" height="50" fill="url(#stoneGradient)" />
        <path d="M270 250 Q400 230 530 250" fill="none" stroke="#D4AF37" strokeWidth="3" />

        {/* Tier 2 */}
        <rect x="290" y="200" width="220" height="50" fill="url(#stoneGradient)" />
        <path d="M290 200 Q400 180 510 200" fill="none" stroke="#D4AF37" strokeWidth="3" />

        {/* Tier 3 */}
        <rect x="310" y="150" width="180" height="50" fill="url(#stoneGradient)" />
        <path d="M310 150 Q400 130 490 150" fill="none" stroke="#D4AF37" strokeWidth="3" />

        {/* Top tier */}
        <rect x="340" y="110" width="120" height="40" fill="url(#stoneGradient)" />
        <path d="M340 110 Q400 95 460 110" fill="none" stroke="#D4AF37" strokeWidth="2" />

        {/* Kalasam (top dome) */}
        <ellipse cx="400" cy="100" rx="25" ry="15" fill="url(#goldGradient)" />
        <ellipse cx="400" cy="85" rx="15" ry="10" fill="url(#goldGradient)" />
        <ellipse cx="400" cy="72" rx="8" ry="6" fill="url(#goldGradient)" />
        <circle cx="400" cy="62" r="5" fill="#FFD700" filter="url(#glow)" />

        {/* Side pillars */}
        {[220, 280, 520, 580].map((x, i) => (
          <g key={i}>
            <rect x={x - 15} y="350" width="30" height="70" fill="#B8A58A" />
            <rect x={x - 12} y="345" width="24" height="10" fill="#D4AF37" />
            <rect x={x - 12} y="415" width="24" height="10" fill="#D4AF37" />
            <ellipse cx={x} cy="340" rx="15" ry="8" fill="url(#goldGradient)" />
          </g>
        ))}

        {/* Decorative sculptures on tiers */}
        {[280, 320, 360, 440, 480, 520].map((x, i) => (
          <g key={i}>
            {/* Small deity figures */}
            <rect x={x - 8} y="255" width="16" height="40" fill="#C9B49A" rx="3" />
            <circle cx={x} cy="248" r="6" fill="#B8A58A" />
          </g>
        ))}

        {/* Lions at entrance */}
        <g>
          {/* Left lion */}
          <ellipse cx="340" cy="435" rx="20" ry="15" fill="#C9B49A" />
          <circle cx="340" cy="420" r="12" fill="#B8A58A" />
          <circle cx="336" cy="418" r="2" fill="#3E2723" />
          <circle cx="344" cy="418" r="2" fill="#3E2723" />

          {/* Right lion */}
          <ellipse cx="460" cy="435" rx="20" ry="15" fill="#C9B49A" />
          <circle cx="460" cy="420" r="12" fill="#B8A58A" />
          <circle cx="456" cy="418" r="2" fill="#3E2723" />
          <circle cx="464" cy="418" r="2" fill="#3E2723" />
        </g>

        {/* Diya lamps */}
        {[260, 540].map((x, i) => (
          <g key={i}>
            <ellipse cx={x} cy="435" rx="12" ry="6" fill="#D4AF37" />
            <ellipse cx={x} cy="430" rx="8" ry="4" fill="#B8860B" />
            {/* Flame */}
            <ellipse cx={x} cy="420" rx="4" ry="8" fill="#FF6B35" className="animate-flame">
              <animate attributeName="ry" values="8;10;8" dur="0.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx={x} cy="418" rx="2" ry="5" fill="#FFD700" className="animate-flame" />
          </g>
        ))}
      </g>

      {/* Floating flowers */}
      {[
        { x: 150, y: 200, delay: "0s" },
        { x: 650, y: 180, delay: "1s" },
        { x: 100, y: 350, delay: "2s" },
        { x: 700, y: 320, delay: "3s" },
      ].map((flower, i) => (
        <g key={i} className="animate-float" style={{ animationDelay: flower.delay }}>
          <circle cx={flower.x} cy={flower.y} r="8" fill="#FF6B35" opacity="0.8" />
          {[0, 72, 144, 216, 288].map((angle, j) => (
            <ellipse
              key={j}
              cx={flower.x + Math.cos((angle * Math.PI) / 180) * 10}
              cy={flower.y + Math.sin((angle * Math.PI) / 180) * 10}
              rx="6"
              ry="10"
              fill="#FF8C5A"
              transform={`rotate(${angle} ${flower.x + Math.cos((angle * Math.PI) / 180) * 10} ${flower.y + Math.sin((angle * Math.PI) / 180) * 10})`}
            />
          ))}
        </g>
      ))}

      {/* Birds */}
      {[
        { x: 120, y: 100 },
        { x: 680, y: 90 },
        { x: 200, y: 130 },
        { x: 600, y: 140 },
      ].map((bird, i) => (
        <path
          key={i}
          d={`M${bird.x} ${bird.y} Q${bird.x + 5} ${bird.y - 5} ${bird.x + 10} ${bird.y} Q${bird.x + 15} ${bird.y - 5} ${bird.x + 20} ${bird.y}`}
          fill="none"
          stroke="#6B5B4F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}

      {/* Floating Om symbols */}
      <text x="180" y="280" fontSize="24" fill="#D4AF37" opacity="0.3" className="animate-sanskrit">
        ॐ
      </text>
      <text
        x="600"
        y="250"
        fontSize="20"
        fill="#D4AF37"
        opacity="0.25"
        className="animate-sanskrit"
        style={{ animationDelay: "2s" }}
      >
        ॐ
      </text>

      {/* Incense smoke */}
      <g opacity="0.4">
        <ellipse cx="400" cy="340" rx="3" ry="10" fill="#B8A58A" className="animate-smoke" />
        <ellipse
          cx="402"
          cy="330"
          rx="4"
          ry="12"
          fill="#C9B49A"
          className="animate-smoke"
          style={{ animationDelay: "1s" }}
        />
        <ellipse
          cx="398"
          cy="320"
          rx="5"
          ry="15"
          fill="#D4C4B0"
          className="animate-smoke"
          style={{ animationDelay: "2s" }}
        />
      </g>
    </svg>
  )
}
