/**
 * In-memory habit fixtures. No backend — this is a demo target app for review-os, so the
 * data is static and lives here. `history` is the last 7 days (oldest → newest); `true` =
 * completed that day.
 */
export type Cadence = 'daily' | 'weekdays' | 'weekly'

export interface Habit {
  id: string
  name: string
  emoji: string
  cadence: Cadence
  streak: number
  goalPerWeek: number
  doneThisWeek: number
  color: string
  note: string
  history: boolean[]
}

export const habits: Habit[] = [
  {
    id: 'water',
    name: 'Drink water',
    emoji: '💧',
    cadence: 'daily',
    streak: 12,
    goalPerWeek: 7,
    doneThisWeek: 5,
    color: '#38bdf8',
    note: 'Eight glasses. A full bottle on the desk by 9am makes this automatic.',
    history: [true, true, false, true, true, true, false],
  },
  {
    id: 'read',
    name: 'Read 20 pages',
    emoji: '📖',
    cadence: 'daily',
    streak: 4,
    goalPerWeek: 7,
    doneThisWeek: 4,
    color: '#a78bfa',
    note: 'Currently on a slow non-fiction book — 20 pages keeps momentum without dread.',
    history: [false, true, true, true, false, true, true],
  },
  {
    id: 'run',
    name: 'Morning run',
    emoji: '🏃',
    cadence: 'weekdays',
    streak: 8,
    goalPerWeek: 5,
    doneThisWeek: 3,
    color: '#fb923c',
    note: 'Short loop around the park. Shoes by the door the night before.',
    history: [true, false, true, false, true, false, false],
  },
  {
    id: 'meditate',
    name: 'Meditate',
    emoji: '🧘',
    cadence: 'daily',
    streak: 21,
    goalPerWeek: 7,
    doneThisWeek: 6,
    color: '#34d399',
    note: 'Ten minutes, guided. The streak is the motivator here — do not break the chain.',
    history: [true, true, true, true, true, true, false],
  },
  {
    id: 'journal',
    name: 'Journal',
    emoji: '✍️',
    cadence: 'weekly',
    streak: 2,
    goalPerWeek: 3,
    doneThisWeek: 1,
    color: '#f472b6',
    note: 'Three longer entries a week. Sunday review is the anchor one.',
    history: [false, false, true, false, false, false, false],
  },
]

/** Find one habit by id (route param). */
export function getHabit(id: string | undefined): Habit | undefined {
  return habits.find((h) => h.id === id)
}

/** Overall weekly completion across every habit's goal, as a 0–100 percentage. */
export function overallCompletion(): number {
  const done = habits.reduce((sum, h) => sum + h.doneThisWeek, 0)
  const goal = habits.reduce((sum, h) => sum + h.goalPerWeek, 0)
  return goal === 0 ? 0 : Math.round((done / goal) * 100)
}

/** The longest active streak across all habits. */
export function bestStreak(): number {
  return habits.reduce((max, h) => Math.max(max, h.streak), 0)
}
