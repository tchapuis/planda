import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const MONDAY = 1;

export function Calendar(){
    return (
        <FullCalendar
            firstDay={MONDAY}
            locale='fr'
            plugins={[ dayGridPlugin ]}
            initialView="dayGridWeek"
            events={[
                { title: 'event 1', date: '2019-04-01' },
                { title: 'event 2', date: '2019-04-02' }
            ]}
        />
    )
  }