import React, { Component } from 'react'
import Slider from './Slider'
import Contact from './Contact'
import Courses from './Courses'
import About from './About'
import Blog from './Blog'

class Mainpage extends Component {
    render() {
        const link = (this.props.clickedLink).replace("http://localhost:3000/","")
        return (
    <div className="et-main">
    <div className="et-slide" id="home">
      {link === "#contact"?
      <Contact/>:
      link === "#about"?
      <About/>:
      link === "#courses"?
      <Courses/>:
      link === "#blog"?
      <Blog/>:
      [
      <h1>E-Learn</h1>,
      <h3>Learning Made Fun</h3>,
      <Slider/>
      ]}
    </div>
    </div>
        )
    }
}

export default Mainpage
