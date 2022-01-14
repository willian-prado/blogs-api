const Joi = require('joi');

module.exports = (updatedPost) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).validate(updatedPost);

  if (error) return error;
};