import React from 'react'
import { Form, FormGroup, Button } from 'reactstrap'
import { Calendar, Card } from '../../../index';
import { PatientFormContext, PROGRESS_VALUES } from '../../index';
import { Alert  } from 'reactstrap';
import PropTypes from 'prop-types';

export function CalendarStep({children}) {  
  const { patientFormState, setPatientFormState,  } = React.useContext(PatientFormContext);
  const [calendarEventError, setCalendarEventError] = React.useState(null);

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(!patientFormState.selectedEvent.id) {
      return setCalendarEventError({message: 'Veuillez selectionner un horaire'})
    }
    setPatientFormState({...patientFormState, progressValue: PROGRESS_VALUES.step_3});
  }

  return (
      <div className="row justify-content-md-center">
        <div className="col-md-12">
          <Card>
            <Form onSubmit={handleSubmit} >
                <h2 className="PatientForm__title">Choisisez l'horaire de votre rendez-vous médical :</h2>
                <Calendar setCalendarEventError={setCalendarEventError} />
                {calendarEventError && <Alert color="danger">{calendarEventError.message}</Alert> }
                <FormGroup className='last-form-goup-button'>
                  <Button type='submit' color="primary">Confirmer l'horaire</Button>
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