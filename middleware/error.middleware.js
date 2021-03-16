const {
    isCelebrateError,
    Segments
} = require('celebrate');

var createError = require('http-errors');


const errorHandler = (err, req, res, next) => {

    try {

        res.status(err.status || 500);
        let message = "Unknown Error!"
        console.log(err.message)
        //I don't want the user to see all these internal errors!!
        // let message = err.message || "Unknown Error!"

        if (createError.isHttpError(err)) {
            message = err.message;
        }

        if (isCelebrateError(err)) {
            if (err.details.get(Segments.BODY)) {
                let errors = err.details.get(Segments.BODY).details;
                let mapped = (errors.map(x => {
                    return x.message
                }))
                message = mapped.join(', ');
            }
            if (err.details.get(Segments.PARAMS)) {
                message = 'Incorrect params!';
            }
        }

        res.send({
            'Error': message
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            'Error': 'Unknown error occured'
        })
    }
}



module.exports = errorHandler;