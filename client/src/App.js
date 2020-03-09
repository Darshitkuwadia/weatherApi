import React, { useState } from 'react';

import Layout from './components/Layout'
import WeatherTable from './components/WeatherTable'

import './App.css';

function App() {
  // define states of APP
  const [inputCityValue, setInputCityValue] = useState('');
  const [citiesWeatherData, setCitiesWeatherData] = useState({});
  const [error, setError] = useState('');

  function handleOnSubmit(event) {
    event.preventDefault();

    const fetchData = async () => {
      let response = await fetch(`/weather/${inputCityValue}`);
      // Handle response error here
      if(response.status !== 200) {
        let error = await response.json();
        setError(error);
      } else { // fetch data from here
        let data = await response.json();
        setError('');
        data['city'] = inputCityValue;
        setCitiesWeatherData({ ...citiesWeatherData, [inputCityValue]: data });
      }
    };

    // fetch data if inputCityValue is not empty
    if(!(inputCityValue === '')) { 
      fetchData();
    } else {
      setError('Input data is empty');
    }
  }

  // update inputCityValue on input onBlur  
  const handleOnBlur = (event) => {
    setInputCityValue(event.target.value.trim().toLowerCase());
  }

  // render multiuple WeatherTableRows from citiesWeatherData
  let WeatherTableRowElements = Object.keys(citiesWeatherData).map((cityWeatherData, i) => {
    return (
      <WeatherTable.Row
        key={i}
        city={citiesWeatherData[cityWeatherData].city}
        weatherIcon={citiesWeatherData[cityWeatherData].currently.icon}
        time={citiesWeatherData[cityWeatherData].currently.time}
        summary={citiesWeatherData[cityWeatherData].currently.summary}
        temperature={citiesWeatherData[cityWeatherData].currently.temperature}
      />
    )
  });

  return (
    <div className="App">
      <Layout
        title="[ iWeather ]" 
        subTitle="An application to find weather report of city"
      >
        <form 
          id="weatherForm"
          className="form" 
          onSubmit={handleOnSubmit}
        >
          <label className="label">
            Type City Name Here:
          </label>
          <input 
            id="cityName" 
            name="cityName" 
            className="input-text" 
            type="text" 
            onBlur={handleOnBlur}
            placeholder="Browse for your location"
          />          
          {error &&
            <p className="input-error">{error}</p>
          }
          <input
            className="input-button" 
            type="submit" 
            value="Search" 
          />
        </form>

        {(Object.keys(citiesWeatherData).length !== 0) && 
          <WeatherTable>
            {WeatherTableRowElements}
          </WeatherTable>
        }
      </Layout>
    </div>
  )
}

export default App