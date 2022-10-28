import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import BackGround from '../Components/BackGround'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <BackGround heading ="Contact Me" text="You can contact me at the places mentioned below. I will try to get back to you as fast as I can."/>
      <Footer />
    </div>
  )
}

export default Contact
