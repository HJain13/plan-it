var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Collection and Schema for Packages (equivalent to New table and Table Structure in SQL based DB)
var Package = new Schema({
  business: {
    //JSON Object
    type: Object
  },
  package: {
    type: Object
  }
},{
    collection: 'packages'
});

module.exports = mongoose.model('Package', Package);