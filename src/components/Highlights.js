
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Highlights1 from '../assets/Highlights1.jpg';
import Highlights2 from '../assets/Highlights2.jpeg';
import Highlights3 from '../assets/Highlights3.jpeg';
import Highlights4 from '../assets/Highlights4.jpeg';
import Highlights5 from '../assets/Highlights5.jpeg';
import Highlights6 from '../assets/Highlights6.jpeg';
import Highlights7 from '../assets/Highlights7.jpeg';
import Highlights8 from '../assets/Highlights8.jpg';
import Highlights9 from '../assets/Highlights9.jpeg';
import Highlights10 from '../assets/Highlights10.jpeg';
import Highlights11 from '../assets/Highlights11.jpeg';
import Highlights12 from '../assets/Highlights12.jpeg';
import Highlights13 from '../assets/Highlights13.jpeg';




const Highlights = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights2}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights3}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights4}  className="intro-image"/>
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights5}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights6}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights7}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights8}  className="intro-image"/>
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights9}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights10}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights11}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights12}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={Highlights13}  className="intro-image" />
            </div>
           
            
            
        </div>
    );
};

export default Highlights;
