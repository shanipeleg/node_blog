const express = require('express');
const router = express.Router();
const schema = require('../schemas/post.schema');
const controller = require('../controllers/post.controller');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const {
    celebrate,
    Segments,
    Modes
} = require('celebrate');

router.get('/', controller.getAllPosts);

router.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.objectId()
    }
}), controller.getOnePost);

router.post('/', celebrate({
    [Segments.BODY]: schema
}), controller.createPost);

router.put('/:id', celebrate({
    [Segments.BODY]: schema
}), controller.updateOnePost);

router.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.objectId()
    }
}), controller.deleteOnePost);

module.exports = router;