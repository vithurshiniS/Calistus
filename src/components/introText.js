import React from 'react';

const IntroText = (props) => {
  return (
    <div style={{ 
      width: '100%', 
      height: 'auto', 
    //    maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '10px',
      overflow:'hidden'
      
      
    }}>
      <p style={{ 
        fontSize: '1.5rem', 
        lineHeight: '1.5', 
        textAlign: 'center',
        padding: '10px'
      }}>
       {props.text}
      </p>
    </div>
  );
}

export default IntroText;