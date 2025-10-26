import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Comp/Navbar.jsx';
import AnimatedBackground from './Comp/AnimatedBackground.jsx';
import Whysec from './Comp/Whysec.jsx';
import PopularServices from './Comp/PopularServices.jsx';
import CTASection from './Comp/CTASection.jsx';
import Footer from './Comp/Footer.jsx';
import Services from './Comp/Services.jsx';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div style={{ position: 'relative' }}>
            <div style={{ marginLeft: '-50vw', left: '50%', position: 'relative', width: '100vw' }}>
              <AnimatedBackground />
            </div>
            <div style={{ 
              width: '100%',
              
            }}>
              <Whysec />
            </div>
            <div style={{ 
              width: '100%',
              
            }}>
              <PopularServices />
            </div>
            <div style={{ 
              width: '100%',
              
            }}>
              <CTASection />
            </div>
            <Footer />
          </div>
        } />
        <Route path="/services" element={
          <div>
            <Services />
            <Footer />
          </div>
        } />
        <Route path="/features" element={
          <div style={{ marginTop: '70px', padding: '20px' }}>
            <h1>Features</h1>
            <p>This is the features page.</p>
          </div>
        } />
        <Route path="/contact" element={
          <div style={{ marginTop: '70px', padding: '20px' }}>
            <h1>Contact Us</h1>
            <p>This is the contact page.</p>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;