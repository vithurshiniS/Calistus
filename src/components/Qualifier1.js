
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import q11 from '../assets/q11.jpeg';
import q12 from '../assets/q12.jpeg';
import q13 from '../assets/q13.jpeg';



const Qualifier1 = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <h3>Qualifier 1 between 17A and 18A</h3>
            <div className="boxes" data-aos = "fade">
           
                <img src={q11}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={q12}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade">
               
                <img src={q13}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            
            
        </div>
    );
};

export default Qualifier1;