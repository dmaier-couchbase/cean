//Basic express requirements
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

//The express application initialization
var app = express();

//The static resources
app.use('/',express.static(__dirname + '/public'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));

//Couchbase
var cb = require('./cb.js');
var con = cb.connect();

//The service's base URL
var SERVICE_URL = '/service/';

//Routes
var demos = require('./routes/demo.js');
app.use(SERVICE_URL, demos);


//Web server
server = app.listen(9000, function () { 
	
	var host = server.address().address
	var port = server.address().port 

	console.log('Example app listening at http://%s:%s', host, port)
	  
});
