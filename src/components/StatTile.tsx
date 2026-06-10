interface StatTileProps {
  label: string
  value: string
  hint?: string
  accent?: string
}

/** Compact metric tile for the dashboard's top row (streak, completion, count). */
export function StatTile({ label, value, hint, accent = '#6366f1' }: StatTileProps) {
  return (
    <div className="stat-tile">
      <div className="stat-bar" style={{ background: accent }} />
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {hint && <div className="stat-hint">{hint}</div>}
    </div>
  )
}
