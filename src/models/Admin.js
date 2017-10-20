var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Collection and Schema for Admins (equivalent to New table and Table Structure in SQL based DB)
var Admin = new Schema({
  admin: {
    //JSON Object
    type: Object 
  },

},{
    collection: 'admins'
});

module.exports = mongoose.model('Admin', Admin);

