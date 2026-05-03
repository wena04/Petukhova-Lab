import { NavLink, Outlet } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/publications', label: 'Publications' },
  { to: '/people', label: 'People' },
  { to: '/hs-resources', label: 'HS resources' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/participate', label: 'Participate' },
]

export function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="site-brand">
            <div className="site-brand__title">Petukhova Lab</div>
            <div className="site-brand__sub">NYU Grossman School of Medicine</div>
          </NavLink>
          <nav className="site-nav" aria-label="Primary">
            {nav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>
            © {new Date().getFullYear()} Petukhova Lab ·{' '}
            <a href="https://med.nyu.edu/">NYU Grossman School of Medicine</a>
          </p>
        </div>
      </footer>
    </>
  )
}
