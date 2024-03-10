import { useState, useEffect } from 'react';
import offbulb from './image/offbulb.png';
import onnbulb from './image/onnbulb.png';
import './App.css';

function App() {
  const [toggle, setBulb] = useState(false);
  const [initialTime, setInitialTime] = useState(null);
  const [finalTime, setFinalTime] = useState(null);
  const [onTime, setOnTime] = useState(0);

  const toggleBulb = () => {
    const currentTime = new Date();
    if (!toggle) {
      setInitialTime(currentTime);
    } else {
      setFinalTime(currentTime);
      if (initialTime) {
        const duration = Math.round((currentTime - initialTime) / 1000);
        setOnTime(duration);
      }
    }
    setBulb(!toggle);
  };

  useEffect(() => {
    return () => {
      setInitialTime(null);
      setFinalTime(null);
    };
  }, []);

  return (
    <>
      <div className="bulb">
        <img src={toggle ? onnbulb : offbulb} alt="bulb" />
        <br /> <br />
        <button onClick={toggleBulb}>Switch</button>
      </div>
      <div>
        <p>Initial time the bulb is on: {initialTime ? initialTime.toLocaleTimeString() : 'N/A'}</p>
        <p>Final time the bulb is on: {finalTime ? finalTime.toLocaleTimeString() : 'N/A'}</p>
        <p>Total time the bulb is on: {onTime} seconds</p>
      </div>
    </>
  );
}

export default App;
