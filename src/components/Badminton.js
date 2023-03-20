
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Badminton1 from '../assets/Badminton1.jpeg';
import Badminton2 from '../assets/Badminton2.jpeg';
import Badminton3 from '../assets/Badminton3.jpeg';
import Badminton4 from '../assets/Badminton4.jpeg';
import Badminton5 from '../assets/Badminton5.jpeg';
import Badminton6 from '../assets/Badminton6.jpeg';
import Badminton7 from '../assets/Badminton7.jpeg';
import Badminton8 from '../assets/Badminton8.jpeg';



const Badminton = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <div className="boxes" data-aos = "fade-right">   
                <img src={Badminton1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-left">  
                <img src={Badminton2}  className="intro-image"/>
            </div>
            <div className="boxes" data-aos = "fade-right">  
                <img src={Badminton3}  className="intro-image"/>
            </div>
            <div className="boxes" data-aos = "fade-left">  
                <img src={Badminton4}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-right">  
                <img src={Badminton5}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-left">  
                <img src={Badminton6}  className="intro-image"/>
            </div>
            <div className="boxes" data-aos = "fade-right">  
                <img src={Badminton7}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-left">  
                <img src={Badminton8}  className="intro-image" />
            </div>
            
            
        </div>
    );
};

export default Badminton;
