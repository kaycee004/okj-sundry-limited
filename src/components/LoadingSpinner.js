// src/components/LoadingSpinner.js
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '400px' }}>
      <Spinner 
        animation="border" 
        role="status" 
        style={{ width: '4rem', height: '4rem', borderWidth: '0.25em', color: '#0a192f' }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      {message && <p className="mt-3 fs-5 text-muted">{message}</p>}
    </Container>
  );
};

export default LoadingSpinner;