import React, { useEffect } from "react";
import {  Link } from "react-router-dom";
import aboutImg from "./../Images/logo.png";

function NavBar() {
  let interval;


  useEffect(()=>{
      
      interval = setInterval(() => {
      deleteurl();
  }, 600000 );

  });


  const  deleteurl =()=>{
       window.open("https://www.google.com/","_self")
       clearInterval(interval)
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <img src={aboutImg} className="App-logo" alt="logo" />
        <div></div>
        <a target="_top" href="https://www.google.com/" >
          <button className="emergencyExit false" tanindex="0">
               לסגירת הטופס
          </button>
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feel-good">Feel Good</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
        </ul>
        <div className="timerNote">לביטחונך השאלון מאובטח ויסגר תוך:</div>
      </div>
    </nav>
  );
}

export default NavBar;
