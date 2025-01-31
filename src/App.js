import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import "./index.css";

const App = () => {
  const [city, setCity] = useState(() => localStorage.getItem("lastCity") || "");

  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode")) === true);

  useEffect(() => {
    localStorage.setItem("lastCity", city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`container ${darkMode ? "dark" : ""} style={{ minHeight: "100vh" }}> ${darkMode ? "dark-background" : "light-background"}`}>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-theme">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Previsão do tempo</h1>
      <input
        type="text"
        placeholder="Digite a cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Weather city={city} />
    </div>
  );
};

export default App;
