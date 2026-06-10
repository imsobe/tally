import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Dashboard', icon: '◧', end: true },
  { to: '/habits', label: 'Habits', icon: '☰', end: false },
  { to: '/settings', label: 'Settings', icon: '⚙', end: false },
]

/** Persistent left sidebar: brand mark + primary navigation. */
export function Nav() {
  return (
    <aside className="nav">
      <div className="nav-brand">
        <span className="nav-logo">✓</span>
        <span className="nav-title">Tally</span>
      </div>
      <nav className="nav-links">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
          >
            <span className="nav-link-icon" aria-hidden>
              {l.icon}
            </span>
            {l.label}
          </NavLink>
        ))}
      </nav>
      <div className="nav-footer">
        <div className="nav-avatar">IS</div>
        <div className="nav-user">
          <div className="nav-user-name">Imran</div>
          <div className="nav-user-plan">Free plan</div>
        </div>
      </div>
    </aside>
  )
}
