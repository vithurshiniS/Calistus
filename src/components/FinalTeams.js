
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ft1 from '../assets/ft1.jpeg';
import ft2 from '../assets/ft2.jpeg';



const FinalTeams = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
           
            <div className="boxes" data-aos = "zoom-in">
             
                <img src={ft1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
      
                <img src={ft2}  className="intro-image" />
            </div>
           
            
        </div>
    );
};

export default FinalTeams;
