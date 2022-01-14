const { NOT_FOUND } = require('http-status-codes').StatusCodes;
const { BlogPost, User, Category } = require('../../models');

const err = {
  statusCode: NOT_FOUND,
  message: 'Post does not exist',
};

module.exports = async (id) => {
  const blogPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!blogPost) return { err };
  return blogPost;
};