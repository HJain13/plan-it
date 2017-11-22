var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Collection and Schema for Businesses (equivalent to New table and Table Structure in SQL based DB)
var Helpline = new Schema({
  helpline: {
    //JSON Object
    type: Object
  },

},{
    collection: 'helplines'
});

module.exports = mongoose.model('Helpline', Helpline);