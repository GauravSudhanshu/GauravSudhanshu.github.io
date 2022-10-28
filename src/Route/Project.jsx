import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import BackGround from '../Components/BackGround'
import ProjectWork from '../Components/ProjectWork'


const Project = () => {
  return (
    <div>
      <Navbar />
      <BackGround heading ="PROJECTS" text="My projects make use of a vast variety of latest technology tools. My best experience is to create React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub."/>
      <ProjectWork/>
      <Footer />
    </div>
  )
}

export default Project
