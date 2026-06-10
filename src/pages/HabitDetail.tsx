import { Link, useParams } from 'react-router-dom'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { ProgressRing } from '../components/ProgressRing'
import { getHabit } from '../data/habits'

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

/** Single habit: header, weekly goal ring, last-7-days grid, and the note. */
export function HabitDetail() {
  const { id } = useParams()
  const habit = getHabit(id)

  if (!habit) {
    return (
      <div className="page">
        <Card>
          <h1 className="page-title">Habit not found</h1>
          <p className="page-subtitle">That habit doesn't exist (or was removed).</p>
          <Link to="/habits">
            <Button variant="secondary">← Back to habits</Button>
          </Link>
        </Card>
      </div>
    )
  }

  const pct = Math.round((habit.doneThisWeek / habit.goalPerWeek) * 100)
  return (
    <div className="page">
      <Link to="/habits" className="back-link">
        ← Habits
      </Link>

      <header className="detail-head">
        <span className="detail-emoji" style={{ background: `${habit.color}22` }}>
          {habit.emoji}
        </span>
        <div className="detail-head-text">
          <h1 className="page-title">{habit.name}</h1>
          <div className="detail-meta">
            <Badge cadence={habit.cadence} />
            <span className="habit-streak">🔥 {habit.streak} day streak</span>
          </div>
        </div>
        <Button variant="primary">Mark done</Button>
      </header>

      <div className="detail-grid">
        <Card>
          <h2 className="card-title">This week</h2>
          <div className="detail-ring">
            <ProgressRing percent={pct} color={habit.color} />
            <div className="detail-ring-text">
              <div className="detail-ring-big">
                {habit.doneThisWeek}/{habit.goalPerWeek}
              </div>
              <div className="detail-ring-sub">days toward goal</div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="card-title">Last 7 days</h2>
          <div className="week-grid">
            {habit.history.map((done, i) => (
              <div key={i} className="week-cell">
                <div
                  className={`week-dot${done ? ' week-dot-done' : ''}`}
                  style={done ? { background: habit.color } : undefined}
                />
                <span className="week-day">{DAYS[i]}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="card-title">Note</h2>
        <p className="detail-note">{habit.note}</p>
      </Card>
    </div>
  )
}
