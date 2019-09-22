import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar sticky="top" bg="light">
<Nav className="mr-auto">
    <div className="et-hero-tabs-container">
      <Nav.Link className = "et-hero-tab" href="#home">Home</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#about">About</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#courses">Courses</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#blog">Blog</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#page">Page</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#contact">Contact</Nav.Link>
      <span className="et-hero-tab-slider"></span>
      </div>
</Nav>
    
  </Navbar>
            </div>
        )
    }
}

export default MyNavbar
