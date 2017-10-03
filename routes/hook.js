const config = require('config');
const createDebug = require('debug');
const sendResult = require('../core/helpers/result');
const githubService = require('../core/services').github;

const log = createDebug(`${config.app.name}:routes:hook:log`);

const processPullRequest = async (req, res, next) => {
  log('processPullRequest called with params', req.body, req.query);
  try {
    const result = await githubService.checkPullRequest(req.body);
    log('result', result);
    sendResult(res, result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  use: (app) => {
    app.all('/hook/pull_request', processPullRequest);
  },
};
