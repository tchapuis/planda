import React from 'react'
import { Form, FormGroup, Button } from 'reactstrap'
import { Card } from '../../../index';
import { PatientFormContext, PROGRESS_VALUES } from '../../index';
import PropTypes from 'prop-types';

export function FinalStep({children}) {
  const { patientFormState, setPatientFormState,  } = React.useContext(PatientFormContext);

  const handleDataSubmition = () => {
      fetch(`${process.env.REACT_API_DOMAIN}/api/users`)
  }

  return (
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          <Card>
            <Form>
                <h2 className="PatientForm__title">Finaliser votre rendez-vous médical :</h2>
                <section className="PatientForm__summary">
                  <p>{patientFormState.firstName}</p>
                  <p>{patientFormState.lastName}</p>
                  <p>{patientFormState.phone}</p>
                  <p>{patientFormState.selectedEvent.label}</p>
                </section>
                <FormGroup className='last-form-goup-button'>
                  <Button onClick={()=> console.log('Confirmer votre rendez-vous')} color="primary">Confirmer votre rendez-vous</Button>
                  <Button
                    onClick={()=> setPatientFormState({...patientFormState, progressValue: PROGRESS_VALUES.step_2})}
                    className="btn btn-outline-secondary">Retour</Button>
                </FormGroup>
            </Form>
            {children}
          </Card>
        </div>
      </div>
    )
}

FinalStep.propTypes = {
  children : PropTypes.node.isRequired
}
