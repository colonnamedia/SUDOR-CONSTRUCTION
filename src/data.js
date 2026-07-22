export const SITE = { url: 'https://sudorconstruction.com', name: 'Sudor Construction' }

export const SERVICES = [
  { group: 'Electric & Tile — Doug', route: 'doug', items: [
    'Electrical work', 'Custom / luxury tile', 'Remodel / renovation',
    'Home addition', 'Commercial construction',
  ]},
  { group: 'Demo & Dumpsters — Braiden', route: 'braiden', items: [
    'Demolition', 'Dumpster / dump-trailer rental', 'Cleanout',
    'Junk removal', 'Moving',
  ]},
]

export const CONTACTS = {
  doug:    { name: 'Doug Sudor',    div: 'Electric & Tile',  phone: '412-576-0662', tel: '+14125760662', email: 'dougsudor@yahoo.com' },
  braiden: { name: 'Braiden Sudor', div: 'Demo & Dumpsters', phone: '412-618-6004', tel: '+14126186004', email: 'braidensudor@gmail.com' },
}

export const routeFor = (s) => {
  for (const g of SERVICES) if (g.items.includes(s)) return g.route
  return null
}

export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/dump-rentals', label: 'Dump Rentals' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/family', label: 'The Family' },
]
