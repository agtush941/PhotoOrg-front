import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import Reg from './component/Reg/Reg';
import Login from './component/Login/Login';
import UserHome from './component/User/UserHome'
import Image from './component/User/Image'
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Home/>}/>
        <Route path="/Reg" element={<Reg/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/UserHome" element={<UserHome/>}>
        
        </Route>
        <Route path="/UserHome/Image/:id" element={<Image/>}/>
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
