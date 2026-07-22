import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Rentals from './pages/Rentals.jsx'
import Work from './pages/Work.jsx'
import Family from './pages/Family.jsx'
import Quote from './pages/Quote.jsx'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dump-rentals', element: <Rentals /> },
      { path: 'our-work', element: <Work /> },
      { path: 'family', element: <Family /> },
      { path: 'quote', element: <Quote /> },
    ],
  },
]
