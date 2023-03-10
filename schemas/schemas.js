const Joi = require("joi");
const id = Joi.string().regex(/^\d+$/).min(1).max(2);
const paramString = Joi.string().min(3).max(50);

// const schemaName = Joi.object({
//   name: name.required(),
// });

const schemaId = Joi.object({
  id: id.required(),
});

const schemaParamsPoses = Joi.object({
  id: id.required(),
  name: paramString.required(),
  level: paramString.required(),
});

module.exports = {
  schemaId,
  schemaParamsPoses,
};
