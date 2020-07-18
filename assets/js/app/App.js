import { Router } from '@reach/router'
import React from 'react'
// import { Navigation } from '../layout/Navigation'

const Home = React.lazy(() => import('../pages/Home/Home'))

export function App() {
  document.title = 'Planda';

  return (
    <main className="App container">
        <React.Suspense fallback="Loading">
          <Router>
            <Home path="/" />
          </Router>

          {/* <Navigation /> */}
        </React.Suspense>
    </main>
  )
}
