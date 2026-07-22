import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-top">
        <div className="ft-brand">
          <img src="/images/logo/logo.png" alt="Sudor Construction" />
          <p>From start to finish. Two companies, one goal.</p>
          <span className="ft-grit">PITTSBURGH GRIT</span>
        </div>
        <div className="ft-col">
          <h4>Dispatch</h4>
          <a href="tel:+14125760662">Doug · 412-576-0662</a>
          <a href="tel:+14126186004">Demo &amp; Dumpsters · 412-618-6004</a>
          <a href="mailto:sudorconstruction@gmail.com">sudorconstruction@gmail.com</a>
        </div>
        <div className="ft-col">
          <h4>Explore</h4>
          <Link to="/dump-rentals">Dump Rentals</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/family">The Family</Link>
          <Link to="/quote">Get a Quote</Link>
        </div>
        <div className="ft-col">
          <h4>Service area</h4>
          <span>Pittsburgh &amp; the South Hills</span>
          <span>Mt. Lebanon · Bethel Park</span>
          <span>Upper St. Clair · Peters Twp.</span>
          <a href="https://www.facebook.com/share/1TgVpKBiTp/" target="_blank" rel="noreferrer" className="ft-fb">Follow on Facebook →</a>
        </div>
      </div>
      <div className="ft-bottom"><span>© 2026 Sudor — Get it done right.</span><span>Black · Gold · Green</span></div>
    </footer>
  )
}
