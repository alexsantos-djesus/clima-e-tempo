import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "069b1cccd7eb4d7c9930af1b867cdb2f";  // Sua chave de API

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`
        );
        setWeather(response.data);
        setError(null);
      } catch (err) {
        setError("Cidade não encontrada!");
      }
    };

    const fetchForecast = async () => {
      if (!city) return;
      
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`
        );
        const threeDaysForecast = response.data.list.filter((item, index) => index % 8 === 0).slice(0, 4);  // Limita a 4 dias
        setForecast(threeDaysForecast);
      } catch (err) {
        setForecast(null);
      }
    };

    fetchWeather();
    fetchForecast();
  }, [city]);

  return (
    <div className="weather-container">
      {/* Exibe mensagem de erro, se houver */}
      {error && <p className="error">{error}</p>}

      {/* Exibe o clima atual */}
      {weather && (
        <div className={`weather-card ${weather.weather[0].main.toLowerCase()}`}>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>{weather.weather[0].description}</p>
          <p>🌡 Temperatura: {weather.main.temp}°C</p>
          <p>💧 Umidade: {weather.main.humidity}%</p>
          <p>🌬️ Vento: {weather.wind.speed} m/s</p>
        </div>
      )}

      {/* Exibe a previsão dos próximos dias */}
      {forecast && (
        <div className="forecast-container">
          <h3>Previsão para os próximos dias</h3>
          {forecast.map((day, index) => (
            <div key={index} className="forecast-day">
              <p>{new Date(day.dt * 1000).toLocaleDateString("pt-BR", {
                weekday: 'long', day: 'numeric', month: 'long'
              })}</p>
              <p>🌡 {day.main.temp}°C</p>
              <p>{day.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
