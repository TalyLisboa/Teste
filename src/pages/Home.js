import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WeeklyForecast from '../components/WeeklyForecast';

const Home = () => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=Itapetininga&days=7&lang=pt`)
      .then(response => response.json())
      .then(data => {
        const dailyForecast = data.forecast.forecastday.map(day => ({
          date: day.date,
          temperature: day.day.avgtemp_c,
          description: day.day.condition.text,
        }));
        setForecast(dailyForecast);
      });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Previsão do Tempo para Itapetininga</h1>
        <WeeklyForecast forecast={forecast} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

