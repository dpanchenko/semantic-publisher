const config = require('config');
const createDebug = require('debug');
const request = require('request-promise-native');

const log = createDebug(`${config.app.name}:libs:test:error`);

const testLib = params => {
  log('test lib called', params);
  return params;
}

module.exports = {
  testLib,
};

