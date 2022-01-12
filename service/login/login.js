const { BAD_REQUEST } = require('http-status-codes').StatusCodes;
const { User } = require('../../models');
const { createToken } = require('../../middlewares/auth');

const err = {
  statusCode: BAD_REQUEST,
  message: 'Invalid fields',
};

module.exports = async (login) => {
  const { email, password } = login;

  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return { err };
  }

  const token = await createToken(user);
  return token;
};