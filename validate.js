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

module.exports = validate;
