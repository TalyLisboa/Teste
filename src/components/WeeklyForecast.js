import React from 'react';
import WeatherCard from './WeatherCard';

const WeeklyForecast = ({ forecast }) => (
  <div>
    {forecast.map((weather, index) => (
      <WeatherCard key={index} weather={weather} />
    ))}
  </div>
);

export default WeeklyForecast;
