'use strict';

function logRequest(req, res, next) { //logs all requests
  console.log('__REQUEST__', req.method, req.path);
  next();
}

module.exports = logRequest; //exports to server.js