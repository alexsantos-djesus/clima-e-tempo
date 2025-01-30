import React, { useState } from "react";
import Weather from "./Weather";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");

  return (
    <div className="container">
      <h1>Aplicação de Clima</h1>
      <input
        type="text"
        placeholder="Digite a cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Weather city={city} />
    </div>
  );
};

export default App;
