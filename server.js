var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose=require('mongoose'),
  User=require('./api/models/UserModels'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://jcopela7:capstone123@ds225205.mlab.com:25205/capstone', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route

app.listen(port);


console.log('Capstone RESTful API server started on: ' + port);