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
      <h1>France</h1>
      <h2>Monday, April 29</h2>
      <h6>Partly Cloudy</h6>

      <div className="row">
        <div className="col-6">
          <div className="clearfix ">
            <img
              className="float-left mt-4"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
            />
            <div className="float-left">
              <span className="temperature">18</span>
              <span className="unit">°C</span>
            </div>
          </div>
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
