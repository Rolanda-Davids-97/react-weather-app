import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "9956c41def8fc21e1cc4d9b6ebba73d6";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu </div>
          <WeatherIcon code="01d" size={50} />
          <div className="WeatherForceast-temperature">
            <span className="WeatherForecast-temperature-max"> 19°</span>
            <span className="WeatherForescast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
