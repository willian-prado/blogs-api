const { CONFLICT } = require('http-status-codes').StatusCodes;
const { Category } = require('../../models');

const err = {
  statusCode: CONFLICT,
  message: 'Category already exists',
};

module.exports = async (name) => {
  const category = await Category.findOne({ where: { name } });
  if (category) return { err };

  const newCategory = await Category.create({ name });
  return newCategory;
};