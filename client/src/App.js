import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // let response = await fetch('https://hn.algolia.com/api/v1/search?query=redux');
        let response = await fetch('/weather?name=abcd'); // 1
        console.log(response)
        let data = await response.json(); // 2
        setWeatherData(data); 
      } catch (error) {
        throw Error(`error:${error}`);
      }
    };
    fetchData();
  }, []);

  console.log('weatherData');
  console.log(weatherData);

  return (
    <div className="App">
      <h1>Users</h1>
      <p>{JSON.stringify(weatherData)}</p>
    </div>
  )
}

export default App;
