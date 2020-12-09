'use strict';
const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('validator if the string is empty', () => {
  it ('should respond with a 500', () => {
    return mockRequest
      .get('/person')
      .then (results => {
        expect(results.status).toBe(500)
      }).catch(console.error);
  })
})

describe('validator if the name is given', () => {
  it ('should respond with a 200', () => {
    return mockRequest
      .get('/person?name=bob')
      .then (results => {
        expect(results.status).toBe(200)
      }).catch(console.error);
  })
})

describe('given a name in the query string, the output object is correct', () => {
  it ('should respond with { name: bob }', () => {
    return mockRequest
      .get('/person?name=bob')
      .then (results => {
        expect(results.body).toEqual({ name: 'bob' })
      }).catch(console.error);
  })
})