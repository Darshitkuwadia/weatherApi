// third party packages 
const express = require('express')
const fetch = require('node-fetch')

// express => app
const app = express()

// define variables
const hostname = '127.0.0.1'; // localhost
const port = 3333;
//can also be done by calling another servcie that provides the lat long
const dict = {
  "Campbell":{"lat":"37.2872","lng":"-121.9500"},
  "Omaha":{"lat":"41.257160","lng":"-95.995102"},
  "Austin":{"lat":"30.266666","lng":"-97.733330"},
  "Timonium":{"lat":"39.299236","lng":"-76.609383"}
}

// Redirect to front-end index.js
app.get('/', function (req, res) {
  res.send('Weather API');
})

// API get call to get data 
app.get("/weather", function(req, res) {
  let darksky = 'https://api.darksky.net/forecast/';
  let darkskyApiKey = '3646b8608e0dcf9a6cd8824ab388f2f0';
  let city = req.query.name;// TODO: encrypt it
//If the city doesnt exist?
  var object = dict[city];
  var lat = object["lat"];
  var lng = object["lng"];
  let exludeSettings = '?exclude=minutely,hourly,daily,alerts,flags&amp;units=auto'
  let uri = darksky + darkskyApiKey + '/' + lat + ',' + lng+exludeSettings;

  fetch(uri)
    .then(function(fetchRes) {
      return fetchRes.json();
    })
    .then(function(json) {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(json));
    })
    .catch(function(error) {
      res.send(JSON.stringify(error));
    });
});

//listen for request on port 3333, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`WeatherApp running at http://${hostname}:${port}/ or http://localhost:${port}/`);
});