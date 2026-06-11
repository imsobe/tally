import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { StatTile } from '../components/StatTile'
import { Button } from '../components/Button'
import { habits, overallCompletion, bestStreak } from '../data/habits'

/** Landing screen: a greeting, three headline stats, and today's habit checklist. */
export function Dashboard() {
  const today = habits.filter((h) => h.cadence !== 'weekly')
  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1 className="page-title">LOOP FIXED</h1>
          <p className="page-subtitle">You have {today.length} habits to tend today.</p>
        </div>
        <Link to="/habits">
          <Button variant="secondary">View Dem Habittus</Button>
        </Link>
      </header>

      <div className="stat-row">
        <StatTile label="Best streak" value={`${bestStreak()} days`} hint="Meditate" accent="#34d399" />
        <StatTile label="This week" value={`${overallCompletion()}%`} hint="of weekly goals" accent="#6366f1" />
        <StatTile label="Active habits" value={`${habits.length}`} hint="across all cadences" accent="#fb923c" />
      </div>

      <Card>
        <div className="card-head">
          <h2 className="card-title">Today</h2>
          <span className="card-meta">{today.filter((h) => h.history.at(-1)).length} done</span>
        </div>
        <ul className="check-list">
          {today.map((h) => {
            const done = h.history.at(-1)
            return (
              <li key={h.id} className="check-item">
                <span className={`check-box${done ? ' check-box-done' : ''}`}>{done ? '✓' : ''}</span>
                <span className="check-emoji">{h.emoji}</span>
                <Link to={`/habits/${h.id}`} className="check-name">
                  {h.name}
                </Link>
                <span className="check-streak">🔥 {h.streak}</span>
              </li>
            )
          })}
        </ul>
      </Card>
    </div>
  )
}
