const rescue = require('express-rescue');
const { CREATED } = require('http-status-codes').StatusCodes;
const validateBlogPost = require('../../validations/validateBlogPost');
const blogpostsService = require('../../service/blogposts');

module.exports = rescue(async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  const error = validateBlogPost({ title, content, categoryIds });
  if (error) return next(error);
  
  const newPost = await blogpostsService.create({ title, content, categoryIds, userId });
  if (newPost.err) return next(newPost.err);
  return res.status(CREATED).json(newPost);
});