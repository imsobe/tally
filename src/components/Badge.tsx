import type { Cadence } from '../data/habits'

const labels: Record<Cadence, string> = {
  daily: 'Daily',
  weekdays: 'Weekdays',
  weekly: 'Weekly',
}

/** Small pill showing a habit's cadence. Color-keyed by cadence kind. */
export function Badge({ cadence }: { cadence: Cadence }) {
  return <span className={`badge badge-${cadence}`}>{labels[cadence]}</span>
}
