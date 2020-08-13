import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import classNames from 'classnames'
import { PatientFormContext } from '../index';
import frLocale from '@fullcalendar/core/locales/fr';
import PropTypes from 'prop-types';

const MONDAY = 1

export function Calendar({setCalendarEventError}) {
  const { patientFormState, setPatientFormState,  } = React.useContext(PatientFormContext);
  const { selectedEvent } = patientFormState

  const setSelectedEvent = (selectedEvent) => {
    setPatientFormState({...patientFormState, selectedEvent : selectedEvent})
  }

  const [events, setEvents] = React.useState([])

  React.useEffect(() => {
    fetch(`${process.env.REACT_API_DOMAIN}/api/slots`, {
      headers: {
        'Accept': 'application/json'
      }
    })
        .then(res => res.json())
        .then(slots => {
          setEvents(slots);
        })
  }, [])

  const eventClick = ({ event }) => {
    if (selectedEvent.id === event.id) {
      return setSelectedEvent({id: null, label: ''})
    }
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };
    const eventDate = new Date(event.startStr);
    setCalendarEventError(null);

    return setSelectedEvent({
      id: event.id,
      label: eventDate.toLocaleDateString('fr-FR', dateOptions)
    })
  }

  function renderEventContent(eventInfo) {
    const { timeText, event } = eventInfo
    const isEventSelected = event.id === selectedEvent.id
    const eventClasses = classNames('planda-event', {
      'planda-event__selected': isEventSelected,
    })
    return (
      <div className={eventClasses}>
        <b>{timeText}</b>
        <i>{event.title}</i>
      </div>
    )
  }

  return (
    <FullCalendar
      allDaySlot={false}
      height={600}
      firstDay={MONDAY}
      locale={frLocale}
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      slotDuration="00:30:00"
      slotMinTime="09:00:00"
      slotMaxTime="20:00:00"
      defaultTimedEventDuration="00:30:00"
      slotLabelFormat={{
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: false,
      }}
      eventContent={renderEventContent}
      events={events}
      eventClick={eventClick}
    />
  )
}

Calendar.propTypes  = {
  setCalendarEventError: PropTypes.func.isRequired
}
