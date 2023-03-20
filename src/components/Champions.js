
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
            <div className="champmainboxes" data-aos = "zoom-in">
                <img src={CalistusChamp}  className="intro-image" />
                <div className='championbox'>
                    <p className='championname'>Champions of the Calistus Memorial Cricket Trophy</p>
                </div>
                {/* <h2>Champions of the Calistus Memorial Cricket Trophy</h2> */}
            </div>
            <div className="champmainboxes" data-aos = "zoom-in">
                <img src={CBFCChamp}  className="intro-image" />
                <div className='championbox'>
                    <p className='championname'>Champions of the Clash of Brotherhood Football Championship</p>
                </div>
                {/* <h2>Champions of the Clash of Brotherhood Football Championship</h2> */}
            </div>
            <div className="champmainboxes" data-aos = "zoom-in">
                <img src={SujeevanChamp}  className="intro-image" />
                <div className='championbox'>
                    <p className='championname'>Champions of the Sujeevan Memorial Volleyball Tournament</p>
                </div>
                {/* <h2>Champions of the Sujeevan Memorial Volleyball Tournament</h2> */}
            </div>
            <div className="champmainboxes" data-aos = "zoom-in" >
                <img src={BadmintonChamp}  className="intro-image"/>
                <div className='championbox'>
                    <p className='championname'>Champions of the Badminton Championship</p>
                </div>
                {/* <h2>Champions of the Badminton Championship</h2> */}
            </div> 
        </div>
    );
};

export default Champions;
