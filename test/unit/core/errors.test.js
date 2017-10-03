/* eslint-disable prefer-arrow-callback */
const expect = require('chai').expect;
const errors = require('../../../core/errors');

describe('Errors test', function () {
  it('should create custom error', function () {
    const customError = errors.customError({
      code: 0,
      status: 0,
      name: 'test',
      data: {},
      message: 'message',
    });
    expect(customError.restCode).to.equal(0);
    expect(customError.statusCode).to.equal(0);
    expect(customError.name).to.equal('test');
    expect(customError.data).to.deep.equal({});
    expect(customError.message).to.equal('message');
  });
  it('should create internal error', function () {
    const internalError = errors.Internal({ test: 'test' });
    expect(internalError.restCode).to.equal(500);
    expect(internalError.statusCode).to.equal(500);
    expect(internalError.name).to.equal('Internal');
    expect(internalError.data).to.deep.equal({ test: 'test' });
    expect(internalError.message).to.equal('InternalError');
  });
});
