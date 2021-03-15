const Post = require('../models/post.model')

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (err) {
        next(err);
    }
}

exports.getOnePost = async (req, res, next) => {
    try {
        let post = await Post.findById(req.params.id)
        res.json(post);
    } catch (err) {
        next(err);
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const post = new Post({
            title: req.body.title,
            body: req.body.body,
        });
        await post.save();
        res.json(post);
    } catch (err) {
        next(err);
    }

};

exports.updateOnePost = async (req, res, next) => {
    try {
        let post = await Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            body: req.body.body,
        }, {
            new: true
        })
        res.json(post);
    } catch (err) {
        next(err);
    }
};

exports.deleteOnePost = async (req, res, next) => {
    try {
        let post = await Post.findByIdAndDelete(req.params.id);
        res.json(post);
    } catch (err) {
        next(err);
    }
};