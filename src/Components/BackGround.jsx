import React, { Component } from 'react'
import "./BackGround.css"

class BackGround extends Component {
    render(){
        return (
            <div className='bg-Img'>
            <div className='heading'>
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
            </div>
          )
    }
  
}

export default BackGround;
