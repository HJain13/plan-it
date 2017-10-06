var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Business = new Schema({
  business: {
    type: Object
  },

},{
    collection: 'businesses'
});

module.exports = mongoose.model('Business', Business);