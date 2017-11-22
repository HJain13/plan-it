var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Collection and Schema for Orders (equivalent to New table and Table Structure in SQL based DB)
var Order = new Schema({
  order: {
    type: Object
  }
},{
    collection: 'orders'
});

module.exports = mongoose.model('Order', Order);