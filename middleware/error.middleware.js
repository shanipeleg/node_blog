const {
    isCelebrateError,
    Segments
} = require('celebrate');
const {
    x
} = require('joi');


const errorHandler = (err, req, res, next) => {

    try {

        res.status(err.status || 500);

        let message = err.message || "Unknown Error!"

        if (isCelebrateError(err)) {
            let errors = err.details.get(Segments.BODY).details;
            let mapped = (errors.map(x => {
                return x.message
            }))
            message = mapped.join(', ');
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