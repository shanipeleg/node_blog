const mongoose = require('mongoose');
console.log('Attemping MongoDB Connection...')
if (process.env.MONGO_URL) {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    const db = mongoose.connection;

    db.on('error', () => {
        console.log('Error connecting to DB!')
    });
    db.once('open', () => {
        console.log('MongoDB connected')
    });
} else {
    console.log('MongoDB URL missing!')
}

module.exports = mongoose;