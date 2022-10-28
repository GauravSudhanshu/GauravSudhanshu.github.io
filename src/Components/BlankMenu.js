import "./BlankMenu.css";
import React from "react";
import { Link } from "react-router-dom";
import MyImage from "../assets/MyImage.png";
import { FaRegHandshake } from "react-icons/fa";
const blankMenu = () => {
  return (
    <div className="blank">
      <div className="bg">
        <img
          className="into-img"
          src="https://www.meshpros.com/images/bg/hmk1.jpg"
          alt="introImage"
        />
      </div>
     
      <div className="content">
      <img src={MyImage} alt="" className="myimage" />
      <div>
        <h1>Hello <FaRegHandshake/> Myself <br /> Gaurav Sudhanshu</h1>
        <h3>Wel-Come To My Portfolio. <br />A Full-Stack Developer trained by Masai School, Bengaluru. </h3>
        <p></p>
        <div >
          {/* <Link to="/about" className="btn">
            About
          </Link> */}
          <Link to="/Resume" className="btn-light">
          Resume
          </Link>
          {/* <Link to="/resume" className="btn">
          Contact
          </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default blankMenu;
