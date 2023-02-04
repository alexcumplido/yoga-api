const Joi = require("joi");
const id = Joi.string().regex(/^\d+$/).min(1).max(2);
const name = Joi.string().min(3).max(50);

const schemaName = Joi.object({
  name: name.required(),
});

const schemaId = Joi.object({
  id: id.required(),
});

module.exports = {
  schemaId,
  schemaName,
};
