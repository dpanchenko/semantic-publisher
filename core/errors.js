class ErrorClass extends Error {
  constructor({ code, status, name, message, data }) {
    super();
    this.name = name;
    this.message = message;
    this.statusCode = status;
    this.restCode = code;
    this.data = data;
  }
}

const errorsList = [
  { code: 500, status: 500, name: 'Internal', message: 'InternalError' },
];

module.exports = errorsList.reduce(
  (prev, { code, status, name, message }) => Object.assign(prev, {
    [name]: data => new ErrorClass({ name, message, status, code, data }),
  }),
  {
    customError: ({ code, status, name, data, message }) =>
      new ErrorClass({ name, message, status, code, data }),
  },
);
