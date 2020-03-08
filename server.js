const express = require('express')
const app = express()

// define variables
const hostname = '127.0.0.1'; // localhost
const port = 3333;

// ROUTERS
// ===============================================
let indexRouter = require('./routes/')
let weatherRouter = require('./routes/weather')

// apply the routes to our application
app.use('/', indexRouter);
app.use('/', weatherRouter);

// START THE SERVER
// ==============================================
//listen for request on port 3333, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`WeatherApp running at http://${hostname}:${port}/ or http://localhost:${port}/`);
});