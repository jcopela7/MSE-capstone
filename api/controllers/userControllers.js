'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User');

exports.get_user = function(req, res) {
  console.log("Hello");
  // User.find({'FirstName': req.params.FirstName}, function(err, data) {
  //   if (err)
  //     res.send(err);
  //   console.log(data);
  //   res.json(data);
  // });	
};

exports.get_data = function(req, res) {
  console.log("World");
  // User.find({'FirstName': req.params.FirstName}, function(err, data) {
  //   if (err)
  //     res.send(err);
  //   console.log(data);
  //   res.json(data);
  // });	
};




