import React, { useState, useEffect, useCallback } from "react";
import Weather from "./Weather";
import "./index.css";

const App = () => {
  const [city, setCity] = useState(() => localStorage.getItem("lastCity") || "");
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode")) === true);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Função para buscar a previsão do tempo (memorizar com useCallback)
  const fetchWeatherData = useCallback(() => {
    const weatherData = {
      city: city || "São Paulo",
      temperature: "25°C",
      condition: "Ensolarado",
      forecast: [
        { day: "Segunda", temperature: "28°C", condition: "Ensolarado" },
        { day: "Terça", temperature: "27°C", condition: "Parcialmente nublado" },
        { day: "Quarta", temperature: "26°C", condition: "Chuva leve" }
      ]
    };

    setLastUpdate(new Date().toLocaleString());
    return weatherData;
  }, [city]);  // city como dependência

  // Estado para armazenar os dados do clima
  const [weatherData, setWeatherData] = useState(fetchWeatherData);

  // Atualiza os dados automaticamente a cada 10 minutos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setWeatherData(fetchWeatherData());
    }, 600000);

    return () => clearInterval(intervalId);
  }, [fetchWeatherData]);  // Agora está usando fetchWeatherData como dependência

  // Atualizar cidade no localStorage
  useEffect(() => {
    localStorage.setItem("lastCity", city);
  }, [city]);

  // Atualizar modo escuro no localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`container ${darkMode ? "dark" : ""}`} style={{ minHeight: "100vh" }}>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-theme">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Previsão do Tempo</h1>
      <input
        type="text"
        placeholder="Digite a cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {city && <Weather city={city} weatherData={weatherData} />}

      {lastUpdate && (
        <div className="last-update">
          <p>Última atualização: {lastUpdate}</p>
        </div>
      )}
    </div>
  );
};

export default App;
