export function Lotus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="currentColor">
      <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(-60 50 50)" opacity="0.8" />
      <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(-30 50 50)" opacity="0.9" />
      <ellipse cx="50" cy="50" rx="8" ry="20" />
      <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(30 50 50)" opacity="0.9" />
      <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(60 50 50)" opacity="0.8" />
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.6" />
    </svg>
  )
}
