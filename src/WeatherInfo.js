import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <WeatherIcon code={props.data.icon} size={92} />

            <img className="float-left mt-4" src={props.data.iconUrl} alt="" />

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
