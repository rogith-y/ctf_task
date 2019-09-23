import React, { Component } from 'react'
import './static/About.css'
class Blog extends Component {
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
                    <h3>Blog</h3>
                 
                        <p>
                            <label><b>Web Design Agency: </b></label> &nbsp;
                            Today, the world has become s global village. 
                            Thanks to the advancement in the Information Technology field. Due to such a revolution, the businesses are transacting business with the rest of the world. The distance has been virtually eliminated due to modern communication technologies.
                             In the Internet world, web design...<a href="#">Read More</a>
                        </p>
                        <p>
                            <label><b>Blogger Custom Domain:</b></label>&nbsp;
                            Due to the rapid rise in the website design & development sector, a large population of the world is joining this field. Every day, a lot of websites and blogs are created. Creating a website is a somehow tedious task.
                             However, blogs are easy to create due to the availability of ready made blogging platforms such...
                             <a href="#">Read More</a></p>
                        <p>
                            <label><b>Adhar Based Payment System:</b></label>&nbsp;
                            Every business transaction is carried out via money transfer from the buyer to the seller. Goods are transferred on the spot, before or after the transactions. Normally, big transactions are done via cheques, pay order or demand draft.
                            However, small businesses transact in cash and as a result, they do not believe in...
                            <a href="#">Read More</a>
                        </p>
                        <p>
                            <label><b>Adhar Mobile Number Update:</b></label>&nbsp;
                            Aadhar is an important national identity card in India and its importance cannot be ignored at any cost. If you have aadhar, you are a citizen of India that is why people give this document a lot of importance.
                             Keeping in view the importance of this document, the Government of India has set up UIDAI (Unique Identification...
                            <a href="#">Read More</a>
                            </p>
                   
                </div>
            </div>
        </div>
        )
    }
}

export default Blog
