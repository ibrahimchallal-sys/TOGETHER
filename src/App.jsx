import { useState } from 'react';
import Navbar from './Comp/Navbar.jsx';
import AnimatedBackground from './Comp/AnimatedBackground.jsx';
import PopularServices from './Comp/PopularServices.jsx';
import Whysec from './Comp/Whysec.jsx';
import CTASection from './Comp/CTASection.jsx';
import Footer from './Comp/Footer.jsx';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', width: '100%' }}>
        <section id="home">
          <AnimatedBackground />
        </section>
        <section id="services">
          <PopularServices />
        </section>
        <section id="features">
          <Whysec />
        </section>
        <section id="cta">
          <CTASection />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;