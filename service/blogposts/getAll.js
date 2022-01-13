const { BlogPost, User, Category } = require('../../models');

module.exports = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
  return blogPosts;
};