//this is the entry point of the entire application!

require('dotenv').config(); //gets .env configs
const app = require('../app') //import the app module
require('../db') //init mongodb
const http = require('http');


var port = process.env.PORT || 3000;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
server.on('listening', onListen)
server.on('error', onError)

function onListen() {
    console.log(`Running in port ${port}. Open http://localhost:${port}`)
}

function onError(error) {
    console.log("ERROR Connecting to server!")
}