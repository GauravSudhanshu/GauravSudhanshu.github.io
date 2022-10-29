import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import BackGround from "../Components/BackGround"


const About = () => {
  return (
    <div>
      <Navbar />
      <BackGround heading ="About Me"
       text="I am friendly Front-End Developer" />
       <About />
      <Footer />
    </div>
  )
}

export default About
