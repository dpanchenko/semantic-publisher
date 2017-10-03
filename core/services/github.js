const config = require('config');
const createDebug = require('debug');

const log = createDebug(`${config.app.name}:services:github:log`);

const checkPullRequest = async (params) => {
  log('Start processing pull request');
  const { action, number, pull_request: pullRequest } = params;
  if (pullRequest && action === 'closed' && pullRequest.merged) {
    const { body, base, merged } = pullRequest;
    log(`... number: ${number}`);
    log(`... action: ${action}`);
    log(`... merged: ${merged}`);
    log(`... body: ${body}`);
    log(`... base: ${base.ref}`);
  }
  return {};
};

module.exports = {
  checkPullRequest,
};
