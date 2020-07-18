import React from 'react'
import PropTypes from 'prop-types';

export function Card({children}) {
  return <div className='Card'>{children}</div>
}

Card.propTypes  = {
  children : PropTypes.node.isRequired
}