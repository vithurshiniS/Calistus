
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import vb1 from '../assets/vb1.jpeg';
import vb2 from '../assets/vb2.jpeg';
import vb3 from '../assets/vb3.jpeg';
import vb4 from '../assets/vb4.jpeg';
import vb5 from '../assets/vb5.jpeg';
import vb6 from '../assets/vb6.jpeg';



const Sujeevan = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <div className="boxes" data-aos = "fade-right">
                <img src={vb1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-left">
                <img src={vb2}  className="intro-image"/>
            </div>
            <div className="boxes" data-aos = "fade-right">
                <img src={vb3}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-left">
                <img src={vb4}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-right">
                <img src={vb5}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-left">
                <img src={vb6}  className="intro-image" />
            </div>
            
            
        </div>
    );
};

export default Sujeevan;
