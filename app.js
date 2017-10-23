var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();

// Setting up config for MongoDB (requires .env file in root folder to work in Development)
var mongoUrl = '';
mongoose.Promise = require('bluebird');
if (process.env.environment === 'development') {
  mongoUrl = 'mongodb://localhost:27017/plan-it';
} else {
  mongoUrl = process.env.mongoUrl;
}

// Mongoose connection with MongoDB
mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Start');
  })
  .catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

// Required Routers to create API Routes
var adminRouter = require('./src/routes/adminRouter');
var userRouter = require('./src/routes/userRouter');
var businessRouter = require('./src/routes/businessRouter');

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Setting up Initial Routes
app.use('/api/users', userRouter);
app.use('/api/businesses', businessRouter);
app.use('/api/admins', adminRouter);

// Handling routing to React's Internal Router if the Path doesn't match above routes
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Defining PORT to start server on (requires .env file in root folder to work in Development)
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, function () {
  console.log('Server is running on Port: ', port);
});