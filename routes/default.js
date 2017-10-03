const config = require('config');

/**
 * @api {get} /version Get version data
 * @apiName Version
 * @apiGroup Default
 *
 * @apiSuccessExample Response
 *  {
 *    "code": 0,
 *    "result": {
 *      "version": "1.0.0"
 *    },
 *    "error": {}
 *  }
 * @apiUse Error
 */

const versionRoute = (req, res) => res.json({
  version: config.app.version,
});

module.exports = {
  use: (app) => {
    app.get('/version', versionRoute);
  },
};
