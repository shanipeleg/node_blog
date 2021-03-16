const Post = require('../models/post.model')
const ResourceNotFound = require('../errors/ResourceNotFound.error');
const User = require('../models/user.model')

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

        let user = await User.findById(req.body.creator)
        if (!user) {
            throw new Error('Creator user not found!')
        }

        const post = new Post(req.body);
        //push new post ID into user posts array
        user.posts.push(post._id)
        user.save();

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