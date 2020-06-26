require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

process.env.host = 'cluster0-tr0in.azure.mongodb.net/test?retryWrites=true&w=majority';

// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const axios = require('axios');

const app = require('../index');

before(async function () {
  this.timeout(0);
  console.log('Waiting for MongoDB connection...');
  return require('../models/db');
});

const dependencies = {
  chai, 
  axios, 
  app
};

describe('Sanity check', () => {
  require('./index.js.test')(dependencies);
});

describe('Ensuring credentials can be properly set', () => {
  require('./auth.js.test')(dependencies);
});

describe('Database testing', () => {
  require('./db_testing/db_basic_crud.js.test')(dependencies);
});

describe('API Endpoint testing', () => {
  require('./api_testing/user.js.test')(dependencies);
});
