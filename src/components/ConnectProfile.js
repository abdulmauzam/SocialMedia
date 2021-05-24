import React from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillTwitterSquare } from "@react-icons/all-files/ai/AiFillTwitterSquare";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import "./App.css";

export default function ConnectProfile() {
  return (
    <>
      <h2 className="text"> Open Social media Accounts</h2>
      <Card
        style={{
          height: "12rem",
          width: "50rem",
          marginLeft: "250px",
          marginTop: "25px",
        }}
      >
        <div className="d-flex felx-row">
          <Card  onClick={()=>window.open("https://www.facebook.com/")} style={{backgroundColor:"#3b5998", height: "9rem", width: "14rem", margin: "20px" }}>
            <h4 style={{ textAlign: "center" ,color:"white"}}>Facebook</h4>
            <AiFillFacebook
              style={{
                color:"white",
                height: "65px",
                width: "50px",
                marginLeft: "83px",
              }}
            ></AiFillFacebook>
            <Button style={{ marginTop: "12px" , backgroundColor:"#3b5998"}}>
              Facebook
            </Button>
          </Card>
          <Card  onClick={()=>window.open("https://www.twitter.com/")} style={{ height: "9rem", width: "14rem", margin: "20px" ,backgroundColor:"#00ACEE"}}>
            <h4 style={{ textAlign: "center" ,color:"white"}}>Twitter</h4>
            <AiFillTwitterSquare
              style={{
                color:"white",
                height: "65px",
                width: "50px",
                marginLeft: "83px",
              }}
            ></AiFillTwitterSquare>
            <Button style={{ marginTop: "12px" , color:"white",backgroundColor:"#00ACEE"}}>
              Twitter
            </Button>
          </Card>
          <Card className="button" onClick={()=>window.open("https://www.instagram.com/")} style={{ height: "9rem", width: "14rem", margin: "20px" }}>
            <h4 style={{ textAlign: "center", color:"white" }}>Instagram</h4>
            <AiFillInstagram
              style={{
                color:"white",
                height: "65px",
                width: "50px",
                marginLeft: "83px",
              }}
            ></AiFillInstagram>
            <Button className="cardButton" style={{ marginTop: "12px" }}>
              Instagram
            </Button>
          </Card>
        </div>
      </Card>
    </>
  );
}
