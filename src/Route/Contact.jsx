import React from 'react'
import BackGround from '../Components/BackGround'
import Contactform from '../Components/Contactform'

const Contact = () => {
  return (
    <>
    <div id='contact'>
    <div >
      <BackGround heading ="Contact Me" text="You can contact me at the places mentioned below. I will try to get back to you as fast as I can."/>
      
    </div>
      <Contactform />
    </div>
    
    </>
   
  )
}

export default Contact
