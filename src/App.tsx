import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Dashboard } from './pages/Dashboard'
import { Habits } from './pages/Habits'
import { HabitDetail } from './pages/HabitDetail'
import { Settings } from './pages/Settings'

/** App shell: persistent sidebar nav + the routed page area. */
export default function App() {
  return (
    <div className="app">
      <Nav />
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/habits/:id" element={<HabitDetail />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  )
}
