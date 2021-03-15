const Joi = require('joi');

const schema = Joi.object().keys({
    title: Joi.string().min(3).max(30).required(),
    body: Joi.string().min(10).max(500).required()
});

module.exports = schema;