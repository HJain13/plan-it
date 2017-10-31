var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Collection and Schema for Packages (equivalent to New table and Table Structure in SQL based DB)
var Package = new Schema({
  package: {
    //JSON Object
    type: Object
  },

},{
    collection: 'packages'
});

module.exports = mongoose.model('Package', Package);