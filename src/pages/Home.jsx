import { Link, useNavigate } from 'react-router-dom'
import Seo from '../seo/Seo.jsx'
import { PhoneIcon, CloverMark } from '../components/icons.jsx'
import FamilyCard from '../components/FamilyCard.jsx'
import QuoteSection from '../components/QuoteSection.jsx'

export default function Home() {
  const navigate = useNavigate()
  const quote = (service) => navigate('/quote', { state: { service } })
  return (
    <>
      <Seo
        title="Sudor Construction | Electrical, Tile, Demolition & Dumpster Rentals — Pittsburgh"
        description="Family-run Pittsburgh contractor. Master electrical & luxury tile with Doug; demolition, cleanouts & dumpster rentals with Braiden. Free estimates — call 412-576-0662."
        path="/" />

      <section className="hero hero--home">
        <div className="hero-grain" />
        <div className="hero-inner">
          <p className="eyebrow">Pittsburgh · Family Owned · 20+ Years on the Tools</p>
          <h1>ONE NAME.<br /><span className="g">TWO CREWS.</span><br />DONE RIGHT.</h1>
          <p className="hero-sub">Sudor is two family-run companies under one roof — master electrical &amp; luxury
          tile with Doug, heavy-duty demolition &amp; dumpster rentals with Braiden. From the first wire to the
          last load out, one call gets it handled.</p>
          <div className="hero-cta">
            <button className="btn btn-gold" onClick={() => quote('Electrical work')}>Electric &amp; Tile Quote</button>
            <button className="btn btn-green" onClick={() => quote('Demolition')}>Demo &amp; Dumpster Quote</button>
          </div>
          <div className="hero-phones">
            <a href="tel:+14125760662"><PhoneIcon /> Doug · 412-576-0662</a>
            <a href="tel:+14126186004"><PhoneIcon /> Braiden · 412-618-6004</a>
          </div>
        </div>
        <div className="hero-clover"><CloverMark /></div>
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
          <p className="eyebrow center">One website · Two companies</p>
          <h2>Pick your crew.</h2>
          <p className="sec-lead">Every job runs through the person who actually does the work — no call centers, no runaround.</p>
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
              <li>Demolition — done clean</li>
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
        <div className="center-btn"><Link to="/our-work" className="btn btn-ghost">See all our work →</Link></div>
      </section>

      <section className="family">
        <div className="sec-head"><p className="eyebrow center">The Founders</p><h2>A father, a son, one standard.</h2></div>
        <div className="fam-grid">
          <FamilyCard who="doug" />
          <FamilyCard who="braiden" />
        </div>
        <div className="center-btn"><Link to="/family" className="btn btn-ghost">Meet the family →</Link></div>
      </section>

      <QuoteSection preset="" />
    </>
  )
}
