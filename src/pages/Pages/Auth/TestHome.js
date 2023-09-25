import React from 'react';

function TestHome() {
  const containerStyle = {
    backgroundColor: 'white',
    color: '#244a59',
    padding: '20px',
    textAlign: 'center',
    height: '70vh'
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    margin: '20px 0',
  };

  const randomSVGUrl = 'https://example.com/random.svg'; // Replace with the actual SVG URL

  return (
    <div style={containerStyle}>
      <h2 className='text-dark' style={{fontFamily: 'impact', color: "#244a59"}}>Welcome to JobsInGhana</h2>
      <p className='mt-5'>Please check your mail for further instructions.</p>
    
    </div>
  );
}

export default TestHome;
