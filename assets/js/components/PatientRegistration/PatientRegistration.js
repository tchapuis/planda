import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Progress } from 'reactstrap';
import { Calendar, Card } from '../index';
import PropTypes from 'prop-types';

const PROGRESS_VALUES = {
  patientFormStarted : '15',
  patientFormSetted : '45',
  patientCalendarSetted: '80'
}

export function PatientRegistration({setProcessRegistration}) {
  const [progressValue, setProgressValue] = React.useState(PROGRESS_VALUES.patientFormStarted);
  const [selectedEventId, setSelectedEventId] = React.useState(null)

  return (
    <Card>
      <Progress animated value={progressValue} />
      {PROGRESS_VALUES.patientFormStarted === progressValue && (<Form>
        <FormGroup>
          <Label className={'PatientRegistration__label'} for="exampleEmail">Téléphone</Label>
          <Input className={'PatientRegistration__input'} type="email" name="phone" id="email" placeholder="Téléphone" />
        </FormGroup>
        <FormGroup>
          <Label className={'PatientRegistration__label'} for="examplePassword">Nom</Label>
          <Input  className={'PatientRegistration__input'} type="text" name="lastName" id="lastName" placeholder="Nom" />
        </FormGroup>
        <FormGroup>
          <Label className={'PatientRegistration__label'} for="examplePassword">Prénom</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Prénom"
            className={'PatientRegistration__input'}
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={()=> setProgressValue(PROGRESS_VALUES.patientFormSetted)} color="primary">Confirmer vos informations</Button>
          <Button onClick={()=> {
            setProcessRegistration(false);
            setProgressValue(PROGRESS_VALUES.patientFormStarted);
          }} className="btn btn-outline-secondary">Retour</Button>
        </FormGroup>
      </Form>)}
      {PROGRESS_VALUES.patientFormSetted === progressValue && (
      <Form>
        <Calendar selectedEventId={selectedEventId} setSelectedEventId={setSelectedEventId} setProgressValue={setProgressValue} />
        <FormGroup>
          <Button onClick={()=> console.log('Confirmer')} color="primary">Confirmer l'horaire</Button>
          <Button onClick={()=> setProgressValue(PROGRESS_VALUES.patientFormStarted)} className="btn btn-outline-secondary">Retour</Button>
        </FormGroup>
      </Form>)}
    </Card>
  )
}

PatientRegistration.propTypes  = {
  setProcessRegistration: PropTypes.func.isRequired
}