const config = require('config');
const createDebug = require('debug');
const errors = require('../errors');

const log = createDebug(`${config.app.name}:services:github:log`);

const checkPullRequest = (params) => {
  const { action, number, pull_request } = params;
  const { merged, body, base } = pull_request;
  log('Start processing pull request');
  log(`... number: ${number}`);
  log(`... action: ${action}`);
  log(`... merged: ${merged}`);
  log(`... body: ${body}`);
  log(`... base: ${base.ref}`);
  return { ok: 1 };
};

module.exports = {
  checkPullRequest,
};
