module.exports = function (res, data = {}, error) {
  return res.status((error && (error.statusCode || 500)) || 200).json({
    code: (error && (error.restCode || -1)) || 0,
    result: data,
    error: error || {},
  });
};
