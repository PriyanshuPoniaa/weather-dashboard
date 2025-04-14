import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import "./index.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`https://weather-dashboard-m465.onrender.com/weather?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      setError("Could not fetch weather data. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <div className="container">
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
        <h1>Real-Time Weather Dashboard</h1>
        <SearchBar onSearch={fetchWeather} />
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
