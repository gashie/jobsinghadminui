import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {
  const loadingContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const spinnerStyle = {
    width: '3rem', // Adjust the size as needed
    height: '3rem',
    marginBottom: '10px', // Add some space below the spinner
    color: '#244a59'
  };

  const textStyle = {
    fontSize: '1.5rem',
    marginTop: '10px',
    color: '#244a59'
  };

  return (
    <div style={loadingContainerStyle}>
      <Spinner style={spinnerStyle} />
      <p style={textStyle}>Loading...</p>
    </div>
  );
};

export default Loading;
