import React, { useState } from "react";
import FormatDate from "./FormatDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/fog.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <h2>
          <FormatDate date={weatherData.date}></FormatDate>
        </h2>
        <h6 className="text-capitalize">{weatherData.description}</h6>

        <div className="row">
          <div className="col-6">
            <div className="clearfix ">
              <img
                className="float-left mt-4"
                src={weatherData.iconUrl}
                alt={weatherData.description}
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:1%</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "9956c41def8fc21e1cc4d9b6ebba73d6";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Data Loading...";
  }
}
