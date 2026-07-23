import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { PhoneIcon } from './icons.jsx'
import { NAV } from '../data.js'

export default function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  // close the drawer on any route change
  useEffect(() => { setOpen(false) }, [pathname])

  // lock body scroll while the drawer is open
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // esc to close
  useEffect(() => {
    if (!open || typeof window === 'undefined') return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className="hd">
        <Link to="/" className="hd-logo"><img src="/images/logo/logo.png" alt="Sudor Construction" /></Link>

        <nav className="hd-nav">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end}
              className={({ isActive }) => 'hd-link' + (isActive ? ' on' : '')}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hd-right">
          <a href="tel:+14125760662" className="hd-call"><PhoneIcon /> <span>412-576-0662</span></a>
          <button className="btn btn-gold sm hd-quote" onClick={() => navigate('/quote')}>Get a Quote</button>

          {/* mobile-only phone shortcut + hamburger */}
          <a href="tel:+14125760662" className="hd-call-mini" aria-label="Call Sudor Construction"><PhoneIcon /></a>
          <button
            className={'hd-burger' + (open ? ' open' : '')}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* backdrop */}
      <div className={'nav-scrim' + (open ? ' show' : '')} onClick={() => setOpen(false)} aria-hidden="true" />

      {/* mobile drawer */}
      <div id="mobile-menu" className={'nav-drawer' + (open ? ' show' : '')} role="dialog" aria-modal="true" aria-label="Menu">
        <nav className="nav-drawer-links">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end}
              className={({ isActive }) => 'drawer-link' + (isActive ? ' on' : '')}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-drawer-cta">
          <button className="btn btn-gold" onClick={() => navigate('/quote')}>Get a Quote</button>
        </div>

        <div className="nav-drawer-dispatch">
          <span className="drawer-label">Dispatch</span>
          <a href="tel:+14125760662" className="drawer-call gold">
            <PhoneIcon /><div><b>Doug — Electric &amp; Tile</b><small>412-576-0662</small></div>
          </a>
          <a href="tel:+14126186004" className="drawer-call green">
            <PhoneIcon /><div><b>Braiden — Demo &amp; Dumpsters</b><small>412-618-6004</small></div>
          </a>
        </div>
      </div>
    </>
  )
}
