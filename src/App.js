import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        <p>
          <small>
            {" "}
            This project was coded by Rolanda Davids,
            <a
              href="https://github.com/Rolanda-Davids-97/weather-react"
              target="-blank"
            >
              Open-source code on GitHub
            </a>
          </small>
        </p>
      </footer>
    </div>
  );
}
