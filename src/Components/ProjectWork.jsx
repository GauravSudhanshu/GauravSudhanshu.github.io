import "./ProjectCard.css";
import React from "react";

import ProjectCard from "../Components/ProjectCard"
import ProjectWorkData from "./ProjectWorkData";
const ProjectWork = () => {
  return (
    <>
      <div className="project-container">
        {ProjectWorkData.map((val,index) =>{
          return(
            <ProjectCard 
             key={index}
              imgsrc ={val.imgsrc}
              title ={val.title}
              description ={val.description}
              icon = {val.icon}
              view={val.view}
              source = {val.source}
             />
          )
        })}
      </div>
    </>
  );
};

export default ProjectWork;
