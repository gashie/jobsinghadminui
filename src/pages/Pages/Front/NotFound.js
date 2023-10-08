import React from 'react';

const NotFound= () => {
  const notFoundStyle = {
    backgroundColor: 'white',
  
    textAlign: 'center',
    padding: '20px',
    height: '100vh',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginTop: '10rem',
    color: '#244a59'
  };

  const paragraphStyle = {
    fontSize: '0.8rem',
    
  };

  return (
    <div style={notFoundStyle}>
      <h1 style={headingStyle}>404 - Not Found</h1>
      <p style={paragraphStyle} className='text-dark'>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
