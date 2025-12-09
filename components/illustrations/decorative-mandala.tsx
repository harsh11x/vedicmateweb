export function DecorativeMandala({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mandalaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A853" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#B8860B" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D4A853" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <g className="stroke-[#D4A853]" strokeWidth="0.5" opacity="0.4">
        {/* Outer decorative rings */}
        <circle cx="200" cy="200" r="195" strokeDasharray="4 2" />
        <circle cx="200" cy="200" r="185" />
        <circle cx="200" cy="200" r="170" strokeDasharray="8 4" />
        <circle cx="200" cy="200" r="155" />
        <circle cx="200" cy="200" r="140" strokeDasharray="2 2" />

        {/* Outer petal ring - 16 petals */}
        {[...Array(16)].map((_, i) => (
          <g key={`outer-${i}`} transform={`rotate(${i * 22.5} 200 200)`}>
            <path
              d="M200 30 Q230 80 200 130 Q170 80 200 30"
              fill="url(#mandalaGold)"
              stroke="#D4A853"
              strokeWidth="0.5"
            />
          </g>
        ))}

        {/* Middle petal ring - 12 petals */}
        {[...Array(12)].map((_, i) => (
          <g key={`middle-${i}`} transform={`rotate(${i * 30} 200 200)`}>
            <path
              d="M200 70 Q220 105 200 140 Q180 105 200 70"
              fill="url(#mandalaGold)"
              stroke="#D4A853"
              strokeWidth="0.5"
            />
            <line x1="200" y1="75" x2="200" y2="135" strokeWidth="0.3" />
          </g>
        ))}

        {/* Inner lotus - 8 petals */}
        {[...Array(8)].map((_, i) => (
          <g key={`inner-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <path
              d="M200 120 Q215 150 200 180 Q185 150 200 120"
              fill="url(#mandalaGold)"
              stroke="#D4A853"
              strokeWidth="0.75"
            />
          </g>
        ))}

        {/* Radiating lines */}
        {[...Array(36)].map((_, i) => (
          <line
            key={`line-${i}`}
            x1="200"
            y1="145"
            x2="200"
            y2="195"
            transform={`rotate(${i * 10} 200 200)`}
            strokeWidth="0.3"
            opacity="0.5"
          />
        ))}

        {/* Inner circles */}
        <circle cx="200" cy="200" r="50" fill="url(#mandalaGold)" />
        <circle cx="200" cy="200" r="35" stroke="#D4A853" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="20" fill="#D4A853" fillOpacity="0.2" />
        <circle cx="200" cy="200" r="8" fill="#D4A853" fillOpacity="0.4" />

        {/* Small decorative circles around center */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={200 + Math.cos((i * 45 * Math.PI) / 180) * 42}
            cy={200 + Math.sin((i * 45 * Math.PI) / 180) * 42}
            r="3"
            fill="#D4A853"
            fillOpacity="0.3"
          />
        ))}
      </g>
    </svg>
  )
}
