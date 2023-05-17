import React, { useState } from "react";
import "./styles.css";

import axios from "axios";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [wind, setWind] = useState(null)
  const [description, setDescription] = useState(null)
  const [city, setCity] = useState('')


  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d45bf05f66307ef1483c9b1231dd4b44&units=metric`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(URL).then((res) => {
        setData(res.data), console.log(res.data);
      });
      axios.get(URL).then((res) => {
        setTemperature(res.data.main.temp);
        console.log(temperature);
      });
      axios.get(URL).then((res) => {
        setFeelsLike(res.data.main.feels_like);
        console.log(feelsLike);
      });
      axios.get(URL).then((res) => {
        setHumidity(res.data.main.humidity);
        console.log(humidity);
      });
      axios.get(URL).then((res) => {
        setWind(res.data.wind.speed);
        console.log(wind);
      });

      axios.get(URL).then((res) => {
        setDescription(res.data.weather[0].description);
        console.log(description);
      });
      axios.get(URL).then((res) => {
        setCity(res.data.name);
        console.log(city);
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
          <div className="location">{city}</div>
          <div className="temp">
            <h1>{temperature} °C</h1>
          </div>
          <div className="description">{description}</div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">{feelsLike} °C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">{humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{wind} MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
