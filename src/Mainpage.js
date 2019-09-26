import React, { Component } from 'react'
import Slider from './Slider'
import Contact from './Contact'
import Courses from './Courses'
import About from './About'
import Blog from './Blog'
import Page from './Page'
import './static/Bounce.css'

class Mainpage extends Component {
    render() {
        const link = (this.props.clickedLink).replace("http://localhost:3000/","")
        return (
    <div className="et-main">
    <div style={{overflow:"hidden",position:"relative"}}>
    <div className="et-slide" id="home">
      {link === "#contact"?
      <Contact/>:
      link === "#about"?
      <About/>:
      link === "#courses"?
      <Courses/>:
      link === "#blog"?
      <Blog/>:
      link === "#page"?
      <Page/>:
      [<div style={{marginTop: "80px"}}>
      <h1 style={{marginTop: "50px"}}><span style={{color: "#464849"}}>E</span><span>-</span><span>L</span><span>E</span><span>A</span><span>R</span><span>N</span></h1>
      <h3 style={{fontFamily: '"Luckiest Guy", cursive'}}>Learning Made Fun</h3></div>,
      <Slider/>
      ]}
    </div>
    </div>
    </div>
        )
    }
}

export default Mainpage
