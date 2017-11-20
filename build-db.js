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
        admins[0] = new Admin({"admin": { "phone_no": "7894561203", "repass": "741852", "pass": "741852", "email": "15ucs173@lnmiit.ac.in", "name": "Yash Nag", "u_type": "admin"}});
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
        //Adding an Business to System
        var businesses = new Array(10);
        businesses[0] = new Business({"business": {"name": "Tagchat","m_name": "Lona Dany","btype": "dining","email": "ldany0@nhs.uk","pass": "3YMRneG2","repass": "3YMRneG2","b_ac_no": "374622008407594","address": "50063 Monica Way","phone_no": "+86 191 679 5817","u_type": "business","approved": "false"}});
        businesses[1] = new Business({"business": {"name": "BlogXS","m_name": "Dale Cheson","btype": "activity","email": "dcheson1@yale.edu","pass": "2JHqUekvru","repass": "2JHqUekvru","b_ac_no": "30218430182123","address": "7441 Dunning Plaza","phone_no": "+48 660 537 1950","u_type": "business","approved": "true"}});    
        businesses[2] = new Business({"business": {"name": "Brainbox","m_name": "Janka Haddrill","btype": "dining","email": "jhaddrill2@comcast.net","pass": "doMzfM","repass": "doMzfM","b_ac_no": "5602222542010328","address": "022 Warrior Point","phone_no": "+1 917 175 8259","u_type": "business","approved": "false"}});    
        businesses[3] = new Business({"business": {"name": "Kwimbee","m_name": "Xymenes Bygate","btype": "activity","email": "xbygate3@aol.com","pass": "5inim3bqw1","repass": "5inim3bqw1","b_ac_no": "3544128315024915","address": "92068 8th Road","phone_no": "+93 753 919 6792","u_type": "business","approved": "true"}});    
        businesses[4] = new Business({"business": {"name": "DabZ", "m_name": "Darcey Delouch", "btype": "activity", "email": "ddelouch4@i2i.jp", "pass": "8uLWWRo9dB", "repass": "8uLWWRo9dB", "b_ac_no": "5134519731265630", "address": "256 Pleasure Court", "phone_no": "+230 763 465 1805", "u_type": "business", "approved": "true"}});    
        businesses[5] = new Business({"business": {"name": "Roodel", "m_name": "Carolin Farran", "btype": "dining", "email": "cfarran9@bing.com", "pass": "BlATCk16gM", "repass": "BlATCk16gM", "b_ac_no": "3588850746032988", "address": "2899 Barby Drive", "phone_no": "+51 891 587 2765", "u_type": "business", "approved": "flase"}});    
        businesses[6] = new Business({"business": {"name": "Twinder", "m_name": "Susana Cosin", "btype": "travel", "email": "scosin8@examiner.com", "pass": "dJzVExeRV", "repass": "dJzVExeRV", "b_ac_no": "3576445880295360", "address": "393 Manitowish Pass", "phone_no": "+86 581 922 4109", "u_type": "business", "approved": "true"}});    
        businesses[7] = new Business({"business": {"name": "Shuffledrive", "m_name": "Hamil Cabrara", "btype": "dining", "email": "hcabrara7@jimdo.com", "pass": "DNEbrF6yW", "repass": "DNEbrF6yW", "b_ac_no": "3587858521763397", "address": "2937 Coleman Drive", "phone_no": "+63 964 648 2108", "u_type": "business", "approved": "false"}});    
        businesses[8] = new Business({"business": {"name": "Skidoo", "m_name": "Urson Manning", "btype": "dining", "email": "umanning6@aol.com", "pass": "KJzvhrEO", "repass": "KJzvhrEO", "b_ac_no": "30067895485848", "address": "5983 Hanson Road", "phone_no": "+856 100 914 2931", "u_type": "business", "approved": "false"}});    
        businesses[9] = new Business({"business": {"name": "Vinder", "m_name": "Nikolaos Lascelles", "btype": "travel", "email": "nlascelles5@google.pl", "pass": "kbFppsiskRbm", "repass": "kbFppsiskRbm", "b_ac_no": "4026230823754465", "address": "5094 Lakewood Terrace", "phone_no": "+507 890 686 4971", "u_type": "business", "approved": "true"}});    
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
        //Adding an User to System
        var users = new Array(10);
        users[0] = new User({"user": {"name": "Tagchat","m_name": "Lona Dany","btype": "dining","email": "ldany0@nhs.uk","pass": "3YMRneG2","repass": "3YMRneG2","b_ac_no": "374622008407594","address": "50063 Monica Way","phone_no": "+86 191 679 5817","u_type": "user","approved": "false"}});
        users[1] = new User({"user": {"name": "BlogXS","m_name": "Dale Cheson","btype": "activity","email": "dcheson1@yale.edu","pass": "2JHqUekvru","repass": "2JHqUekvru","b_ac_no": "30218430182123","address": "7441 Dunning Plaza","phone_no": "+48 660 537 1950","u_type": "user","approved": "true"}});    
        users[2] = new User({"user": {"name": "Brainbox","m_name": "Janka Haddrill","btype": "dining","email": "jhaddrill2@comcast.net","pass": "doMzfM","repass": "doMzfM","b_ac_no": "5602222542010328","address": "022 Warrior Point","phone_no": "+1 917 175 8259","u_type": "user","approved": "false"}});    
        users[3] = new User({"user": {"name": "Kwimbee","m_name": "Xymenes Bygate","btype": "activity","email": "xbygate3@aol.com","pass": "5inim3bqw1","repass": "5inim3bqw1","b_ac_no": "3544128315024915","address": "92068 8th Road","phone_no": "+93 753 919 6792","u_type": "user","approved": "true"}});    
        users[4] = new User({"user": {"name": "DabZ", "m_name": "Darcey Delouch", "btype": "activity", "email": "ddelouch4@i2i.jp", "pass": "8uLWWRo9dB", "repass": "8uLWWRo9dB", "b_ac_no": "5134519731265630", "address": "256 Pleasure Court", "phone_no": "+230 763 465 1805", "u_type": "user", "approved": "true"}});    
        users[5] = new User({"user": {"name": "Roodel", "m_name": "Carolin Farran", "btype": "dining", "email": "cfarran9@bing.com", "pass": "BlATCk16gM", "repass": "BlATCk16gM", "b_ac_no": "3588850746032988", "address": "2899 Barby Drive", "phone_no": "+51 891 587 2765", "u_type": "user", "approved": "flase"}});    
        users[6] = new User({"user": {"name": "Twinder", "m_name": "Susana Cosin", "btype": "travel", "email": "scosin8@examiner.com", "pass": "dJzVExeRV", "repass": "dJzVExeRV", "b_ac_no": "3576445880295360", "address": "393 Manitowish Pass", "phone_no": "+86 581 922 4109", "u_type": "user", "approved": "true"}});    
        users[7] = new User({"user": {"name": "Shuffledrive", "m_name": "Hamil Cabrara", "btype": "dining", "email": "hcabrara7@jimdo.com", "pass": "DNEbrF6yW", "repass": "DNEbrF6yW", "b_ac_no": "3587858521763397", "address": "2937 Coleman Drive", "phone_no": "+63 964 648 2108", "u_type": "user", "approved": "false"}});    
        users[8] = new User({"user": {"name": "Skidoo", "m_name": "Urson Manning", "btype": "dining", "email": "umanning6@aol.com", "pass": "KJzvhrEO", "repass": "KJzvhrEO", "b_ac_no": "30067895485848", "address": "5983 Hanson Road", "phone_no": "+856 100 914 2931", "u_type": "user", "approved": "false"}});    
        users[9] = new User({"user": {"name": "Vinder", "m_name": "Nikolaos Lascelles", "btype": "travel", "email": "nlascelles5@google.pl", "pass": "kbFppsiskRbm", "repass": "kbFppsiskRbm", "b_ac_no": "4026230823754465", "address": "5094 Lakewood Terrace", "phone_no": "+507 890 686 4971", "u_type": "user", "approved": "true"}});    
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
        //Adding an Package to System
        var packages = new Array(2);
        packages[0] = new Package({"package" : {"name": "Lebua Resort", "brochure":"Wubba Lubba Dub Dub", "location":"Jaipur", "activity":"Swimming", "cost":"300", "ptype":"activity"}});
        packages[1] = new Package({"package" : {"name": "Hotel Ramada", "brochure":"I am in Pain", "location":"Jaipur", "activity":"Swimming", "cost":"400", "ptype":"activity"}});
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
