const packageJson = require('../package.json');

module.exports = {
  app: {
    name: packageJson.name,
    version: packageJson.version,
  },
  server: {
    port: parseInt(process.env.PORT, 10) || 8088,
  },
  mqtt: {
    url: process.env.MQTT_URL,
    channel: process.env.MQTT_CHANNEL,
  },
  git: {
    branch: process.env.GIT_REPO_WATCH_BRANCH,
  },
};
