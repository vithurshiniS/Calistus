import bm1 from '../assets/bm1.jpeg';
import bm2 from '../assets/bm2.jpeg';
import bm3 from '../assets/bm3.jpeg';
import bm4 from '../assets/bm4.jpeg';
import bm5 from '../assets/bm5.jpeg';
import bm6 from '../assets/bm6.jpeg';
import bm7 from '../assets/bm7.jpeg';
import bm8 from '../assets/bm8.jpeg';

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
           
                <img src={bm1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={bm2}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
           
                <img src={bm3}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={bm4}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
           
                <img src={bm5}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={bm6}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
           
                <img src={bm7}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={bm8}  className="intro-image" />
            </div>
          
            
            
        </div>
    );
};

export default Matchbefore;