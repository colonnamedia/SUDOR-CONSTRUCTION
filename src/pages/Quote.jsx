import { useLocation } from 'react-router-dom'
import Seo from '../seo/Seo.jsx'
import QuoteSection from '../components/QuoteSection.jsx'

export default function Quote() {
  const { state } = useLocation()
  const preset = (state && state.service) || ''
  return (
    <>
      <Seo
        title="Get a Free Quote | Sudor Construction — Pittsburgh"
        description="Request a free estimate from Sudor Construction. One form routes straight to the right crew — electrical & tile to Doug, demo & dumpsters to Braiden."
        path="/quote" />
      <section className="page-hero slim">
        <div className="hero-grain" />
        <QuoteSection preset={preset} bare />
      </section>
    </>
  )
}
