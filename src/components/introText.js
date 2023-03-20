import React from 'react';

const IntroText = (props) => {
  return (
    <div style={{ 
      // width: '100%', 
      height: 'auto', 
    //    maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '1px', 
      // border: '1px solid #ccc', 
      // borderRadius: '10px',
      overflow:'hidden'
      
      
    }}>
      <p className='wholetext' style={{ 
        fontSize: '1.2rem', 
        lineHeight: '1.5', 
        textAlign: 'center',
        padding: '10px'
        
        
      }}>
       {props.text }<b>{props.bold}</b>
       <a href={props.link}>{props.linkname}</a>
       {props.text2}
      </p>
      
    </div>
  );
}

export default IntroText;