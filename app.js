//app - here we define routes and middlewares
var express = require('express');
var createError = require('http-errors');

const app = express();

app.use(express.urlencoded({
    extended: true
}))

const postsRouter = require('./routes/post.routes')
const userRouter = require('./routes/user.routes')
const errorHandler = require('./middleware/error.middleware');


app.use('/posts', postsRouter);
app.use('/users', userRouter);



app.use(function(req, res, next) {
    next(createError(404, "Page Not Found!"));
});



app.use(errorHandler);

module.exports = app;