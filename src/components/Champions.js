
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CalistusChamp from '../assets/CalistusChamp.jpeg';
import CBFCChamp from '../assets/CBFCChamp.jpeg';
import SujeevanChamp from '../assets/SujeevanChamp.jpeg';
import BadmintonChamp from '../assets/BadmintonChamp.jpeg';


const Champions = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <div className="boxes" data-aos = "zoom-in">
                <img src={CalistusChamp}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
                <h2>Champions of the Calistus Memorial Cricket Trophy</h2>
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={CBFCChamp}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
                <h2>Champions of the Clash of Brotherhood Football Championship</h2>
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={SujeevanChamp}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
                <h2>Champions of the Sujeevan Memorial Volleyball Tournament</h2>
            </div>
            <div className="boxes" data-aos = "zoom-in">
                <img src={BadmintonChamp}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
                <h2>Champions of the Badminton Championship</h2>
            </div> 
        </div>
    );
};

export default Champions;
