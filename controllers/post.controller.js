const Post = require('../models/post.model')
const ResourceNotFound = require('../errors/ResourceNotFound.error');

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({}).populate('creator');
        res.json(posts);
    } catch (err) {
        next(err);
    }
}

exports.getOnePost = async (req, res, next) => {
    try {
        let post = await (await Post.findById(req.params.id))
        if (!post) {
            throw new ResourceNotFound('post')
        }
        res.json(post.populate('creator'));
    } catch (err) {
        next(err);
    }
}



exports.createPost = async (req, res, next) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.json(post);
    } catch (err) {
        next(err);
    }

};

exports.updateOnePost = async (req, res, next) => {
    try {
        let post = await (await Post.findById(req.params.id))
        if (!post) {
            throw new ResourceNotFound('post')
        }
        post.update(req.body)
        post.save();
        res.json(post);
    } catch (err) {
        next(err);
    }
};

exports.deleteOnePost = async (req, res, next) => {
    try {
        let post = await (await Post.findById(req.params.id))
        if (!post) {
            throw new ResourceNotFound('post')
        }
        post.delete();
        res.json(post);
    } catch (err) {
        next(err);
    }
};