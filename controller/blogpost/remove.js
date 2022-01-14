const rescue = require('express-rescue');
const { NO_CONTENT } = require('http-status-codes').StatusCodes;
const blogpostsService = require('../../service/blogposts');

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;

  const removePost = await blogpostsService.remove(id, userId);
  if (removePost.err) return next(removePost.err);
  
  return res.status(NO_CONTENT).send();
});