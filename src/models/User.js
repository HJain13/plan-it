var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Collection and Schema for Users (equivalent to New table and Table Structure in SQL based DB)
var User = new Schema({
  user: {
    //JSON Object
    type: Object
  },

},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);