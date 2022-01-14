const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;
const blogpostsService = require('../../service/blogposts');

module.exports = rescue(async (req, res, _next) => {
  const { q } = req.query;

  const blogPosts = await blogpostsService.getBySearchTerm(q);
  return res.status(OK).json(blogPosts);
});