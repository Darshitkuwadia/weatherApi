import React from 'react';
import Skycons from 'react-skycons'

function WeatherTableRow(props) {
  const {
    city,
    weatherIcon,
    time,
    summary,
    temperature
  } = props
  
  let currentTime = new Date(time* 1000)
  
  return (
    <tr>
      <td>{city.charAt(0).toUpperCase() + city.slice(1)}</td>
      <td>{temperature}&#8457;</td>
      <td>{summary}</td>
      <td>{currentTime.toDateString()}</td>
      <td className="weather-icon">
        <Skycons color='black' icon={weatherIcon.toUpperCase().replace(/-/g, '_')}/>
      </td>
    </tr>
  )
}

export default WeatherTableRow