'use strict';
module.exports = function(app) {
  var UserList = require('../controllers/userControllers');

  // pullUpsList Routes
  app.route('/User')
    .get(UserList.get_user);
  	//.post(UserList.User)
    //.post(pullUpsList.create_a_task);

  
};