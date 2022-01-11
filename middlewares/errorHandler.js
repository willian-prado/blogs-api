const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('http-status-codes').StatusCodes;

module.exports = async (err, req, res, _next) => {
  if (err.isJoi) {
    return res.status(BAD_REQUEST).json({ message: err.details[0].message });
  }

  if (err) return res.status(err.statusCode).json({ message: err.message });

  return res.status(INTERNAL_SERVER_ERROR).send();
};