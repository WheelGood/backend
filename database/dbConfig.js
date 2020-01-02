const knex = require('knex');
const setup = require('../config/setup.js');

const environment = setup.environment;

const config = require('../knexfile.js')[environment];

module.exports = knex(config);
