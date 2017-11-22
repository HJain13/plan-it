var express = require('express');
var app = express();
var complaintRouter = express.Router();

// Require Complaint model in our routes module
var Complaint = require('../models/Complaint');

// Defined store route
complaintRouter.route('/add/post').post(function (req, res) {
  console.log(req.body);
  var complaint = new Complaint(req.body);
      complaint.save()
    .then(complaint => {
    res.json('Complaint added successfully');
    })
    .catch(err => {
    res.status(400).send("Unable to save to database");
    });
});

complaintRouter.route('/findByEmail').get(function (req, res) {
  Complaint.findOne({'complaint.email': req.body.complaint.email}, 'complaint', function (err, itms) {
    if(err){
      console.log(err);
    }
    else {
      if(itms=="null") res.json("false");      
      else res.json("true");
    }
  });
});


// Defined get data(index or listing) route
complaintRouter.route('/').get(function (req, res) {
  Complaint.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      console.log("Hey");
      res.json(itms);
    }
  });
});

// Defined edit route
complaintRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Complaint.findById(id, function (err, complaint){
      res.json(complaint);
      console.log(complaint);
  });
});

//  Defined update route
complaintRouter.route('/update/:id').post(function (req, res) {
  Complaint.findById(req.params.id, function(err, complaintFound) {
    if (!complaintFound)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      complaintFound.complaint = req.body.complaint;
      complaintFound.save().then(complaint => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
complaintRouter.route('/delete/:id').get(function (req, res) {
  Complaint.findByIdAndRemove({_id: req.params.id},
       function(err, complaint){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = complaintRouter;