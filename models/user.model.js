const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthday: {
        type: mongoose.Schema.Types.Date,
        required: true
    }
}, {
    timestamps: true
});



const User = mongoose.model('User', userSchema);


module.exports = User;