import { Button,Form } from 'react-bootstrap'
import React,{useState,useRef} from 'react'

function Tryapp() {
    const titleRef=useRef();
    const dateRef=useRef();
    let [num1,setNum1]=useState([]);
    let [num,setNum]=useState([{title:"abdul",date:"2021-11-21"},{title:"abduls",date:"2021-11-2sd1"}])
    const addNum=()=>{
        setNum([...num,{
            id:num1.length,
            title:titleRef.current.value 
            ,date:dateRef.current.value
        }],
        num=num1)
    }
    console.log(num.length)
    return (
        <div>
        <Button onClick={()=> window.open("https://github.com/abdulmauzam/SocialMedia")}> add me</Button>
        <Form onSubmit={addNum}>
        <Form.Group id="title">
                  <Form.Label>title</Form.Label>
                  <Form.Control type="text" required ref={titleRef} />
                </Form.Group>
                <Form.Group id="date">
                  <Form.Label>date</Form.Label>
                  <Form.Control type="text" required ref={dateRef} />
                </Form.Group>
        </Form>
        <ul>
        {
            num.map(n=>(
                <div className="d-flex flex-row">
                <li key={n.id}>{n.title}</li>
                <li key={n.id}>{n.date}</li>
                </div>
                
            ))
        }
        </ul>
        </div>
    )
}

export default Tryapp;
