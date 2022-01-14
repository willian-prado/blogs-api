const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../../models');

const { Op } = Sequelize;

module.exports = async (q) => {
  const query = `%${q}%`;

  const blogPosts = await BlogPost.findAll(
    { where: { [Op.or]: [{ content: { [Op.like]: query } }, { title: { [Op.like]: query } }] },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );

  return blogPosts;
};