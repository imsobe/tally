import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

/** Settings form — local state only (no persistence; this is a demo target). */
export function Settings() {
  const [name, setName] = useState('Imran')
  const [reminders, setReminders] = useState(true)
  const [weekStart, setWeekStart] = useState<'mon' | 'sun'>('mon')
  const [reminderTime, setReminderTime] = useState('08:00')

  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Preferences for your tracker.</p>
        </div>
      </header>

      <Card>
        <h2 className="card-title">Profile</h2>
        <div className="field">
          <label className="field-label" htmlFor="name">
            Display name
          </label>
          <input id="name" className="field-input" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="field">
          <span className="field-label">Week starts on</span>
          <div className="segmented">
            <button
              className={`seg${weekStart === 'mon' ? ' seg-active' : ''}`}
              onClick={() => setWeekStart('mon')}
            >
              Monday
            </button>
            <button
              className={`seg${weekStart === 'sun' ? ' seg-active' : ''}`}
              onClick={() => setWeekStart('sun')}
            >
              Sunday
            </button>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="card-title">Reminders</h2>
        <div className="row-between">
          <div>
            <div className="field-label">Daily reminder</div>
            <div className="field-help">A nudge to check in on your habits.</div>
          </div>
          <button
            className={`switch${reminders ? ' switch-on' : ''}`}
            onClick={() => setReminders((v) => !v)}
            aria-pressed={reminders}
          >
            <span className="switch-knob" />
          </button>
        </div>

        <div className="field" style={{ opacity: reminders ? 1 : 0.45 }}>
          <label className="field-label" htmlFor="time">
            Reminder time
          </label>
          <input
            id="time"
            type="time"
            className="field-input field-input-narrow"
            value={reminderTime}
            disabled={!reminders}
            onChange={(e) => setReminderTime(e.target.value)}
          />
        </div>
      </Card>

      <div className="settings-actions">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Save changes</Button>
      </div>
    </div>
  )
}
