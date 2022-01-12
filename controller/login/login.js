const { OK } = require('http-status-codes').StatusCodes;
const rescue = require('express-rescue');
const validateLogin = require('../../validations/validateLogin');
const loginService = require('../../service/login');

module.exports = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  
  const error = validateLogin({ email, password });
  if (error) return next(error);

  const token = await loginService.login({ email, password });
  if (token.err) return next(token.err);

  return res.status(OK).json({ token });
});