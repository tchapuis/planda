import React from 'react'
import { PatientForm } from '../../components'

export default function Home() {
  return (
    <div className="row justify-content-md-center">
      <section className="col-md-6 col-sm-12">
        <h1>Home</h1>
        <PatientForm />
      </section>
    </div>
  )
}
