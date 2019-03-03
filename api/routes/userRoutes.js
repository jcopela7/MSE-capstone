'use strict';
var mongoose = require('mongoose'),
	User = mongoose.model('User');

module.exports = function(app) {
  //var UserList = require('../controllers/userControllers.js');

  // pullUpsList Routes
  app.get('/user/:FirstName',function(req,res){
		User.find({'FirstName': req.params.FirstName }, function(err, data) {
		   if (err)
		     res.send(err);
		  console.log(data);
		  res.json(data);
		  });
		});
};