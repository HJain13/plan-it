var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();

// Mongoose connection with mongodb

var mongoUrl = '';
mongoose.Promise = require('bluebird');
if(process.env.environment === 'development'){
  mongoUrl = 'mongodb://localhost:27017/plan-it';
}
else {
  mongoUrl = process.env.mongoUrl;
}
mongoose.connect(mongoUrl)
.then(() => { // if all is ok we will be here
  console.log('Start');
})
    .catch(err => { // if error we will be here
      console.error('App starting error:', err.stack);
      process.exit(1);
    });
    
    // mongodb://admin:swe2017@ds147544.mlab.com:47544/plan-it
    
    // Required application specific custom router module
    var itemRouter = require('./src/routes/itemRouter');
    var userRouter = require('./src/routes/userRouter');
    
    // Use middlewares to set view engine and post json data to the server
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    app.use('/items', itemRouter);
    app.use('/users', userRouter);
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    
    const port = process.env.PORT || 3000;
    // Start the server
    app.listen(port, function(){
      console.log('Server is running on Port: ',port);
    });