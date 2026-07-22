import Seo from '../seo/Seo.jsx'
import QuoteSection from '../components/QuoteSection.jsx'

const tiles = [
  { t: 'Custom tile', side: 'gold', img: '/images/gallery/gallery-01.jpg' },
  { t: 'Panel upgrade', side: 'gold', img: '/images/gallery/gallery-02.jpg' },
  { t: 'Full gut demo', side: 'green', img: '/images/gallery/gallery-03.jpg' },
  { t: 'Kitchen remodel', side: 'gold' },
  { t: 'Dumpster drop', side: 'green' },
  { t: 'Commercial fit-out', side: 'gold' },
  { t: 'Bathroom tile', side: 'gold' },
  { t: 'Cleanout haul', side: 'green' },
  { t: 'Deck tear-down', side: 'green' },
]

export default function Work() {
  return (
    <>
      <Seo
        title="Our Work | Sudor Construction — Pittsburgh Electrical, Tile & Demo"
        description="A look at completed Sudor projects: electrical, luxury tile, remodels, demolition and cleanouts across Pittsburgh."
        path="/our-work" />

      <section className="page-hero">
        <div className="hero-grain" />
        <div className="hero-inner">
          <p className="eyebrow">Our Work</p>
          <h1>THE PROOF<br /><span className="g">IS IN THE FINISH.</span></h1>
          <p className="hero-sub">Tile that lines up, panels done to code, tear-downs left broom-clean. Real project
          photos drop into this gallery — the structure's ready when Doug and Braiden send them over.</p>
        </div>
      </section>

      <section className="work full">
        <div className="work-grid">
          {tiles.map((p, i) => (
            <div className={'work-tile' + (p.img ? ' has-img' : '')} key={i} data-side={p.side}>
              {p.img && <img className="work-img" src={p.img} alt={p.t} loading="lazy" />}
              <span className="work-tag">{p.t}</span>
              {!p.img && <span className="work-ph">Photo coming</span>}
            </div>
          ))}
        </div>
        <p className="work-note">Drop real before/after or finished-job photos into <code>public/images/gallery/</code> (gold = Electric &amp; Tile, green = Demo &amp; Dumpsters).</p>
      </section>

      <QuoteSection preset="" />
    </>
  )
}
