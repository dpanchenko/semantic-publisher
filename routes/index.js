const loader = require('../core/helpers/loader');

module.exports = app => loader({
  app,
  dirname: __dirname,
  helpstring: 'route',
});
