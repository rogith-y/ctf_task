import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
class Slider extends Component {
    render(){
        return (
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Evolve</h3>
                <p>Evolve your Ideas.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/2.jpg"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Choose</h3>
                <p>Choose what to study</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/3.jpg"
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Learn</h3>
                <p>
                  Learn how to make your idea come true.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
        }
}

export default Slider
