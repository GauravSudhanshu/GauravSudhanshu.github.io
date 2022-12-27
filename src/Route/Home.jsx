import React from 'react'
import Navbar from '../Components/Navbar'
import BlankMenu from "../Components/BlankMenu"
import Footer from "../Components/Footer"
import About from './About'
import Project from './Project'
import Contact from './Contact'


const Home = () => {
  // let Component 
  //   switch (window.location.pathname) {
  //     case "/":
  //       Component = App
  //       break;
  //       case "/":
  //         Component = Home
  //         break;
  //         case "/":
  //         Component = Home
  //         break;
    
  //     default:
  //       break;
  //   }
  
  return (
    <div id='home'>
      <Navbar />
      <BlankMenu />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
