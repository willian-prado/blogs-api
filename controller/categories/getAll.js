const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const categoriesService = require('../../service/categories');

module.exports = rescue(async (req, res, _next) => {
  const categories = await categoriesService.getAll();
  return res.status(OK).json(categories);
});