import React from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { BsFillPlusSquareFill } from "@react-icons/all-files/bs/BsFillPlusSquareFill";
import "./App.css";

export default function ConnectProfile() {
  return (<>
    <div
      className="d-flex flex-row"
      style={{ alignItems: "center", marginLeft: "500px" }}
    >
      <BsFillPlusSquareFill style={{ width: "40px" }} />
      <h4 className="text">Connect a Profile</h4>
    </div>

    <Card style={{height:"450px",width:"1000px",marginLeft:"140px"}}>
    <h6>Connect a Profile</h6>
    <Card style={{height:"395px"}}>
    <h5 style={{marginTop:"15px",marginLeft:"35px"}}> Select a network to connect a profile</h5>
    <div className="d-flex flex-row">
    <Card>sdfa</Card>
    <Card>dsfa</Card>
    <Card>sdfa</Card>
    </div>
    </Card>
    </Card>
  </>
  );
}
