'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it ('should respond with a 404', () => {
    return mockRequest
      .get('/test')
      .then (results => {
        expect(results.status).toBe(404)
      }).catch(console.error);
  })
})

describe('web server', () => {
  it ('should respond with a 404', () => {
    return mockRequest
      .post('/person')
      .then (results => {
        expect(results.status).toBe(404)
      }).catch(console.error);
  })
})

// describe ('port listener is working', () => { //sets up the logger test
//   let consoleSpy;
//   let req = {};
//   let res = {};
//   let next = jest.fn(); //spy on the next method
  
//   beforeEach(() => {
//     //attach to console
//     consoleSpy = jest.spyOn(console, 'log').mockImplementation();
//   });

//   afterEach (() => {
//     //put the console back
//     consoleSpy.mockRestore();
//   });
  
//   it ('properly logs some output', () => {
//     start(PORT);
//     expect(consoleSpy).toHaveBeenCalled();
//   })
// })