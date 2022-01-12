const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const usersService = require('../../service/users');

module.exports = rescue(async (req, res, _next) => {
  const users = await usersService.getAll();
  return res.status(OK).json(users);
});