var path = require('path');
var mongoose = require('mongoose');
require('dotenv').config();

// Adding Models for Data Manipulation
var Admin = require('./src/models/Admin');
var Business = require('./src/models/Business');

var count = 0;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Setting up config for MongoDB (requires .env file in root folder to work in Development)
var mongoUrl = '';
mongoose.Promise = require('bluebird');
if (process.env.environment === 'development') {
  mongoUrl = 'mongodb://localhost:27017/plan-it';
} else {
  mongoUrl = process.env.mongoUrl;
}

// Mongoose connection with MongoDB
mongoose.connect(mongoUrl, {
  useMongoClient: true,
  promiseLibrary: require('bluebird')
})
.then(() => {
  console.log('');
  console.log('=======================================');
  console.log('Creating Database Entries:');
  console.log('=======================================');  
  console.log('');
  //=========================================
  //               Admin Tasks
  //========================================= 
  function buildAdmin() {
    console.log('');
    console.log('+++ Building Admin Table +++');
    console.log('');

    // Removing existing Admin Data
    Admin.remove({}, function (err, row) {
      if (err) {
        console.log("Collection couldn't be removed" + err);
        return;
      }
      console.log("--- Removing exisiting Admin Data ---");
    })
    //Adding an Admin to System
    var admins = new Array(2);
    admins[0] = new Admin({"admin": { "phone_no": "7894561203", "repass": "741852", "pass": "741852", "email": "15ucs173@lnmiit.ac.in", "name": "Yash Nag", "u_type": "admin"}});
    admins[1] = new Admin({"admin": { "phone_no": "7894561203", "repass": "qwerty", "pass": "qwerty", "email": "15ucs172@lnmiit.ac.in", "name": "Himesh Jain", "u_type": "admin"}});

    admins.forEach(function (admin, index, array) {
      admin.save().then(admin => {
          console.log('+++ Admin['+index+'] added successfully +++');
          count++;          
        })
        .catch(err => {
          console.error("Unable to save to database: ", err.stack);
        });
    });
    console.log('---------------------------------------');
  }

  //=========================================
  //               Business Tasks
  //========================================= 
  function buildBusiness() {
    console.log('');
    console.log('+++ Building Business Table +++');
    console.log('');

    // Removing existing Business Data
    Business.remove({}, function (err, row) {
      if (err) {
        console.log("Collection couldn't be removed" + err);
        return;
      }
      console.log("--- Removing exisiting Business Data ---");
    })
    //Adding an Business to System
    var businesses = new Array(2);
    businesses[0] = new Business({"business": { "phone_no": "7894561203", "repass": "741852", "pass": "741852", "email": "15ucs173@lnmiit.ac.in", "name": "Yash Nag", "u_type": "business"}});
    businesses[1] = new Business({"business": { "phone_no": "7894561203", "repass": "qwerty", "pass": "qwerty", "email": "15ucs172@lnmiit.ac.in", "name": "Himesh Jain", "u_type": "business"}});

    businesses.forEach(function (business, index, array) {
      business.save().then(business => {
          console.log('+++ Business['+index+'] added successfully +++');
          count++;
        })
        .catch(err => {
          console.error("Unable to save to database: ", err.stack);
          process.exit(1);
        });
    });
  }

  buildAdmin();
  buildBusiness();
  //=========================================
})
.catch(err => {
  console.error('Connection Error:', err.stack);
  process.exit(1);
})

// while(1==1) {
//   if (count == 4) {
//     mongoose.disconnect();
//   }
//   else {
//     await sleep(100);
//   }
// } 

