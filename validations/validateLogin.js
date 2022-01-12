const Joi = require('joi');

module.exports = (login) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
  }).validate(login);
  
  if (error) return error;
};