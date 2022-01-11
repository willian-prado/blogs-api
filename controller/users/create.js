const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');
const validateUser = require('../../validations/validateUser');
const usersService = require('../../service/users');

module.exports = rescue(async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  
  const error = validateUser({ displayName, email, password, image });
  if (error) return next(error);
  
  const token = await usersService.create({ displayName, email, password, image });

  if (token.err) return next(token.err);
  return res.status(StatusCodes.CREATED).json(token);
});
