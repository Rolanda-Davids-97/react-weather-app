import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <h2>
        <FormatDate date={props.data.date}></FormatDate>
      </h2>
      <h6 className="text-capitalize">{props.data.description}</h6>

      <div className="row">
        <div className="col-6">
          <div className="clearfix ">
            <WeatherIcon code={props.data.icon} size={80} />

            <img className="float-left mt-4" src={props.data.iconUrl} />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:1%</li>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
