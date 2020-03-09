import React from 'react';
import { shallow } from 'enzyme';
import WeatherTable from './WeatherTable';

const city = "WeatherTableRow city"
const weatherIcon = "clear-night"
const time = "WeatherTableRow time"
const summary = "WeatherTableRow summary"
const temperature = "WeatherTableRow temperature"

const weatherTableRow = (
  <WeatherTable.Row
    city={city}
    weatherIcon={weatherIcon}
    time={time}
    summary={summary}
    temperature={temperature}
  />
)

describe('WeatherTable', () => {
  it('should render the WeatherTable', () => { 
    let weatherTable = shallow(
      <WeatherTable/>
    )  
    expect(weatherTable).toMatchSnapshot();
  });
  it('renders with WeatherTable.Row children', () => {
    let weatherTable = shallow(
      <WeatherTable>
        {weatherTableRow}
      </WeatherTable>
    ); 
    expect(weatherTable).toMatchSnapshot();
  });
  describe('<WeatherTable.Row />', () => {
    it('renders', () => {
      const renderedWeatherTableRow = shallow(weatherTableRow)
      expect(renderedWeatherTableRow).toMatchSnapshot()
    })
  })
}); 