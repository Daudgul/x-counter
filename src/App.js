import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// const API_KEY = "xyz"; // Replace with your actual API key
const API_KEY = "17361a68e9c642538da83356243011";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      setWeatherData(response.data.current);
    } catch (error) {
      alert("Failed to fetch weather data");
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather Application</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>
      {loading && <p>Loading data...</p>}
      {error && <p>{error}</p>}
      {weatherData && !loading && !error && (
        <div className="weather-cards">
          <div className="weather-card">
            <p>Temperature: {weatherData.temp_c} °C</p>
          </div>
          <div className="weather-card">
            <p>Humidity: {weatherData.humidity}%</p>
          </div>
          <div className="weather-card">
            <p>Condition: {weatherData.condition.text}</p>
          </div>
          <div className="weather-card">
            <p>Wind Speed: {weatherData.wind_kph} kph</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
