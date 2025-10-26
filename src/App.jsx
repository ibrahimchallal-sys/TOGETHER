import { useState } from 'react';
import Navbar from './Comp/Navbar.jsx';
import AnimatedBackground from './Comp/AnimatedBackground.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div style={{ position: 'relative' }}>
        <div style={{ marginLeft: '-50vw', left: '50%', position: 'relative', width: '100vw' }}>
          <AnimatedBackground />
        </div>
      </div>
    </>
  );
}

export default App;