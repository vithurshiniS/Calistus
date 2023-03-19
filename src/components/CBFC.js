
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fb1 from '../assets/fb1.jpeg';
import fb2 from '../assets/fb2.jpeg';
import fb3 from '../assets/fb3.jpeg';
import fb4 from '../assets/fb4.jpeg';
import fb5 from '../assets/fb5.jpeg';
import fb6 from '../assets/fb6.jpeg';
import fb7 from '../assets/fb7.jpeg';
import fb8 from '../assets/fb8.jpeg';
import fb9 from '../assets/fb9.jpeg';



const CBFC = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <div className="boxes" data-aos = "fade-right">
                <img src={fb1}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-left">
                <img src={fb2}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-right">
                <img src={fb3}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-left">
                <img src={fb4}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-right">
                <img src={fb5}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-left">
                <img src={fb6}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-right">
                <img src={fb7}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-left">
                <img src={fb8}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-right">
                <img src={fb9}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            
            
        </div>
    );
};

export default CBFC;
