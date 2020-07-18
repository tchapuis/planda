import React from 'react'
import { Jumbotron as ReactStrapJumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';

export function Jumbotron({ setProcessRegistration }) {

  return (
    // <div className="jumbotron-container row align-items-center">
      <ReactStrapJumbotron>
        <h1 className="jumbotron-title">Bienvenue sur Planda</h1>
        <p className="jumbotron-subtitle">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="jumbotron-text" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
            <Button onClick={()=> setProcessRegistration(true)} color="primary">Prendre rendez-vous</Button>
          </p>
      </ReactStrapJumbotron>
    // </div>
  )
}

Jumbotron.propTypes  = {
  setProcessRegistration: PropTypes.func.isRequired
}