import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "069b1cccd7eb4d7c9930af1b867cdb2f"; // Substitua pela sua chave da OpenWeather

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return; // Se a cidade não for fornecida, não faz a requisição

    const fetchWeather = async () => {
      try {
        // Adicionando o parâmetro `lang=pt` para traduzir a descrição do clima
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt`
        );
        setWeather(response.data);
        setError(null);
      } catch (err) {
        setWeather(null);
        setError("Cidade não encontrada!");
      }
    };

    fetchWeather();
  }, [city]); // O efeito será executado sempre que a cidade mudar

  return (
    <div className="weather-container">
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className={`weather-card ${weather.weather[0].main.toLowerCase()}`}>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].description}</p>
          <p>🌡 Temperatura: {weather.main.temp}°C</p>
          <p>💧 Umidade: {weather.main.humidity}%</p>
          <p>🌬️ Vento: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
