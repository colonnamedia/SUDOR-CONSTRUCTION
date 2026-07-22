import { PhoneIcon } from './icons.jsx'

export default function FamilyCard({ who }) {
  const isDoug = who === 'doug'
  const img = isDoug ? '/images/team/owner.jpg' : '/images/team/braiden.jpg'
  const pos = isDoug ? 'center 22%' : 'center 16%'
  const bio = isDoug
    ? "Twenty-plus years and a general contractor's license behind him, Doug has done it all — house flips to high-end custom renovations. He specializes in professional electrical work and precision tile, and he doesn't miss details. When Doug's on it, it gets done right."
    : "Braiden grew up on his dad's jobsites and launched his own demolition outfit the summer he graduated. Now the two run it together. His edge is the construction background — knowing how a building goes together is knowing exactly how to take it apart and prep it clean for what's next."
  return (
    <div className={'fam-card ' + who}>
      <img src={img} alt={isDoug ? 'Doug Sudor' : 'Braiden Sudor'} style={{ objectPosition: pos }} />
      <div className="fam-body">
        <span className={'fam-tag ' + (isDoug ? 'gold' : 'green')}>{isDoug ? 'Electric & Tile' : 'Demo & Dumpsters'}</span>
        <h3>{isDoug ? 'Doug Sudor' : 'Braiden Sudor'}</h3>
        <p>{bio}</p>
        <a href={isDoug ? 'tel:+14125760662' : 'tel:+14126186004'} className={'fam-call ' + (isDoug ? 'gold' : 'green')}>
          <PhoneIcon /> {isDoug ? '412-576-0662' : '412-618-6004'}
        </a>
      </div>
    </div>
  )
}
