const config = require('config');

const versionRoute = (req, res) => res.json({
  version: config.app.version,
});

module.exports = {
  use: (app) => {
    app.get('/version', versionRoute);
  },
};
