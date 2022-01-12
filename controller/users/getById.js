const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const userService = require('../../service/users');

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;

  const user = await userService.getById(id);
  if (user.err) return next(user.err);
  return res.status(OK).json(user);
});