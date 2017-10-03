const config = require('config');
const createDebug = require('debug');
const validate = require('express-validation');
const sendResult = require('../core/helpers/result');
const validation = require('../validation');
const testService = require('../core/services').test;

const log = createDebug(`${config.app.name}:routes:api:log`);

const processTestRequest = async (req, res, next) => {
  log('processTestRequest called with params', req.body, req.query);
  try {
    const result = await testService.testService(req.body);
    sendResult(res, result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  use: (app) => {
    app.all('/api/test', validate(validation.webhook), processTestRequest);
  },
};
