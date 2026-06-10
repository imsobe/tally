interface ProgressRingProps {
  /** 0–100. */
  percent: number
  size?: number
  stroke?: number
  color?: string
}

/** SVG circular progress indicator. Used on habit detail to show weekly goal progress. */
export function ProgressRing({ percent, size = 96, stroke = 9, color = '#6366f1' }: ProgressRingProps) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const clamped = Math.max(0, Math.min(100, percent))
  const offset = circumference - (clamped / 100) * circumference
  return (
    <svg width={size} height={size} className="ring" viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#eceef3"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="50%" dy="0.35em" textAnchor="middle" className="ring-label">
        {clamped}%
      </text>
    </svg>
  )
}
