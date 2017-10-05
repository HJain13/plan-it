var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  user: {
    type: Object
  },

},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);