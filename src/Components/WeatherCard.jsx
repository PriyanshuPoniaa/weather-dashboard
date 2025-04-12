import React from "react";
import "../index.css"; 

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <img src={weather.icon} alt="Weather Icon" className="weather-icon" />
      <p className="weather-condition">{weather.condition}</p>
      <p className="weather-temperature">Temp: {weather.temperature}°C</p>
      <p className="weather-humidity">Humidity: {weather.humidity}%</p>
      <p className="weather-wind">Wind: {weather.windSpeed} m/s</p>
    </div>
  );
}

export default WeatherCard;
