const config = require('config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createDebug = require('debug');
const mqtt = require('mqtt');

const middlewares = require('./middlewares');
const routes = require('./routes');
const sendResult = require('./core/helpers/result');

const log = createDebug(`${config.app.name}:service:log`);
const error = createDebug(`${config.app.name}:service:error`);

require('./core/expressAsyncErrors');

process.title = config.app.name;

const app = express();
app.mqtt = mqtt.connect(config.mqtt.url);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

middlewares(app);
routes(app);

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  error(`server error: ${JSON.stringify(err)}`);
  sendResult(res, {}, err);
});

app.mqtt.on('connect', () => {
  log(`MQTT connected to ${config.mqtt.url}`);
  app.listen(config.server.port, () => {
    log(`${config.app.name} v${config.app.version} started`);
    log(`waiting connections on http://0.0.0.0:${config.server.port}`);
  });
});

