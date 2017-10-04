const config = require('config');
const createDebug = require('debug');
const sendResult = require('../core/helpers/result');

const log = createDebug(`${config.app.name}:routes:hook:log`);

const processHookRequest = (req, res, next) => {
  log('processHookRequest called with params', req.query, req.params, req.body);
  if (req.app.mqtt) {
    const channel = 'github:webhook';
    const payload = JSON.stringify({
      query: req.query,
      params: req.params,
      body: req.body,
    });
    log(`publish to channel ${channel}: ${payload}`);
    req.app.mqtt.publish(channel, payload);
    return sendResult(res, payload);
  }
  return next(new Error('MQTT not connected'));
};

module.exports = {
  use: (app) => {
    app.all('/hook', processHookRequest);
  },
};
