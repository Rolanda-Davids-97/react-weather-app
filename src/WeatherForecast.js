import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    let apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (!loaded) {
    return null; // Return null or loading indicator while data is being fetched
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast[0]} />
        </div>
      </div>
    </div>
  );
}
