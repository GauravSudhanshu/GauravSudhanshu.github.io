import "./Footer.css";
import React from "react";
import { FaFacebook, FaGithub,  FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="details">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Patna , Bihar - 10 . </p>
              <p>India </p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            + 91 - 7070486987</h4>
          </div>
          <div className="mail">
            <h4><FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            gauravsud3@gmail.com</h4>
          </div>
        </div>
        <div className="social-media">
        <FaFacebook 
              size={35}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaLinkedin 
              size={35}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaGithub 
              size={35}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaWhatsapp
              size={35}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <h4 className="made"> -----\ Made By Gaurav /-----</h4>

        </div>
      </div>
    </div>
  );
};

export default footer;
