import "./AboutContent.css";

import React from "react";
import { Link } from "react-router-dom";
import html5 from "../assets/html5.png"
import css3 from "../assets/css3.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import node from "../assets/node-js.png"
import redux from "../assets/redux.png"
import mongodb from "../assets/mongodb.png"
import GithubStats from "../assets/GithubStats.jpg"
import Contributions from "../assets/Contributions.jpg"
import contributionDots from "../assets/contributionDots.jpg"
const AboutContent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <p>
            Aspiring React Front-End Developer. I believe in building
            trust-based and mutually beneficial relationships with my
            colleagues. I always focus on the positive outcome of the situation.
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
          <h1 className="skill">My Skills</h1>
          <div className="gitImage">
            <img src={GithubStats} alt="" />
            <img src={Contributions} alt="" />
            <img src={contributionDots} alt="" />
          </div>
          <div className="skill-img">
          <img src={html5} alt="" />
          <img src={css3} alt="" />
          <img src={javascript} alt="" />
          <img src={react} alt="" />
          <img src={node} alt="" />
          <img src={redux} alt="" />
          <img src={mongodb} alt="" />

          </div>
          
        </div>
      </div>
    </>
  );
};

export default AboutContent;
