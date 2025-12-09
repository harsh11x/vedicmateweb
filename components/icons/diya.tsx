export function Diya({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 60" className={className}>
      {/* Flame */}
      <ellipse cx="25" cy="15" rx="6" ry="12" fill="#FF6B35" className="animate-flicker" />
      <ellipse cx="25" cy="12" rx="3" ry="8" fill="#FDB813" className="animate-flicker" />
      {/* Lamp base */}
      <path d="M15 30 Q25 25 35 30 L38 45 Q25 50 12 45 Z" fill="currentColor" />
      <ellipse cx="25" cy="30" rx="12" ry="4" fill="currentColor" opacity="0.8" />
    </svg>
  )
}
