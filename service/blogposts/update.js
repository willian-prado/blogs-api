const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;
const { BlogPost, Category } = require('../../models');

const err = {
  statusCode: UNAUTHORIZED,
  message: 'Unauthorized user',
};

module.exports = async (postId, updatedPost, userId) => {
  const { title, content } = updatedPost;
  const blogPost = await BlogPost.findByPk(postId, {
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });

  if (blogPost.userId !== userId) return { err };

  await blogPost.update(
    { title, content },
    { where: { id: postId } },
  );

  return {
    title: blogPost.title,
    content: blogPost.content,
    userId: blogPost.userId,
    categories: blogPost.categories,
  };
};