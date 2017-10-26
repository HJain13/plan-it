var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Collection and Schema for Businesses (equivalent to New table and Table Structure in SQL based DB)
var Business = new Schema({
  business: {
    //JSON Object
    type: Object
  },

},{
    collection: 'businesses'
});

module.exports = mongoose.model('Business', Business);