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
        collection: 'users'
    });

module.exports = mongoose.model('User', UserSchema);

var MouthgaurdData = new Schema({
    user: String,
    date: Date,
    time: Date,
    P1: Number,
    P2: Number,
    P3: Number,
    P4: Number,
    P5: Number,
    P6: Number,
	},
    {
        collection: 'data'
    });

module.exports = mongoose.model('MouthgaurdData', MouthgaurdData);
