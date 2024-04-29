import React from "react";
import "./Weather.css";

export default function weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city..."
            />
          </div>
          <div className="col-3">
            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
        </div>
      </form>
      <h1>France</h1>
      <h2>Monday, April 29</h2>
      <div className="row">
        <div className="col-6">
          <h6>Partly Cloudy</h6>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />
          18°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:1%</li>
            <li>Humidity:47%</li>
            <li>Wind:11km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
