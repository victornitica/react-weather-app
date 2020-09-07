import React, { useState } from 'react';
import './App.css';
import { fetchWeather } from './api/fetchWeather';
import cloud from './cloud.png';
import bg from './bg.jpg';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery('');
    }
  }

  const appStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    height: "100vh",
    textAlign: "center",
    color: "white"
  };

  return (
    <div className="App" style={appStyle}>
      <div className="animate">
      <div className="logo">
        <img src={cloud} alt="Logo" width="200" height="200"></img>
      </div>
      <div className="weather">
        <input type="text" className="search" placeholder="Search City..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}
        />
        {weather.main && (
          <div>
            <h2>
              <span>{weather.name}, {weather.sys.country}</span>
            </h2>
            <div className="temperature">
              <h1>{Math.round(weather.main.temp)}<sup>&deg;C</sup></h1>
            </div>
          </div>
        )}
        </div>

      </div>
    </div>
  );
}

export default App;
