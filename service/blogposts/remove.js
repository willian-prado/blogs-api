const { NOT_FOUND, UNAUTHORIZED } = require('http-status-codes').StatusCodes;
const { BlogPost } = require('../../models');

const ERR_UNAUTHORIZED = {
  statusCode: UNAUTHORIZED,
  message: 'Unauthorized user',
};

const ERR_NOT_FOUND = {
  statusCode: NOT_FOUND,
  message: 'Post does not exist', 
};

module.exports = async (id, userId) => {
  const blogPost = await BlogPost.findByPk(id);
  
  if (!blogPost) return { err: { ...ERR_NOT_FOUND } };
  if (blogPost.userId !== userId) return { err: { ...ERR_UNAUTHORIZED } };

  await BlogPost.destroy({ where: { id } });
  return { message: 'User deleted with success' };
};