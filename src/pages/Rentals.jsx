import { useNavigate } from 'react-router-dom'
import Seo from '../seo/Seo.jsx'
import { PhoneIcon, CloverMark } from '../components/icons.jsx'
import QuoteSection from '../components/QuoteSection.jsx'

const sizes = [
  { name: 'Dump Trailer', cap: 'Driveway-friendly', best: 'Cleanouts, small remodels, yard debris' },
  { name: 'Standard Load', cap: 'Mid-size haul', best: 'Whole-room demo, roofing tear-off' },
  { name: 'Heavy Haul', cap: 'Big jobs', best: 'Full gut demo, construction debris' },
]
const steps = [
  { n: '01', t: 'Tell Braiden the job', d: "Send the location and what you're clearing. Fast, fair pricing back to you." },
  { n: '02', t: 'We drop the trailer', d: 'Placed where you need it, on your schedule — driveway or jobsite.' },
  { n: '03', t: 'We haul it away', d: 'Fill it up, we pick it up and dispose of it right. You never touch the dump.' },
]

export default function Rentals() {
  const navigate = useNavigate()
  return (
    <>
      <Seo
        title="Dumpster Rentals & Demolition in Pittsburgh | Sudor Construction"
        description="Dump-trailer & steel dumpster rentals, demolition, cleanouts and junk removal across Pittsburgh, dispatched by Braiden Sudor. Call 412-618-6004 for fast, fair pricing."
        path="/dump-rentals" />

      <section className="page-hero green-hero">
        <div className="hero-grain" />
        <div className="hero-inner">
          <p className="eyebrow" style={{ color: 'var(--green)' }}>Demo &amp; Dumpsters · Braiden Sudor</p>
          <h1>DUMPSTERS,<br /><span className="gr">DEMO &amp; HAUL-OFF.</span></h1>
          <p className="hero-sub">Steel dumpsters and dump-trailer rentals, demolition, cleanouts, junk removal and
          moving — dispatched straight by Braiden. Construction background means we prep the site right for whatever's next.</p>
          <div className="hero-cta">
            <button className="btn btn-green" onClick={() => navigate('/quote', { state: { service: 'Dumpster / dump-trailer rental' } })}>Book a rental</button>
            <a href="tel:+14126186004" className="btn btn-ghost"><PhoneIcon /> 412-618-6004</a>
          </div>
        </div>
      </section>

      <section className="rent-sizes">
        <div className="sec-head"><p className="eyebrow center" style={{ color: 'var(--green)' }}>What you can rent</p><h2>Right size for the job.</h2>
        <p className="sec-lead">Exact sizes &amp; pricing confirmed when you reach out — every job's a little different.</p></div>
        <div className="size-grid">
          {sizes.map((s) => (
            <div className="size-card" key={s.name}>
              <div className="size-ico"><CloverMark small /></div>
              <h3>{s.name}</h3>
              <p className="size-cap">{s.cap}</p>
              <p className="size-best">{s.best}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rent-how">
        <div className="sec-head"><p className="eyebrow center" style={{ color: 'var(--green)' }}>How it works</p><h2>Three steps, no hassle.</h2></div>
        <div className="how-grid">
          {steps.map((s) => (
            <div className="how-card" key={s.n}><span className="how-n">{s.n}</span><h3>{s.t}</h3><p>{s.d}</p></div>
          ))}
        </div>
      </section>

      <section className="rent-services">
        <div className="sec-head"><h2>Also from the Demo crew</h2></div>
        <div className="chip-row">
          {['Demolition', 'Cleanouts', 'Junk removal', 'Moving', 'Site prep'].map((c) => <span className="chip green" key={c}>{c}</span>)}
        </div>
      </section>

      <QuoteSection preset="Dumpster / dump-trailer rental" />
    </>
  )
}
