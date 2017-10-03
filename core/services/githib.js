const config = require('config');
const createDebug = require('debug');
const errors = require('../errors');

const log = createDebug(`${config.app.name}:services:github:log`);

const checkPullRequest = (params) => {
  return params;
};

module.exports = {
  checkPullRequest,
};
