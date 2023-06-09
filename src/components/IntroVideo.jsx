import React from 'react'
import CalistusVideo from '../assets/CalistusVideo.mp4'

const IntroVideo = () =>{
    return(
        <div className='introvideo' style={{overflow:'hidden'}}>
            {/* <div className="overlay"></div> */}
            <video src= {CalistusVideo} autoPlay loop muted></video>
            
            <div className="content">
                <h1 className='titletext'>Calistus Trophy</h1>
                <p>A decade down, forever to go!</p>
            </div>
        </div>
    )
}

export default IntroVideo