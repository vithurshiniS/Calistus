
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import e1 from '../assets/e1.jpg';
import e2 from '../assets/e2.jpg';



const Eliminator = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            {/* <h3>Eliminator between 16A and 19A</h3> */}
            <div className="boxes" data-aos = "fade">
            <div className='playoff'>
                    <p className='teamname'>Eliminator between 16A and 19A</p>
                </div>
                <img src={e1}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade">
      
                <img src={e2}  className="intro-image" />
            </div>
           
            
        </div>
    );
};

export default Eliminator;
