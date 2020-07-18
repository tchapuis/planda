import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Progress, Alert  } from 'reactstrap';
import { Calendar, Card } from '../index';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import PropTypes from 'prop-types';

const PROGRESS_VALUES = {
  patientFormStarted : '15',
  patientFormSetted : '45',
  patientCalendarSetted: '80'
}

const schema = yup.object().shape({
  phone: yup.string().required().matches(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/),
  lastName: yup.string().required().max(30),
  firstName: yup.string().required().max(30),
});


export function PatientRegistration({setProcessRegistration}) {
  const [progressValue, setProgressValue] = React.useState(PROGRESS_VALUES.patientFormStarted);
  const [selectedEventId, setSelectedEventId] = React.useState(null)
  
  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema)
  });
  console.log('errrors', errors);
  const onSubmitUserInfo = (data) => {
    console.log(data);
    setProgressValue(PROGRESS_VALUES.patientFormSetted)
  }

  return (
    <Card>
      <Progress animated value={progressValue} />
      {PROGRESS_VALUES.patientFormStarted === progressValue && (
      <Form onSubmit={handleSubmit(onSubmitUserInfo)}> 
        <FormGroup>
          <Label className={'PatientRegistration__label'} for="exampleEmail">Téléphone</Label>
          <Controller
            defaultValue={''}
            control={control}
            name="phone"
            render={({ onChange, onBlur, value}) => (
              <Input className={'PatientRegistration__input'} type="text" name="phone" id="phone" placeholder="Téléphone" value={value} onChange={onChange} onBlur={onBlur} />
            )}
          />
          {errors.phone && (errors.phone.type === "required" ? <Alert color="danger">Veuillez renseigner un numéro de téléphone</Alert> : <Alert color="danger">Veuillez renseigner un numéro de téléphone valide</Alert>) }
        </FormGroup>
        <FormGroup>
          <Label className={'PatientRegistration__label'} for="examplePassword">Nom</Label>
          <Controller
            defaultValue={''}
            control={control}
            name="lastName"
            render={({ onChange, onBlur, value}) => (
              <Input className={'PatientRegistration__input'} type="text" name="lastName" id="lastName" placeholder="Nom" value={value} onChange={onChange} onBlur={onBlur} />
            )}
          />
          {errors.lastName && (errors.lastName.type === "required" ? <Alert color="danger">Veuillez renseigner un nom</Alert> : <Alert color="danger">Veuillez renseigner un nom valide</Alert>) }
        </FormGroup>
        <FormGroup>
          <Label className={'PatientRegistration__label'} for="examplePassword">Prénom</Label>
          <Controller
            defaultValue={''}
            control={control}
            name="firstName"
            render={({ onChange, onBlur, value}) => (
              <Input className={'PatientRegistration__input'} type="text" name="firstName" id="firstName" placeholder="Prénom" value={value} onChange={onChange} onBlur={onBlur} />
            )}
          />
          {errors.firstName && (errors.firstName.type === "required" ? <Alert color="danger">Veuillez renseigner un prénom</Alert> : <Alert color="danger">Veuillez renseigner un prénom valide</Alert>) }
        </FormGroup>
        <FormGroup>
          <Button type='submit' color="primary">Confirmer vos informations</Button>
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