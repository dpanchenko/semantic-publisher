const config = require('config');
const createDebug = require('debug');

const log = createDebug(`${config.app.name}:services:github:log`);

const checkPullRequest = async (params) => {
  log('Start processing pull request');
  const { action, number, pull_request: pullRequest } = params;
  if (pullRequest && action === 'closed' && pullRequest.merged) {
    const { title, body, base, merged } = pullRequest;
    log(`... number: ${number}`);
    log(`... action: ${action}`);
    log(`... merged: ${merged}`);
    log(`... base: ${base.ref}`);
    log(`... title: ${title}`);
    log(`... body: ${body}`);
  }
  return {};
};

module.exports = {
  checkPullRequest,
};
