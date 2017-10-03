/* eslint-disable prefer-arrow-callback */
// const expect = require('chai').expect;
const sinon = require('sinon');
const fixtures = require('../../../fixtures/helpers').result;
const resultHelper = require('../../../../core/helpers/result');

describe('Result helper', function () {
  fixtures.forEach((item) => {
    it(item.description, function () {
      const statusSpy = sinon.spy();
      const jsonSpy = sinon.spy();
      const res = {
        status(val) {
          statusSpy(val);
          return {
            json(obj) {
              jsonSpy(obj);
            },
          };
        },
      };
      const { data, error } = item.input;
      const { status, json } = item.expect;
      resultHelper(res, data, error);
      sinon.assert.calledWith(statusSpy, status);
      sinon.assert.calledWith(jsonSpy, json);
    });
  });
});
