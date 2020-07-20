import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import classNames from 'classnames'
import { PatientFormContext } from '../index';
import frLocale from '@fullcalendar/core/locales/fr';

const MONDAY = 1

export function Calendar() {
  const { patientFormState, setPatientFormState,  } = React.useContext(PatientFormContext);
  const { selectedEventId } = patientFormState

  const setSelectedEventId = (selectedEventId) => {
    setPatientFormState({...patientFormState, selectedEventId})
  }
  const [events] = React.useState([
    { id: 1, date: '2020-07-22T09:30:00+02:00' },
    { id: 2, date: '2020-07-21T10:00:00+02:00' },
    { id: 3, date: '2020-07-21T10:30:00+02:00' },
    { id: 4, date: '2020-07-21T11:00:00+02:00' },
    { id: 5, date: '2020-07-21T11:30:00+02:00' },
    { id: 6, date: '2020-07-21T13:30:00+02:00' },
    { id: 7, date: '2020-07-21T14:00:00+02:00' },
    { id: 8, date: '2020-07-21T14:30:00+02:00' },
  ])
  
  const eventClick = ({ event }) => {
    if (selectedEventId === event.id) {
      return setSelectedEventId(null)
    }
    return setSelectedEventId(event.id)
  }

  function renderEventContent(eventInfo) {
    const { timeText, event } = eventInfo
    const isEventSelected = event.id === selectedEventId
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
}