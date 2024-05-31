import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import NB from './components/NB';
import Home from './components/Home';
import { SR } from './components/SR';
import Events from './components/Event';
import Aboutus from './components/Aboutus';
import Services from './components/Book';
import Doctor_Details from './components/Doctor_Details';

// Keyframes for pulsating animation
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled component for the loading container
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // background-color: black; // Set the background color to black
`;

// Styled component for the loading image with size adjustment
const LoadingImage = styled.img`
  animation: ${pulse} 1.5s infinite;
  width: 400px;  // Set the desired width
  height: 400px; // Set the desired height
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the delay time as needed

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingContainer>
          <LoadingImage src={require("./Logo.png")} alt="Loading..." />
        </LoadingContainer>
      ) : (
        <div className="home">
          <BrowserRouter>
            <NB />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<SR />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Our_Doctors" element={<Doctor_Details />} />
              <Route path="/Aboutus" element={<Aboutus />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
