import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

export function PatientForm() {
  return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Téléphone</Label>
          <Input type="email" name="phone" id="email" placeholder="Téléphone" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Nom</Label>
          <Input type="text" name="lastName" id="lastName" placeholder="Nom" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Prénom</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="Prénom" />
        </FormGroup>
      </Form>
    )
}
