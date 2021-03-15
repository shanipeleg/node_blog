const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});



const Post = mongoose.model('Post', postSchema);


module.exports = Post;