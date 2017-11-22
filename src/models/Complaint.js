var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Collection and Schema for Complaints (equivalent to New table and Table Structure in SQL based DB)
var Complaint = new Schema({
   complaint: {
    type: Object
  }
},{
    collection: ' complaints'
});

module.exports = mongoose.model('Complaint', Complaint);