//Dependencies
var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

//MongoDB
mongoose.connect('mongodb://localhost/famTree');

//Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Routes
app.use("/api", require('./routes/api'));

app.listen(3000, function(){
	console.log("Running on 3000");
});