import React from 'react'
import {  Button } from 'reactstrap';
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
                <Button onClick={()=> setProcessRegistration(true)} color="primary">Prendre rendez-vous</Button>
            </p>
        </div>
      </div>
   
  )
}

Jumbotron.propTypes  = {
  setProcessRegistration: PropTypes.func.isRequired
}