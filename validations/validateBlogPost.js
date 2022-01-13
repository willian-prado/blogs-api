const Joi = require('joi');

module.exports = (blogPost) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
  }).validate(blogPost);

  if (error) return error;
};