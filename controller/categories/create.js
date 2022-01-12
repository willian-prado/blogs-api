const rescue = require('express-rescue');
const { CREATED } = require('http-status-codes').StatusCodes;
const categoriesService = require('../../service/categories');
const validateCategory = require('../../validations/validateCategory');

module.exports = rescue(async (req, res, next) => {
  const { name } = req.body;

  const error = validateCategory({ name });
  if (error) return next(error);

  const newCategory = await categoriesService.create(name);
  if (newCategory.err) return next(newCategory.err);

  return res.status(CREATED).json(newCategory);
});