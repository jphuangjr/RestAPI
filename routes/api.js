//Dependencies

var express = require('express');
var router = express.Router();


//models
var Product = require('../models/family')


//routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/familys');


module.exports = router;