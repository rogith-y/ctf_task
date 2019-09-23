import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class MyNavbar extends Component {
    handleOnClick = (e) =>{
        this.props.clickedLink(e.target.href);
    }
    render() {
        return (
            <div>
                <Navbar sticky="top" bg="light">
<Nav className="mr-auto">
    <div className="et-hero-tabs-container">
      <Nav.Link className = "et-hero-tab" href="#home" onClick={this.handleOnClick}>Home</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#about" onClick={this.handleOnClick}>About</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#courses" onClick={this.handleOnClick}>Courses</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#blog" onClick={this.handleOnClick}>Blog</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#page" onClick={this.handleOnClick}>Page</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#contact" onClick={this.handleOnClick}>Contact</Nav.Link>
      <span className="et-hero-tab-slider"></span>
      </div>
</Nav>
    
  </Navbar>
            </div>
        )
    }
}

export default MyNavbar
