import React from 'react'
import "./App.css";
export default function EventPopup({infor}) {
  console.log(infor)
    return (
    
<div id="myModal" className="custommodal">
  <div className="custommodal-content">
    <span className="close">sadfasf</span>
    <img style={{height:"230px",width:"230px"}} src={infor.url}></img>
    <p>{infor.title}</p>
    
  </div>
</div>
    )
}
