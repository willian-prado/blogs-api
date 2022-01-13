const { forEach } = require('p-iteration');
const { BAD_REQUEST } = require('http-status-codes').StatusCodes;
const { BlogPost, PostsCategory } = require('../../models');
const checkCategoryIds = require('../../utils/checkCategoryIds');

const err = {
  statusCode: BAD_REQUEST,
  message: '"categoryIds" not found',
};

module.exports = async (blogpostData) => {
  const { title, content, categoryIds, userId } = blogpostData;

  const testCategoryIds = await checkCategoryIds(categoryIds);
  if (!testCategoryIds) return { err };

  const newPost = await BlogPost.create({ title, content, userId });

  await forEach(categoryIds, async (id) => {
    await PostsCategory.create({ postId: newPost.id, categoryId: id });
  });

  return { 
    id: newPost.id,
    userId: newPost.userId,
    title: newPost.title,
    content: newPost.content,
  };
};