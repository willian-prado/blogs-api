const rescue = require('express-rescue');
const { OK, BAD_REQUEST } = require('http-status-codes').StatusCodes;
const blogpostsService = require('../../service/blogposts');
const validateBlogPostUpdate = require('../../validations/validateBlogPostUpdate');

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;

  if (categoryIds) return next({ statusCode: BAD_REQUEST, message: 'Categories cannot be edited' });

  const error = validateBlogPostUpdate({ title, content });
  if (error) return next(error);

  const update = await blogpostsService.update(id, { title, content }, userId);
  if (update.err) return next(update.err);

  return res.status(OK).json(update);
});