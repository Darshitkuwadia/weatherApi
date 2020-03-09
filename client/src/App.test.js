import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render the App Component correctly', () => { 
    let app = shallow(
      <App /> 
    )  
    expect(app).toMatchSnapshot();
  })
  describe('[onSearch]', () => {
    it('is invoked when clicking the search Button', () => {
      const appOnClick = shallow(
        <App />
      )
      const event = { preventDefault: () => {} }
      jest.spyOn(event, 'preventDefault')
      appOnClick.find('#weatherForm').simulate('submit', event);
    })
  })
}); 