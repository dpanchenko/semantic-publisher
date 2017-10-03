module.exports = {
  result: [
    {
      description: 'call without parameters',
      input: {
        data: undefined,
        error: undefined,
      },
      expect: {
        status: 200,
        json: {
          code: 0,
          result: {},
          error: {},
        },
      },
    },
    {
      description: 'call with data and without error',
      input: {
        data: { test: 'any' },
        error: undefined,
      },
      expect: {
        status: 200,
        json: {
          code: 0,
          result: { test: 'any' },
          error: {},
        },
      },
    },
    {
      description: 'call with data and empty error',
      input: {
        data: { test: 'any' },
        error: {},
      },
      expect: {
        status: 500,
        json: {
          code: -1,
          result: { test: 'any' },
          error: {},
        },
      },
    },
    {
      description: 'call with data and error with statusCode',
      input: {
        data: { test: 'any' },
        error: {
          statusCode: 400,
        },
      },
      expect: {
        status: 400,
        json: {
          code: -1,
          result: { test: 'any' },
          error: {
            statusCode: 400,
          },
        },
      },
    },
    {
      description: 'call with data and error with statusCode and restCode',
      input: {
        data: { test: 'any' },
        error: {
          statusCode: 400,
          restCode: 400,
        },
      },
      expect: {
        status: 400,
        json: {
          code: 400,
          result: { test: 'any' },
          error: {
            statusCode: 400,
            restCode: 400,
          },
        },
      },
    },
    {
      description: 'call with data and error with statusCode and restCode and message',
      input: {
        data: { test: 'any' },
        error: {
          statusCode: 400,
          restCode: 400,
          message: 'any',
        },
      },
      expect: {
        status: 400,
        json: {
          code: 400,
          result: { test: 'any' },
          error: {
            statusCode: 400,
            restCode: 400,
            message: 'any',
          },
        },
      },
    },
  ],
};
