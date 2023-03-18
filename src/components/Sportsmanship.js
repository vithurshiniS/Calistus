
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sportsmanship1 from '../assets/sports1.jpeg';
import sportsmanship2 from '../assets/sports2.jpeg';




const Sportsmanship = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
      
            <div className="boxes" data-aos = "fade-right">
           
                <img src={sportsmanship1}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-left">
             
                <img src={sportsmanship2}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
          
            
        </div>
    );
};

export default Sportsmanship;
