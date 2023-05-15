import React, { useState } from "react";
import "./styles.css";

import axios from "axios";

export default function App() {
  // const URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=d45bf05f66307ef1483c9b1231dd4b44'
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">London</div>
          <div className="temp">60 `C</div>
          <div className="description">Windy</div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}
