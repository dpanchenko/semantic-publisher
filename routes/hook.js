const config = require('config');
const createDebug = require('debug');
const sendResult = require('../core/helpers/result');

const log = createDebug(`${config.app.name}:routes:hook:log`);

const processHookRequest = (req, res, next) => {
  log(`processHookRequest called from repo ${req.body.repository.full_name}`);
  if (req.app.mqtt) {
    const payload = JSON.stringify({
      query: req.query,
      params: req.params,
      body: req.body,
    });
    log(`publish to channel ${config.mqtt.channel}: ${payload}`);
    req.app.mqtt.publish(config.mqtt.channel, payload);
    return sendResult(res, payload);
  }
  return next(new Error('MQTT not connected'));
};

module.exports = {
  use: (app) => {
    app.all('/hook', processHookRequest);
  },
};
