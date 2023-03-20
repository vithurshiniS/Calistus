// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import dis1 from '../assets/dis1.jpeg';
import dis2 from '../assets/dis2.jpeg';
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Disappointments = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
         
            <div className="boxes" data-aos = "fade">
           
                <img src={dis1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={dis2}  className="intro-image" />
            </div>
          
            
            
        </div>
    );
};

export default Disappointments;