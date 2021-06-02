import React from "react";

import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Reset from "./Reset";
import ConnectProfile from "./ConnectProfile";
import "./App.css";
import Main from "./notes/Main";

import MainPost from "./CreatePosts/MainPost";
import Calendar from "./Calendar";
import Try from "./try";
import Try1 from "./try1";
import Try2 from "./try2";



function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/reset" component={Reset}></Route>
          <Route path="/connectprofile" component={ConnectProfile}></Route>
          <Route path="/calendar" component={Calendar}></Route>
          <Route path="/try" component={Try}></Route>
          <Route path="/notes/Main" component={Main}></Route>
         
          <Route path="/CreatePosts/MainPost" component={MainPost}></Route>

          <Route path="/try1" component={Try1}></Route>
          <Route path="/try2" component={Try2}></Route>
          
          <Route exact path="/" component={Login}></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
