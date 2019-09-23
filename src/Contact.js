import React, { Component } from 'react'
import './static/About.css'
class Contact extends Component {
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
                <h3>Email Me</h3>
                <form action="#">
                    <p>
                        <label>Name</label>
                        <input type="text" name="name"/>
                    </p>
                    <p>
                        <label>Company</label>
                        <input type="text" name="company"/>
                    </p>
                    <p>
                        <label>Email Address</label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label>Phone Number</label>
                        <input type="text" name="phone"/>
                    </p>
                    <p className="full">
                        <button>Submit</button>
                    </p>
                </form>
            </div>
        </div>
    </div>
        )
    }
}

export default Contact
