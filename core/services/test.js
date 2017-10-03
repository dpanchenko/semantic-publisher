const config = require('config');
const testLib = require('../libs').test;
const errors = require('../errors');

const testService = (params) => {
  return testLib.testLib(params);
};

module.exports = {
  testService,
};
