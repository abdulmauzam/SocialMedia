import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container,Button} from 'react-bootstrap'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import interactionPlugin from "@fullcalendar/interaction";
import Event from "./EventPopup";
import "./App.css"
import { SettingsInputAntenna } from '@material-ui/icons';



export default function Calendar() {
  let [events,setEvents]=useState([{
    title: 'My Event',
    start: '2021-06-22',
    url: 'http://google.com/'
  },
  {title:"Monkeyd luffy",
   start:"2021-06-25",
  url:""},])
  const [input,setInp]=useState("");
  const [pop,setPop]=useState(false);
  const [infor,setinfor]=useState({
    title:"",
    start:"",
    url:"",
  });

  useEffect(()=>{
   
    if(infor.title!==""){
      setPop(true);
    }
  },[infor])
  const handleDateClick = (num) => { 
    alert(num.date)
  }
  
      
  function eventClick (info) {
    info.jsEvent.preventDefault(); 
    const { title, start, url} = info.event;
    setinfor((prevState)=> ({
      ...prevState,
      title :title,
      start:start,
      url:url,
    }));
  }
  console.log(events)
    return (
        <>
        {pop?<Event infor={infor} ></Event>:null} 
        <Container style={{maxWidth:"790px",}}>
       
        <FullCalendar
        events={events}
        plugins={[ dayGridPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventClick={eventClick}
      />
        </Container>
        
      </>
    )
  }
  


