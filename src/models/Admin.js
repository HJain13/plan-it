var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Admin = new Schema({
  admin: {
    type: Object
  },

},{
    collection: 'admins'
});

module.exports = mongoose.model('Admin', Admin);