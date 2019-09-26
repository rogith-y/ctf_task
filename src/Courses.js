import React, { Component } from 'react'
import './static/Glitch.css'
class Courses extends Component {
    render() {
        return (
            <div className="container">
        <div className="section animated bounceInLeft">
            <div className="brandname">
                <h3>Contact for Help</h3>
                <ul>
                    <li> +91 1234567890</li>
                    <li>contact@ctf.com</li>
                    <li>www.cegtechforum.com</li>
                </ul>
            </div>
            <div className="contact">
                <div className="glitch" data-text="Courses">Courses</div>
                <form action="#">
                    <p>
                        <label><b>Python</b></label>
                        Learn Python fundamentals, one of the hottest and fastest growing programming languages. 
                        This is a great introduction to the world of code
                    </p>
                    <p>
                        <label><b>Web Development</b></label>
                        Master the languages of the web: HTML, CSS, and JavaScript. 
                        This path will prepare you to build basic websites and then build interactive web apps.
                    </p>
                    <p>
                        <label><b>Data Science</b></label>
                        Learn SQL and Python and build the skills you need to analyze data.
                         Great for anyone trying to use code to be more data-driven.
                    </p>
                    <p>
                        <label><b>Rails</b></label>
                        The Ruby on Rails course teaches you how to develop custom web applications with the popular Ruby on Rails web framework. 
                        Since its launch in 2010, the Ruby on Rails Tutorial has been the leading introduction to web development with Rails.


                    </p>
                </form>
            </div>
        </div>
    </div>
        )
    }
}

export default Courses
