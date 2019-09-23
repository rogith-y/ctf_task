import React, { Component } from 'react'
import './static/About.css'
class About extends Component {
    render() {
        return (
            <div className="container">
            <div className="section animated bounceInLeft">
                <div className="brandname">
                    <h3>CEG Tech Forum</h3>
                    <ul>
                        <li> +91 1234567890</li>
                        <li>contact@ctf.com</li>
                        <li>www.cegtechforum.com</li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>About Us</h2>
                    <br/><br/><br/><br/><br/>
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
W3Schools was originally created in 1998 by Refsnes Data, a Norwegian software development and consulting company.
                        </p>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default About
