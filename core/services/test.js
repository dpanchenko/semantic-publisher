const testLib = require('../libs').test;

const testService = params => testLib.testLib(params);

module.exports = {
  testService,
};
