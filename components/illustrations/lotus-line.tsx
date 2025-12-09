export function LotusLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g className="stroke-gold/50" strokeWidth="1.25" strokeLinecap="round">
        {/* Left petals */}
        <path d="M30 50 Q25 35 35 25 Q45 35 40 50" className="fill-gold/10" />
        <path d="M20 50 Q12 40 25 30 Q38 40 30 50" className="fill-gold/5" />

        {/* Center petal */}
        <path d="M50 50 Q50 25 60 10 Q70 25 70 50" className="fill-gold/15" />

        {/* Right petals */}
        <path d="M80 50 Q75 35 85 25 Q95 35 90 50" className="fill-gold/10" />
        <path d="M90 50 Q82 40 95 30 Q108 40 100 50" className="fill-gold/5" />

        {/* Base line */}
        <path d="M10 52 Q60 48 110 52" />
      </g>
    </svg>
  )
}
