const express = require('express');
const router = express.Router();
const schema = require('../schemas/user.schema');
const controller = require('../controllers/user.controller');
const {
    celebrate,
    Segments,
    Modes
} = require('celebrate');

router.get('/', controller.getAllUsers);

router.get('/:id', controller.getOneUser);

router.post('/', celebrate({
    [Segments.BODY]: schema
}, {
    abortEarly: false
}, {
    mode: Modes.FULL
}), controller.createUser);

// router.put('/:id', celebrate({
//     [Segments.BODY]: schema
// }), controller.updateOnePost);

// router.delete('/:id', controller.deleteOnePost);

module.exports = router;