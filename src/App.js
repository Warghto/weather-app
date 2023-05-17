import React, { useState } from "react";
import "./styles.css";

import axios from "axios";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState(null);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d45bf05f66307ef1483c9b1231dd4b44`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(URL).then((res) => {
        setData(res.data), console.log(res.data);
      });
      axios.get(URL).then((res) => {
        setTemperature(res.data.main.temp);
        console.log(temperature);
      });
    }
  };
  console.log(location);
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="search">
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder={"Enter City..."}
              type="text"
            />
          </div>
          <div className="location">London</div>
          <div className="temp">
            <h1>{temperature}</h1>
          </div>
          <div className="description">Windy</div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">64 °C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
