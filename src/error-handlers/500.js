'use strict';

function errorHandler (err, req, res, next){ //function checks for all other errors
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({ error: err});
}

module.exports = errorHandler; //export to server.js