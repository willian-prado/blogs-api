const rescue = require('express-rescue');
const { NO_CONTENT } = require('http-status-codes').StatusCodes;
const usersService = require('../../service/users');

module.exports = rescue(async (req, res, _next) => {
  const { id } = req.user;
  await usersService.remove(id);
  return res.status(NO_CONTENT).send();
});