import { Router } from '@reach/router'
import React from 'react'
// import { Navigation } from '../layout/Navigation'

const Home = React.lazy(() => import('../pages/Home/Home'))

export function App() {
  document.title = 'Planda';

  return (
    <main className="App container">
        <div className="App__background" />
        <React.Suspense fallback="Loading">
          <Router>
            <Home path="/" />
            <Home path="/app" />
          </Router>

          {/* <Navigation /> */}
        </React.Suspense>
    </main>
  )
}
