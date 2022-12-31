const Joi = require("joi");

function validate(data) {
  const schema = Joi.object({
    name: Joi.string().min(3),
    category: Joi.string().lowercase(),
    tags: Joi.array().min(1),
    category: Joi.string().trim(),
    price: Joi.number().min(10).max(200),
  });
  return schema.validate(data);
}

function validateUser(data) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
  });
  return schema.validate(data);
}

function validateAuth(data) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
  });
  return schema.validate(data);
}

module.exports.validate = validate;
module.exports.validateUser = validateUser;
module.exports.validateAuth = validateAuth;
