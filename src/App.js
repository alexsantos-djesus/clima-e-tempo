import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import "./index.css";

const App = () => {
  const [city, setCity] = useState(() => localStorage.getItem("lastCity") || "");
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode")) === true);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Função para buscar a previsão do tempo
  const fetchWeatherData = () => {
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

    // Atualiza o horário da última atualização
    setLastUpdate(new Date().toLocaleString());
    return weatherData;
  };

  // Estado para armazenar os dados do clima
  const [weatherData, setWeatherData] = useState(fetchWeatherData);

  // Atualiza os dados automaticamente a cada 10 minutos (600000 ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setWeatherData(fetchWeatherData());
    }, 600000);  // Atualização a cada 10 minutos

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, [city]);

  // Efeito para atualizar a cidade no localStorage
  useEffect(() => {
    localStorage.setItem("lastCity", city);
  }, [city]);

  // Efeito para atualizar o modo escuro no localStorage
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

      {/* Mostrar Weather quando cidade estiver preenchida */}
      {city && <Weather city={city} weatherData={weatherData} />}

      {/* Hora da última atualização */}
      {lastUpdate && (
        <div className="last-update">
          <p>Última atualização: {lastUpdate}</p>
        </div>
      )}
    </div>
  );
};

export default App;
