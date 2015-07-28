//Dependencies

var express = require('express');
var router = express.Router();


//models
var Family = require('../models/family')


//routes
Family.methods(['get', 'put', 'post', 'delete']);
Family.register(router, '/families');


module.exports = router;