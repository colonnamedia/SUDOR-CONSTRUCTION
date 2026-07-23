import { Link, useNavigate } from 'react-router-dom'
import Seo from '../seo/Seo.jsx'
import { PhoneIcon, CloverMark } from '../components/icons.jsx'
import FamilyCard from '../components/FamilyCard.jsx'
import QuoteSection from '../components/QuoteSection.jsx'

const HERO_TRADES = [
  { label: 'Electrical', type: 'electrical' },
  { label: 'Tile', type: 'tile' },
  { label: 'Demolition', type: 'demolition' },
  { label: 'Dumpster Rentals', type: 'dumpster' },
]

function HeroTradeIcon({ type }) {
  if (type === 'electrical') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 10-13h-7l0-7z" />
      </svg>
    )
  }

  if (type === 'tile') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 2 10 10-10 10L2 12 12 2zm0 4.8L6.8 12l5.2 5.2 5.2-5.2L12 6.8z" />
      </svg>
    )
  }

  if (type === 'demolition') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19h14v2H5v-2zm3.1-3.2 4.3-7.5 1.8 1-4.3 7.5-1.8-1zm5.7-8.9 1.3-2.2 3.5 2-1.3 2.2-3.5-2zM5 16h6v2H5v-2zm13-6 3 1.7-3.6 6.3h-3L18 10z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8h16l-1.2 11H5.2L4 8zm3 2 .7 7h8.6l.7-7H7zm2-5h6l1 2H8l1-2z" />
    </svg>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const quote = (service) => navigate('/quote', { state: { service } })

  return (
    <>
      <Seo
        title="Sudor Construction | Electrical, Tile, Demolition & Dumpster Rentals - Pittsburgh"
        description="Family-run Pittsburgh contractor. Master electrical and luxury tile with Doug; demolition, cleanouts and dumpster rentals with Braiden. Free estimates - call 412-576-0662."
        path="/" />

      <section className="hero hero--home hero-showcase">
        <div className="hero-grain" />
        <div className="hero-inner hero-showcase-inner">
          <p className="eyebrow hero-kicker">Pittsburgh - Family Owned - 20+ Years on the Tools</p>
          <h1 className="hero-title">
            <span>ONE NAME.</span>
            <span className="g">TWO CREWS.</span>
            <span>DONE RIGHT.</span>
          </h1>
          <span className="hero-rule" aria-hidden="true" />
          <p className="hero-sub hero-showcase-sub">
            Master electrical, luxury tile, heavy-duty demolition &amp; dumpster rentals.
            From start to finish, we get it done right.
          </p>

          <div className="hero-trades" aria-label="Sudor Construction services">
            {HERO_TRADES.map((trade) => (
              <div className="hero-trade" key={trade.type}>
                <span className="hero-trade-icon"><HeroTradeIcon type={trade.type} /></span>
                <span>{trade.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-cta">
            <button className="btn btn-gold hero-quote-btn" onClick={() => quote('Electrical work')}>
              <HeroTradeIcon type="electrical" /> Electric &amp; Tile Quote
            </button>
            <button className="btn btn-green hero-demo-btn" onClick={() => quote('Demolition')}>
              <HeroTradeIcon type="dumpster" /> Demo &amp; Dumpster Quote
            </button>
          </div>

          <div className="hero-phones">
            <a href="tel:+14125760662"><PhoneIcon /> Doug - 412-576-0662</a>
            <a href="tel:+14126186004"><PhoneIcon /> Braiden - 412-618-6004</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div><b>100%</b><span>Satisfaction on the finished product</span></div>
        <div className="stat-sep" />
        <div><b>412</b><span>Serving Pittsburgh, proudly</span></div>
        <div className="stat-sep" />
        <div><b>20+</b><span>Years of master-trade experience</span></div>
      </section>

      <section className="divisions">
        <div className="sec-head">
          <p className="eyebrow center">One website - Two companies</p>
          <h2>Pick your crew.</h2>
          <p className="sec-lead">Every job runs through the person who actually does the work - no call centers, no runaround.</p>
        </div>
        <div className="div-grid">
          <div className="div-card doug">
            <img className="div-logo" src="/images/logo/logo-electric.png" alt="Sudor Electric" />
            <h3>Electric &amp; Tile</h3>
            <p className="div-owner">Run by Doug Sudor</p>
            <ul>
              <li>Residential &amp; commercial electrical</li>
              <li>High-end &amp; luxury tile</li>
              <li>Remodels &amp; renovations</li>
              <li>Additions</li>
              <li>Every phase, any setting</li>
            </ul>
            <button className="btn btn-gold sm" onClick={() => quote('Electrical work')}>Start an Electric/Tile job</button>
          </div>
          <div className="div-seam"><span>ONE<br />GOAL</span></div>
          <div className="div-card braiden">
            <div className="div-logo demo-badge"><CloverMark small /><span>DEMO &amp; DUMPSTERS</span></div>
            <h3>Demo &amp; Dumpsters</h3>
            <p className="div-owner">Run by Braiden Sudor</p>
            <ul>
              <li>Demolition - done clean</li>
              <li>Dump-trailer &amp; steel dumpster rentals</li>
              <li>Cleanouts</li>
              <li>Junk removal</li>
              <li>Moving</li>
            </ul>
            <Link to="/dump-rentals" className="btn btn-green sm">See dumpster rentals</Link>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="sec-head"><p className="eyebrow center">Our Work</p><h2>Receipts, not promises.</h2></div>
        <div className="work-grid three">
          {[
            { t: 'Custom tile', side: 'gold', img: '/images/gallery/gallery-01.jpg' },
            { t: 'Panel upgrade', side: 'gold', img: '/images/gallery/gallery-02.jpg' },
            { t: 'Full gut demo', side: 'green', img: '/images/gallery/gallery-03.jpg' },
          ].map((p, i) => (
            <div className="work-tile has-img" key={i} data-side={p.side}>
              <img className="work-img" src={p.img} alt={p.t} loading="lazy" />
              <span className="work-tag">{p.t}</span>
            </div>
          ))}
        </div>
        <div className="center-btn"><Link to="/our-work" className="btn btn-ghost">See all our work</Link></div>
      </section>

      <section className="family">
        <div className="sec-head"><p className="eyebrow center">The Founders</p><h2>A father, a son, one standard.</h2></div>
        <div className="fam-grid">
          <FamilyCard who="doug" />
          <FamilyCard who="braiden" />
        </div>
        <div className="center-btn"><Link to="/family" className="btn btn-ghost">Meet the family</Link></div>
      </section>

      <QuoteSection preset="" />
    </>
  )
}
