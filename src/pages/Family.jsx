import Seo from '../seo/Seo.jsx'
import FamilyCard from '../components/FamilyCard.jsx'
import QuoteSection from '../components/QuoteSection.jsx'

export default function Family() {
  return (
    <>
      <Seo
        title="Meet the Family | Sudor Construction — Pittsburgh"
        description="Sudor is a Pittsburgh father-and-son team: Doug Sudor (electrical & tile, 20+ years) and Braiden Sudor (demolition & dumpsters). Family owned, family run."
        path="/family" />

      <section className="page-hero">
        <div className="hero-grain" />
        <div className="hero-inner">
          <p className="eyebrow">The Founders</p>
          <h1>FAMILY OWNED.<br /><span className="g">FAMILY RUN.</span></h1>
          <p className="hero-sub">A Pittsburgh father-and-son team joining decades of master-trade experience with
          modern, precise demolition — one crew, start to finish.</p>
        </div>
      </section>

      <section className="fam-full">
        <FamilyCard who="doug" />
        <FamilyCard who="braiden" />
      </section>

      <QuoteSection preset="" />
    </>
  )
}
