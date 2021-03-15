const User = require('../models/user.model')

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).populate('posts');

        res.json(users);
    } catch (err) {
        next(err);
    }
}


exports.getOneUser = async (req, res, next) => {
    try {
        let user = await User.findById(req.params.id)
        if (!user) {
            throw new Error('User not found!')
        }
        res.json(user);
    } catch (err) {
        next(err);
    }
}

exports.createUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (err) {
        next(err);
    }

};