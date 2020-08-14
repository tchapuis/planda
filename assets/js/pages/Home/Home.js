import React from 'react'
import { PatientForm, Jumbotron } from '../../components'

export default function Home() {
  const [processRegistration, setProcessRegistration] = React.useState(false);
  const [userId, setUserId] = React.useState(null);

    React.useEffect(() => {
        fetch(`${process.env.REACT_API_DOMAIN}/api/me`, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(responseUserId => {
                setUserId(responseUserId.user);
                if(responseUserId.user) {
                    setProcessRegistration(true);
                }
            })
    }, [])

  return (
    <div className="home row justify-content-md-center align-items-center">
      <section className="home-section col-md-12 col-sm-12">
          {!processRegistration && <Jumbotron setProcessRegistration={setProcessRegistration} />}
          {processRegistration && <PatientForm cancelProcessRegistration={() => setProcessRegistration(false)} />}
      </section>
    </div>
  )
}
