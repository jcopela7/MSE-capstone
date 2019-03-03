'use strict';
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var UserSchema = new Schema({
    FirstName: String,
    LastName: String,
    weight: Number,
    age: Number,
    gender: String
},
    {
        collection: 'Users'
    });

module.exports = mongoose.model('User', UserSchema,'users');