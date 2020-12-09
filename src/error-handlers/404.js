'use strict';

function notFoundHandler (req, res, next){ //catch all function for bad route requests
  res.status(404);
  res.statusMessage = 'Not Found';
  res.json({ error: 'not found' });
}

module.exports = notFoundHandler; //export to server.js