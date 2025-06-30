import React from 'react';
import './App.css';

function TrafficLight({ light }) {
  return (
    <div className="traffic-light">
      <div className={`light red-light ${light === "red" ? "on" : ""}`}></div>
      <div className={`light yellow-light ${light === "yellow" ? "on" : ""}`}></div>
      <div className={`light green-light ${light === "green" ? "on" : ""}`}></div>
    </div>
  );
}

export default TrafficLight;
