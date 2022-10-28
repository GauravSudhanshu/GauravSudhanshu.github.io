import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa"
import logo from "../assets/logo.png"

const Navbar = () => {

  const [click , setClick] = useState(false)
  const [color ,setColor] = useState(false)

  const changeColor = () =>{
    if(window.scrollY >= 100){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener("scroll" , changeColor);

  const handleClick = () =>{
    setClick(!click)
  }
  return (
    <>
    <div className={color ? "header header-bg" :"header"}>
      <Link to="/">
        <img src={logo}alt="" className="logo" />
      </Link>
      <ul className={click ? "menu active" :"menu"}>
        <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/project">Project</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        
      </ul>
      <div className="menu-icon" onClick={handleClick}>
      {
        click ? 
        (<FaTimes size ={25} style={{color:"white"}}/>)
        :
        ( <FaBars size ={25} style={{color:"white"}}/>)

        
      }
       
        
      </div>
      
    </div>
    {/* <button className="btn">Hello Gaurav</button> */}
    </>
  );
};

export default Navbar;
