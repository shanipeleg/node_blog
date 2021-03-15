const Joi = require('joi');

const schema = Joi.object().keys({
    userName: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    firstName: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    lastName: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    birthday: Joi
        .date().
    optional()
});

module.exports = schema;