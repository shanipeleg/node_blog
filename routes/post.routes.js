const express = require('express');
const router = express.Router();
const schema = require('../schemas/post.schema');
const controller = require('../controllers/post.controller');
const {
    celebrate,
    Segments,
    Modes
} = require('celebrate');

router.get('/', controller.getAllPosts);

router.get('/:id', controller.getOnePost);

router.post('/', celebrate({
    [Segments.BODY]: schema
}), controller.createPost);

router.put('/:id', celebrate({
    [Segments.BODY]: schema
}, {
    mode: Modes.FULL
}), controller.updateOnePost);

router.delete('/:id', controller.deleteOnePost);

module.exports = router;