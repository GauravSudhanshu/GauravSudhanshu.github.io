import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {

    const[click,setClick] = useState(false);
    const handleClick =() =>{
        setClick(!click);
    }
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            src="https://images.assetsdelivery.com/compings_v2/arum23/arum232102/arum23210200032.jpg"
            alt=""
            className="logo"
          />
          {/* <h4>Gaurav Sudhanshu</h4> */}
        </Link>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />):
        (<FaBars size={20} style={{ color: "#fff" }} />)
        }
          
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
