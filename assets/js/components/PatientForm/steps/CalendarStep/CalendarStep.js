import React from 'react'
import { Form, FormGroup, Button } from 'reactstrap'
import { Calendar } from '../../../index';
import { PatientFormContext, PROGRESS_VALUES } from '../../index';

export function CalendarStep() {  
  const { patientFormState, setPatientFormState,  } = React.useContext(PatientFormContext);

  return (
    <Form>
        <Calendar />
        <FormGroup>
        <Button onClick={()=> console.log('Confirmer')} color="primary">Confirmer l'horaire</Button>
        <Button
          onClick={()=> setPatientFormState({...patientFormState, progressValue: PROGRESS_VALUES.step_1})} 
          className="btn btn-outline-secondary">Retour</Button>
        </FormGroup>
    </Form>
    )
}

CalendarStep.propTypes = {
}