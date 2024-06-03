const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  dob: Joi.date().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  profile_image: Joi.string().optional().allow(''),
});

const postSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().optional().allow('')
})

module.exports = {
  validateUser: (data) => userSchema.validate(data),
  validatePost: (data) => postSchema.validate(data),
};
