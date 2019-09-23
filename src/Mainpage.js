import React, { Component } from 'react'
import Slider from './Slider'
import Contact from './Contact'
import About from './About'

class Mainpage extends Component {
    render() {
        const link = (this.props.clickedLink).replace("http://localhost:3000/","")
        return (
    <div className="et-main">
    <div className="et-slide" id="home">
      <h1>Home</h1>
      <h3>Loren Ipsum</h3>
      {link === "#contact"?
      <Contact/>:
      link === "#about"?
      <About/>:
      <Slider/>
      }
    </div>
    </div>
        )
    }
}

export default Mainpage
