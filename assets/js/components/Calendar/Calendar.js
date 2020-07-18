import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import classNames from 'classnames'
import PropTypes from 'prop-types';

const MONDAY = 1

export function Calendar({ setProgressValue }) {
  const [events] = React.useState([
    { id: 1, title: 'Disponible', date: '2020-07-19T09:30:00+02:00' },
    { id: 2, title: 'Disponible', date: '2020-07-19T10:00:00+02:00' },
    { id: 3, title: 'Disponible', date: '2020-07-19T10:30:00+02:00' },
  ])

  console.log('setProgressValue', setProgressValue);
  
  const [selectedEventId, setSelectedEventId] = React.useState(null)

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
      height={600}
      firstDay={MONDAY}
      locale="fr"
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      nowIndicator
      slotDuration="00:30:00"
      slotMinTime="09:30:00"
      slotMaxTime="20:00:00"
      defaultTimedEventDuration="00:30:00"
      slotLabelFormat={{
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: 'short',
      }}
      eventContent={renderEventContent}
      events={events}
      eventClick={eventClick}
    />
  )
}


Calendar.propTypes  = {
  setProgressValue: PropTypes.func.isRequired
}