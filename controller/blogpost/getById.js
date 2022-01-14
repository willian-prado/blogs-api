const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const blogpostsService = require('../../service/blogposts');

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;

  const blogPost = await blogpostsService.getById(id);
  if (blogPost.err) return next(blogPost.err);
  
  return res.status(OK).json(blogPost);
});