import React, { useState } from "react";
import "./styles.css";

import axios from "axios";

export default function App() {
  // const URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=d45bf05f66307ef1483c9b1231dd4b44'
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">London</div>
          <div className="temp">
            <h1>60 `C</h1>
          </div>
          <div className="description">Windy</div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">64 `C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
