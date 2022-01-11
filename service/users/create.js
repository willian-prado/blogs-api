const { CONFLICT } = require('http-status-codes').StatusCodes;
const { User } = require('../../models');
const { createToken } = require('../../middlewares/auth');

const err = {
  statusCode: CONFLICT,
  message: 'User already registered',
};

module.exports = async (userData) => {
  const { email } = userData;
  const user = await User.findOne({ where: { email } });

  if (user) return { err };

  const newUser = await User.create(userData);
  const token = await createToken(newUser);
  return token;
};
