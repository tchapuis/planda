import React from 'react'
import { PatientForm, Jumbotron } from '../../components'

export default function Home() {
  const [processRegistration, setProcessRegistration] = React.useState(false);

  return (
    <div className="home row justify-content-md-center align-items-center">
      <section className="home-section col-md-8 col-sm-12">
          {!processRegistration && <Jumbotron setProcessRegistration={setProcessRegistration} />}
          {processRegistration && <PatientForm cancelProcessRegistration={() => setProcessRegistration(false)} />}
      </section>
    </div>
  )
}
