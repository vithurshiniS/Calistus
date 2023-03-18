import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bm1 from '../assets/bm1.jpeg';
import bm2 from '../assets/bm2.jpeg';
import bm3 from '../assets/bm3.jpeg';
import bm4 from '../assets/bm4.jpeg';
import bm5 from '../assets/bm5.jpeg';
import bm6 from '../assets/bm6.jpeg';
import bm7 from '../assets/bm7.jpeg';
import bm8 from '../assets/bm8.jpeg';





export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
  
          <img src={bm1}  className="beforeMatch-image" />
          <img src={bm2}  className="beforeMatch-image" />
          <img src={bm3}  className="beforeMatch-image"/>
          <img src={bm4}  className="beforeMatch-image" />
          <img src={bm5}  className="beforeMatch-image" />
          <img src={bm6}  className="beforeMatch-image" />
          <img src={bm7}  className="beforeMatch-image"/>
          <img src={bm8}  className="beforeMatch-image" />
     

          
      
          
        </Slider>
      </div>
    );
  }
}

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }