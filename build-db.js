var path = require('path');
var mongoose = require('mongoose');
require('dotenv').config();

// Adding Models for Data Manipulation
var Admin = require('./src/models/Admin');
var Business = require('./src/models/Business');
var User = require('./src/models/User');
var Package = require('./src/models/Package');

var count = 0;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Setting up config for MongoDB (requires .env file in root folder to work in Development)
var mongoUrl = '';
mongoose.Promise = require('bluebird');
if (process.env.environment === 'development') {
  mongoUrl = 'mongodb://localhost:27017/plan-it';
} else if (process.env.environment === 'development-riya') {
  mongoUrl = 'mongodb://localhost:27016/plan-it';
}
else {
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
    count++;
    return new Promise((resolve, reject) => {
      console.log('+++ Building Admin Table +++');
      // Removing existing Admin Data
      Admin.remove({}, function (err, row) {
        if (err) {
          console.log("Collection couldn't be removed" + err);
          return;
        }
        console.log("--- Removing exisiting Admin Data ---");
      })
      .then( () => {
        //Adding an Admin to System
        var admins = new Array(2);
        admins[0] = new Admin({"admin": { "phone_no": "7894561203", "repass": "temp1234", "pass": "temp1234", "email": "15ucs173@lnmiit.ac.in", "name": "Yash Nag", "u_type": "admin"}});
        admins[1] = new Admin({"admin": { "phone_no": "7894561203", "repass": "qwerty", "pass": "qwerty", "email": "15ucs172@lnmiit.ac.in", "name": "Himesh Jain", "u_type": "admin"}});

        admins.forEach(function (admin, index, array) {
          admin.save().then(admin => {
              console.log('+++ Admin['+index+'] added successfully +++');
              resolve(admin);
              count++;
            })
          .catch(err => {
            console.error("Unable to save to database: ", err.stack);
          });
        });
      })
      resolve(count);
    });
  }

  //=========================================
  //               Business Tasks
  //=========================================
  function buildBusiness() {
    count++;
    return new Promise((resolve, reject) => {
      console.log('---------------------------------------');
      console.log('+++ Building Business Table +++');
      // Removing existing Business Data
      Business.remove({}, function (err, row) {
        if (err) {
          console.log("Collection couldn't be removed" + err);
          return;
        }
        console.log("--- Removing exisiting Business Data ---");
      })
      .then(() => {
        //Adding Businesses to System
        var businesses = new Array(10);
        businesses[0] = new Business({"business": {"name": "Kwimbee", "email": "manager@Kwimbee.com", "password": "abcd1234", "address": "167 Malviya Nagar, Jaipur", "bank_acc": "30218430182121", "manager_name": "Abhishek Agarwal", "phone_no": "+91 9812736452", "approved": "false"}});
        businesses[1] = new Business({"business": {"name": "DabZ", "email": "manager@DabZ.com", "password": "abcd1234", "address": "15/89 Mansarovar, Jaipur", "bank_acc": "19378430182129", "manager_name": "Yash Sharma", "phone_no": "+91 8174623512", "approved": "false"}});
        businesses[2] = new Business({"business": {"name": "Noriel", "email": "manager@Noriel.com", "password": "abcd1234", "address": "A012 Shantanu Nagar, Jaipur", "bank_acc": "49188430182123", "manager_name": "Varun Goyal", "phone_no": "+91 8762384712", "approved": "false"}});
        businesses[3] = new Business({"business": {"name": "Roodel", "email": "manager@Roodel.com", "password": "abcd1234", "address": "188/230 Transport Nagar, Jaipur", "bank_acc": "10298430182120", "manager_name": "Avinash Mathur", "phone_no": "+91 9273648162", "approved": "false"}});
        businesses[4] = new Business({"business": {"name": "TomoNow", "email": "manager@TomoNow.com", "password": "abcd1234", "address": "10 Arravali Nagar, Jaipur", "bank_acc": "31294301821232", "manager_name": "Riya Shrivastava", "phone_no": "+91 9876253614", "approved": "false"}});
        businesses.forEach(function (business, index, array) {
          business.save().then(business => {
              console.log('+++ Business['+index+'] added successfully +++');
              count++;
            })
            .catch(err => {
              console.error("Unable to save to database: ", err.stack);
              process.exit(1);
            });
        })
      })
      .then(() => {
        resolve(count);
      });
    });
  }

  function buildUser() {
    count++;
    return new Promise((resolve, reject) => {
      console.log('---------------------------------------');
      console.log('+++ Building User Table +++');
      // Removing existing User Data
      User.remove({}, function (err, row) {
        if (err) {
          console.log("Collection couldn't be removed" + err);
          return;
        }
        console.log("--- Removing exisiting User Data ---");
      })
      .then(() => {
        //Adding Users to System
        var users = new Array(10);
        users[0] = new User({"user": {"name": "Chaitanya Maheshwari", "email": "maheshwari@gmail.com", "password": "abcd1234", "address": "88/23 Triveni Nagar, Jaipur", "phone_no": "+91 9715267283", "age": "22", "gender": "Male"}});
        users[1] = new User({"user": {"name": "Marut Lahoty", "email": "lahoty@gmail.com", "password": "abcd1234", "address": "88/23 Triveni Nagar, Jaipur", "phone_no": "+91 7763849102", "age": "21", "gender": "Male"}});
        users[2] = new User({"user": {"name": "Namish Narayan", "email": "narayan@gmail.com", "password": "abcd1234", "address": "88/23 Triveni Nagar, Jaipur", "phone_no": "+91 8876941323", "age": "22", "gender": "Male"}});
        users[3] = new User({"user": {"name": "Vishal Jadoun", "email": "jadoun@gmail.com", "password": "abcd1234", "address": "88/23 Triveni Nagar, Jaipur", "phone_no": "+91 9746500091", "age": "20", "gender": "Male"}});
        users[4] = new User({"user": {"name": "Akash Negi", "email": "negi@gmail.com", "password": "abcd1234", "address": "88/23 Triveni Nagar, Jaipur", "phone_no": "+91 9746543256", "age": "18", "gender": "Male"}});
        users.forEach(function (user, index, array) {
          user.save().then(user => {
              console.log('+++ User['+index+'] added successfully +++');
              count++;
            })
            .catch(err => {
              console.error("Unable to save to database: ", err.stack);
              process.exit(1);
            });
        })
      })
      .then(() => {
        resolve(count);
      });
    });
  }

  function buildPackage() {
    count++;
    return new Promise((resolve, reject) => {
      console.log('---------------------------------------');
      console.log('+++ Building Package Table +++');
      // Removing existing Package Data
      Package.remove({}, function (err, row) {
        if (err) {
          console.log("Collection couldn't be removed" + err);
          return;
        }
        console.log("--- Removing exisiting Package Data ---");
      })
      .then(() => {
        //Adding Packages to System
        var packages = new Array(2);

            //Dining
            packages[0] = new Package({"package": {
                                        "p_type": "Dining",
                                        "b_email": "manager@noriel.com",
                                        "p_name": "Burger Shot",
                                        "location": "Jaipur",
                                        "specials": ["Burger","Fries", "Cold Drink"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "cost": "250"}
                                      });

            packages[1] = new Package({"package": {
                                        "p_type": "Dining",
                                        "b_email": "manager@TomoNow.com",
                                        "p_name": "Eat It!",
                                        "location": "Jaipur",
                                        "specials": ["Pizza", "Cold Drink"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "cost": "350"}
                                      });

            packages[2] = new Package({"package": {
                                        "p_type": "Dining",
                                        "b_email": "manager@TomoNow.com",
                                        "p_name": "Slingy Shot",
                                        "location": "Jaipur",
                                        "specials": ["Noodles","Pizza", "Cold Drink"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "cost": "500"}
                                      });
                                      
            packages[3] = new Package({"package": {
                                        "p_type": "Dining",
                                        "b_email": "manager@TomoNow.com",
                                        "p_name": "South Attack!",
                                        "location": "Jaipur",
                                        "specials": ["Dosa","Noodles","Cold Drink"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "cost": "300"}
                                      });

            packages[4] = new Package({"package": {
                                        "p_type": "Dining",
                                        "b_email": "manager@Roodel.com",
                                        "p_name": "Modern Desi Delicious",
                                        "location": "Jaipur",
                                        "specials": ["Paneer Butter Masala","Pizza"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "cost": "640"}
                                      });

            //Activity
            packages[5] = new Package({"package": {
                                          "p_type": "Activity",
                                          "b_email": "manager@Kwimbee.com",
                                          "p_name": "Adventurous Shoot",
                                          "location": "Jaipur",
                                          "specials": ["Paragliding","Hiking"],
                                          "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                          "cost": "4500"}
                                      });
            
            packages[6] = new Package({"package": {
                                        "p_type": "Activity",
                                        "b_email": "manager@DabZ.com",
                                        "p_name": "Jump of a Lifetime",
                                        "location": "Jaipur",
                                        "specials": ["Paragliding","Bungee Jumping"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "cost": "4500"}
                                      });

            packages[7] = new Package({"package": {
                                        "p_type": "Activity",
                                        "b_email": "manager@DabZ.com",
                                        "p_name": "Water Love",
                                        "location": "Jaipur",
                                        "specials": ["Surfing","Swimming"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "cost": "4500"}
                                      });
            
            packages[8] = new Package({"package": {
                                        "p_type": "Activity",
                                        "b_email": "manager@Kwimbee.com",
                                        "p_name": "Feel the Nature",
                                        "location": "Jaipur",
                                        "specials": ["Surfing","Hiking"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "cost": "4500"}
                                      });
            
            packages[9] = new Package({"package": {
                                        "p_type": "Activity",
                                        "b_email": "manager@TomoNow.com",
                                        "p_name": "Adrenaline Junkie",
                                        "location": "Jaipur",
                                        "specials": ["Paragliding","Bungee Jumping"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "cost": "4500"}
                                      });
            //Travel
            packages[10] = new Package({"package": {
                                        "p_type": "Activity",
                                        "b_email": "manager@Kwimbee.com",
                                        "p_name": "Singapore Trip",
                                        "location": "Jaipur",
                                        "specials": ["Paragliding","Bungee Jumping", "Burger", "Noodles"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "duration": "4 Days",
                                        "cost": "60000"}
                                      });

            packages[11] = new Package({"package": {
                                        "p_type": "Activity",
                                        "b_email": "manager@Kwimbee.com",
                                        "p_name": "Rishikesh Trip",
                                        "location": "Jaipur",
                                        "specials": ["Surfing","Swimming", "Dosa"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "duration": "5 Days",
                                        "cost": "15000"}
                                      });

            packages[12] = new Package({"package": {
                                        "p_type": "Activity",
                                        "b_email": "manager@DabZ.com",
                                        "p_name": "Paris Trip",
                                        "location": "Jaipur",
                                        "specials": ["Bungee Jumping","Hiking", "Pizza", "Noodles"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "duration": "3 Days",
                                        "cost": "75000"}
                                      });

            packages[13] = new Package({"package": {
                                        "p_type": "Activity",
                                        "b_email": "manager@DabZ.com",
                                        "p_name": "Dubai Trip",
                                        "location": "Jaipur",
                                        "specials": ["Paragliding","Hiking", "Burger"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "duration": "3 Days",
                                        "cost": "30000"}
                                      });

            packages[14] = new Package({"package": {
                                        "p_type": "Activity",
                                        "b_email": "manager@Noriel.com",
                                        "p_name": "Udaipur Trip",
                                        "location": "Jaipur",
                                        "specials": ["Surfing","Hiking", "Paneer Butter Masala"],
                                        "pictures": ["asdfasdf.jpg", "asdfasdfasdf.jpeg"],
                                        "duration": "7 Days",
                                        "cost": "20000"}
                                      });

        packages.forEach(function (package, index, array) {
          package.save().then(package => {
              console.log('+++ Package['+index+'] added successfully +++');
              count++;
            })
            .catch(err => {
              console.error("Unable to save to database: ", err.stack);
              process.exit(1);
            });
        })
      })
      .then(() => {
        resolve(count);
      });
    });
  }


  buildAdmin()
  .then( () => {
    buildBusiness()
    .then( () => {
      buildUser()
      .then( () => {
        buildPackage()
        .then( () => {
          mongoose.connection.close();
        })
      })
    })
  });
  //=========================================
})
.catch(err => {
  console.error('Connection Error:', err.stack);
  process.exit(1);
})
