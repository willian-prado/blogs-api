const { forEach } = require('p-iteration');
const { Category } = require('../models');

module.exports = async (categoryIds) => {
  let isValid = true;

  await forEach(categoryIds, async (id) => {
    const category = await Category.findByPk(id);
    if (!category) isValid = false;

    if (!isValid) return true;
  });

  return isValid;
};
