
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavaSir1 from '../assets/NavaSir1.jpeg';
import NavaSir2 from '../assets/NavaSir2.jpeg';
import NavaSir3 from '../assets/NavaSir3.jpeg';
import NavaSir4 from '../assets/NavaSir4.jpeg';


const PlayoffTeams = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <div className="boxes" data-aos = "fade-up">
             
                <img src={NavaSir1}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-up">
         
                <img src={NavaSir2}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-up">
             
                <img src={NavaSir3}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade-up">
                
                <img src={NavaSir4}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            
        </div>
    );
};

export default PlayoffTeams;