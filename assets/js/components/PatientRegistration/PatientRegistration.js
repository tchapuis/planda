import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Progress } from 'reactstrap';
import { Calendar } from '../index';

const PROGRESS_VALUES = {
  patientFormStarted : '15',
  patientFormSetted : '25',
  patientCalendarSetted: '80'
}

export function PatientRegistration() {
  const [progressValue, setProgressValue] = React.useState(PROGRESS_VALUES.patientFormStarted);

  return (
    <>
      <Progress value={progressValue} />
      {PROGRESS_VALUES.patientFormStarted === progressValue && (<Form>
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
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Prénom"
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={()=> setProgressValue(PROGRESS_VALUES.patientFormSetted)} color="primary">Confirmer</Button>
        </FormGroup>
      </Form>)}
      {PROGRESS_VALUES.patientFormSetted === progressValue && <Calendar setProgressValue={setProgressValue} />}
    </>
  )
}
