import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dis1 from '../assets/dis1.jpeg';
import dis2 from '../assets/dis2.jpeg';

export default class Disappointments extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
    
        <Slider {...settings}>
        <img src={dis1}  className="beforeMatch-image" />
          <img src={dis2}  className="beforeMatch-image" />
        </Slider>
      </div>
    );
  }
}