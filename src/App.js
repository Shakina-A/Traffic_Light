import React, { useState } from 'react';
import './App.css';
import TrafficLight from './TrafficLight';

function App() {
  const [light, setLight] = useState("");

  return (
    <div className="container">
      <h1>Traffic Light Controller</h1>
      
      <TrafficLight light={light} />

      <div className="buttons">
        <button onClick={() => setLight("red")} className="btn red">STOP</button>
        <button onClick={() => setLight("yellow")} className="btn yellow">WAIT</button>
        <button onClick={() => setLight("green")} className="btn green">GO</button>
      </div>
    </div>
  );
}

export default App;
