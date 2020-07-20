import React from 'react'
import { Form, FormGroup, Button } from 'reactstrap'
import { Calendar, Card } from '../../../index';
import { PatientFormContext, PROGRESS_VALUES } from '../../index';
import PropTypes from 'prop-types';

export function CalendarStep({children}) {  
  const { patientFormState, setPatientFormState,  } = React.useContext(PatientFormContext);

  return (
      <div className="row justify-content-md-center">
        <div className="col-md-12">
          <Card>
            <Form>
                <Calendar />
                <FormGroup className='last-form-goup-button'>
                  <Button onClick={()=> console.log('Confirmer')} color="primary">Confirmer l'horaire</Button>
                  <Button
                    onClick={()=> setPatientFormState({...patientFormState, progressValue: PROGRESS_VALUES.step_1})} 
                    className="btn btn-outline-secondary">Retour</Button>
                </FormGroup>
            </Form>
            {children}
          </Card>
        </div>
      </div>
    )
}

CalendarStep.propTypes = {
  children : PropTypes.node.isRequired
}