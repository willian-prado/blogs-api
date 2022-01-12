const Joi = require('joi');

module.exports = (category) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(category);

  if (error) return error;
};