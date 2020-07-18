import React from 'react'
// import classNames from 'classnames';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

export function PatientForm() {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText></InputGroupText>
      </InputGroupAddon>
      <Input placeholder="username" />
    </InputGroup>
  )
}
