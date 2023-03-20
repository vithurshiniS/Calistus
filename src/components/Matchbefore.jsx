import BM1 from '../assets/BM1.jpeg';
import BM2 from '../assets/BM2.jpeg';
import BM3 from '../assets/BM3.jpeg';
import BM4 from '../assets/BM4.jpeg';
import BM5 from '../assets/BM5.jpeg';
import BM6 from '../assets/BM6.jpeg';
import BM7 from '../assets/BM7.jpeg';
import BM8 from '../assets/BM8.jpeg';
import BM9 from '../assets/BM9.jpeg';
import BM10 from '../assets/BM10.jpeg';
import BM11 from '../assets/BM11.jpeg';
import BM12 from '../assets/BM12.jpeg';

import dis1 from '../assets/dis1.jpeg';
import dis2 from '../assets/dis2.jpeg';
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Matchbefore = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
         
        
            <div className="boxes" data-aos = "fade">
             
                <img src={BM1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
           
                <img src={BM2}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={BM3}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={BM4}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
           
                <img src={BM5}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={BM6}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
           
                <img src={BM7}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={BM8}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
           
           <img src={BM9}  className="intro-image" />
       </div>
       <div className="boxes" data-aos = "fade">
        
           <img src={BM10}  className="intro-image" />
       </div>
       <div className="boxes" data-aos = "fade">
      
           <img src={BM11}  className="intro-image" />
       </div>
       <div className="boxes" data-aos = "fade">
        
           <img src={BM12}  className="intro-image" />
       </div>
          
            
            
        </div>
    );
};

export default Matchbefore;