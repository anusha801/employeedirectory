var express = require('express');
var app = express();
var configObj = require("./src/config/config");
configObj.setEnv(process.argv[2]);
var config = configObj.props();
var PORT = config.app.port;
app.use(express.static(__dirname + '/src/app/modules'));
app.use(express.static(__dirname + '/src/app/css'));
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/src/app/modules/home.html');
});
app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});
