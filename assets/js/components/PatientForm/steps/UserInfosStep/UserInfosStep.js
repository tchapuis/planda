import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Alert  } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import PropTypes from 'prop-types';
import { PatientFormContext, PROGRESS_VALUES } from '../../index';
import { Card } from '../../../index';

const userInfosSchema = yup.object().shape({
  phone: yup.string().required().matches(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/),
  lastName: yup.string().required().max(30),
  firstName: yup.string().required().max(30),
});

export function UserInfosStep({cancelProcessRegistration, children}) {  
  const { patientFormState, setPatientFormState,  } = React.useContext(PatientFormContext);
  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(userInfosSchema)
  });

  const onSubmitUserInfo = (data) => {
    const { 
      firstName,
      lastName,
      phone,
    } = data;

    setPatientFormState({
      ...patientFormState, progressValue: PROGRESS_VALUES.step_2, firstName, lastName, phone
    })
  }

  return (
    <div className="row justify-content-md-center">
    <div className="col-md-8">
      <Card>
        <Form onSubmit={handleSubmit((value) => onSubmitUserInfo(value))}> 
          <FormGroup>
            <Label className={'PatientForm__label'} for="exampleEmail">Téléphone</Label>
            <Controller
              defaultValue={patientFormState.phone}
              control={control}
              name="phone"
              render={({ onChange, onBlur, value}) => (
                <Input className={'PatientForm__input'} type="text" name="phone" id="phone" placeholder="Téléphone" value={value} onChange={onChange} onBlur={onBlur} />
              )}
            />
            {errors.phone && (errors.phone.type === "required" ? <Alert color="danger">Veuillez renseigner un numéro de téléphone</Alert> : <Alert color="danger">Veuillez renseigner un numéro de téléphone valide</Alert>) }
          </FormGroup>
          <FormGroup>
            <Label className={'PatientForm__label'} for="examplePassword">Nom</Label>
            <Controller
              defaultValue={patientFormState.firstName}
              control={control}
              name="lastName"
              render={({ onChange, onBlur, value}) => (
                <Input className={'PatientForm__input'} type="text" name="lastName" id="lastName" placeholder="Nom" value={value} onChange={onChange} onBlur={onBlur} />
              )}
            />
            {errors.lastName && (errors.lastName.type === "required" ? <Alert color="danger">Veuillez renseigner un nom</Alert> : <Alert color="danger">Veuillez renseigner un nom valide</Alert>) }
          </FormGroup>
          <FormGroup>
            <Label className={'PatientForm__label'} for="examplePassword">Prénom</Label>
            <Controller
              defaultValue={patientFormState.lastName}
              control={control}
              name="firstName"
              render={({ onChange, onBlur, value}) => (
                <Input className={'PatientForm__input'} type="text" name="firstName" id="firstName" placeholder="Prénom" value={value} onChange={onChange} onBlur={onBlur} />
              )}
            />
            {errors.firstName && (errors.firstName.type === "required" ? <Alert color="danger">Veuillez renseigner un prénom</Alert> : <Alert color="danger">Veuillez renseigner un prénom valide</Alert>) }
          </FormGroup>
          <FormGroup className='last-form-goup-button'>
            <Button type='submit' color="primary">Confirmer vos informations</Button>
            <Button onClick={()=> {
              cancelProcessRegistration();
            }} className="btn btn-outline-secondary">Annuler</Button>
          </FormGroup>
        </Form>
        {children}
        </Card>
      </div>
    </div>
  )
}

UserInfosStep.propTypes  = {
  cancelProcessRegistration: PropTypes.func.isRequired,
  children : PropTypes.node.isRequired
}