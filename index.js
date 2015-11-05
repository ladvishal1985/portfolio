// modules =================================================
var express = require('express');
var app = express();
//==============ADDED BY ME=================================
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
//===============================================

app.set('port', (process.env.PORT || 5000)); // Set Port 

//ADDED BY ME ==============================================
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
//===============================================
app.use(express.static(__dirname + '/public'));
require('./app/routes')(app);
/*app.get('/', function(request, response) {
  response.send('Hello World!');
});*/

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
