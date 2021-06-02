import { Button,Container,Form } from 'react-bootstrap'
import React,{useState,useRef} from 'react'


function Tryapp() {
    const [pictures, setPictures] = useState([{
        data: [],
        url: ""
    }])
    const handle=()=>{
        console.log("handled")
    }
    const handleImageUpload = e => {
        e.preventDefault();
        const tempArr = [];
      
        [...e.target.files].forEach(file => {
          console.log("file >>> ", file);
      
          tempArr.push({
            data: file,
            url: URL.createObjectURL(file)
          });
      
          console.log("pictures >> ", pictures);
        });
      
        setPictures(tempArr);
      };
    return (
        <div className="post__pictures">
        <input type="file" multiple 
            onChange={handleImageUpload}
            accept="image/*"
        />
        
    
            {pictures?.map(pic => (
                <img key={pic} className="rounded-circle" alt="10x10" style={{height: "5rem", width: "5rem",marginLeft:"4.rem"}} src={pic.url} />
            ))}
    </div>
       
    )
}

export default Tryapp;
