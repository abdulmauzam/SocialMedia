import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import TimePicker from "react-time-picker";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  
  makeStyles,
  
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

import "react-datepicker/dist/react-datepicker.css";

import {
  Container,
  
  Button,
  
  Card,
 
} from "@material-ui/core";

const NavBar = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const classes = useStyles();
 


  
  const [time, setTime] = useState("null");

 
  const onChange=(e)=>{
    let files= e.target.files;
    let reader =new FileReader()
    reader.readAsDataURL(files[0])
    console.log(reader)
  }


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menubackgroud}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome to Social Media Handler
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Link to="/dashboard">
                <HomeIcon />
              </Link>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <h2>Create your own post</h2>
      <Container component="main" width="90px" className="b">
        <Card className="card" style={{ minHeight: "350px" }}>
          <textarea
            required
            rows="8"
            cols="109"
            className="input"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <div className="flexbox">
            <label>Select date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
            <label className="label">Select Time</label>
            <TimePicker
              className="time"
            
              selected={time}
              onChange={(time) => setTime(time)}
            />
          </div>
          <input style={{marginTop:"20px"}} type="file" name="file" onChange={onChange}/>
          <Button className="createPostButton" style={{ marginTop: "20px" }}>
            {" "}
            Save
          </Button>
        </Card>
      </Container>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menubackgroud: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  title: {
    flexGrow: 1,
  },
}));
export default NavBar;
