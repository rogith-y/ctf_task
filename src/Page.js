import React, { Component } from 'react'

class Page extends Component {
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
                    <h3>Page</h3>
                    <form action="#">
                        <p>
                            <label><b>heading 1</b></label>
                        </p>
                        <p>
                            <label><b>heading 2</b></label>
                        </p>
                        <p>
                            <label><b>heading 3</b></label>
                        </p>
                        <p>
                            <label><b>heading 4</b></label>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Page
