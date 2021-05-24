import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container} from 'react-bootstrap'
import interactionPlugin from "@fullcalendar/interaction";


import "./App.css"

let num=[{title: 'event 1', date: '2021-05-19'},{title: 'event 2', date: '2021-05-20'}]
num.push({title:"welcome to wisdom",date:"2021-05-22"})

export default function Calendar() {
  
  const handleDateClick = (num) => { // bind with an arrow function
    alert(num.title)
  }
  
    return (
        <>
        <Container style={{maxWidth:"790px",}}>
       
        <FullCalendar
        events={num}
        plugins={[ dayGridPlugin,interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
      />
        </Container>
       
      </>
    )
  }
  


