# WeatherApp
![weatherApp Image](https://github.com/Darshitkuwadia/weatherApi/blob/master/appSS.png)

## Install guide

### Server Setup
- Run following commands on `root` directory\
  - `npm install` to install dependencies
  - `npm start` to start express server
  - `npm build` to build application
  - `npm test` to test project
  - check `localhost:3333` 

### Client Setup 

- Open another terminal while server is running
  - `cd client` to move client directory
  - `npm install` to install dependencies
  - `npm start` to start react client UI
  - check `localhost:3000` 

### Tools 
- Server : express
- Framework : React
- Styling : css
- Testing : JEST

### Enhancement 
- Lint : eslint
- Accessibility

### Project Structure
  - client
    - src
      - components
        - Layout
        - WeatherTable
      - App.js
      - App.css
      - index.js  [application root]
      - global.css  [global css for appliction]
  - routes
    - index.js
    - weather.js
  - server.js [express server root]

### Application development thought process

- Backend service will call the DarkSky API to get the weather info.
- Dark Sky takes as input lat, long but we want to expose an API that would get a city as user input.
- So we needed to transalte the city into corresponding lat,long to query DarkSky.
- DarkSky provides lot of information like hourly , daily information, but I am only using the current information for the project purposes. 
- So when calling DarkSky I exculde all the unwanted information and retrieve only the current info.
- As per the requirements , backend service was set up in Express using NodeJS.
- Caching has been added at the service layer to improve the performance.

- React is used at the UI layer to manage user input and display the result.
- UserInput is simply a city value
- UI will make a call to the nodejs backend service to fetch the result.
- Results of subsequent user input are displayed in the form of a table which includes the current weather information.

---

## Requirements

- Create with Node.js and Express.
- Creativity is encouraged.

### Set-up

- Install Node :  http://nodejs.org/
- Get an API key :  
  - The Dark Sky requires developer  registration to leverage their free API.
  - Upon registration you will receive a key, which is required for subsequent requests.
  - A sample API request: https://api.darksky.net/forecast/4dd9e73d6fc4af3517231c08979bc1f2/37.8267,-122.4233

### Application Specs

- Create an application that obtains weather data for Campbell-CA, Omaha-NE, Austin-TX and Timonium-MD. 
- Display the weather results in a table and omit any locations that fail to return data.
- Create a middleware on the server‐side that will log to the console all parameters passed to the server via different methods of inputting data from a web app to the server (form, URL, etc). For example, if the URL was http://localhost:8000/weather?name=foo it would log the fact that the name=foo was passed.
- Use appropriate variable names and add comments.
- Write unit tests for your code using a framework of your choice.
