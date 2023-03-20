
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Team16A from '../assets/team16a.jpeg';
import Team17A from '../assets/team17a.jpeg';
import Team18A from '../assets/team18a.jpeg';
import Team19A from '../assets/team19a.jpeg';


const PlayoffTeams = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    }, []);
    return (
        <div className="grids">
            <div className="boxes" data-aos = "fade-right">
                {/* <h3>Team 16A</h3> */}
                <div className='teamnamebox'>
                    <p className='teamname'>Team 16A</p>
                </div>
                <img src={Team16A}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-left">
                {/* <h3>Team 17A</h3> */}
                <div className='teamnamebox'>
                    <p className='teamname'>Team 17A</p>
                </div>
                <img src={Team17A}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-right">
                {/* <h3>Team 18A</h3> */}
                <div className='teamnamebox'>
                    <p className='teamname'>Team 18A</p>
                </div>
                <img src={Team18A}  className="intro-image" />
            </div>
            <div className="boxes" data-aos = "fade-left">
                {/* <h3>Team 19A</h3> */}
                <div className='teamnamebox'>
                    <p className='teamname'>Team 19A</p>
                </div>
                <img src={Team19A}  className="intro-image" />
            </div>
            
        </div>
    );
};

export default PlayoffTeams;
