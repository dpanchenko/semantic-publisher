const joi = require('joi');

module.exports = {
  body: joi.object().keys({
    test: joi.string().required(),
  }),
};
