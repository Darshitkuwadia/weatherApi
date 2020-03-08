const express = require('express');
const fetch = require('node-fetch');
const cache = require('memory-cache');

const router = express.Router();
const cities = {
  "campbell":{ 
    "lat":"37.2872",
    "lng":"-121.9500"
  },
  "omaha":{
    "lat":"41.257160",
    "lng":"-95.995102"
  },
  "austin":{
    "lat":"30.266666",
    "lng":"-97.733330"
  },
  "timonium":{
    "lat":"39.299236",
    "lng":"-76.609383"
  }
}

// define Memrory Cache 
const memCache = new cache.Cache();
const cacheMiddleware = (duration) => {
    return (req, res, next) => {
        let key =  '__express__' + req.originalUrl || req.url
        let cacheContent = memCache.get(key);
        if(cacheContent){
            res.send( cacheContent );
            logging(req,res)
            return
        }else{
            res.sendResponse = res.send
            res.send = (body) => {
                memCache.put(key,body,duration*1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}

// Logging function
const logging = (req,res) => {
  console.log(`----------------------------`);
  console.log("Request Method: "+req.method);
  console.log("Request URL: "+req.url);
  console.log("Response Status Code: "+res.statusCode);
}

// route middleware to validate :city
router.param('cityName', function(req, res, next, cityName) {
    // handling null and empty strings
    if(cityName === null || cityName === ''){
      res.status(400);
      logging(req,res);
      res.send(JSON.stringify(`City name is null or empty`));  
    } else if (!(cityName in cities)) { // handling city values which don't exist in cities object
      res.status(422);
      logging(req,res);
      res.send(JSON.stringify(`City :'${cityName}' is not listed`));
    } else { // setup url from city using lat and lng for darksky api
      let darksky = 'https://api.darksky.net/forecast/';
      let darkskyApiKey = '7125a507e3f1984bd5ea8ea53a31f01d';
      var lat = cities[cityName].lat;
      var lng = cities[cityName].lng;
      let excludeSettings = '?exclude=minutely,hourly,daily,alerts,flags&amp;units=auto'

      // pass it to req
      req.uri = darksky + darkskyApiKey + '/' + lat + ',' + lng + excludeSettings;
      req.cityName = cityName
    
      next(); 
    }
});

// API get call to get data 
router.get("/weather/:cityName",cacheMiddleware(300),function(req, res) {
  fetch(req.uri)
    .then(function(fetchRes) {
      return fetchRes.json();
    })
    .then(function(json) {
      console.log(`Successfully got ${req.cityName} weather information.`);
      res.setHeader("Content-Type", "application/json");
      logging(req,res);
      res.send(JSON.stringify(json));
      
    })
    .catch(function(error) {
      res.status(500);
      console.error(`Error: ${error}`)
      res.send(JSON.stringify(error));
    });
});

module.exports = router;