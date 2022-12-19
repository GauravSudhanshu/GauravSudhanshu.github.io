import React from 'react'
import "./Contactform.css"
const Contactform = () => {
  return (
    <>
      <div className='form'>
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text"></input>
            <label htmlFor="">Email</label>
            <input type="email"></input>
            <label htmlFor="">Message</label>
           <textarea rows="10" placeholder='Type your message here'/>
           <button className='formbtn'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contactform
