import React, { Component } from 'react'
import Slider from './Slider'
class Mainpage extends Component {
    render() {
        return (
    <div className="et-main">
    <div className="et-slide" id="home">
      <h1>Home</h1>
      <h3>Loren Ipsum</h3>
      <Slider/>
    </div>
    </div>
        )
    }
}

export default Mainpage
