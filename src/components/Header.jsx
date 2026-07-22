import { Link, NavLink, useNavigate } from 'react-router-dom'
import { PhoneIcon } from './icons.jsx'
import { NAV } from '../data.js'

export default function Header() {
  const navigate = useNavigate()
  return (
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
      </div>
    </header>
  )
}
