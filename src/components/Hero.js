import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import com1 from './../assets/company1.jpg';
import com2 from './../assets/company2.jpg';
import com3 from './../assets/company4.jpg';
import './imgg.css';

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carousel-image"
          src={com1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>BuildFast</h3>
          <p>Ayo bangun softwaremu dengan cepat, aman, dan terjangkau!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel-image"
          src={com2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={com3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
