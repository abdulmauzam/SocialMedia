import React, { Component, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import tanjiro from "./images/tanjiro.jpg";
import wisdom from "./images/wisdom.JPG";
import dubai from "./images/dubai.jpg";

export default function Try1() {
  const [inp, setinp] = useState();
  const onChangePicture = (e) => {
    setinp(URL.createObjectURL(e.target.files[0]));
    console.log("picture: ", inp);
  };
  /*const [imagess,setimagess]=useState([tanjiro, wisdom])
  const [newimagess,setnewimagess]=useState([])
  setnewimagess((imagess)=>[...imagess,dubai])
  console.log(imagess.length)
  console.log(newimagess.length)*/

  const [gitems, setGItems] = useState([tanjiro, wisdom]);
  console.log(gitems.length)
  let newgitems=[...gitems]
  const add = (e) => {
    e.preventDefault();
    setGItems((newgitems) => [ inp]);
  };

  return (
    <div>
      <Form onSubmit={add}>
        <input  
          type="file"
          placeholder="please enter data"
          onChange={onChangePicture}
        ></input>
        <Button type="Submit"> Add me </Button>
      </Form>
      {gitems.map((item) => {
        return (
          <img
            key={item}
            className="rounded-circle"
            alt="10x10"
            style={{ height: "5rem", width: "5rem", marginLeft: "4.rem" }}
            src={item}
          ></img>
        );
      })}
    </div>
  );
}
