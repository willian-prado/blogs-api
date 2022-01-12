const { NOT_FOUND } = require('http-status-codes').StatusCodes;
const { User } = require('../../models');

const err = {
  statusCode: NOT_FOUND,
  message: 'User does not exist',
};

module.exports = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return { err };
  return user;
};