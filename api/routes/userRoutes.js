'use strict';
var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	MouthgaurdData = mongoose.model('MouthgaurdData');

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

  app.get('/data/:user',function(req,res){
  		MouthgaurdData.find({'user':req.params.user}, function (err,data){
		   if (err)
		     res.send(err);
		  console.log(data);
		  res.json(data);  			
  		  });
  		});

};