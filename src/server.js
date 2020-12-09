'use strict';

const express = require('express'); //require express
const app = express(); //declare app for express

const notFoundHandler = require('./error-handlers/404'); //import notFoundHandler module
const errorHandler = require('./error-handlers/500'); //import errorHandler module

const logRequest = require('./middleware/logger'); //import logger module
const validator = require('./middleware/validator'); //import validator module

//middleware
app.use(express.json()); //body parser

app.use(logRequest); //logs all request attempts
//app.use(validator); //validates all request attempts

//routes
app.get('/person', validator, getPerson); //GET person route, expects query with "name" property --> output json { name: "name provided" } or force 500 error

//middleware

app.use(errorHandler); //Handles all other errors
app.use('*', notFoundHandler); //GET not found 404 handler module

//functions

function getPerson (req, res) { //function returns name provided in query
  const nameGiven = req.query.name;
  let outputObj = { name: nameGiven };
  res.status(200).json(outputObj);
  //next();
}

function start(PORT){ //function that starts port
  app.listen(PORT, () => {
    console.log('Server lives on port: ', PORT);
  })
}

//start link
module.exports = { //exports to index.js
  server: app,
  start: start
}