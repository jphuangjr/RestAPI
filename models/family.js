//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var familySchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    phone_number: String,
    email: String,
    street_address: String,
    state_province: String,
    country: String,
    birthday: String,
    picture: String,
    created_date: {type: Date, default: Date.now}
});

module.exports = restful.model('Family', familySchema);
