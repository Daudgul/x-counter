import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
const API_KEY = "17361a68e9c642538da83356243011";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch weather data based on city
  const fetchWeather = async () => {
    if (!city) return; // Prevent search if city input is empty

    setLoading(true); // Show loading message
    setError(null); // Reset any previous errors

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      setWeatherData(response.data.current); // Set the weather data from API response
      console.log(response.data);
    } catch (error) {
      alert("Failed to fetch weather data");
      setError("Failed to fetch weather data"); // Show error if data fetch fails
    } finally {
      setLoading(false); // Hide loading message after fetching data
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather Application</h1>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update city name on change
      />
      <button onClick={fetchWeather}>Search</button>{" "}
      {/* Trigger fetchWeather on click */}
      {/* Loading message */}
      {loading && <p>Loading data...</p>}
      {/* Error message */}
      {error && <p>{error}</p>}
      {/* Display weather data if available */}
      {weatherData && !loading && !error && (
        <div className="weather-cards">
          <div className="weather-card">
            <p>Temperature: {weatherData.temp_c} °C</p>
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Condition: {weatherData.condition.text}</p>
            <p>Wind Speed: {weatherData.wind_kph} kph</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
