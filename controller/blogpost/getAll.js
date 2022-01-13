const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const blogpostsService = require('../../service/blogposts');

module.exports = rescue(async (_req, res, _next) => {
  const blogPosts = await blogpostsService.getAll();
  return res.status(OK).json(blogPosts);
});