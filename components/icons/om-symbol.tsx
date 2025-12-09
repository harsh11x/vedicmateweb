export function OmSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 80c-19.3 0-35-15.7-35-35s15.7-35 35-35 35 15.7 35 35-15.7 35-35 35z" />
      <text x="50" y="65" textAnchor="middle" fontSize="50" fontFamily="serif" fill="currentColor">
        ॐ
      </text>
    </svg>
  )
}
