
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RoshanSir1 from '../assets/RoshanSir1.jpeg';
import RoshanSir2 from '../assets/RoshanSir2.jpeg';
import RoshanSir3 from '../assets/RoshanSir3.jpeg';



const RoshanSir = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
    
            <div className="boxes" data-aos = "fade">
           
                <img src={RoshanSir1}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade">
             
                <img src={RoshanSir2}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            <div className="boxes" data-aos = "fade">
               
                <img src={RoshanSir3}  className="intro-image" style={{ width: '100%', height: 'auto', padding: '20px', overflow:'hidden'}}/>
            </div>
            
            
        </div>
    );
};

export default RoshanSir;
