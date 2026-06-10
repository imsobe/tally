import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { HabitRow } from '../components/HabitRow'
import { habits } from '../data/habits'

/** Full habit list — every habit as a clickable row into its detail page. */
export function Habits() {
  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1 className="page-title">Habits</h1>
          <p className="page-subtitle">{habits.length} habits you're tracking.</p>
        </div>
        <Button variant="primary">+ New habit</Button>
      </header>

      <Card className="card-flush">
        <ul className="habit-list">
          {habits.map((h) => (
            <li key={h.id}>
              <HabitRow habit={h} />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
