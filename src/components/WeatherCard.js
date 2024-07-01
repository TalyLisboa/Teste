import React from 'react';

const WeatherCard = ({ weather }) => (
  <div className="weather-card">
    <h2>{weather.date}</h2>
    <p>Temperatura: {weather.temperature}°C</p>
    <p>Descrição: {weather.description}</p>
  </div>
);

export default WeatherCard;
