import React from 'react'
import PropTypes from 'prop-types';

export function Jumbotron({ setProcessRegistration }) {
  return (

      <div className="row justify-content-md-center">
        <div className="col-md-8 jumbotron">
            <h1 className="jumbotron-title">Bienvenue sur Planda</h1>
            <p className="jumbotron-subtitle">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr />
            <p className="jumbotron-text">It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a href="/connect/auth0" className="btn btn-primary">Prendre rendez-vous</a>
            </p>
        </div>
      </div>

  )
}

Jumbotron.propTypes  = {
  setProcessRegistration: PropTypes.func.isRequired
}
