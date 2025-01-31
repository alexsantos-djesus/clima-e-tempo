import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import "./index.css";

const App = () => {
  const [city, setCity] = useState(() => localStorage.getItem("lastCity") || "");
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode")) || false);
  const [forecast, setForecast] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(() => localStorage.getItem("lastUpdated") || null);

  useEffect(() => {
    localStorage.setItem("lastCity", city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (city) {
      fetchForecast();
    }
  }, [city]);

  const fetchForecast = async () => {
    try {
      const API_KEY = "S069b1cccd7eb4d7c9930af1b867cdb2f";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`
      );
      const data = await response.json();
      setForecast(data.list.slice(0, 5)); // Pega apenas os próximos 5 dias
      
      // Captura a hora atual da atualização
      const updatedTime = new Date().toLocaleString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      setLastUpdated(updatedTime);
      localStorage.setItem("lastUpdated", updatedTime);
    } catch (err) {
      setForecast(null);
    }
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-theme">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Previsão de Clima</h1>
      <input
        type="text"
        placeholder="Digite a cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Weather city={city} />
      {forecast && (
        <div className="forecast-container">
          <h3>Previsão para os próximos dias</h3>
          {forecast.map((day, index) => (
            <div key={index} className="forecast-day">
              <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
              <p>🌡 {day.main.temp}°C</p>
              <p>{day.weather[0].description}</p>
            </div>
          ))}
          {lastUpdated && <p className="update-time">Última atualização: {lastUpdated}</p>}
        </div>
      )}
    </div>
  );
};

export default App;
