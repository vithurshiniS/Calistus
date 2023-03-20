
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import victory1 from '../assets/victory1.jpeg';
import victory2 from '../assets/victory2.jpeg';
import victory3 from '../assets/victory3.jpeg';
import victory4 from '../assets/victory4.jpeg';
import victory5 from '../assets/victory5.jpeg';
import victory6 from '../assets/victory6.jpeg';
import victory7 from '../assets/victory7.jpeg';




const Victory = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
   
            <div className="boxes" data-aos = "fade-right">
           
                <img src={victory1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-left">
             
                <img src={victory2}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-right">
               
                <img src={victory3}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-left">
             
             <img src={victory4}  className="intro-image" />
         </div>
         <div className="boxes" data-aos = "fade-right">
            
             <img src={victory5}  className="intro-image" />
         </div>
         <div className="boxes" data-aos = "fade-left">
             
             <img src={victory6}  className="intro-image" />
         </div>
         <div className="boxes" data-aos = "fade-right">
            
             <img src={victory7}  className="intro-image" />
         </div>
            
            
        </div>
    );
};

export default Victory;
