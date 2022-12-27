const Joi = require("joi");

function validate(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(data);
}

module.exports = validate;
