import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
      </div>
      <footer>
        <small>
          <a
            href="https://github.com/Rolanda-Davids-97/weather-react"
            target="-blank"
          >
            Open-source code
          </a>
          , by Rolanda Davids{" "}
        </small>
      </footer>
    </div>
  );
}
