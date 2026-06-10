import { Link } from 'react-router-dom'
import type { Habit } from '../data/habits'
import { Badge } from './Badge'

/** One habit as a clickable row — used on the Habits list. Links to the detail page. */
export function HabitRow({ habit }: { habit: Habit }) {
  const pct = Math.round((habit.doneThisWeek / habit.goalPerWeek) * 100)
  return (
    <Link to={`/habits/${habit.id}`} className="habit-row">
      <span className="habit-emoji" style={{ background: `${habit.color}22` }}>
        {habit.emoji}
      </span>
      <div className="habit-main">
        <div className="habit-name">{habit.name}</div>
        <div className="habit-sub">
          <Badge cadence={habit.cadence} />
          <span className="habit-streak">🔥 {habit.streak} day streak</span>
        </div>
      </div>
      <div className="habit-progress">
        <div className="habit-progress-track">
          <div
            className="habit-progress-fill"
            style={{ width: `${Math.min(100, pct)}%`, background: habit.color }}
          />
        </div>
        <span className="habit-progress-text">
          {habit.doneThisWeek}/{habit.goalPerWeek}
        </span>
      </div>
    </Link>
  )
}
