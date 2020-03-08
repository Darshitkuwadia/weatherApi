import React from 'react';

import './WeatherTable.css';
import WeatherTableRow from './WeatherTableRow'

function WeatherTable(props) {
  const {
    children
  } = props
  
  return (
    <table className="weather-table">
      <tbody>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Summary</th>
          <th>Date</th>
          <th>Weather Icon</th>
        </tr>
        {children}
      </tbody>
    </table>
  )
}

WeatherTableRow.displayName = 'WeatherTable.Row'

WeatherTable.Row = WeatherTableRow

export default WeatherTable