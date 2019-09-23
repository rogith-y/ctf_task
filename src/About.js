import React, { Component } from 'react'
import './static/About.css'
class About extends Component {
    render() {
        return (
            <div className="container">
            <div className="section animated bounceInLeft">
                <div className="brandname">
                    <h3>CEG Tech Forum</h3>
                    <img src="/4.jpg" height="200" width="300" style={{borderRadius:"50px"}}></img>
                </div>
                <div className="contact">
                    <h2>About Us</h2>
                    <br/>
                    <form action="#">
                        <p>
                            <label><b>Us</b>
                            </label>
                            First, we invented the best system for learning to code.
Seven years and 45 million learners later, we've perfected it.
                        </p>
                        <p>
                            <label><b>Our Company</b></label>
                            Elearn is a web developers site, with tutorials and references on web development languages such as HTML, CSS, JavaScript, PHP, SQL, Python, jQuery, Java, W3.CSS, and Bootstrap, covering most aspects of web programming.
The site derives its name from Latin.
                        </p>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default About
