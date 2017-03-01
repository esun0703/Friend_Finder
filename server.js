//DEPENDENCIES
//===============================
//require express
var express = require("express");
//require body-parser
var bodyParser = require("body-parser");
//require path
var path = require("path");
//================================
//Express Configuration
var app = express()
//set up port
var PORT = process.env.PORT || 8080;
//BodyParser Interprets Infor Sent To Server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));


//================================
//Router: points to route files
require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

//================================
//Listener
app.listen(PORT,function(){
	console.log("App listening on PORT: " + PORT);
});