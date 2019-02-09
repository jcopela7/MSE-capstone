'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.get_user = function(req, res) {
	console.log("hello");
	console.log(req);
  User.find({'FirstName': "Jon"}, function(err, data) {
    if (err)
      res.send(err);
    console.log(data);
    res.json(data);
  });
};




