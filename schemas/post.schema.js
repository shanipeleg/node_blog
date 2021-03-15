const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const schema = Joi.object().keys({
    title: Joi.string().min(3).max(30).required(),
    body: Joi.string().min(10).max(500).required(),
    creator: Joi.objectId().required()
});

module.exports = schema;